// L&M Exclusive — catálogo mobile-first
// Configure o WhatsApp com código do país + DDD + número, apenas dígitos.
const WHATSAPP_NUMBER = "554874004700";
const STORAGE_KEY = "lmExclusiveMobileCart_v1";

// Edite os produtos abaixo. Para adicionar fotos locais, use caminhos a partir de catalogo_mobile.html,
// por exemplo: "assets/img/d_denise.png". Se image ficar vazio, será exibido um placeholder elegante.
const productsData = [
  { 
    id: 1, 
    name: "D by Denise Lemos 15ml - Insp. La Vie Est Belle", 
    category: "Perfumes", 
    price: 60.00, 
    description: "O Perfume Feminino D Amakha Paris 15ml convida você a viver uma experiência sensorial única. Esta deo colônia celebra a feminilidade com uma composição floral frutal que cativa e inspira. Perfeito para o uso diário, ele adiciona um toque de leveza e sofisticação à sua presença, tornando cada momento especial. Sua embalagem compacta permite que você leve essa essência encantadora para qualquer lugar, garantindo um toque de frescor sempre que desejar. O Perfume Feminino D Amakha Paris 15ml é uma deo colônia floral frutal que oferece uma experiência olfativa vibrante e irresistível, ideal para a mulher comunicativa e elegante.", 
    tag: "Destaque", 
    areas: ["principal", "destaques"], 
    image: "assets/img/amakhaparis15ml/Ddenise15ml/1.png",
    images: ["assets/img/amakhaparis15ml/Ddenise15ml/1.png",
              "assets/img/amakhaparis15ml/Ddenise15ml/2.png",
              "assets/img/amakhaparis15ml/Ddenise15ml/3.png",
              
    ]
    
   },
 
  { 
    id: 2,
    name: "521 Vip Rosé 15ml - Insp. 212 Vip Rosé",
    category: "Perfumes", 
    price: 53.20, description: "O 512 Vip Rose é um perfume contratipo inspirado no 212 Vip Rosé, criado para brindar a mulher livre, sofisticada e segura de si. Logo na primeira borrifada, as notas de champanhe e acordes frutados ganham destaque, trazendo leveza e efervescência à composição. À medida que evolui na pele, revela a delicadeza da flor de pêssego, adicionando feminilidade e suavidade ao perfume. No fundo, o almíscar branco, o âmbar e as notas amadeiradas fazem o arremate aromático, garantindo profundidade e um rastro elegante. Um fragrância para quem deseja a experiência do importado com presença marcante e ótima fixação, ideal para ocasiões especiais ou momentos em que celebrar é o único plano.", 
    tag: "Favorito", 
    areas: ["principal", "destaques"], 
    image: "assets/img/amakhaparis15ml/521viprose15ml/4.png", 
    images: ["assets/img/amakhaparis15ml/521viprose15ml/4.png",
              "assets/img/amakhaparis15ml/521viprose15ml/5.png",
              "assets/img/amakhaparis15ml/521viprose15ml/6.png",
              "assets/img/amakhaparis15ml/521viprose15ml/7.png",
    ]
  },
    

  { 
    id: 3, 
    name: "Asadiyy 15ml - Insp. Asad", 
    category: "Perfumes", 
    price: 43.90, 
    description: "Asadiyy - contratipo inspirado no Asad (Lattafa) Intenso e envolvente, Asadiyy é um contratipo ambarado pensado para homens confiantes, que carregam presença e personalidade em cada detalhe. Uma fragrância marcante, ideal para momentos noturnos e ocasiões em que deixar uma impressão forte faz parte da experiência. A abertura do perfume dupe traz o toque vibrante da pimenta-rosa, do cravo-botão, da bergamota italiana e do grapefruit. No coração, a fragrância evolui para a combinação quente de noz-moscada, canela e cedro, enquanto o fundo revela profundidade com patchouli, musgo e vetiver do Haiti, criando um rastro sofisticado e envolvente. Uma excelente opção para quem aprecia perfumes intensos e quer vivenciar a experiência olfativa de um grande sucesso da perfumaria árabe, com presença marcante e personalidade.", 
    tag: "Novidade", 
    areas: ["lancamentos"], 
    image: "assets/img/amakhaparis15ml/asadiyy15ml/8.png",
    images: ["assets/img/amakhaparis15ml/asadiyy15ml/8.png",
              "assets/img/amakhaparis15ml/asadiyy15ml/9.png",
              "assets/img/amakhaparis15ml/asadiyy15ml/10.png",
              "assets/img/amakhaparis15ml/asadiyy15ml/11.png",
    ]
  
  },

  { 
    id: 4, 
    name: "Escandalosa 15ml - Insp. Scandal", 
    category: "Perfumes", 
    price: 79.90, 
    description: "Amakha Paris, com sua dedicação em realçar a essência única de cada indivíduo, apresenta a Deo Colônia Escandalosa. Uma fragrância que não apenas perfuma, mas empodera, celebrando a confiança e a ousadia da mulher moderna. Perfeita para as noites em que você deseja ser notada e deixar uma marca inconfundível, esta essência te acompanha em seus momentos de destaque, reforçando seu estilo e personalidade.", 
    tag: "Estilo", 
    areas: ["principal", "destaques"], 
    image: "assets/img/amakhaparis15ml/escandalosa15ml/12.png",
    images: ["assets/img/amakhaparis15ml/escandalosa15ml/12.png",
              "assets/img/amakhaparis15ml/escandalosa15ml/13.png",
              "assets/img/amakhaparis15ml/escandalosa15ml/14.png",
              "assets/img/amakhaparis15ml/escandalosa15ml/15.png",
    ] 
  
  },

  { 
    id: 5, 
    name: "Fantastic 15ml - Insp. Fantasy", 
    category: "Perfumes", 
    price: 99.90, 
    description: "A deo colônia feminina Fantastic Amakha Paris combina acordes florais vibrantes com a praticidade do frasco de 15ml, entregando um aroma marcante para acompanhar sua rotina diária com alta fixação e uma performance prolongada na pele e nas roupas. Com um toque aveludado e perfil expressivo, esta fragrância destaca notas florais adocicadas que envolvem a pele sem pesar, ideal para transitar com autenticidade, durabilidade e elegância entre compromissos diurnos e ocasiões noturnas.", 
    tag: "Novidade", 
    areas: ["lancamentos"], 
    image: "assets/img/amakhaparis15ml/fantastic15ml/16.png",
    images: ["assets/img/amakhaparis15ml/fantastic15ml/16.png",
              "assets/img/amakhaparis15ml/fantastic15ml/17.png",
              "assets/img/amakhaparis15ml/fantastic15ml/18.png",
              
    ] 
  },
  { 
    id: 6, 
    name: "GD 15ml - Insp. Good Girl", 
    //category: "Kits", 
    category: "Perfumes", 
    price: 89.90, 
    description: "Celebre sua dualidade e poder com a Deo Colônia GD, uma fragrância que personifica a mulher moderna: forte e delicada, ousada e elegante. Perfeita para as noites em que você quer deixar uma impressão duradoura e inesquecível, esta deo colônia Amakha Paris é o segredo para realçar sua essência mais sedutora.", 
    tag: "Especial", 
    areas: ["destaques"], 
    image: "assets/img/amakhaparis15ml/gd15ml/19.png",
    images: ["assets/img/amakhaparis15ml/gd15ml/19.png",
              "assets/img/amakhaparis15ml/gd15ml/20.png",
              "assets/img/amakhaparis15ml/gd15ml/21.png",
              "assets/img/amakhaparis15ml/gd15ml/22.png",
    ] 
  }
];

