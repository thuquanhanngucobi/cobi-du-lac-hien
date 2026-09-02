// Biến toàn cục để quản lý trạng thái game
let currentMode = null; // 'lessons' hoặc 'hsk'
let currentLevel = null; // Dữ liệu của bài/cấp độ đang chọn
let selectedG1 = null; // Card đang được chọn trong Game 1
let selectedG2 = { pinyin: null, meaning: null, hanzi: null }; // 3 card đang chọn trong Game 2
let selectedG3 = { audio: null, hanzi: null }; // 2 card đang chọn trong Game 3
let matchedCount = 0; // Số cặp đã ghép đúng
let totalPairs = 0; // Tổng số cặp cần ghép

// --- Xử lý Âm thanh (Web Speech API) ---
// Tự động phát âm tiếng Trung chuẩn bằng trình duyệt
function speakChinese(text) {
  if ('speechSynthesis' in window) {
    // Hủy các phát âm đang chờ để tránh đè âm
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; // Ngôn ngữ: Tiếng Trung giản thể
    utterance.rate = 0.8; // Tốc độ nói (0.8 là hơi chậm, dễ nghe)
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Trình duyệt của bạn không hỗ trợ phát âm (Web Speech API).");
  }
}

// --- Xử lý Chuyển đổi Màn hình ---
function showScreen(screenId) {
  // Ẩn tất cả các màn hình
  ['mode-select-screen', 'level-select-screen', 'game-select-screen', 'game-play-screen'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  // Hiển thị màn hình được yêu cầu
  document.getElementById(screenId).classList.remove('hidden');
}

// --- Xử lý Chọn Chế độ (Game Mode) ---
function selectMode(mode) {
  currentMode = mode;
  const levelTitle = document.getElementById('level-title');
  const levelList = document.getElementById('level-list');
  levelList.innerHTML = ''; // Xóa danh sách cũ

  const modeData = gameData[mode];
  if (!modeData) return;

  // Tiêu đề màn hình
  levelTitle.innerText = mode === 'lessons' ? "Luyện Khí Tĩnh Thất - Chọn Bài Học" : "Cảnh Giới Tĩnh Thất - Chọn Cấp Độ HSK";

  // Tạo danh sách bài học/cấp độ (Hiển thị dạng cuộn sách nhỏ)
  modeData.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.className = "scroll-container p-5 text-left flex justify-between items-center hover:border-amber-800";
    btn.onclick = () => selectLevel(index);
    btn.innerHTML = `
      <div>
        <div class="font-bold text-lg">${item.title}</div>
        <div class="text-xs text-amber-900/70">${item.words.length} từ vựng</div>
      </div>
      <span class="text-amber-800 text-2xl">→</span>
    `;
    levelList.appendChild(btn);
  });
  showScreen('level-select-screen');
}

