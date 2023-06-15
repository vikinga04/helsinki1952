/*Olvassa be a helsinkiAdat.js állományban lévő adatokat és tárolja el egy olyan
adatszerkezetben, amely a további feladatok megoldására alkalmas! A fájlban 
legfeljebb 200 sor lehet.*/
let helsinkiAdat = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];


let adatok = [];

for (let i = 0; i < helsinkiAdat.length; i++) {
    let sor = helsinkiAdat[i];
    let elemek = sor.split(" ");

    let helyezes = parseInt(elemek[0]);
    let sportolokSzama = parseInt(elemek[1]);
    let sportag = elemek[2];
    let versenyszam = elemek.slice(3).join(" ");

    let adat = {
        helyezes: helyezes,
        sportolokSzama: sportolokSzama,
        sportag: sportag,
        versenyszam: versenyszam
    };

    adatok.push(adat);
}



/*Határozza meg és írja ki a képernyőre a minta szerint, hogy hány pontszerző helyezést 
értek el a magyar olimpikonok*/
let pontszerzoHelyezesek = 0;

for (let i = 0; i < adatok.length; i++) {
    let helyezes = adatok[i].helyezes;
    if (helyezes >= 1 && helyezes <= 6) {
        pontszerzoHelyezesek++;
    }
}

console.log("A magyar olimpikonok összesen " + pontszerzoHelyezesek + " pontszerző helyezést értek el.");

/*Készítsen statisztikát a megszerzett érmek számáról, majd összesítse az érmek számát 
a minta szerint*/
let ermek = {
    arany: 0,
    ezust: 0,
    bronz: 0
};

for (let i = 0; i < adatok.length; i++) {
    let helyezes = adatok[i].helyezes;
    if (helyezes === 1) {
        ermek.arany++;
    } else if (helyezes === 2) {
        ermek.ezust++;
    } else if (helyezes === 3) {
        ermek.bronz++;
    }
}

console.log("Aranyérmek száma: " + ermek.arany);
console.log("Ezüstérmek száma: " + ermek.ezust);
console.log("Bronzérmek száma: " + ermek.bronz);

let osszesErme = ermek.arany + ermek.ezust + ermek.bronz;
console.log("Összes érem száma: " + osszesErme);



/*Az olimpián az országokat az elért eredményeik alapján rangsorolják.Az 1−6.
helyezéseket olimpiai pontokra váltják, és ezt összegzik.Határozza meg és írja ki a 
minta szerint az elért olimpiai pontok összegét az alábbi táblázat segítségével!*/
let olimpiaiPontok = 0;

for (let i = 0; i < adatok.length; i++) {
    let helyezes = adatok[i].helyezes;
    if (helyezes == 1) {
        olimpiaiPontok += 7;
    } else if (helyezes == 2) {
        olimpiaiPontok += 5;
    } else if (helyezes == 3) {
        olimpiaiPontok += 4;
    } else if (helyezes == 4) {
        olimpiaiPontok += 3;
    } else if (helyezes == 5) {
        olimpiaiPontok += 2;
    } else if (helyezes == 6) {
        olimpiaiPontok += 1;
    }
}
console.log("Az elért olimpiai pontok összege: " + olimpiaiPontok);

/*Az úszás és a torna sportágakban világversenyeken mindig jól szerepeltek a magyar
sportolók.Határozza meg és írja ki a minta szerint, hogy az 1952 - es nyári olimpián 
melyik sportágban szereztek több érmet a sportolók! Ha az érmek száma egyenlő,
    akkor az „Egyenlő volt az érmek száma” felirat jelenjen meg*/
let uszasErmek = 0;
let tornaErmek = 0;

for (let i = 0; i < adatok.length; i++) {
    let sportag = adatok[i].sportag;
    let helyezes = adatok[i].helyezes;

    if (sportag == 'uszas') {
        uszasErmek += helyezes <= 3 ? 1 : 0;
    } else if (sportag == 'torna') {
        tornaErmek += helyezes <= 3 ? 1 : 0;
    }
}

if (uszasErmek > tornaErmek) {
    console.log("Az uszás sportágban szereztek több érmet a sportolók.");
} else if (tornaErmek > uszasErmek) {
    console.log("A torna sportágban szereztek több érmet a sportolók.");
} else {
    console.log("Egyenlő volt az érmek száma.");
}

