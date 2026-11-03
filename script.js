const CATS = [
  {key:'Grocery', label:'Grocery', emoji:'🥦'},
  {key:'Formal', label:"Men's Formal", emoji:'👔'},
  {key:'Casual', label:"Men's Casual", emoji:'👕'},
  {key:'Tank Tops', label:'Tank Tops', emoji:'🎽'},
  {key:'Shoes', label:'Shoes', emoji:'👟'}
];
const P = [
  // Grocery
  {id:1,name:'Fresh Red Apples (1kg)',cat:'Grocery',price:4.99,old:6.5,emoji:'🍎',bg:['#ffe3e3','#ffc9c9'],rate:5,tag:'Fresh'},
  {id:2,name:'Organic Bananas (1 dozen)',cat:'Grocery',price:3.49,emoji:'🍌',bg:['#fff6cc','#ffec99'],rate:4,tag:'Organic'},
  {id:3,name:'Farm Fresh Milk (1L)',cat:'Grocery',price:2.25,emoji:'🥛',bg:['#e8f6ff','#cfe9ff'],rate:5},
  {id:4,name:'Whole Grain Bread',cat:'Grocery',price:2.99,old:3.5,emoji:'🍞',bg:['#fdebd0','#fad7a0'],rate:4,tag:'Bakery'},
  {id:5,name:'Broccoli Crown (500g)',cat:'Grocery',price:2.79,emoji:'🥦',bg:['#d3f9d8','#b2f2bb'],rate:4},
  {id:6,name:'Free-Range Eggs (12)',cat:'Grocery',price:4.25,emoji:'🥚',bg:['#fff4e6','#ffe8cc'],rate:5},
  {id:7,name:'Ripe Tomatoes (1kg)',cat:'Grocery',price:3.19,emoji:'🍅',bg:['#ffe3e3','#ffc9c9'],rate:4},
  {id:8,name:'Cheddar Cheese Block',cat:'Grocery',price:5.99,old:7.2,emoji:'🧀',bg:['#fff3bf','#ffe066'],rate:5,tag:'Deal'},
  // Formal
  {id:9,name:'Classic Navy Suit Jacket',cat:'Formal',price:149.0,old:189,emoji:'🤵',bg:['#dbe4ff','#bac8ff'],rate:5,tag:'Bestseller'},
  {id:10,name:'White Slim-Fit Dress Shirt',cat:'Formal',price:39.99,emoji:'👔',bg:['#f1f3f5','#dee2e6'],rate:5},
  {id:11,name:'Charcoal Formal Trousers',cat:'Formal',price:59.5,emoji:'👖',bg:['#e9ecef','#ced4da'],rate:4},
  {id:12,name:'Silk Sky-Blue Tie',cat:'Formal',price:19.99,emoji:'🧣',bg:['#d0ebff','#a5d8ff'],rate:4,tag:'New'},
  {id:13,name:'Black Tuxedo Blazer',cat:'Formal',price:199.0,old:249,emoji:'🎩',bg:['#e9ecef','#adb5bd'],rate:5},
  {id:14,name:'Leather Formal Belt',cat:'Formal',price:24.99,emoji:'🪢',bg:['#f3e5d8','#e0c3a5'],rate:4},
  // Casual
  {id:15,name:'Graphic Cotton T-Shirt',cat:'Casual',price:18.99,emoji:'👕',bg:['#d0ebff','#a5d8ff'],rate:4,tag:'Hot'},
  {id:16,name:'Denim Jacket',cat:'Casual',price:64.0,old:79,emoji:'🧥',bg:['#dbe4ff','#bac8ff'],rate:5},
  {id:17,name:'Relaxed Fit Jeans',cat:'Casual',price:44.99,emoji:'👖',bg:['#e7f5ff','#a5d8ff'],rate:4},
  {id:18,name:'Cozy Pullover Hoodie',cat:'Casual',price:49.0,emoji:'🧶',bg:['#e5dbff','#d0bfff'],rate:5,tag:'Cozy'},
  {id:19,name:'Polo Shirt – Sky Blue',cat:'Casual',price:27.5,emoji:'👚',bg:['#c5f6fa','#99e9f2'],rate:4},
  {id:20,name:'Cargo Shorts',cat:'Casual',price:29.99,emoji:'🩳',bg:['#e6fcf5','#c3fae8'],rate:4},
  // Tank tops
  {id:21,name:'Gym Performance Tank',cat:'Tank Tops',price:15.99,emoji:'🎽',bg:['#d0ebff','#74c0fc'],rate:5,tag:'Sport'},
  {id:22,name:'Classic White Tank Top',cat:'Tank Tops',price:11.99,emoji:'🎽',bg:['#f8f9fa','#e9ecef'],rate:4},
  {id:23,name:'Muscle Fit Tank – Black',cat:'Tank Tops',price:16.5,old:20,emoji:'🎽',bg:['#dee2e6','#adb5bd'],rate:5},
  {id:24,name:'Beach Print Tank Top',cat:'Tank Tops',price:13.99,emoji:'🏖️',bg:['#fff3bf','#ffd43b'],rate:4,tag:'Summer'},
  {id:25,name:'Dry-Fit Running Tank',cat:'Tank Tops',price:17.99,emoji:'🏃',bg:['#d3f9d8','#8ce99a'],rate:4},
  {id:26,name:'Stringer Tank – Navy',cat:'Tank Tops',price:12.99,emoji:'🎽',bg:['#dbe4ff','#91a7ff'],rate:4},
  // Shoes
  {id:27,name:'Air Runner Sneakers',cat:'Shoes',price:79.0,old:99,emoji:'👟',bg:['#d0ebff','#74c0fc'],rate:5,tag:'Bestseller'},
  {id:28,name:'Oxford Leather Shoes',cat:'Shoes',price:109.0,emoji:'👞',bg:['#f3e5d8','#d9b99b'],rate:5},
  {id:29,name:'Trail Hiking Boots',cat:'Shoes',price:94.99,emoji:'🥾',bg:['#e9d8c4','#c9a77c'],rate:4},
  {id:30,name:'Comfort Slip-Ons',cat:'Shoes',price:45.0,emoji:'🩴',bg:['#e6fcf5','#96f2d7'],rate:4},
  {id:31,name:'Court White Sneakers',cat:'Shoes',price:69.99,old:85,emoji:'👟',bg:['#f1f3f5','#ced4da'],rate:5,tag:'Deal'},
  {id:32,name:'Sport Training Shoes',cat:'Shoes',price:74.5,emoji:'👟',bg:['#ffe3e3','#ffa8a8'],rate:4}
];
const FEATURED = [9,27,16,1,21,18,28,8];

