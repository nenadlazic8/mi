
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);

let slika = document.getElementById('slika');
let recText = document.getElementById('rec');

let rec = [
        'Volim te',
        'Volim te jer si posebna',
        'Volim te jer si ti moj pipi',
        'Volim te jer si ti moj smrda',
        'Volim te i kad nismo u karantinu 14 dana',
        'Volim te i kad ti ucis za ispit samo 2h i pokidas',
        'Volim te i kad ne dobijemo pare na tiketu',
        'Volim te jer otputujemo tako ne planirano negde (BALKAN BET SPONSORED)',
        'Volim te jer jedemo skoljke zajedno',
        'Volim te jer volim da spavamo zajedno',
        'Volim te jer si ti moja guda',
        'Volim te gudalo',
        'Uzivaj u danu pipii',
        'Volim te cak i kad se posvadjamo pa ceo put do kuce ne pricamo',
        'Volim te i kad odlucis da treniras pa batalis posla 2 dana :p',
        'Volim te jer volim sa tobom da sedim na terasi po ceo dan',
        'Volim te i kad zaspis 2min od pocetka filma',
        'Volim te jer mozes da zaspis i na drljaci :D',
        'Volim te jer najjace farbas jaja',
        'Volim te najvise na celom svetu i planeti',
        'Volim te zauvek',
        'Volim te jer si naucnica',
        'Volim te jer si najjaci farmaceut na svetu',
        'Volim te jer volim da te volim, sta ti nije jasno?'
];

let slike = [];

        console.log(slike);
        for(i = 1; i < 367; i++){
                slike.push(i);
        }

        console.log(slike);

for (i = 1; i < 367; i++) {
        if (day == slike[i]) {
                slika.src = 'img/a-(' + slike[i] + ').jpg';
                recText.innerText = rec[Math.floor(Math.random() * 24)]
        }
}

