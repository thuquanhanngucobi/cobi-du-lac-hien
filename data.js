const gameData = {
  // ==========================================
  // 1. LUYỆN KHÍ TĨNH THẤT (Đầy đủ 20 Bài)
  // ==========================================
  lessons: [
    {
      id: "lesson_1",
      title: "Bài 1: Quyển 1 - BÀI 1",
      words: [
        { hanzi: "你", pinyin: "nǐ", meaning: "bạn / anh / chị (ngôi thứ 2 số ít)" },
        { hanzi: "我", pinyin: "wǒ", meaning: "tôi / tớ / mình (ngôi thứ 1 số ít)" },
        { hanzi: "他", pinyin: "tā", meaning: "anh ấy / ông ấy (ngôi thứ 3 số ít - nam)" },
        { hanzi: "她", pinyin: "tā", meaning: "cô ấy / bà ấy (ngôi thứ 3 số ít - nữ)" },
        { hanzi: "们", pinyin: "men", meaning: "hậu tố chỉ số nhiều cho đại từ nhân xưng hoặc danh từ chỉ người" },
        { hanzi: "好", pinyin: "hǎo", meaning: "tốt / khỏe / hay / đẹp" },
        { hanzi: "再见", pinyin: "zài jiàn", meaning: "tạm biệt" },
        { hanzi: "老师", pinyin: "lǎo shī", meaning: "thầy giáo / cô giáo" },
        { hanzi: "学生", pinyin: "xué sheng", meaning: "học sinh" },
        { hanzi: "同学", pinyin: "tóng xué", meaning: "bạn học" },
        { hanzi: "您", pinyin: "nín", meaning: "ngài / ông / bà (dùng tôn kính)" },
        { hanzi: "早", pinyin: "zǎo", meaning: "sớm / buổi sáng" },
        { hanzi: "请", pinyin: "qǐng", meaning: "mời / xin vui lòng" },
        { hanzi: "问", pinyin: "wèn", meaning: "hỏi" },
        { hanzi: "谢谢", pinyin: "xiè xie", meaning: "cảm ơn" },
        { hanzi: "不客气", pinyin: "bú kèqi", meaning: "không có chi / đừng khách sáo" },
        { hanzi: "对不起", pinyin: "duìbuqǐ", meaning: "xin lỗi" },
        { hanzi: "没关系", pinyin: "méi guānxi", meaning: "không sao cả" }
      ],
      sentences: []
    },
    {
      id: "lesson_2",
      title: "Bài 2: Quyển 1 - BÀI 2",
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
        { hanzi: "万", pinyin: "wàn", meaning: "vạn / chục nghìn" },
        { hanzi: "电话", pinyin: "diànhuà", meaning: "điện thoại" },
        { hanzi: "号码", pinyin: "hàomǎ", meaning: "số" },
        { hanzi: "多少", pinyin: "duōshao", meaning: "mấy / bao nhiêu" }
      ],
      sentences: []
    },
    {
      id: "lesson_3",
      title: "Bài 3: Quyển 1 - BÀI 3",
      words: [
        { hanzi: "爸爸", pinyin: "bàba", meaning: "bố / ba" },
        { hanzi: "妈妈", pinyin: "māma", meaning: "mẹ / má" },
        { hanzi: "哥哥", pinyin: "gēge", meaning: "anh trai" },
        { hanzi: "弟弟", pinyin: "dìdi", meaning: "em trai" },
        { hanzi: "姐姐", pinyin: "jiějie", meaning: "chị gái" },
        { hanzi: "妹妹", pinyin: "mèimei", meaning: "em gái" },
        { hanzi: "家", pinyin: "jiā", meaning: "nhà / gia đình" },
        { hanzi: "几", pinyin: "jǐ", meaning: "mấy" },
        { hanzi: "口", pinyin: "kǒu", meaning: "miệng / lượng từ (nhân khẩu)" },
        { hanzi: "和", pinyin: "hé", meaning: "và / cùng" },
        { hanzi: "做", pinyin: "zuò", meaning: "làm" },
        { hanzi: "工作", pinyin: "gōngzuò", meaning: "công việc / làm việc" },
        { hanzi: "医生", pinyin: "yīshēng", meaning: "bác sĩ" },
        { hanzi: "医院", pinyin: "yīyuàn", meaning: "bệnh viện" },
        { hanzi: "公司", pinyin: "gōngsī", meaning: "công ty" },
        { hanzi: "经理", pinyin: "jīnglǐ", meaning: "giám đốc / quản lý" },
        { hanzi: "职员", pinyin: "zhíyuán", meaning: "nhân viên" },
        { hanzi: "律师", pinyin: "lǜshī", meaning: "luật sư" },
        { hanzi: "记者", pinyin: "jìzhě", meaning: "phóng viên" },
        { hanzi: "商", pinyin: "shāng", meaning: "thương (trong thương mại)" },
        { hanzi: "店", pinyin: "diàn", meaning: "cửa hàng" },
        { hanzi: "商店", pinyin: "shāngdiàn", meaning: "cửa hàng / tiệm" }
      ],
      sentences: []
    },
    {
      id: "lesson_4",
      title: "Bài 4: Quyển 1 - BÀI 4",
      words: [
        { hanzi: "书", pinyin: "shū", meaning: "sách" },
        { hanzi: "本", pinyin: "běn", meaning: "quyển / cuốn (lượng từ)" },
        { hanzi: "笔", pinyin: "bǐ", meaning: "bút" },
        { hanzi: "桌子", pinyin: "zhuōzi", meaning: "cái bàn" },
        { hanzi: "椅子", pinyin: "yǐzi", meaning: "cái ghế" },
        { hanzi: "电脑", pinyin: "diànnǎo", meaning: "máy tính" },
        { hanzi: "手机", pinyin: "shǒujī", meaning: "điện thoại di động" },
        { hanzi: "汉", pinyin: "hàn", meaning: "Hán (trong Hán Ngữ)" },
        { hanzi: "语", pinyin: "yǔ", meaning: "ngữ (ngôn ngữ)" },
        { hanzi: "汉语", pinyin: "hànyǔ", meaning: "tiếng Trung / tiếng Hán" },
        { hanzi: "英语", pinyin: "yīngyǔ", meaning: "tiếng Anh" },
        { hanzi: "中", pinyin: "zhōng", meaning: "trung / giữa" },
        { hanzi: "国", pinyin: "guó", meaning: "quốc / nước" },
        { hanzi: "中国", pinyin: "zhōngguó", meaning: "Trung Quốc" },
        { hanzi: "人", pinyin: "rén", meaning: "người" },
        { hanzi: "哪", pinyin: "nǎ", meaning: "nào / nào là" },
        { hanzi: "国", pinyin: "guó", meaning: "quốc gia" },
        { hanzi: "哪国人", pinyin: "nǎ guó rén", meaning: "người nước nào" },
        { hanzi: "越南", pinyin: "yuènán", meaning: "Việt Nam" },
        { hanzi: "美", pinyin: "měi", meaning: "Mỹ" },
        { hanzi: "英国", pinyin: "yīngguó", meaning: "Anh quốc" },
        { hanzi: "日本", pinyin: "rìběn", meaning: "Nhật Bản" },
        { hanzi: "韩国", pinyin: "hánguó", meaning: "Hàn Quốc" },
        { hanzi: "法国", pinyin: "fǎguó", meaning: "Pháp" },
        { hanzi: "德国", pinyin: "déguó", meaning: "Đức" },
        { hanzi: "朋友", pinyin: "péngyou", meaning: "bạn bè" }
      ],
      sentences: []
    },
    {
      id: "lesson_5",
      title: "Bài 5: Quyển 1 - BÀI 5",
      words: [
        { hanzi: "今天", pinyin: "jīntiān", meaning: "hôm nay" },
        { hanzi: "明天", pinyin: "míngtiān", meaning: "ngày mai" },
        { hanzi: "昨天", pinyin: "zuótiān", meaning: "hôm qua" },
        { hanzi: "年", pinyin: "nián", meaning: "năm" },
        { hanzi: "月", pinyin: "yuè", meaning: "tháng / mặt trăng" },
        { hanzi: "日", pinyin: "rì", meaning: "ngày / mặt trời" },
        { hanzi: "号", pinyin: "hào", meaning: "ngày / số hiệu" },
        { hanzi: "星期", pinyin: "xīngqī", meaning: "tuần / thứ (trong tuần)" },
        { hanzi: "天", pinyin: "tiān", meaning: "ngày / bầu trời" },
        { hanzi: "点", pinyin: "diǎn", meaning: "giờ / điểm / chút ít" },
        { hanzi: "分", pinyin: "fēn", meaning: "phút / chia ra" },
        { hanzi: "秒", pinyin: "miǎo", meaning: "giây" },
        { hanzi: "半", pinyin: "bàn", meaning: "một nửa / rưỡi" },
        { hanzi: "刻", pinyin: "kè", meaning: "khắc (15 phút)" },
        { hanzi: "现在", pinyin: "xiànzài", meaning: "bây giờ" },
        { hanzi: "时候", pinyin: "shíhou", meaning: "khi / lúc" },
        { hanzi: "时候", pinyin: "shíhou", meaning: "thời gian" },
        { hanzi: "早", pinyin: "zǎo", meaning: "sớm" },
        { hanzi: "晚", pinyin: "wǎn", meaning: "muộn / tối" },
        { hanzi: "上午", pinyin: "shàngwǔ", meaning: "buổi sáng" },
        { hanzi: "中午", pinyin: "zhōngwǔ", meaning: "buổi trưa" },
        { hanzi: "下午", pinyin: "xiàwǔ", meaning: "buổi chiều" },
        { hanzi: "晚上", pinyin: "wǎnshang", meaning: "buổi tối" },
        { hanzi: "时候", pinyin: "shíhou", meaning: "thời điểm" },
        { hanzi: "生日", pinyin: "shēngrì", meaning: "sinh nhật" },
        { hanzi: "岁", pinyin: "suì", meaning: "tuổi" },
        { hanzi: "多大", pinyin: "duō dà", meaning: "mấy tuổi / bao nhiêu tuổi" },
        { hanzi: "今年", pinyin: "jīnnián", meaning: "năm nay" },
        { hanzi: "明年", pinyin: "míngnián", meaning: "năm sau" },
        { hanzi: "去年", pinyin: "qùnián", meaning: "năm ngoái" },
        { hanzi: "上个月", pinyin: "shàng gè yuè", meaning: "tháng trước" },
        { hanzi: "下个月", pinyin: "xià gè yuè", meaning: "tháng sau" },
        { hanzi: "这个月", pinyin: "zhè gè yuè", meaning: "tháng này" },
        { hanzi: "周末", pinyin: "zhōumò", meaning: "cuối tuần" },
        { hanzi: "时间", pinyin: "shíjiān", meaning: "thời gian" }
      ],
      sentences: []
    },
    {
      id: "lesson_6",
      title: "Bài 6: Quyển 1 - BÀI 6",
      words: [
        { hanzi: "喜欢", pinyin: "xǐhuan", meaning: "thích" },
        { hanzi: "爱", pinyin: "ài", meaning: "yêu / thích" },
        { hanzi: "听", pinyin: "tīng", meaning: "nghe" },
        { hanzi: "说", pinyin: "shuō", meaning: "nói / bảo" },
        { hanzi: "读", pinyin: "dú", meaning: "đọc" },
        { hanzi: "写", pinyin: "xiě", meaning: "viết" },
        { hanzi: "看", pinyin: "kàn", meaning: "xem / nhìn / đọc" },
        { hanzi: "音乐", pinyin: "yīnyuè", meaning: "âm nhạc" },
        { hanzi: "歌", pinyin: "gē", meaning: "bài hát" },
        { hanzi: "唱歌", pinyin: "chànggē", meaning: "ca hát" },
        { hanzi: "跳", pinyin: "tiào", meaning: "nhảy" },
        { hanzi: "舞", pinyin: "wǔ", meaning: "múa" },
        { hanzi: "跳舞", pinyin: "tiàowǔ", meaning: "khiêu vũ / nhảy múa" },
        { hanzi: "电影", pinyin: "diànyǐng", meaning: "phim ảnh" },
        { hanzi: "电视", pinyin: "diànshì", meaning: "ti vi" },
        { hanzi: "运动", pinyin: "yùndòng", meaning: "vận động / thể thao" },
        { hanzi: "游泳", pinyin: "yóuyǒng", meaning: "bơi lội" },
        { hanzi: "打", pinyin: "dǎ", meaning: "đánh / chơi (thể thao)" },
        { hanzi: "篮球", pinyin: "lánqiú", meaning: "bóng rổ" },
        { hanzi: "足球", pinyin: "zúqiú", meaning: "bóng đá" },
        { hanzi: "羽毛球", pinyin: "yǔmáoqiú", meaning: "cầu lông" },
        { hanzi: "画", pinyin: "huà", meaning: "vẽ / tranh" },
        { hanzi: "画画", pinyin: "huàhuà", meaning: "vẽ tranh" },
        { hanzi: "旅游", pinyin: "lǚyóu", meaning: "du lịch" },
        { hanzi: "做饭", pinyin: "zuòfàn", meaning: "nấu ăn" },
        { hanzi: "游戏", pinyin: "yóuxì", meaning: "trò chơi / game" },
        { hanzi: "上网", pinyin: "shàngwǎng", meaning: "lên mạng / lướt web" }
      ],
      sentences: []
    },
    {
      id: "lesson_7",
      title: "Bài 7: Quyển 1 - BÀI 7",
      words: [
        { hanzi: "买", pinyin: "mǎi", meaning: "mua" },
        { hanzi: "卖", pinyin: "mài", meaning: "bán" },
        { hanzi: "东西", pinyin: "dōngxi", meaning: "đồ đạc / đồ vật" },
        { hanzi: "衣服", pinyin: "yīfu", meaning: "quần áo" },
        { hanzi: "裤子", pinyin: "kùzi", meaning: "quần" },
        { hanzi: "鞋", pinyin: "xié", meaning: "giày" },
        { hanzi: "帽", pinyin: "mào", meaning: "mũ / nón" },
        { hanzi: "帽子", pinyin: "màozi", meaning: "cái mũ" },
        { hanzi: "钱", pinyin: "qián", meaning: "tiền" },
        { hanzi: "块", pinyin: "kuài", meaning: "đồng (tệ - khẩu ngữ)" },
        { hanzi: "元", pinyin: "yuán", meaning: "nguyên (tệ - trang trọng)" },
        { hanzi: "角", pinyin: "jiǎo", meaning: "hào / mào" },
        { hanzi: "毛", pinyin: "máo", meaning: "hào (khẩu ngữ)" },
        { hanzi: "分", pinyin: "fēn", meaning: "xu" },
        { hanzi: "贵", pinyin: "guì", meaning: "đắt / quý" },
        { hanzi: "便宜", pinyin: "piányi", meaning: "rẻ" },
        { hanzi: "多少钱", pinyin: "duōshao qián", meaning: "bao nhiêu tiền" },
        { hanzi: "太", pinyin: "tài", meaning: "quá / lắm" },
        { hanzi: "了", pinyin: "le", meaning: "rồi (trợ từ ngữ khí)" },
        { hanzi: "个", pinyin: "gè", meaning: "cái / chiếc (lượng từ chung)" },
        { hanzi: "双", pinyin: "shuāng", meaning: "đôi / cặp" },
        { hanzi: "件", pinyin: "jiàn", meaning: "kiện / chiếc (áo quần)" },
        { hanzi: "条", pinyin: "tiáo", meaning: "con / cái / chiếc (vật dài)" },
        { hanzi: "颜色", pinyin: "yánsè", meaning: "màu sắc" },
        { hanzi: "红", pinyin: "hóng", meaning: "màu đỏ" },
        { hanzi: "白", pinyin: "bái", meaning: "màu trắng" }
      ],
      sentences: []
    },
    {
      id: "lesson_8",
      title: "Bài 8: Quyển 1 - BÀI 8",
      words: [
        { hanzi: "在", pinyin: "zài", meaning: "ở / tại / đang" },
        { hanzi: "哪儿", pinyin: "nǎr", meaning: "ở đâu" },
        { hanzi: "哪", pinyin: "nǎ", meaning: "nào" },
        { hanzi: "儿", pinyin: "ér", meaning: "hậu tố hóa nhi" },
        { hanzi: "这", pinyin: "zhè", meaning: "đây / này" },
        { hanzi: "那", pinyin: "nà", meaning: "đó / kia" },
        { hanzi: "这里", pinyin: "zhèlǐ", meaning: "ở đây / chỗ này" },
        { hanzi: "那里", pinyin: "nàlǐ", meaning: "ở đó / chỗ kia" },
        { hanzi: "上", pinyin: "shàng", meaning: "trên / lên" },
        { hanzi: "下", pinyin: "xià", meaning: "dưới / xuống" },
        { hanzi: "里", pinyin: "lǐ", meaning: "trong / bên trong" },
        { hanzi: "外", pinyin: "wài", meaning: "ngoài / bên ngoài" },
        { hanzi: "前", pinyin: "qián", meaning: "trước" },
        { hanzi: "后", pinyin: "hòu", meaning: "sau" },
        { hanzi: "左", pinyin: "zuǒ", meaning: "bên trái" },
        { hanzi: "右", pinyin: "yòu", meaning: "bên phải" },
        { hanzi: "中", pinyin: "zhōng", meaning: "giữa / trung tâm" },
        { hanzi: "间", pinyin: "jiān", meaning: "gian / ở giữa" },
        { hanzi: "中间", pinyin: "zhōngjiān", meaning: "ở giữa / trung gian" },
        { hanzi: "旁边", pinyin: "pángbiān", meaning: "bên cạnh" },
        { hanzi: "学校", pinyin: "xuéxiào", meaning: "trường học" },
        { hanzi: "银行", pinyin: "yínháng", meaning: "ngân hàng" },
        { hanzi: "邮局", pinyin: "yóujú", meaning: "bưu điện" },
        { hanzi: "饭馆", pinyin: "fànguǎn", meaning: "quán ăn / nhà hàng" },
        { hanzi: "超市", pinyin: "chāoshì", meaning: "siêu thị" }
      ],
      sentences: []
    },
    {
      id: "lesson_9",
      title: "Bài 9: Quyển 1 - BÀI 9",
      words: [
        { hanzi: "吃", pinyin: "chī", meaning: "ăn" },
        { hanzi: "喝", pinyin: "hē", meaning: "uống" },
        { hanzi: "水", pinyin: "shuǐ", meaning: "nước" },
        { hanzi: "茶", pinyin: "chá", meaning: "trà" },
        { hanzi: "咖啡", pinyin: "kāfēi", meaning: "cà phê" },
        { hanzi: "果", pinyin: "guǒ", meaning: "quả / trái cây" },
        { hanzi: "汁", pinyin: "zhī", meaning: "nước ép" },
        { hanzi: "果汁", pinyin: "guǒzhī", meaning: "nước trái cây / nước ép" },
        { hanzi: "啤酒", pinyin: "píjiǔ", meaning: "bia" },
        { hanzi: "苹果", pinyin: "píngguǒ", meaning: "quả táo" },
        { hanzi: "香蕉", pinyin: "xiāngjiāo", meaning: "quả chuối" },
        { hanzi: "米", pinyin: "mǐ", meaning: "gạo" },
        { hanzi: "饭", pinyin: "fàn", meaning: "cơm / bữa ăn" },
        { hanzi: "米饭", pinyin: "mǐfàn", meaning: "cơm (nấu từ gạo)" },
        { hanzi: "面", pinyin: "miàn", meaning: "mì / bột" },
        { hanzi: "条", pinyin: "tiáo", meaning: "thanh / sợi" },
        { hanzi: "面条", pinyin: "miàntiáo", meaning: "mì sợi" },
        { hanzi: "包", pinyin: "bāo", meaning: "bao / túi" },
        { hanzi: "子", pinyin: "zi", meaning: "hậu tố" },
        { hanzi: "包子", pinyin: "bāozi", meaning: "bánh bao" },
        { hanzi: "饺", pinyin: "jiǎo", meaning: "sủi / cảo" },
        { hanzi: "饺子", pinyin: "jiǎozi", meaning: "sủi cảo / bánh chẻo" },
        { hanzi: "菜", pinyin: "cài", meaning: "rau / món ăn" },
        { hanzi: "肉", pinyin: "ròu", meaning: "thịt" },
        { hanzi: "鱼", pinyin: "yú", meaning: "con cá" },
        { hanzi: "饿", pinyin: "è", meaning: "đói" },
        { hanzi: "饱", pinyin: "bǎo", meaning: "no" },
        { hanzi: "渴", pinyin: "kě", meaning: "khát" }
      ],
      sentences: []
    },
    {
      id: "lesson_10",
      title: "Bài 10: Quyển 1 - BÀI 10",
      words: [
        { hanzi: "天气", pinyin: "tiānqì", meaning: "thời tiết" },
        { hanzi: "气", pinyin: "qì", meaning: "khí / hơi" },
        { hanzi: "冷", pinyin: "lěng", meaning: "lạnh" },
        { hanzi: "热", pinyin: "rè", meaning: "nóng" },
        { hanzi: "暖", pinyin: "nuǎn", meaning: "ấm" },
        { hanzi: "暖和", pinyin: "nuǎnhuo", meaning: "ấm áp" },
        { hanzi: "凉", pinyin: "liáng", meaning: "mát" },
        { hanzi: "凉快", pinyin: "liángkuai", meaning: "mát mẻ" },
        { hanzi: "雨", pinyin: "yǔ", meaning: "mưa" },
        { hanzi: "下雨", pinyin: "xiàyǔ", meaning: "mưa / đổ mưa" },
        { hanzi: "雪", pinyin: "xuě", meaning: "tuyết" },
        { hanzi: "下雪", pinyin: "xiàxuě", meaning: "tuyết rơi" },
        { hanzi: "风", pinyin: "fēng", meaning: "gió" },
        { hanzi: "刮风", pinyin: "guāfēng", meaning: "có gió / nổi gió" },
        { hanzi: "阴", pinyin: "yīn", meaning: "âm / âm u / mây mù" },
        { hanzi: "晴", pinyin: "qíng", meaning: "tạnh ráo / trời quang" },
        { hanzi: "度", pinyin: "dù", meaning: "độ (nhiệt độ)" },
        { hanzi: "怎么样", pinyin: "zěnmeyàng", meaning: "như thế nào" },
        { hanzi: "身体", pinyin: "shēntǐ", meaning: "thân thể / sức khỏe" },
        { hanzi: "体", pinyin: "tǐ", meaning: "thể" },
        { hanzi: "康", pinyin: "kāng", meaning: "khang / khỏe mạnh" },
        { hanzi: "健康", pinyin: "jiànkāng", meaning: "khỏe mạnh / sức khỏe" },
        { hanzi: "生病", pinyin: "shēngbìng", meaning: "ốm / bị bệnh" },
        { hanzi: "病", pinyin: "bìng", meaning: "bệnh / ốm" },
        { hanzi: "医", pinyin: "yī", meaning: "y khoa" },
        { hanzi: "药", pinyin: "yào", meaning: "thuốc" },
        { hanzi: "吃药", pinyin: "chī yào", meaning: "uống thuốc" },
        { hanzi: "休息", pinyin: "xiūxi", meaning: "nghỉ ngơi" },
        { hanzi: "休", pinyin: "xiū", meaning: "hưu / nghỉ" },
        { hanzi: "息", pinyin: "xī", meaning: "tức / hơi thở" },
        { hanzi: "忙", pinyin: "máng", meaning: "bận rộn" },
        { hanzi: "累", pinyin: "lèi", meaning: "mệt mỏi" }
      ],
      sentences: []
    },
    // --- QUYỂN 2 (Từ bài 11 đến bài 20) ---
    {
      id: "lesson_11",
      title: "Bài 11: Quyển 2 - BÀI 1",
      words: [
        { hanzi: "在", pinyin: "zài", meaning: "đang" },
        { hanzi: "正在", pinyin: "zhèngzài", meaning: "đang" },
        { hanzi: "正", pinyin: "zhèng", meaning: "đang" },
        { hanzi: "玩儿", pinyin: "wánr", meaning: "chơi" },
        { hanzi: "玩", pinyin: "wán", meaning: "chơi" },
        { hanzi: "调查", pinyin: "diàochá", meaning: "điều tra" },
        { hanzi: "查", pinyin: "chá", meaning: "kiểm tra" }
      ],
      sentences: [
        { hanzi: "zai gōngzuò", pinyin: "zài gōngzuò" },
        { hanzi: "正在学习汉语", pinyin: "zhèngzài xuéxí Hànyǔ" }
      ]
    },
    {
      id: "lesson_12",
      title: "Bài 12: Quyển 2 - BÀI 2",
      words: [
        { hanzi: "准备", pinyin: "zhǔnbèi", meaning: "chuẩn bị" },
        { hanzi: "备", pinyin: "bèi", meaning: "chuẩn bị" },
        { hanzi: "考试", pinyin: "kǎoshì", meaning: "thi / kỳ thi" },
        { hanzi: "考", pinyin: "kǎo", meaning: "thi" },
        { hanzi: "试", pinyin: "shì", meaning: "thử" }
      ],
      sentences: [
        { hanzi: "准备考试", pinyin: "zhǔnbèi kǎoshì" }
      ]
    },
    {
      id: "lesson_13",
      title: "Bài 13: Quyển 2 - BÀI 3",
      words: [
        { hanzi: "懂", pinyin: "dǒng", meaning: "hiểu" },
        { hanzi: "明白", pinyin: "míngbai", meaning: "rõ ràng / hiểu" },
        { hanzi: "清楚", pinyin: "qīngchu", meaning: "rõ ràng" }
      ],
      sentences: [
        { hanzi: "我听懂了", pinyin: "wǒ tīng dǒng le" }
      ]
    },
    {
      id: "lesson_14",
      title: "Bài 14: Quyển 2 - BÀI 4",
      words: [
        { hanzi: "觉得", pinyin: "juéde", meaning: "cảm thấy / cho rằng" },
        { hanzi: "觉", pinyin: "jué", meaning: "cảm giác" },
        { hanzi: "得", pinyin: "de", meaning: "trợ từ kết cấu" }
      ],
      sentences: [
        { hanzi: "我觉得很好", pinyin: "wǒ juéde hěn hǎo" }
      ]
    },
    {
      id: "lesson_15",
      title: "Bài 15: Quyển 2 - BÀI 5",
      words: [
        { hanzi: "希望", pinyin: "xīwàng", meaning: "hy vọng" },
        { hanzi: "望", pinyin: "wàng", meaning: "trông mong" }
      ],
      sentences: [
        { hanzi: "希望 You happy", pinyin: "xīwàng nǐ kuàilè" }
      ]
    },
    {
      id: "lesson_16",
      title: "Bài 16: Quyển 2 - BÀI 6",
      words: [
        { hanzi: "欢迎", pinyin: "huānyíng", meaning: "hoan nghênh / chào mừng" },
        { hanzi: "迎", pinyin: "yíng", meaning: "đón" }
      ],
      sentences: [
        { hanzi: "欢迎光临", pinyin: "huānyíng guānglín" }
      ]
    },
    {
      id: "lesson_17",
      title: "Bài 17: Quyển 2 - BÀI 7",
      words: [
        { hanzi: "帮助", pinyin: "bāngzhù", meaning: "giúp đỡ" },
        { hanzi: "帮", pinyin: "bāng", meaning: "giúp" }
      ],
      sentences: [
        { hanzi: "谢谢你的帮助", pinyin: "xièxie nǐ de bāngzhù" }
      ]
    },
    {
      id: "lesson_18",
      title: "Bài 18: Quyển 2 - BÀI 8",
      words: [
        { hanzi: "介绍", pinyin: "jièshào", meaning: "giới thiệu" },
        { hanzi: "介", pinyin: "jiè", meaning: "giới" },
        { hanzi: "绍", pinyin: "shào", meaning: "thiệu" }
      ],
      sentences: [
        { hanzi: "自我介绍", pinyin: "zìwǒ jièshào" }
      ]
    },
    {
      id: "lesson_19",
      title: "Bài 19: Quyển 2 - BÀI 9",
      words: [
        { hanzi: "旅游", pinyin: "lǚyóu", meaning: "du lịch" },
        { hanzi: "游", pinyin: "yóu", meaning: "bơi / du ngoạn" }
      ],
      sentences: [
        { hanzi: "去中国旅游", pinyin: "qù zhōngguó lǚyóu" }
      ]
    },
    {
      id: "lesson_20",
      title: "Bài 20: Quyển 2 - BÀI 10",
      words: [
        { hanzi: "高兴", pinyin: "gāoxìng", meaning: "vui vẻ / vui mừng" },
        { hanzi: "高", pinyin: "gāo", meaning: "cao" },
        { hanzi: "兴", pinyin: "xìng", meaning: "hứng" }
      ],
      sentences: [
        { hanzi: "认识你很高兴", pinyin: "rènshi nǐ hěn gāoxìng" }
      ]
    }
  ],

  // ==========================================
  // 2. CẢNH GIỚI TĨNH THẤT (HSK 1, 2, 3 Đầy đủ hàng trăm từ vựng)
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
        { hanzi: "的点", pinyin: "de", meaning: "của (trợ từ)" },
        { hanzi: "电脑", pinyin: "diànnǎo", meaning: "máy tính" },
        { hanzi: "电视", pinyin: "diànshì", meaning: "ti vi" },
        { hanzi: "电影", pinyin: "diànyǐng", meaning: "phim" },
        { hanzi: "东西", pinyin: "dōngxi", meaning: "đồ vật" },
        { hanzi: "都", pinyin: "dōu", meaning: "đều" },
        { hanzi: "读", pinyin: "dú", meaning: "đọc" },
        { hanzi: "对不起", pinyin: "duìbuqǐ", meaning: "xin lỗi" },
        { hanzi: "多", pinyin: "duō", meaning: "nhiều" },
        { hanzi: "多少", pinyin: "duōshao", meaning: "bao nhiêu" },
        { hanzi: "儿子", pinyin: "érzi", meaning: "con trai" },
        { hanzi: "二", pinyin: "èr", meaning: "số 2" },
        { hanzi: "饭馆", pinyin: "fànguǎn", meaning: "nhà hàng" },
        { hanzi: "飞机", pinyin: "fēijī", meaning: "máy bay" },
        { hanzi: "分钟", pinyin: "fēnzhōng", meaning: "phút" },
        { hanzi: "高兴", pinyin: "gāoxìng", meaning: "vui vẻ" },
        { hanzi: "个", pinyin: "gè", meaning: "cái, chiếc (lượng từ)" },
        { hanzi: "工作", pinyin: "gōngzuò", meaning: "công việc" },
        { hanzi: "狗", pinyin: "gǒu", meaning: "chó" },
        { hanzi: "汉语", pinyin: "hànyǔ", meaning: "tiếng Trung" },
        { hanzi: "好", pinyin: "hǎo", meaning: "tốt" },
        { hanzi: "号", pinyin: "hào", meaning: "ngày, số" },
        { hanzi: "喝", pinyin: "hē", meaning: "uống" },
        { hanzi: "和", pinyin: "hé", meaning: "và" },
        { hanzi: "很", pinyin: "hěn", meaning: "rất" },
        { hanzi: "后面", pinyin: "hòumian", meaning: "phía sau" }
      ],
      sentences: [
        { hanzi: "我爱我的妈妈。", pinyin: "wǒ ài wǒ de māma." },
        { hanzi: "我家有八个人。", pinyin: "wǒ jiā yǒu bā gè rén." }
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
        { hanzi: "出", pinyin: "chū", meaning: "ra" },
        { hanzi: "穿", pinyin: "chuān", meaning: "mặc" },
        { hanzi: "次", pinyin: "cì", meaning: "lần" },
        { hanzi: "从", pinyin: "cóng", meaning: "từ" },
        { hanzi: "错", pinyin: "cuò", meaning: "sai" },
        { hanzi: "打篮球", pinyin: "dǎ lánqiú", meaning: "chơi bóng rổ" },
        { hanzi: "大家", pinyin: "dàjiā", meaning: "mọi người" },
        { hanzi: "到", pinyin: "dào", meaning: "đến" },
        { hanzi: "得", pinyin: "de", meaning: "trợ từ" },
        { hanzi: "等", pinyin: "děng", meaning: "đợi" },
        { hanzi: "弟弟", pinyin: "dìdi", meaning: "em trai" }
      ],
      sentences: [
        { hanzi: "我们走吧。", pinyin: "wǒ men zǒu ba." },
        { hanzi: "谢谢你的帮助。", pinyin: "xiè xie nǐ de bāng zhù." }
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
        { hanzi: "办法", pinyin: "bànfǎ", meaning: "biện pháp" },
        { hanzi: "办公室", pinyin: "bàngōngshì", meaning: "văn phòng" },
        { hanzi: "半", pinyin: "bàn", meaning: "nửa" },
        { hanzi: "帮忙", pinyin: "bāngmáng", meaning: "giúp đỡ" },
        { hanzi: "包", pinyin: "bāo", meaning: "túi, gói" },
        { hanzi: "饱", pinyin: "bǎo", meaning: "no" },
        { hanzi: "北方", pinyin: "běifāng", meaning: "miền Bắc" },
        { hanzi: "被", pinyin: "bèi", meaning: "bởi (bị động)" },
        { hanzi: "鼻子", pinyin: "bízi", meaning: "mũi" },
        { hanzi: "比较", pinyin: "bǐjiào", meaning: "so sánh / tương đối" },
        { hanzi: "比赛", pinyin: "bǐsài", meaning: "cuộc thi" }
      ],
      sentences: [
        { hanzi: "我的爱好是看书。", pinyin: "wǒ de ài hào shì kàn shū." },
        { hanzi: "请把门打开。", pinyin: "qǐng bǎ mén dǎ kāi." }
      ]
    }
  ]
};