/* ---------- HELPERS ---------- */
const $ = (s,c=document)=>c.querySelector(s), $$ = (s,c=document)=>[...c.querySelectorAll(s)];
const money = n => '$'+n.toFixed(2);
const stars = n => '★'.repeat(n)+'☆'.repeat(5-n);
function toast(msg){const t=document.createElement('div');t.className='toast-custom';t.innerHTML=msg;$('#toasts').appendChild(t);setTimeout(()=>t.remove(),2700)}

function card(p,i=0){
  return `<div class="col-6 col-md-4 col-lg-3 grid-item" style="animation-delay:${i*50}ms">
    <div class="product">
      <div class="p-img" style="background:linear-gradient(135deg,${p.bg[0]},${p.bg[1]})">
        ${p.tag?`<div class="p-tag">${p.tag}</div>`:''}<span>${p.emoji}</span>
      </div>
      <div class="p-body">
        <small class="text-secondary">${p.cat}</small>
        <h6>${p.name}</h6>
        <div class="stars mb-2">${stars(p.rate)}</div>
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <div><span class="p-price">${money(p.price)}</span>${p.old?`<span class="p-old">${money(p.old)}</span>`:''}</div>
          <button class="btn btn-sky btn-sm px-3" data-add="${p.id}" aria-label="Add to cart"><i class="bi bi-cart-plus"></i></button>
        </div>
      </div>
    </div></div>`;
}

