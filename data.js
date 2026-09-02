const gameData = {
  // ==========================================
  // 1. LUYỆN KHÍ (Toàn bộ các bài Quyển 1 & Quyển 2)
  // ==========================================
  lessons: [
    {
      id: "q1_lesson_1",
      title: "Quyển 1 - BÀI 1",
      words: [
        { hanzi: "你", pinyin: "nǐ", meaning: "bạn / anh / chị" },
        { hanzi: "我", pinyin: "wǒ", meaning: "tôi / tớ" },
        { hanzi: "他", pinyin: "tā", meaning: "anh ấy / ông ấy" },
        { hanzi: "她", pinyin: "tā", meaning: "cô ấy / bà ấy" },
        { hanzi: "们", pinyin: "men", meaning: "hậu tố số nhiều" },
        { hanzi: "好", pinyin: "hǎo", meaning: "tốt / khỏe" },
        { hanzi: "再见", pinyin: "zài jiàn", meaning: "tạm biệt" },
        { hanzi: "老师", pinyin: "lǎo shī", meaning: "thầy / cô giáo" },
        { hanzi: "学生", pinyin: "xué sheng", meaning: "học sinh" },
        { hanzi: "同学", pinyin: "tóng xué", meaning: "bạn học" },
        { hanzi: "您", pinyin: "nín", meaning: "ngài (tôn kính)" },
        { hanzi: "早", pinyin: "zǎo", meaning: "sớm / sáng" },
        { hanzi: "请", pinyin: "qǐng", meaning: "mời / xin" },
        { hanzi: "问", pinyin: "wèn", meaning: "hỏi" },
        { hanzi: "谢谢", pinyin: "xiè xie", meaning: "cảm ơn" },
        { hanzi: "不客气", pinyin: "bú kèqi", meaning: "không có chi" },
        { hanzi: "对不起", pinyin: "duìbuqǐ", meaning: "xin lỗi" },
        { hanzi: "没关系", pinyin: "méi guānxi", meaning: "không sao" }
      ],
      sentences: [
        { hanzi: "你好！", pinyin: "nǐ hǎo!" },
        { hanzi: "谢谢老师。", pinyin: "xièxie lǎoshī." }
      ]
    },
    {
      id: "q1_lesson_2",
      title: "Quyển 1 - BÀI 2",
      words: [
        { hanzi: "零", pinyin: "líng", meaning: "số 0" },
        { hanzi: "一", pinyin: "yī", meaning: "số 1" },
        { hanzi: "二", pinyin: "èr", meaning: "số 2" },
        { hanzi: "三", pinyin: "sān", meaning: "số 3" },
        { hanzi: "四", pinyin: "sì", meaning: "số 4" },
        { hanzi: "五", pinyin: "wǔ", meaning: "số 5" },
        { hanzi: "六", pinyin: "liù", meaning: "số 6" },
        { hanzi: "七", pinyin: "qī", meaning: "số 7" },
        { hanzi: "八", pinyin: "bā", meaning: "số 8" },
        { hanzi: "九", pinyin: "jiǔ", meaning: "số 9" },
        { hanzi: "十", pinyin: "shí", meaning: "số 10" },
        { hanzi: "百", pinyin: "bǎi", meaning: "trăm" },
        { hanzi: "千", pinyin: "qiān", meaning: "nghìn" },
        { hanzi: "万", pinyin: "wàn", meaning: "vạn" },
        { hanzi: "电话", pinyin: "diànhuà", meaning: "điện thoại" },
        { hanzi: "号码", pinyin: "hàomǎ", meaning: "số" },
        { hanzi: "多少", pinyin: "duōshao", meaning: "bao nhiêu" }
      ],
      sentences: [
        { hanzi: "你的电话 多少？", pinyin: "nǐ de diànhuà duōshao?" }
      ]
    },
    // Bạn có thể mở rộng tiếp các bài từ file Excel tương ứng theo cấu trúc mảng này...
  ],

  // ==========================================
  // 2. CẢNH GIỚI (HSK 1, HSK 2, HSK 3)
  // ==========================================
  hsk: [
    {
      id: "hsk1",
      title: "Cảnh Giới HSK1 - Sơ Khái (初阶)",
      words: [
        { hanzi: "爱", pinyin: "ài", meaning: "yêu, thích" },
        { hanzi: "八", pinyin: "bā", meaning: "số 8" },
        { hanzi: "爸爸", pinyin: "bà ba", meaning: "bố" },
        { hanzi: "杯子", pinyin: "bēi zi", meaning: "cái cốc" },
        { hanzi: "北京", pinyin: "běi jīng", meaning: "Bắc Kinh" },
        { hanzi: "本", pinyin: "běn", meaning: "quyển, cuốn" },
        { hanzi: "不客气", pinyin: "bú kèqi", meaning: "không có chi" },
        { hanzi: "不", pinyin: "bù", meaning: "không" },
        { hanzi: "菜", pinyin: "cài", meaning: "món ăn, rau" },
        { hanzi: "茶", pinyin: "chá", meaning: "trà" },
        { hanzi: "吃", pinyin: "chī", meaning: "ăn" },
        { hanzi: "出租车", pinyin: "chūzūchē", meaning: "xe taxi" },
        { hanzi: "打电话", pinyin: "dǎ diànhuà", meaning: "gọi điện thoại" },
        { hanzi: "大", pinyin: "dà", meaning: "to, lớn" },
        { hanzi: "的", pinyin: "de", meaning: "của (trợ từ)" },
        { hanzi: "电脑", pinyin: "diànnǎo", meaning: "máy tính" },
        { hanzi: "电视", pinyin: "diànshì", meaning: "ti vi" },
        { hanzi: "电影", pinyin: "diànyǐng", meaning: "phim" },
        { hanzi: "东西", pinyin: "dōngxi", meaning: "đồ vật" },
        { hanzi: "都", pinyin: "dōu", meaning: "đều" }
      ],
      sentences: [
        { hanzi: "我爱我的妈妈。", pinyin: "wǒ ài wǒ de māma." }
      ]
    },
    {
      id: "hsk2",
      title: "Cảnh Giới HSK2 - Trúc Cơ (筑基)",
      words: [
        { hanzi: "吧", pinyin: "ba", meaning: "nhé, đi" },
        { hanzi: "白", pinyin: "bái", meaning: "màu trắng" },
        { hanzi: "百", pinyin: "bǎi", meaning: "trăm" },
        { hanzi: "帮助", pinyin: "bāngzhù", meaning: "giúp đỡ" },
        { hanzi: "报纸", pinyin: "bàozhǐ", meaning: "báo" },
        { hanzi: "比", pinyin: "bǐ", meaning: "so với" },
        { hanzi: "别", pinyin: "bié", meaning: "đừng" },
        { hanzi: "长", pinyin: "cháng", meaning: "dài" },
        { hanzi: "唱歌", pinyin: "chànggē", meaning: "hát" },
        { hanzi: "出", pinyin: "chū", meaning: "ra" }
      ],
      sentences: [
        { hanzi: "我们走吧。", pinyin: "wǒ men zǒu ba." }
      ]
    },
    {
      id: "hsk3",
      title: "Cảnh Giới HSK3 - Kim Đan (金丹)",
      words: [
        { hanzi: "阿姨", pinyin: "āyí", meaning: "dì, cô" },
        { hanzi: "啊", pinyin: "a", meaning: "à, ừ" },
        { hanzi: "矮", pinyin: "ǎi", meaning: "thấp" },
        { hanzi: "爱好", pinyin: "àihào", meaning: "sở thích" },
        { hanzi: "安静", pinyin: "ānjìng", meaning: "yên tĩnh" },
        { hanzi: "把", pinyin: "bǎ", meaning: "cầm, nắm" },
        { hanzi: "搬", pinyin: "bān", meaning: "dọn, chuyển" },
        { hanzi: "班", pinyin: "bān", meaning: "lớp" },
        { hanzi: "半", pinyin: "bàn", meaning: "một nửa" },
        { hanzi: "办法", pinyin: "bànfǎ", meaning: "biện pháp" }
      ],
      sentences: [
        { hanzi: "我的爱好是看书。", pinyin: "wǒ de ài hào shì kàn shū." }
      ]
    }
  ]
};