const $ = (selector) => document.querySelector(selector);
const money = (value) => Number(value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const safeText = (value) => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

let activeCategory = "Todos";
let cart = loadCart();
let toastTimer;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    const clean = {};
    for (const [id, quantity] of Object.entries(saved)) {
      if (productsData.some(p => p.id === Number(id)) && Number.isSafeInteger(Number(quantity)) && Number(quantity) > 0) {
        clean[id] = Math.min(99, Number(quantity));
      }
    }
    return clean;
  } catch { return {}; }
}
function saveCart() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
  catch { showToast("Não foi possível salvar a sacola neste navegador."); }
}
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}
function categories() {
  return ["Todos", ...new Set(productsData.map(p => p.category))];
}
function renderFilters() {
  $("#filters").innerHTML = categories().map(category =>
    `<button class="filter ${category === activeCategory ? "active" : ""}" type="button" data-category="${safeText(category)}" aria-pressed="${category === activeCategory}">${safeText(category)}</button>`
  ).join("");
}
function productVisual(product) {
  if (product.image) {
    return `<img src="${safeText(product.image)}" alt="${safeText(product.name)}" loading="lazy" onerror="this.remove();this.parentElement.querySelector('.product-placeholder').hidden=false"><div class="product-placeholder" hidden><span class="placeholder-symbol">L&amp;M</span><span class="placeholder-label">${safeText(product.category)}</span></div>`;
  }
  return `<div class="product-placeholder"><span class="placeholder-symbol">L&amp;M</span><span class="placeholder-label">${safeText(product.category)}</span></div>`;
}
function collectionCard(product, label) {
  return `<article class="collection-card" data-open-details="${product.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${safeText(product.name)}">
    <div class="collection-card-visual">${productVisual(product)}<span class="collection-ribbon">${safeText(label)}</span></div>
    <div class="collection-card-info"><p class="product-category">${safeText(product.category)}</p><h3>${safeText(product.name)}</h3><strong>${money(product.price)}</strong><button type="button" class="collection-add" data-add="${product.id}">Adicionar à sacola +</button></div>
  </article>`;
}
function renderCollections() {
  const collections = [
    { id: "collectionPrincipal", area: "principal", label: "Principal" },
    { id: "collectionDestaques", area: "destaques", label: "Destaque" },
    { id: "collectionLancamentos", area: "lancamentos", label: "Lançamento" }
  ];
  for (const collection of collections) {
    const target = document.getElementById(collection.id);
    if (!target) continue;
    const items = productsData.filter(product => Array.isArray(product.areas) && product.areas.includes(collection.area));
    target.innerHTML = items.length
      ? items.map(product => collectionCard(product, collection.label)).join("")
      : `<p class="collection-empty">Ainda não há produtos nesta área. Edite o campo <code>areas</code> no arquivo script.js.</p>`;
  }
}
function handleCollectionAction(event) {
  const add = event.target.closest("[data-add]");
  const card = event.target.closest("[data-open-details]");
  if (add) { event.stopPropagation(); addToCart(add.dataset.add); return; }
  if (card) openProductModal(card.dataset.openDetails);
}
for (const id of ["collectionPrincipal", "collectionDestaques", "collectionLancamentos"]) {
  document.getElementById(id)?.addEventListener("click", handleCollectionAction);
  document.getElementById(id)?.addEventListener("keydown", event => {
    const card = event.target.closest("[data-open-details]");
    if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openProductModal(card.dataset.openDetails); }
  });
}

