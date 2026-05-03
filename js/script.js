// ── WHATSAPP CONFIG ──────────────────────────────
const WA_NUMBER = '51906060371';

// ── DATOS DE PRODUCTOS ────────────────────────────
const products = [
  {
    id: 1, emoji: '🧴', badge: 'MÁS VENDIDO', badgeClass: 'badge-hot',
    name: 'Gel Limpiador Anti-Acné Salicílico Pro',
    brand: 'ClearSkin Lab',
    category: 'limpieza',
    price: 34.90, oldPrice: 79.90, discount: 56,
    rating: 4.8, reviews: 2341,
    desc: 'Gel limpiador facial de acción profunda con ácido salicílico al 2%. Elimina impurezas, exceso de sebo y puntos negros sin resecar la piel. Ideal para uso diario mañana y noche.',
    features: ['Ácido Salicílico 2%', 'Sin parabenos', 'Vegano', 'Sin alcohol', 'Dermatológico', 'Oil-Free'],
    specs: [
      ['Volumen', '150 ml'],['Tipo de piel', 'Grasa / Mixta / Con acné'],
      ['Ingrediente activo', 'Ácido Salicílico 2%'],['Uso', 'Mañana y noche'],
      ['Textura', 'Gel suave'],['Fragancia', 'Sin fragancia'],
      ['Testado', 'Dermatológicamente']
    ]
  },
  {
    id: 2, emoji: '🚿', badge: 'NUEVO', badgeClass: 'badge-new',
    name: 'Champú Anti-Acné Cuero Cabelludo Zinc',
    brand: 'ScalpClear',
    category: 'champu',
    price: 42.50, oldPrice: 85.00, discount: 50,
    rating: 4.7, reviews: 876,
    desc: 'Champú especializado con Zinc Piritionato y árbol de té. Controla el exceso de sebo en cuero cabelludo, combate el acné capilar y reduce la caspa. Fórmula suave para uso frecuente.',
    features: ['Zinc Piritionato', 'Árbol de Té', 'Anti-sebo', 'Sin sulfatos duros', 'pH Balanceado'],
    specs: [
      ['Volumen', '300 ml'],['Tipo de cuero cabelludo', 'Graso / Con caspa'],
      ['Activos', 'Zinc + Tea Tree Oil'],['Frecuencia', 'Diario'],
      ['pH', '5.5 - 6.0'],['Sin', 'Parabenos, sulfatos agresivos']
    ]
  },
  {
    id: 3, emoji: '✨', badge: '60% OFF', badgeClass: 'badge-discount',
    name: 'Sérum Niacinamida 10% + Zinc Anti-Poros',
    brand: 'Glow Formula',
    category: 'tratamiento',
    price: 29.90, oldPrice: 74.90, discount: 60,
    rating: 4.9, reviews: 5120,
    desc: 'Sérum concentrado con Niacinamida al 10% y Zinc PCA al 1%. Minimiza poros visibles, regula el sebo, ilumina la piel y reduce manchas post-acné. Compatible con cualquier rutina.',
    features: ['Niacinamida 10%', 'Zinc PCA 1%', 'Anti-manchas', 'Minimiza poros', 'Illuminador', 'Ligero'],
    specs: [
      ['Volumen', '30 ml'],['Concentración', 'Niacinamida 10% + Zinc 1%'],
      ['Tipo de piel', 'Todos los tipos'],['Uso', 'Mañana y/o noche'],
      ['Textura', 'Sérum acuoso'],['Comedogénico', 'No comedogénico']
    ]
  },
  {
    id: 4, emoji: '🫧', badge: 'BESTSELLER', badgeClass: 'badge-best',
    name: 'Espuma Limpiadora AHA + BHA Renovadora',
    brand: 'DermaFoam',
    category: 'limpieza',
    price: 38.00, oldPrice: 65.00, discount: 42,
    rating: 4.6, reviews: 1203,
    desc: 'Espuma limpiadora con AHA (ácido glicólico) y BHA (ácido salicílico) que exfolia suavemente, desbloquea poros congestionados y renueva la superficie de la piel. Textura ultraligera.',
    features: ['AHA + BHA', 'Exfoliación suave', 'Sin jabón', 'Renueva piel', 'Antioxidante', 'Vegan'],
    specs: [
      ['Volumen', '120 ml'],['AHA', 'Ácido Glicólico 5%'],
      ['BHA', 'Ácido Salicílico 0.5%'],['Textura', 'Espuma densa'],
      ['Aclarado', 'Con agua fría'],['Frecuencia', '2 veces al día']
    ]
  },
  {
    id: 5, emoji: '💧', badge: 'NUEVO', badgeClass: 'badge-new',
    name: 'Hidratante Ligero Oil-Free Ácido Hialurónico',
    brand: 'HydraBalance',
    category: 'hidratante',
    price: 45.90, oldPrice: 89.90, discount: 49,
    rating: 4.8, reviews: 3402,
    desc: 'Crema-gel hidratante sin aceite formulada con ácido hialurónico de triple peso molecular. Hidrata profundamente sin obstruir los poros ni generar brillo graso. Perfecta bajo el maquillaje.',
    features: ['Ácido Hialurónico Triple', 'Oil-Free', 'No comedogénico', 'Matte finish', 'Sin fragancia'],
    specs: [
      ['Volumen', '50 ml'],['Textura', 'Gel-crema ligero'],
      ['SPF', 'Sin SPF (usar por separado)'],['Poros', 'No los tapa'],
      ['Bajo maquillaje', 'Sí, ideal'],['Tipo de piel', 'Grasa, mixta, sensible']
    ]
  },
  {
    id: 6, emoji: '🌀', badge: '40% OFF', badgeClass: 'badge-discount',
    name: 'Mascarilla Exfoliante Arcilla Negra + Carbón',
    brand: 'PureClay',
    category: 'exfoliante',
    price: 27.50, oldPrice: 46.00, discount: 40,
    rating: 4.5, reviews: 987,
    desc: 'Mascarilla de arcilla negra con carbón activado y caolín. Absorbe el exceso de sebo, desintoxica los poros y elimina impurezas profundas. Resultados visibles desde la primera aplicación.',
    features: ['Carbón Activado', 'Arcilla Negra', 'Caolín', 'Desintoxicante', 'Poros limpios', 'Detox'],
    specs: [
      ['Volumen', '75 ml'],['Formato', 'Mascarilla de arcilla'],
      ['Tiempo de acción', '10-15 minutos'],['Frecuencia', '2-3 veces por semana'],
      ['Enjuague', 'Sí, con agua tibia'],['Apto para', 'Piel grasa con poros dilatados']
    ]
  },
  {
    id: 7, emoji: '🧪', badge: 'HOT', badgeClass: 'badge-hot',
    name: 'Tónico Antiimperfecciones Ácido Glicólico 7%',
    brand: 'AcidBalance',
    category: 'tratamiento',
    price: 31.90, oldPrice: 59.90, discount: 47,
    rating: 4.7, reviews: 2108,
    desc: 'Tónico exfoliante con ácido glicólico al 7% que renueva la textura de la piel, reduce manchas oscuras del acné y afina la superficie cutánea. Libre de alcohol. Resultados desde la semana 2.',
    features: ['Glicólico 7%', 'Sin alcohol', 'Anti-manchas', 'Textura refinada', 'Renueva piel'],
    specs: [
      ['Volumen', '100 ml'],['AHA', 'Ácido Glicólico 7%'],
      ['pH', '3.5 - 4.0'],['Aplicación', 'Algodón suave en rostro limpio'],
      ['Frecuencia', 'Noche, 3-4 veces por semana'],['Precaución', 'Usar protector solar']
    ]
  },
  {
    id: 8, emoji: '🌿', badge: 'ECO', badgeClass: 'badge-new',
    name: 'Champú Sólido Tea Tree Anti-Caspa & Acné',
    brand: 'GreenBar',
    category: 'champu',
    price: 19.90, oldPrice: 39.90, discount: 50,
    rating: 4.4, reviews: 654,
    desc: 'Champú sólido 100% natural con aceite de árbol de té, menta y romero. Combate la caspa, el acné capilar y controla el exceso de sebo del cuero cabelludo. Eco-friendly y sin plástico.',
    features: ['100% Natural', 'Tea Tree Oil', 'Menta + Romero', 'Zero plástico', 'Vegano', 'Anti-caspa'],
    specs: [
      ['Peso', '75 g (equivale a ~2 botellas)'],['Formato', 'Sólido / Barra'],
      ['Activo', 'Tea Tree 5%'],['Tipo', 'Cuero cabelludo graso'],
      ['Conservación', 'Lugar seco'],['Certif.', 'Cruelty-Free, Vegan']
    ]
  },
  {
    id: 9, emoji: '☀️', badge: '55% OFF', badgeClass: 'badge-discount',
    name: 'Protector Solar SPF 50+ Gel Matte Anti-Acné',
    brand: 'SunControl',
    category: 'hidratante',
    price: 36.90, oldPrice: 82.00, discount: 55,
    rating: 4.9, reviews: 4210,
    desc: 'Protector solar facial SPF 50+ con acabado matte y fórmula libre de aceite. Especial para pieles con acné: no obstruye poros, controla brillos y protege de manchas post-acné causadas por el sol.',
    features: ['SPF 50+', 'Matte finish', 'Oil-Free', 'Anti-manchas', 'No comedogénico', 'Ligero'],
    specs: [
      ['Volumen', '50 ml'],['SPF', '50+ (UVA + UVB)'],
      ['Acabado', 'Matte / Sin brillo'],['Resistente al agua', 'Moderado (80 min)'],
      ['Comedogénico', 'No'],['Uso', 'Último paso de rutina AM']
    ]
  },
  {
    id: 10, emoji: '🫙', badge: 'NUEVO', badgeClass: 'badge-new',
    name: 'Crema de Noche Retinol 0.3% Anti-Imperfecciones',
    brand: 'NightRepair',
    category: 'tratamiento',
    price: 54.90, oldPrice: 99.90, discount: 45,
    rating: 4.8, reviews: 1567,
    desc: 'Crema nocturna con Retinol al 0.3% y Bakuchiol natural. Acelera la renovación celular, reduce cicatrices del acné, afina texturas y mejora visiblemente el aspecto de la piel mientras duermes.',
    features: ['Retinol 0.3%', 'Bakuchiol', 'Renovación celular', 'Anti-cicatrices', 'Noche', 'Repair'],
    specs: [
      ['Volumen', '50 ml'],['Retinol', '0.3% (entrada/media)'],
      ['Uso', 'Solo de noche'],['Precaución', 'Evitar sol directo'],
      ['Resultados', 'Desde 4 semanas'],['Tipo de piel', 'Todos excepto muy sensible']
    ]
  }
];

