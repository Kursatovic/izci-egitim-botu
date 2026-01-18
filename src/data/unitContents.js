// Tüm ünite içerikleri - 5. Sınıf Sosyal Bilgiler (GENİŞLETİLMİŞ)
import { Users, Globe, Map, Heart, Home, School, Utensils, Music, Star, Book, HelpCircle, AlertTriangle } from 'lucide-react';
import React from 'react';

export const unitContents = {
    1: {
        title: "1. Ünite: Birlikte Yaşamak",
        sections: [
            {
                title: "Gruplar ve Roller",
                icon: <Users size={16} />,
                content: [
                    {
                        type: 'def',
                        title: "Grup Nedir?",
                        text: "Aynı amaç için bir araya gelen, aralarında ilişki ve iş birliği olan insan topluluğudur. Örnek: Aile, Sınıf, İzcilik Kulübü, Spor Takımı"
                    },
                    {
                        type: 'section_header',
                        title: "Dâhil Olduğumuz Gruplar",
                        text: "İnsan, yaşamı boyunca farklı grupların içinde yer alır. Her grupta farklı roller üstleniriz."
                    },
                    {
                        type: 'grid_list',
                        items: [
                            { title: "Yakın Çevre", icon: <Home size={16} />, text: "Aile, Akrabalar, Komşular" },
                            { title: "Okul", icon: <School size={16} />, text: "Kulüpler, Takımlar, Okul Topluluğu" },
                            { title: "Sınıf", icon: <Users size={16} />, text: "Arkadaşlar, Grup Çalışmaları" }
                        ]
                    },
                    {
                        type: 'def',
                        title: "Rol Nedir?",
                        text: "Bir grubun içinde üstlendiğimiz görev ve sorumluluklardır. Örnek: Ailede çocuk, Sınıfta öğrenci, Kulüpte üye."
                    },
                    {
                        type: 'alert',
                        title: "Önemli!",
                        text: "Bir kişi aynı anda birden fazla grupta farklı roller üstlenebilir. Bu roller zamanla değişebilir."
                    },
                    {
                        type: 'list',
                        title: "Ortaokullu Olunca Değişenler",
                        items: [
                            "Sorumluluklar artar ve çeşitlenir",
                            "Ders takibi ve ödev sorumluluğu önem kazanır",
                            "Hak ve görev bilinci gelişir",
                            "Grup çalışmalarında daha aktif rol alınır",
                            "Karar verme süreçlerine katılım artar"
                        ]
                    },
                    {
                        type: 'compare_detailed',
                        leftTitle: "HAKLARIMIZ",
                        rightTitle: "SORUMLULUKLARIMIZ",
                        leftItems: [
                            { sub: "Genel", txt: "Saygı görme, İfade özgürlüğü, Güvende olma" },
                            { sub: "Öğrenci", txt: "Eğitim alma, Kütüphane kullanımı, Dinlenme" },
                            { sub: "Kulüp", txt: "Etkinliklere katılma, Söz hakkı alma" }
                        ],
                        rightItems: [
                            { sub: "Genel", txt: "Kurallara uyma, Saygılı olma, Dürüst davranma" },
                            { sub: "Öğrenci", txt: "Ders çalışmak, Ödev yapmak, Okula düzenli gitmek" },
                            { sub: "Lider", txt: "Görev dağılımı yapmak, Grup üyelerine destek olmak" }
                        ]
                    },
                    {
                        type: 'def',
                        title: "Hak ve Sorumluluk İlişkisi",
                        text: "Haklar ve sorumluluklar birbirini tamamlar. Her hakkın karşılığında bir sorumluluk vardır. Örneğin, eğitim alma hakkımız varken, derse katılma ve ödev yapma sorumluluğumuz vardır."
                    }
                ]
            },
            {
                title: "Kültürel Ögelerimiz",
                icon: <Globe size={16} />,
                content: [
                    {
                        type: 'def',
                        title: "Kültürel Öge Nedir?",
                        text: "Bir toplumun yaşam biçimini yansıtan, geçmişten günümüze aktarılan maddi ve manevi değerlerin tamamıdır. Kültür bizi biz yapan, toplumumuzu diğerlerinden ayıran özelliklerdir."
                    },
                    {
                        type: 'section_header',
                        title: "Kültürümüzün Temel Unsurları",
                        text: "Türk kültürü zengin ve çeşitli ögelerden oluşur:"
                    },
                    {
                        type: 'list',
                        title: "1. Bayramlarımız",
                        items: [
                            "Dinî Bayramlar: Ramazan Bayramı, Kurban Bayramı",
                            "Millî Bayramlar: 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı, 29 Ekim Cumhuriyet Bayramı",
                            "Mevsimlik Bayramlar: Nevruz (21 Mart), Hıdırellez (6 Mayıs)"
                        ],
                        footer: "📌 Bayramlar birlik, paylaşma ve dayanışmayı artırır. İnsanları bir araya getirir."
                    },
                    {
                        type: 'list',
                        title: "2. Düğünler ve Törenler",
                        items: [
                            "Düğün (Evlilik törenleri - yöresel farklılıklar)",
                            "Sünnet Düğünü (Erkek çocukların sünnet edilmesi)",
                            "Asker Uğurlama (Askere giden gençleri uğurlama)",
                            "Kına Gecesi, Nişan gibi geleneksel törenler"
                        ],
                        footer: "📌 Törenler toplumsal bağları güçlendirir ve kültürel sürekliliği sağlar."
                    },
                    {
                        type: 'section_header',
                        title: "Kültür Hazinemiz",
                        text: "Mutfağımızdan sanatımıza, bizi biz yapan değerler:"
                    },
                    {
                        type: 'grid_list',
                        items: [
                            { title: "Türk Mutfağı", icon: <Utensils size={16} />, text: "Yöresel yemekler, Türk kahvesi, çay kültürü. Misafirperverlik geleneği." },
                            { title: "Giyisilerimiz", icon: <Users size={16} />, text: "Cepken, Şalvar, Üç etek, Peştemal, Fes. Yöresel kıyafetler." },
                            { title: "Halk Oyunları", icon: <Music size={16} />, text: "Zeybek, Horon, Halay, Atabarı, Hora. Duygu ve tarih aktarımı." },
                            { title: "El Sanatları", icon: <Star size={16} />, text: "Çini, Ebru, Hat, Bakırcılık, Halıcılık, Kilimcilik. Sabır ve emek." },
                            { title: "Dilimiz", icon: <Book size={16} />, text: "Fıkra, Mani, Destan, Türkü, Atasözleri. Kuşaklar arası aktarım." }
                        ]
                    },

                    {
                        type: 'def',
                        title: "Kültürel Farklılıklar",
                        text: "Türkiye'de farklı bölgelerde farklı kültürel özellikler görülür. Bu farklılıklar zenginliktir. Örneğin, Karadeniz'de horon oynanırken, Ege'de zeybek oynanır. Her ikisi de değerlidir."
                    },
                    {
                        type: 'alert',
                        title: "Kültürel Zenginlik",
                        text: "Farklı kültürlerin bir arada yaşaması toplumu zenginleştirir. Birbirimizin kültürüne saygı duymak, birlikte yaşamanın temelidir."
                    },
                    {
                        type: 'code',
                        title: "KISA ÖZET",
                        text: "Kültür bizi biz yapar → Bizi bir araya getirir → Korunmazsa unutulur"
                    }
                ]
            },
            {
                title: "Yardımlaşma ve Dayanışma",
                icon: <Heart size={16} />,
                content: [

                    {
                        type: 'def',
                        title: "1. Yardımlaşma ve Dayanışma Nedir?",
                        text: "Yardımlaşma, insanların ihtiyaç duyduklarında birbirlerine destek olmalarıdır. Dayanışma ise zor ve iyi günlerde birlikte hareket etmek, birlik olmaktır. Toplumda bu değerler varsa toplumsal birlik güçlenir."
                    },
                    {
                        type: 'section_header',
                        title: "2. Geçmişten Günümüze Yardımlaşma Örnekleri",
                        text: "Kültürümüzde yardımlaşma her zaman ön planda olmuştur:"
                    },
                    {
                        type: 'def',
                        title: "Sadaka Taşı (Osmanlı - Selçuklu)",
                        text: "İhtiyaç sahibi kimse görmeden ihtiyacı kadar para alırdı. Veren kişi de alan kişi de incinmezdi. Bu uygulama mahremiyet, saygı ve yardımlaşma anlayışını gösterir."
                    },
                    {
                        type: 'alert',
                        title: "📌 Önemli Nokta",
                        text: "Yardım yapılırken kişinin onuru korunmalıdır. En güzel yardım, alanı incitmeden yapılandır."
                    },
                    {
                        type: 'def',
                        title: "Millî Mücadele Dönemi",
                        text: "Halk; orduya giysi, yiyecek, silah ve para yardımı yaparak vatanı için birlik oldu. Zor zamanlarda dayanışma milletleri ayakta tutar."
                    },
                    {
                        type: 'section_header',
                        title: "3. Günümüzde Yardımlaşma ve Dayanışma",
                        text: "Günümüzde yardımlaşma devlet kurumları ve sivil toplum kuruluşları aracılığıyla yapılır:"
                    },
                    {
                        type: 'def',
                        title: "Türk Kızılay",
                        text: "Afetlerde barınma, gıda ve sağlık yardımı yapar. '2. El Tekstil' gibi projelerle paylaşma ve sorumluluk bilinci oluşturur."
                    },
                    {
                        type: 'def',
                        title: "Aile ve Sosyal Hizmetler Bakanlığı",
                        text: "Yaşlı, engelli ve ihtiyaç sahibi bireylere destek olur. Ulusal Vefa Programı ile vatandaşların yalnız kalmasını önler."
                    },
                    {
                        type: 'def',
                        title: "4. Sosyal Sorumluluk Nedir?",
                        text: "Bireylerin ve grupların toplum için faydalı işler yapmasıdır. Sosyal sorumluluk bilinci empatiyi geliştirir ve toplumsal bağları güçlendirir."
                    },
                    {
                        type: 'list',
                        title: "Sosyal Sorumluluk Örnekleri",
                        items: [
                            "Deprem bölgesine yardım kampanyası düzenlemek",
                            "Okulda sadaka kutusu oluşturmak",
                            "İhtiyaç sahipleri için kermes düzenlemek",
                            "Gönüllü çalışmalara katılma"
                        ]
                    },
                    {
                        type: 'alert',
                        title: "Birlikte Yaşamın Anahtarı",
                        text: "Yardımlaşma (kalpten gelen destek) + Dayanışma (omuz omuza durmak) + Sosyal Sorumluluk (toplum görevi) = Güçlü bir toplum."
                    },
                    {
                        type: 'code',
                        title: "✨ KISA ÖZET",
                        text: "Yardımlaşma ve dayanışma toplumu bir arada tutan en büyük güçtür."
                    }
                ]
            }
        ]
    },
    2: {
        title: "2. Ünite: Evimiz Dünya",
        sections: [
            {
                title: "İlimizin Göreceli Konumu",
                icon: <Map size={16} />,
                content: [

                    {
                        type: 'def',
                        title: "1. Göreceli Konum Nedir?",
                        text: "Göreceli konum, bir yerin başka yerlere göre nerede bulunduğunu ifade eder. Bir yeri çevresindeki yerlere bakarak; yön, mesafe, ulaşım ve komşular gibi özelliklerle tanımlıyorsak göreceli konumdan söz ederiz. Örnek: 'Okulum, hastanenin doğusunda ve belediyenin karşısındadır.'"
                    },
                    {
                        type: 'section_header',
                        title: "2. Göreceli Konum Belirtilirken Neler Kullanılır?",
                        text: "Bir ilin göreceli konumu anlatılırken şu unsurlardan yararlanılır:"
                    },
                    {
                        type: 'grid_list',
                        items: [
                            { title: "Yönler", icon: <Map size={16} />, text: "Kuzey, Güney, Doğu, Batı ve ara yönler. Örnek: 'İlimiz, Karadeniz’in güneyinde yer alır.'" },
                            { title: "Ulaşım Yolları", icon: <Users size={16} />, text: "Kara, demir, hava ve deniz yolları. Örnek: 'İlimiz kara ve demir yolu ulaşımına sahiptir.'" },
                            { title: "Yeryüzü Şekilleri", icon: <Globe size={16} />, text: "Dağlar, ovalar, platolar, vadiler. Örnek: 'İlimiz dağlık bir yapıya sahiptir.'" },
                            { title: "Su Kaynakları", icon: <Utensils size={16} />, text: "Deniz, göl, akarsu, baraj. Örnek: 'İlimiz bir göl kenarında kurulmuştur.'" },
                            { title: "Güzellikler", icon: <Star size={16} />, text: "Tarihi eserler, milli parklar, doğal oluşumlar. Örnek: 'İlimiz turistik açıdan gelişmiştir.'" },
                            { title: "Komşular", icon: <Users size={16} />, text: "Kara sınırı olan iller ve ülkeler. Örnek: 'İlimiz Gürcistan ile sınır komşusudur.'" }
                        ]
                    },
                    {
                        type: 'def',
                        title: "Haritalar Göreceli Konumu Nasıl Gösterir?",
                        text: "Siyasi (İdari) Harita: İl ve ilçe sınırlarını, komşu illeri gösterir. Fiziki Harita: Dağ, ova, akarsu gibi doğal unsurları gösterir. Bu iki harita birlikte kullanılarak ilin göreceli konumu belirlenir."
                    },
                    {
                        type: 'alert',
                        title: "📝 Model Cevap: Bir İlin Göreceli Konumu",
                        text: "“Bursa, Marmara Bölgesi’nde yer alır. İstanbul’un güneyinde bulunur. Deniz ulaşımına sahiptir. Uludağ il sınırları içindedir. Tarihi ve turistik özellikleri gelişmiştir.”"
                    },
                    {
                        type: 'code',
                        title: "⭐ UNUTMA!",
                        text: "Göreceli konum kişiye ve yere göre değişebilir. Çevre değişirse konum tarifi de değişir. Günlük hayatta en sık kullandığımız konum türüdür."
                    }
                ]
            },
            {
                title: "Doğal ve Beşerî Çevremizdeki Değişim",
                icon: <Globe size={16} />,
                content: [

                    {
                        type: 'def',
                        title: "1. Çevre Nedir?",
                        text: "İnsanların ve diğer canlıların yaşamlarını sürdürdükleri ortama çevre denir. Çevre, doğal çevre ve beşerî çevre olmak üzere ikiye ayrılır. Bu iki çevre birbiriyle sürekli etkileşim hâlindedir ve zamanla değişime uğrar."
                    },
                    {
                        type: 'section_header',
                        title: "2. Doğal Çevre",
                        text: "Doğal çevre, insan eli değmeden oluşmuş, kendiliğinden meydana gelen varlıklardan oluşur."
                    },

                    {
                        type: 'grid_list',
                        items: [
                            { title: "Dağ & Ova", icon: <Map size={16} />, text: "Yeryüzü şekillerinin temel yapı taşları." },
                            { title: "Su Kaynakları", icon: <Utensils size={16} />, text: "Akarsu, göl, deniz ve şelaleler." },
                            { title: "Canlı Yaşamı", icon: <Globe size={16} />, text: "Ormanlar ve doğal yaşam alanları." }
                        ]
                    },
                    {
                        type: 'def',
                        title: "Doğal Çevrenin Önemi",
                        text: "İnsanların ve canlıların su, besin ve oksijen ihtiyacını karşılar. Yerleşim yerlerinin kurulacağı alanları, tarım, hayvancılık ve ulaşımı etkiler."
                    },
                    {
                        type: 'section_header',
                        title: "3. Beşerî Çevre",
                        text: "Beşerî çevre, insanların ihtiyaçlarını karşılamak amacıyla doğayı değiştirerek oluşturduğu çevredir."
                    },
                    {
                        type: 'list',
                        title: "Beşerî Çevre Örnekleri",
                        items: [
                            "Evler ve apartmanlar",
                            "Yollar, köprüler, barajlar",
                            "Okullar, hastaneler, camiler",
                            "Sanayi tesisleri ve şehirler"
                        ],
                        footer: "📌 Beşerî çevre zamanla büyür, gelişir ve doğal çevreyi de etkiler."
                    },
                    {
                        type: 'section_header',
                        title: "4. Çevrede Zamanla Yaşanan Değişim",
                        text: "Geçmişten günümüze çevremiz büyük bir dönüşüm geçirdi:"
                    },

                    {
                        type: 'compare_detailed',
                        leftTitle: "GEÇMİŞTE",
                        rightTitle: "GÜNÜMÜZDE",
                        leftItems: [
                            { sub: "Yerleşim", txt: "Küçük ve seyrek yerleşimler" },
                            { sub: "Mimari", txt: "Tek katlı evler yaygın" },
                            { sub: "Doğa", txt: "Geniş tarım alanları, temiz hava" }
                        ],
                        rightItems: [
                            { sub: "Yerleşim", txt: "Hızla yayılan büyük şehirler" },
                            { sub: "Mimari", txt: "Çok katlı binalar artmış" },
                            { sub: "Doğa", txt: "Artan kirlilik ve azalan yeşil alan" }
                        ]
                    },
                    {
                        type: 'list',
                        title: "5. Çevredeki Değişimin Nedenleri",
                        items: [
                            "Nüfus artışı ve sanayileşme",
                            "Teknolojik gelişmeler",
                            "Ulaşım ağlarının gelişmesi",
                            "İnsanların yaşam standartlarını artırma isteği",
                            "Doğal kaynakların bilinçsiz kullanımı"
                        ]
                    },
                    {
                        type: 'def',
                        title: "6. Doğal Kaynakların Beşerî Çevreye Etkisi",
                        text: "Doğal kaynakların varlığı beşerî çevrenin gelişmesini sağlar. Maden olan yerde sanayi, doğal güzellik olan yerde turizm gelişir."
                    },
                    {
                        type: 'compare_detailed',
                        leftTitle: "✅ OLUMLU SONUÇLAR",
                        rightTitle: "❌ OLUMSUZ SONUÇLAR",
                        leftItems: [
                            { sub: "Ekonomi", txt: "Ekonomik gelişme ve refah artışı" },
                            { sub: "Hizmetler", txt: "Sağlık ve eğitim hizmetlerine erişim" }
                        ],
                        rightItems: [
                            { sub: "Kirlilik", txt: "Çevre kirliliği ve kaynakların azalması" },
                            { sub: "İklim", txt: "Doğal yaşamın bozulması ve iklim değişikliği" }
                        ]
                    },
                    {
                        type: 'alert',
                        title: "8. Doğal ve Beşerî Çevreyi Korumanın Önemi",
                        text: "Doğal ve beşerî çevre gelecek nesillere aktarılması gereken ortak mirastır. Doğal kaynaklar bilinçli kullanılmalı ve ağaçlandırma yapılmalıdır."
                    },
                    {
                        type: 'code',
                        title: "📌 KISA ÖZET",
                        text: "Doğal çevre: Kendiliğinden oluşur | Beşerî çevre: İnsan eliyle yapılır | Sorumluluk: Çevreyi koruyarak yaşamak"
                    }
                ]
            },
            {
                title: "Afetler ve Etkileri",
                icon: <AlertTriangle size={16} />,
                content: [
                    {
                        type: 'def',
                        title: "Afet Nedir?",
                        text: "İnsanların can ve mal güvenliğini tehdit eden doğal ya da insan kaynaklı olaylardır. Her doğa olayı afet değildir. Önlem alınmadığında ve zarar verdiğinde afet haline gelir."
                    },
                    {
                        type: 'alert',
                        title: "Önemli Söz",
                        text: "Deprem değil, ihmal öldürür! Bu söz, afetlerin zararının çoğu zaman önlemsizlikten kaynaklandığını anlatır."
                    },
                    {
                        type: 'section_header',
                        title: "Türkiye'de Görülebilecek Başlıca Afetler",
                        text: "Türkiye'nin coğrafi konumu, iklimi ve yer şekilleri nedeniyle farklı afetler görülebilir:"
                    },
                    {
                        type: 'list',
                        title: "Yer Kabuğu Hareketlerine Bağlı Afetler",
                        items: [
                            "Deprem - Yer kabuğundaki fay hatlarının kırılması",
                            "Heyelan (Toprak kayması) - Eğimli arazilerde toprağın kayması",
                            "Kaya düşmesi - Dağlık alanlarda kayaların düşmesi",
                            "Çığ - Dağlık alanlarda kar kütlelerinin kayması"
                        ]
                    },
                    {
                        type: 'list',
                        title: "İklim ve Hava Olaylarına Bağlı Afetler",
                        items: [
                            "Sel - Aşırı yağış sonucu suyun taşması",
                            "Erozyon - Toprağın rüzgar veya su ile taşınması",
                            "Kuraklık - Uzun süre yağış olmaması",
                            "Fırtına ve Hortum - Şiddetli rüzgarlar",
                            "Aşırı yağış, dolu"
                        ]
                    },
                    {
                        type: 'list',
                        title: "Doğal + Beşeri Etkenli Afetler",
                        items: [
                            "Orman yangını - Yüksek sıcaklık, kuraklık veya insan ihmali",
                            "Obruk oluşumu - Yeraltı sularının azalması",
                            "Çölleşme - Bitki örtüsünün yok olması"
                        ]
                    },
                    {
                        type: 'section_header',
                        title: "Afetlere Karşı Alınabilecek Önlemler",
                        text: "Afetler önlenemeyebilir ama etkileri azaltılabilir:"
                    },
                    {
                        type: 'list',
                        title: "Afet Öncesinde",
                        items: [
                            "Afet bilinci kazanılmalı (deprem çantası hazırlama)",
                            "Sağlam ve kurallara uygun yapılar yapılmalı",
                            "Acil durum planları hazırlanmalı",
                            "AFAD gibi kurumların uyarıları takip edilmeli",
                            "Güvenli alanlar belirlenmeli (toplanma alanları)"
                        ]
                    },
                    {
                        type: 'list',
                        title: "Afet Sırasında",
                        items: [
                            "Panik yapılmamalı, sakin kalınmalı",
                            "Güvenli alanlara geçilmeli (masa altı, hayat üçgeni)",
                            "Yetkililerin uyarılarına uyulmalı",
                            "Elektrik ve gaz vanası kapatılmalı"
                        ]
                    },
                    {
                        type: 'list',
                        title: "Afet Sonrasında",
                        items: [
                            "Yaralılara yardım edilmeli",
                            "Hasarlı binalardan uzak durulmalı",
                            "Resmi açıklamalar takip edilmeli",
                            "Dayanışma ve yardımlaşma sağlanmalı",
                            "Artçı sarsıntılara dikkat edilmeli"
                        ]
                    },
                    {
                        type: 'def',
                        title: "AFAD'ın Rolü",
                        text: "AFAD (Afet ve Acil Durum Yönetimi Başkanlığı): Afet öncesi bilgilendirme, afet sırasında arama-kurtarma, afet sonrası yardım ve iyileştirme çalışmaları yapar. AFAD'dan gelen uyarı mesajları hayat kurtarıcıdır."
                    }
                ]
            },
            {
                title: "Komşu Devletlerimiz",
                icon: <Globe size={16} />,
                content: [
                    {
                        type: 'def',
                        title: "1. Komşu Devlet Nedir?",
                        text: "Bir ülkenin kara sınırı paylaştığı ülkelere komşu devletler denir. Türkiye, Asya ile Avrupa arasında yer alan stratejik konumu nedeniyle hem Asya hem de Avrupa ülkeleriyle komşudur. Sınırlar ülkelerin egemenlik alanlarını belirler."
                    },
                    {
                        type: 'section_header',
                        title: "2. Türkiye’nin 8 Kara Komşusu",
                        text: "Ülkemizin farklı yönlerinde yer alan komşu devletler:"
                    },
                    {
                        type: 'list',
                        title: "Komşularımız ve Yönleri",
                        items: [
                            "➡️ Batı: Yunanistan, Bulgaristan",
                            "➡️ Kuzeydoğu: Gürcistan",
                            "➡️ Doğu: Ermenistan, Azerbaycan (Nahçıvan)",
                            "➡️ Güneydoğu: İran",
                            "➡️ Güney: Irak, Suriye"
                        ]
                    },
                    {
                        type: 'section_header',
                        title: "3. İlişkilerin Önemi",
                        text: "Komşu ülkelerle iyi geçinmek her iki taraf için de değerlidir:"
                    },
                    {
                        type: 'grid_list',
                        items: [
                            { title: "Ticaret", icon: <Utensils size={16} />, text: "Mal ve ürün alışverişi yapılır." },
                            { title: "Ulaşım", icon: <Map size={16} />, text: "Sınır kapıları ve yollar kullanılır." },
                            { title: "Kültür", icon: <Music size={16} />, text: "Yemek, müzik ve gelenek etkileşimi." },
                            { title: "Güvenlik", icon: <HelpCircle size={16} />, text: "Barış ve sınır güvenliği sağlanır." }
                        ]
                    },
                    {
                        type: 'list',
                        title: "4. Ülkelerin Tanıtıcı Özellikleri",
                        items: [
                            "🇺🇳 Bayrak: Bağımsızlık simgesidir.",
                            "🏛️ Başkent: Yönetim merkezidir.",
                            "🗣️ Resmî Dil: Konuşulan ana dildir.",
                            "💰 Para Birimi: Kullanılan resmî paradır.",
                            "⚖️ Yönetim Şekli: Cumhuriyet, monarşi vb."
                        ]
                    },
                    {
                        type: 'def',
                        title: "5. Kültürel Benzerlikler",
                        text: "Ortak tarihimiz nedeniyle komşu ülkelerle benzer yemekler (dolma, baklava gibi), gelenekler ve kelimeler paylaşırız. Bu farklılıklar ve benzerlikler dünya kültürünü zenginleştirir."
                    },
                    {
                        type: 'section_header',
                        title: "🌍 Komşu Devletleri Tanıyalım",
                        text: "8 komşumuzun temel özellikleri:"
                    },
                    {
                        type: 'grid_list',
                        items: [
                            {
                                title: "Yunanistan",
                                icon: <img src="https://flagcdn.com/w80/gr.png" alt="Yunanistan Bayrağı" style={{ width: '40px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />,
                                text: "Atina | Yunanca | Avro (€) | Cumhuriyet / Batıda"
                            },
                            {
                                title: "Bulgaristan",
                                icon: <img src="https://flagcdn.com/w80/bg.png" alt="Bulgaristan Bayrağı" style={{ width: '40px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />,
                                text: "Sofya | Bulgarca | Lev | Cumhuriyet / Batıda"
                            },
                            {
                                title: "Gürcistan",
                                icon: <img src="https://flagcdn.com/w80/ge.png" alt="Gürcistan Bayrağı" style={{ width: '40px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />,
                                text: "Tiflis | Gürcüce | Lari | Cumhuriyet / Kuzeydoğuda"
                            },
                            {
                                title: "Ermenistan",
                                icon: <img src="https://flagcdn.com/w80/am.png" alt="Ermenistan Bayrağı" style={{ width: '40px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />,
                                text: "Erivan | Ermenice | Dram | Cumhuriyet / Doğuda"
                            },
                            {
                                title: "Azerbaycan",
                                icon: <img src="https://flagcdn.com/w80/az.png" alt="Azerbaycan Bayrağı" style={{ width: '40px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />,
                                text: "Bakü | Azerice | Manat | Cumhuriyet / Doğuda (Nahçıvan)"
                            },
                            {
                                title: "İran",
                                icon: <img src="https://flagcdn.com/w80/ir.png" alt="İran Bayrağı" style={{ width: '40px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />,
                                text: "Tahran | Farsça | Riyal | İslam Cumh. / Güneydoğuda"
                            },
                            {
                                title: "Irak",
                                icon: <img src="https://flagcdn.com/w80/iq.png" alt="Irak Bayrağı" style={{ width: '40px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />,
                                text: "Bağdat | Arapça | Dinar | Cumhuriyet / Güneyde"
                            },
                            {
                                title: "Suriye",
                                icon: <img src="https://flagcdn.com/w80/sy.png" alt="Suriye Bayrağı" style={{ width: '40px', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />,
                                text: "Şam | Arapça | Suriye Lirası | Cumhuriyet / Güneyde"
                            }
                        ]
                    },
                    {
                        type: 'alert',
                        title: "Bilgi Kutusu: Türkiye",
                        text: <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <img src="https://flagcdn.com/w80/tr.png" alt="Türkiye Bayrağı" style={{ width: '30px', height: 'auto', borderRadius: '3px' }} />
                            <span>Başkent: Ankara | Resmî Dil: Türkçe | Para Birimi: TL | Yönetim: Cumhuriyet</span>
                        </div>
                    }
                ]
            }
        ]
    },
    3: {
        title: "3. Ünite: Ortak Mirasımız",
        sections: [
            {
                title: "Kültürel Mirasımız",
                icon: <Star size={16} />,
                content: [
                    {
                        type: 'def',
                        title: "1. Ortak Kültürel Miras Nedir?",
                        text: "Ortak kültürel miras; bir toplumun geçmişten günümüze taşıdığı, kimliğini yansıtan maddi ve manevi değerlerin tamamıdır. Bu miras yalnızca bireylere değil, tüm insanlığa aittir."
                    },
                    {
                        type: 'list',
                        title: "Ortak Mirasın Rolü",
                        items: [
                            "🔗 Geçmiş ile bugün arasında bağ kurar.",
                            "🤝 Toplumsal birlik ve aidiyet duygusunu güçlendirir.",
                            "🔄 Kültürel sürekliliği sağlar."
                        ]
                    },
                    {
                        type: 'section_header',
                        title: "2. Somut ve Somut Olmayan Miras",
                        text: "Kültürel mirasımız iki ana başlıkta incelenir:"
                    },
                    {
                        type: 'compare_detailed',
                        leftTitle: "Somut Miras (Maddi)",
                        leftItems: [
                            { sub: "Özellik", txt: "Gözle görülebilir, elle tutulabilir." },
                            { sub: "Örnekler", txt: "Tarihî yapılar, antik kentler, doğal oluşumlar." }
                        ],
                        rightTitle: "Somut Olmayan (Manevi)",
                        rightItems: [
                            { sub: "Özellik", txt: "Gelenekler ve yaşam biçimleri." },
                            { sub: "Örnekler", txt: "Törenler, halk oyunları, el sanatları, yemek kültürü." }
                        ]
                    },
                    {
                        type: 'section_header',
                        title: "🏛️ Önemli Tanımlar",
                        text: "Karıştırmayalım: Mekân, Eser ve Nesne farkı:"
                    },
                    {
                        type: 'def',
                        title: "Tarihî Mekân",
                        text: "Geçmişte insanların yaşadığı veya önemli olayların geçtiği coğrafi alanlardır. Örnek: Çanakkale Şehitliği, Efes Antik Kenti, Safranbolu Tarihî Kenti."
                    },
                    {
                        type: 'def',
                        title: "Tarihî Eser",
                        text: "İnsanlar tarafından inşa edilmiş, mimari veya sanatsal değeri olan yapılardır. Genellikle mekânların içindedir. Örnek: Süleymaniye Camii, İshak Paşa Sarayı, Sümela Manastırı."
                    },
                    {
                        type: 'def',
                        title: "Tarihî Nesne",
                        text: "Geçmişte kullanılmış, taşınabilir eşyalardır. Müzelerde sergilenir. Örnek: Pazarık Halısı, Kaşıkçı Elması, Osmanlı sikkeleri, eski silahlar."
                    }
                ]
            },
            {
                title: "UNESCO ve Korunma",
                icon: <Globe size={16} />,
                content: [
                    {
                        type: 'def',
                        title: "3. UNESCO Nedir?",
                        text: "UNESCO (Birleşmiş Milletler Eğitim, Bilim ve Kültür Kurumu), dünya genelinde kültürel ve doğal mirasın korunmasını amaçlayan uluslararası bir kuruluştur."
                    },
                    {
                        type: 'section_header',
                        title: "4. Türkiye'nin UNESCO Somut Mirasları",
                        text: "Ülkemizin dünya listesindeki gurur kaynakları:"
                    },
                    {
                        type: 'grid_list',
                        items: [
                            { title: "Kültürel Alanlar", icon: <Map size={16} />, text: "Göbeklitepe, Efes, Nemrut Dağı, Ani Arkeolojik Alanı, Troya, Hattuşa, Safranbolu." },
                            { title: "Karma/Doğal", icon: <Star size={16} />, text: "Pamukkale Travertenleri ve Kapadokya (Göreme Milli Parkı)." }
                        ]
                    },
                    {
                        type: 'section_header',
                        title: "5. Somut Olmayan Kültürel Miras Listemiz",
                        text: "Yaşayan geleneklerimiz:"
                    },
                    {
                        type: 'list',
                        title: "UNESCO Temsili Listesi",
                        items: [
                            "🎭 Karagöz-Hacivat Gölge Oyunu",
                            "☕ Türk Kahvesi Kültürü",
                            "🎨 Ebru ve Çini Sanatı",
                            "🤼 Kırkpınar Yağlı Güreşleri",
                            "🧘 Mevlevi Sema Törenleri",
                            "🏹 Türk Okçuluğu ve Çay Kültürü",
                            "🎶 Âşıklık Geleneği ve Nevruz"
                        ]
                    },
                    {
                        type: 'section_header',
                        title: "6. Korumanın Önemi",
                        text: "Neden korumalıyız?"
                    },
                    {
                        type: 'grid_list',
                        items: [
                            { title: "Bilinç", icon: <Book size={16} />, text: "Tarih bilincini ve kültürel kimliği geliştirir." },
                            { title: "Ekonomi", icon: <Map size={16} />, text: "Turizm yoluyla ekonomiye katkı sağlar." },
                            { title: "Gelecek", icon: <Star size={16} />, text: "Gelecek kuşaklara değer aktarılmasını sağlar." }
                        ]
                    },
                    {
                        type: 'alert',
                        title: "📌 Unutma!",
                        text: "Ortak miras, geçmişin emaneti ve geleceğin sorumluluğudur. Tarihî eserleri korumalı ve geleneklerimizi yaşatmalıyız."
                    }
                ]
            }
        ]
    }
};
