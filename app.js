const express = require("express");
const path = require("path");

const app = express();

/* =========================================
   VIEW ENGINE
========================================= */

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

/* =========================================
   STATIC FILE
========================================= */

app.use(express.static(path.join(__dirname, "public")));

/* =========================================
   DATA MAHASISWA
========================================= */

const mahasiswa = [

    {
        nim: "6304230018",
        nama: "Sukri",
        jurusan: "Teknik Informatika"
    },

    {
        nim: "6304230019",
        nama: "Andi",
        jurusan: "Sistem Informasi"
    },

    {
        nim: "6304230020",
        nama: "Budi",
        jurusan: "Manajemen Informatika"
    }

];

/* =========================================
   ROUTE
========================================= */

app.get("/", (req, res) => {

    res.render("index", {

        mahasiswa

    });

});

/* =========================================
   START SERVER
========================================= */

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {

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

}

/* =========================================
   EXPORT APP
========================================= */

module.exports = app;