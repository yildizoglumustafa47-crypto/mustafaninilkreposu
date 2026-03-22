// Web Speech API desteği kontrol
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert('Tarayıcınız sesli komutları desteklemiyor. Chrome, Edge veya Safari kullanın.');
}

const recognition = new SpeechRecognition();

// Speech Recognition ayarları
recognition.lang = 'tr-TR'; // Türkçe
recognition.continuous = false;
recognition.interimResults = true;

// HTML Elementleri
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statusDiv = document.getElementById('status');
const transcriptDiv = document.getElementById('transcript');
const responseDiv = document.getElementById('response');

// Dinleme Başla
startBtn.addEventListener('click', () => {
    transcriptDiv.textContent = '';
    responseDiv.textContent = 'Dinleniyor...';
    statusDiv.textContent = '🎤 Dinleniyor...';
    statusDiv.classList.add('listening');
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    recognition.start();
});

// Dinlemeyi Durdur
stopBtn.addEventListener('click', () => {
    recognition.stop();
    stopBtn.disabled = true;
    startBtn.disabled = false;
});

// Dinleme esnasında ara sonuçlar
recognition.addEventListener('result', (event) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
        } else {
            interimTranscript += transcript;
        }
    }

    // Transkripti göster
    if (finalTranscript) {
        transcriptDiv.textContent = finalTranscript;
        responseDiv.textContent = 'İşleniyor...';
        
        // Komutu işle
        processCommand(finalTranscript.toLowerCase().trim());
    } else if (interimTranscript) {
        transcriptDiv.textContent = interimTranscript;
    }
});

// Dinleme sona erdi
recognition.addEventListener('end', () => {
    statusDiv.textContent = 'Hazır...';
    statusDiv.classList.remove('listening');
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

// Hata durumu
recognition.addEventListener('error', (event) => {
    statusDiv.textContent = '❌ Hata: ' + event.error;
    statusDiv.classList.add('error');
    responseDiv.textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

// === KOMUT İŞLEME ===
function processCommand(command) {
    let response = '';

    // Komutları kontrol et
    if (command.includes('merhaba') || command.includes('selam')) {
        response = '👋 Merhaba! Ben senin akıllı asistanın. Nasıl yardımcı olabilirim?';
    } 
    else if (command.includes('neredesin') || command.includes('konum')) {
        getLocation();
        response = '📍 Konumunuzu alıyorum...';
    }
    else if (command.includes('saat kaç') || command.includes('zaman') || command.includes('saati')) {
        const time = new Date().toLocaleTimeString('tr-TR');
        response = `⏰ Saat: ${time}`;
    }
    else if (command.includes('tarih') || command.includes('bugün') || command.includes('tarihi')) {
        const date = new Date().toLocaleDateString('tr-TR');
        response = `📅 Tarih: ${date}`;
    }
    else if (command.includes('ne yapıyorsun') || command.includes('dur nasılsın')) {
        response = '🤖 İyi, teşekkür ederim! Seni yardımcı olmak için buradayım.';
    }
    else if (command.includes('işık aç')) {
        response = '💡 Işık açıldı...';
    }
    else if (command.includes('işık kapat')) {
        response = '🌙 Işık kapatıldı...';
    }
    else if (command.includes('hava durumu')) {
        response = '🌤️ Hava durumu bilgisi yakında eklenecek.';
    }
    else if (command.includes('hatırla') || command.includes('not')) {
        response = '📝 Not alma özelliği yakında eklenecek.';
    }
    else if (command.includes('günaydın')) {
        response = '🌅 Günaydın! Harika bir gün olmasını diliyorum!';
    }
    else if (command.includes('iyi akşamlar') || command.includes('iyi geceler')) {
        response = '🌙 İyi akşamlar! Uykunuz kolay olsun!';
    }
    else {
        response = `🤔 Anlamadım: "${command}". Lütfen başka bir komut deneyin.`;
    }

    // Cevabı göster
    responseDiv.textContent = response;
    
    // Sesi çıkart (opsiyonel - tarayıcıda var olan TTS )
    speakResponse(response);
}

// === KONUM ALMA ===
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude.toFixed(4);
                const lon = position.coords.longitude.toFixed(4);
                const accuracy = Math.round(position.coords.accuracy);
                responseDiv.textContent = `📍 Konumunuz: ${lat}°N, ${lon}°E (Doğruluk: ±${accuracy}m)`;
                console.log(`Konum: ${lat}, ${lon}`);
            },
            (error) => {
                responseDiv.textContent = `❌ Konum alınamadı: ${error.message}`;
            }
        );
    } else {
        responseDiv.textContent = '❌ Bu cihaz konum hizmetlerini desteklemiyor.';
    }
}

// === SES ÇIKTISI (TTS - Text to Speech) ===
function speakResponse(text) {
    // Tarayıcı TTS özelliğini kullan
    if ('speechSynthesis' in window) {
        // Önceki konuşmayı iptal et
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'tr-TR';
        utterance.rate = 1; // Hız
        utterance.pitch = 1; // Ton
        utterance.volume = 1; // Ses seviyesi

        speechSynthesis.speak(utterance);
    }
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    statusDiv.textContent = '✅ Hazır. Dinlemeye başlayın!';
});
