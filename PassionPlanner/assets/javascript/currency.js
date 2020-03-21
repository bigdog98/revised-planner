const euro = getElementById('euro');
const dollar = getElementById('dollar');
const pound = getElementById('pound');
const ausdollar = getElementById('ausdollar');

euro.addEventListener('input', eurotodollartopoundtoausdollar);
function eurotodollartopoundtoausdollar() {
const eu = parseInt (euro.value);
const dl = eu*1.07;
const pd = eu*1.08;
const aud = eu*1.86;
dollar.value = dl;
pound.value = pd;
ausdollar.value = aud;
}

dollar.addEventListener('input', dollartoeurotopoundtoausdollar);
function dollartoeurotopoundtoausdollar() {
const dl = parseFloat(dollar.value);
const eu = dl*0.93;
const pd = dl*0.86;
const aud = dl*1.53;
euro.value = eu;
pound.value = pd;
ausdollar.value = aud;
}

pound.addEventListener('input', poundtoeurotodollartoausdollar);
function poundtoeurotodollartoausdollar() {
const pd = parseFloat(pound.value);
const eu = pd*1.08;
const dl = pd*1.16;
const aud = pd*2.01;
euro.value = eu;
dollar.value = dl;
ausdollar.value = aud;
}

ausdollar.addEventListener('input', ausdollartoeurotodollartopound);
function ausdollartoeurotodollartopound() {
const aud = parseFloat(ausdollar.value);
const eu = aud*0.54;
const dl = aud*0.58;
const pd = aud*0.48;
euro.value = eu;
dollar.value = dl;
pound.value = pd;
}

function main() {
    eurotodollartopoundtoausdollar();
    dollartoeurotopoundtoausdollar();
    poundtoeurotodollartoausdollar();
    ausdollartoeurotodollartopound();
}
main();