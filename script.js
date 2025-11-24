// 1. MEMILIH ELEMEN DARI HTML
// Kita perlu "mengambil" elemen yang ingin kita ubah atau dengarkan interaksinya.
const tampilanAngka = document.getElementById('angka');
const btnTambah = document.getElementById('btn-tambah');
const btnKurang = document.getElementById('btn-kurang');
const btnReset = document.getElementById('btn-reset');
const btnWarna = document.getElementById('btn-warna');
const body = document.body;

// 2. VARIABEL STATUS (STATE)
// Variabel ini melacak nilai angka saat ini.
let angkaSaatIni = 0;

// 3. FUNGSI UNTUK MEMPERBARUI TAMPILAN
// Fungsi ini bertugas mengubah teks di layar HTML agar sesuai dengan variabel 'angkaSaatIni'
function updateTampilan() {
    tampilanAngka.textContent = angkaSaatIni;
    
    // Bonus: Ubah warna teks jika negatif
    if (angkaSaatIni < 0) {
        tampilanAngka.style.color = 'red';
    } else {
        tampilanAngka.style.color = '#2c3e50';
    }
}

// 4. MENAMBAHKAN EVENT LISTENER (PENDENGAR ACARA)
// Kita memberitahu browser: "Hei, jika tombol ini diklik, lakukan sesuatu!"

// Tombol Tambah
btnTambah.addEventListener('click', function() {
    angkaSaatIni++; // Menambah 1 (sama dengan angkaSaatIni = angkaSaatIni + 1)
    updateTampilan(); // Panggil fungsi untuk update layar
});

// Tombol Kurang
btnKurang.addEventListener('click', function() {
    angkaSaatIni--; // Mengurangi 1
    updateTampilan();
});

// Tombol Reset
btnReset.addEventListener('click', function() {
    angkaSaatIni = 0; // Kembalikan ke 0
    updateTampilan();
});


// --- FITUR TAMBAHAN: UBAH WARNA LATAR ---

// Fungsi untuk menghasilkan warna acak (HEX code)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // Catatan: Kadang menghasilkan warna gelap yang membuat teks sulit dibaca, tapi ini contoh sederhana.
    return color;
}

// Tombol Ubah Warna
btnWarna.addEventListener('click', function() {
    const warnaBaru = getRandomColor();
    // Mengubah style background-color pada elemen <body>
    body.style.backgroundColor = warnaBaru;
});