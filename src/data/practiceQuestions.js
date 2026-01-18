// Örnek Sorular - Klasik, Eşleştirme, Doğru/Yanlış
export const practiceQuestions = {
    1: { // Ünite 1
        classic: [
            {
                id: 1,
                topic: "Gruplar ve Roller",
                question: "Bir kişinin aynı anda birden fazla grupta farklı roller üstlenebileceğini bir örnekle açıklayınız.",
                rubric: "Öğrenci en az 2 farklı grup ve o gruplardaki rolleri belirtmelidir. Örnek: Ailede çocuk, okulda öğrenci, kulüpte üye."
            },
            {
                id: 2,
                topic: "Kültürel Ögeler",
                question: "Türk mutfağı ve ikram kültürünün hangi değeri yansıttığını açıklayınız.",
                rubric: "Misafirperverlik değerini belirtmeli ve kısa bir açıklama yapmalıdır."
            },
            {
                id: 3,
                topic: "Yardımlaşma",
                question: "Sadaka taşının günümüzdeki yardımlaşma anlayışından farkı nedir?",
                rubric: "Mahremiyet ve gizlilik kavramlarını vurgulamalıdır."
            }
        ],
        matching: [
            {
                id: 1,
                topic: "Kültürel Ögeler",
                leftColumn: ["Zeybek", "Türk Kahvesi", "Ebru", "Nevruz"],
                rightColumn: ["Halk Oyunu", "Yemek Kültürü", "El Sanatı", "Bayram"],
                correctMatches: { "1": "A", "2": "B", "3": "C", "4": "D" }
            },
            {
                id: 2,
                topic: "Gruplar ve Roller",
                leftColumn: ["Aile", "Okul", "Kulüp"],
                rightColumn: ["Çocuk", "Öğrenci", "Üye"],
                correctMatches: { "1": "A", "2": "B", "3": "C" }
            }
        ],
        trueFalse: [
            { id: 1, topic: "Gruplar", statement: "Bir kişi aynı anda sadece tek bir role sahip olabilir.", correct: false },
            { id: 2, topic: "Haklar", statement: "Eğitim almak bir haktır.", correct: true },
            { id: 3, topic: "Kültür", statement: "Kültürel farklılıklar toplum için bir zenginliktir.", correct: true },
            { id: 4, topic: "Yardımlaşma", statement: "Sadaka taşı Osmanlı döneminde kullanılmıştır.", correct: true }
        ]
    },
    2: { // Ünite 2
        classic: [
            {
                id: 1,
                topic: "Göreceli Konum",
                question: "Yaşadığınız ilin göreceli konumunu en az 3 özellik kullanarak açıklayınız.",
                rubric: "Yön, komşu il, ulaşım, doğal özellik gibi unsurlardan en az 3 tanesini kullanmalıdır."
            },
            {
                id: 2,
                topic: "Doğal ve Beşeri Çevre",
                question: "Beşeri çevrenin gelişmesi doğal çevreyi nasıl etkiler? İki örnek veriniz.",
                rubric: "Ormanların azalması, çevre kirliliği gibi olumsuz etkilerden bahsetmelidir."
            },
            {
                id: 3,
                topic: "Afetler",
                question: "Afetlerin zararını azaltmak için afet öncesinde neler yapılabilir?",
                rubric: "Bilinçlenme, sağlam yapılar, acil durum planı gibi önlemlerden bahsetmelidir."
            }
        ],
        matching: [
            {
                id: 1,
                topic: "Doğal ve Beşeri Çevre",
                leftColumn: ["Dağ", "Baraj", "Orman", "Okul"],
                rightColumn: ["Doğal", "Beşeri", "Doğal", "Beşeri"],
                correctMatches: { "1": "A", "2": "B", "3": "C", "4": "D" }
            },
            {
                id: 2,
                topic: "Afetler",
                leftColumn: ["Deprem", "Sel", "Heyelan"],
                rightColumn: ["Yer kabuğu kırılması", "Aşırı yağış", "Toprak kayması"],
                correctMatches: { "1": "A", "2": "B", "3": "C" }
            }
        ],
        trueFalse: [
            { id: 1, topic: "Göreceli Konum", statement: "Göreceli konum zamanla değişebilir.", correct: true },
            { id: 2, topic: "Çevre", statement: "Beşeri çevre insan eli değmeden oluşur.", correct: false },
            { id: 3, topic: "Afetler", statement: "Her doğa olayı afettir.", correct: false },
            { id: 4, topic: "Komşular", statement: "Türkiye'nin 8 kara komşusu vardır.", correct: true }
        ]
    },
    3: { // Ünite 3
        classic: [
            {
                id: 1,
                topic: "Kültürel Miras",
                question: "Tarihî mekân, tarihî eser ve tarihî nesne arasındaki farkı örneklerle açıklayınız.",
                rubric: "Her birinin tanımını yapmalı ve birer örnek vermelidir."
            },
            {
                id: 2,
                topic: "UNESCO",
                question: "Kültürel mirasın sadece o ülke için değil, tüm insanlık için önemli olmasının nedenini açıklayınız.",
                rubric: "Ortak tarih, kültürler arası bağ, insanlık mirası gibi kavramlardan bahsetmelidir."
            },
            {
                id: 3,
                topic: "Koruma",
                question: "Tarihî bir alanda zarar veren birini gördüğünüzde nasıl davranırsınız?",
                rubric: "Uyarma, yetkililere haber verme, bilinçlendirme gibi sorumlu davranışlardan bahsetmelidir."
            }
        ],
        matching: [
            {
                id: 1,
                topic: "Kültürel Miras Türleri",
                leftColumn: ["Göbeklitepe", "Selçuklu Kılıcı", "Safranbolu Evleri"],
                rightColumn: ["Tarihî Mekân", "Tarihî Nesne", "Tarihî Mekân"],
                correctMatches: { "1": "A", "2": "B", "3": "C" }
            },
            {
                id: 2,
                topic: "UNESCO",
                leftColumn: ["Pamukkale", "Türk Kahvesi", "Nemrut Dağı"],
                rightColumn: ["Somut", "Somut Olmayan", "Somut"],
                correctMatches: { "1": "A", "2": "B", "3": "C" }
            }
        ],
        trueFalse: [
            { id: 1, topic: "UNESCO", statement: "UNESCO yalnızca doğal güzellikleri korur.", correct: false },
            { id: 2, topic: "Miras", statement: "Somut olmayan kültürel miras gelenekleri kapsar.", correct: true },
            { id: 3, topic: "Sorumluluk", statement: "Kültürel miras gelecek nesillere aktarılmalıdır.", correct: true },
            { id: 4, topic: "Türkiye", statement: "Göbeklitepe UNESCO listesindedir.", correct: true }
        ]
    }
};
