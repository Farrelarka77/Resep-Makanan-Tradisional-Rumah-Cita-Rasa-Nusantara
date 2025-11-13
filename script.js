const popup = document.getElementById("popup");
const popupBody = document.getElementById("popup-body");
const closeIcon = document.querySelector(".popup-close");
const closeBtn = document.getElementById("popup-close-btn") || document.querySelector(".close-btn");

const recipes = {
  nasgor: {
    title: "Nasi Goreng",
    image: "pictures/nasgor2.jpg",
    ingredients: [
      "200 gram nasi putih dingin (lebih baik sisa semalam)",
      "2 butir telur, kocok lepas",
      "4-6 siung bawang merah, iris tipis",
      "2 siung bawang putih, cincang halus",
      "2 sdm kecap manis",
      "1 sdm kecap asin (opsional)",
      "Garam dan merica secukupnya",
      "3 buah cabai rawit (opsional), iris",
      "50 g wortel potong dadu kecil (opsional)",
      "Minyak goreng secukupnya"
    ],
    steps: [
      "Panaskan 2 sdm minyak di wajan. Tumis bawang merah dan bawang putih hingga harum dan agak kekuningan.",
      "Jika pakai wortel atau tambahan ayam/udang, masukkan dan tumis hingga setengah matang.",
      "Dorong bumbu ke sisi wajan, tuangkan telur, orak-arik hingga setengah matang.",
      "Masukkan nasi putih, aduk sampai butiran nasi terpisah dan panas.",
      "Tambahkan kecap manis, kecap asin (jika pakai), garam, dan merica. Aduk rata hingga warna merata.",
      "Cicipi dan koreksi rasa. Angkat, sajikan panas dengan irisan timun, tomat, dan kerupuk."
    ]
  },

  rendang: {
    title: "Rendang Padang (daging sapi)",
    image: "pictures/rendang.jpg",
    ingredients: [
      "1 kg daging sapi (paha/sandung lamur), potong 3x3 cm",
      "2 liter santan kelapa kental",
      "10 siung bawang merah",
      "6 siung bawang putih",
      "5 buah cabai merah besar (sesuaikan pedas)",
      "5 buah cabai rawit (opsional)",
      "3 cm jahe, 4 cm lengkuas, 3 cm kunyit",
      "1 sdt ketumbar bubuk, 1/2 sdt pala bubuk, 1/2 sdt jintan (opsional)",
      "4 lembar daun jeruk, 3 batang serai (memarkan)",
      "2 lembar daun kunyit (sobek), garam, gula merah secukupnya, minyak untuk menumis"
    ],
    steps: [
      "Haluskan bawang merah, bawang putih, cabai, jahe, lengkuas, kunyit dan rempah kering hingga lembut.",
      "Panaskan sedikit minyak, tumis bumbu halus bersama serai dan daun jeruk hingga harum dan matang (minyak berubah warna).",
      "Masukkan potongan daging, aduk hingga daging berubah warna dan bumbu meresap, kurang lebih 5–10 menit.",
      "Tuang santan sedikit demi sedikit sambil diaduk pelan. Tambahkan garam dan gula merah secukupnya.",
      "Masak dengan api kecil hingga santan menyusut dan bumbu meresap—proses ini memakan waktu 1.5–3 jam tergantung potongan daging dan level kekeringan yang diinginkan.",
      "Aduk sesekali agar santan tidak pecah dan daging tidak gosong. Saat kuah mulai mengering dan bumbu menempel, rendang siap diangkat."
    ]
  },

  soto: {
    title: "Soto Lamongan",
    image: "pictures/soto ayam.jpg",
    ingredients: [
      "1 ekor ayam kampung (atau ayam potong), belah 2 atau potong 4",
      "2 liter air",
      "3 lembar daun salam, 2 batang serai (memarkan), 3 cm lengkuas",
      "8 siung bawang merah, 4 siung bawang putih, 3 cm kunyit, 2 cm jahe, 1 sdt ketumbar",
      "200 g kol iris, 200 g tauge, bihun secukupnya",
      "Garam, gula secukupnya, bawang goreng, jeruk nipis untuk pelengkap"
    ],
    steps: [
      "Rebus ayam dengan daun salam, serai, dan lengkuas hingga empuk (30–45 menit). Angkat ayam, suwir dagingnya.",
      "Haluskan bumbu (bawang, kunyit, jahe, ketumbar) lalu tumis dengan sedikit minyak hingga harum.",
      "Masukkan tumisan bumbu ke kuah rebusan, didihkan kembali. Tambahkan garam dan gula sesuai selera.",
      "Siapkan pelengkap: rebus bihun dan sayuran secukupnya.",
      "Sajikan mangkuk berisi bihun, sayur, ayam suwir; siram dengan kuah panas, taburi bawang goreng dan perasan jeruk nipis."
    ]
  },

  sate: {
    title: "Sate Ayam Madura",
    image: "pictures/sate.jpg",
    ingredients: [
      "700 gr daging ayam fillet, potong dadu",
      "Tusuk sate (bambu)",
      "Marinade: 3 sdm kecap manis, 2 sdm minyak, 1 sdt ketumbar bubuk, 2 siung bawang putih halus, garam",
      "Bumbu kacang: 250 gr kacang tanah goreng, 3 siung bawang putih, 3 buah cabai merah, 2 sdm gula merah, garam, air"
    ],
    steps: [
      "Campur potongan ayam dengan bahan marinade, diamkan minimal 30 menit (lebih baik semalaman di kulkas).",
      "Tusuk ayam 3–5 potong per tusuk sate.",
      "Bakar sate di atas bara atau grill, olesi kecap atau sisa marinade hingga matang dan sedikit karam.",
      "Untuk bumbu kacang: tumbuk/hancurkan kacang (atau blender kasar), tumis bawang & cabai lalu masukkan kacang, gula, garam; tambahkan air sampai mendapatkan kekentalan saus yang diinginkan.",
      "Sajikan sate dengan bumbu kacang, irisan bawang merah, dan lontong/nasi."
    ]
  },

  gado: {
    title: "Gado-Gado",
    image: "pictures/gado-gado.jpeg",
    ingredients: [
      "Sayuran rebus: kol, kacang panjang, tauge, kentang, bayam (sesuai selera)",
      "Tahu & tempe goreng, lontong atau nasi",
      "Bumbu kacang: 300 gr kacang tanah goreng, 4 siung bawang putih, 3 buah cabai merah, 2 sdm gula merah, garam, air asam jawa, santan encer"
    ],
    steps: [
      "Rebus sayuran hingga matang namun masih renyah, tiriskan.",
      "Untuk saus: haluskan kacang + bawang + cabai, lalu masak bersama gula merah, asam jawa, santan hingga mengental. Koreksi rasa (manis-gurih-asam).",
      "Susun sayuran, tahu, tempe, dan lontong di piring. Siram saus kacang di atasnya dan tambahkan kerupuk serta bawang goreng."
    ]
  },

  pempek: {
    title: "Pempek Palembang (lenjer & kapal selam)",
    image: "pictures/pmpm.jpg",
    ingredients: [
      "500 gr ikan tenggiri fillet (giling halus)",
      "300 gr tepung sagu/tapioka (sesuaikan tekstur)",
      "2 butir telur, 4 siung bawang putih halus, garam",
      "Bahan cuko: 200 gr gula merah, 5 cabe rawit, 2 siung bawang putih, 1 sdm ebi (opsional), asam jawa, garam"
    ],
    steps: [
      "Campur ikan giling dengan bawang putih, garam, dan telur; aduk rata lalu tambahkan tepung sagu sedikit demi sedikit sampai adonan bisa dibentuk (tidak terlalu keras).",
      "Bentuk lenjer atau kapal selam (isi telur rebus setengah matang untuk kapal selam).",
      "Rebus pempek di air mendidih hingga mengapung; angkat dan tiriskan.",
      "Goreng sebentar hingga sedikit kecokelatan sebelum disajikan.",
      "Cuko: rebus gula merah dengan air; masukkan bawang putih, cabai, ebi, asam jawa dan garam. Haluskan/ulek bila perlu dan masak hingga kental. Sajikan bersama pempek."
    ]
  },

  mie: {
    title: "Mie Aceh",
    image: "pictures/mie aceh.jpg",
    ingredients: [
      "250 gr mie kuning basah",
      "200 gr daging sapi/udang, iris tipis",
      "Bumbu halus: 6 bawang merah, 3 bawang putih, 3 cm kunyit, 2 cm jahe, 1 sdt ketumbar, jintan sedikit, kari bubuk secukupnya",
      "Kaldu sapi/air, tomat, daun bawang, bawang goreng"
    ],
    steps: [
      "Tumis bumbu halus hingga harum, masukkan serai dan daun jeruk bila suka.",
      "Masukkan daging/udang, tumis hingga berubah warna.",
      "Tuangkan kaldu, tambahkan garam dan kari bubuk; masak hingga daging empuk.",
      "Masukkan mie, aduk rata hingga bumbu meresap. Sajikan dengan taburan bawang goreng dan jeruk nipis."
    ]
  },

  cilok: {
    title: "Cilok (bakso aci)",
    image: "pictures/cilog.jpg",
    ingredients: [
      "250 gr tepung sagu/tapioka",
      "100 gr tepung terigu (opsional untuk tekstur)",
      "3 siung bawang putih halus, garam, merica",
      "200-250 ml air panas (sesuaikan)"
    ],
    steps: [
      "Campur tepung, bawang putih, garam, lalu tuang air panas sedikit demi sedikit sambil diuleni hingga kalis dan bisa dibentuk.",
      "Bentuk bulat kecil, rebus dalam air mendidih sampai mengapung; angkat dan tiriskan.",
      "Sajikan dengan saus kacang pedas atau kecap pedas sesuai selera."
    ]
  },

  pepes: {
    title: "Pepes Ikan",
    image: "pictures/pespes.jpg",
    ingredients: [
      "500 gr ikan (nila/tongkol/laut) bersihkan",
      "Bumbu halus: 6 bawang merah, 3 bawang putih, 3 cm kunyit, cabe merah sesuai selera",
      "Serai, daun kemangi, daun salam, garam, gula sedikit, daun pisang untuk bungkus"
    ],
    steps: [
      "Campur ikan dengan bumbu halus, tambahkan serai, daun kemangi, dan sedikit garam.",
      "Taruh di daun pisang, bungkus rapat lalu semat dengan tusuk lidi.",
      "Kukus selama 20–30 menit hingga matang. Untuk aroma bakaran, panggang sebentar di atas bara."
    ]
  },

  batagor: {
    title: "Batagor Bandung",
    image: "pictures/batagor.jpg",
    ingredients: [
      "Tahu putih (potong segitiga), kulit pangsit",
      "300 gr ikan tenggiri giling, 150 gr tepung tapioka, daun bawang cincang, garam, merica",
      "Bumbu kacang: 300 gr kacang tanah goreng, bawang putih goreng, cabai sesuai selera"
    ],
    steps: [
      "Campur ikan giling, tepung tapioka, daun bawang, garam, dan merica hingga adonan bisa dibentuk.",
      "Isi tahu dan kulit pangsit dengan adonan, susun untuk digoreng.",
      "Goreng hingga kecokelatan dan matang.",
      "Haluskan kacang dengan bawang putih, cabai; tambahkan gula dan kecap serta air sampai kekentalan saus pas. Sajikan batagor dengan saus kacang dan kecap."
    ]
  },

  rawon: {
    title: "Rawon Surabaya",
    image: "pictures/rawon.jpg",
    ingredients: [
      "500 gr daging sapi sandung lamur, potong kecil",
      "2 liter air",
      "6 siung bawang merah, 4 siung bawang putih",
      "3 butir keluak (rendam dan ambil isinya)",
      "1 cm jahe, 2 cm lengkuas, 2 batang serai",
      "Daun jeruk, garam, gula, minyak untuk menumis"
    ],
    steps: [
      "Rebus daging hingga empuk, sisihkan kaldu.",
      "Haluskan bawang, keluak, jahe, dan lengkuas; tumis hingga harum.",
      "Masukkan tumisan bumbu ke dalam kaldu, tambahkan serai dan daun jeruk.",
      "Masak kembali hingga kuah hitam kecokelatan dan daging empuk sempurna.",
      "Sajikan panas dengan nasi, tauge pendek, sambal, dan telur asin."
    ]
  },

  betutu: {
    title: "Ayam Betutu Bali",
    image: "pictures/ayam betutu.jpg",
    ingredients: [
      "1 ekor ayam kampung ukuran sedang (± 1 kg), bersihkan",
      "2 sdm air jeruk nipis",
      "1 sdt garam",
      "Daun pisang secukupnya untuk membungkus",
      "2 lembar daun salam",
      "2 batang serai, memarkan",
      "2 sdm minyak untuk menumis",
      "10 butir bawang merah",
      "6 siung bawang putih",
      "5 butir kemiri, sangrai",
      "3 cm kunyit, bakar sebentar",
      "3 cm jahe",
      "4 cm lengkuas",
      "3 cm kencur",
      "2 batang serai, ambil bagian putihnya saja",
      "10 buah cabai rawit merah (atau sesuai selera)",
      "4 buah cabai merah besar",
      "1 sdt ketumbar, sangrai",
      "½ sdt merica butiran",
      "½ sdt terasi bakar",
      "Garam dan gula merah secukupnya"
    ],
  
    steps: [
      "Lumuri ayam dengan air jeruk nipis dan garam. Diamkan 15 menit, lalu bilas hingga bersih.",
      "Tumis bumbu halus hingga harum dan matang. Masukkan daun salam dan serai, aduk rata.",
      "Oleskan sebagian bumbu ke seluruh permukaan ayam, luar dan dalam perutnya.",
      "Masukkan sisa bumbu ke dalam perut ayam, lalu bungkus ayam dengan daun pisang rapat-rapat.",
      "Kukus ayam selama 1–1½ jam hingga empuk dan bumbu meresap.",
      "Setelah dikukus, bisa juga dipanggang sebentar (±15 menit) agar aromanya lebih keluar.",
      "Sajikan Ayam Betutu selagi hangat bersama nasi putih, sambal matah, dan lalapan."
    ]
  },

konro: {
    title: "Sup Konro Makassar",
    image: "pictures/sup konro.jpg",
    ingredients: [
      "1 kg iga sapi, potong-potong",
      "2 liter air untuk merebus",
      "2 batang serai, memarkan",
      "3 lembar daun salam",
      "3 lembar daun jeruk",
      "3 cm lengkuas, memarkan",
      "2 sdm minyak untuk menumis",
      "Garam dan gula secukupnya",
      "1 sdm air asam jawa",
      "2 sdm kecap manis",
      "8 butir bawang merah",
      "5 siung bawang putih",
      "3 butir kemiri, sangrai",
      "2 cm jahe",
      "3 cm kunyit, bakar sebentar",
      "2 buah kluwek (ambil isinya)",
      "1 sdm ketumbar, sangrai",
      "1/2 sdt jintan",
      "1/2 sdt merica butiran"
    ],
  
    steps: [
      "Rebus iga sapi dengan 2 liter air hingga empuk (sekitar 1 jam). Angkat, sisihkan kaldunya.",
      "Tumis bumbu halus bersama daun salam, daun jeruk, serai, dan lengkuas hingga harum dan matang.",
      "Masukkan tumisan bumbu ke dalam rebusan iga dan tambahkan garam, gula, air asam, dan kecap manis.",
      "Masak kembali dengan api kecil ±30 menit hingga kuah mengental dan meresap ke daging.",
      "Sajikan Sup Konro selagi hangat dengan taburan bawang goreng dan irisan seledri.",
      "Untuk versi bakar (Konro Bakar), iga bisa dipanggang sebentar sambil diolesi bumbu sisa sebelum disajikan."
    ]
  },
  
gudeg: {
    title: "Gudeg Yogyakarta",
    image: "pictures/gudeg.jpg",
    ingredients: [
      "1 kg nangka muda, potong dadu kecil dan rebus 10 menit untuk menghilangkan getah",
      "6 butir telur rebus, kupas kulitnya",
      "1 liter santan kental dari 2 butir kelapa",
      "3 lembar daun salam",
      "3 cm lengkuas, memarkan",
      "5 lembar daun jati (untuk warna coklat, opsional)",
      "150 gram gula merah, sisir halus",
      "1 sdt garam",
      "3 sdm minyak untuk menumis",
      "8 butir bawang merah",
      "5 siung bawang putih",
      "5 butir kemiri, sangrai",
      "3 cm kencur",
      "2 cm jahe",
      "1 sdt ketumbar",
      "1/2 sdt merica bubuk"
    ],
  
    steps: [
      "Tumis bumbu halus hingga harum dan matang, sekitar 5–7 menit.",
      "Siapkan panci besar, lapisi dasar panci dengan daun salam dan daun jati.",
      "Masukkan nangka muda, telur rebus, lengkuas, dan bumbu tumis ke dalam panci.",
      "Tuang santan dan tambahkan gula merah serta garam. Aduk perlahan agar santan tidak pecah.",
      "Masak dengan api kecil selama 2–3 jam hingga santan meresap, air menyusut, dan warna menjadi coklat kemerahan.",
      "Aduk sesekali agar bagian bawah tidak gosong. Jika ingin lebih legit, bisa dimasak lebih lama.",
      "Sajikan Gudeg dengan sambal krecek, ayam opor, dan nasi hangat."
    ]
  },

  taliwang: {
    title: "Ayam Taliwang",
    image: "pictures/ayam taliwang.jpg",
    ingredients: [
      "1 ekor ayam kampung, potong menjadi 4 bagian",
      "3 sdm minyak goreng",
      "1 sdt garam",
      "1 sdm air asam jawa",
      "100 ml air untuk memasak",
      "8 siung bawang merah",
      "5 siung bawang putih",
      "10 cabai merah keriting (sesuaikan selera pedas)",
      "5 cabai rawit",
      "3 cm kencur",
      "1 sdt terasi bakar",
      "1 sdt gula merah",
      "1/2 sdt garam"
    ],
  
    steps: [
      "Haluskan semua bumbu hingga merata.",
      "Lumuri ayam dengan garam dan air asam jawa, diamkan 15 menit.",
      "Tumis bumbu halus hingga harum.",
      "Masukkan ayam, aduk hingga bumbu meresap. Tambahkan 100 ml air, masak hingga ayam empuk dan bumbu meresap, sekitar 20–30 menit.",
      "Bakar ayam di atas api atau panggangan hingga kecokelatan dan sedikit gosong di tepi untuk aroma smoky.",
      "Sajikan panas dengan nasi putih dan lalapan."
    ]
  },

  jimbaran : {
    title: "Ikan Bakar Jimbaran Khas Bali",
    image: "pictures/ikan jimbaran.jpg",
    ingredients: [
      "1 ekor ikan kerapu/laut segar, bersihkan dan belah bagian punggung",
      "2 sdm minyak kelapa",
      "1 sdt garam",
      "1 sdt air jeruk nipis",
      "6 siung bawang merah",
      "4 siung bawang putih",
      "5 cabai merah besar",
      "5 cabai rawit (sesuai selera pedas)",
      "2 cm jahe",
      "2 cm kunyit",
      "1 sdt terasi bakar",
      "1/2 sdt gula merah",
      "1/2 sdt garam"
    ],
  
    steps: [
      "Haluskan semua bumbu hingga merata.",
      "Lumuri ikan dengan garam dan air jeruk nipis, diamkan 10 menit.",
      "Olesi ikan dengan bumbu halus hingga merata.",
      "Panaskan panggangan atau grill, bakar ikan sambil diolesi sisa bumbu hingga matang dan kulit sedikit gosong, sekitar 15–20 menit.",
      "Sajikan panas dengan sambal matah dan nasi hangat."
    ]
  },

  cireng : {
    title: "Cireng Bandung",
    image: "pictures/cireng.jpg",
    ingredients: [
      "250 gram tepung tapioka (aci) ",
      "50 gram tepung terigu",
      "1/2 sendok teh garam",
      "1/4 sendok teh merica bubuk",
      "2 siung bawang putih yang telah di haluskan",
      "150ml air panas",
      "(opsional) 1 batang bawang daun yang telah di iris",
      "Minyak goreng",
    ],

    steps: [
      "Campur tepung tapioka, tepung terigu, garam, merica, bawang putih halus, dan bawang daun dalam mangkuk besar",
      "Tuang air panas sedikit demi sedikit secara perlahan sambil di aduk menggunakan sendok atau spatula sampai adonan khalis",
      "Ambil sedikit adonan, lalu bentuk sesuai dengan selera",
      "Panaskan minyak dalam wajan dengan api sedang. Goreng cireng hingga mengembang dan berwarna ke emasan",
      "Angkat dan tiriskan, lalu sajikan dengan saus kacang atau sambal"
    ]
  },
  
  klepon : {
    title: "Klepon",
    image: "pictures/klepon.jpg",
    ingredients: [
      "200 gram tepung ketan hijau",
      "180 ml air hangat",
      "50 gram gula merah, serut halus",
      "Kelapa parut kukus secukupnya",
      "Sejumput garam"
    ],

    steps: [
      "Campur tepung ketan dengan air hangat hingga kalis dan bisa dibentuk.",
      "Bagi adonan kecil-kecil, pipihkan, beri gula merah serut di tengah, bulatkan kembali.",
      "Rebus bola klepon dalam air mendidih hingga mengapung, angkat dan tiriskan.",
      "Gulingkan klepon dalam kelapa parut yang sudah dikukus dan diberi sedikit garam.",
      "Sajikan pada suhu ruang."
    ]
  },
  
  epe : {
    title: "Pisang Epe",
    image: "pictures/pisang epe.jpeg",
    ingredients: [
      "4 buah pisang kepok matang",
      "50 gram gula merah, serut",
      "2 sendok makan air",
      "Kelapa parut (opsional)"
    ],

    steps: [
      "Belah pisang memanjang dan tekan sedikit agar pipih.",
      "Panaskan panggangan, bakar pisang hingga harum dan permukaan kecokelatan.",
      "Masak gula merah dengan sedikit air hingga larut menjadi saus kental.",
      "Sirami pisang dengan saus gula merah, tambahkan kelapa parut jika suka.",
      "Sajikan hangat."
    ]
  },

  serabi : {
    title: "Serabi Solo",
    image: "pictures/serabii solo.jpg",
    ingredients: [
      "200 gram tepung beras",
      "300 ml santan kental",
      "50 gram gula pasir",
      "Sejumput garam",
      "Kinca gula merah secukupnya (saus)"
    ],

    steps: [
      "Campur tepung beras, gula, dan garam, tuang santan sedikit demi sedikit sambil diaduk hingga rata.",
      "Panaskan cetakan serabi di atas api kecil, oles sedikit minyak.",
      "Tuang adonan, masak hingga permukaan berlubang-lubang dan matang.",
      "Angkat, siram dengan kinca gula merah.",
      "Sajikan hangat."
    ]
  },

  tongseng : {
    title: "Tongseng Kambing",
    image: "pictures/tongseng kambing.jpg",
    ingredients: [
      "500 gram buntut sapi, potong-potong",
            "2 liter air",
            "2 batang serai, memarkan",
            "3 lembar daun salam",
            "200 ml santan",
            "100 gram kol, iris",
            "3 sendok makan kecap manis",
            "Minyak goreng secukupnya",
            "Bumbu halus: 8 siung bawang merah, 4 siung bawang putih, 2 cm jahe, 2 cm kunyit, 2 buah cabai merah besar",
            "Garam dan gula secukupnya"
    ],

    steps: [
      "Rebus buntut sapi dengan air, serai, dan daun salam hingga empuk, sekitar 1-1,5 jam.",
      "Panaskan minyak, tumis bumbu halus hingga harum.",
      "Masukkan bumbu tumis ke dalam rebusan buntut, aduk rata.",
      "Tambahkan santan, kecap manis, garam, dan gula. Masak dengan api kecil hingga kuah meresap.",
      "Masukkan kol, masak sebentar hingga layu.",
      "Sajikan hangat dengan nasi putih."
    ]
  }

};

