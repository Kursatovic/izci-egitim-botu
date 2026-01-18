// Gemini AI Servisi - Klasik Soru Değerlendirme ve Benzer Soru Üretme

const GEMINI_API_KEY = 'AIzaSyC0KrsegzXmw7uauYTlBrT_LwSdlnDTSBo';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

/**
 * Klasik soruya verilen cevabı değerlendir
 * @param {string} question - Soru metni
 * @param {string} studentAnswer - Öğrencinin cevabı
 * @param {string} rubric - Değerlendirme kriterleri veya örnek cevap
 * @returns {Promise<Object>} - Değerlendirme sonucu
 */
export async function evaluateEssayAnswer(question, studentAnswer, rubric) {
    const prompt = `Sen bir 5. sınıf Sosyal Bilgiler öğretmenisin. Öğrencilere nazik, destekleyici ve moral verici bir dille yaklaşıyorsun.

SORU: ${question}

ÖĞRENCİ CEVABI: ${studentAnswer}

ÖRNEK CEVAPLAR: ${rubric}

ÖNEMLİ KURALLAR:
- Öğrenci doğru ama eksik cevap verdiyse, eksik kısımları BASIT DİLLE TAMAMLA
- Öğrenci yanlış cevap verdiyse, DOĞRU CEVABI BASIT DİLLE ANLAT
- Akademik terimler kullanma, 5. sınıf öğrencisi gibi konuş
- Örnek cevaplarla birebir aynı olmasını bekleme
- Yaratıcı düşünceleri takdir et

ZORUNLU FORMAT - AYNEN BU ŞEKİLDE CEVAP VER:

**PUAN:** [sayı]/10

**GÜÇLÜ YÖNLER:**
• [Öğrencinin doğru yaptığı şey]
• [Başka bir güçlü yön]

**GELİŞTİRİLECEK YÖNLER:**
• [Eksik veya yanlış olan şey]
• [Eğer yanlış varsa: "Aslında doğrusu şöyle: [basit açıklama]"]

**ÖNERİLER:**
• [Pratik öneri]
• [Eğer eksik varsa: "Şunu da ekleyebilirsin: [basit açıklama]"]

**MORAL MESAJI:**
[Kısa, destekleyici cümle]

ÖRNEK CEVAP 1 (Eksik cevap için):

**PUAN:** 7/10

**GÜÇLÜ YÖNLER:**
• "Birlik ve beraberliği arttırır" demişsin, bu doğru
• Soruyu anlamışsın

**GELİŞTİRİLECEK YÖNLER:**
• Cevabın kısa kalmış
• Başka neler olduğunu da yazabilirdin

**ÖNERİLER:**
• Şunları da ekleyebilirsin: Akrabalarla güçlü ilişkiler yardımlaşmayı artırır, toplumda dayanışma olur
• "Çünkü" diyerek açıklama yapabilirsin

**MORAL MESAJI:**
Doğru düşünmüşsün! Biraz daha detay eklersen mükemmel olur!

ÖRNEK CEVAP 2 (Yanlış cevap için):

**PUAN:** 4/10

**GÜÇLÜ YÖNLER:**
• Soruyu cevaplamaya çalışmışsın
• Komşulukla ilgili düşünmüşsün

**GELİŞTİRİLECEK YÖNLER:**
• "Komşunun ateşi yok" yanlış anlamış
• Aslında doğrusu şöyle: Bu söz "komşular birbirine ihtiyaç duyar" demek. Yani komşun külüne (ateşine) bile muhtaç olabilir, yardımlaşmak önemli

**ÖNERİLER:**
• Atasözlerini düşünürken mecazi anlamlarını hatırla
• "Komşular neden birbirine ihtiyaç duyar?" diye düşün

**MORAL MESAJI:**
Yanlış anlamışsın ama öğrendin! Bir dahaki sefere daha iyi olacak!

ŞİMDİ ÖĞRENCİNİN CEVABINI AYNEN BU FORMATTA DEĞERLENDİR:`;

    try {
        console.log('🔵 Gemini API Call Starting...');
        console.log('Prompt:', prompt.substring(0, 200) + '...');

        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 2000,
                }
            })
        });

        console.log('🔵 Response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('🔴 API Error Response:', errorText);
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log('🔵 API Response:', data);

        const evaluationText = data.candidates[0].content.parts[0].text;
        console.log('🔵 Evaluation Text:', evaluationText);

        // Metni parse et
        return parseEvaluation(evaluationText);
    } catch (error) {
        console.error('🔴 Gemini API Error:', error);
        console.error('🔴 Error stack:', error.stack);
        return {
            error: true,
            message: 'Değerlendirme yapılırken bir hata oluştu: ' + error.message
        };
    }
}

