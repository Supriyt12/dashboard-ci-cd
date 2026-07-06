/* =========================================================
   DASHBOARD AKADEMIK
========================================================= */

document.addEventListener("DOMContentLoaded",()=>{

/* ==========================================
   MENU NAVIGATION
========================================== */

const menus =
document.querySelectorAll(".menu");

const dashboard =
document.getElementById(
"dashboard-page"
);

const profile =
document.getElementById(
"profile-page"
);

const logoutPage =
document.getElementById(
"logout-page"
);

menus.forEach(menu=>{

menu.addEventListener("click",()=>{

    // hapus active
    menus.forEach(item=>{

        item.classList.remove(
        "active"
        );

    });

    // active menu dipilih
    menu.classList.add(
    "active"
    );

    const page =
    menu.dataset.page;

    // sembunyikan semua
    dashboard.style.display =
    "none";

    profile.style.display =
    "none";

    logoutPage.style.display =
    "none";

    // tampilkan page

    if(page==="dashboard"){

        dashboard.style.display =
        "block";

    }

    if(page==="profile"){

        profile.style.display =
        "block";

    }

    if(page==="logout"){

        logoutPage.style.display =
        "block";

    }

});

});
/* ==========================================
   SEARCH MAHASISWA
========================================== */

const searchInput =
document.getElementById(
"searchInput"
);

if(searchInput){

searchInput.addEventListener(
"keyup",
function(){

    const keyword =
    this.value.toLowerCase();

    const rows =
    document.querySelectorAll(
    "#mahasiswaTable tbody tr"
    );

    rows.forEach(row=>{

        const text =
        row.innerText.toLowerCase();

        row.style.display =
        text.includes(keyword)
        ? ""
        : "none";

    });

});

}

/* ==========================================
   JAM DIGITAL & TANGGAL
========================================== */

function updateClock(){

const now = new Date();

const jam =
document.getElementById(
"jamDigital"
);

const tanggal =
document.getElementById(
"tanggal"
);

if(jam && tanggal){

    // JAM
    jam.innerHTML =
    now.toLocaleTimeString(
    "id-ID"
    );

    // TANGGAL
    tanggal.innerHTML =
    now.toLocaleDateString(
    "id-ID",
    {

        weekday:"long",

        year:"numeric",

        month:"long",

        day:"numeric"

    });

}

}

// jalankan pertama
updateClock();

// update tiap 1 detik
setInterval(updateClock,1000);
/* ==========================================
   BAR CHART
========================================== */

const barCanvas =
document.getElementById(
"barChart"
);

if(barCanvas){

new Chart(barCanvas,{

type:"bar",

data:{

    labels:[

        "Teknik Informatika",

        "Sistem Informasi",

        "Manajemen Informatika"

    ],

    datasets:[{

        label:"Jumlah Mahasiswa",

        data:[120,80,45],

        backgroundColor:[

            "#0d6efd",

            "#198754",

            "#ffc107"

        ],

        borderRadius:12,

        borderSkipped:false

    }]

},

options:{

    responsive:true,

    plugins:{

        legend:{

            display:false

        }

    },

    scales:{

        y:{

            beginAtZero:true

        }

    }

}

});

}

/* ==========================================
   PIE CHART
========================================== */

const pieCanvas =
document.getElementById(
"pieChart"
);

if(pieCanvas){

new Chart(pieCanvas,{

type:"doughnut",

data:{

    labels:[

        "Teknik Informatika",

        "Sistem Informasi",

        "Manajemen Informatika"

    ],

    datasets:[{

        data:[120,80,45],

        backgroundColor:[

            "#0d6efd",

            "#198754",

            "#ffc107"

        ],

        borderWidth:0

    }]

},

options:{

    responsive:true,

    cutout:"70%",

    plugins:{

        legend:{

            position:"bottom"

        }

    }

}

});

}

/* ==========================================
   ANIMASI CARD
========================================== */

const cards =
document.querySelectorAll(
".card"
);

cards.forEach((card,index)=>{

card.style.opacity = "0";

card.style.transform =
"translateY(30px)";

setTimeout(()=>{

    card.style.transition =
    ".6s ease";

    card.style.opacity = "1";

    card.style.transform =
    "translateY(0)";

}, index * 120);

});
/* ==========================================
   DARK MODE
========================================== */

const darkButton =
document.getElementById(
"darkMode"
);

if(darkButton){

darkButton.addEventListener(
"click",
()=>{

    document.body.classList.toggle(
    "dark-mode"
    );

});

}

/* ==========================================
   TOOLTIP BOOTSTRAP
========================================== */

const tooltipTriggerList =
[].slice.call(

document.querySelectorAll(
'[data-bs-toggle="tooltip"]'
)

);

tooltipTriggerList.map(

function(tooltipTriggerEl){

    return new bootstrap.Tooltip(
    tooltipTriggerEl
    );

}

);

/* ==========================================
   FLOAT BUTTON
========================================== */

const fab =
document.querySelector(
".fab"
);

if(fab){

fab.addEventListener(
"click",
()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

}

/* ==========================================
   LOGOUT BUTTON
========================================== */

const btnLogout =
document.getElementById(
"btnLogout"
);

if(btnLogout){

btnLogout.addEventListener(
"click",
()=>{

    alert(
    "Logout berhasil!"
    );

});

}

/* ==========================================
   CANCEL LOGOUT
========================================== */

const cancelLogout =
document.getElementById(
"cancelLogout"
);

if(cancelLogout){

cancelLogout.addEventListener(
"click",
()=>{

    // tampil dashboard
    dashboard.style.display =
    "block";

    // hide lainnya
    profile.style.display =
    "none";

    logoutPage.style.display =
    "none";

    // reset active
    menus.forEach(item=>{

        item.classList.remove(
        "active"
        );

    });

    // aktifkan home
    menus[0].classList.add(
    "active"
    );

});

}

});