function renderProducts() {
  const query = $("#search").value.trim().toLocaleLowerCase("pt-BR");
  let list = productsData.filter(p =>
    (activeCategory === "Todos" || p.category === activeCategory) &&
    `${p.name} ${p.category} ${p.description}`.toLocaleLowerCase("pt-BR").includes(query)
  );
  const sort = $("#sortProducts").value;
  if (sort === "price-asc") list.sort((a,b) => a.price - b.price);
  if (sort === "price-desc") list.sort((a,b) => b.price - a.price);
  if (sort === "name") list.sort((a,b) => a.name.localeCompare(b.name, "pt-BR"));
  $("#resultCount").textContent = `${list.length} ${list.length === 1 ? "produto" : "produtos"}`;
  $("#emptyState").hidden = list.length !== 0;
  $("#products").innerHTML = list.map(p => `
    <article class="product-card" data-open-details="${p.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${safeText(p.name)}">
      <div class="product-visual">
        ${productVisual(p)}
        ${p.tag ? `<span class="product-tag">${safeText(p.tag)}</span>` : ""}
      </div>
      <div class="product-info">
        <p class="product-category">${safeText(p.category)}</p>
        <h3 class="product-name">${safeText(p.name)}</h3>
        <p class="product-description">${safeText(p.description)}</p>
        <div class="product-price">${money(p.price)}</div>
        <div class="product-actions">
          <button class="add-button" type="button" data-add="${p.id}">Adicionar +</button>
          <button class="details-button" type="button" data-details="${p.id}" aria-label="Mais informações sobre ${safeText(p.name)}">↗</button>
        </div>
      </div>
    </article>`).join("");
}

let activeModalProductId = null;
let activeGalleryIndex = 0;

