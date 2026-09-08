// ====== CẬP NHẬT WEB APP URL CỦA BẠN VÀO ĐÂY ======
const API_URL = "https://script.google.com/macros/s/AKfycbxgJhPz7nwNVwkgh5AqLJaUN9TZKAuAaSUvZk3jpYR0gR8y6XX9YLTWIMIspGYYAZVy/exec"; 

// Hàm tạo "Mã vân tay thiết bị" để chống share pass
function getDeviceId() {
  let deviceId = localStorage.getItem('cobi_device_id');
  if (!deviceId) {
    deviceId = 'device_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    localStorage.setItem('cobi_device_id', deviceId);
  }
  return deviceId;
}

// --- Xử lý Đăng Nhập ---
window.onload = async function() {
  if(localStorage.getItem('cobi_auth') === 'true') {
    document.getElementById('login-screen').classList.add('hidden');
    await loadGameData();
  } else {
    document.getElementById('login-screen').classList.remove('hidden');
  }
};

async function checkLogin() {
  const pass = document.getElementById('pass-input').value.trim();
  const errorText = document.getElementById('login-error');
  const btn = document.getElementById('login-btn');

  if(!pass) return;

  btn.innerText = "Đang kiểm tra...";
  btn.disabled = true;
  errorText.classList.add('hidden');

  try {
    const deviceId = getDeviceId();
    const response = await fetch(API_URL + "?action=login&pass=" + encodeURIComponent(pass) + "&deviceId=" + encodeURIComponent(deviceId));
    const data = await response.json();

    if(data.status === "ok") {
      localStorage.setItem('cobi_auth', 'true');
      localStorage.setItem('cobi_student_name', data.name);
      document.getElementById('login-screen').classList.add('hidden');
      await loadGameData(); 
    } else if (data.status === "wrong_device") {
      errorText.innerText = "Lệnh bài này đã được sử dụng trên một thiết bị khác.";
      errorText.classList.remove('hidden');
    } else if (data.status === "locked") {
      errorText.innerText = "Lệnh bài đã bị khóa hoặc hết hạn.";
      errorText.classList.remove('hidden');
    } else {
      errorText.innerText = "Lệnh bài không chính xác.";
      errorText.classList.remove('hidden');
    }
  } catch (e) {
    errorText.innerText = "Mất kết nối với Tàng Kinh Các.";
    errorText.classList.remove('hidden');
  }

  btn.innerText = "Xác Nhận";
  btn.disabled = false;
}

// --- Tải Dữ Liệu Từ Google Sheets ---
let gameData = { lessons: [] };
async function loadGameData() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.remove('hidden');
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(API_URL + "?action=getData", { signal: controller.signal });
    clearTimeout(timeoutId);
    
    const res = await response.json();
    if(res.status === "ok") {
      gameData.lessons = res.data;
      loadingScreen.classList.add('hidden');
      document.getElementById('mode-select-screen').classList.remove('hidden');
    } else {
      alert("Lỗi từ Tàng Kinh Các: " + res.message);
      loadingScreen.classList.add('hidden');
    }
  } catch (e) {
    loadingScreen.classList.add('hidden');
    if (e.name === 'AbortError') {
      alert("Kết nối quá hạn! Vui lòng xóa bộ nhớ đệm (Clear cache) trình duyệt và thử lại.");
    } else {
      alert("Lỗi kết nối. Hãy kiểm tra lại API_URL.");
    }
  }
}

// --- Các biến và hàm hệ thống ---
let currentMode = 'lessons'; 
let currentLevel = null; 
let matchedCount = 0; 
let totalPairs = 0; 

function speakChinese(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; 
    utterance.rate = 0.8; 
    window.speechSynthesis.speak(utterance);
  }
}