/**
 * Eşleştirme sorusu için benzer soru üret
 * @param {Object} originalQuestion - Orijinal soru objesi
 * @returns {Promise<Object>} - Yeni soru objesi
 */
export async function generateSimilarMatchingQuestion(originalQuestion) {
    const prompt = `Sen bir 5. sınıf Sosyal Bilgiler öğretmenisin. Aşağıdaki eşleştirme sorusuna benzer ama farklı bir soru üret.

ORIJINAL SORU:
Konu: ${originalQuestion.topic}
Sol Sütun: ${originalQuestion.leftColumn.join(', ')}
Sağ Sütun: ${originalQuestion.rightColumn.join(', ')}

Yeni bir eşleştirme sorusu oluştur. Aynı konuyu kapsasın ama farklı örnekler kullan.

Cevabını şu formatta ver (başka açıklama yapma):

SOL SÜTUN:
1. ...
2. ...
3. ...

SAĞ SÜTUN:
A. ...
B. ...
C. ...

DOĞRU EŞLEŞMELER:
1-X, 2-Y, 3-Z`;

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.9,
                    maxOutputTokens: 500,
                }
            })
        });

        const data = await response.json();
        const questionText = data.candidates[0].content.parts[0].text;

        return parseMatchingQuestion(questionText, originalQuestion.topic);
    } catch (error) {
        console.error('Gemini API Error:', error);
        return null;
    }
}

/**
 * Doğru/Yanlış sorusu için benzer soru üret
 * @param {Object} originalQuestion - Orijinal soru objesi
 * @returns {Promise<Object>} - Yeni soru objesi
 */
export async function generateSimilarTrueFalseQuestion(originalQuestion) {
    const prompt = `Sen bir 5. sınıf Sosyal Bilgiler öğretmenisin. Aşağıdaki doğru/yanlış sorusuna benzer ama farklı bir soru üret.

ORIJINAL SORU: ${originalQuestion.statement}
KONU: ${originalQuestion.topic}
DOĞRU CEVAP: ${originalQuestion.correct ? 'DOĞRU' : 'YANLIŞ'}

Aynı konuyu kapsayan ama farklı bir doğru/yanlış ifadesi oluştur.

Cevabını şu formatta ver (başka açıklama yapma):

İFADE: ...
CEVAP: DOĞRU veya YANLIŞ`;

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.9,
                    maxOutputTokens: 200,
                }
            })
        });

        const data = await response.json();
        const questionText = data.candidates[0].content.parts[0].text;

        return parseTrueFalseQuestion(questionText, originalQuestion.topic);
    } catch (error) {
        console.error('Gemini API Error:', error);
        return null;
    }
}

// Helper Functions

function parseEvaluation(text) {
    console.log('🔵 Raw AI Response:', text);
    const lines = text.split('\n').filter(line => line.trim());

    const result = {
        score: '',
        strengths: [],
        improvements: [],
        suggestions: [],
        message: ''
    };

    let currentSection = '';

    lines.forEach(line => {
        const trimmed = line.trim();

        if (trimmed.includes('PUAN:')) {
            result.score = trimmed.split('PUAN:')[1].trim();
        } else if (trimmed.includes('GÜÇLÜ YÖNLER')) {
            currentSection = 'strengths';
        } else if (trimmed.includes('GELİŞTİRİLECEK YÖNLER')) {
            currentSection = 'improvements';
        } else if (trimmed.includes('ÖNERİLER')) {
            currentSection = 'suggestions';
        } else if (trimmed.includes('MORAL MESAJI')) {
            currentSection = 'message';
        } else if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
            const content = trimmed.replace(/^[•\-]\s*/, '');
            if (currentSection === 'strengths') result.strengths.push(content);
            else if (currentSection === 'improvements') result.improvements.push(content);
            else if (currentSection === 'suggestions') result.suggestions.push(content);
        } else if (currentSection === 'message' && trimmed.length > 0) {
            result.message += trimmed + ' ';
        }
    });

    result.message = result.message.trim();

    // Minimal fallback - sadece tamamen boşsa
    if (!result.score && result.strengths.length === 0 && result.improvements.length === 0) {
        result.score = '?/10';
        result.message = 'Değerlendirme tamamlanamadı. Lütfen tekrar dene.';
    }

    console.log('🔵 Parsed Result:', result);
    return result;
}

