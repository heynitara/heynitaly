# HeyNitara 🎀

Website toko makanan aesthetic dengan tema **cute pink & cream**, dibuat agar mudah dipakai di GitHub Pages.

## Fitur
- Responsive untuk HP, tablet, dan desktop
- Filter kategori menu
- Keranjang belanja dengan `localStorage`
- Checkout melalui WhatsApp
- Desain cute pink & cream
- Tidak membutuhkan database atau build tool

## Cara upload ke GitHub Pages
1. Buat repository GitHub baru, misalnya `heynitara`.
2. Upload **semua isi ZIP ini** (jangan upload folder ZIP-nya).
3. Masuk ke **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu **Save**.
6. Tunggu beberapa saat sampai GitHub memberikan alamat website.

## Penting
Di `script.js`, ganti nomor WhatsApp contoh:
`6280000000000`

menjadi nomor WhatsApp tokomu dalam format internasional tanpa tanda `+`.

Kamu juga bisa mengganti nama, harga, emoji, deskripsi, dan produk langsung di bagian `const products` pada `script.js`.

## Struktur
- `index.html` — halaman utama
- `style.css` — warna & desain
- `script.js` — produk, filter, cart & checkout
- `README.md` — panduan

## Promo
Bagian promo sudah tersedia di halaman utama. Edit teks, harga, dan produk promo di `index.html` jika ingin mengganti penawaran.
