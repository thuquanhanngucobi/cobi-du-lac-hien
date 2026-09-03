// ====== CẬP NHẬT LINK GOOGLE APPS SCRIPT CỦA BẠN VÀO ĐÂY ======
const API_URL = "URL_CỦA_BẠN_Ở_ĐÂY"; 

// --- Xử lý Đăng Nhập ---
window.onload = function() {
  if(localStorage.getItem('cobi_auth') === 'true') {
    document.getElementById('login-screen').classList.add('hidden');
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
    const response = await fetch(API_URL + "?pass=" + encodeURIComponent(pass));
    const data = await response.json();

    if(data.status === "ok") {
      localStorage.setItem('cobi_auth', 'true');
      localStorage.setItem('cobi_student_name', data.name);
      document.getElementById('login-screen').classList.add('hidden');
    } else if (data.status === "locked") {
      errorText.innerText = "Lệnh bài đã bị khóa hoặc hết hạn.";
      errorText.classList.remove('hidden');
    } else {
      errorText.innerText = "Lệnh bài không chính xác.";
      errorText.classList.remove('hidden');
    }
  } catch (e) {
    errorText.innerText = "Mất kết nối, vui lòng thử lại sau.";
    errorText.classList.remove('hidden');
  }

  btn.innerText = "Xác Nhận";
  btn.disabled = false;
}

// Biến toàn cục để quản lý trạng thái game
let currentMode = null; 
let currentLevel = null; 
let selectedG1 = null; 
let selectedG2 = { pinyin: null, meaning: null, hanzi: null }; 
let selectedG3 = { audio: null, hanzi: null }; 
let matchedCount = 0; 
let totalPairs = 0; 

// --- Xử lý Âm thanh (Web Speech API) ---
function speakChinese(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; 
    utterance.rate = 0.8; 
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Trình duyệt không hỗ trợ phát âm.");
  }
}

// --- Xử lý Chuyển đổi Màn hình ---
function showScreen(screenId) {
  ['mode-select-screen', 'level-select-screen', 'game-select-screen', 'game-play-screen'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(screenId).classList.remove('hidden');
}

// --- Xử lý Chọn Chế độ ---
function selectMode(mode) {
  currentMode = mode;
  const levelTitle = document.getElementById('level-title');
  const levelList = document.getElementById('level-list');
  levelList.innerHTML = ''; 

  const modeData = gameData[mode];
  if (!modeData) return;

  levelTitle.innerText = mode === 'lessons' ? "Luyện Khí Tĩnh Thất - Chọn Bài Học" : "Cảnh Giới Tĩnh Thất - Chọn Cấp Độ HSK";

  modeData.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.className = "scroll-container p-5 text-left flex justify-between items-center hover:border-[#8b5e34] hover:shadow-md transition";
    btn.onclick = () => selectLevel(index);
    btn.innerHTML = `
      <div>
        <div class="font-bold text-xl">${item.title}</div>
        <div class="text-sm text-[#7f5539] mt-1">${item.words.length} từ vựng</div>
      </div>
      <span class="text-[#8b5e34] text-2xl font-bold">→</span>
    `;
    levelList.appendChild(btn);
  });
  showScreen('level-select-screen');
}

// --- Xử lý Chọn Bài ---
function selectLevel(index) {
  currentLevel = gameData[currentMode][index];
  document.getElementById('selected-level-name').innerText = currentLevel.title;
  
  const btnGame3 = document.getElementById('btn-game-3');
  const hasSentences = currentLevel.sentences && currentLevel.sentences.length > 0;
  
  if (hasSentences) {
    btnGame3.classList.remove('opacity-50', 'pointer-events-none');
    btnGame3.title = "Luyện nghe và nối câu tiếng Trung.";
  } else {
    btnGame3.classList.add('opacity-50', 'pointer-events-none');
    btnGame3.title = "Bài học này chưa có dữ liệu câu.";
  }

  showScreen('game-select-screen');
}

function startGame(gameNumber) {
  showScreen('game-play-screen');
  document.getElementById('win-message').classList.add('hidden');
  ['game1-area', 'game2-area', 'game3-area'].forEach(id => document.getElementById(id).classList.add('hidden'));
  matchedCount = 0; 
  if (gameNumber === 1) initGame1();
  else if (gameNumber === 2) initGame2();
  else if (gameNumber === 3) initGame3();
}

