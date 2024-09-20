  // Fungsi untuk mencegah klik kanan
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            alert("Fungsi klik kanan dinonaktifkan!");
        });

        // Fungsi untuk mencegah kombinasi tombol Inspect (Ctrl+Shift+I, F12, Ctrl+U)
        document.addEventListener('keydown', function(event) {
            // Cegah F12
            if (event.key === "F12") {
                event.preventDefault();
                alert("Fungsi ini tidak diizinkan!");
            }

            // Cegah Ctrl+Shift+I
            if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
                event.preventDefault();
                alert("Fungsi ini tidak diizinkan!");
            }

            // Cegah Ctrl+U
            if (event.ctrlKey && event.key.toLowerCase() === "u") {
                event.preventDefault();
                alert("Fungsi ini tidak diizinkan!");
            }
        });

    if (window.innerWidth > 1024) { // Ukuran desktop biasanya lebih besar dari 1024px
        // Redirect ke halaman lain
        // window.location.href = "URL_tujuan";

        // Atau tampilkan pesan kesalahan
        alert("Maaf, website ini hanya dapat diakses melalui perangkat mobile.");
        document.body.innerHTML = '<h1>Website ini hanya tersedia untuk perangkat mobile.</h1>'; // Menampilkan pesan di body
    }



document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Fungsi untuk toggle navbar
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Fungsi untuk menutup navbar ketika klik di luar
    document.addEventListener('click', (event) => {
        const isClickInside = menuIcon.contains(event.target) || navbar.contains(event.target);

        if (!isClickInside) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const subject1 = document.getElementById('pesanan').value;
    const subject2 = document.getElementById('alamat').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '6285158066142'; // Ganti dengan nomor WhatsApp kamu
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=
        Name: ${encodeURIComponent(name)}%0A
        pesanan: ${encodeURIComponent(subject1)}%0A
        alamat : ${encodeURIComponent(subject2)}`;

    if (message) {
        whatsappUrl += `%0A%0A
        Message: ${encodeURIComponent(message)}`;
    }
           
    window.open(whatsappUrl, '_blank');
});