function renderRecipe(recipeData) {
  const html = `
    <h2>${recipeData.title}</h2>
    ${recipeData.image ? `<img src="${recipeData.image}" alt="${recipeData.title}">` : ""}
    <h3>Bahan-bahan:</h3>
    <ul>${recipeData.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    <h3>Langkah-langkah:</h3>
    <ol>${recipeData.steps.map(s => `<li>${s}</li>`).join('')}</ol>
  `;
  popupBody.innerHTML = html;
}

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const key = img.dataset.name;
    const recipe = recipes[key];
    if (recipe) {
      renderRecipe(recipe);
    } else {
      popupBody.innerHTML = `<p>Resep untuk <strong>${img.alt}</strong> belum tersedia.</p>`;
    }
    popup.classList.remove("hidden");
    popup.setAttribute('aria-hidden','false');

    popup.querySelector('.popup-content').scrollTop = 0;
  });
});

if (closeIcon) closeIcon.addEventListener("click", () => {
  popup.classList.add("hidden");
  popup.setAttribute('aria-hidden','true');
});
if (closeBtn) closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  popup.setAttribute('aria-hidden','true');
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
    popup.setAttribute('aria-hidden','true');
  }
});

document.getElementById("searchInput").addEventListener("input", function(){
  const q = this.value.trim().toLowerCase();
  document.querySelectorAll(".gallery img").forEach(img => {
    const text = (img.alt || img.dataset.name || "").toLowerCase();
    img.style.display = (text.includes(q) || q === "") ? "block" : "none";
  });
});