// ==============================================================================
// ==================== GAME 1: LINH THẠCH GHÉP CẶP ===========================
// ==============================================================================
function initGame1() {
  document.getElementById('game1-area').classList.remove('hidden');
  document.getElementById('game-status').innerText = "Game 1: Ghép Hán tự & Nghĩa";
  
  const colHanzi = document.getElementById('g1-col-hanzi');
  const colMeaning = document.getElementById('g1-col-meaning');
  colHanzi.innerHTML = '';
  colMeaning.innerHTML = '';
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
  btn.className = "w-full scroll-container p-4 text-xl md:text-2xl font-bold flex items-center justify-center min-h-[90px] text-center hover:scale-[1.02] hover:border-[#8b5e34] transition-all duration-200";
  btn.innerText = card.content;
  btn.onclick = () => handleG1Click(btn, card);
  return btn;
}

function handleG1Click(btn, card) {
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
}

// ==============================================================================
// ====================== GAME 2: TAM BẢO NỐI TỪ ==============================
// ==============================================================================
function initGame2() {
  document.getElementById('game2-area').classList.remove('hidden');
  document.getElementById('game-status').innerText = "Game 2: Nối Hán tự - Pinyin - Nghĩa";
  
  selectedG2 = { pinyin: null, meaning: null, hanzi: null }; 
  totalPairs = currentLevel.words.length;

  const colHanzi = document.getElementById('g2-col-hanzi');
  const colPinyin = document.getElementById('g2-col-pinyin');
  const colMeaning = document.getElementById('g2-col-meaning');

  colHanzi.innerHTML = '<h4 class="font-bold text-lg md:text-xl mb-4 border-b-2 border-[#b7906c] pb-2 text-[#5c3d2e]">Hán Tự</h4>';
  colPinyin.innerHTML = '<h4 class="font-bold text-lg md:text-xl mb-4 border-b-2 border-[#b7906c] pb-2 text-[#5c3d2e]">Pinyin</h4>';
  colMeaning.innerHTML = '<h4 class="font-bold text-lg md:text-xl mb-4 border-b-2 border-[#b7906c] pb-2 text-[#5c3d2e]">Nghĩa</h4>';

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  shuffle(currentLevel.words).forEach(w => colHanzi.appendChild(createG2Btn(w.hanzi, 'hanzi', w)));
  shuffle(currentLevel.words).forEach(w => colPinyin.appendChild(createG2Btn(w.pinyin, 'pinyin', w)));
  shuffle(currentLevel.words).forEach(w => colMeaning.appendChild(createG2Btn(w.meaning, 'meaning', w)));
}

function createG2Btn(text, type, word) {
  const btn = document.createElement('button');
  btn.className = `w-full scroll-container p-3 text-base md:text-lg font-semibold hover:border-[#8b5e34] transition`;
  if (type === 'hanzi') btn.classList.add('text-xl'); 
  btn.innerText = text;
  
  btn.onclick = () => {
    if (type === 'hanzi') speakChinese(word.hanzi);

    if (selectedG2[type]) selectedG2[type].btn.classList.remove('selected');

    selectedG2[type] = { btn, word };
    btn.classList.add('selected');

    if (selectedG2.pinyin && selectedG2.meaning && selectedG2.hanzi) {
      if (selectedG2.pinyin.word.hanzi === selectedG2.meaning.word.hanzi && 
          selectedG2.meaning.word.hanzi === selectedG2.hanzi.word.hanzi) {
        
        selectedG2.pinyin.btn.classList.add('matched');
        selectedG2.meaning.btn.classList.add('matched');
        selectedG2.hanzi.btn.classList.add('matched');
        matchedCount++;
        if (matchedCount === totalPairs) checkWin();
      } else {
        selectedG2.pinyin.btn.classList.remove('selected');
        selectedG2.meaning.btn.classList.remove('selected');
        selectedG2.hanzi.btn.classList.remove('selected');
      }
      selectedG2 = { pinyin: null, meaning: null, hanzi: null };
    }
  };
  return btn;
}