function showScreen(screenId) {
  ['mode-select-screen', 'level-select-screen', 'game-select-screen', 'game-play-screen'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(screenId).classList.remove('hidden');
}

// --- Xử lý Chọn Chế độ (Gom nhóm thông minh theo tên bài) ---
function selectMode(mode) {
  currentMode = mode;
  const levelTitle = document.getElementById('level-title');
  const levelList = document.getElementById('level-list');
  levelList.innerHTML = ''; 

  if (mode === 'lessons') {
    levelTitle.innerText = "Luyện Khí Tĩnh Thất - Chọn Giáo Trình";

    let groups = {
      "Msutong Sơ Cấp Quyển 1": [],
      "Msutong Sơ Cấp Quyển 2": [],
      "HSK & Khác": []
    };

    gameData.lessons.forEach((item, index) => {
      const titleUpper = item.title.toUpperCase();
      if (titleUpper.includes("Q1") || titleUpper.includes("QUYỂN 1") || titleUpper.includes("MSUTONG 1")) {
        groups["Msutong Sơ Cấp Quyển 1"].push({ item, index });
      } else if (titleUpper.includes("Q2") || titleUpper.includes("QUYỂN 2") || titleUpper.includes("MSUTONG 2")) {
        groups["Msutong Sơ Cấp Quyển 2"].push({ item, index });
      } else {
        groups["HSK & Khác"].push({ item, index });
      }
    });

    Object.keys(groups).forEach(groupName => {
      if (groups[groupName].length > 0) {
        const groupDiv = document.createElement('div');
        groupDiv.className = "scroll-container p-5 mb-4 col-span-1 md:col-span-2";
        
        let htmlContent = `<h3 class="text-xl font-bold text-[#5c3d2e] mb-3 border-b-2 border-[#b7906c] pb-2">📜 ${groupName}</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-3">`;
        
        groups[groupName].forEach(g => {
          htmlContent += `
            <button onclick="selectLevel(${g.index})" class="p-3 bg-[#fefae0] border-2 border-[#b7906c] rounded text-left hover:bg-[#e0ac69] hover:text-white transition flex justify-between items-center shadow-sm">
              <div>
                <div class="font-bold">${g.item.title}</div>
                <div class="text-xs opacity-75">${g.item.words.length} từ | ${g.item.sentences.length} câu</div>
              </div>
              <span class="text-xl font-bold">→</span>
            </button>
          `;
        });
        
        htmlContent += `</div>`;
        groupDiv.innerHTML = htmlContent;
        levelList.appendChild(groupDiv);
      }
    });

  } else {
    levelTitle.innerText = "Cảnh Giới Tĩnh Thất - Đang bế關 tu luyện...";
  }

  showScreen('level-select-screen');
}

function selectLevel(index) {
  currentLevel = gameData.lessons[index];
  document.getElementById('selected-level-name').innerText = currentLevel.title;
  
  const hasSentences = currentLevel.sentences && currentLevel.sentences.length > 0;
  ['btn-game-2', 'btn-game-3'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      if (hasSentences) {
        btn.classList.remove('opacity-50', 'pointer-events-none');
      } else {
        btn.classList.add('opacity-50', 'pointer-events-none');
      }
    }
  });

  showScreen('game-select-screen');
}

function startGame(gameNumber) {
  showScreen('game-play-screen');
  document.getElementById('win-message').classList.add('hidden');
  document.getElementById('win-score-text').innerText = "";
  ['game1-area', 'game2-area', 'game3-area'].forEach(id => document.getElementById(id).classList.add('hidden'));
  matchedCount = 0; 
  if (gameNumber === 1) initGame1();
  else if (gameNumber === 2) initGame2();
  else if (gameNumber === 3) initGame3();
}

// ==============================================================================
// ==================== GAME 1: TỪ VỰNG =========================================
// ==============================================================================
let selectedG1 = null; 
function initGame1() {
  document.getElementById('game1-area').classList.remove('hidden');
  document.getElementById('game-status').innerText = "Game 1: Ghép Hán tự & Nghĩa";
  
  const colHanzi = document.getElementById('g1-col-hanzi');
  const colMeaning = document.getElementById('g1-col-meaning');
  colHanzi.innerHTML = ''; colMeaning.innerHTML = '';
  selectedG1 = null;

  let hanziCards = [];
  let meaningCards = [];

  currentLevel.words.forEach((w, idx) => {
    hanziCards.push({ id: idx, type: 'hanzi', content: w.hanzi, word: w });
    meaningCards.push({ id: idx, type: 'meaning', content: w.meaning, word: w });
  });

  hanziCards.sort(() => Math.random() - 0.5);
  meaningCards.sort(() => Math.random() - 0.5);
  totalPairs = currentLevel.words.length;

  hanziCards.forEach(card => colHanzi.appendChild(createG1Btn(card)));
  meaningCards.forEach(card => colMeaning.appendChild(createG1Btn(card)));
}

