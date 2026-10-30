const pages = {
    beranda: {
        label: "Selamat datang",
        title: "Menumbuhkan ilmu, membentuk akhlak mulia.",
        lead: "Pondok Pesantren Al-Mubarokah mendampingi santri untuk tumbuh dalam ilmu agama, wawasan umum, kemandirian, dan kepedulian kepada sesama.",
        kind: "home"
    },
    "profil-sejarah": {
        label: "Profil · Sejarah",
        title: "Sejarah Pondok Pesantren",
        lead: "Mengenal perjalanan Pondok Pesantren Al-Mubarokah dalam membangun lingkungan pendidikan yang berlandaskan ilmu dan adab.",
        sections: [{ title: "Sejarah singkat berdirinya Pondok Pesantren Al-Mubarokah", text: "berawal dari tekad Alm. KH. Drs. Imam Baehaqi, M.A. (Putra dari Hadratussyekh KH. M. Sholeh Abdurrahman) dan Hidayat Syam (putra dari Syamsuddin) dan atas restu dan dukungan dari KH. Sholeh Abdurrachman, Suwarno, BA., dan H. M. Noor Kuwu Karangmangu pada tahun 1987 untuk mendirikan Yayasan Pendidikan Islamiyah Al-Hidayah (YAPISA) untuk menaungi Lembaga Pendidikan yang ada", list: ["Menjaga tradisi menuntut ilmu dan memuliakan guru.", "Mengembangkan pendidikan yang relevan dengan kebutuhan zaman.", "Membangun kebersamaan antara pesantren, keluarga, dan masyarakat."] }, { title: "Berkembang bersama masyarakat", text: "Perjalanan pesantren adalah perjalanan bersama. Santri, pendidik, wali, dan masyarakat mengambil peran dalam membangun lingkungan yang mendukung proses belajar dan pembentukan karakter." }]
    },
    "profil-visi-misi": {
        label: "Profil · Visi dan Misi",
        title: "Visi dan Misi",
        lead: "Arah pendidikan Al-Mubarokah adalah membina generasi yang mendalami kitab kuning, beriman, berilmu, berakhlak mulia, mandiri, dan bermanfaat.",
        sections: [{ title: "Visi", text: "Mencetak Generasi Qur'ani yang berilmu pengetahuan tinggi dan berwawasan luas dengan dibekali keterampilan dan teknologi." }, { title: "Misi", list: ["Membina Keimanan dan Ketaqwaan.", "Berprilaku dengan Akhlakul Karimah.", "Berpegang Teguh kepada Ahlisunnah Wal Jamaa'ah An-Nahdiyyah.", "Mengembangkan Bakat dan Kreatifitas.", "Berprestasi dalam Ilmu Pengetahuan dan Teknologi."] }]
    },
    "profil-sistem-pendidikan": {
        label: "Profil · Sistem Pendidikan",
        title: "Sistem Pendidikan",
        lead: "Pembelajaran memadukan penguatan keislaman, pengetahuan umum, pembiasaan ibadah, dan pengembangan karakter.",
        sections: [{ title: "Belajar secara menyeluruh", text: "Kegiatan pendidikan dirancang untuk mendukung perkembangan pengetahuan, spiritualitas, keterampilan, dan tanggung jawab sosial santri. Pembelajaran kelas dilengkapi pembiasaan baik dan pendampingan pendidik.", list: ["Penguatan kajian kitab kuning dan dasar-dasar keislaman.", "Pembelajaran umum sesuai jenjang pendidikan.", "Pembiasaan disiplin, hidup sehat, dan tanggung jawab.", "Kegiatan pengembangan minat, bakat, dan keterampilan."] }, { title: "Pendampingan santri", text: "Pendidik dan pembimbing mendampingi proses belajar serta keseharian santri. Rincian kurikulum dan kalender akademik dapat dikonfirmasi kepada pengelola." }]
    },
    "profil-pimpinan": {
        label: "Profil · Pengasuh Pondok Putra dan Putri",
        title: "Pengasuh Pondok Putra dan Putri",
        lead: "Kepemimpinan pesantren berperan menjaga arah pendidikan, pembinaan santri, dan hubungan baik dengan keluarga serta masyarakat.",
        kind: "caretakers"
    },
    "sekolah-mts-smp": {
        label: "Jenjang Pendidikan · Madrasah Tsanawiyah Al-Hidayah (MTs)",
        title: "Madrasah Tsanawiyah Al-Hidayah (MTs)",
        lead: "Pendidikan tingkat menengah pertama dengan penguatan ilmu umum, pendidikan agama, dan pembinaan karakter.",
        sections: [{ title: "Belajar dan bertumbuh", text: "Santri menjalani pembelajaran sesuai jenjang pendidikan, disertai pendalaman keislaman dan pembiasaan hidup disiplin. Kegiatan kajian kitab kuning dan pengembangan diri dapat disesuaikan dengan program yang tersedia.", list: ["Penguatan mata pelajaran umum.", "Pembelajaran agama dan kitab kuning.", "Pembinaan adab, kemandirian, dan tanggung jawab."] }, { title: "Keterangan jenjang", text: "Informasi izin operasional, kurikulum, dan ijazah dapat dikonfirmasi langsung kepada pihak sekolah." }]
    },
    "sekolah-ma-sma": {
        label: "Jenjang Pendidikan · Madrasah Aliyah Al-Mubarokah (Ma)",
        title: "Madrasah Aliyah Al-Mubarokah (Ma)",
        lead: "Pendidikan tingkat lanjut untuk memperluas wawasan, mematangkan karakter, dan menyiapkan langkah santri berikutnya.",
        sections: [{ title: "Bekal melanjutkan pendidikan", text: "Santri mendapat penguatan pembelajaran umum dan agama, serta kesempatan mengembangkan minat dalam bidang akademik maupun kegiatan pesantren.", list: ["Pengembangan kemampuan berpikir kritis dan belajar mandiri.", "Pendalaman kitab kuning dan nilai keislaman.", "Pendampingan perencanaan studi lanjutan dan masa depan."] }, { title: "Pilihan peminatan", text: "Peminatan dan program yang sedang berjalan mengikuti ketersediaan di satuan pendidikan. Silakan hubungi pengelola untuk informasi terbaru." }]
    },
    "sekolah-program-kejuruan": {
        label: "Sekolah · Program Kejuruan",
        title: "Program Kejuruan",
        lead: "Pembekalan keterampilan praktis untuk mendorong kreativitas, kemandirian, dan kesiapan berkarya.",
        sections: [{ title: "Keterampilan untuk masa depan", text: "Program kejuruan memberi ruang bagi santri untuk mengenali minat dan mengembangkan kemampuan praktis. Bidang pelatihan mengikuti fasilitas dan tenaga pembimbing yang tersedia.", list: ["Pelatihan keterampilan dan kecakapan hidup.", "Pengembangan kreativitas dan kemampuan memecahkan masalah.", "Pembiasaan bekerja dengan disiplin dan tanggung jawab."] }, { title: "Pilihan program", text: "Daftar program, jadwal pelatihan, dan sertifikasi yang tersedia perlu dikonfirmasi kepada pengelola." }]
    },
    program: {
        label: "Pembinaan Santri",
        title: "Program Pesantren",
        lead: "Berbagai kegiatan belajar dan pembinaan dirancang untuk menguatkan ilmu, ibadah, karakter, dan keterampilan santri.",
        sections: [{ title: "Ruang tumbuh santri", text: "Program pesantren melengkapi pembelajaran formal dengan pengalaman yang mengembangkan kemampuan dan kebiasaan baik.", list: ["Pembiasaan membaca dan mempelajari kitab kuning.", "Penguatan bahasa Arab dan bahasa Inggris.", "Kajian keislaman dan praktik ibadah.", "Kegiatan olahraga, seni, dan pengembangan minat bakat.", "Latihan keterampilan hidup, kepemimpinan, dan kerja sama."] }, { title: "Pelaksanaan kegiatan", text: "Jadwal dan pilihan kegiatan dapat berubah mengikuti kalender pendidikan dan ketersediaan program." }]
    },
    "program-unggulan": {
        label: "Program · Program Unggulan",
        title: "Program Unggulan",
        lead: "Program pembinaan untuk memperkuat ilmu keislaman, kemampuan berbahasa, dan karakter santri.",
        sections: [{ title: "Pembinaan utama", text: "Program unggulan pesantren berfokus pada pendalaman ilmu, Tahfidz Al-Qur'an dan pembiasaan baik dalam keseharian santri.", list: ["Tahsin, Tahfidz Al-Qur'an & Hadits.", "Pidato Bahasa Indonesia, Arab & Inggris.", "Qiroatul Kutubissalafiyah/Kitab Kuning.", "Praktek Kerja Lapangan (PKL)."] }, { title: "Informasi program", text: "Materi, jadwal, dan pelaksanaan program dapat disesuaikan. Silakan hubungi pengelola untuk mendapatkan informasi terbaru." }]
    },
    "program-ekstrakurikuler": {
        label: "Program · Program Ekstrakurikuler",
        title: "Program Ekstrakurikuler",
        lead: "Kegiatan pengembangan minat dan bakat untuk mendukung kreativitas, kebersamaan, dan keterampilan santri.",
        sections: [{ title: "Ruang mengembangkan minat dan bakat", text: "Kegiatan ekstrakurikuler melengkapi pembelajaran formal dan pembinaan pesantren melalui aktivitas yang mendorong santri berkembang.", list: ["Pramuka.", "Paskibra.", "Palang Merah Remaja (PMR).", "Hadroh Sholawat & Gambus.", "Karate.", "Drumband.", "Tilawah Al-Qur'an.", "Kaligrafi.", "Muhadhoroh/Latihan Pidato & MC.", "Outbound."] }, { title: "Informasi kegiatan", text: "Pilihan kegiatan dan jadwal mengikuti program yang tersedia di pesantren. Silakan konfirmasi langsung kepada pengelola." }]
    },
    prestasi: {
        label: "Kabar Pesantren",
        title: "Prestasi Santri",
        lead: "Setiap pencapaian adalah hasil ikhtiar, proses belajar, dan dukungan bersama.",
        kind: "achievements"
    },
    fasilitas: {
        label: "Lingkungan Pesantren",
        title: "Fasilitas Pesantren",
        lead: "Lingkungan yang tertata dan mendukung membantu santri belajar, beribadah, beristirahat, dan berkegiatan bersama.",
        kind: "facilities"
    },
    "kalender-pendidikan": {
        label: "Informasi · Kalender Pendidikan",
        title: "Kalender Pendidikan",
        lead: "Rangkuman agenda akademik dan kegiatan pesantren untuk membantu santri dan keluarga merencanakan kegiatan.",
        sections: [{ title: "Agenda tahun berjalan", text: "Kalender resmi belum diterbitkan pada halaman ini. Jadwal awal dan akhir semester, libur, ujian, serta agenda penerimaan perlu dikonfirmasi kepada sekolah atau pengelola pesantren." }, { title: "Pembaruan informasi", text: "Tanggal kegiatan dapat berubah mengikuti kebijakan pendidikan dan keputusan pesantren. Pastikan untuk memeriksa pengumuman resmi sebelum membuat rencana perjalanan." }]
    },
    "jadwal-harian-santri": {
        label: "Informasi · Jadwal Harian Santri",
        title: "Jadwal Harian Santri",
        lead: "Keseharian santri dibangun melalui keseimbangan belajar, ibadah, istirahat, dan tanggung jawab bersama.",
        sections: [
            {
                title: "Jadwal Kegiatan Harian",
                table: [
                    ["Waktu", "Kegiatan"],
                    ["03:15", "Bangun Tidur"],
                    ["03:30", "Qiyamulail & Dzikir"],
                    ["04:15", "Sholat Shubuh & Dzikir"],
                    ["05:00", "Ngaji Ba’da Shubuh"],
                    ["05:30", "Piket Kebersihan"],
                    ["06:00", "Mandi & Sarapan"],
                    ["06:30", "Persiapan Sekolah"],
                    ["06:45", "Pembiasaan Pagi"],
                    ["07:00", "Sholat Dhuha"],
                    ["07:20", "Tahsin Al-Qur’an"],
                    ["08:00", "Setor Hafalan Qur’an"],
                    ["08:30", "Kegiatan Belajar Mengajar (KBM)"],
                    ["10:00", "Istirahat"],
                    ["10:20", "Kegiatan Belajar Mengajar (KBM)"],
                    ["11:50", "Sholat Dzuhur"],
                    ["12:15", "Kegiatan Belajar Mengajar (KBM)"],
                    ["14:00", "Makan & Istirahat"],
                    ["15:00", "Sholat Ashar"],
                    ["15:50", "Ngaji Kitab Kuning"],
                    ["17:10", "Mandi & Persiapan Sholat Maghrib"],
                    ["18:00", "Sholat Maghrib Berjama’ah"],
                    ["18:20", "Tahsin Al-Qur’an"],
                    ["19:00", "Sholat Isya Berjama’ah"],
                    ["19:20", "Makan Malam"],
                    ["20:15", "Ngaji Bimbingan"],
                    ["22:00", "Tidur"]
                ]
            },
            {
                title: "Kegiatan Rutin Mingguan",
                table: [
                    ["Waktu", "Kegiatan"],
                    ["Malam Jum’at", "Manakiban"],
                    ["Malam Minggu", "Muhadhoroh"],
                    ["Malam Senin", "Marhabanan"],
                    ["Ba’da Maghrib malam Rabu", "Nariyahan"],
                    ["Ba’da Maghrib malam Jum’at", "Yasin Fadhilah"]
                ]
            }
        ]
    },
    "hubungi-kami": {
        label: "Informasi · Hubungi Kami",
        title: "Hubungi Pondok Pesantren",
        lead: "Silakan menghubungi pengelola untuk informasi pendidikan, pendaftaran, kunjungan, dan kebutuhan lainnya.",
        sections: [{ title: "Informasi kontak", text: "Kanal komunikasi dan alamat resmi belum dicantumkan. Hubungi pihak yang mengenalkan pesantren kepada Anda untuk memperoleh nomor dan lokasi yang benar." }, { title: "Lokasi pesantren", text: "Alamat lengkap belum tersedia. Peta di bawah membuka pencarian umum dan belum menunjukkan titik lokasi resmi Al-Mubarokah." }],
        kind: "contact"
    },
    berita: {
        label: "Kabar Pesantren",
        title: "Berita & Kegiatan",
        lead: "Informasi kegiatan, pengumuman, dan cerita dari lingkungan Pondok Pesantren Al-Mubarokah.",
        sections: [{ title: "Informasi terbaru", text: "Belum ada berita yang dipublikasikan. Informasi kegiatan akan ditambahkan setelah tanggal, dokumentasi, dan isi berita dikonfirmasi oleh pengelola." }],
        kind: "news"
    },
    pendaftaran: {
        label: "Penerimaan Santri Baru",
        title: "Pendaftaran Santri Baru",
        lead: "Mari bergabung bersama Pondok Pesantren Al-Mubarokah. Simak jadwal, persyaratan, berkas, dan tahapan pendaftaran santri baru berikut ini.",
        kind: "enrollment"
    }
};