// --- Xử lý Chọn Bài / Cấp độ cụ thể ---
function selectLevel(index) {
  currentLevel = gameData[currentMode][index];
  document.getElementById('selected-level-name').innerText = currentLevel.title;
  
  // Logic kiểm tra xem Game 3 (Câu) có dữ liệu không
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

// --- Khởi tạo Game ---
function startGame(gameNumber) {
  showScreen('game-play-screen');
  document.getElementById('win-message').classList.add('hidden');
  // Ẩn tất cả khu vực chơi game
  ['game1-area', 'game2-area', 'game3-area'].forEach(id => document.getElementById(id).classList.add('hidden'));

  matchedCount = 0; // Reset số cặp đã ghép

  // Khởi tạo game tương ứng
  if (gameNumber === 1) initGame1();
  else if (gameNumber === 2) initGame2();
  else if (gameNumber === 3) initGame3();
}

// ==============================================================================
// ==================== GAME 1: LINH THẠCH GHÉP CẶP =====================
// ==============================================================================
function initGame1() {
  document.getElementById('game1-area').classList.remove('hidden');
  document.getElementById('game-status').innerText = "Game 1: Ghép cặp Hán tự & Nghĩa/Audio";
  
  const container = document.getElementById('g1-cards');
  container.innerHTML = ''; // Xóa card cũ
  selectedG1 = null;

  let cards = [];
  // Tạo 2 loại card cho mỗi từ: Hán tự và Nghĩa
  currentLevel.words.forEach((w, idx) => {
    cards.push({ id: idx, type: 'hanzi', content: w.hanzi, word: w });
    cards.push({ id: idx, type: 'meaning', content: w.meaning, word: w });
  });

  // Trộn bài ngẫu nhiên
  cards.sort(() => Math.random() - 0.5);
  totalPairs = currentLevel.words.length;

  // Tạo các button card và chèn vào lưới
  cards.forEach((card) => {
    const btn = document.createElement('button');
    btn.className = "scroll-container p-6 text-xl font-bold flex items-center justify-center min-h-[110px] text-center hover:scale-105 transition-transform duration-200";
    btn.innerText = card.content;
    btn.onclick = () => handleG1Click(btn, card);
    container.appendChild(btn);
  });
}

function handleG1Click(btn, card) {
  // Phát âm khi click vào card Hán tự
  if (card.type === 'hanzi') speakChinese(card.word.hanzi);
  
  // Chưa có card nào được chọn
  if (!selectedG1) {
    selectedG1 = { btn, card };
    btn.classList.add('selected'); // Đánh dấu đã chọn
  } else {
    // Click lại vào chính card đó -> Bỏ chọn
    if (selectedG1.btn === btn) {
      btn.classList.remove('selected');
      selectedG1 = null;
      return;
    }

    // Kiểm tra xem 2 card có phải là một cặp (cùng ID) nhưng khác loại (Hanzi vs Meaning)
    if (selectedG1.card.id === card.id && selectedG1.card.type !== card.type) {
      // ĐÚNG: Ẩn cặp card
      btn.classList.add('matched');
      selectedG1.btn.classList.add('matched');
      matchedCount++;
      // Kiểm tra xem đã thắng chưa
      if (matchedCount === totalPairs) checkWin();
    } else {
      // SAI: Bỏ đánh dấu card trước đó
      selectedG1.btn.classList.remove('selected');
    }
    selectedG1 = null; // Reset card đang chọn
  }
}

// ==============================================================================
// ====================== GAME 2: TAM BẢO NỐI TỪ =========================
// ==============================================================================
function initGame2() {
  document.getElementById('game2-area').classList.remove('hidden');
  document.getElementById('game-status').innerText = "Game 2: Nối 3 cột Pinyin - Tiếng Việt - Hán tự";
  
  selectedG2 = { pinyin: null, meaning: null, hanzi: null }; // Reset trạng thái chọn
  totalPairs = currentLevel.words.length;

  const colPinyin = document.getElementById('g2-col-pinyin');
  const colMeaning = document.getElementById('g2-col-meaning');
  const colHanzi = document.getElementById('g2-col-hanzi');

  // Xóa dữ liệu cũ và chèn tiêu đề cột
  colPinyin.innerHTML = '<h4 class="font-bold text-lg mb-3">Pinyin</h4>';
  colMeaning.innerHTML = '<h4 class="font-bold text-lg mb-3">Nghĩa</h4>';
  colHanzi.innerHTML = '<h4 class="font-bold text-lg mb-3">Hán Tự</h4>';

  // Hàm trộn danh sách
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  // Tạo và trộn card cho 3 cột
  shuffle(currentLevel.words).forEach(w => colPinyin.appendChild(createG2Btn(w.pinyin, 'pinyin', w)));
  shuffle(currentLevel.words).forEach(w => colMeaning.appendChild(createG2Btn(w.meaning, 'meaning', w)));
  shuffle(currentLevel.words).forEach(w => colHanzi.appendChild(createG2Btn(w.hanzi, 'hanzi', w)));
}

// Hàm tạo button card cho Game 2
function createG2Btn(text, type, word) {
  const btn = document.createElement('button');
  btn.className = `w-full scroll-container p-3 text-sm text-center font-semibold hover:border-amber-800 transition`;
  btn.innerText = text;
  
  btn.onclick = () => {
    // Phát âm khi click vào Hán tự
    if (type === 'hanzi') speakChinese(word.hanzi);

    // Unselect card cũ trong CÙNG cột
    if (selectedG2[type]) selectedG2[type].btn.classList.remove('selected');

    // Đánh dấu card mới được chọn
    selectedG2[type] = { btn, word };
    btn.classList.add('selected');

    // Kiểm tra xem đã chọn đủ 3 cột chưa
    if (selectedG2.pinyin && selectedG2.meaning && selectedG2.hanzi) {
      // Kiểm tra xem 3 card có cùng ID (cùng 1 từ) không
      if (selectedG2.pinyin.word.hanzi === selectedG2.meaning.word.hanzi && 
          selectedG2.meaning.word.hanzi === selectedG2.hanzi.word.hanzi) {
        
        // ĐÚNG: Ẩn cả 3 card
        selectedG2.pinyin.btn.classList.add('matched');
        selectedG2.meaning.btn.classList.add('matched');
        selectedG2.hanzi.btn.classList.add('matched');

        matchedCount++;
        // Kiểm tra xem đã thắng chưa
        if (matchedCount === totalPairs) checkWin();
      } else {
        // SAI: Bỏ đánh dấu cả 3 card
        selectedG2.pinyin.btn.classList.remove('selected');
        selectedG2.meaning.btn.classList.remove('selected');
        selectedG2.hanzi.btn.classList.remove('selected');
      }
      // Reset trạng thái chọn cho lượt tiếp theo
      selectedG2 = { pinyin: null, meaning: null, hanzi: null };
    }
  };
  return btn;
}

// ==============================================================================
// ====================== GAME 3: THÍNH ÂM TẦM CÂU ========================
// ==============================================================================
function initGame3() {
  document.getElementById('game3-area').classList.remove('hidden');
  document.getElementById('game-status').innerText = "Game 3: Nghe Audio câu và nối Hán tự";

  selectedG3 = { audio: null, hanzi: null }; // Reset trạng thái chọn
  const sentences = currentLevel.sentences || [];
  totalPairs = sentences.length;

  const colAudio = document.getElementById('g3-col-audio');
  const colHanzi = document.getElementById('g3-col-hanzi');

  // Tiêu đề cột
  colAudio.innerHTML = '<h4 class="font-bold text-lg mb-3">Phát Âm (Click nghe)</h4>';
  colHanzi.innerHTML = '<h4 class="font-bold text-lg mb-3">Câu Hán Tự</h4>';

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  // Tạo và trộn card cho 2 cột: Audio (Nút loa) và Hán tự (Văn bản)
  shuffle(sentences).forEach((s, idx) => {
    // Cột Audio
    const btn = document.createElement('button');
    btn.className = "w-full scroll-container p-4 text-center text-lg flex items-center justify-center hover:border-amber-800 transition";
    btn.innerHTML = `<span>🔊 Câu ${idx + 1}</span>`; // Hiển thị số thứ tự câu
    
    btn.onclick = () => {
      speakChinese(s.hanzi); // Phát âm câu tiếng Trung
      // Xử lý chọn card
      if (selectedG3.audio) selectedG3.audio.btn.classList.remove('selected');
      selectedG3.audio = { btn, sentence: s };
      btn.classList.add('selected');
      checkG3Match(); // Kiểm tra ghép cặp
    };
    colAudio.appendChild(btn);
  });

  shuffle(sentences).forEach(s => {
    // Cột Hán tự
    const btn = document.createElement('button');
    btn.className = "w-full scroll-container p-4 text-left font-semibold hover:border-amber-800 transition";
    btn.innerText = s.hanzi; // Hiển thị câu Hán tự
    
    btn.onclick = () => {
      // Xử lý chọn card
      if (selectedG3.hanzi) selectedG3.hanzi.btn.classList.remove('selected');
      selectedG3.hanzi = { btn, sentence: s };
      btn.classList.add('selected');
      checkG3Match(); // Kiểm tra ghép cặp
    };
    colHanzi.appendChild(btn);
  });
}

// Kiểm tra ghép cặp cho Game 3
function checkG3Match() {
  if (selectedG3.audio && selectedG3.hanzi) {
    // Kiểm tra xem card Audio và Hán tự có cùng ID câu không
    if (selectedG3.audio.sentence.hanzi === selectedG3.hanzi.sentence.hanzi) {
      // ĐÚNG: Ẩn cặp card
      selectedG3.audio.btn.classList.add('matched');
      selectedG3.hanzi.btn.classList.add('matched');
      matchedCount++;
      // Kiểm tra xem đã thắng chưa
      if (matchedCount === totalPairs) checkWin();
    } else {
      // SAI: Bỏ đánh dấu cả 2 card
      selectedG3.audio.btn.classList.remove('selected');
      selectedG3.hanzi.btn.classList.remove('selected');
    }
    // Reset trạng thái chọn
    selectedG3 = { audio: null, hanzi: null };
  }
}

// --- Xử lý Chiến thắng ---
function checkWin() {
  // Thêm độ trễ nhỏ để người dùng kịp thấy card cuối cùng biến mất
  setTimeout(() => {
    // Ẩn tất cả khu vực chơi game
    ['game1-area', 'game2-area', 'game3-area'].forEach(id => document.getElementById(id).classList.add('hidden'));
    // Hiển thị màn hình Win
    document.getElementById('win-message').classList.remove('hidden');
  }, 600);
}