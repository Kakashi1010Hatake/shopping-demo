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


//------------------------------- Basis ---------------------------------//
//------------------------------- Basis ---------------------------------//
//------------------------------- Basis ---------------------------------//
const sardinen_amount = document.querySelector(".sardinen");
const sardinen_pro = document.querySelector(".almare_01");
const sardinen_price = document.querySelector(".priceValue_almare_01");

const thunfisch_amount = document.querySelector(".thunfisch");
const thunfisch_pro = document.querySelector(".almare_02");
const thunfisch_price = document.querySelector(".priceValue_almare_02");






//----------------------------- Brötchen --------------------------------//
//----------------------------- Brötchen --------------------------------//
//----------------------------- Brötchen --------------------------------//


//------------------------------ Pizzerei -------------------------------//
//------------------------------ Pizzerei -------------------------------//
//------------------------------ Pizzerei -------------------------------//


//------------------------- Snacks & Süßigkeiten -------------------------//
//------------------------- Snacks & Süßigkeiten -------------------------//
//------------------------- Snacks & Süßigkeiten -------------------------//




//------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------Prices---------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------- Basic ---------------------------------//
//-----------------------------------------------------------------------//
let sardinen = 0.99;
const sardinen_ID = "sardinen";
sardinen_price.innerText = sardinen + "€";

let thunfisch = 1.49;
const thunfisch_ID = "thunfisch";
thunfisch_price.innerText = thunfisch + "€";



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


//------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------Activation-------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//

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