function galleryImages(product) {
  // Opcionalmente, acrescente `images: ["assets/img/foto1.png", "assets/img/foto2.png"]` ao produto.
  const supplied = Array.isArray(product.images) ? product.images.filter(Boolean) : [];
  const combined = [...supplied, ...(product.image ? [product.image] : [])];
  return [...new Set(combined)];
}
function renderGallery() {
  const product = productsData.find(p => p.id === Number(activeModalProductId));
  if (!product) return;
  const images = galleryImages(product);
  const hasImages = images.length > 0;
  if (hasImages) {
    activeGalleryIndex = Math.max(0, Math.min(activeGalleryIndex, images.length - 1));
    $("#galleryImageWrap").innerHTML = `<img src="${safeText(images[activeGalleryIndex])}" alt="${safeText(product.name)} — imagem ${activeGalleryIndex + 1}" onerror="this.style.display='none';this.parentElement.querySelector('.product-placeholder').hidden=false"><div class="product-placeholder" hidden><span class="placeholder-symbol">L&amp;M</span><span class="placeholder-label">${safeText(product.category)}</span></div>`;
    $("#galleryThumbnails").innerHTML = images.map((src, i) => `<button type="button" class="gallery-thumb ${i === activeGalleryIndex ? "active" : ""}" data-gallery-index="${i}" aria-label="Ver imagem ${i + 1}"><img src="${safeText(src)}" alt="" loading="lazy"></button>`).join("");
  } else {
    $("#galleryImageWrap").innerHTML = `<div class="product-placeholder"><span class="placeholder-symbol">L&amp;M</span><span class="placeholder-label">${safeText(product.category)}</span></div>`;
    $("#galleryThumbnails").innerHTML = "";
  }
  $("#galleryCounter").textContent = `${hasImages ? activeGalleryIndex + 1 : 1} / ${hasImages ? images.length : 1}`;
  $("#galleryPrev").hidden = images.length < 2;
  $("#galleryNext").hidden = images.length < 2;
  $("#galleryCounter").hidden = images.length < 2;
}
function openProductModal(id) {
  const product = productsData.find(p => p.id === Number(id));
  if (!product) return;
  activeModalProductId = product.id;
  activeGalleryIndex = 0;
  $("#modalProductCategory").textContent = product.category;
  $("#modalProductName").textContent = product.name;
  $("#modalProductPrice").textContent = money(product.price);
  $("#modalProductDescription").textContent = product.details || product.description || "Entre em contato com a loja para saber mais sobre este produto.";
  $("#productModal").classList.add("open");
  $("#productModal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  renderGallery();
  $("#modalAddToCart").focus();
}
function closeProductModal() {
  $("#productModal").classList.remove("open");
  $("#productModal").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function stepGallery(delta) {
  const product = productsData.find(p => p.id === Number(activeModalProductId));
  if (!product) return;
  const images = galleryImages(product);
  if (images.length < 2) return;
  activeGalleryIndex = (activeGalleryIndex + delta + images.length) % images.length;
  renderGallery();
}
function cartQuantity() { return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0); }
function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, quantity]) => {
    const product = productsData.find(p => p.id === Number(id));
    return sum + (product ? product.price * quantity : 0);
  }, 0);
}
function renderCart() {
  const count = cartQuantity();
  $("#cartCount").textContent = count;
  $("#cartCountBottom").textContent = count;
  $("#cartTitleCount").textContent = `(${count})`;
  $("#cartTotal").textContent = money(cartTotal());
  $("#checkout").disabled = count === 0;
  const items = Object.entries(cart).filter(([id, qty]) => qty > 0 && productsData.some(p => p.id === Number(id)));
  $("#cartItems").innerHTML = items.length ? items.map(([id, quantity]) => {
    const p = productsData.find(product => product.id === Number(id));
    return `<div class="cart-item">
      <div class="cart-item-image">${p.image ? `<img src="${safeText(p.image)}" alt="${safeText(p.name)}" onerror="this.outerHTML='<span class=&quot;mini-placeholder&quot;>L&amp;M</span>'">` : `<span class="mini-placeholder">L&amp;M</span>`}</div>
      <div class="cart-item-info"><strong>${safeText(p.name)}</strong><small>${money(p.price)} cada</small>
        <div class="qty-controls"><button type="button" data-qty="${id}" data-delta="-1" aria-label="Diminuir quantidade">−</button><span>${quantity}</span><button type="button" data-qty="${id}" data-delta="1" aria-label="Aumentar quantidade">+</button></div>
        <button type="button" class="remove-item" data-remove="${id}">Remover</button>
      </div><strong class="cart-item-price">${money(p.price * quantity)}</strong>
    </div>`;
  }).join("") : `<div class="cart-empty"><div style="font-size:2rem">♧</div><p>Sua sacola está vazia.</p><p>Explore a seleção e adicione seus favoritos.</p></div>`;
}
function addToCart(id) {
  const p = productsData.find(product => product.id === Number(id));
  if (!p) return;
  cart[id] = Math.min(99, (cart[id] || 0) + 1);
  saveCart(); renderCart(); showToast(`${p.name} adicionado à sacola.`);
}
function changeQuantity(id, delta) {
  const next = (cart[id] || 0) + delta;
  if (next <= 0) delete cart[id]; else cart[id] = Math.min(99, next);
  saveCart(); renderCart();
}
function openCart() {
  $("#cartSheet").classList.add("open");
  $("#scrim").classList.add("open");
  $("#cartSheet").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#closeCart").focus();
}
function closeCart() {
  $("#cartSheet").classList.remove("open");
  $("#scrim").classList.remove("open");
  $("#cartSheet").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function openDetails(id) {
  const p = productsData.find(product => product.id === Number(id));
  if (!p) return;
  const lines = [
    `Olá! Tenho interesse neste produto da L&M Exclusive:`,
    `${p.name} — ${money(p.price)}`,
    `Pode confirmar a disponibilidade, entrega e formas de pagamento?`
  ].join("\n");
  // Usa o WhatsApp para detalhes, sem inventar informações técnicas do produto.
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");
}
function checkout() {
  const items = Object.entries(cart).filter(([id, qty]) => qty > 0 && productsData.some(p => p.id === Number(id)));
  if (!items.length) return;
  const lines = items.map(([id, qty]) => {
    const p = productsData.find(product => product.id === Number(id));
    return `• ${p.name} — ${qty} x ${money(p.price)} = ${money(p.price * qty)}`;
  });
  const message = [
    "Olá! Gostaria de fazer um pedido na L&M Exclusive.",
    "",
    ...lines,
    "",
    `Total estimado: ${money(cartTotal())}`,
    "",
    "Por favor, confirme disponibilidade, frete e formas de pagamento. Sei que o envio desta mensagem não confirma automaticamente o pedido."
  ].join("\n");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
$("#filters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters(); renderProducts();
});
$("#products").addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  const details = event.target.closest("[data-details]");
  const card = event.target.closest("[data-open-details]");
  if (add) { event.stopPropagation(); addToCart(add.dataset.add); return; }
  if (details) { event.stopPropagation(); openProductModal(details.dataset.details); return; }
  if (card) openProductModal(card.dataset.openDetails);
});
$("#products").addEventListener("keydown", event => {
  const card = event.target.closest("[data-open-details]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault(); openProductModal(card.dataset.openDetails);
  }
});
// Controles da galeria/modal: a página inclui estes elementos no HTML.
const galleryPrevButton = $("#galleryPrev");
const galleryNextButton = $("#galleryNext");
const galleryThumbnails = $("#galleryThumbnails");
const closeProductButton = $("#closeProductModal");
const closeProductBackdrop = $("#closeProductBackdrop");
const modalAddButton = $("#modalAddToCart");
const modalWhatsappButton = $("#modalAskWhatsapp");