const app = document.getElementById("app");
const nav = document.getElementById("site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const menuHint = document.getElementById("menu-toggle-hint");
const navBackdrop = document.querySelector(".nav-backdrop");
const navClose = document.querySelector(".nav-close");

const socialLinks = {
    tiktok: "https://www.tiktok.com/@pesantrenalmubarokah?_r=1&_t=ZS-9AorxAuDIiC",
    youtube: "https://youtube.com/@pondokpesantrenalmubarokah?si=CvkaunQVeKNZZL4o",
    facebook: "https://www.facebook.com/share/19yDVzGaoG/",
    instagram: "https://www.instagram.com/pesantren.almubarokah?psln=MW5sYTFxeHI2eGtlbA=="
};
const navGroups = [...document.querySelectorAll(".nav-group")];

app.addEventListener("submit", (event) => {
    const form = event.target.closest("#enrollment-form");
    if (!form) return;
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const optionalLines = [
        ["Email orang tua/wali", formData.get("guardianEmail")],
        ["Informasi tambahan", formData.get("notes")]
    ].filter(([, value]) => value);
    const message = [
        "Assalamu'alaikum, saya ingin mendaftarkan calon santri baru di Pondok Pesantren Al-Mubarokah.",
        "",
        "DATA CALON SANTRI",
        `Nama lengkap: ${formData.get("studentName")}`,
        `Jenis kelamin: ${formData.get("gender")}`,
        `Tempat lahir: ${formData.get("birthPlace")}`,
        `Tanggal lahir: ${formData.get("birthDate")}`,
        `Jenjang yang dituju: ${formData.get("level")}`,
        `Gelombang pendaftaran: ${formData.get("batch")}`,
        `Asal sekolah: ${formData.get("previousSchool")}`,
        `Alamat: ${formData.get("address")}`,
        "",
        "DATA ORANG TUA / WALI",
        `Nama: ${formData.get("guardianName")}`,
        `Hubungan: ${formData.get("relationship")}`,
        `Nomor WhatsApp: ${formData.get("guardianPhone")}`,
        ...optionalLines.map(([label, value]) => `${label}: ${value}`),
        "",
        "Mohon informasi mengenai langkah pendaftaran selanjutnya. Terima kasih."
    ].join("\n");
    const whatsappUrl = `https://wa.me/${formData.get("contact")}?text=${encodeURIComponent(message)}`;
    const status = form.querySelector("#form-submit-status");
    const fallback = form.querySelector("#form-fallback");
    fallback.href = whatsappUrl;
    const whatsappWindow = window.open(whatsappUrl, "_blank");

    if (whatsappWindow) {
        whatsappWindow.opener = null;
        status.textContent = "WhatsApp dibuka dengan draf pesan. Periksa kembali lalu kirim pesan untuk menyelesaikan pendaftaran.";
        fallback.hidden = true;
    } else {
        status.textContent = "Jendela WhatsApp tidak terbuka. Gunakan tautan berikut untuk melanjutkan.";
        fallback.hidden = false;
    }
});

function renderHome() {
    return `<div class="page-view">
        <section class="hero">
            <div class="hero-slideshow" aria-hidden="true">
                <div class="hero-slide hero-slide-one"></div>
                <div class="hero-slide hero-slide-two"></div>
            </div>
            <div class="hero-content">
                <h2 class="hero-welcome" aria-label="Haloo Sobat A.M.U Selamat Datang Di Website Resmi Pondok Pesantren Al-Mubarokah" aria-live="off"><span class="typing-content" aria-hidden="true"><span class="typing-text"></span><span class="typing-cursor"></span></span></h2>
                <h1 class="hero-tagline">Mencetak Generasi Berkarakter :</h1>
                <h1>Mendalami Kitab Kuning dan Ilmu Pengetahuan Modern</h1>
                <p>${pages.beranda.lead}</p>
                <div class="hero-actions"><a class="button" href="#pendaftaran">Informasi Pendaftaran <span aria-hidden="true">↗</span></a><a class="button button-outline" href="#profil-sejarah">Kenali Pesantren</a></div>
            </div>
            <span class="hero-caption">Pendidikan, ibadah, dan kebersamaan</span>
        </section>
        <section class="home-intro"><div class="home-intro-inner">
            <p class="home-intro-lead">Pendidikan yang menyertai santri dalam setiap langkah kehidupan.</p>
            <div class="home-pillar"><span class="pillar-icon" aria-hidden="true">۞</span><span>Kitab kuning sebagai rujukan</span></div>
            <div class="home-pillar"><span class="pillar-icon" aria-hidden="true">✦</span><span>Ilmu dan akhlak berjalan bersama</span></div>
            <div class="home-pillar"><span class="pillar-icon" aria-hidden="true">⌂</span><span>Mandiri dan bermanfaat</span></div>
        </div></section>
        <section class="section"><div class="section-inner intro-grid">
            <div class="intro-photo" role="img" aria-label="Suasana kegiatan belajar di sekolah">
                <div class="intro-photo-slide intro-photo-slide-one" aria-hidden="true"></div>
                <div class="intro-photo-slide intro-photo-slide-two" aria-hidden="true"></div>
            </div>
            <div class="intro-copy"><span class="eyebrow">Tentang Al-Mubarokah</span><h2>Belajar dengan ilmu, bertumbuh dengan adab.</h2><p>Pondok Pesantren Al-Mubarokah mendampingi santri melalui pembelajaran agama dan umum, pembiasaan ibadah, serta pendidikan karakter dalam kehidupan sehari-hari.</p><p>Lingkungan pesantren menjadi ruang untuk belajar mandiri, membangun persaudaraan, dan mempersiapkan diri agar bermanfaat bagi keluarga serta masyarakat.</p><a class="text-link" href="#profil-sejarah">Jelajahi profil pesantren <span aria-hidden="true">→</span></a></div>
        </div></section>
        <section class="feature-band"><div class="feature-band-inner"><div><span class="eyebrow eyebrow-gold">Pendidikan Menyeluruh</span><h2>Menyiapkan santri untuk memberi manfaat.</h2><p>Ilmu, ibadah, keterampilan, dan kepedulian menjadi bagian dari proses tumbuh bersama.</p><a class="button" href="#program">Lihat Program <span aria-hidden="true">→</span></a></div>
            <div class="feature-list"><div class="feature-row"><span>01</span><div><h3>Kajian Kitab Kuning</h3><p>Membaca dan mempelajari kitab kuning dalam kegiatan sehari-hari.</p></div></div><div class="feature-row"><span>02</span><div><h3>Ilmu yang seimbang</h3><p>Pendidikan agama dan umum untuk memperluas wawasan santri.</p></div></div><div class="feature-row"><span>03</span><div><h3>Kemandirian dan pengabdian</h3><p>Melatih tanggung jawab, kerja sama, dan kepedulian sosial.</p></div></div></div>
        </div></section>
    </div>`;
}

function renderTable(rows) {
    return `<table class="schedule-table"><tbody>${rows.map((row, index) => `<tr>${row.map((cell) => index === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function renderSections(page) {
    return page.sections.map((section) => {
        let content = section.text ? `<p>${section.text}</p>` : "";
        if (section.list) content += `<ul>${section.list.map((item) => `<li>${item}</li>`).join("")}</ul>`;
        if (section.table) content += renderTable(section.table);
        if (section.steps) content += `<div class="enrollment-steps">${section.steps.map((step, index) => `<div class="step"><span class="step-number">${index + 1}</span><div><h3>${step}</h3></div></div>`).join("")}</div>`;
        const heading = `<h2>${section.title}</h2>`;
        return section.title === "Penting" || section.title === "Jadwal resmi" || section.title === "Informasi pengasuh" ? `<div class="article-callout"><strong>${section.title}.</strong> ${section.text}</div>` : `${heading}${content}`;
    }).join("");
}

function renderContact() {
    return `<div class="contact-grid"><article class="contact-card"><h3>Alamat</h3><p>Jl. Mengger Desa Karangmangu Kecamatan Susukanlebak Kabupaten Cirebon Provinsi Jawa Barat 45185.</p></article><article class="contact-card"><h3>Email</h3><p>Alamat email resmi belum tersedia.</p></article><article class="contact-card"><h3>Jam layanan</h3><p>Buka Jam 08.00 WIB - Tutup Jam 17.00 WIB</p></article></div><iframe class="map-frame" title="Peta satelit Pondok Pesantren Al-Mubarokah di Karangamangu, Cirebon" src="https://www.google.com/maps?q=Pondok+Pesantren+Al-Mubarokah%2C+Karangamangu%2C+Kec.+Susukan+Lb.%2C+Kabupaten+Cirebon%2C+Jawa+Barat+45185&z=18&t=k&output=embed" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><a class="contact-map-link" href="https://maps.app.goo.gl/jg5DKjZZM9uCaCyq5?g_st=aw" target="_blank" rel="noopener noreferrer">Buka lokasi Pondok Pesantren Al-Mubarokah di Google Maps <span aria-hidden="true">↗</span></a>`;
}

function renderEnrollment() {
    const batches = [
        { name: "Gelombang 1", months: "Oktober – Desember" },
        { name: "Gelombang 2", months: "Januari – Maret" },
        { name: "Gelombang 3", months: "April – Juni" }
    ];
    const requirements = [
        "Lulus dari jenjang pendidikan sebelumnya",
        "Berusia sesuai ketentuan",
        "Berkelakuan baik dan sehat jasmani rohani",
        "Mampu membaca Al-Qur'an dengan baik"
    ];
    const documents = [
        "Fotokopi Ijazah/SKL",
        "Fotokopi Kartu Keluarga",
        "Fotokopi Akta Kelahiran",
        "Pas foto berwarna",
        "Surat keterangan sehat dari dokter"
    ];
    const steps = [
        "Isi formulir online atau datang langsung ke kantor pondok",
        "Serahkan berkas persyaratan",
        "Ikuti tes wawancara dan baca Al-Qur'an",
        "Pengumuman hasil seleksi",
        "Daftar ulang"
    ];

    return `<div class="enrollment-page">
        <section class="enrollment-section">
            <div class="enrollment-heading"><span class="enrollment-icon" aria-hidden="true">📝</span><div><h2>Formulir Pendaftaran Santri Baru</h2><p>Isi data calon santri dan orang tua/wali dengan lengkap.</p></div></div>
            <form class="enrollment-form" id="enrollment-form" action="#pendaftaran" method="post">
                <fieldset class="form-fieldset">
                    <legend>Data Calon Santri</legend>
                    <div class="form-grid">
                        <label class="form-field form-field-wide">Nama lengkap calon santri <span aria-hidden="true">*</span><input name="studentName" type="text" autocomplete="name" required></label>
                        <label class="form-field">Jenis kelamin <span aria-hidden="true">*</span><select name="gender" required><option value="">Pilih jenis kelamin</option><option>Laki-laki</option><option>Perempuan</option></select></label>
                        <label class="form-field">Tempat lahir <span aria-hidden="true">*</span><input name="birthPlace" type="text" required></label>
                        <label class="form-field">Tanggal lahir <span aria-hidden="true">*</span><input name="birthDate" type="date" required></label>
                        <label class="form-field">Jenjang yang dituju <span aria-hidden="true">*</span><select name="level" required><option value="">Pilih jenjang</option><option>Madrasah Tsanawiyah Al-Hidayah (MTs)</option><option>Madrasah Aliyah Al-Mubarokah (Ma)</option></select></label>
                        <label class="form-field">Gelombang pendaftaran <span aria-hidden="true">*</span><select name="batch" required><option value="">Pilih gelombang</option><option>Gelombang 1 (Oktober–Desember)</option><option>Gelombang 2 (Januari–Maret)</option><option>Gelombang 3 (April–Juni)</option></select></label>
                        <label class="form-field form-field-wide">Asal sekolah / pendidikan sebelumnya <span aria-hidden="true">*</span><input name="previousSchool" type="text" required></label>
                        <label class="form-field form-field-wide">Alamat lengkap calon santri <span aria-hidden="true">*</span><textarea name="address" rows="3" autocomplete="street-address" required></textarea></label>
                    </div>
                </fieldset>
                <fieldset class="form-fieldset">
                    <legend>Data Orang Tua / Wali</legend>
                    <div class="form-grid">
                        <label class="form-field">Nama orang tua / wali <span aria-hidden="true">*</span><input name="guardianName" type="text" required></label>
                        <label class="form-field">Hubungan dengan calon santri <span aria-hidden="true">*</span><select name="relationship" required><option value="">Pilih hubungan</option><option>Ayah</option><option>Ibu</option><option>Wali</option></select></label>
                        <label class="form-field">Nomor WhatsApp orang tua / wali <span aria-hidden="true">*</span><input name="guardianPhone" type="tel" inputmode="tel" autocomplete="tel" placeholder="Contoh: 081234567890" required></label>
                        <label class="form-field">Email orang tua / wali <span class="field-optional">(opsional)</span><input name="guardianEmail" type="email" autocomplete="email"></label>
                    </div>
                </fieldset>
                <fieldset class="form-fieldset">
                    <legend>Pengiriman Formulir</legend>
                    <div class="form-grid">
                        <label class="form-field">Kirim formulir kepada <span aria-hidden="true">*</span><select name="contact" required><option value="6282219509435">Umi Fitri — WhatsApp</option><option value="6281320515029">Umi Habibah — WhatsApp</option></select></label>
                        <label class="form-field form-field-wide">Informasi tambahan <span class="field-optional">(opsional)</span><textarea name="notes" rows="3" placeholder="Tuliskan hal yang perlu diketahui pengelola"></textarea></label>
                    </div>
                    <label class="form-consent"><input name="consent" type="checkbox" required><span>Saya menyatakan data yang diisi benar dan setuju mengirimkannya kepada pengelola untuk keperluan pendaftaran. <span aria-hidden="true">*</span></span></label>
                    <button class="form-submit" type="submit" disabled>Kirim formulir melalui WhatsApp <span aria-hidden="true">↗</span></button>
                    <p class="form-submit-status" id="form-submit-status" role="status" aria-live="polite"></p>
                    <a class="form-fallback" id="form-fallback" href="#" target="_blank" rel="noopener noreferrer" hidden>Buka WhatsApp dengan pesan formulir</a>
                </fieldset>
            </form>
            <noscript><p class="form-note">Aktifkan JavaScript untuk memvalidasi formulir dan menyiapkan pesan WhatsApp. Data formulir tidak akan dikirim atau disimpan oleh situs.</p></noscript>
        </section>
        <section class="enrollment-section">
            <div class="enrollment-heading"><span class="enrollment-icon" aria-hidden="true">📅</span><div><h2>Jadwal Pendaftaran</h2><p>Pilih gelombang pendaftaran sesuai waktu yang tersedia.</p></div></div>
            <div class="batch-grid">${batches.map((batch, index) => `<article class="batch-card"><span class="batch-index">0${index + 1}</span><h3>${batch.name}</h3><p>${batch.months}</p></article>`).join("")}</div>
        </section>
        <div class="enrollment-grid">
            <section class="enrollment-section">
                <div class="enrollment-heading"><span class="enrollment-icon" aria-hidden="true">✅</span><div><h2>Persyaratan Umum</h2><p>Calon santri diharapkan memenuhi ketentuan berikut.</p></div></div>
                <ul class="enrollment-list">${requirements.map((item) => `<li>${item}</li>`).join("")}</ul>
            </section>
            <section class="enrollment-section">
                <div class="enrollment-heading"><span class="enrollment-icon" aria-hidden="true">📂</span><div><h2>Berkas yang Harus Disiapkan</h2><p>Lengkapi berkas sebelum menyerahkan pendaftaran.</p></div></div>
                <ul class="enrollment-list">${documents.map((item) => `<li>${item}</li>`).join("")}</ul>
            </section>
        </div>
        <section class="enrollment-section">
            <div class="enrollment-heading"><span class="enrollment-icon" aria-hidden="true">📝</span><div><h2>Cara Mendaftar</h2><p>Ikuti tahapan penerimaan santri baru berikut.</p></div></div>
            <ol class="enrollment-steps">${steps.map((step, index) => `<li class="enrollment-step"><span class="step-number">${index + 1}</span><span>${step}</span></li>`).join("")}</ol>
        </section>
        <section class="enrollment-section enrollment-contact">
            <div class="enrollment-heading"><span class="enrollment-icon" aria-hidden="true">📞</span><div><h2>Kontak Informasi</h2><p>Hubungi pengelola untuk bertanya lebih lanjut tentang pendaftaran.</p></div></div>
            <div class="enrollment-contact-grid">
                <a class="enrollment-contact-card" href="https://wa.me/6282219509435" target="_blank" rel="noopener noreferrer"><span class="contact-symbol" aria-hidden="true">☏</span><span><small>WhatsApp</small><strong>Umi Fitri</strong><small>+62 822-1950-9435</small></span><span class="contact-arrow" aria-hidden="true">↗</span></a>
                <a class="enrollment-contact-card" href="https://wa.me/6281320515029" target="_blank" rel="noopener noreferrer"><span class="contact-symbol" aria-hidden="true">☏</span><span><small>WhatsApp</small><strong>Umi Habibah</strong><small>+62 813-2051-5029</small></span><span class="contact-arrow" aria-hidden="true">↗</span></a>
                <div class="enrollment-contact-card address-card"><span class="contact-symbol" aria-hidden="true">⌖</span><span><small>Alamat</small><strong>Jl. Mengger Ds. Karangmangu Kec.Susukanlebak Kab. Cirebon</strong></span></div>
            </div>
        </section>
    </div>`;
}

function renderNews() {
    return `<div class="news-list"><article class="news-item"><time>INFORMASI PESANTREN</time><h2>Berita dan kegiatan akan hadir di sini</h2><p>Halaman ini disiapkan untuk pengumuman, agenda, dan cerita kegiatan. Kiriman akan ditampilkan setelah informasi diverifikasi oleh pengelola.</p></article><article class="news-item"><time>PENGUMUMAN</time><h2>Pastikan informasi kegiatan terkonfirmasi</h2><p>Jadwal dan pengumuman resmi dapat berubah. Silakan konfirmasi kepada pihak pesantren sebelum melakukan perjalanan atau pendaftaran.</p></article></div>`;
}

function renderCaretakers() {
    const caretakers = [
        {
            name: "Abi H. Abdul Basith M.Pd, S.Pd.I",
            role: "Pengasuh Pondok Putra",
            photoSrc: "galeri/abi abdul basith.jpeg",
            photoClass: "caretaker-photo-animated",
            photoAlt: "Foto lingkungan Pondok Pesantren Al-Mubarokah sebagai pengganti sementara foto Abi Abdul Basith",
            biography: "Abi Abdul Basith menempuh pendidikan di Pondok Pesantren Al-Mubarokah Putra. Beliau memiliki pengalaman dalam Mendidik Para Santri. Sebagai Pengasuh Pondok Putra, beliau memimpin pembinaan santri putra, mendampingi kegiatan pendidikan dan ibadah, serta menjaga agar kehidupan pesantren berjalan sesuai nilai dan tujuan yang ada di Pondok Pesantren Al-Mubarokah."
        },
        {
            name: "Umi.Nyai.Hj.Siti Habibatul Azizah, M.Pd",
            role: "Selaku Pengasuh Pondok Putri",
            photoSrc: "galeri/umi%20bibah.png",
            photoClass: "caretaker-photo-animated",
            photoAlt: "Foto Umi Bibah dengan latar belakang transparan",
            biography: "Umi Habibah menempuh pendidikan di Pondok Pesantren Al-Mubarokah Putri. Beliau memiliki pengalaman mengasuh dan mendampingi santri selama Beberapa Tahun. Di Pondok Pesantren Al-Mubarokah Putri, beliau berperan membina santri putri Putri, mendampingi kegiatan ibadah dan keseharian, serta menanamkan nilai ilmu dan akhlak."
        }
    ];

    return `<div class="caretaker-grid">${caretakers.map((person) => `<article class="caretaker-card"><img class="caretaker-photo ${person.photoClass}" src="${person.photoSrc}" alt="${person.photoAlt}"><div class="caretaker-details"><h3>${person.name}</h3><p class="caretaker-role">${person.role}</p><p>${person.biography}</p></div></article>`).join("")}</div>`;
}

function renderFacilities() {
    const groups = [
        {
            title: "Fasilitas Pondok Putra",
            items: [
                { name: "Gapura Pondok Putra", image: "gapura-pondok-putra" },
                { name: "Halaman Pondok Putra", image: "halaman-pondok-putra", photo: "galeri/halaman%20pondok.jpeg" },
                { name: "Ruangan Sekolah MTs", image: "ruangan-sekolah-mts" },
                { name: "Masjid Depan", image: "masjid-depan" },
                { name: "Masjid Dalam", image: "masjid-dalam" },
                { name: "Saung Tahfidz", image: "saung-tahfidz" },
                { name: "Kantin Pondok", image: "kantin-pondok" },
                { name: "Kamar Mandi (Putra)", image: "kamar-mandi-putra" },
                { name: "Perpustakaan", image: "perpustakaan" },
                { name: "Kamar 1 (Putra)", image: "kamar-1-putra" },
                { name: "Kamar 2 (Putra)", image: "kamar-2-putra" },
                { name: "Kamar 3 (Putra)", image: "kamar-3-putra" },
                { name: "Kamar 4 (Putra)", image: "kamar-4-putra" },
                { name: "Jemuran Santri Putra", image: "jemuran-santri-putra" },
                { name: "Kamar Ustadz", image: "kamar-ustadz" }
            ]
        },
        {
            title: "Fasilitas Pondok Putri",
            items: [
                { name: "Gapura Pondok Putri", image: "gapura-pondok-putri", photo: "fasilitas/gapura%20putri.jpeg" },
                { name: "Aula Besar (Putri)", image: "aula-besar-putri" },
                { name: "Aula Bawah (Putri)", image: "aula-bawah-putri" },
                { name: "Jemuran Santri Putri", image: "jemuran-santri-putri" },
                { name: "Kamar 1 (Putri)", image: "kamar-1-putri" },
                { name: "Kamar 2 (Putri)", image: "kamar-2-putri" },
                { name: "Kamar 3 (Putri)", image: "kamar-3-putri" },
                { name: "Kamar Pembimbing / Ustadzah", image: "kamar-pembimbing-ustadzah" }
            ]
        }
    ];

    return `<h2>Daftar Fasilitas</h2><div class="facility-groups">${groups.map((group, index) => `<section class="facility-group ${index === 0 ? "facility-group-putra" : "facility-group-putri"}"><h3>${group.title}</h3><div class="facility-card-grid">${group.items.map((facility) => `<article class="facility-card"><img src="${facility.photo || `foto-fasilitas/${facility.image}.jpg`}" alt="Foto ${facility.name}" class="facility-img"><h4>${facility.name}</h4></article>`).join("")}</div></section>`).join("")}</div>`;
}

function renderAchievements() {
    const achievements = [
        {
            name: "Ibrahim, Khoirul Fahmi, dan Silmawati",
            award: "🏆 SELAMAT & SUKSES!",
            event: "🗓️ Kamis, 29 Oktober 2026 📌 Musabaqah Tilawatil Qur'an (MTQ) Tingkat Kecamatan Susukanlebak 🥇 Ibrahim — Juara 1 Cabang Tilawah 🥉 Khoirul Fahmi — Juara 3 Cabang Tilawah 🥉 Silmawati — Juara 3 Cabang MHQ Juz 30 Semoga prestasi ini menjadi langkah awal meraih kesuksesan yang lebih tinggi, menumbuhkan kecintaan terhadap Al-Qur'an, serta menjadi inspirasi bagi generasi Qur'ani yang berakhlak mulia. 🤲✨ #PrestasiSantri #MTQ #AlMubarokah #Cirebon",
            photo: "prestasi/Kecamatan.jpeg"
        },
        {
            name: "Ananda M. Rizal Muntaqoba",
            award: "🏆 SELAMAT & SUKSES!",
            event: "🗓️ 27 Oktober 2025 📌 MTQH Tingkat Kabupaten Cirebon 🥉 Ananda M. Rizal Muntaqoba — Juara 3 Cabang Hafalan 100 Hadits Bersanad Terima kasih kepada Pengasuh Pondok Pesantren Al-Mubarokah, KH. Abdul Basith, M.Pd. Semoga hafalan dan ilmunya menjadi amal jariyah yang tak terputus. Selamat dan terus berprestasi! 🤲✨#MTQH #HafalanHadits #AlMubarokah #KabupatenCirebon",
            photo: "prestasi/Juara%20Hadits.jpeg"
        },
        {
            name: "Gus. M. Lahiz Masyfu",
            award: "🏆 SELAMAT & SUKSES!",
            event: "🗓️ 26 Juni 2025 📌 RTQ At-Taqwa Kota Cirebon 🏅 Gus. M. Lahiz Masyfu — Santri Teladan Putra Sebuah kebanggaan yang luar biasa! Semoga menjadi teladan yang baik bagi santri lainnya. Semangat terus! 💪🤍 #SantriTeladan #RTQAtTaqwa #AlMubarokah",
            photo: "prestasi/Gus%20Lahiz%201.jpeg"
        },
        {
            name: "Gus. Azmi Khawarizmi Achmad",
            award: "🏆 SELAMAT & SUKSES!",
            event: "🗓️ Oktober 2026 📌 Tingkat Kelurahan Kejaksan 🏅 Gus. Azmi Khawarizmi Achmad — Juara Terbaik 2 (1 Juz + Tilawah Putra) Alhamdulillah, selamat atas pencapaiannya! Semoga semakin cinta pada Al-Qur'an dan terus berprestasi. 📖✨ #MTQ #HafalanQuran #AlMubarokah #Cirebon",
            photo: "prestasi/Guz%20Azmi%201.jpeg"
        },
        {
            name: "Gus. M. Lahiz Masyfu",
            award: "🏆 SELAMAT & SUKSES!",
            event: "🗓️ Ramadhan 1446 H / Maret 2025 📌 Olimpiade Fikih Tingkat Kota Cirebon — Festival Ramadhan 1446 H 🥉 Gus. M. Lahiz Masyfu — Juara 3 Olimpiade Fikih Semoga ilmu yang diraih berkah dan bermanfaat, terus semangat belajarnya! 🤲✨ #OlimpiadeFikih #FestivalRamadhan #AlMubarokah #Cirebon",
            photo: "prestasi/Gus%20Lahiz.jpeg"
        },
        {
            name: "Gus. Azmi Khawarizmi Achmad",
            award: "🏆 SELAMAT & SUKSES!",
            event: "🗓️ Ramadhan 1446 H / Maret 2025 📌 Olimpiade Fikih Tingkat Kota Cirebon — Festival Ramadhan 1446 H 🏅 Gus. Azmi Khawarizmi Achmad — Harapan 3 Olimpiade Fikih Selamat dan semangat! Semoga langkah kecil ini membawa kesuksesan yang lebih besar di masa depan. 🤲✨#OlimpiadeFikih #FestivalRamadhan #AlMubarokah",
            photo: "prestasi/Gus%20Azmi.jpeg"
        },
        {
            name: "Muhammad Rizal Muntaqoba",
            award: "🏆 SELAMAT & SUKSES!",
            event: "20 November 2024 📌 POS SMA KKM MAN 3 Cirebon 🥉 Muhammad Rizal Muntaqoba — Juara 3 Pidato Bahasa Arab Kerja kerasmu membuahkan hasil. Semoga semakin percaya diri dan berprestasi ke depannya! 🎉✨ #PidatoBahasaArab #PrestasiSantri #AlMubarokah",
            photo: "prestasi/POSMA%201.jpeg"
        },
        {
            name: "Siti Ajeng Gusti Yanti",
            award: "🏆 SELAMAT & SUKSES!",
            event: "20 November 2024 📌 POS SMA KKM MAN 3 Cirebon 🥈 Siti Ajeng Gusti Yanti. A — Juara 2 Pidato Bahasa Arab Terima kasih atas usaha dan ketekunanmu. Semoga menjadi motivasi untuk meraih prestasi yang lebih gemilang! 🤍✨ #PidatoBahasaArab #PrestasiSantri #AlMubarokah",
            photo: "prestasi/POSMA%202.jpeg"
        }
    ];

    return `<h2>Apresiasi Prestasi Santri</h2><p>Berikut dokumentasi prestasi santri yang tercantum pada poster kegiatan.</p><div class="achievement-grid">${achievements.map((achievement) => `<figure class="achievement-card"><img class="achievement-photo" src="${achievement.photo}" alt="Poster prestasi ${achievement.name}"><figcaption><h3>${achievement.name}</h3><p><strong>${achievement.award}</strong><br>${achievement.event.replace(/(#[A-Za-z0-9_]+)/g, "<strong>$1</strong>")}</p></figcaption></figure>`).join("")}</div>`;
}

function renderPage(route) {
    const page = pages[route] || pages.beranda;
    document.title = route === "beranda" ? "Pondok Pesantren Al-Mubarokah" : `${page.title} | Pondok Pesantren Al-Mubarokah`;
    if (page.kind === "home") return renderHome();
    const historyImage = route === "profil-sejarah" ? `<figure class="history-photo"><img src="galeri/pendiri pondok.jpeg" alt="Pendiri Pondok Pesantren Al-Mubarokah"><figcaption>Pendiri Pondok Pesantren Al-Mubarokah.</figcaption></figure>` : "";
    const body = page.kind === "contact" ? renderContact() : page.kind === "news" ? renderNews() : page.kind === "caretakers" ? renderCaretakers() : page.kind === "facilities" ? renderFacilities() : page.kind === "enrollment" ? renderEnrollment() : page.kind === "achievements" ? renderAchievements() : `${historyImage}${renderSections(page)}`;
    const programSlideshow = route === "program-unggulan" ? `<div class="program-slideshow" aria-hidden="true"><div class="program-slide program-slide-one"></div><div class="program-slide program-slide-two"></div></div>` : "";
    const bannerClass = route === "program-unggulan" ? "page-banner program-banner"
        : route === "sekolah-mts-smp" ? "page-banner education-banner education-banner-mts"
        : route === "sekolah-ma-sma" ? "page-banner education-banner education-banner-ma"
        : "page-banner";
    return `<div class="page-view"><section class="${bannerClass}">${programSlideshow}<div class="page-banner-inner"><div class="breadcrumbs"><a href="#beranda">Beranda</a><span aria-hidden="true">/</span><span>${page.label}</span></div><span class="eyebrow">Pondok Pesantren Al-Mubarokah</span><h1>${page.title}</h1><p>${page.lead}</p></div></section><div class="content-layout"><article class="article-content">${body}</article></div></div>`;
}

function setNavigationOpen(open) {
    nav.classList.toggle("is-open", open);
    navBackdrop.classList.toggle("is-open", open);
    nav.setAttribute("aria-hidden", String(!open));
    nav.inert = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    menuHint.textContent = open ? "" : "";
    document.body.classList.toggle("nav-open", open);
}

function closeNavigation(returnFocus = false) {
    setNavigationOpen(false);
    navGroups.forEach((group) => {
        group.classList.remove("is-open");
        group.querySelector(".nav-trigger").setAttribute("aria-expanded", "false");
    });
    if (returnFocus) menuToggle.focus();
}

function navigate() {
    const route = window.location.hash.slice(1) || "beranda";
    app.innerHTML = renderPage(route);
    const welcomeHeading = app.querySelector(".hero-welcome");
    if (welcomeHeading) {
        const typingText = welcomeHeading.querySelector(".typing-text");
        const welcomeMessage = welcomeHeading.getAttribute("aria-label");
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            typingText.textContent = welcomeMessage;
        } else {
            welcomeHeading.classList.add("typing-active");
            const typeMessage = (characterIndex = 0) => {
                if (!welcomeHeading.isConnected) return;
                typingText.textContent = welcomeMessage.slice(0, characterIndex++);
                if (characterIndex <= welcomeMessage.length) {
                    window.setTimeout(() => typeMessage(characterIndex), 45);
                } else {
                    window.setTimeout(() => {
                        if (!welcomeHeading.isConnected) return;
                        eraseMessage(welcomeMessage.length);
                    }, 5000);
                }
            };
            const eraseMessage = (characterIndex) => {
                if (!welcomeHeading.isConnected) return;
                typingText.textContent = welcomeMessage.slice(0, characterIndex - 1);
                if (characterIndex > 1) {
                    window.setTimeout(() => eraseMessage(characterIndex - 1), 45);
                } else {
                    window.setTimeout(() => typeMessage(), 2000);
                }
            };
            typeMessage();
        }
    }
    const enrollmentSubmit = app.querySelector("#enrollment-form .form-submit");
    if (enrollmentSubmit) enrollmentSubmit.disabled = false;
    const caretakerPhotos = app.querySelectorAll(".caretaker-photo-animated");
    if (caretakerPhotos.length > 0) {
        if ("IntersectionObserver" in window) {
            const photoObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            caretakerPhotos.forEach((photo) => photoObserver.observe(photo));
        } else {
            caretakerPhotos.forEach((photo) => photo.classList.add("is-visible"));
        }
    }
    document.querySelectorAll("[data-route]").forEach((link) => {
        const active = link.dataset.route === route;
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
    });
    closeNavigation();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

menuToggle.addEventListener("click", () => {
    const opening = menuToggle.getAttribute("aria-expanded") !== "true";
    setNavigationOpen(opening);
    if (opening) navClose.focus();
});

navClose.addEventListener("click", () => closeNavigation(true));
navBackdrop.addEventListener("click", () => closeNavigation(true));
nav.querySelectorAll("[data-route]").forEach((link) => {
    link.addEventListener("click", () => closeNavigation());
});

document.querySelectorAll(".nav-trigger").forEach((button) => {
    button.addEventListener("click", () => {
        const group = button.closest(".nav-group");
        const opening = !group.classList.contains("is-open");
        navGroups.forEach((item) => {
            item.classList.remove("is-open");
            item.querySelector(".nav-trigger").setAttribute("aria-expanded", "false");
        });
        group.classList.toggle("is-open", opening);
        button.setAttribute("aria-expanded", String(opening));
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-group")) {
        navGroups.forEach((group) => {
            group.classList.remove("is-open");
            group.querySelector(".nav-trigger").setAttribute("aria-expanded", "false");
        });
    }
});

document.addEventListener("keydown", (event) => {
    if (menuToggle.getAttribute("aria-expanded") !== "true") return;
    if (event.key === "Escape") {
        closeNavigation(true);
        return;
    }
    if (event.key !== "Tab") return;

    const focusableItems = [...nav.querySelectorAll("a[href], button:not(:disabled)")].filter((item) => item.getClientRects().length > 0);
    const firstItem = focusableItems[0];
    const lastItem = focusableItems[focusableItems.length - 1];
    if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
    } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
    }
});
window.addEventListener("hashchange", navigate);
document.getElementById("copyright-year").textContent = new Date().getFullYear();

const socialIcons = {
    tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.7 2h3.1c.3 2 1.4 3.1 3.4 3.4v3.1c-1.3-.1-2.5-.5-3.4-1v6.1a6.8 6.8 0 1 1-5.7-6.7v3.2a3.7 3.7 0 1 0 2.6 3.5V2Z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.8V7c0-.8.5-1 1-1h2.8V2h-3.9C10.2 2 8 4.1 8 7.4v1.4H5v4h3V22h5v-9.2h3.3l.5-4H14Z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-3.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.02 3.2A12.7 12.7 0 0 0 5.15 22.46L3.4 28.8l6.5-1.7a12.75 12.75 0 1 0 6.12-23.9Zm0 23.2a10.4 10.4 0 0 1-5.3-1.45l-.38-.23-3.86 1.01 1.03-3.76-.25-.39a10.47 10.47 0 1 1 8.76 4.82Zm5.74-7.84c-.31-.16-1.83-.9-2.12-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-1 1.2-.18.21-.36.24-.67.08-.31-.15-1.3-.48-2.47-1.5-.91-.81-1.52-1.82-1.7-2.13-.18-.3-.02-.47.14-.63.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.06-.39-.02-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.54.08-.82.39-.28.3-1.08 1.05-1.08 2.56 0 1.52 1.1 2.98 1.25 3.19.15.2 2.17 3.32 5.26 4.65.74.32 1.31.51 1.76.65.74.23 1.42.2 1.95.12.6-.09 1.83-.75 2.09-1.48.26-.73.26-1.36.18-1.49-.07-.13-.28-.2-.59-.36Z"/></svg>`
};

const labels = {
    tiktok: "TikTok",
    youtube: "YouTube",
    facebook: "Facebook",
    instagram: "Instagram",
    whatsapp: "WhatsApp"
};

const socialContainer = document.querySelector(".social-links");
socialContainer.innerHTML = Object.entries(socialLinks).map(([name, url]) => {
    const opensChoices = name === "whatsapp";
    return `<a class="social-icon" href="${opensChoices ? "#" : url}" ${opensChoices ? "" : 'target="_blank" rel="noopener noreferrer"'} data-whatsapp="${opensChoices}" aria-label="${labels[name]}" title="${labels[name]}">${socialIcons[name]}</a>`;
}).join("");

const whatsappWidget = document.querySelector(".whatsapp-widget");
const whatsappButton = document.querySelector(".whatsapp-float");
const whatsappMenu = document.querySelector(".whatsapp-menu");

function toggleWhatsappMenu(open) {
    const shouldOpen = typeof open === "boolean" ? open : !whatsappMenu.classList.contains("is-open");
    whatsappMenu.classList.toggle("is-open", shouldOpen);
    whatsappButton.setAttribute("aria-expanded", String(shouldOpen));
}

whatsappButton.addEventListener("click", () => toggleWhatsappMenu());
document.querySelectorAll('[data-whatsapp="true"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        toggleWhatsappMenu(true);
    });
});
document.addEventListener("click", (event) => {
    if (!whatsappWidget.contains(event.target) && !event.target.closest('[data-whatsapp="true"]')) toggleWhatsappMenu(false);
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        toggleWhatsappMenu(false);
        whatsappButton.focus();
    }
});

navigate();