// ==============================================================================
// ====================== GAME 3: THÍNH ÂM TẦM CÂU ============================
// ==============================================================================
function parseG3Sentence(rawText) {
  const chineseMatches = rawText.match(/[\u4e00-\u9fa5，。！？、0-9]+/g);
  const chineseOnly = chineseMatches ? chineseMatches.join('') : rawText;

  let display = rawText;
  const matchPinyinFirst = rawText.match(/^(.*?)[\(（]([\u4e00-\u9fa5，。！？、0-9]+)[\)）](.*)$/);
  if (matchPinyinFirst) {
    display = matchPinyinFirst[2] + matchPinyinFirst[3]; 
  } else {
    const firstHanzi = rawText.search(/[\u4e00-\u9fa5]/);
    if (firstHanzi > 0) {
      const beforeStr = rawText.substring(0, firstHanzi);
      if (/[a-zA-Z]/.test(beforeStr)) {
        display = rawText.substring(firstHanzi); 
      }
    }
  }

  display = display.replace(/^[\)）\s\-]+/, '');
  display = display.replace(/[\(（][a-zA-Z\s\dōōóòǒōāáǎàēéěèīíǐìūúǔùǖǘǚǜü]+[\)）]/g, '');

  return { chineseOnly, display };
}

function initGame3() {
  document.getElementById('game3-area').classList.remove('hidden');
  document.getElementById('game-status').innerText = "Game 3: Nghe Audio và nối Hán tự";

  selectedG3 = { audio: null, hanzi: null }; 
  const sentences = currentLevel.sentences || [];
  totalPairs = sentences.length;

  const colAudio = document.getElementById('g3-col-audio');
  const colHanzi = document.getElementById('g3-col-hanzi');

  colAudio.innerHTML = '<h4 class="font-bold text-lg md:text-xl mb-4 border-b-2 border-[#b7906c] pb-2 text-[#5c3d2e]">Phát Âm Tiếng Trung</h4>';
  colHanzi.innerHTML = '<h4 class="font-bold text-lg md:text-xl mb-4 border-b-2 border-[#b7906c] pb-2 text-[#5c3d2e]">Câu Hán Tự & Nghĩa</h4>';

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  shuffle(sentences).forEach((s, idx) => {
    const parsed = parseG3Sentence(s.hanzi);
    
    const btn = document.createElement('button');
    btn.className = "w-full scroll-container p-6 text-center text-xl font-bold flex items-center justify-center hover:border-[#8b5e34] transition";
    btn.innerHTML = `<span class="mr-2 text-2xl">🔊</span> Câu ${idx + 1}`; 
    
    btn.onclick = () => {
      speakChinese(parsed.chineseOnly); 
      
      if (selectedG3.audio) selectedG3.audio.btn.classList.remove('selected');
      selectedG3.audio = { btn, sentence: s };
      btn.classList.add('selected');
      checkG3Match(); 
    };
    colAudio.appendChild(btn);
  });

  shuffle(sentences).forEach(s => {
    const parsed = parseG3Sentence(s.hanzi);

    const btn = document.createElement('button');
    btn.className = "w-full scroll-container p-5 text-left text-lg font-semibold hover:border-[#8b5e34] transition leading-relaxed";
    btn.innerText = parsed.display; 
    
    btn.onclick = () => {
      if (selectedG3.hanzi) selectedG3.hanzi.btn.classList.remove('selected');
      selectedG3.hanzi = { btn, sentence: s };
      btn.classList.add('selected');
      checkG3Match(); 
    };
    colHanzi.appendChild(btn);
  });
}

function checkG3Match() {
  if (selectedG3.audio && selectedG3.hanzi) {
    if (selectedG3.audio.sentence.hanzi === selectedG3.hanzi.sentence.hanzi) {
      selectedG3.audio.btn.classList.add('matched');
      selectedG3.hanzi.btn.classList.add('matched');
      matchedCount++;
      if (matchedCount === totalPairs) checkWin();
    } else {
      selectedG3.audio.btn.classList.remove('selected');
      selectedG3.hanzi.btn.classList.remove('selected');
    }
    selectedG3 = { audio: null, hanzi: null };
  }
}

// --- Xử lý Chiến thắng ---
function checkWin() {
  setTimeout(() => {
    ['game1-area', 'game2-area', 'game3-area'].forEach(id => document.getElementById(id).classList.add('hidden'));
    document.getElementById('win-message').classList.remove('hidden');
  }, 600);
}
