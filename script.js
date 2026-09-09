const products=[
{id:1,n:"Strawberry Croissant",c:"food",m:"buttery · sweet · fresh",p:22000,i:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85",t:"BEST SELLER"},
{id:2,n:"Pink Berry Drink",c:"drink",m:"fresh · creamy · pretty",p:18000,i:"https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85",t:"NEW"},
{id:3,n:"Cute Desk Decor",c:"aesthetic",m:"korean style · cute",p:35000,i:"https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=85",t:"AESTHETIC"},
{id:4,n:"Sweet Donut Box",c:"food",m:"soft · fluffy · 6 pcs",p:28000,i:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85",t:"FAVORITE"},
{id:5,n:"Mini Gift Set",c:"gift",m:"pretty · ready to gift",p:45000,i:"https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=700&q=85",t:"GIFT"},
{id:6,n:"Pastel Cake Slice",c:"food",m:"soft · creamy · indulgent",p:25000,i:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",t:"YUMMY"},
{id:7,n:"Ribbon Hair Clip",c:"aesthetic",m:"korean style · pink",p:19000,i:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85",t:"CUTE"},
{id:8,n:"Iced Coffee",c:"drink",m:"smooth · chilled · cozy",p:20000,i:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85",t:"COZY"}];
let cart=[];
const money=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const productsEl=document.getElementById("products"),empty=document.getElementById("empty");
function render(list=products){productsEl.innerHTML=list.map(p=>`<article class="card"><div class="card-img"><img loading="lazy" src="${p.i}" alt="${p.n}"><span class="tag">${p.t}</span><button class="fav">♡</button></div><div class="card-info"><h3>${p.n}</h3><div class="meta">${p.m}</div><div class="bottom"><span class="price">${money(p.p)}</span><button class="add" onclick="add(${p.id})">+</button></div></div></article>`).join("");empty.style.display=list.length?"none":"block"}
function add(id){cart.push(products.find(p=>p.id===id));updateCart();openCart()}
function remove(i){cart.splice(i,1);updateCart()}
function updateCart(){document.getElementById("count").textContent=cart.length;const box=document.getElementById("cartItems");box.innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><img src="${p.i}" alt=""><div style="flex:1"><h4>${p.n}</h4><p>${money(p.p)}</p><button class="remove" onclick="remove(${i})">hapus</button></div></div>`).join(""):`<p class="cart-empty">Keranjangmu masih kosong ♡</p>`;const total=cart.reduce((s,p)=>s+p.p,0);document.getElementById("total").textContent=money(total);document.getElementById("checkout").href="https://wa.me/62895393044401?text="+encodeURIComponent("Halo kak aku mau pesan "+(cart.length?cart.map(p=>p.n).join(", "):"produk")+" ya;")}
function openCart(){document.getElementById("drawer").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("drawer").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
document.getElementById("cartOpen").onclick=openCart;document.getElementById("cartClose").onclick=closeCart;document.getElementById("overlay").onclick=closeCart;
document.getElementById("searchOpen").onclick=()=>{document.getElementById("searchBox").classList.toggle("open");document.getElementById("search").focus()};
document.getElementById("searchClose").onclick=()=>document.getElementById("searchBox").classList.remove("open");
document.getElementById("search").oninput=e=>{const q=e.target.value.toLowerCase();render(products.filter(p=>(p.n+" "+p.m).toLowerCase().includes(q)))};
document.querySelectorAll(".category").forEach(b=>b.onclick=()=>{document.querySelectorAll(".category").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter==="all"?products:products.filter(p=>p.c===b.dataset.filter))});
document.getElementById("lang").onchange=e=>{document.getElementById("search").placeholder=e.target.value==="en"?"Search food or aesthetic items...":"Cari makanan atau barang aesthetic..."};
document.getElementById("news").onsubmit=e=>{e.preventDefault();alert("Thank you ♡ Welcome to HeyNitara!")};
render();
