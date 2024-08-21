//------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------Menu----------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//
document.querySelector(".a_tab").addEventListener('click', display_First);

function display_First() {
    document.querySelector(".a_tab").classList.toggle('TAB');
    document.querySelector(".first-tab").classList.toggle('clicked');
}

document.querySelector(".b_tab").addEventListener('click', display_Second);

function display_Second() {
    document.querySelector(".b_tab").classList.toggle('TAB');
    document.querySelector(".second-tab").classList.toggle('clicked');
}

document.querySelector(".c_tab").addEventListener('click', display_Third);

function display_Third() {
    document.querySelector(".c_tab").classList.toggle('TAB');
    document.querySelector(".third-tab").classList.toggle('clicked');
}

document.querySelector(".d_tab").addEventListener('click', display_Fourth);

function display_Fourth() {
    document.querySelector(".d_tab").classList.toggle('TAB');
    document.querySelector(".fourth-tab").classList.toggle('clicked');
}

let o = 0;

//------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------Decleration------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//


//---------------------------- Products 01 ------------------------------//
const margarine_amount = document.querySelector(".margarine");
const margarine_pro = document.querySelector(".stoffe_01_01");
const margarine_price = document.querySelector(".priceValue_01_01");

const öl_amount = document.querySelector(".öl");
const öl_pro = document.querySelector(".stoffe_01_01_01");
const öl_price = document.querySelector(".priceValue_01_01_01");

const zucker_amount = document.querySelector(".zucker");
const zucker_pro = document.querySelector(".stoffe_01_02");
const zucker_price = document.querySelector(".priceValue_01_02");

const puderzucker_amount = document.querySelector(".puderzucker");
const puderzucker_pro = document.querySelector(".stoffe_01_02_01");
const puderzucker_price = document.querySelector(".priceValue_01_02_01");

const jodsalz_amount = document.querySelector(".jodsalz");
const jodsalz_pro = document.querySelector(".stoffe_01_03");
const jodsalz_price = document.querySelector(".priceValue_01_03");

const alpensalz_amount = document.querySelector(".alpensalz");
const alpensalz_pro = document.querySelector(".stoffe_01_03_01");
const alpensalz_price = document.querySelector(".priceValue_01_03_01");

const burger01_amount = document.querySelector(".burger01");
const burger01_pro = document.querySelector(".stoffe_01_04");
const burger01_price = document.querySelector(".priceValue_01_04");

const reis01_amount = document.querySelector(".reis01");
const reis01_pro = document.querySelector(".stoffe_01_05");
const reis01_price = document.querySelector(".priceValue_01_05");

const reis02_amount = document.querySelector(".reis02");
const reis02_pro = document.querySelector(".stoffe_01_05_01");
const reis02_price = document.querySelector(".priceValue_01_05_01");

const reis03_amount = document.querySelector(".reis03");
const reis03_pro = document.querySelector(".stoffe_01_05_02");
const reis03_price = document.querySelector(".priceValue_01_05_02");

const reis04_amount = document.querySelector(".reis04");
const reis04_pro = document.querySelector(".stoffe_01_05_03");
const reis04_price = document.querySelector(".priceValue_01_05_03");

const eier_amount = document.querySelector(".eier");
const eier_pro = document.querySelector(".stoffe_01_06");
const eier_price = document.querySelector(".priceValue_01_06");

const martadella01_amount = document.querySelector(".martadella01");
const martadella01_pro = document.querySelector(".stoffe_01_07");
const martadella01_price = document.querySelector(".priceValue_01_07");

const martadella02_amount = document.querySelector(".martadella02");
const martadella02_pro = document.querySelector(".stoffe_01_07_01");
const martadella02_price = document.querySelector(".priceValue_01_07_01");

const käse01_amount = document.querySelector(".käse01");
const käse01_pro = document.querySelector(".stoffe_01_08");
const käse01_price = document.querySelector(".priceValue_01_08");

const weißkäse_amount = document.querySelector(".weißkäse");
const weißkäse_pro = document.querySelector(".stoffe_01_08_15");
const weißkäse_price = document.querySelector(".priceValue_01_08_15");

const johgurt01_amount = document.querySelector(".johgurt01");
const johgurt01_pro = document.querySelector(".stoffe_01_09");
const johgurt01_price = document.querySelector(".priceValue_01_09");

const johgurt02_amount = document.querySelector(".johgurt02");
const johgurt02_pro = document.querySelector(".stoffe_01_09_01");
const johgurt02_price = document.querySelector(".priceValue_01_09_01");

const spaghetti_amount = document.querySelector(".spaghetti");
const spaghetti_pro = document.querySelector(".stoffe_01_10");
const spaghetti_price = document.querySelector(".priceValue_01_10");

const schnitzel01_amount = document.querySelector(".schnitzel01");
const schnitzel01_pro = document.querySelector(".stoffe_01_11");
const schnitzel01_price = document.querySelector(".priceValue_01_11");

const schnitzel02_amount = document.querySelector(".schnitzel01");
const schnitzel02_pro = document.querySelector(".stoffe_01_11_01");
const schnitzel02_price = document.querySelector(".priceValue_01_11_01");

const schnitzel03_amount = document.querySelector(".schnitzel01");
const schnitzel03_pro = document.querySelector(".stoffe_01_11_02");
const schnitzel03_price = document.querySelector(".priceValue_01_11_02");

const nuggets01_amount = document.querySelector(".nuggets01");
const nuggets01_pro = document.querySelector(".stoffe_01_11_03");
const nuggets01_price = document.querySelector(".priceValue_01_11_03");

const nuggets02_amount = document.querySelector(".nuggets02");
const nuggets02_pro = document.querySelector(".stoffe_01_11_04");
const nuggets02_price = document.querySelector(".priceValue_01_11_04");

const nuggets03_amount = document.querySelector(".nuggets03");
const nuggets03_pro = document.querySelector(".stoffe_01_11_05");
const nuggets03_price = document.querySelector(".priceValue_01_11_05");

const sardinen_amount = document.querySelector(".sardinen");
const sardinen_pro = document.querySelector(".stoffe_01_12");
const sardinen_price = document.querySelector(".priceValue_01_12");