if (galleryPrevButton) galleryPrevButton.addEventListener("click", () => stepGallery(-1));
if (galleryNextButton) galleryNextButton.addEventListener("click", () => stepGallery(1));
if (galleryThumbnails) galleryThumbnails.addEventListener("click", event => {
  const thumb = event.target.closest("[data-gallery-index]");
  if (!thumb) return;
  activeGalleryIndex = Number(thumb.dataset.galleryIndex); renderGallery();
});
if (closeProductButton) closeProductButton.addEventListener("click", closeProductModal);
if (closeProductBackdrop) closeProductBackdrop.addEventListener("click", closeProductModal);
if (modalAddButton) modalAddButton.addEventListener("click", () => {
  if (activeModalProductId !== null) addToCart(activeModalProductId);
  closeProductModal();
  openCart();
});
if (modalWhatsappButton) modalWhatsappButton.addEventListener("click", () => {
  if (activeModalProductId !== null) openDetails(activeModalProductId);
});
$("#cartItems").addEventListener("click", event => {
  const qty = event.target.closest("[data-qty]");
  const remove = event.target.closest("[data-remove]");
  if (qty) changeQuantity(qty.dataset.qty, Number(qty.dataset.delta));
  if (remove) { delete cart[remove.dataset.remove]; saveCart(); renderCart(); }
});
$("#search").addEventListener("input", renderProducts);
$("#sortProducts").addEventListener("change", renderProducts);
$("#openCart").addEventListener("click", openCart);
$("#openCartBottom").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#scrim").addEventListener("click", closeCart);
$("#checkout").addEventListener("click", checkout);
$("#helpWhatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}`;
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
  if (link.id !== "helpWhatsapp") link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeCart(); closeProductModal(); }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault(); $("#search").focus(); $("#search").scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
$("#year").textContent = new Date().getFullYear();
renderFilters(); renderProducts(); renderCollections(); renderCart();