let currentProduct = null;
let qty = 1;
let favorites = new Set();
let cartCount = 0;
let catActive = 'all';
let searchQ = '';

// ── RENDER TARJETAS ────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  let filtered = products.filter(p => {
    const matchCat = catActive === 'all' || p.category === catActive;
    const matchSearch = p.name.toLowerCase().includes(searchQ) || p.brand.toLowerCase().includes(searchQ);
    return matchCat && matchSearch;
  });
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#aaa;font-size:15px;">😕 No encontramos productos.<br>Prueba otra búsqueda.</div>';
    return;
  }
  grid.innerHTML = filtered.map(p => {
    const isFav = favorites.has(p.id);
    const starsHtml = renderStars(p.rating);
    return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="card-img-wrap">
        <span class="card-emoji">${p.emoji}</span>
        <span class="badge ${p.badgeClass}">${p.badge}</span>
        <button class="fav-btn ${isFav?'active':''}" onclick="toggleFav(event,${p.id})" title="Favorito">${isFav?'❤️':'🤍'}</button>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-rating">
          <span class="stars">${starsHtml}</span>
          <span>${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="card-price-row">
          <span class="price-new">S/ ${p.price.toFixed(2)}</span>
          <span class="price-old">S/ ${p.oldPrice.toFixed(2)}</span>
        </div>
        <button class="card-wa-btn" onclick="event.stopPropagation();quickWA(${p.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Pedir por WhatsApp
        </button>
      </div>
    </div>`;
  }).join('');
}

function renderStars(r) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(r)) s += '★';
    else if (i - r < 1) s += '½';
    else s += '☆';
  }
  return s;
}

// ── FILTROS ────────────────────────────────────────
function filterCat(cat, el) {
  catActive = cat;
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
}
function filterProducts() {
  searchQ = document.getElementById('searchInput').value.toLowerCase();
  renderProducts();
}

// ── FAVORITOS ──────────────────────────────────────
function toggleFav(e, id) {
  e.stopPropagation();
  if (favorites.has(id)) { favorites.delete(id); showToast('💔 Eliminado de favoritos'); }
  else { favorites.add(id); showToast('❤️ Agregado a favoritos'); }
  renderProducts();
}

// ── MODAL ──────────────────────────────────────────
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  qty = 1;
  document.getElementById('qtyVal').textContent = 1;
  document.getElementById('mEmoji').textContent = p.emoji;
  document.getElementById('mBadge').textContent = p.badge;
  document.getElementById('mBadge').className = 'modal-badge badge ' + p.badgeClass;
  document.getElementById('mName').textContent = p.name;
  document.getElementById('mBrand').textContent = '🏷️ ' + p.brand;
  document.getElementById('mStars').textContent = renderStars(p.rating);
  document.getElementById('mReviews').textContent = `${p.rating} · ${p.reviews.toLocaleString()} reseñas`;
  document.getElementById('mPrice').textContent = 'S/ ' + p.price.toFixed(2);
  document.getElementById('mOldPrice').textContent = 'S/ ' + p.oldPrice.toFixed(2);
  document.getElementById('mDiscount').textContent = '-' + p.discount + '%';
  document.getElementById('mDesc').textContent = p.desc;
  document.getElementById('mFeatures').innerHTML = p.features.map(f => `<span class="feature-chip">✅ ${f}</span>`).join('');
  document.getElementById('mSpecs').innerHTML = p.specs.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeOnBg(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

// ── CANTIDAD ───────────────────────────────────────
function changeQty(d) {
  qty = Math.max(1, Math.min(99, qty + d));
  document.getElementById('qtyVal').textContent = qty;
}

// ── CARRITO MOCK ───────────────────────────────────
function addToCart() {
  cartCount++;
  document.getElementById('cartCount').textContent = cartCount;
  showToast(`🛒 ${currentProduct.name.substring(0,22)}... añadido!`);
  closeModal();
}

// ── WHATSAPP ───────────────────────────────────────
function openWA(msg) {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function pedirWA() {
  if (!currentProduct) return;
  const total = (currentProduct.price * qty).toFixed(2);
  const msg = `¡Hola! 👋 Quiero pedir:\n\n` +
    `🛍️ *${currentProduct.name}*\n` +
    `🏷️ Marca: ${currentProduct.brand}\n` +
    `💰 Precio: S/ ${currentProduct.price.toFixed(2)} c/u\n` +
    `🔢 Cantidad: ${qty}\n` +
    `💵 Total: S/ ${total}\n\n` +
    `¿Tienen disponibilidad? 😊`;
  openWA(msg);
}

function quickWA(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const msg = `¡Hola! 👋 Me interesa:\n\n🛍️ *${p.name}*\n💰 Precio: S/ ${p.price.toFixed(2)}\n\n¿Tienen disponibilidad? 😊`;
  openWA(msg);
}

// ── TOAST ──────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ── CUENTA REGRESIVA ───────────────────────────────
let secs = 2 * 3600 + 45 * 60 + 30;
function tick() {
  if (secs <= 0) { secs = 3600 * 3; }
  secs--;
  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  document.getElementById('cH').textContent = h;
  document.getElementById('cM').textContent = m;
  document.getElementById('cS').textContent = s;
}
setInterval(tick, 1000);

// ── INIT ───────────────────────────────────────────
renderProducts();