const thunfisch_amount = document.querySelector(".thunfisch");
const thunfisch_pro = document.querySelector(".stoffe_01_12_01");
const thunfisch_price = document.querySelector(".priceValue_01_12_01");




const ketchup_amount = document.querySelector(".ketchup");
const ketchup_pro = document.querySelector(".stoffe_01_14");
const ketchup_price = document.querySelector(".priceValue_01_14");

const mayonnaise_amount = document.querySelector(".mayonnaise");
const mayonnaise_pro = document.querySelector(".stoffe_01_15");
const mayonnaise_price = document.querySelector(".priceValue_01_15");

const zitronen_amount = document.querySelector(".zitronen");
const zitronen_pro = document.querySelector(".stoffe_01_16");
const zitronen_price = document.querySelector(".priceValue_01_16");

const toast01_amount = document.querySelector(".toast01");
const toast01_pro = document.querySelector(".stoffe_01_17");
const toast01_price = document.querySelector(".priceValue_01_17");

const hotdog_amount = document.querySelector(".hotdog");
const hotdog_pro = document.querySelector(".stoffe_01_17_01");
const hotdog_price = document.querySelector(".priceValue_01_17_01");

const schnitten_amount = document.querySelector(".schnitten");
const schnitten_pro = document.querySelector(".stoffe_01_17_02");
const schnitten_price = document.querySelector(".priceValue_01_17_02");

const mais_amount = document.querySelector(".mais");
const mais_pro = document.querySelector(".stoffe_01_18");
const mais_price = document.querySelector(".priceValue_01_18");

const erbsen_amount = document.querySelector(".erbsen");
const erbsen_pro = document.querySelector(".stoffe_01_18_01");
const erbsen_price = document.querySelector(".priceValue_01_18_01");

const kichererbsen_amount = document.querySelector(".kichererbsen");
const kichererbsen_pro = document.querySelector(".stoffe_01_18_02");
const kichererbsen_price = document.querySelector(".priceValue_01_18_02");

const kidneybohnen_amount = document.querySelector(".kidneybohnen");
const kidneybohnen_pro = document.querySelector(".stoffe_01_18_03");
const kidneybohnen_price = document.querySelector(".priceValue_01_18_03");

const champignons_amount = document.querySelector(".champignons");
const champignons_pro = document.querySelector(".stoffe_01_18_04");
const champignons_price = document.querySelector(".priceValue_01_18_04");

const olive_amount = document.querySelector(".olive");
const olive_pro = document.querySelector(".stoffe_01_18_05");
const olive_price = document.querySelector(".priceValue_01_18_05");

const olivenöl_amount = document.querySelector(".olivenöl");
const olivenöl_pro = document.querySelector(".stoffe_01_19");
const olivenöl_price = document.querySelector(".priceValue_01_19");

const nuggets04_amount = document.querySelector(".nuggets04");
const nuggets04_pro = document.querySelector(".stoffe_01_20");
const nuggets04_price = document.querySelector(".priceValue_01_20");

const croissants_amount = document.querySelector(".croissants");
const croissants_pro = document.querySelector(".stoffe_01_21");
const croissants_price = document.querySelector(".priceValue_01_21");

const burger_amount = document.querySelector(".burger");
const burger_pro = document.querySelector(".stoffe_01_22");
const burger_price = document.querySelector(".priceValue_01_22");

const baguette_amount = document.querySelector(".baguette");
const baguette_pro = document.querySelector(".stoffe_01_23");
const baguette_price = document.querySelector(".priceValue_01_23");

const pommes01_amount = document.querySelector(".pommes02");
const pommes01_pro = document.querySelector(".stoffe_01_24");
const pommes01_price = document.querySelector(".priceValue_01_24");

const pommes02_amount = document.querySelector(".pommes02");
const pommes02_pro = document.querySelector(".stoffe_01_25");
const pommes02_price = document.querySelector(".priceValue_01_25");

//---------------------------- Products 02 ------------------------------//
//---------------------------- Products 02 ------------------------------//
//---------------------------- Products 02 ------------------------------//
const apfelecke_amount = document.querySelector(".apfelecke");
const apfelecke_pro = document.querySelector(".stoffe_02_01");
const apfelecke_price = document.querySelector(".priceValue_02_01");

const laugenecke_amount = document.querySelector(".laugenecke");
const laugenecke_pro = document.querySelector(".stoffe_02_02");
const laugenecke_price = document.querySelector(".priceValue_02_02");

const buttercroissant_amount = document.querySelector(".buttercroissant");
const buttercroissant_pro = document.querySelector(".stoffe_02_03");
const buttercroissant_price = document.querySelector(".priceValue_02_03");

const spinat_amount = document.querySelector(".spinat");
const spinat_pro = document.querySelector(".stoffe_02_04");
const spinat_price = document.querySelector(".priceValue_02_04");

const ciabatta_amount = document.querySelector(".ciabatta");
const ciabatta_pro = document.querySelector(".stoffe_02_05");
const ciabatta_price = document.querySelector(".priceValue_02_05");

const eiweiß_amount = document.querySelector(".eiweiß");
const eiweiß_pro = document.querySelector(".stoffe_02_06");
const eiweiß_price = document.querySelector(".priceValue_02_06");

const franz_amount = document.querySelector(".franz");
const franz_pro = document.querySelector(".stoffe_02_07");
const franz_price = document.querySelector(".priceValue_02_07");

const laugen_amount = document.querySelector(".laugen");
const laugen_pro = document.querySelector(".stoffe_02_08");
const laugen_price = document.querySelector(".priceValue_02_08");

const laugenzopf_amount = document.querySelector(".laugenzopf");
const laugenzopf_pro = document.querySelector(".stoffe_02_09");
const laugenzopf_price = document.querySelector(".priceValue_02_09");

const meister_amount = document.querySelector(".meister");
const meister_pro = document.querySelector(".stoffe_02_10");
const meister_price = document.querySelector(".priceValue_02_10");

const nougat_amount = document.querySelector(".nougat");
const nougat_pro = document.querySelector(".stoffe_02_11");
const nougat_price = document.querySelector(".priceValue_02_11");

const nuss_amount = document.querySelector(".nuss");
const nuss_pro = document.querySelector(".stoffe_02_12");
const nuss_price = document.querySelector(".priceValue_02_12");