function createG1Btn(card) {
  const btn = document.createElement('button');
  btn.className = "w-full scroll-container p-4 text-xl md:text-2xl font-bold flex items-center justify-center min-h-[90px] text-center hover:scale-[1.02] hover:border-[#8b5e34] transition";
  btn.innerText = card.content;
  btn.onclick = () => {
    if (card.type === 'hanzi') speakChinese(card.word.hanzi);
    
    if (!selectedG1) {
      selectedG1 = { btn, card };
      btn.classList.add('selected');
    } else {
      if (selectedG1.btn === btn) {
        btn.classList.remove('selected');
        selectedG1 = null;
        return;
      }
      if (selectedG1.card.id === card.id && selectedG1.card.type !== card.type) {
        btn.classList.add('matched');
        selectedG1.btn.classList.add('matched');
        matchedCount++;
        if (matchedCount === totalPairs) checkWin();
      } else {
        selectedG1.btn.classList.remove('selected');
      }
      selectedG1 = null; 
    }
  };
  return btn;
}

// ==============================================================================
// ====================== GAME 2: NGHE & CHỌN CÂU ===============================
// ==============================================================================
let selectedG2 = { audio: null, hanzi: null };
function initGame2() {
  document.getElementById('game2-area').classList.remove('hidden');
  document.getElementById('game-status').innerText = "Game 2: Nghe Audio và nối Hán tự";

  selectedG2 = { audio: null, hanzi: null }; 
  const sentences = currentLevel.sentences || [];
  totalPairs = sentences.length;

  const colAudio = document.getElementById('g2-col-audio');
  const colHanzi = document.getElementById('g2-col-hanzi');

  colAudio.innerHTML = '<h4 class="font-bold text-lg md:text-xl mb-4 border-b-2 border-[#b7906c] pb-2 text-[#5c3d2e]">Nghe Câu</h4>';
  colHanzi.innerHTML = '<h4 class="font-bold text-lg md:text-xl mb-4 border-b-2 border-[#b7906c] pb-2 text-[#5c3d2e]">Chọn Hán Tự</h4>';

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  shuffle(sentences).forEach((s, idx) => {
    const btn = document.createElement('button');
    btn.className = "w-full scroll-container p-6 text-center text-xl font-bold flex items-center justify-center hover:border-[#8b5e34] transition";
    btn.innerHTML = `<span class="mr-2 text-2xl">🔊</span> Câu ${idx + 1}`; 
    btn.onclick = () => {
      speakChinese(s.hanzi); 
      if (selectedG2.audio) selectedG2.audio.btn.classList.remove('selected');
      selectedG2.audio = { btn, sentence: s };
      btn.classList.add('selected');
      checkG2Match(); 
    };
    colAudio.appendChild(btn);
  });

  shuffle(sentences).forEach(s => {
    const btn = document.createElement('button');
    btn.className = "w-full scroll-container p-5 text-center text-xl font-semibold hover:border-[#8b5e34] transition";
    btn.innerText = s.hanzi; 
    btn.onclick = () => {
      if (selectedG2.hanzi) selectedG2.hanzi.btn.classList.remove('selected');
      selectedG2.hanzi = { btn, sentence: s };
      btn.classList.add('selected');
      checkG2Match(); 
    };
    colHanzi.appendChild(btn);
  });
}

function checkG2Match() {
  if (selectedG2.audio && selectedG2.hanzi) {
    if (selectedG2.audio.sentence.hanzi === selectedG2.hanzi.sentence.hanzi) {
      selectedG2.audio.btn.classList.add('matched');
      selectedG2.hanzi.btn.classList.add('matched');
      matchedCount++;
      if (matchedCount === totalPairs) checkWin();
    } else {
      selectedG2.audio.btn.classList.remove('selected');
      selectedG2.hanzi.btn.classList.remove('selected');
    }
    selectedG2 = { audio: null, hanzi: null };
  }
}

// ==============================================================================
// ====================== GAME 3: VẤN ĐẠO THẤT (Khảo Thí Đánh Máy & Lưu Điểm) ===
// ==============================================================================
let g3Sentences = [];
let g3CurrentIndex = 0;
let g3Score = 0;
let g3CurrentIsAnswered = false;

