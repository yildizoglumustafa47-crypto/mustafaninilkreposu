# 🎤 Akıllı Gözlük Asistanı - MVP (İlk Versiyon)

Bu, Akıllı Gözlük Asistanı projesinin **ilk çalışan prototipidir**. Sesli komutlar alabilir ve basit yanıtlar verebilir.

## 🚀 Başlamak

### 1️⃣ Dosyaları Hazırla
```
📁 Proje Klasörü
├── index.html      (Arayüz)
├── style.css       (Stil)
├── script.js       (JavaScript - Sesli Komutlar)
└── README.md       (Bu dosya)
```

### 2️⃣ Çalıştırma

**Seçenek A: VS Code Live Server**
- VS Code'u aç
- Sağ tık → "Open with Live Server" (Live Server yüklüyse)
- Tarayıcı açılacak

**Seçenek B: Dosyayı direkt açmak**
- `index.html` dosyasına çift tıkla
- Tarayıcıda açılacak

**Seçenek C: Python ile basit sunucu**
```bash
python -m http.server 8000
# Tarayıcıda: http://localhost:8000
```

## ✨ Özellikler

### Desteklenen Komutlar:
- 👋 "Merhaba" → Selamlar
- ⏰ "Saat kaç?" → Zamanı söyler
- 📅 "Tarih nedir?" → Tarihi gösterir
- 📍 "Neredesin?" → Konumunu alır
- 🤖 "Ne yapıyorsun?" → Durum verir
- 💡 "Işık aç" → (Simülasyon)
- 🌙 "Işık kapat" → (Simülasyon)

### Teknoloji:
- **Web Speech API** - Sesli komutlar
- **Geolocation API** - Konum alma
- **Web Speech Synthesis** - Sese yanıt verme

## 📋 Yapılacaklar

- [x] Sesli komut alma
- [x] Transkript gösterme
- [x] Basit yanıtlar
- [x] Konum alma
- [ ] Harita entegrasyonu
- [ ] Veritabanı
- [ ] Bildirim sistemi
- [ ] Mobile versiyon

## 🔧 Nasıl Çalışır?

### 1. Kullanıcı butona tıklıyor
```
"Dinlemeye Başla" butonuna tıkla
```

### 2. Mikrofon iznin isteniyor
```
Tarayıcı soruyor: "Mikrofona erişim izni verebilir misin?"
→ "İzin Ver" seçeneğine tıkla
```

### 3. Sesli komut söylüyorsun
```
"Ses dinleniyor..." gösteriliyor
Sen konuşuyorsun: "Saat kaç?"
```

### 4. Asistan yanıt veriyor
```
Transkript gösteriliyor: "Saat kaç?"
Cevap gösteriliyor: "⏰ Saat: 14:30"
Asistan konuşa konuşa cevap veriyor
```

## 🌐 Hangi Tarayıcılar Destekleniyor?

| Tarayıcı | Destek |
|----------|--------|
| Chrome | ✅ Tam destek |
| Edge | ✅ Tam destek |
| Safari | ⚠️ Kısmi destek |
| Firefox | ❌ Desteklenmiyor |
| Opera | ✅ Destekleniyor |

## 📚 Öğrenecek Şeyler

### Bu MVP'den öğrendiğin:
1. **HTML Structure** - Sayfa yapısı
2. **CSS Styling** - Güzel tasarım
3. **JavaScript** - Temel mantık
4. **Web APIs** - Speech Recognition, Geolocation
5. **Event Handling** - Buton tıklaması, mikrofo etkinlikleri
6. **DOM Manipulation** - Sayfayı değiştirme

## 🎯 Sonraki Adımlar

### AŞAMA 2 (Geliştirilmiş Versiyon):
```
1. OpenAI API entegrasyonu
2. Daha akıllı komutlar
3. Harita entegrasyonu
4. Bildirim sistemi
5. Veri tabanı
```

### AŞAMA 3 (Mobile):
```
1. React Native'ye taşı
2. iOS/Android uygulaması
```

## 🐛 Sorunlar ve Çözümler

### Mikrofon çalışmıyor
- Tarayıcı izinlerini kontrol et
- Sistem ses ayarlarını kontrol et
- HTTPS kullan (localhost hariç)

### Sesli komut tanınmıyor
- Türkçe konuş
- Açık konuş
- Arka plan sesini azalt

### Konum çalışmıyor
- Konum hizmetlerini etkinleştir
- İzin ver dedikten sonra yenile

## 💡 İpuçları

1. **Console'u aç** (F12) - Hataları görmek için
2. **Komutları test et** - Mikrofona tam açık konuş
3. **Yavaşça ilerle** - Her özelliği testy et
4. **Kodu açıkla** - `script.js` içindeki yorumları oku

## 📖 Kaynaklar

- [MDN Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Speech Synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

## 📝 Notlar

- Bu ilk versiyon, öğrenmek için yapıldı
- Gerçek kullanım için daha çok geliştirme lazım
- Dosyaları GitHub'da paylaş: `git push origin main`

---

**Sorularınız varsa, kodupyaşarken anlamadık yerler olursa bana yazın!** 🚀

Başarılar! 💪