const pmarg_amount = document.querySelector(".pmarg");
const pmarg_pro = document.querySelector(".stoffe_02_13");
const pmarg_price = document.querySelector(".priceValue_02_13");

const rosenbrötchen_amount = document.querySelector(".rosenbrötchen");
const rosenbrötchen_pro = document.querySelector(".stoffe_02_14");
const rosenbrötchen_price = document.querySelector(".priceValue_02_14");

const sesamring_amount = document.querySelector(".sesamring");
const sesamring_pro = document.querySelector(".stoffe_02_15");
const sesamring_price = document.querySelector(".priceValue_02_15");

const sonnenkrüstchen_amount = document.querySelector(".sonnenkrüstchen");
const sonnenkrüstchen_pro = document.querySelector(".stoffe_02_16");
const sonnenkrüstchen_price = document.querySelector(".priceValue_02_16");

const vanillestange_amount = document.querySelector(".vanillestange");
const vanillestange_pro = document.querySelector(".stoffe_02_17");
const vanillestange_price = document.querySelector(".priceValue_02_17");

const walnussbrötchen_amount = document.querySelector(".walnussbrötchen");
const walnussbrötchen_pro = document.querySelector(".stoffe_02_18");
const walnussbrötchen_price = document.querySelector(".priceValue_02_18");

const weizenbrötchen_amount = document.querySelector(".weizenbrötchen");
const weizenbrötchen_pro = document.querySelector(".stoffe_02_19");
const weizenbrötchen_price = document.querySelector(".priceValue_02_19");

const weltmeister_amount = document.querySelector(".weltmeister");
const weltmeister_pro = document.querySelector(".stoffe_02_20");
const weltmeister_price = document.querySelector(".priceValue_02_20");

const donutB_amount = document.querySelector(".donutB");
const donutB_pro = document.querySelector(".stoffe_02_21");
const donutB_price = document.querySelector(".priceValue_02_21");

//---------------------------- Products 03 ------------------------------//
//---------------------------- Products 03 ------------------------------//
//---------------------------- Products 03 ------------------------------//
const pizza01_amount = document.querySelector(".pizza01");
const pizza01_pro = document.querySelector(".stoffe_03_01");
const pizza01_price = document.querySelector(".priceValue_03_01");

const pizza02_amount = document.querySelector(".pizza02");
const pizza02_pro = document.querySelector(".stoffe_03_02");
const pizza02_price = document.querySelector(".priceValue_03_02");

const pizza03_amount = document.querySelector(".pizza03");
const pizza03_pro = document.querySelector(".stoffe_03_03");
const pizza03_price = document.querySelector(".priceValue_03_03");

const pizza04_amount = document.querySelector(".pizza04");
const pizza04_pro = document.querySelector(".stoffe_03_04");
const pizza04_price = document.querySelector(".priceValue_03_04");

//---------------------------- Products 04 ------------------------------//
//---------------------------- Products 04 ------------------------------//
//---------------------------- Products 04 ------------------------------//
const cookies01_amount = document.querySelector(".cookies01");
const cookies01_pro = document.querySelector(".stoffe_04_01");
const cookies01_price = document.querySelector(".priceValue_04_01");

const sultaninen_amount = document.querySelector(".sultaninen");
const sultaninen_pro = document.querySelector(".stoffe_04_02");
const sultaninen_price = document.querySelector(".priceValue_04_02");

//---------------------------- Products 05 ------------------------------//


//---------------------------- Products 06 ------------------------------//


//------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------Prices---------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//

//---------------------------- Products 01 ------------------------------//
//-----------------------------------------------------------------------//
let margarine = 1.69;
const margarine_ID = "margarine";
margarine_price.innerText = margarine + "€";

let öl = 2.69;
const öl_ID = "öl";
öl_price.innerText = öl + "€";

let zucker = 1.49;
const zucker_ID = "zucker";
zucker_price.innerText = zucker + "€";

let puderzucker = 0.49;
const puderzucker_ID = "puderzucker";
puderzucker_price.innerText = puderzucker + "€";

let jodsalz = 0.29;
const jodsalz_ID = "jodsalz";
jodsalz_price.innerText = jodsalz + "€";

let alpensalz = 0.29;
const alpensalz_ID = "alpensalz";
alpensalz_price.innerText = alpensalz + "€";

let burger01 = 2.49;
const burger01_ID = "burger01";
burger01_price.innerText = burger01 + "€";

let reis01 = 1.49;
const reis01_ID = "reis01";
reis01_price.innerText = reis01 + "€";

let reis02 = 2.99;
const reis02_ID = "reis02";
reis02_price.innerText = reis02 + "€";

let reis03 = 2.49;
const reis03_ID = "reis03";
reis03_price.innerText = reis03 + "€";

let reis04 = 2.99;
const reis04_ID = "reis04";
reis04_price.innerText = reis04 + "€";

let eier = 1.99;
const eier_ID = "eier";
eier_price.innerText = eier + "€";

let martadella01 = 1.29;
const martadella01_ID = "martadella01";
martadella01_price.innerText = martadella01 + "€";

let martadella02 = 2.59;
const martadella02_ID = "martadella02";
martadella02_price.innerText = martadella02 + "€";

let käse01 = 1.00;
const käse01_ID = "käse01";
käse01_price.innerText = käse01 + "€";

let weißkäse = 8.49;
const weißkäse_ID = "weißkäse";
weißkäse_price.innerText = weißkäse + "€";

let johgurt01 = 1.59;
const johgurt01_ID = "johgurt01";
johgurt01_price.innerText = johgurt01 + "€";

let johgurt02 = 0.85;
const johgurt02_ID = "johgurt02";
johgurt02_price.innerText = johgurt02 + "€";

let spaghetti = 0.99;
const spaghetti_ID = "spaghetti";
spaghetti_price.innerText = spaghetti + "€";

let schnitzel01 = 3.99;
const schnitzel01_ID = "schnitzel01";
schnitzel01_price.innerText = schnitzel01 + "€";

let schnitzel02 = 5.99;
const schnitzel02_ID = "schnitzel01";
schnitzel02_price.innerText = schnitzel02 + "€";

