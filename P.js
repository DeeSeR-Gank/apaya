const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// 1. Cek pilihan tema sebelumnya saat halaman pertama kali dibuka
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.checked = true; // Pastikan slider ada di posisi "On"
}

// 2. Gunakan 'change' karena sekarang kita pakai input checkbox/slider
toggleBtn.addEventListener('change', () => {
    
    if (toggleBtn.checked) {
        // Jika slider digeser ke kanan (On)
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        // Jika slider digeser ke kiri (Off)
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// --- FITUR TAMBAHAN: LAZY LOAD ---
// Menunggu seluruh konten DOM dimuat sebelum menjalankan fungsi
document.addEventListener("DOMContentLoaded", function() {
    // Mencari semua elemen gambar yang memiliki class "lazy"
    const lazyImages = document.querySelectorAll("img.lazy");

    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    // Mengambil URL dari data-src dan memasukkannya ke src asli
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
});
