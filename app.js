const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

/* ==========================================
   View Engine
========================================== */

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* ==========================================
   Static Folder
========================================== */

app.use(express.static(path.join(__dirname, "public")));

/* ==========================================
   Dummy Data Mahasiswa
========================================== */

const mahasiswa = [

    {
        nim: "6304230018",
        nama: "Supriyanto",
        jurusan: "Teknik Informatika"
    },

    {
        nim: "6304230019",
        nama: "Andi Saputra",
        jurusan: "Teknik Informatika"
    },

    {
        nim: "6304230020",
        nama: "Budi Santoso",
        jurusan: "Sistem Informasi"
    },

    {
        nim: "6304230021",
        nama: "Rina Marlina",
        jurusan: "Manajemen Informatika"
    },

    {
        nim: "6304230022",
        nama: "Dewi Lestari",
        jurusan: "Teknik Informatika"
    },

    {
        nim: "6304230023",
        nama: "Ahmad Fauzi",
        jurusan: "Sistem Informasi"
    }

];

/* ==========================================
   Statistik Dashboard
========================================== */

const totalMahasiswa = mahasiswa.length;

const totalMatkul = 12;
const totalDosen = 18;
const totalJurusan = 3;

/* ==========================================
   Home
========================================== */

app.get("/", (req, res) => {

    res.render("index", {

        mahasiswa,

        totalMahasiswa,

        totalMatkul,

        totalDosen,

        totalJurusan

    });

});

/* ==========================================
   404
========================================== */

app.use((req, res) => {

    res.status(404).send(`
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <a href="/">Kembali ke Dashboard</a>
    `);

});

/* ==========================================
   Server
========================================== */

app.listen(PORT, () => {

    console.log(`
==========================================
 Dashboard Akademik Berjalan
==========================================

 Server : http://localhost:${PORT}

 Status : Running

==========================================
`);

});