let schnitzel03 = 3.99;
const schnitzel03_ID = "schnitzel03";
schnitzel03_price.innerText = schnitzel03 + "€";

let nuggets01 = 3.99;
const nuggets01_ID = "nuggets01";
nuggets01_price.innerText = nuggets01 + "€";

let nuggets02 = 3.29;
const nuggets02_ID = "nuggets02";
nuggets02_price.innerText = nuggets02 + "€";

let nuggets03 = 2.69;
const nuggets03_ID = "nuggets03";
nuggets03_price.innerText = nuggets03 + "€";

let sardinen = 0.99;
const sardinen_ID = "sardinen";
sardinen_price.innerText = sardinen + "€";

let thunfisch = 1.49;
const thunfisch_ID = "thunfisch";
thunfisch_price.innerText = thunfisch + "€";

let ketchup = 2.99;
const ketchup_ID = "ketchup";
ketchup_price.innerText = ketchup + "€";

let mayonnaise = 2.99;
const mayonnaise_ID = "mayonnaise";
mayonnaise_price.innerText = mayonnaise + "€";

let zitronen = 2.99;
const zitronen_ID = "zitronen";
zitronen_price.innerText = zitronen + "€";

let toast01 = 1.19;
const toast01_ID = "toast01";
toast01_price.innerText = toast01 + "€";

let hotdog = 0.99;
const hotdog_ID = "hotdog";
hotdog_price.innerText = hotdog + "€";

let schnitten = 0.99;
const schnitten_ID = "schnitten";
schnitten_price.innerText = schnitten + "€";

let mais = 0.99;
const mais_ID = "mais";
mais_price.innerText = mais + "€";

let erbsen = 0.89;
const erbsen_ID = "erbsen";
erbsen_price.innerText = erbsen + "€";

let kichererbsen = 0.69;
const kichererbsen_ID = "kichererbsen";
kichererbsen_price.innerText = kichererbsen + "€";

let kidneybohnen = 0.79;
const kidneybohnen_ID = "kidneybohnen";
kidneybohnen_price.innerText = kidneybohnen + "€";

let champignons = 0.79;
const champignons_ID = "champignons";
champignons_price.innerText = champignons + "€";

let olive = 0.99;
const olive_ID = "olive";
olive_price.innerText = olive + "€";

let olivenöl = 5.89;
const olivenöl_ID = "olivenöl";
olivenöl_price.innerText = olivenöl + "€";

let nuggets04 = 1.99;
const nuggets04_ID = "nuggets04";
nuggets04_price.innerText = nuggets04 + "€";

let croissants = 1.49;
const croissants_ID = "croissants";
croissants_price.innerText = croissants + "€";

let burger = 0.99;
const burger_ID = "burger";
burger_price.innerText = burger + "€";

let baguette = 0.99;
const baguette_ID = "baguette";
baguette_price.innerText = baguette + "€";

let pommes01 = 1.99;
const pommes01_ID = "pommes01";
pommes01_price.innerText = pommes01 + "€";

let pommes02 = 3.49;
const pommes02_ID = "pommes02";
pommes02_price.innerText = pommes02 + "€";

//---------------------------- Products 02 ------------------------------//
//-----------------------------------------------------------------------//
let apfelecke = 0.79;
const apfelecke_ID = "apfelecke";
apfelecke_price.innerText = apfelecke + "€";

let laugenecke = 0.79;
const laugenecke_ID = "laugenecke";
laugenecke_price.innerText = laugenecke + "€";

let buttercroissant = 0.55;
const buttercroissant_ID = "buttercroissant";
buttercroissant_price.innerText = buttercroissant + "€";

let spinat = 0.69;
const spinat_ID = "spinat";
spinat_price.innerText = spinat + "€";

let ciabatta = 0.79;
const ciabatta_ID = "ciabatta";
ciabatta_price.innerText = ciabatta + "€";

let eiweiß = 0.59;
const eiweiß_ID = "eiweiß";
eiweiß_price.innerText = eiweiß + "€";

let franz = 0.75;
const franz_ID = "franz";
franz_price.innerText = franz + "€";

let laugen = 0.35;
const laugen_ID = "laugen";
laugen_price.innerText = laugen + "€";

let laugenzopf = 0.59;
const laugenzopf_ID = "laugenzopf";
laugenzopf_price.innerText = laugenzopf + "€";

let meister = 0.85;
const meister_ID = "meister";
meister_price.innerText = meister + "€";

let nougat = 0.35;
const nougat_ID = "nougat";
nougat_price.innerText = nougat + "€";

let nuss = 0.75;
const nuss_ID = "nuss";
nuss_price.innerText = nuss + "€";

let pmarg = 0.85;
const pmarg_ID = "pmarg";
pmarg_price.innerText = pmarg + "€";

let rosenbrötchen = 0.35;
const rosenbrötchen_ID = "rosenbrötchen";
rosenbrötchen_price.innerText = rosenbrötchen + "€";

let sesamring = 0.59;
const sesamring_ID = "sesamring";
sesamring_price.innerText = sesamring + "€";

let sonnenkrüstchen = 0.45;
const sonnenkrüstchen_ID = "sonnenkrüstchen";
sonnenkrüstchen_price.innerText = sonnenkrüstchen + "€";

let vanillestange = 0.75;
const vanillestange_ID = "vanillestange";
vanillestange_price.innerText = vanillestange + "€";

let walnussbrötchen = 0.55;
const walnussbrötchen_ID = "walnussbrötchen";
walnussbrötchen_price.innerText = walnussbrötchen + "€";

let weizenbrötchen = 0.17;
const weizenbrötchen_ID = "weizenbrötchen";
weizenbrötchen_price.innerText = weizenbrötchen + "€";

let weltmeister = 0.39;
const weltmeister_ID = "weltmeister";
weltmeister_price.innerText = weltmeister + "€";

let donutB = 0.99;
const donutB_ID = "donutB";
donutB_price.innerText = donutB + "€";

//---------------------------- Products 03 ------------------------------//
//-----------------------------------------------------------------------//
let pizza01 = 3.69;
const pizza01_ID = "pizza01";
pizza01_price.innerText = pizza01 + "€";

