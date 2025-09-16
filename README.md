# 🚑 Acil mi Değil mi? – Yapay Zekâ Destekli Ön Değerlendirme ve Yönlendirme Asistanı

## 🔎 Sorun
Türkiye’de acil servislere başvuran hastaların **%60’tan fazlası aslında acil olmayan vakalardan oluşuyor**.  
Bu durum:
- Acillerde **gereksiz kalabalığa**,  
- Doktorlarda **tükenmişlik sendromuna**,  
- Hastalarda **memnuniyetsizlik** ve güven kaybına yol açıyor.

Mevcut sistemler sadece “acile git / gitme” kararı veriyor. Ancak **kişisel risk faktörlerini** (yaş, kronik hastalık, ilaç kullanımı) ve **alternatif çözümleri** dikkate almıyor.  

---

## 🚀 Çözümümüz
**“Acil mi Değil mi?”**, yapay zekâ ile desteklenmiş çok katmanlı bir **ön değerlendirme ve yönlendirme asistanıdır.**

### Özellikler
1. **Semptom Analizi & Risk Skoru**  
   - Kullanıcı semptomlarını yazar veya sesli söyler.  
   - Sistem, tıbbi triaj protokollerine göre risk skorunu üretir:  
     🟥 **Kırmızı (Acil)** | 🟧 **Turuncu (Riskli)** | 🟩 **Yeşil (Acil Değil)**

2. **Kişisel Risk Profili**  
   - Kullanıcının yaşı, kronik hastalıkları ve kullandığı ilaçları dikkate alır.  
   - Aynı semptom, farklı kişilerde farklı risk skorları doğurur.  

3. **Semptom Takibi**  
   - Eğer vaka **yeşil** çıktıysa, sistem ertesi gün kullanıcıya kısa sorular sorar.  
   - Durum kötüleşirse risk seviyesi yükselir → **otomatik acil yönlendirme** yapılır.  

4. **Chatbot / Sesli Asistan**  
   - Kullanıcı yazılı veya sesli iletişim kurabilir.  
   - **Whisper** ile ses → metin, ardından **LLM** ile analiz yapılır.  
   - Sonuç kullanıcıya **sesli veya yazılı** iletilir.  

5. **Acil Dışı Yönlendirme**  
   - MHRS üzerinden randevu linki,  
   - Güvenilir kaynaklardan reçetesiz ilaç bilgileri,  
   - 112 dışı danışma hattı bilgisi.  

---

## ⚙️ Kullanılan Teknolojiler
- **Frontend:** HTML, CSS, JavaScript  
- **AI Modelleri:** LLM (semptom analizi), Whisper (ses işleme)  
- **Backend:** Basit kural tabanlı analiz (JSON) + model entegrasyonu  
- **Veri:** JSON tabanlı risk kuralları  
- **Demo:** Web arayüzü (index.html üzerinden erişim)

---

## 🎯 Kurulum ve Çalıştırma
```bash
# Reponun klonlanması
git clone <repo-link>
cd Healthy-Checker

# Dosyaları açıp index.html’i tarayıcıda çalıştırabilirsiniz.
