# 🚑 Acil mi Değil mi? – Yapay Zekâ Destekli Ön Değerlendirme ve Yönlendirme Asistanı  

## 📌 Sorun  
Türkiye’de acil servislere başvuran hastaların **%60’tan fazlası aslında acil olmayan vakalardan oluşuyor**.  
Bu durum:  
- Acillerde **gereksiz kalabalığa**,  
- Doktorlarda **tükenmişlik sendromuna**,  
- Hastalarda **memnuniyetsizlik** ve güven kaybına yol açıyor.  

Mevcut sistemler sadece “acile git / gitme” kararı veriyor. Ancak **kişisel risk faktörlerini** (yaş, kronik hastalık, ilaç kullanımı) ve **alternatif çözümleri** dikkate almıyor.  

---

## 🚀 Çözümümüz  
**“Acil mi Değil mi?”**, yapay zekâ ile desteklenmiş çok katmanlı bir **ön değerlendirme ve yönlendirme asistanıdır.**  

### 🔑 Özellikler  

1. **Semptom Analizi & Risk Skoru**  
   - Kullanıcı semptomlarını yazar veya sesli söyler.  
   - Sistem, tıbbi triaj protokollerine göre risk skoru üretir:  
     - 🟥 **Kırmızı (Acil)**  
     - 🟧 **Turuncu (Riskli)**  
     - 🟩 **Yeşil (Acil Değil)**  

2. **Kişisel Risk Profili**  
   - Kullanıcının yaşı, kronik hastalıkları ve kullandığı ilaçlar dikkate alınır.  
   - Aynı semptom, farklı kişilerde farklı risk skorları doğurur.  

3. **Semptom Takip & Günlük Güncelleme**  
   - Eğer vaka “yeşil” çıktıysa sistem ertesi gün “ateş çıktı mı?”, “ağrı devam ediyor mu?” diye sorar.  
   - Durum kötüleşirse risk seviyesi otomatik yükselir → acil yönlendirme yapılır.  

4. **Chatbot / Sesli Asistan**  
   - Kullanıcı semptomunu yazmak yerine sesli de anlatabilir.  
   - Whisper → text → LLM → risk analizi + sesli geri dönüş.  
   - Yaşlı veya düşük okuryazarlık seviyesine sahip hastalar için erişilebilirlik sağlar.  

5. **Acil Dışı Yönlendirme**  
   - “Yeşil” vakalar için:  
     - MHRS üzerinden aile hekimi / poliklinik randevu linki,  
     - Güvenilir kaynaklı reçetesiz ilaç bilgisi,  
     - 112 dışı danışma hattı numarası.  

---

## 🎥 Demo  
- Web uygulaması için erişilebilir adres (sandbox veya link) → _(eklenecek)_  
- Ürünü tanıtan kısa video (maks. 2 dk) → _(eklenecek)_  

---

## ⚙️ Kullanılan Teknolojiler  
- **Frontend:** HTML, CSS, JavaScript  
- **Model & Risk Analizi:** JSON kuralları + LLM entegrasyonu  
- **Sesli Girdi:** OpenAI Whisper  
- **Asistan & Yönlendirme:** Chatbot + dış API bağlantıları  

---

## 📖 KVKK & Gizlilik  
Projemiz kullanıcı verilerini **koruma ilkesine** göre tasarlanmıştır.  
- Veriler sadece tarayıcı tarafında **geçici olarak işlenir**, üçüncü kişilerle paylaşılmaz.  
- İşlenen veriler: semptom metni, yaş, seçilen risk faktörleri.  
- Amaç: **ön değerlendirme ve yönlendirme** yapmak; tıbbi tanı koymak değildir.  
- KVKK kapsamındaki haklar için iletişim: GitHub Issues.  

---

## 👩‍💻 Katkıda Bulunanlar  
- [Senin ve ekip arkadaşlarının isimleri buraya yazılacak]  

---

## 📅 Teslimat Bilgisi  
- Kodlar GitHub üzerinde public olarak paylaşılmıştır.  
- Kullanılan teknolojiler ve ürün faydaları bu README dosyasında açıklanmıştır.  
- Demo linki ve tanıtım videosu eklenecektir.  
- KVKK & gizlilik politikası ayrıca **privacy.html** sayfasında yer almaktadır.  