let pizza02 = 3.29;
const pizza02_ID = "pizza02";
pizza02_price.innerText = pizza02 + "€";

let pizza03 = 2.69;
const pizza03_ID = "pizza03";
pizza03_price.innerText = pizza03 + "€";

let pizza04 = 3.29;
const pizza04_ID = "pizza04";
pizza04_price.innerText = pizza04 + "€";
//---------------------------- Products 04 ------------------------------//
//-----------------------------------------------------------------------//
let cookies01 = 1.19;
const cookies01_ID = "cookies01";
cookies01_price.innerText = cookies01 + "€";

let sultaninen = 0.99;
const sultaninen_ID = "sultaninen";
sultaninen_price.innerText = sultaninen + "€";

//---------------------------- Products 05 ------------------------------//
//-----------------------------------------------------------------------//


//---------------------------- Products 06 ------------------------------//
//-----------------------------------------------------------------------//


//------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------Activation-------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//

margarine_pro.onclick = function() {
    add_Item(margarine_amount, margarine_pro, margarine, margarine_ID);
}
margarine_price.onclick = function() {
    remove_Item(margarine_amount, margarine_pro, margarine, margarine_ID);
}

öl_pro.onclick = function() {
    add_Item(öl_amount, öl_pro, öl, öl_ID);
}
öl_price.onclick = function() {
    remove_Item(öl_amount, öl_pro, öl, öl_ID);
}

zucker_pro.onclick = function() {
    add_Item(zucker_amount, zucker_pro, zucker, zucker_ID);
}
zucker_price.onclick = function() {
    remove_Item(zucker_amount, zucker_pro, zucker, zucker_ID);
}

puderzucker_pro.onclick = function() {
    add_Item(puderzucker_amount, puderzucker_pro, puderzucker, puderzucker_ID);
}
puderzucker_price.onclick = function() {
    remove_Item(puderzucker_amount, puderzucker_pro, puderzucker, puderzucker_ID);
}

jodsalz_pro.onclick = function() {
    add_Item(jodsalz_amount, jodsalz_pro, jodsalz, jodsalz_ID);
}
jodsalz_price.onclick = function() {
    remove_Item(jodsalz_amount, jodsalz_pro, jodsalz, jodsalz_ID);
}

alpensalz_pro.onclick = function() {
    add_Item(alpensalz_amount, alpensalz_pro, alpensalz, alpensalz_ID);
}
alpensalz_price.onclick = function() {
    remove_Item(alpensalz_amount, alpensalz_pro, alpensalz, alpensalz_ID);
}

burger01_pro.onclick = function() {
    add_Item(burger01_amount, burger01_pro, burger01, burger01_ID);
}
burger01_price.onclick = function() {
    remove_Item(burger01_amount, burger01_pro, burger01, burger01_ID);
}

reis01_pro.onclick = function() {
    add_Item(reis01_amount, reis01_pro, reis01, reis01_ID);
}
reis01_price.onclick = function() {
    remove_Item(reis01_amount, reis01_pro, reis01, reis01_ID);
}

reis02_pro.onclick = function() {
    add_Item(reis02_amount, reis02_pro, reis02, reis02_ID);
}
reis02_price.onclick = function() {
    remove_Item(reis02_amount, reis02_pro, reis02, reis02_ID);
}

reis03_pro.onclick = function() {
    add_Item(reis03_amount, reis03_pro, reis03, reis03_ID);
}
reis03_price.onclick = function() {
    remove_Item(reis03_amount, reis03_pro, reis03, reis03_ID);
}

reis04_pro.onclick = function() {
    add_Item(reis04_amount, reis04_pro, reis04, reis04_ID);
}
reis04_price.onclick = function() {
    remove_Item(reis04_amount, reis04_pro, reis04, reis04_ID);
}

eier_pro.onclick = function() {
    add_Item(eier_amount, eier_pro, eier, eier_ID);
}
eier_price.onclick = function() {
    remove_Item(eier_amount, eier_pro, eier, eier_ID);
}

martadella01_pro.onclick = function() {
    add_Item(martadella01_amount, martadella01_pro, martadella01, martadella01_ID);
}
martadella01_price.onclick = function() {
    remove_Item(martadella01_amount, martadella01_pro, martadella01, martadella01_ID);
}

martadella02_pro.onclick = function() {
    add_Item(martadella02_amount, martadella02_pro, martadella02, martadella02_ID);
}
martadella02_price.onclick = function() {
    remove_Item(martadella02_amount, martadella02_pro, martadella02, martadella02_ID);
}

käse01_pro.onclick = function() {
    add_Item(käse01_amount, käse01_pro, käse01, käse01_ID);
}
käse01_price.onclick = function() {
    remove_Item(käse01_amount, käse01_pro, käse01, käse01_ID);
}

weißkäse_pro.onclick = function() {
    add_Item(weißkäse_amount, weißkäse_pro, weißkäse, weißkäse_ID);
}
weißkäse_price.onclick = function() {
    remove_Item(weißkäse_amount, weißkäse_pro, weißkäse, weißkäse_ID);
}

johgurt01_pro.onclick = function() {
    add_Item(johgurt01_amount, johgurt01_pro, johgurt01, johgurt01_ID);
}
johgurt01_price.onclick = function() {
    remove_Item(johgurt01_amount, johgurt01_pro, johgurt01, johgurt01_ID);
}

johgurt02_pro.onclick = function() {
    add_Item(johgurt02_amount, johgurt02_pro, johgurt02, johgurt02_ID);
}
johgurt02_price.onclick = function() {
    remove_Item(johgurt02_amount, johgurt02_pro, johgurt02, johgurt02_ID);
}

spaghetti_pro.onclick = function() {
    add_Item(spaghetti_amount, spaghetti_pro, spaghetti, spaghetti_ID);
}
spaghetti_price.onclick = function() {
    remove_Item(spaghetti_amount, spaghetti_pro, spaghetti, spaghetti_ID);
}

schnitzel01_pro.onclick = function() {
    add_Item(schnitzel01_amount, schnitzel01_pro, schnitzel01, schnitzel01_ID);
}
schnitzel01_price.onclick = function() {
    remove_Item(schnitzel01_amount, schnitzel01_pro, schnitzel01, schnitzel01_ID);
}