function parseMatchingQuestion(text, topic) {
    // Basit parsing - gerçek implementasyonda daha robust olmalı
    const leftMatch = text.match(/SOL SÜTUN:([\s\S]*?)SAĞ SÜTUN:/);
    const rightMatch = text.match(/SAĞ SÜTUN:([\s\S]*?)DOĞRU EŞLEŞMELER:/);
    const answersMatch = text.match(/DOĞRU EŞLEŞMELER:(.*)/);

    if (!leftMatch || !rightMatch || !answersMatch) return null;

    const leftColumn = leftMatch[1].trim().split('\n').filter(l => l.trim()).map(l => l.replace(/^\d+\.\s*/, '').trim());
    const rightColumn = rightMatch[1].trim().split('\n').filter(l => l.trim()).map(l => l.replace(/^[A-Z]\.\s*/, '').trim());
    const correctMatches = {};

    const matches = answersMatch[1].trim().split(',');
    matches.forEach(match => {
        const [num, letter] = match.trim().split('-');
        if (num && letter) correctMatches[num.trim()] = letter.trim();
    });

    return {
        type: 'matching',
        topic,
        leftColumn,
        rightColumn,
        correctMatches,
        aiGenerated: true
    };
}

function parseTrueFalseQuestion(text, topic) {
    const statementMatch = text.match(/İFADE:(.*)/);
    const answerMatch = text.match(/CEVAP:\s*(DOĞRU|YANLIŞ)/);

    if (!statementMatch || !answerMatch) return null;

    return {
        type: 'trueFalse',
        topic,
        statement: statementMatch[1].trim(),
        correct: answerMatch[1].trim() === 'DOĞRU',
        aiGenerated: true
    };
}

/**
 * Senaryoya göre deneme sınavı (açık uçlu sorular) üret
 * @param {Object} scenario - Senaryo objesi (topics ve kazanımlar)
 * @returns {Promise<Array>} - Soru listesi
 */
export async function generateMockExam(scenario) {
    const topicList = scenario.topics.map(t => `- ${t.count} adet soru: ${t.outcome} (${t.topic})`).join('\n');

    const prompt = `Sen bir 5. sınıf Sosyal Bilgiler öğretmenisin. Aşağıdaki MEB konu soru dağılım tablosuna göre bir DENEME SINAVI hazırla.
    
SINAV SENARYOSU: ${scenario.title}
SORU DAĞILIMI:
${topicList}

KURALLAR:
1. Sadece "AÇIK UÇLU" (klasik) sorular hazırla. 
2. Sorular 5. sınıf seviyesinde, açık, anlaşılır ve eğitici olsun.
3. Her soru için bir "örnek cevap" (cevap anahtarı) hazırla.
4. Toplam soru sayısı dağılım tablosuna tam uymalıdır (${scenario.topics.reduce((a, b) => a + b.count, 0)} soru).

CEVABINI SADECE AŞAĞIDAKİ JSON FORMATINDA VER (BAŞKA METİN EKLEME):

[
  {
    "id": 1,
    "title": "Soru 1",
    "instruction": "Hangi kazanımla ilgili olduğu ve ne sorulduğu...",
    "question": "Soru metni buraya...",
    "answerKey": "Öğretmen için örnek doğru cevap..."
  },
  ...
]`;

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.8,
                    maxOutputTokens: 3000,
                    response_mime_type: "application/json"
                }
            })
        });

        if (!response.ok) {
            throw new Error(`Gemini API Error: ${response.status}`);
        }

        const data = await response.json();
        let responseText = data.candidates[0].content.parts[0].text;

        // Markdown bloklarını (```json ... ```) temizle
        responseText = responseText.replace(/```json\s?|```/g, '').trim();

        return JSON.parse(responseText);
    } catch (error) {
        console.error('generateMockExam Error:', error);
        throw error;
    }
}

export default {
    evaluateEssayAnswer,
    generateSimilarMatchingQuestion,
    generateSimilarTrueFalseQuestion,
    generateMockExam
};
