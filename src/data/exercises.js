// Etkinlikler ve Cevap Anahtarı - 5. Sınıf Sosyal Bilgiler
export const exercises = {
    1: { // Ünite 1
        1: { // Bölüm 1: Gruplar ve Roller
            title: "Gruplar ve Roller - Etkinlikler",
            questions: [
                {
                    id: 1,
                    type: 'table',
                    title: "Gruplar ve Rollerim",
                    instruction: "Aşağıdaki tabloyu kendi yaşamınızı düşünerek doldurunuz.",
                    headers: ["Bulunduğum Ortam", "Dâhil Olduğum Grup", "Bu Gruptaki Rolüm"],
                    rows: [
                        { label: "Ailemde", inputs: 2 },
                        { label: "Okulumda", inputs: 2 },
                        { label: "Sınıfımda", inputs: 2 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            ["Ailemde", "Aile", "Çocuk"],
                            ["Okulumda", "Okul topluluğu", "Öğrenci"],
                            ["Sınıfımda", "Sınıf", "Arkadaş / Grup üyesi"]
                        ]
                    }
                },
                {
                    id: 2,
                    type: 'open',
                    title: "Roller Zamanla Değişir mi?",
                    instruction: "Ortaokul öğrencisi olduktan sonra;",
                    parts: [
                        {
                            label: "a) Hayatınızda ne gibi değişiklikler olmuştur?",
                            lines: 2
                        },
                        {
                            label: "b) Bu değişiklikler rollerinizi nasıl etkilemiştir?",
                            lines: 2
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: ["Ders sorumluluklarım arttı.", "Daha düzenli çalışmam gerekiyor."],
                            b: ["Öğrenci olarak sorumluluklarım arttı.", "Grup çalışmalarında daha aktif rol alıyorum."]
                        }
                    }
                },
                {
                    id: 3,
                    type: 'categorize',
                    title: "Haklar ve Sorumluluklar",
                    instruction: "Aşağıdaki tabloyu inceleyerek doldurunuz.",
                    categories: [
                        {
                            title: "Rollerimizin Getirdiği Haklar",
                            subcategories: [
                                { label: "Benzer Haklar:", lines: 2 },
                                { label: "Farklı Haklar:", lines: 2 }
                            ]
                        },
                        {
                            title: "Rollerimizin Getirdiği Sorumluluklar",
                            subcategories: [
                                { label: "Benzer Sorumluluklar:", lines: 2 },
                                { label: "Farklı Sorumluluklar:", lines: 2 }
                            ]
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            haklar_benzer: ["Saygı görme", "Kendini ifade etme"],
                            haklar_farkli: ["Öğrencinin eğitim alma hakkı", "Kulüp üyesinin etkinliklere katılma hakkı"],
                            sorumluluklar_benzer: ["Kurallara uymak", "Saygılı davranmak"],
                            sorumluluklar_farkli: ["Öğrencinin ders çalışması", "Grup liderinin görev dağılımı yapması"]
                        }
                    }
                },
                {
                    id: 4,
                    type: 'open',
                    title: "Aile Grubu",
                    parts: [
                        {
                            label: "a) Aile grubunda sahip olduğunuz rolleri yazınız.",
                            lines: 2
                        },
                        {
                            label: "b) Bu rollerin size kazandırdığı iki sorumluluk yazınız.",
                            lines: 2
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: ["Çocuk", "Kardeş"],
                            b: ["Aile büyüklerine saygılı olmak", "Ev işlerine yardımcı olmak"]
                        }
                    }
                },
                {
                    id: 5,
                    type: 'open',
                    title: "Arkadaşlık Grubu",
                    instruction: "Aşağıdaki soruları cevaplayınız:",
                    parts: [
                        {
                            label: "a) Arkadaş grubunda hangi rolleri üstlenirsiniz?",
                            lines: 1
                        },
                        {
                            label: "b) Arkadaşlık ilişkilerinde saygı neden önemlidir?",
                            lines: 2
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: ["Arkadaş", "Oyun arkadaşı"],
                            b: ["Saygı olursa arkadaşlıklar uzun süreli olur.", "Anlaşmazlıklar daha kolay çözülür."]
                        }
                    }
                },
                {
                    id: 6,
                    type: 'open',
                    title: "Akrabalık Grubu",
                    parts: [
                        {
                            label: "Akrabalarımızla ilişkilerimizin güçlü olması toplum hayatına nasıl katkı sağlar?",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: ["Yardımlaşma ve dayanışma artar.", "Aile bağları güçlenir.", "Toplumsal birlik sağlanır."]
                    }
                },
                {
                    id: 7,
                    type: 'open',
                    title: "Komşuluk İlişkileri",
                    instruction: "Aşağıdaki atasözünü düşünerek soruları cevaplayınız.",
                    quote: "Komşu komşunun külüne muhtaçtır.",
                    parts: [
                        {
                            label: "a) Bu söz komşuluk ilişkileri hakkında bize ne anlatmaktadır?",
                            lines: 2
                        },
                        {
                            label: "b) Komşulukta yardımlaşmaya iki örnek veriniz.",
                            lines: 2
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: ["İnsanların birbirine ihtiyaç duyduğunu anlatır.", "Komşulukta yardımlaşmanın önemini vurgular."],
                            b: ["Hastayken yemek yapmak", "İhtiyaç anında destek olmak"]
                        }
                    }
                },
                {
                    id: 8,
                    type: 'open',
                    title: "Okul Grubu",
                    parts: [
                        {
                            label: "a) Okul grubunda sahip olduğunuz rolleri yazınız.",
                            lines: 1
                        },
                        {
                            label: "b) Bu rollerin getirdiği bir hak ve bir sorumluluk yazınız.",
                            subparts: [
                                { label: "Hak:", lines: 1 },
                                { label: "Sorumluluk:", lines: 1 }
                            ]
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: ["Öğrenci", "Kulüp üyesi"],
                            b: {
                                hak: "Eğitim alma",
                                sorumluluk: "Kurallara uymak"
                            }
                        }
                    }
                },
                {
                    id: 9,
                    type: 'open',
                    title: "Sosyal Sorumluluk",
                    instruction: "Aşağıdaki soruları cevaplayınız:",
                    parts: [
                        {
                            label: "a) Sosyal sorumluluk gruplarına neden ihtiyaç duyulur?",
                            lines: 2
                        },
                        {
                            label: "b) Katılabileceğiniz bir sosyal sorumluluk faaliyetine örnek veriniz.",
                            lines: 1
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: ["Toplumdaki sorunları çözmek için", "Yardımlaşmayı artırmak için"],
                            b: ["Ağaç dikme", "Yardım kampanyasına katılma"]
                        }
                    }
                },
                {
                    id: 10,
                    type: 'interpretation',
                    title: "Yorumlayalım",
                    quote: "Birlikte yaşamak, insanların hem haklarını bilmelerini hem de sorumluluklarını yerine getirmelerini gerektirir.",
                    parts: [
                        {
                            label: "Bu cümleyle anlatılmak isteneni kendi cümlelerinizle açıklayınız.",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: ["Birlikte yaşamak için insanların haklarını bilmesi ve sorumluluklarını yerine getirmesi gerekir. Böylece toplumda düzen ve huzur sağlanır."]
                    }
                }
            ]
        },
        2: { // Bölüm 2: Kültürel Zenginlikler
            title: "Kültürel Zenginlikler - Etkinlikler",
            questions: [
                {
                    id: 1,
                    type: 'open',
                    title: "Senaryo 1: Yeni Bir Ülke, Yeni Bir Hayat",
                    instruction: "Ankara'da bulunan Avusturya Büyükelçiliğinde çalışmak üzere Türkiye'ye gelen Peter ve Anna, oğulları Stefan'ı bir Türk okuluna kaydettirmiştir. Stefan, yeni bir dil ve farklı bir kültürle karşılaştığı için ilk günlerde kendini yalnız hissetmiştir. Ancak sınıf arkadaşları Stefan'a yardım etmiş, öğretmeni onun kendini rahat ifade etmesini sağlamıştır. Stefan zamanla Türk kültürünü tanımaya başlamış, arkadaşlarıyla oyunlar oynamış ve okula uyum sağlamıştır.",
                    parts: [
                        {
                            label: "a) Stefan'ın Türkiye'ye uyum sağlamasında arkadaşlarının hangi davranışları etkili olmuştur?",
                            lines: 3
                        },
                        {
                            label: "b) Siz Stefan'ın sınıf arkadaşı olsaydınız ona nasıl yardımcı olurdunuz?",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: [
                                "Arkadaşlarının yardımsever ve anlayışlı davranması",
                                "Öğretmenin destek olması",
                                "Sınıf arkadaşlarının onunla iletişim kurmaya çalışması",
                                "Oyunlara ve etkinliklere dâhil edilmesi",
                                "Ona Türkçe öğretmeleri"
                            ],
                            b: [
                                "Ona Türkçe kelimeler öğretirdim",
                                "Oyunlara davet ederdim",
                                "Kültürümüzü tanıtırdım",
                                "Saygılı ve sabırlı davranırdım",
                                "Arkadaş olurdum"
                            ]
                        }
                    }
                },
                {
                    id: 2,
                    type: 'open',
                    title: "Senaryo 2: Spor Birleştirir",
                    instruction: "İstanbul'da yetişen genç bir futbolcu, kariyerine İspanya'daki bir futbol takımında devam etmiştir. Farklı ülkelerden sporcularla aynı takımda oynayan futbolcu, sporun insanları bir araya getirdiğini fark etmiştir. Futbol sayesinde farklı kültürleri tanımış, ön yargıların azaldığını ve arkadaşlıkların güçlendiğini gözlemlemiştir.",
                    parts: [
                        {
                            label: "a) Bu senaryoda sporun kültürler arası etkileşime katkısı nedir?",
                            lines: 3
                        },
                        {
                            label: "b) Sporun birlikte yaşamaya sağladığı iki katkıyı yazınız.",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: [
                                "Farklı ülkelerden insanların bir araya gelmesini sağlar",
                                "Ortak amaç etrafında iletişimi artırır",
                                "Ön yargıları azaltır",
                                "Farklı kültürleri tanıma fırsatı verir"
                            ],
                            b: [
                                "Dostluk ve arkadaşlığı geliştirir",
                                "Saygı ve anlayışı artırır",
                                "Paylaşma ve dayanışmayı güçlendirir",
                                "İnsanları birleştirir"
                            ]
                        }
                    }
                },
                {
                    id: 3,
                    type: 'open',
                    title: "Senaryo 3: Farklı Ülkeler, Ortak Değerler",
                    instruction: "Güney Kore'de yaşayan Jae ailesi, Türkiye'ye taşınarak Mersin'e yerleşmiştir. Aile, Türk insanının misafirperverliğinden ve yardımlaşmasından çok etkilenmiştir. Başlangıçta bazı alışkanlıklar farklı olsa da zamanla ortak değerlerin farkına varmışlardır. Karşılıklı saygı sayesinde birlikte uyum içinde yaşamaya başlamışlardır.",
                    parts: [
                        {
                            label: "a) Senaryoda Türk kültürü ile Güney Kore kültürü arasında hangi ortak değerler vurgulanmıştır?",
                            lines: 3
                        },
                        {
                            label: "b) Kültürel farklılıklara saygı göstermek neden önemlidir?",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: [
                                "Misafirperverlik",
                                "Yardımlaşma",
                                "Saygı",
                                "Dayanışma",
                                "Aile değerleri"
                            ],
                            b: [
                                "Birlikte huzur içinde yaşamayı sağlar",
                                "İnsanlar arasında anlayışı artırır",
                                "Toplumsal uyumu güçlendirir",
                                "Barışı sağlar"
                            ]
                        }
                    }
                },
                {
                    id: 4,
                    type: 'open',
                    title: "Senaryo 4: Aşure Gibi Birlikte Yaşamak",
                    instruction: "Almanya'da düzenlenen aşure etkinliğine farklı milletlerden insanlar katılmıştır. Herkes kendi kültürünü tanıtırken, aynı kazan içinde pişen aşure gibi farklılıkların bir araya gelince daha güzel olduğu fark edilmiştir. Etkinlik sonunda insanlar birbirlerinin kültürlerine karşı daha anlayışlı davranmaya başlamıştır.",
                    parts: [
                        {
                            label: "a) Aşure örneği kültürel çeşitliliği nasıl anlatmaktadır?",
                            lines: 3
                        },
                        {
                            label: "b) Farklı kültürlerin bir arada yaşaması topluma nasıl katkı sağlar?",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: [
                                "Farklı kültürlerin bir araya gelerek güzellik oluşturmasını anlatır",
                                "Farklılıkların uyum içinde olabileceğini gösterir",
                                "Aşure birçok malzemeden oluşur, her malzeme farklıdır ama bir araya gelince güzelleşir",
                                "Kültürler de böyledir, farklılıklar zenginlik yaratır"
                            ],
                            b: [
                                "Kültürel zenginliği artırır",
                                "Hoşgörü ve barışı geliştirir",
                                "İnsanlar arasında bağ kurar",
                                "Toplumu zenginleştirir"
                            ]
                        }
                    }
                }
            ]
        },
        3: { // Bölüm 3: Yardımlaşma ve Dayanışma
            title: "Yardımlaşma ve Dayanışma - Etkinlikler",
            questions: [
                {
                    id: 1,
                    type: 'open',
                    title: "Kavramları Tanıyalım",
                    instruction: "Yardımlaşma ve dayanışma kavramlarını kendi cümlelerinizle açıklayınız.",
                    parts: [
                        {
                            label: "a) Yardımlaşma ve dayanışma arasındaki fark nedir?",
                            lines: 3
                        },
                        {
                            label: "b) Bu değerler toplumda neden önemlidir?",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: [
                                "Yardımlaşma birine destek olmaktır.",
                                "Dayanışma ise zor ve iyi günlerde birlik olup beraber hareket etmektir.",
                                "Biri destek, diğeri birlik olmayı vurgular."
                            ],
                            b: [
                                "İnsanlar kendilerini yalnız hissetmez.",
                                "Toplumsal birlik ve beraberlik güçlenir.",
                                "Sorunlar daha kolay ve hızlı çözülür."
                            ]
                        }
                    }
                },
                {
                    id: 2,
                    type: 'open',
                    title: "Sadaka Taşı Uygulaması",
                    instruction: "Osmanlı ve Selçuklu dönemlerindeki Sadaka Taşı uygulamasını düşünerek cevaplayınız.",
                    parts: [
                        {
                            label: "a) Bu uygulamanın en önemli özelliği nedir?",
                            lines: 3
                        },
                        {
                            label: "b) 'Yardım yapılırken kişinin onuru korunmalıdır' sözü bu uygulamada nasıl gerçekleşiyordu?",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: [
                                "Gizli yardımlaşmayı sağlamasıdır.",
                                "Alan ve veren kişinin birbirini görmemesidir.",
                                "Yardımlaşmada mahremiyete önem verilmesidir."
                            ],
                            b: [
                                "Yardımı alan kişi kimse görmediği için utanmazdı.",
                                "Veren kişi de gösteriş yapmamış olurdu.",
                                "İhtiyaç sahibi sadece ihtiyacı kadarını alarak başkalarına da bırakırdı."
                            ]
                        }
                    }
                },
                {
                    id: 3,
                    type: 'open',
                    title: "Millî Mücadele ve Dayanışma",
                    instruction: "Millî Mücadele döneminde halkın orduya desteğini düşününüz.",
                    parts: [
                        {
                            label: "Halkın ordusuna verdiği desteklere üç örnek yazınız.",
                            lines: 4
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "Giysi yardımı (çorap, çarık vb.)",
                            "Yiyecek yardımı (buğday, un vb.)",
                            "Silah ve cephane taşıma",
                            "Para yardımı"
                        ]
                    }
                },
                {
                    id: 4,
                    type: 'open',
                    title: "Modern Kurumlar",
                    instruction: "Günümüzdeki yardımlaşma kurumları hakkında cevaplayınız.",
                    parts: [
                        {
                            label: "a) Türk Kızılay'ı afetlerde topluma nasıl destek olur?",
                            lines: 3
                        },
                        {
                            label: "b) Aile ve Sosyal Hizmetler Bakanlığı'nın yardımlaşmadaki rolü nedir?",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: [
                                "Barınma (çadır vb.) desteği sağlar.",
                                "Gıda ve sıcak yemek yardımı yapar.",
                                "Sağlık yardımı ve kan bağışı toplar."
                            ],
                            b: [
                                "Yaşlı, engelli ve ihtiyaç sahiplerine destek olur.",
                                "Ulusal Vefa Programı gibi projeler yürütür.",
                                "Devletin şefkat elini ihtiyaç sahiplerine ulaştırır."
                            ]
                        }
                    }
                },
                {
                    id: 5,
                    type: 'open',
                    title: "Sosyal Sorumluluk Bilinci",
                    instruction: "Kendi okulunuzda veya çevrenizde bir sosyal sorumluluk projesi düşündüğünüzü varsayınız.",
                    parts: [
                        {
                            label: "a) Ne tür bir faaliyet yapmak isterdiniz?",
                            lines: 2
                        },
                        {
                            label: "b) Bu projenin topluma nasıl bir faydası olurdu?",
                            lines: 3
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            a: [
                                "Fidan dikme etkinliği",
                                "İhtiyaç sahipleri için kermes",
                                "Okulda sadaka kutusu / yardım kumbarası",
                                "Sokak hayvanları için barınak desteği"
                            ],
                            b: [
                                "İnsanlar arasında empati duygusunu geliştirir.",
                                "Toplumsal dayanışmayı artırır.",
                                "Birlik ve beraberliği güçlendirir."
                            ]
                        }
                    }
                },
                {
                    id: 6,
                    type: 'open',
                    title: "Etkinlik: Günlük Hayatta Değerler",
                    instruction: "Aşağıdaki 9 temel değeri göz önünde bulundurarak aşağıdaki durumları değerlendiriniz: (1-Çalışkanlık, 2-Duyarlılık, 3-Sorumluluk, 4-Mahremiyet, 5-Yardımseverlik, 6-Saygı, 7-Tasarruf, 8-Özgürlük, 9-Adalet)",
                    parts: [
                        {
                            label: "1. Bir öğrenci, sınıf arkadaşının izni olmadan onun özel defterini karıştırmamıştır.",
                            lines: 1
                        },
                        {
                            label: "2. Bir mahallede yaşayan insanlar, ihtiyaç sahipleri için erzak ve kıyafet toplayarak destek olmuştur.",
                            lines: 1
                        },
                        {
                            label: "3. Bir öğretmen, sınıfta herkesin söz hakkı almasına özen göstermiştir.",
                            lines: 1
                        },
                        {
                            label: "4. Bir aile, elektrik ve suyu boşa harcamamaya dikkat ederek hem bütçeyi hem de doğayı korumaktadır.",
                            lines: 1
                        },
                        {
                            label: "5. Bir öğrenci, okulda verilen görevleri zamanında ve eksiksiz yapmaktadır.",
                            lines: 1
                        },
                        {
                            label: "⭐ BONUS: Sence yardımseverlik ve duyarlılık hangi durumlarda birlikte görülür? Bir örnekle açıklayınız.",
                            lines: 2
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            "1": ["Mahremiyet (4)", "Saygı (6)"],
                            "2": ["Yardımseverlik (5)", "Duyarlılık (2)", "Sorumluluk (3)"],
                            "3": ["Adalet (9)", "Saygı (6)"],
                            "4": ["Tasarruf (7)", "Sorumluluk (3)"],
                            "5": ["Çalışkanlık (1)", "Sorumluluk (3)"],
                            "bonus": ["Başkalarının ihtiyaçlarını fark edip onlara destek olunduğunda birlikte görülür. Örnek: Depremzedeler için yardım toplanması."]
                        }
                    }
                }
            ]
        }
    },
    2: { // Ünite 2: Evimiz Dünya
        1: { // Bölüm 1: İlimizin Göreceli Konumu
            title: "İlimizin Göreceli Konumu - Etkinlikler",
            questions: [
                {
                    id: 1,
                    type: 'open',
                    title: "Etkinlik 1: Kavramı Anlayalım",
                    instruction: "Aşağıdaki cümleleri okuyunuz. Göreceli konum bildiren cümlelerin başına 'D', bildirmeyenlerin başına 'Y' yazınız.",
                    parts: [
                        { label: "( ) Okulum, hastanenin karşısında yer alır.", lines: 1 },
                        { label: "( ) Türkiye, Asya ve Avrupa kıtaları üzerinde bulunur.", lines: 1 },
                        { label: "( ) Evimiz, parkın kuzeyindedir.", lines: 1 },
                        { label: "( ) Dünya, Güneş’e üçüncü sıradaki gezegendir.", lines: 1 },
                        { label: "( ) Okulum, belediyenin yanında bulunmaktadır.", lines: 1 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "1. D (Doğru - Başka yerlere göre konum bildirir)",
                            "2. Y (Yanlış - Genel bilgi / Matematik konum girişi)",
                            "3. D (Doğru - Başka yerlere göre konum bildirir)",
                            "4. Y (Yanlış - Genel bilgi)",
                            "5. D (Doğru - Başka yerlere göre konum bildirir)"
                        ]
                    }
                },
                {
                    id: 2,
                    type: 'open',
                    title: "Etkinlik 2: Boşluk Dolduralım",
                    instruction: "Aşağıdaki cümleleri uygun kelimelerle tamamlayınız: (yönler – ulaşım – komşu iller – su kaynakları – yeryüzü şekilleri)",
                    parts: [
                        { label: "1. Bir ilin başka illere göre nerede bulunduğunu anlatan konuma ……………… konum denir.", lines: 1 },
                        { label: "2. Kara, deniz ve hava yolu gibi özellikler ilin ……………… durumunu gösterir.", lines: 1 },
                        { label: "3. Dağ, ova ve plato gibi unsurlar ……………… ile ilgilidir.", lines: 1 },
                        { label: "4. Göl ve akarsular ilin ……………… arasında yer alır.", lines: 1 },
                        { label: "5. Bir ilin çevresinde bulunan iller ……………… olarak adlandırılır.", lines: 1 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "1. Göreceli",
                            "2. Ulaşım",
                            "3. Yeryüzü şekilleri",
                            "4. Su kaynakları",
                            "5. Komşu iller"
                        ]
                    }
                },
                {
                    id: 3,
                    type: 'open',
                    title: "Etkinlik 3: Haritadan Yorumlayalım",
                    instruction: "Aşağıdaki soruları yaşadığınız ili düşünerek cevaplayınız.",
                    parts: [
                        { label: "1. Yaşadığınız il hangi bölgede yer almaktadır?", lines: 1 },
                        { label: "2. İlinizin kara sınırı olan iki ili yazınız.", lines: 1 },
                        { label: "3. İlinizde bulunan bir doğal güzelliği yazınız.", lines: 1 },
                        { label: "4. İlinizin ulaşım açısından avantajlı mı, dezavantajlı mı olduğunu düşünüyorsunuz? Neden?", lines: 2 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "Örnek: Marmara Bölgesi",
                            "Örnek: Kocaeli – Balıkesir",
                            "Örnek: Uludağ",
                            "Örnek: Avantajlıdır; çünkü kara ve deniz ulaşımı vardır."
                        ]
                    }
                },
                {
                    id: 4,
                    type: 'open',
                    title: "Etkinlik 4: Sen de Yaz!",
                    instruction: "Yaşadığınız ilin göreceli konumunu en az 3 özellik (yön, komşu il, ulaşım, doğal güzellik, su kaynağı) kullanarak açıklayınız.",
                    parts: [
                        { label: "✏️ Cevabım:", lines: 4 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "Örnek Model Cevap: “Yaşadığım il Marmara Bölgesi’nde yer alır. İstanbul’un güneyindedir. Kara ve deniz ulaşımı gelişmiştir. Tarihi ve doğal güzellikleri fazladır.”"
                        ]
                    }
                }
            ]
        },
        2: { // Bölüm 2: Doğal ve Beşerî Çevremizdeki Değişim
            title: "Doğal ve Beşerî Çevremizdeki Değişim - Etkinlikler",
            questions: [
                {
                    id: 1,
                    type: 'categorize',
                    title: "Etkinlik 1: Sınıflandıralım",
                    instruction: "Aşağıdaki unsurları doğal çevre ve beşerî çevre kutucuklarına yazınız.\n(Dağ – Baraj – Orman – Okul – Akarsu – Köprü – Ova – Apartman – Göl – Hastane)",
                    categories: [
                        {
                            title: "Doğal Çevre",
                            subcategories: [
                                { label: "1.", lines: 1 }, { label: "2.", lines: 1 }, { label: "3.", lines: 1 }, { label: "4.", lines: 1 }, { label: "5.", lines: 1 }
                            ]
                        },
                        {
                            title: "Beşerî Çevre",
                            subcategories: [
                                { label: "1.", lines: 1 }, { label: "2.", lines: 1 }, { label: "3.", lines: 1 }, { label: "4.", lines: 1 }, { label: "5.", lines: 1 }
                            ]
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            "Doğal Çevre": ["Dağ", "Orman", "Akarsu", "Ova", "Göl"],
                            "Beşerî Çevre": ["Baraj", "Okul", "Köprü", "Apartman", "Hastane"]
                        }
                    }
                },
                {
                    id: 2,
                    type: 'categorize',
                    title: "Etkinlik 2: Eşleştirme",
                    instruction: "Aşağıdaki ifadelerin hangi kavramla (Doğal Çevre / Beşerî Çevre) ilgili olduğunu uygun kutucuğa yazınız.\n- İnsan eli değmeden oluşmuştur\n- İnsanların ihtiyaçları doğrultusunda yapılmıştır\n- Dağ, ova, göl gibi unsurları kapsar\n- Yol, baraj, şehir gibi unsurları kapsar",
                    categories: [
                        {
                            title: "Doğal Çevre",
                            subcategories: [
                                { label: "İfade 1:", lines: 1 }, { label: "İfade 2:", lines: 1 }
                            ]
                        },
                        {
                            title: "Beşerî Çevre",
                            subcategories: [
                                { label: "İfade 1:", lines: 1 }, { label: "İfade 2:", lines: 1 }
                            ]
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            "Doğal Çevre": ["İnsan eli değmeden oluşmuştur", "Dağ, ova, göl gibi unsurları kapsar"],
                            "Beşerî Çevre": ["İnsanların ihtiyaçları doğrultusunda yapılmıştır", "Yol, baraj, şehir gibi unsurları kapsar"]
                        }
                    }
                },
                {
                    id: 3,
                    type: 'table',
                    title: "Etkinlik 3: Geçmiş – Günümüz Karşılaştırması",
                    instruction: "Yaşadığınız yeri veya genel durumu düşünerek aşağıdaki tabloyu doldurunuz.",
                    headers: ["Alan", "Geçmişte", "Günümüzde"],
                    rows: [
                        { label: "Evler", inputs: 2 },
                        { label: "Nüfus", inputs: 2 },
                        { label: "Ulaşım", inputs: 2 },
                        { label: "Doğal alanlar", inputs: 2 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            ["Evler", "Tek katlı", "Çok katlı"],
                            ["Nüfus", "Az", "Fazla"],
                            ["Ulaşım", "At arabası/Yaya", "Otomobil/Metro"],
                            ["Doğal alanlar", "Geniş", "Azalmış"]
                        ]
                    }
                },
                {
                    id: 4,
                    type: 'open',
                    title: "Etkinlik 4: Düşün – Yaz",
                    instruction: "Aşağıdaki soruları 1–2 cümleyle cevaplayınız.",
                    parts: [
                        { label: "1. Beşerî çevrenin gelişmesi doğal çevreyi nasıl etkiler?", lines: 2 },
                        { label: "2. Yaşadığın çevrede son yıllarda gördüğün bir değişimi yaz.", lines: 2 },
                        { label: "3. Doğal çevreyi korumak için insanlar neler yapmalıdır?", lines: 2 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "1. Doğal alanların azalmasına ve kirliliğe neden olabilir.",
                            "2. Yeni binalar yapıldı, yeşil alanlar azaldı.",
                            "3. Ağaç dikmeli, tasarruflu olmalı ve az atık üretmeliyiz."
                        ]
                    }
                }
            ]
        },
        3: { // Bölüm 3: Afetler ve Etkileri
            title: "Afetler ve Etkileri - Etkinlikler",
            questions: [
                {
                    id: 1,
                    type: 'open',
                    title: "Etkinlik 1: Afeti Tanı – Eşleştir",
                    instruction: "Aşağıdaki afetleri açıklamalarıyla eşleştiriniz.\nAfetler: A. Deprem, B. Sel, C. Heyelan, D. Orman Yangını, E. Erozyon",
                    parts: [
                        { label: "1. Aşırı yağışlar sonucu suyun taşarak yerleşim yerlerine zarar vermesi →", lines: 1 },
                        { label: "2. Yer kabuğundaki kırılmalar sonucu yerin sarsılması →", lines: 1 },
                        { label: "3. Bitki örtüsünün yok olmasıyla toprağın rüzgâr ve suyla taşınması →", lines: 1 },
                        { label: "4. Eğimli arazilerde toprağın yer çekimi etkisiyle kayması →", lines: 1 },
                        { label: "5. Yüksek sıcaklık ve insan ihmaliyle ormanlık alanların yanması →", lines: 1 }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            "1": "B (Sel)",
                            "2": "A (Deprem)",
                            "3": "E (Erozyon)",
                            "4": "C (Heyelan)",
                            "5": "D (Orman Yangını)"
                        }
                    }
                },
                {
                    id: 2,
                    type: 'categorize',
                    title: "Etkinlik 2: Risk mi, Afet mi?",
                    instruction: "Aşağıdaki durumları uygun kategoriye yerleştiriniz.",
                    categories: [
                        {
                            title: "Risk (Afete yol açabilecek durum)",
                            subcategories: [
                                { label: "Örnek 1:", lines: 1 },
                                { label: "Örnek 2:", lines: 1 }
                            ]
                        },
                        {
                            title: "Afet (Gerçekleşmiş olay)",
                            subcategories: [
                                { label: "Örnek 1:", lines: 1 },
                                { label: "Örnek 2:", lines: 1 },
                                { label: "Örnek 3:", lines: 1 }
                            ]
                        }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            "Risk": [
                                "Fay hattı üzerinde dayanıksız binaların bulunması",
                                "Ormanlık alanda cam şişe bırakılması"
                            ],
                            "Afet": [
                                "Şiddetli yağış sonrası evlerin sular altında kalması",
                                "Dağlık bölgede toprağın kayarak yolu kapatması",
                                "Kuraklık nedeniyle tarım ürünlerinin zarar görmesi"
                            ]
                        }
                    }
                },
                {
                    id: 3,
                    type: 'table',
                    title: "Etkinlik 3: Afet Öncesi – Afet Sırası – Afet Sonrası",
                    instruction: "Aşağıdaki davranışları uygun zaman dilimine yerleştiriniz.",
                    headers: ["Zaman", "Davranışlar"],
                    rows: [
                        { label: "Afet Öncesi", inputs: 1 },
                        { label: "Afet Sırasında", inputs: 1 },
                        { label: "Afet Sonrasında", inputs: 1 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            ["Afet Öncesi", "Acil durum çantası hazırlamak, Yetkililerin uyarılarını dikkate almak"],
                            ["Afet Sırasında", "Panik yapmadan güvenli alana geçmek"],
                            ["Afet Sonrasında", "Hasarlı binalardan uzak durmak, AFAD ve belediyelerin yönlendirmelerine uymak"]
                        ]
                    }
                },
                {
                    id: 4,
                    type: 'open',
                    title: "Etkinlik 4: Yaşadığım İlde Afetler",
                    instruction: "Yaşadığınız ili düşünerek cevaplayınız.",
                    parts: [
                        { label: "1. Yaşadığınız ilde görülme ihtimali yüksek iki afet yazınız.", lines: 2 },
                        { label: "2. Bu afetlerden birinin etkilerini azaltmak için bireysel olarak neler yapabilirsiniz?", lines: 2 },
                        { label: "3. Aynı afet için toplumsal olarak (belediye, devlet, okul vb.) neler yapılabilir?", lines: 2 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "1. Deprem, Sel (Örnektir, şehre göre değişir)",
                            "2. Eşyaları sabitlemek, afet çantası hazırlamak.",
                            "3. Dere yataklarını ıslah etmek, sağlam binalar inşa etmek."
                        ]
                    }
                }
            ]
        },
        4: { // Bölüm 4: Komşu Devletler
            title: "Komşu Devletlerimiz - Etkinlikler",
            questions: [
                {
                    id: 1,
                    type: 'table',
                    title: "Etkinlik 1: Komşularımızı Tanıyalım",
                    instruction: "Aşağıdaki tabloda Türkiye’nin kara sınırı olan komşu ülkeleri verilmiştir. Komşu ülkelerin temel özelliklerini (Başkent, Resmî Dil, Yönetim Şekli, Para Birimi) yazınız.",
                    headers: ["Ülke", "Başkenti", "Resmî Dili", "Yönetim Şekli", "Para Birimi"],
                    rows: [
                        { label: "Bulgaristan 🇧🇬", inputs: 4 },
                        { label: "Yunanistan 🇬🇷", inputs: 4 },
                        { label: "Gürcistan 🇬🇪", inputs: 4 },
                        { label: "Azerbaycan 🇦🇿", inputs: 4 },
                        { label: "İran 🇮🇷", inputs: 4 },
                        { label: "Irak 🇮🇶", inputs: 4 },
                        { label: "Suriye 🇸🇾", inputs: 4 },
                        { label: "Ermenistan 🇦🇲", inputs: 4 },
                        { label: "Nahçıvan 🇦🇿", inputs: 4 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            ["Bulgaristan 🇧🇬", "Sofya", "Bulgarca", "Cumhuriyet", "Leva"],
                            ["Yunanistan 🇬🇷", "Atina", "Yunanca", "Cumhuriyet", "Avro"],
                            ["Gürcistan 🇬🇪", "Tiflis", "Gürcüce", "Cumhuriyet", "Lari"],
                            ["Azerbaycan 🇦🇿", "Bakü", "Azerbaycan Türkçesi", "Cumhuriyet", "Manat"],
                            ["İran 🇮🇷", "Tahran", "Farsça", "Cumhuriyet", "Riyal"],
                            ["Irak 🇮🇶", "Bağdat", "Arapça", "Cumhuriyet", "Dinar"],
                            ["Suriye 🇸🇾", "Şam", "Arapça", "Cumhuriyet", "Suriye Lirası"],
                            ["Ermenistan 🇦🇲", "Erivan", "Ermenice", "Cumhuriyet", "Dram"],
                            ["Nahçıvan 🇦🇿", "Nahçıvan", "Azerbaycan Türkçesi", "Cumhuriyet", "Manat"]
                        ]
                    }
                },
                {
                    id: 2,
                    type: 'open',
                    title: "Etkinlik 2: Bayrak–Ülke Eşleştirmesi",
                    instruction: "Aşağıda verilen bayrakların (1-8) hangi ülkelere ait olduğunu yanlarına yazınız.\n(Ülkeler: İran, Yunanistan, Bulgaristan, Azerbaycan, Gürcistan, Irak, Ermenistan, Suriye)",
                    parts: [
                        { label: "1️⃣ 🇧🇬 →", lines: 1 },
                        { label: "2️⃣ 🇬🇷 →", lines: 1 },
                        { label: "3️⃣ 🇬🇪 →", lines: 1 },
                        { label: "4️⃣ 🇦🇿 →", lines: 1 },
                        { label: "5️⃣ 🇮🇷 →", lines: 1 },
                        { label: "6️⃣ 🇮🇶 →", lines: 1 },
                        { label: "7️⃣ 🇸🇾 →", lines: 1 },
                        { label: "8️⃣ 🇦🇲 →", lines: 1 }
                    ],
                    answer: {
                        type: 'example',
                        content: {
                            "1": "Bulgaristan",
                            "2": "Yunanistan",
                            "3": "Gürcistan",
                            "4": "Azerbaycan",
                            "5": "İran",
                            "6": "Irak",
                            "7": "Suriye",
                            "8": "Ermenistan"
                        }
                    }
                },
                {
                    id: 3,
                    type: 'open',
                    title: "Etkinlik 3: Doğru mu / Yanlış mı?",
                    instruction: "Aşağıdaki cümleleri okuyarak yanlarına 'D' (Doğru) veya 'Y' (Yanlış) yazınız.",
                    parts: [
                        { label: "( ) Yunanistan’ın başkenti Atina’dır.", lines: 1 },
                        { label: "( ) İran’ın para birimi Euro’dur.", lines: 1 },
                        { label: "( ) Azerbaycan’ın resmî dili Türkçedir.", lines: 1 },
                        { label: "( ) Bulgaristan bir cumhuriyet ile yönetilmektedir.", lines: 1 },
                        { label: "( ) Irak Türkiye’nin doğusunda yer alır.", lines: 1 },
                        { label: "( ) Gürcistan’ın para birimi Lira’dır.", lines: 1 },
                        { label: "( ) Ermenistan’ın başkenti Erivan’dır.", lines: 1 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "D (Atina)",
                            "Y (Riyal)",
                            "D (Azerbaycan Türkçesi)",
                            "D (Cumhuriyet)",
                            "Y (Güneyde)",
                            "Y (Lari)",
                            "D (Erivan)"
                        ]
                    }
                },
                {
                    id: 4,
                    type: 'table',
                    title: "Etkinlik 4: Türkiye - Yunanistan Karşılaştırması",
                    instruction: "Türkiye ve Yunanistan ülkelerini verilen özelliklere göre karşılaştırınız.",
                    headers: ["Özellik", "Türkiye 🇹🇷", "Yunanistan 🇬🇷"],
                    rows: [
                        { label: "Başkent", inputs: 2 },
                        { label: "Para Birimi", inputs: 2 },
                        { label: "Resmî Dil", inputs: 2 },
                        { label: "Yönetim Şekli", inputs: 2 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            ["Başkent", "Ankara", "Atina"],
                            ["Para Birimi", "Türk Lirası", "Avro"],
                            ["Resmî Dil", "Türkçe", "Yunanca"],
                            ["Yönetim Şekli", "Cumhuriyet", "Cumhuriyet"]
                        ]
                    }
                }
            ]
        }
    },
    3: { // Ünite 3: Ortak Mirasımız
        1: { // Bölüm 1: Ortak Mirasımız
            title: "Ortak Mirasımız - Etkinlikler",
            questions: [
                {
                    id: 1,
                    type: 'table',
                    subType: 'checkbox',
                    title: "Etkinlik 1: Eşleştirme Etkinliği",
                    instruction: "Aşağıdaki kültürel miras örneklerini uygun kutucuğa tıklayarak (✅) işaretleyiniz.",
                    headers: ["Kültürel Miras Örneği", "Tarihî Mekân", "Tarihî Eser", "Tarihî Nesne"],
                    rows: [
                        { label: "Topkapı Sarayı", inputs: 3 },
                        { label: "Nemrut Dağı Heykelleri", inputs: 3 },
                        { label: "Kadeş Antlaşması Tableti", inputs: 3 },
                        { label: "Safranbolu Evleri", inputs: 3 },
                        { label: "Selçuklu Kılıcı", inputs: 3 },
                        { label: "Göbeklitepe", inputs: 3 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            ["Topkapı Sarayı", "", "✔", ""],
                            ["Nemrut Dağı Heykelleri", "", "✔", ""],
                            ["Kadeş Antlaşması Tableti", "", "", "✔"],
                            ["Safranbolu Evleri", "✔", "", ""],
                            ["Selçuklu Kılıcı", "", "", "✔"],
                            ["Göbeklitepe", "✔", "", ""]
                        ]
                    }
                },
                {
                    id: 2,
                    type: 'open',
                    title: "Etkinlik 2: Düşün – Yaz – Yorumla",
                    instruction: "Aşağıdaki soruları kendi cümlelerinizle cevaplayınız.",
                    parts: [
                        { label: "1. Yaşadığınız ilde bulunan bir tarihî mekânı yazınız. Bu mekân neden ortak kültürel miras olarak kabul edilebilir?", lines: 3 },
                        { label: "2. Bir tarihî eserin veya nesnenin korunması neden sadece o ülke için değil, tüm insanlık için önemlidir?", lines: 3 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "1. Örnek: Yaşadığım ildeki kale geçmişteki yaşam hakkında bilgi verir. Sadece bize değil, tüm insanlığa ait olduğu için ortak mirastır.",
                            "2. Tarihî eserler insanlık tarihine ışık tutar. Geçmişi öğrenmemizi sağlar ve kültürler arası bağ kurar."
                        ]
                    }
                },
                {
                    id: 3,
                    type: 'open',
                    title: "Etkinlik 3: Senaryo Etkinliği",
                    instruction: "Bir tarihî alanı ziyaret ettiğinizi ve bazı ziyaretçilerin alana zarar verdiğini fark ettiğinizi hayal edin.",
                    parts: [
                        { label: "1. Böyle bir durumda nasıl davranırsınız?", lines: 2 },
                        { label: "2. Hangi kurumlara veya kişilere haber verirsiniz?", lines: 2 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "1. Zarar veren kişileri nazikçe uyarırım ve alanı korumaya çalışırım.",
                            "2. Görevlilere, müze müdürlüğüne veya en yakın yetkiliye haber veririm."
                        ]
                    }
                },
                {
                    id: 4,
                    type: 'open',
                    title: "Etkinlik 4: UNESCO Bilinci",
                    instruction: "Aşağıdaki ifadelerden doğru olanların başına 'D', yanlış olanların başına 'Y' yazınız.",
                    parts: [
                        { label: "( ) UNESCO yalnızca doğal güzellikleri korur.", lines: 1 },
                        { label: "( ) Somut olmayan kültürel miraslar gelenek, yemek ve törenleri kapsar.", lines: 1 },
                        { label: "( ) Kültürel miras yalnızca geçmişe aittir, günümüzde önemi yoktur.", lines: 1 },
                        { label: "( ) Kültürel miras gelecek nesillere aktarılmalıdır.", lines: 1 }
                    ],
                    answer: {
                        type: 'example',
                        content: [
                            "Y (Yanlış - Kültürel ve tarihî mirası da korur)",
                            "D (Doğru)",
                            "Y (Yanlış - Günümüzde kimliğimizi yansıtır ve önemlidir)",
                            "D (Doğru)"
                        ]
                    }
                }
            ]
        }
    }
};