schnitzel02_pro.onclick = function() {
    add_Item(schnitzel02_amount, schnitzel02_pro, schnitzel02, schnitzel02_ID);
}
schnitzel02_price.onclick = function() {
    remove_Item(schnitzel02_amount, schnitzel02_pro, schnitzel02, schnitzel02_ID);
}

schnitzel03_pro.onclick = function() {
    add_Item(schnitzel03_amount, schnitzel03_pro, schnitzel03, schnitzel03_ID);
}
schnitzel03_price.onclick = function() {
    remove_Item(schnitzel03_amount, schnitzel03_pro, schnitzel03, schnitzel03_ID);
}

nuggets01_pro.onclick = function() {
    add_Item(nuggets01_amount, nuggets01_pro, nuggets01, nuggets01_ID);
}
nuggets01_price.onclick = function() {
    remove_Item(nuggets01_amount, nuggets01_pro, nuggets01, nuggets01_ID);
}

nuggets02_pro.onclick = function() {
    add_Item(nuggets02_amount, nuggets02_pro, nuggets02, nuggets02_ID);
}
nuggets02_price.onclick = function() {
    remove_Item(nuggets02_amount, nuggets02_pro, nuggets02, nuggets02_ID);
}

nuggets03_pro.onclick = function() {
    add_Item(nuggets03_amount, nuggets03_pro, nuggets03, nuggets03_ID);
}
nuggets03_price.onclick = function() {
    remove_Item(nuggets03_amount, nuggets03_pro, nuggets03, nuggets03_ID);
}

sardinen_pro.onclick = function() {
    add_Item(sardinen_amount, sardinen_pro, sardinen, sardinen_ID);
}
sardinen_price.onclick = function() {
    remove_Item(sardinen_amount, sardinen_pro, sardinen, sardinen_ID);
}

thunfisch_pro.onclick = function() {
    add_Item(thunfisch_amount, thunfisch_pro, thunfisch, thunfisch_ID);
}
thunfisch_price.onclick = function() {
    remove_Item(thunfisch_amount, thunfisch_pro, thunfisch, thunfisch_ID);
}

ketchup_pro.onclick = function() {
    add_Item(ketchup_amount, ketchup_pro, ketchup, ketchup_ID);
}
ketchup_price.onclick = function() {
    remove_Item(ketchup_amount, ketchup_pro, ketchup, ketchup_ID);
}

mayonnaise_pro.onclick = function() {
    add_Item(mayonnaise_amount, mayonnaise_pro, mayonnaise, mayonnaise_ID);
}
mayonnaise_price.onclick = function() {
    remove_Item(mayonnaise_amount, mayonnaise_pro, mayonnaise, mayonnaise_ID);
}

zitronen_pro.onclick = function() {
    add_Item(zitronen_amount, zitronen_pro, zitronen, zitronen_ID);
}
zitronen_price.onclick = function() {
    remove_Item(zitronen_amount, zitronen_pro, zitronen, zitronen_ID);
}

toast01_pro.onclick = function() {
    add_Item(toast01_amount, toast01_pro, toast01, toast01_ID);
}
toast01_price.onclick = function() {
    remove_Item(toast01_amount, toast01_pro, toast01, toast01_ID);
}

hotdog_pro.onclick = function() {
    add_Item(hotdog_amount, hotdog_pro, hotdog, hotdog_ID);
}
hotdog_price.onclick = function() {
    remove_Item(hotdog_amount, hotdog_pro, hotdog, hotdog_ID);
}

schnitten_pro.onclick = function() {
    add_Item(schnitten_amount, schnitten_pro, schnitten, schnitten_ID);
}
schnitten_price.onclick = function() {
    remove_Item(schnitten_amount, schnitten_pro, schnitten, schnitten_ID);
}

mais_pro.onclick = function() {
    add_Item(mais_amount, mais_pro, mais, mais_ID);
}
mais_price.onclick = function() {
    remove_Item(mais_amount, mais_pro, mais, mais_ID);
}

erbsen_pro.onclick = function() {
    add_Item(erbsen_amount, erbsen_pro, erbsen, erbsen_ID);
}
erbsen_price.onclick = function() {
    remove_Item(erbsen_amount, erbsen_pro, erbsen, erbsen_ID);
}

kichererbsen_pro.onclick = function() {
    add_Item(kichererbsen_amount, kichererbsen_pro, kichererbsen, kichererbsen_ID);
}
kichererbsen_price.onclick = function() {
    remove_Item(kichererbsen_amount, kichererbsen_pro, kichererbsen, kichererbsen_ID);
}

kidneybohnen_pro.onclick = function() {
    add_Item(kidneybohnen_amount, kidneybohnen_pro, kidneybohnen, kidneybohnen_ID);
}
kidneybohnen_price.onclick = function() {
    remove_Item(kidneybohnen_amount, kidneybohnen_pro, kidneybohnen, kidneybohnen_ID);
}

champignons_pro.onclick = function() {
    add_Item(champignons_amount, champignons_pro, champignons, champignons_ID);
}
champignons_price.onclick = function() {
    remove_Item(champignons_amount, champignons_pro, champignons, champignons_ID);
}

olive_pro.onclick = function() {
    add_Item(olive_amount, olive_pro, olive, olive_ID);
}
olive_price.onclick = function() {
    remove_Item(olive_amount, olive_pro, olive, olive_ID);
}

olivenöl_pro.onclick = function() {
    add_Item(olivenöl_amount, olivenöl_pro, olivenöl, olivenöl_ID);
}
olivenöl_price.onclick = function() {
    remove_Item(olivenöl_amount, olivenöl_pro, olivenöl, olivenöl_ID);
}

nuggets04_pro.onclick = function() {
    add_Item(nuggets04_amount, nuggets04_pro, nuggets04, nuggets04_ID);
}
nuggets04_price.onclick = function() {
    remove_Item(nuggets04_amount, nuggets04_pro, nuggets04, nuggets04_ID);
}

croissants_pro.onclick = function() {
    add_Item(croissants_amount, croissants_pro, croissants, croissants_ID);
}
croissants_price.onclick = function() {
    remove_Item(croissants_amount, croissants_pro, croissants, croissants_ID);
}

