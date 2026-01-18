// Senaryo veritabanı - Sınav senaryoları
export const scenarioDatabase = {
    1: [ // 1. Yazılı
        {
            id: 1,
            title: "Senaryo 1",
            totalQuestions: 3,
            difficulty: "Dengeli",
            topics: [
                { area: "BİRLİKTE YAŞAMAK", topic: "Gruplar ve Roller", outcome: "SB.5.1.1", count: 1 },
                { area: "BİRLİKTE YAŞAMAK", topic: "Kültür", outcome: "SB.5.1.2", count: 1 },
                { area: "EVİMİZ DÜNYA", topic: "Konum", outcome: "SB.5.2.1", count: 1 }
            ]
        },
        {
            id: 2,
            title: "Senaryo 2",
            totalQuestions: 4,
            difficulty: "Kapsamlı",
            topics: [
                { area: "BİRLİKTE YAŞAMAK", topic: "Gruplar", outcome: "SB.5.1.1", count: 1 },
                { area: "BİRLİKTE YAŞAMAK", topic: "Kültür", outcome: "SB.5.1.2", count: 1 },
                { area: "BİRLİKTE YAŞAMAK", topic: "Yardımlaşma", outcome: "SB.5.1.3", count: 1 },
                { area: "EVİMİZ DÜNYA", topic: "Konum", outcome: "SB.5.2.1", count: 1 }
            ]
        },
        {
            id: 3,
            title: "Senaryo 3",
            totalQuestions: 5,
            difficulty: "Analiz",
            topics: [
                { area: "BİRLİKTE YAŞAMAK", topic: "Gruplar", count: 2 },
                { area: "BİRLİKTE YAŞAMAK", topic: "Kültür", count: 1 },
                { area: "BİRLİKTE YAŞAMAK", topic: "Yardımlaşma", count: 1 },
                { area: "EVİMİZ DÜNYA", topic: "Konum", count: 1 }
            ]
        },
        {
            id: 4,
            title: "Senaryo 4",
            totalQuestions: 6,
            difficulty: "Zor",
            topics: [
                { area: "BİRLİKTE YAŞAMAK", topic: "Gruplar", count: 2 },
                { area: "BİRLİKTE YAŞAMAK", topic: "Kültür", count: 2 },
                { area: "BİRLİKTE YAŞAMAK", topic: "Yardımlaşma", count: 2 }
            ]
        },
        {
            id: 5,
            title: "Senaryo 5",
            totalQuestions: 7,
            difficulty: "Tam Deneme",
            topics: [
                { area: "BİRLİKTE YAŞAMAK", topic: "Gruplar", count: 2 },
                { area: "BİRLİKTE YAŞAMAK", topic: "Kültür", count: 2 },
                { area: "BİRLİKTE YAŞAMAK", topic: "Yardımlaşma", count: 2 },
                { area: "EVİMİZ DÜNYA", topic: "Konum", count: 1 }
            ]
        }
    ],
    2: [ // 2. Yazılı
        {
            id: 1,
            title: "Senaryo 1",
            totalQuestions: 3,
            difficulty: "Temel",
            topics: [
                { area: "EVİMİZ DÜNYA", topic: "Çevre", count: 1 },
                { area: "EVİMİZ DÜNYA", topic: "Afetler", count: 1 },
                { area: "EVİMİZ DÜNYA", topic: "Komşular", count: 1 }
            ]
        },
        {
            id: 2,
            title: "Senaryo 2",
            totalQuestions: 4,
            difficulty: "Dengeli",
            topics: [
                { area: "EVİMİZ DÜNYA", topic: "Konum", count: 1 },
                { area: "EVİMİZ DÜNYA", topic: "Çevre", count: 1 },
                { area: "EVİMİZ DÜNYA", topic: "Afetler", count: 1 },
                { area: "ORTAK MİRAS", topic: "Miras", count: 1 }
            ]
        }
    ]
};
