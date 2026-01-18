# İzci Eğitim Botu - Kurulum ve Çalıştırma

## ✅ Tamamlanan Özellikler

### 📚 İçerik
- **3 Tam Ünite:**
  - 1. Ünite: Birlikte Yaşamak (Gruplar, Kültür, Yardımlaşma)
  - 2. Ünite: Evimiz Dünya (Konum, Çevre, Afetler, Komşular)
  - 3. Ünite: Ortak Mirasımız (Kültürel Miras, UNESCO)

### 🎯 Özellikler
- **3 Ana Menü Seçeneği:**
  1. Sınava Hazırlan - Konu anlatımı
  2. Sınav Senaryoları - MEB sınav yapısı
  3. Örnek Sorular - AI destekli

- **3 Soru Tipi:**
  - Klasik Sorular (Gemini AI ile değerlendirme)
  - Eşleştirme Soruları
  - Doğru/Yanlış Soruları

- **Gemini AI Entegrasyonu:**
  - Klasik soruları değerlendirme
  - Puan, güçlü yönler, öneriler
  - Benzer soru üretme

## 🚀 Kurulum

### 1. Node.js Kurulumu
Önce Node.js yüklemeniz gerekiyor:
- https://nodejs.org/ adresinden LTS versiyonunu indirin
- Kurulumu tamamlayın

### 2. Bağımlılıkları Yükleyin
```powershell
cd "c:/Users/kursa/Desktop/Yapay Zeka/İzci"
npm install
```

### 3. Uygulamayı Başlatın
```powershell
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

## 📁 Proje Yapısı

```
İzci/
├── src/
│   ├── App.jsx                 # Ana uygulama
│   ├── main.jsx               # React giriş noktası
│   ├── index.css              # Temel stiller
│   ├── gemini-service.js      # AI servisi
│   └── data/
│       ├── unitContents.js    # Ünite içerikleri
│       ├── practiceQuestions.js # Soru bankası
│       └── scenarioDatabase.js  # Sınav senaryoları
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Kullanım

1. **İsim Girişi:** Öğrenci adını gir
2. **Sınıf Seçimi:** 5. sınıf seç
3. **Amaç Seçimi:**
   - **Sınava Hazırlan:** Konuları oku
   - **Sınav Senaryoları:** Sınav yapısını gör
   - **Örnek Sorular:** Soru çöz, AI değerlendirmesi al

## 🤖 AI Özellikleri

- **Klasik Soru Değerlendirme:**
  - Öğrenci cevabını yaz
  - "Değerlendir" butonuna tıkla
  - AI puanlar ve geri bildirim verir

- **Akıllı Geri Bildirim:**
  - Puan (X/10)
  - Güçlü Yönler
  - Geliştirilecek Yönler
  - Öneriler
  - Moral Mesajı

## 🔧 Sorun Giderme

### Node.js bulunamadı hatası
- Node.js'i yükleyin: https://nodejs.org/
- PowerShell'i kapatıp tekrar açın

### Port zaten kullanımda
```powershell
npm run dev -- --port 3000
```

## 📝 Notlar

- Gemini API key zaten kodda mevcut
- Tüm içerikler Türkçe
- Mobil uyumlu tasarım
- Offline çalışmaz (AI için internet gerekli)

## 🎯 YetGen Proje Uyumu

✅ Persona: Ekonomik imkanları kısıtlı öğrenciler
✅ Problem: Ücretsiz sınav hazırlık eksikliği
✅ Çözüm: AI destekli ücretsiz eğitim botu
✅ Teknoloji: React + Gemini AI
✅ Etki: Eşit eğitim fırsatı

---

**Hazırlayan:** İzci Ekibi
**Tarih:** 16 Ocak 2026
**Versiyon:** 1.0.0