burger_pro.onclick = function() {
    add_Item(burger_amount, burger_pro, burger, burger_ID);
}
burger_price.onclick = function() {
    remove_Item(burger_amount, burger_pro, burger, burger_ID);
}

baguette_pro.onclick = function() {
    add_Item(baguette_amount, baguette_pro, baguette, baguette_ID);
}
baguette_price.onclick = function() {
    remove_Item(baguette_amount, baguette_pro, baguette, baguette_ID);
}

pommes01_pro.onclick = function() {
    add_Item(pommes01_amount, pommes01_pro, pommes01, pommes01_ID);
}
baguette_price.onclick = function() {
    remove_Item(pommes01_amount, pommes01_pro, pommes01, pommes01_ID);
}

pommes02_pro.onclick = function() {
    add_Item(pommes02_amount, pommes02_pro, pommes02, pommes02_ID);
}
pommes02_price.onclick = function() {
    remove_Item(pommes02_amount, pommes02_pro, pommes02, pommes02_ID);
}

//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
apfelecke_pro.onclick = function() {
    add_Item(apfelecke_amount, apfelecke_pro, apfelecke, apfelecke_ID);
}
apfelecke_price.onclick = function() {
    remove_Item(apfelecke_amount, apfelecke_pro, apfelecke, apfelecke_ID);
}

laugenecke_pro.onclick = function() {
    add_Item(laugenecke_amount, laugenecke_pro, laugenecke, laugenecke_ID);
}
laugenecke_price.onclick = function() {
    remove_Item(laugenecke_amount, laugenecke_pro, laugenecke, laugenecke_ID);
}

buttercroissant_pro.onclick = function() {
    add_Item(buttercroissant_amount, buttercroissant_pro, buttercroissant, buttercroissant_ID);
}
buttercroissant_price.onclick = function() {
    remove_Item(buttercroissant_amount, buttercroissant_pro, buttercroissant, buttercroissant_ID);
}

spinat_pro.onclick = function() {
    add_Item(spinat_amount, spinat_pro, spinat, spinat_ID);
}
spinat_price.onclick = function() {
    remove_Item(spinat_amount, spinat_pro, spinat, spinat_ID);
}

ciabatta_pro.onclick = function() {
    add_Item(ciabatta_amount, ciabatta_pro, ciabatta, ciabatta_ID);
}
ciabatta_price.onclick = function() {
    remove_Item(ciabatta_amount, ciabatta_pro, ciabatta, ciabatta_ID);
}

eiweiß_pro.onclick = function() {
    add_Item(eiweiß_amount, eiweiß_pro, eiweiß, eiweiß_ID);
}
eiweiß_price.onclick = function() {
    remove_Item(eiweiß_amount, eiweiß_pro, eiweiß, eiweiß_ID);
}

franz_pro.onclick = function() {
    add_Item(franz_amount, franz_pro, franz, franz_ID);
}
franz_price.onclick = function() {
    remove_Item(franz_amount, franz_pro, franz, franz_ID);
}

laugen_pro.onclick = function() {
    add_Item(laugen_amount, laugen_pro, laugen, laugen_ID);
}
laugen_price.onclick = function() {
    remove_Item(laugen_amount, laugen_pro, laugen, laugen_ID);
}

laugenzopf_pro.onclick = function() {
    add_Item(laugenzopf_amount, laugenzopf_pro, laugenzopf, laugenzopf_ID);
}
laugenzopf_price.onclick = function() {
    remove_Item(laugenzopf_amount, laugenzopf_pro, laugenzopf, laugenzopf_ID);
}

meister_pro.onclick = function() {
    add_Item(meister_amount, meister_pro, meister, meister_ID);
}
meister_price.onclick = function() {
    remove_Item(meister_amount, meister_pro, meister, meister_ID);
}

nougat_pro.onclick = function() {
    add_Item(nougat_amount, nougat_pro, nougat, nougat_ID);
}
nougat_price.onclick = function() {
    remove_Item(nougat_amount, nougat_pro, nougat, nougat_ID);
}

nuss_pro.onclick = function() {
    add_Item(nuss_amount, nuss_pro, nuss, nuss_ID);
}
nuss_price.onclick = function() {
    remove_Item(nuss_amount, nuss_pro, nuss, nuss_ID);
}

pmarg_pro.onclick = function() {
    add_Item(pmarg_amount, pmarg_pro, pmarg, pmarg_ID);
}
pmarg_price.onclick = function() {
    remove_Item(pmarg_amount, pmarg_pro, pmarg, pmarg_ID);
}

rosenbrötchen_pro.onclick = function() {
    add_Item(rosenbrötchen_amount, rosenbrötchen_pro, rosenbrötchen, rosenbrötchen_ID);
}
rosenbrötchen_price.onclick = function() {
    remove_Item(rosenbrötchen_amount, rosenbrötchen_pro, rosenbrötchen, rosenbrötchen_ID);
}

sesamring_pro.onclick = function() {
    add_Item(sesamring_amount, sesamring_pro, sesamring, sesamring_ID);
}
sesamring_price.onclick = function() {
    remove_Item(sesamring_amount, sesamring_pro, sesamring, sesamring_ID);
}

sonnenkrüstchen_pro.onclick = function() {
    add_Item(sonnenkrüstchen_amount, sonnenkrüstchen_pro, sonnenkrüstchen, sonnenkrüstchen_ID);
}
sonnenkrüstchen_price.onclick = function() {
    remove_Item(sonnenkrüstchen_amount, sonnenkrüstchen_pro, sonnenkrüstchen, sonnenkrüstchen_ID);
}

vanillestange_pro.onclick = function() {
    add_Item(vanillestange_amount, vanillestange_pro, vanillestange, vanillestange_ID);
}
vanillestange_price.onclick = function() {
    remove_Item(vanillestange_amount, vanillestange_pro, vanillestange, vanillestange_ID);
}

walnussbrötchen_pro.onclick = function() {
    add_Item(walnussbrötchen_amount, walnussbrötchen_pro, walnussbrötchen, walnussbrötchen_ID);
}
walnussbrötchen_price.onclick = function() {
    remove_Item(walnussbrötchen_amount, walnussbrötchen_pro, walnussbrötchen, walnussbrötchen_ID);
}