function initGame3() {
  document.getElementById('game3-area').classList.remove('hidden');
  document.getElementById('game-status').innerText = "Game 3: Khảo Thí Đánh Máy";
  
  g3Sentences = [...currentLevel.sentences].sort(() => Math.random() - 0.5);
  g3CurrentIndex = 0;
  g3Score = 0;
  
  renderG3Question();
}

function renderG3Question() {
  g3CurrentIsAnswered = false;
  document.getElementById('g3-input').value = "";
  document.getElementById('g3-input').disabled = false;
  document.getElementById('g3-feedback').innerHTML = "";
  
  document.getElementById('g3-btn-check').classList.remove('hidden');
  document.getElementById('g3-btn-help').classList.remove('hidden');
  document.getElementById('g3-btn-next').classList.add('hidden');
  
  document.getElementById('g3-progress').innerText = `Câu ${g3CurrentIndex + 1}/${g3Sentences.length} | Điểm: ${g3Score}`;
  
  playG3Audio();
}

function playG3Audio() {
  speakChinese(g3Sentences[g3CurrentIndex].hanzi);
}

function checkG3Answer() {
  if (g3CurrentIsAnswered) return;
  
  const inputVal = document.getElementById('g3-input').value.trim();
  const formatText = (text) => text.replace(/[\s，。！？、,.\?\!]/g, ''); 
  
  const formattedInput = formatText(inputVal);
  const formattedAnswer = formatText(g3Sentences[g3CurrentIndex].hanzi);
  
  const feedback = document.getElementById('g3-feedback');

  if (formattedInput === formattedAnswer && formattedInput !== "") {
    feedback.innerHTML = `<span class="text-green-600">Tuyệt vời! Bạn đã đánh máy chính xác.</span>`;
    g3Score++;
    g3CurrentIsAnswered = true;
    document.getElementById('g3-input').disabled = true;
    
    document.getElementById('g3-btn-check').classList.add('hidden');
    document.getElementById('g3-btn-help').classList.add('hidden');
    document.getElementById('g3-btn-next').classList.remove('hidden');
    document.getElementById('g3-progress').innerText = `Câu ${g3CurrentIndex + 1}/${g3Sentences.length} | Điểm: ${g3Score}`;
  } else {
    feedback.innerHTML = `<span class="text-red-600">Chưa chính xác, hãy nghe lại và thử lại!</span>`;
    playG3Audio();
  }
}

function showG3Help() {
  if (g3CurrentIsAnswered) return;
  const correctAnswer = g3Sentences[g3CurrentIndex].hanzi;
  document.getElementById('g3-input').value = correctAnswer;
  document.getElementById('g3-input').disabled = true;
  document.getElementById('g3-feedback').innerHTML = `<span class="text-[#8b5e34]">Trợ giúp: Bạn không được cộng điểm câu này.</span>`;
  
  g3CurrentIsAnswered = true;
  document.getElementById('g3-btn-check').classList.add('hidden');
  document.getElementById('g3-btn-help').classList.add('hidden');
  document.getElementById('g3-btn-next').classList.remove('hidden');
}

function nextG3Question() {
  g3CurrentIndex++;
  if (g3CurrentIndex < g3Sentences.length) {
    renderG3Question();
  } else {
    finishGame3();
  }
}

function finishGame3() {
  document.getElementById('game3-area').classList.add('hidden');
  document.getElementById('win-message').classList.remove('hidden');
  
  const total = g3Sentences.length;
  document.getElementById('win-score-text').innerText = `Thành tích Khảo Thí: ${g3Score}/${total} câu`;
  
  const studentName = localStorage.getItem('cobi_student_name') || "Ẩn danh";
  const testName = currentLevel.title + " (Đánh Máy)";
  const scoreStr = `${g3Score}/${total}`;
  
  try {
    const saveUrl = API_URL + `?action=saveScore&name=${encodeURIComponent(studentName)}&testName=${encodeURIComponent(testName)}&score=${encodeURIComponent(scoreStr)}`;
    fetch(saveUrl, { mode: 'no-cors' }); 
  } catch (e) {
    console.warn("Lỗi đường truyền khi lưu điểm.");
  }
}

function checkWin() {
  setTimeout(() => {
    ['game1-area', 'game2-area', 'game3-area'].forEach(id => document.getElementById(id).classList.add('hidden'));
    document.getElementById('win-message').classList.remove('hidden');
  }, 600);
}
