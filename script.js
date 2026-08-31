const products = [
  {id:1,name:"Strawberry Shortcake",cat:"sweet",emoji:"🍓",price:28000,tag:"Best Seller",desc:"Lembut, creamy, strawberry."},
  {id:2,name:"Pink Croissant",cat:"bakery",emoji:"🥐",price:22000,tag:"Fresh",desc:"Butter croissant yang flaky."},
  {id:3,name:"Berry Milk",cat:"drink",emoji:"🧋",price:18000,tag:"Cute Pick",desc:"Creamy berry milk yang segar."},
  {id:4,name:"Choco Cookie",cat:"snack",emoji:"🍪",price:15000,tag:"Yummy",desc:"Cookies cokelat crunchy."},
  {id:5,name:"Mini Cupcake",cat:"sweet",emoji:"🧁",price:16000,tag:"Sweet",desc:"Cupcake mini dengan frosting."},
  {id:6,name:"Cream Donut",cat:"bakery",emoji:"🍩",price:17000,tag:"Favorite",desc:"Donat lembut isi cream."},
  {id:7,name:"Peach Soda",cat:"drink",emoji:"🍑",price:14000,tag:"Fresh",desc:"Soda peach manis dan sparkling."},
  {id:8,name:"Macaron Box",cat:"sweet",emoji:"🍬",price:32000,tag:"Gift",desc:"Macaron warna pastel pilihan."}
];

let cart = JSON.parse(localStorage.getItem("heynitaraCart") || "[]");
const rupiah = n => "Rp" + n.toLocaleString("id-ID");
const grid = document.getElementById("productGrid");

function renderProducts(filter="all"){
  grid.innerHTML = products.map(p => `
    <article class="product ${filter!=="all" && p.cat!==filter ? "hidden":""}">
      <div class="product-pic"><span class="tag">${p.tag}</span><span>${p.emoji}</span></div>
      <div class="product-info">
        <h3>${p.name}</h3><p>${p.desc}</p>
        <div class="price-row"><span class="price">${rupiah(p.price)}</span>
        <button class="add" aria-label="Tambah ${p.name}" onclick="addToCart(${p.id})">+</button></div>
      </div>
    </article>`).join("");
}
function addToCart(id){
  const p=products.find(x=>x.id===id), item=cart.find(x=>x.id===id);
  item ? item.qty++ : cart.push({id,qty:1});
  saveCart(); openCart();
}
function removeFromCart(id){
  cart=cart.filter(x=>x.id!==id); saveCart(); renderCart();
}
function saveCart(){localStorage.setItem("heynitaraCart",JSON.stringify(cart)); renderCart();}
function renderCart(){
  const box=document.getElementById("cartItems");
  if(!cart.length) box.innerHTML=`<div style="text-align:center;padding:35px 10px;color:#9b8580">Keranjangmu masih kosong ♡<br>Yuk pilih makanan yang gemas!</div>`;
  else box.innerHTML=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<div class="cart-item"><span class="emoji">${p.emoji}</span><div class="cart-item-info"><b>${p.name}</b><small>${i.qty} × ${rupiah(p.price)}</small></div><button class="remove" onclick="removeFromCart(${p.id})">×</button></div>`}).join("");
  const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
  document.getElementById("cartTotal").textContent=rupiah(total);
  document.getElementById("cartCount").textContent=cart.reduce((s,i)=>s+i.qty,0);
}
function openCart(){document.getElementById("cartOverlay").classList.add("open")}
function closeCart(){document.getElementById("cartOverlay").classList.remove("open")}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");renderProducts(btn.dataset.filter)}));
document.getElementById("cartBtn").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
document.getElementById("cartOverlay").addEventListener("click",e=>{if(e.target.id==="cartOverlay")closeCart()});
document.querySelector(".menu-toggle").addEventListener("click",()=>document.querySelector(".nav-links").classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav-links").classList.remove("open")));
document.getElementById("promoBtn").addEventListener("click",()=>{addToCart(1);addToCart(4);addToCart(5);openCart()});
document.getElementById("checkoutBtn").addEventListener("click",()=>{
  if(!cart.length){alert("Keranjang masih kosong ♡");return}
  const lines=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `• ${p.name} x${i.qty} = ${rupiah(p.price*i.qty)}`}).join("%0A");
  const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
  window.open(`https://wa.me/6280000000000?text=Halo%20HeyNitara%20%F0%9F%8E%80%0ASaya%20mau%20order%3A%0A${lines}%0A%0ATotal%3A%20${rupiah(total)}%0A%0ANama%3A%20`, "_blank");
});
renderProducts();renderCart();

function addPromo(id,qty){for(let n=0;n<qty;n++)addToCart(id);openCart();}
function addPromoSet(){addToCart(4);addToCart(5);addToCart(6);openCart();}
function addSweetBox(){addToCart(1);addToCart(4);addToCart(5);addToCart(7);openCart();}