weizenbrötchen_pro.onclick = function() {
    add_Item(weizenbrötchen_amount, weizenbrötchen_pro, weizenbrötchen, weizenbrötchen_ID);
}
weizenbrötchen_price.onclick = function() {
    remove_Item(weizenbrötchen_amount, weizenbrötchen_pro, weizenbrötchen, weizenbrötchen_ID);
}

weltmeister_pro.onclick = function() {
    add_Item(weltmeister_amount, weltmeister_pro, weltmeister, weltmeister_ID);
}
weltmeister_price.onclick = function() {
    remove_Item(weltmeister_amount, weltmeister_pro, weltmeister, weltmeister_ID);
}

donutB_pro.onclick = function() {
    add_Item(donutB_amount, donutB_pro, donutB, donutB_ID);
}
donutB_price.onclick = function() {
    remove_Item(donutB_amount, donutB_pro, donutB, donutB_ID);
}


//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
pizza01_pro.onclick = function() {
    add_Item(pizza01_amount, pizza01_pro, pizza01, pizza01_ID);
}
pizza01_price.onclick = function() {
    remove_Item(pizza01_amount, pizza01_pro, pizza01, pizza01_ID);
}

pizza02_pro.onclick = function() {
    add_Item(pizza02_amount, pizza02_pro, pizza02, pizza02_ID);
}
pizza02_price.onclick = function() {
    remove_Item(pizza02_amount, pizza02_pro, pizza02, pizza02_ID);
}

pizza03_pro.onclick = function() {
    add_Item(pizza03_amount, pizza03_pro, pizza03, pizza03_ID);
}
pizza03_price.onclick = function() {
    remove_Item(pizza03_amount, pizza03_pro, pizza03, pizza03_ID);
}

pizza04_pro.onclick = function() {
    add_Item(pizza04_amount, pizza04_pro, pizza04, pizza04_ID);
}
pizza04_price.onclick = function() {
    remove_Item(pizza04_amount, pizza04_pro, pizza04, pizza04_ID);
}
//---------------------------------------------------------------//
//---------------------------------------------------------------//
//---------------------------------------------------------------//
cookies01_pro.onclick = function() {
    add_Item(cookies01_amount, cookies01_pro, cookies01, cookies01_ID);
}
cookies01_price.onclick = function() {
    remove_Item(cookies01_amount, cookies01_pro, cookies01, cookies01_ID);
}

sultaninen_pro.onclick = function() {
    add_Item(sultaninen_amount, sultaninen_pro, sultaninen, sultaninen_ID);
}
sultaninen_price.onclick = function() {
    remove_Item(sultaninen_amount, sultaninen_pro, sultaninen, sultaninen_ID);
}


//------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------Functions---------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//
let sum = 0;

function add_Item(x, y, z, i) {
    x.innerText = parseInt(x.innerText) + 1;
    y.classList.add('TAB');
    
    if(x.innerText > 0 && x.innerText < 2){
        const mami = document.createElement("div");
        document.querySelector(".items").appendChild(mami);
        mami.classList.add("div_" + i);
        document.querySelector(".div_" + i).style.display = "flex";
        document.querySelector(".div_" + i).style.justifyContent = "space-between";

        const para = document.createElement("p");
        const para01 = document.createElement("p");
        const para02 = document.createElement("p");

        para.classList.add("n_" + i);
        para01.classList.add("a_" + i);
        para02.classList.add("p_" + i);
        
        document.querySelector(".div_" + i).appendChild(para);
        document.querySelector(".div_" + i).appendChild(para01);
        document.querySelector(".div_" + i).appendChild(para02);
        
        document.querySelector(".n_" + i).style.textAlign = "center";
        document.querySelector(".n_" + i).style.height = "40px";
        document.querySelector(".n_" + i).style.width = "150px";
        document.querySelector(".a_" + i).style.paddingTop = "10px";
        document.querySelector(".p_" + i).style.paddingTop = "10px";

        document.querySelector(".n_" + i).innerText = y.innerText;
        document.querySelector(".a_" + i).innerText = x.innerText;
        document.querySelector(".p_" + i).innerText = z * parseInt(x.innerText);
        
        sum += z;
    }
    if(x.innerText > 1){
        document.querySelector(".a_" + i).innerText = x.innerText;
        document.querySelector(".p_" + i).innerText = z * parseInt(x.innerText);
        
        sum += z;
    }
}
function remove_Item(x, y, z, i) {
    if(x.innerText > 0 && x.innerText < 2){
        x.innerText = parseInt(x.innerText) - 1;
        y.classList.remove('TAB');
        
        sum = 0;

        document.querySelector(".div_" + i).remove();
        document.querySelector(".n_" + i).remove();
        document.querySelector(".a_" + i).remove();
        document.querySelector(".p_" + i).remove();

    }
    if(x.innerText > 1){
        x.innerText = parseInt(x.innerText) - 1;
        document.querySelector(".a_" + i).innerText = x.innerText;
        document.querySelector(".p_" + i).innerText = z * parseInt(x.innerText);
                
        sum = sum.toFixed(2) - z;
    }
    else{
        x.innerText = 0;
    }
}

//------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------Buttons---------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//

const bbb = document.querySelector(".printButton");
const mySum = document.querySelector(".mySum");
let m = 0;

document.querySelector(".weiterButton").onclick = function(){
    m += 1;

    const date = new Date();
    const d = date.toDateString();
    const t = date.toLocaleTimeString();
    document.querySelector(".currentDate").innerHTML = d;
    document.querySelector(".currentTime").innerHTML = t;

    if(m > 0 && m < 2){
        mySum.style.display = "flex";
        const finalSum = document.createElement("p");
        document.querySelector(".mySum").appendChild(finalSum);
        finalSum.classList.add("myPayment");
        finalSum.innerText = sum;
    }
    
    if(m > 1){
        document.querySelector(".myPayment").innerText = sum;
    }

    if(sum > 0){
        bbb.style.display = "block";
        document.querySelector(".paper").style.display = "block"; 
    }
    
    if(sum == 0){
        document.querySelector(".paper").style.display = "none";
        bbb.style.display = "none";
    }
};

document.querySelector(".printButton").onclick = function(){
    window.print();
}
