// Basit, açıklanabilir kurallar (yalnızca bilgilendirme amaçlı)
if (score >= 80) level = 'red';
else if (score >= 50) level = 'orange';


return { score: Math.min(score, 100), level, reasons };
}


function renderResult(r){
const badge = document.getElementById('riskBadge');
const ex = document.getElementById('explanations');
const action = document.getElementById('action');
badge.className = `badge ${r.level}`;
badge.textContent = (
r.level === 'red' ? '🟥 Yüksek Risk' :
r.level === 'orange' ? '🟧 Orta Risk' : '🟩 Düşük Risk'
) + ` · Skor: ${r.score}`;


ex.innerHTML = r.reasons.map(x => `<p>• ${x}</p>`).join('') || '<p>• Açıklama oluşturulamadı</p>';


if (r.level === 'red'){
action.innerHTML = `<p><strong>Acil uyarı:</strong> Derhal <strong>112</strong>'yi arayın veya en yakın acil servise başvurun.</p>`;
} else if (r.level === 'orange'){
action.innerHTML = `<p><strong>Öneri:</strong> En kısa sürede bir sağlık kuruluşuna başvurun. <a href="https://www.mhrs.gov.tr/">MHRS</a> üzerinden randevu alabilirsiniz.</p>`;
} else {
action.innerHTML = `<p><strong>Öneri:</strong> Bol sıvı, istirahat ve reçetesiz analjezik/antipiretik bilgileri için resmi kaynaklara başvurun. Belirtiler kötüleşirse bu sayfaya geri dönün veya sağlık profesyoneline danışın.</p>`;
}
}


function initChips(){
const chips = document.getElementById('quickChips');
const ta = document.getElementById('symptoms');
if (!chips || !ta) return;
chips.addEventListener('click', (e)=>{
if (e.target.matches('button[data-chip]')){
const t = e.target.getAttribute('data-chip');
ta.value = (ta.value + ' ' + t).trim();
ta.focus();
}
});
}


function initForm(){
const form = document.getElementById('riskForm');
if (!form) return;
form.addEventListener('submit', (e)=>{
e.preventDefault();
const p = parseProfile();
const res = scoreRisk(p);
renderResult(res);


// Basit takip ayarı (localStorage)
const follow = document.getElementById('followup').checked;
if (follow && res.level === 'green'){
localStorage.setItem('amd_followup', JSON.stringify({ ts: Date.now(), questions: ['Bugün ateşin çıktı mı?', 'Ağrı düzeyi değişti mi?'] }));
alert('Takip etkinleştirildi: Yarın tekrar kontrol etmenizi önereceğiz.');
}
});
}


initChips();
initForm();