/* ---------- ROUTER ---------- */
function go(page){
  if(!['home','products','contact'].includes(page)) page='home';
  $$('.page').forEach(p=>p.classList.remove('active'));
  $('#page-'+page).classList.add('active');
  $$('.nav-link').forEach(l=>l.classList.toggle('active',l.dataset.page===page));
  if(location.hash!=='#'+page) history.pushState(null,'','#'+page);
  window.scrollTo({top:0,behavior:'smooth'});
  bootstrap.Collapse.getInstance($('#menu'))?.hide();
  setTimeout(observe,100);
}
window.addEventListener('popstate',()=>go(location.hash.slice(1)||'home'));
document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-page]'); if(nav){e.preventDefault();go(nav.dataset.page);return}
  const g=e.target.closest('[data-go]'); if(g){go(g.dataset.go);return}
  const c=e.target.closest('[data-cat]'); if(c){setFilter(c.dataset.cat);go('products');return}
  const a=e.target.closest('[data-add]'); if(a){addToCart(+a.dataset.add,a);return}
  const b=e.target.closest('.btn'); if(b) ripple(e,b);
});
function ripple(e,b){
  const r=document.createElement('span');r.className='ripple';
  const rect=b.getBoundingClientRect(),s=Math.max(rect.width,rect.height);
  r.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-rect.left-s/2}px;top:${e.clientY-rect.top-s/2}px`;
  b.appendChild(r);setTimeout(()=>r.remove(),600);
}

/* ---------- HOME ---------- */
$('#catGrid').innerHTML = CATS.map(c=>`<div class="col-6 col-md-4 col-lg reveal"><div class="cat-card" data-cat="${c.key}"><span class="emoji">${c.emoji}</span><h6>${c.label}</h6></div></div>`).join('');
$('#featuredGrid').innerHTML = FEATURED.map((id,i)=>card(P.find(p=>p.id===id),i)).join('');

/* ---------- PRODUCTS: filter / search / sort ---------- */
let state={cat:'All',q:'',sort:'default'};
$('#filters').innerHTML = ['All',...CATS.map(c=>c.key)].map(k=>`<button class="filter-btn" data-f="${k}">${k==='Formal'?"Men's Formal":k==='Casual'?"Men's Casual":k}</button>`).join('');
function setFilter(k){state.cat=k;renderProducts()}
function renderProducts(){
  $$('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.f===state.cat));
  let list=P.filter(p=>(state.cat==='All'||p.cat===state.cat)&&p.name.toLowerCase().includes(state.q));
  if(state.sort==='low')list.sort((a,b)=>a.price-b.price);
  if(state.sort==='high')list.sort((a,b)=>b.price-a.price);
  if(state.sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
  $('#productGrid').innerHTML=list.map((p,i)=>card(p,i)).join('');
  $('#noResults').classList.toggle('d-none',list.length>0);
}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(b)setFilter(b.dataset.f)});
$('#search').addEventListener('input',e=>{state.q=e.target.value.trim().toLowerCase();renderProducts()});
$('#sort').addEventListener('change',e=>{state.sort=e.target.value;renderProducts()});
$('#resetBtn').addEventListener('click',()=>{state={cat:'All',q:'',sort:'default'};$('#search').value='';$('#sort').value='default';renderProducts()});

/* ---------- CART ---------- */
let cart=JSON.parse(localStorage.getItem('shopscape_cart')||'[]');
function save(){try{localStorage.setItem('shopscape_cart',JSON.stringify(cart))}catch(e){}renderCart()}
function addToCart(id,btn){
  const it=cart.find(c=>c.id===id); it?it.qty++:cart.push({id,qty:1});
  save(); const p=P.find(x=>x.id===id);
  toast(`<i class="bi bi-check-circle-fill text-info me-2"></i>${p.name} added to cart`);
  $('#cartCount').classList.remove('bump');void $('#cartCount').offsetWidth;$('#cartCount').classList.add('bump');
  if(btn){btn.innerHTML='<i class="bi bi-check2"></i>';setTimeout(()=>btn.innerHTML='<i class="bi bi-cart-plus"></i>',900)}
}
function renderCart(){
  const box=$('#cartItems');
  if(!cart.length){box.innerHTML='<div class="text-center py-5 text-secondary"><div style="font-size:3.5rem">🛍️</div><p class="mt-2">Your cart is empty</p></div>'}
  else box.innerHTML=cart.map(c=>{const p=P.find(x=>x.id===c.id);return `
    <div class="cart-item">
      <div class="ci-img" style="background:linear-gradient(135deg,${p.bg[0]},${p.bg[1]})">${p.emoji}</div>
      <div class="flex-grow-1"><div class="fw-semibold small">${p.name}</div><div class="text-primary fw-bold">${money(p.price*c.qty)}</div>
        <div class="qty"><button data-q="${c.id}" data-d="-1">−</button><b>${c.qty}</b><button data-q="${c.id}" data-d="1">+</button></div></div>
      <button class="btn btn-sm text-danger" data-rm="${c.id}"><i class="bi bi-trash"></i></button>
    </div>`}).join('');
  const sub=cart.reduce((s,c)=>s+P.find(x=>x.id===c.id).price*c.qty,0), ship=sub>0&&sub<50?5:0;
  $('#subtotal').textContent=money(sub);$('#shipping').textContent=sub?(ship?money(ship):'Free'):'$0.00';$('#total').textContent=money(sub+ship);
  $('#cartCount').textContent=cart.reduce((s,c)=>s+c.qty,0);
}
$('#cartItems').addEventListener('click',e=>{
  const q=e.target.closest('[data-q]'),r=e.target.closest('[data-rm]');
  if(q){const it=cart.find(c=>c.id==q.dataset.q);it.qty+=+q.dataset.d;if(it.qty<1)cart=cart.filter(c=>c!==it);save()}
  if(r){cart=cart.filter(c=>c.id!=r.dataset.rm);save()}
});
$('#clearBtn').addEventListener('click',()=>{cart=[];save();toast('Cart cleared')});
$('#checkoutBtn').addEventListener('click',()=>{
  if(!cart.length)return toast('Your cart is empty!');
  cart=[];save();bootstrap.Offcanvas.getInstance($('#cartCanvas')).hide();
  toast('<i class="bi bi-bag-check-fill text-info me-2"></i>Order placed! Thank you 🎉');
});

/* ---------- FORMS ---------- */
$('#contactForm').addEventListener('submit',e=>{
  e.preventDefault();const f=e.target;
  if(!f.checkValidity()){f.classList.add('was-validated');return}
  f.reset();f.classList.remove('was-validated');
  toast('<i class="bi bi-send-check-fill text-info me-2"></i>Message sent! We\'ll reply soon.');
});
$('#nlBtn').addEventListener('click',()=>{
  const v=$('#nlEmail').value;
  if(/^\S+@\S+\.\S+$/.test(v)){toast('Subscribed! 💌');$('#nlEmail').value=''}else toast('Enter a valid email');
});

/* ---------- SCROLL EFFECTS ---------- */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}}),{threshold:.12});
function observe(){$$('.page.active .reveal:not(.show)').forEach(el=>io.observe(el))}
window.addEventListener('scroll',()=>{
  $('#nav').classList.toggle('scrolled',scrollY>20);
  $('#topBtn').style.display=scrollY>400?'block':'none';
});
$('#topBtn').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

/* ---------- INIT ---------- */
renderProducts();renderCart();go(location.hash.slice(1)||'home');
