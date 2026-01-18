# 🚀 İzci Uygulamasını Çalıştırma Rehberi

## Adım 1: Node.js Kurulumu

### 1.1 Node.js İndir
1. Bu linke tıkla: https://nodejs.org/tr/download
2. Yeşil **"Windows Installer (.msi)"** butonuna tıkla
3. İndirilen dosyayı çalıştır

### 1.2 Node.js Kur
1. İndirilen `.msi` dosyasına çift tıkla
2. "Next" (İleri) butonlarına tıklayarak devam et
3. Tüm varsayılan ayarları kabul et
4. "Install" butonuna tıkla
5. Kurulum bitince "Finish" butonuna tıkla

### 1.3 Kurulumu Kontrol Et
1. **PowerShell'i KAPAT ve TEKRAR AÇ** (Önemli!)
2. Şu komutu çalıştır:
```powershell
node --version
```
3. Bir versiyon numarası görmelisin (örn: v24.13.0)

---

## Adım 2: Proje Bağımlılıklarını Yükle

### 2.1 Proje Klasörüne Git
PowerShell'de şu komutu çalıştır:
```powershell
cd "c:/Users/kursa/Desktop/Yapay Zeka/İzci"
```

### 2.2 Bağımlılıkları Yükle
```powershell
npm install
```

Bu komut:
- React'i yükleyecek
- Vite'i yükleyecek
- Lucide-react (ikonlar) yükleyecek
- Birkaç dakika sürebilir ⏳

---

## Adım 3: Uygulamayı Başlat

### 3.1 Geliştirme Sunucusunu Başlat
```powershell
npm run dev
```

### 3.2 Tarayıcıda Aç
1. PowerShell'de bir link göreceksin: `http://localhost:5173`
2. Bu linke tıkla VEYA
3. Tarayıcını aç ve adres çubuğuna `localhost:5173` yaz

---

## 🎉 Başarılı! Şimdi Ne Yapabilirsin?

### İzci Uygulamasını Kullan:
1. **İsim Gir:** Adını yaz
2. **Sınıf Seç:** 5. sınıf seç
3. **Amaç Seç:**
   - 📚 **Sınava Hazırlan** → Konuları oku
   - 📝 **Sınav Senaryoları** → Sınav yapısını gör
   - 🤖 **Örnek Sorular** → AI ile soru çöz

### Örnek Sorular Nasıl Çalışır?
1. Bir ünite seç (örn: Birlikte Yaşamak)
2. Soru tipi seç:
   - **Klasik:** Cevabını yaz, AI değerlendirir
   - **Eşleştirme:** Kavramları eşleştir
   - **Doğru/Yanlış:** Hızlı test

---

## 🔧 Sorun Giderme

### "npm komutu bulunamadı" hatası
✅ **Çözüm:** PowerShell'i kapat ve tekrar aç (Node.js kurulumundan sonra)

### "Port 5173 kullanımda" hatası
✅ **Çözüm:** Farklı port kullan:
```powershell
npm run dev -- --port 3000
```

### Uygulama açılmıyor
✅ **Çözüm:** 
1. PowerShell'de `Ctrl+C` ile durdur
2. Tekrar `npm run dev` çalıştır

---

## 📱 Özellikler

✅ 3 Tam Ünite İçeriği
✅ Klasik Soru Değerlendirme (AI)
✅ Eşleştirme Soruları
✅ Doğru/Yanlış Soruları
✅ Sınav Senaryoları
✅ Modern Animasyonlu Arayüz
✅ Sevimli Robot Maskot

---

## 💡 İpuçları

- **Uygulamayı Durdurmak:** PowerShell'de `Ctrl+C`
- **Tekrar Başlatmak:** `npm run dev`
- **Kod Değişikliği:** Kaydet, tarayıcı otomatik yenilenir
- **Hata Görürsen:** PowerShell'deki hata mesajını oku

---

**Hazır! Artık İzci ile çalışmaya başlayabilirsin! 🎓**
