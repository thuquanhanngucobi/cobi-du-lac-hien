const gameData = {
  // 1. LUYỆN KHÍ TĨNH THẤT (Theo Bài Học)
  lessons: [
    {
      id: "lesson_1",
      title: "Bài 1: Chào hỏi cơ bản",
      words: [
        { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "Xin chào" },
        { hanzi: "谢谢", pinyin: "xiè xie", meaning: "Cảm ơn" },
        { hanzi: "再见", pinyin: "zài jiàn", meaning: "Tạm biệt" },
        { hanzi: "老师", pinyin: "lǎo shī", meaning: "Thầy/Cô giáo" },
        { hanzi: "您", pinyin: "nín", meaning: "Ngài / Ông / Bà (trang trọng)" }
      ],
      sentences: [
        { hanzi: "你好，老师！", pinyin: "nǐ hǎo, lǎo shī!" },
        { hanzi: "您好！", pinyin: "nín hǎo!" },
        { hanzi: "不客气。", pinyin: "bú kè qi." }
      ]
    },
    {
      id: "lesson_2",
      title: "Bài 2: Số đếm và Ngày tháng",
      words: [
        { hanzi: "一", pinyin: "yī", meaning: "Số 1" },
        { hanzi: "二", pinyin: "èr", meaning: "Số 2" },
        { hanzi: "三", pinyin: "sān", meaning: "Số 3" },
        { hanzi: "月", pinyin: "yuè", meaning: "Tháng / Mặt trăng" },
        { hanzi: "号", pinyin: "hào", meaning: "Ngày / Số" }
      ],
      sentences: [
        { hanzi: "今天是几月几号？", pinyin: "jīn tiān shì jǐ yuè jǐ hào?" },
        { hanzi: "一月一号。", pinyin: "yī yuè yī hào." }
      ]
    }
    // Thêm các bài học khác vào đây theo cấu trúc trên
  ],

  // 2. CẢNH GIỚI TĨNH THẤT (Theo Cấp độ HSK)
  hsk: [
    {
      id: "hsk_1",
      title: "HSK 1 - Cảnh giới Sơ Khái (初阶)",
      words: [
        { hanzi: "爱", pinyin: "ài", meaning: "Yêu" },
        { hanzi: "八", pinyin: "bā", meaning: "Số 8" },
        { hanzi: "爸爸", pinyin: "bà ba", meaning: "Bố" },
        { hanzi: "杯子", pinyin: "bēi zi", meaning: "Cái cốc" },
        { hanzi: "北京", pinyin: "běi jīng", meaning: "Bắc Kinh" }
      ],
      sentences: [] // HSK 1 thường chưa cần luyện nghe câu dài phức tạp
    },
    {
      id: "hsk_2",
      title: "HSK 2 - Cảnh giới Trúc Cơ (筑基)",
      words: [
        { hanzi: "准备", pinyin: "zhǔn bèi", meaning: "Chuẩn bị" },
        { hanzi: "运动", pinyin: "yùn dòng", meaning: "Vận động / Thể thao" },
        { hanzi: "游泳", pinyin: "yóu yǒng", meaning: "Bơi lội" },
        { hanzi: "机场", pinyin: "jī chǎng", meaning: "Sân bay" }
      ],
      sentences: [
        { hanzi: "我们要去机场。", pinyin: "wǒ men yào qù jī chǎng." },
        { hanzi: "他喜欢游泳。", pinyin: "tā xǐ huān yóu yǒng." }
      ]
    }
    // Thêm các cấp độ HSK khác vào đây (HSK 3, 4, 5, 6)
  ]
};