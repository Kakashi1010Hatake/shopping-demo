//------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------Menu----------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//
document.querySelector(".a_tab").addEventListener('click', display_First);
function display_First() {
    document.querySelector(".first-tab").classList.toggle('clicked');
}

document.querySelector(".b_tab").addEventListener('click', display_Second);
function display_Second() {
    document.querySelector(".second-tab").classList.toggle('clicked');
}

document.querySelector(".c_tab").addEventListener('click', display_Third);
function display_Third() {
    document.querySelector(".third-tab").classList.toggle('clicked');
}

document.querySelector(".d_tab").addEventListener('click', display_Fourth);
function display_Fourth() {
    document.querySelector(".fourth-tab").classList.toggle('clicked');
}

document.querySelector(".e_tab").addEventListener('click', display_Fifth);
function display_Fifth() {
    document.querySelector(".fifth-tab").classList.toggle('clicked');
}

document.querySelector(".f_tab").addEventListener('click', display_Sixth);
function display_Sixth() {
    document.querySelector(".sixth-tab").classList.toggle('clicked');
}

document.querySelector(".g_tab").addEventListener('click', display_Seventh);
function display_Seventh() {
    document.querySelector(".seventh-tab").classList.toggle('clicked');
}

document.querySelector(".h_tab").addEventListener('click', display_Eighth);
function display_Eighth() {
    document.querySelector(".eighth-tab").classList.toggle('clicked');
}

let o = 0;

//------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------Decleration------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//


//------------------------------- Basis ---------------------------------//
//------------------------------- Basis ---------------------------------//
const sardinen_amount = document.querySelector(".shopping.sardinen_value");
const sardinen_btn = document.querySelector(".addBtn.sardinen");
const sardinen_price = document.querySelector(".priceValue_almare_01");

const thunfischfilets_amount = document.querySelector(".shopping.thunfischfilets_value");
const thunfischfilets_btn = document.querySelector(".addBtn.thunfischfilets");
const thunfischfilets_price = document.querySelector(".priceValue_almare_02");

const margarine_amount = document.querySelector(".shopping.margarine_value");
const margarine_btn = document.querySelector(".addBtn.margarine");
const margarine_price = document.querySelector(".priceValue_bellasan_01");

const margarine02_amount = document.querySelector(".shopping.margarine02_value");
const margarine02_btn = document.querySelector(".addBtn.margarine02");
const margarine02_price = document.querySelector(".priceValue_deliReform");

const öl_amount = document.querySelector(".shopping.öl_value");
const öl_btn = document.querySelector(".addBtn.öl");
const öl_price = document.querySelector(".priceValue_bellasan_02");

const pflanzenmargarine_amount = document.querySelector(".shopping.pflanzenmargarine_value");
const pflanzenmargarine_btn = document.querySelector(".addBtn.pflanzenmargarine");
const pflanzenmargarine_price = document.querySelector(".priceValue_bellasan_03");

const basmati_amount = document.querySelector(".shopping.basmati_value");
const basmati_btn = document.querySelector(".addBtn.basmati");
const basmati_price = document.querySelector(".priceValue_bonRi_01");

const jasmin_amount = document.querySelector(".shopping.jasmin_value");
const jasmin_btn = document.querySelector(".addBtn.jasmin");
const jasmin_price = document.querySelector(".priceValue_bonRi_02");

const milchreis_amount = document.querySelector(".shopping.milchreis_value");
const milchreis_btn = document.querySelector(".addBtn.milchreis");
const milchreis_price = document.querySelector(".priceValue_bonRi_03");

const parboiled_amount = document.querySelector(".shopping.parboiled_value");
const parboiled_btn = document.querySelector(".addBtn.parboiled");
const parboiled_price = document.querySelector(".priceValue_bonRi_04");

const olivenöl_amount = document.querySelector(".shopping.olivenöl_value");
const olivenöl_btn = document.querySelector(".addBtn.olivenöl");
const olivenöl_price = document.querySelector(".priceValue_cantinelle_01");

const fusilli_amount = document.querySelector(".shopping.fusilli_value");
const fusilli_btn = document.querySelector(".addBtn.fusilli");
const fusilli_price = document.querySelector(".priceValue_cucina_01");

const gnocchi_amount = document.querySelector(".shopping.gnocchi_value");
const gnocchi_btn = document.querySelector(".addBtn.gnocchi");
const gnocchi_price = document.querySelector(".priceValue_cucina_02");

const penne_amount = document.querySelector(".shopping.penne_value");
const penne_btn = document.querySelector(".addBtn.penne");
const penne_price = document.querySelector(".priceValue_cucina_03");

const spaghetti_amount = document.querySelector(".shopping.spaghetti_value");
const spaghetti_btn = document.querySelector(".addBtn.spaghetti");
const spaghetti_price = document.querySelector(".priceValue_cucina_04");

const tagliatelle_amount = document.querySelector(".shopping.tagliatelle_value");
const tagliatelle_btn = document.querySelector(".addBtn.tagliatelle");
const tagliatelle_price = document.querySelector(".priceValue_cucina_05");

const mayonnaise_amount = document.querySelector(".shopping.mayonnaise_value");
const mayonnaise_btn = document.querySelector(".addBtn.mayonnaise");
const mayonnaise_price = document.querySelector(".priceValue_delikato_01");

const puderzucker_amount = document.querySelector(".shopping.puderzucker_value");
const puderzucker_btn = document.querySelector(".addBtn.puderzucker");
const puderzucker_price = document.querySelector(".priceValue_diadem_01");

const zucker_amount = document.querySelector(".shopping.zucker_value");
const zucker_btn = document.querySelector(".addBtn.zucker");
const zucker_price = document.querySelector(".priceValue_diadem_02");

const fleischwurst_amount = document.querySelector(".shopping.fleischwurst_value");
const fleischwurst_btn = document.querySelector(".addBtn.fleischwurst");
const fleischwurst_price = document.querySelector(".priceValue_güldenhof_01");

const paprikalyoner_amount = document.querySelector(".shopping.paprikalyoner_value");
const paprikalyoner_btn = document.querySelector(".addBtn.paprikalyoner");
const paprikalyoner_price = document.querySelector(".priceValue_güldenhof_02");

const mortadella_amount = document.querySelector(".shopping.mortadella_value");
const mortadella_btn = document.querySelector(".addBtn.mortadella");
const mortadella_price = document.querySelector(".priceValue_güldenhof_03");

const zitronenSaft_amount = document.querySelector(".shopping.zitronenSaft_value");
const zitronenSaft_btn = document.querySelector(".addBtn.zitronenSaft");
const zitronenSaft_price = document.querySelector(".priceValue_gutBio_01");

const tomatenketchup_amount = document.querySelector(".shopping.tomatenketchup_value");
const tomatenketchup_btn = document.querySelector(".addBtn.tomatenketchup");
const tomatenketchup_price = document.querySelector(".priceValue_heinz_01");

const chickenNuggets_amount = document.querySelector(".shopping.chickenNuggets_value");
const chickenNuggets_btn = document.querySelector(".addBtn.chickenNuggets");
const chickenNuggets_price = document.querySelector(".priceValue_jackFarm_01");

const crispyChickenNuggets_amount = document.querySelector(".shopping.crispyChickenNuggets_value");
const crispyChickenNuggets_btn = document.querySelector(".addBtn.crispyChickenNuggets");
const crispyChickenNuggets_price = document.querySelector(".priceValue_jackFarm_02");

const miniSchnitzel_amount = document.querySelector(".shopping.miniSchnitzel_value");
const miniSchnitzel_btn = document.querySelector(".addBtn.miniSchnitzel");
const miniSchnitzel_price = document.querySelector(".priceValue_jackFarm_03");

const cordonBleu_amount = document.querySelector(".shopping.cordonBleu_value");
const cordonBleu_btn = document.querySelector(".addBtn.cordonBleu");
const cordonBleu_price = document.querySelector(".priceValue_jackFarm_04");

const miniKnusper_amount = document.querySelector(".shopping.miniKnusper_value");
const miniKnusper_btn = document.querySelector(".addBtn.miniKnusper");
const miniKnusper_price = document.querySelector(".priceValue_jackFarm_05");

const champignons_amount = document.querySelector(".shopping.champignons_value");
const champignons_btn = document.querySelector(".addBtn.champignons");
const champignons_price = document.querySelector(".priceValue_kingCrown_01");

const erbsen_amount = document.querySelector(".shopping.erbsen_value");
const erbsen_btn = document.querySelector(".addBtn.erbsen");
const erbsen_price = document.querySelector(".priceValue_kingCrown_02");

const kichererbsen_amount = document.querySelector(".shopping.kichererbsen_value");
const kichererbsen_btn = document.querySelector(".addBtn.kichererbsen");
const kichererbsen_price = document.querySelector(".priceValue_kingCrown_03");

const kidneyBohnen_amount = document.querySelector(".shopping.kidneyBohnen_value");
const kidneyBohnen_btn = document.querySelector(".addBtn.kidneyBohnen");
const kidneyBohnen_price = document.querySelector(".priceValue_kingCrown_04");

const oliven_amount = document.querySelector(".shopping.oliven_value");
const oliven_btn = document.querySelector(".addBtn.oliven");
const oliven_price = document.querySelector(".priceValue_kingCrown_05");

const cornichons_amount = document.querySelector(".shopping.cornichons_value");
const cornichons_btn = document.querySelector(".addBtn.cornichons");
const cornichons_price = document.querySelector(".priceValue_kingCrown_06");

const sonnenmais_amount = document.querySelector(".shopping.sonnenmais_value");
const sonnenmais_btn = document.querySelector(".addBtn.sonnenmais");
const sonnenmais_price = document.querySelector(".priceValue_kingCrown_07");

const mayonnaise02_amount = document.querySelector(".shopping.mayonnaise02_value");
const mayonnaise02_btn = document.querySelector(".addBtn.mayonnaise02");
const mayonnaise02_price = document.querySelector(".priceValue_bioVegan");

const kichererbsen02_amount = document.querySelector(".shopping.kichererbsen02_value");
const kichererbsen02_btn = document.querySelector(".addBtn.kichererbsen02");
const kichererbsen02_price = document.querySelector(".priceValue_suntat_01");

const bohnen01_amount = document.querySelector(".shopping.bohnen01_value");
const bohnen01_btn = document.querySelector(".addBtn.bohnen01");
const bohnen01_price = document.querySelector(".priceValue_suntat_02");

const bohnen02_amount = document.querySelector(".shopping.bohnen02_value");
const bohnen02_btn = document.querySelector(".addBtn.bohnen02");
const bohnen02_price = document.querySelector(".priceValue_suntat_03");

const bulgur01_amount = document.querySelector(".shopping.bulgur01_value");
const bulgur01_btn = document.querySelector(".addBtn.bulgur01");
const bulgur01_price = document.querySelector(".priceValue_suntat_04");

const linsen_amount = document.querySelector(".shopping.linsen_value");
const linsen_btn = document.querySelector(".addBtn.linsen");
const linsen_price = document.querySelector(".priceValue_suntat_05");

const choublanc_amount = document.querySelector(".shopping.choublanc_value");
const choublanc_btn = document.querySelector(".addBtn.choublanc");
const choublanc_price = document.querySelector(".priceValue_suntat_06");

const weinblätter02_amount = document.querySelector(".shopping.weinblätter02_value");
const weinblätter02_btn = document.querySelector(".addBtn.weinblätter02");
const weinblätter02_price = document.querySelector(".priceValue_suntat_07");

const weinblätter03_amount = document.querySelector(".shopping.weinblätter03_value");
const weinblätter03_btn = document.querySelector(".addBtn.weinblätter03");
const weinblätter03_price = document.querySelector(".priceValue_suntat_08");

const tahin_amount = document.querySelector(".shopping.tahin_value");
const tahin_btn = document.querySelector(".addBtn.tahin");
const tahin_price = document.querySelector(".priceValue_suntat_09");

const bohnen03_amount = document.querySelector(".shopping.bohnen03_value");
const bohnen03_btn = document.querySelector(".addBtn.bohnen03");
const bohnen03_price = document.querySelector(".priceValue_chtoura_01");

const hummus_amount = document.querySelector(".shopping.hummus_value");
const hummus_btn = document.querySelector(".addBtn.hummus");
const hummus_price = document.querySelector(".priceValue_chtoura_02");

const tomatenPaste_amount = document.querySelector(".shopping.tomatenPaste_value");
const tomatenPaste_btn = document.querySelector(".addBtn.tomatenPaste");
const tomatenPaste_price = document.querySelector(".priceValue_oncu_01");

const snacksNuggets_amount = document.querySelector(".shopping.snacksNuggets_value");
const snacksNuggets_btn = document.querySelector(".addBtn.snacksNuggets");
const snacksNuggets_price = document.querySelector(".priceValue_laFinesse_01");

const eier01_amount = document.querySelector(".shopping.eier01_value");
const eier01_btn = document.querySelector(".addBtn.eier01");
const eier01_price = document.querySelector(".priceValue_landfreude_01");

const eier02_amount = document.querySelector(".shopping.eier02_value");
const eier02_btn = document.querySelector(".addBtn.eier02");
const eier02_price = document.querySelector(".priceValue_ja_01");

const jodSalz_amount = document.querySelector(".shopping.jodSalz_value");
const jodSalz_btn = document.querySelector(".addBtn.jodSalz");
const jodSalz_price = document.querySelector(".priceValue_leGusto_01");

const weinblätter_amount = document.querySelector(".shopping.weinblätter_value");
const weinblätter_btn = document.querySelector(".addBtn.weinblätter");
const weinblätter_price = document.querySelector(".priceValue_lyttos_01");

const weißkäse_amount = document.querySelector(".shopping.weißkäse_value");
const weißkäse_btn = document.querySelector(".addBtn.weißkäse");
const weißkäse_price = document.querySelector(".priceValue_lyttos_02");

const golden_amount = document.querySelector(".shopping.golden_value");
const golden_btn = document.querySelector(".addBtn.golden");
const golden_price = document.querySelector(".priceValue_mccain_01");

const fettJohgurt01_amount = document.querySelector(".shopping.fettJohgurt01_value");
const fettJohgurt01_btn = document.querySelector(".addBtn.fettJohgurt01");
const fettJohgurt01_price = document.querySelector(".priceValue_milsani_01");

const fettJohgurt02_amount = document.querySelector(".shopping.fettJohgurt02_value");
const fettJohgurt02_btn = document.querySelector(".addBtn.fettJohgurt02");
const fettJohgurt02_price = document.querySelector(".priceValue_milsani_02");

const johgurt01_amount = document.querySelector(".shopping.johgurt01_value");
const johgurt01_btn = document.querySelector(".addBtn.johgurt01");
const johgurt01_price = document.querySelector(".priceValue_milsani_03");

const johgurt02_amount = document.querySelector(".shopping.johgurt02_value");
const johgurt02_btn = document.querySelector(".addBtn.johgurt02");
const johgurt02_price = document.querySelector(".priceValue_milsani_04");

const pommes_amount = document.querySelector(".shopping.pommes_value");
const pommes_btn = document.querySelector(".addBtn.pommes");
const pommes_price = document.querySelector(".priceValue_speisezeit_01");

const falafel_amount = document.querySelector(".shopping.falafel_value");
const falafel_btn = document.querySelector(".addBtn.falafel");
const falafel_price = document.querySelector(".priceValue_sebat");

const fruchtStk_amount = document.querySelector(".shopping.fruchtStk_value");
const fruchtStk_btn = document.querySelector(".addBtn.fruchtStk");
const fruchtStk_price = document.querySelector(".priceValue_sweetValley_01");

const milch_amount = document.querySelector(".shopping.milch_value");
const milch_btn = document.querySelector(".addBtn.milch");
const milch_price = document.querySelector(".priceValue_bebivita");

const weizenmehl_amount = document.querySelector(".shopping.weizenmehl_value");
const weizenmehl_btn = document.querySelector(".addBtn.weizenmehl");
const weizenmehl_price = document.querySelector(".priceValue_backFamily_01");

const kakao_amount = document.querySelector(".shopping.kakao_value");
const kakao_btn = document.querySelector(".addBtn.kakao");
const kakao_price = document.querySelector(".priceValue_backFamily_02");


//------------------------------- Brötchen ---------------------------------//
//------------------------------- Brötchen ---------------------------------//
const toast_amount = document.querySelector(".shopping.toast_value");
const toast_btn = document.querySelector(".addBtn.toast");
const toast_price = document.querySelector(".priceValue_ja_02");

const gewürzbutter_amount = document.querySelector(".shopping.gewürzbutter_value");
const gewürzbutter_btn = document.querySelector(".addBtn.gewürzbutter");
const gewürzbutter_price = document.querySelector(".priceValue_wonnemeyer_01");

const brot_amount = document.querySelector(".shopping.brot_value");
const brot_btn = document.querySelector(".addBtn.brot");
const brot_price = document.querySelector(".priceValue_libanese");

//------------------------------- Getränke ---------------------------------//
//------------------------------- Getränke ---------------------------------//
const cappuccino_amount = document.querySelector(".shopping.cappuccino_value");
const cappuccino_btn = document.querySelector(".addBtn.cappuccino");
const cappuccino_price = document.querySelector(".priceValue_amaroy_01");

const multivitamin01_amount = document.querySelector(".shopping.multivitamin01_value");
const multivitamin01_btn = document.querySelector(".addBtn.multivitamin01");
const multivitamin01_price = document.querySelector(".priceValue_solevita");

const cola_amount = document.querySelector(".shopping.cola_value");
const cola_btn = document.querySelector(".addBtn.cola");
const cola_price = document.querySelector(".priceValue_river_01");

const schwarzertee_amount = document.querySelector(".shopping.schwarzertee_value");
const schwarzertee_btn = document.querySelector(".addBtn.schwarzertee");
const schwarzertee_price = document.querySelector(".priceValue_lordNelson_01");

const kamile_amount = document.querySelector(".shopping.kamile_value");
const kamile_btn = document.querySelector(".addBtn.kamile");
const kamile_price = document.querySelector(".priceValue_westcliff_01");

const kümmel_amount = document.querySelector(".shopping.kümmel_value");
const kümmel_btn = document.querySelector(".addBtn.kümmel");
const kümmel_price = document.querySelector(".priceValue_lordNelson_02");

const coffee_amount = document.querySelector(".shopping.coffee_value");
const coffee_btn = document.querySelector(".addBtn.coffee");
const coffee_price = document.querySelector(".priceValue_ja_04");


//------------------------------- Bäkerei ---------------------------------//
//------------------------------- Bäkerei ---------------------------------//
const apfelecke_amount = document.querySelector(".shopping.apfelecke_value");
const apfelecke_btn = document.querySelector(".addBtn.apfelecke");
const apfelecke_price = document.querySelector(".priceValue_apfelecke");

const laugenecke_amount = document.querySelector(".shopping.laugenecke_value");
const laugenecke_btn = document.querySelector(".addBtn.laugenecke");
const laugenecke_price = document.querySelector(".priceValue_laugenecke");

const buttercroissant_amount = document.querySelector(".shopping.buttercroissant_value");
const buttercroissant_btn = document.querySelector(".addBtn.buttercroissant");
const buttercroissant_price = document.querySelector(".priceValue_buttercroissant");

const spinatFeta_amount = document.querySelector(".shopping.spinatFeta_value");
const spinatFeta_btn = document.querySelector(".addBtn.spinatFeta");
const spinatFeta_price = document.querySelector(".priceValue_spinatFeta");

const ciabatta_amount = document.querySelector(".shopping.ciabatta_value");
const ciabatta_btn = document.querySelector(".addBtn.ciabatta");
const ciabatta_price = document.querySelector(".priceValue_ciabatta");

const donut_amount = document.querySelector(".shopping.donut_value");
const donut_btn = document.querySelector(".addBtn.donut");
const donut_price = document.querySelector(".priceValue_donut");

const eiweiß_amount = document.querySelector(".shopping.eiweiß_value");
const eiweiß_btn = document.querySelector(".addBtn.eiweiß");
const eiweiß_price = document.querySelector(".priceValue_eiweiß");

const franzbrötchen_amount = document.querySelector(".shopping.franzbrötchen_value");
const franzbrötchen_btn = document.querySelector(".addBtn.franzbrötchen");
const franzbrötchen_price = document.querySelector(".priceValue_franzbrötchen");

const laugenbrezel_amount = document.querySelector(".shopping.laugenbrezel_value");
const laugenbrezel_btn = document.querySelector(".addBtn.laugenbrezel");
const laugenbrezel_price = document.querySelector(".priceValue_laugenbrezel");

const laugenzopf_amount = document.querySelector(".shopping.laugenzopf_value");
const laugenzopf_btn = document.querySelector(".addBtn.laugenzopf");
const laugenzopf_price = document.querySelector(".priceValue_laugenzopf");

const meisterbaguette_amount = document.querySelector(".shopping.meisterbaguette_value");
const meisterbaguette_btn = document.querySelector(".addBtn.meisterbaguette");
const meisterbaguette_price = document.querySelector(".priceValue_meisterbaguette");

const nougatBerliner_amount = document.querySelector(".shopping.nougatBerliner_value");
const nougatBerliner_btn = document.querySelector(".addBtn.nougatBerliner");
const nougatBerliner_price = document.querySelector(".priceValue_nougatBerliner");

const nussCroissant_amount = document.querySelector(".shopping.nussCroissant_value");
const nussCroissant_btn = document.querySelector(".addBtn.nussCroissant");
const nussCroissant_price = document.querySelector(".priceValue_nussCroissant");

const pizzaMargeritta_amount = document.querySelector(".shopping.pizzaMargeritta_value");
const pizzaMargeritta_btn = document.querySelector(".addBtn.pizzaMargeritta");
const pizzaMargeritta_price = document.querySelector(".priceValue_pizzaMargeritta");

const rosenbrötchen_amount = document.querySelector(".shopping.rosenbrötchen_value");
const rosenbrötchen_btn = document.querySelector(".addBtn.rosenbrötchen");
const rosenbrötchen_price = document.querySelector(".priceValue_rosenbrötchen");

const sesamring_amount = document.querySelector(".shopping.sesamring_value");
const sesamring_btn = document.querySelector(".addBtn.sesamring");
const sesamring_price = document.querySelector(".priceValue_sesamring");

const sonnenkrüstchen_amount = document.querySelector(".shopping.sonnenkrüstchen_value");
const sonnenkrüstchen_btn = document.querySelector(".addBtn.sonnenkrüstchen");
const sonnenkrüstchen_price = document.querySelector(".priceValue_sonnenkrüstchen");

const vanillestange_amount = document.querySelector(".shopping.vanillestange_value");
const vanillestange_btn = document.querySelector(".addBtn.vanillestange");
const vanillestange_price = document.querySelector(".priceValue_vanillestange");

const walnussbrötchen_amount = document.querySelector(".shopping.walnussbrötchen_value");
const walnussbrötchen_btn = document.querySelector(".addBtn.walnussbrötchen");
const walnussbrötchen_price = document.querySelector(".priceValue_walnussbrötchen");

const weizenbrötchen_amount = document.querySelector(".shopping.weizenbrötchen_value");
const weizenbrötchen_btn = document.querySelector(".addBtn.weizenbrötchen");
const weizenbrötchen_price = document.querySelector(".priceValue_weizenbrötchen");

const weltmeister_amount = document.querySelector(".shopping.weltmeister_value");
const weltmeister_btn = document.querySelector(".addBtn.weltmeister");
const weltmeister_price = document.querySelector(".priceValue_weltmeister");


//------------------------------- Haushalt ---------------------------------//
//------------------------------- Haushalt ---------------------------------//
const kosmetiktücher_amount = document.querySelector(".shopping.kosmetiktücher_value");
const kosmetiktücher_btn = document.querySelector(".addBtn.kosmetiktücher");
const kosmetiktücher_price = document.querySelector(".priceValue_kokett_01");

const kosmetiktücher02_amount = document.querySelector(".shopping.kosmetiktücher02_value");
const kosmetiktücher02_btn = document.querySelector(".addBtn.kosmetiktücher02");
const kosmetiktücher02_price = document.querySelector(".priceValue_lacura_01");

const toilettenpapier02_amount = document.querySelector(".shopping.toilettenpapier02_value");
const toilettenpapier02_btn = document.querySelector(".addBtn.toilettenpapier02");
const toilettenpapier02_price = document.querySelector(".priceValue_kokett_02");

const wc_reiniger_amount = document.querySelector(".shopping.wc_reiniger_value");
const wc_reiniger_btn = document.querySelector(".addBtn.wc_reiniger");
const wc_reiniger_price = document.querySelector(".priceValue_clinair_01");

const bad_reiniger_amount = document.querySelector(".shopping.bad_reiniger_value");
const bad_reiniger_btn = document.querySelector(".addBtn.bad_reiniger");
const bad_reiniger_price = document.querySelector(".priceValue_clinair_02");

const granatapfelseife_amount = document.querySelector(".shopping.granatapfelseife_value");
const granatapfelseife_btn = document.querySelector(".addBtn.granatapfelseife");
const granatapfelseife_price = document.querySelector(".priceValue_cien_01");

const seifenstuck_amount = document.querySelector(".shopping.seifenstuck_value");
const seifenstuck_btn = document.querySelector(".addBtn.seifenstuck");
const seifenstuck_price = document.querySelector(".priceValue_cien_02");

const duschgel_amount = document.querySelector(".shopping.duschgel_value");
const duschgel_btn = document.querySelector(".addBtn.duschgel");
const duschgel_price = document.querySelector(".priceValue_cien_03");

const zahnpaste_amount = document.querySelector(".shopping.zahnpaste_value");
const zahnpaste_btn = document.querySelector(".addBtn.zahnpaste");
const zahnpaste_price = document.querySelector(".priceValue_dontodent_01");

const mundspulung_amount = document.querySelector(".shopping.mundspulung_value");
const mundspulung_btn = document.querySelector(".addBtn.mundspulung");
const mundspulung_price = document.querySelector(".priceValue_dontodent_02");

const haarfarbe_amount = document.querySelector(".shopping.haarfarbe_value");
const haarfarbe_btn = document.querySelector(".addBtn.haarfarbe");
const haarfarbe_price = document.querySelector(".priceValue_reelle");

const antitranspirant_amount = document.querySelector(".shopping.antitranspirant_value");
const antitranspirant_btn = document.querySelector(".addBtn.antitranspirant");
const antitranspirant_price = document.querySelector(".priceValue_cien_04");

const toilettenpapier_amount = document.querySelector(".shopping.toilettenpapier_value");
const toilettenpapier_btn = document.querySelector(".addBtn.toilettenpapier");
const toilettenpapier_price = document.querySelector(".priceValue_ja_03");

const schaumaShampoo_amount = document.querySelector(".shopping.schaumaShampoo_value");
const schaumaShampoo_btn = document.querySelector(".addBtn.schaumaShampoo");
const schaumaShampoo_price = document.querySelector(".priceValue_schauma_01");

const balsam_amount = document.querySelector(".shopping.balsam_value");
const balsam_btn = document.querySelector(".addBtn.balsam");
const balsam_price = document.querySelector(".priceValue_balea_01");

const handhygiene_amount = document.querySelector(".shopping.handhygiene_value");
const handhygiene_btn = document.querySelector(".addBtn.handhygiene");
const handhygiene_price = document.querySelector(".priceValue_balea_02");

const hygienespüler_amount = document.querySelector(".shopping.hygienespüler_value");
const hygienespüler_btn = document.querySelector(".addBtn.hygienespüler");
const hygienespüler_price = document.querySelector(".priceValue_denkmit_01");

const rasierschaum_amount = document.querySelector(".shopping.rasierschaum_value");
const rasierschaum_btn = document.querySelector(".addBtn.rasierschaum");
const rasierschaum_price = document.querySelector(".priceValue_isana_01");

const vollwaschmittel_amount = document.querySelector(".shopping.vollwaschmittel_value");
const vollwaschmittel_btn = document.querySelector(".addBtn.vollwaschmittel");
const vollwaschmittel_price = document.querySelector(".priceValue_tandil");

const vitamin_amount = document.querySelector(".shopping.vitamin_value");
const vitamin_btn = document.querySelector(".addBtn.vitamin");
const vitamin_price = document.querySelector(".priceValue_mivolis_01");

const damenbinden01_amount = document.querySelector(".shopping.damenbinden01_value");
const damenbinden01_btn = document.querySelector(".addBtn.damenbinden01");
const damenbinden01_price = document.querySelector(".priceValue_jessa_01");

const damenbinden02_amount = document.querySelector(".shopping.damenbinden02_value");
const damenbinden02_btn = document.querySelector(".addBtn.damenbinden02");
const damenbinden02_price = document.querySelector(".priceValue_satessa_01");

const damenbinden03_amount = document.querySelector(".shopping.damenbinden03_value");
const damenbinden03_btn = document.querySelector(".addBtn.damenbinden03");
const damenbinden03_price = document.querySelector(".priceValue_jessa_02");

const einwegrasierermänner_amount = document.querySelector(".shopping.einwegrasierermänner_value");
const einwegrasierermänner_btn = document.querySelector(".addBtn.einwegrasierermänner");
const einwegrasierermänner_price = document.querySelector(".priceValue_balea_03");

const einwegrasiererdamen_amount = document.querySelector(".shopping.einwegrasiererdamen_value");
const einwegrasiererdamen_btn = document.querySelector(".addBtn.einwegrasiererdamen");
const einwegrasiererdamen_price = document.querySelector(".priceValue_balea_04");


//------------------------------- Pizza ---------------------------------//
//------------------------------- Pizza ---------------------------------//
const pizza01_amount = document.querySelector(".shopping.pizza01_value");
const pizza01_btn = document.querySelector(".addBtn.pizza");
const pizza01_price = document.querySelector(".priceValue_pizzaAh_01");

const baugette_amount = document.querySelector(".shopping.baugette_value");
const baugette_btn = document.querySelector(".addBtn.baugette");
const baugette_price = document.querySelector(".priceValue_pizzaAh_02");

//------------------------------- Gemüse ---------------------------------//
//------------------------------- Gemüse ---------------------------------//
const tomaten_amount = document.querySelector(".shopping.tomaten_value");
const tomaten_btn = document.querySelector(".addBtn.tomaten");
const tomaten_price = document.querySelector(".priceValue_tomaten");

const gurcke_amount = document.querySelector(".shopping.gurcke_value");
const gurcke_btn = document.querySelector(".addBtn.gurcke");
const gurcke_price = document.querySelector(".priceValue_gurcke");

const zucchini_amount = document.querySelector(".shopping.zucchini_value");
const zucchini_btn = document.querySelector(".addBtn.zucchini");
const zucchini_price = document.querySelector(".priceValue_zucchini");

const eisbergsalat_amount = document.querySelector(".shopping.eisbergsalat_value");
const eisbergsalat_btn = document.querySelector(".addBtn.eisbergsalat");
const eisbergsalat_price = document.querySelector(".priceValue_eisbergsalat");



//------------------------------- Obst ---------------------------------//
//------------------------------- Obst ---------------------------------//
const apfel_amount = document.querySelector(".shopping.apfel_value");
const apfel_btn = document.querySelector(".addBtn.apfel");
const apfel_price = document.querySelector(".priceValue_apfel");

const banana_amount = document.querySelector(".shopping.banana_value");
const banana_btn = document.querySelector(".addBtn.banana");
const banana_price = document.querySelector(".priceValue_banana");

const kirsche_amount = document.querySelector(".shopping.kirsche_value");
const kirsche_btn = document.querySelector(".addBtn.kirsche");
const kirsche_price = document.querySelector(".priceValue_kirsche");

const mandarin_amount = document.querySelector(".shopping.mandarin_value");
const mandarin_btn = document.querySelector(".addBtn.mandarin");
const mandarin_price = document.querySelector(".priceValue_mandarin");

const orange_amount = document.querySelector(".shopping.orange_value");
const orange_btn = document.querySelector(".addBtn.orange");
const orange_price = document.querySelector(".priceValue_orange");




//------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------Prices---------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------- Basic ---------------------------------//
//------------------------------- Basic ---------------------------------//
let sardinen = 0.99;
let thunfischfilets = 1.49;
let margarine = 1.69;
let margarine02 = 1.65;
let öl = 1.79;
let pflanzenmargarine = 1.69;
let basmati = 2.99;
let jasmin = 2.49;
let milchreis = 1.19;
let parboiled = 1.49;
let olivenöl = 7.99;
let fusilli = 0.79;
let gnocchi = 1.99;
let penne = 0.79;
let spaghetti = 0.99;
let tagliatelle = 1.99;
let mayonnaise = 1.99;
let puderzucker = 0.49;
let zucker = 1.49;
let fleischwurst = 2.59;
let paprikalyoner = 1.29;
let mortadella = 1.29;
let zitronenSaft = 0.69;
let tomatenketchup = 2.99;
let chickenNuggets = 2.29;
let crispyChickenNuggets = 3.99;
let miniSchnitzel = 3.99;
let cordonBleu = 4.49;
let miniKnusper = 2.99;
let champignons = 1.49;
let erbsen = 0.99;
let kichererbsen = 0.69;
let kidneyBohnen = 0.79;
let oliven = 1.19;
let cornichons = 1.09;
let sonnenmais = 0.99;
let mayonnaise02 = 1.99;
let kichererbsen02 = 0.99;
let bohnen01 = 1.79;
let bohnen02 = 1.79;
let bulgur01 = 2.79;
let linsen = 3.49;
let choublanc = 2.59;
let weinblätter02 = 2.99;
let weinblätter03 = 0;
let tahin = 2.99;
let bohnen03 = 0.99;
let hummus = 0.99;
let tomatenPaste = 3.49;
let snacksNuggets = 2.59;
let eier01 = 1.99;
let eier02 = 1.99;
let jodSalz = 0.29;
let weinblätter = 1.39;
let weißkäse = 8.49;
let golden = 3.59;
let fettJohgurt01 = 1.69;
let fettJohgurt02 = 0.85;
let johgurt01 = 1.69;
let johgurt02 = 0.85;
let pommes = 1.89;
let falafel = 5.99;
let fruchtStk = 1.09;
let milch = 5.25;
let weizenmehl = 0.65;
let kakao = 0.65;


const sardinen_ID = "sardinen";
const thunfischfilets_ID = "thunfischfilets";
const margarine_ID = "margarine";
const margarine02_ID = "margarine02";
const öl_ID = "öl";
const pflanzenmargarine_ID = "pflanzenmargarine";
const basmati_ID = "basmati";
const jasmin_ID = "jasmin";
const milchreis_ID = "milchreis";
const parboiled_ID = "parboiled";
const olivenöl_ID = "olivenöl";
const fusilli_ID = "fusilli";
const gnocchi_ID = "gnocchi";
const penne_ID = "penne";
const spaghetti_ID = "spaghetti";
const tagliatelle_ID = "tagliatelle";
const mayonnaise_ID = "mayonnaise";
const puderzucker_ID = "puderzucker";
const zucker_ID = "zucker";
const fleischwurst_ID = "fleischwurst";
const paprikalyoner_ID = "paprikalyoner";
const mortadella_ID = "mortadella";
const zitronenSaft_ID = "zitronenSaft";
const tomatenketchup_ID = "tomatenketchup";
const chickenNuggets_ID = "chickenNuggets";
const crispyChickenNuggets_ID = "crispyChickenNuggets";
const miniSchnitzel_ID = "miniSchnitzel";
const cordonBleu_ID = "cordonBleu";
const miniKnusper_ID = "miniKnusper";
const champignons_ID = "champignons";
const erbsen_ID = "erbsen";
const kichererbsen_ID = "kichererbsen";
const kidneyBohnen_ID = "kidneyBohnen";
const oliven_ID = "oliven";
const cornichons_ID = "cornichons";
const sonnenmais_ID = "sonnenmais";
const mayonnaise02_ID = "mayonnaise02";
const kichererbsen02_ID = "kichererbsen02";
const bohnen01_ID = "bohnen01";
const bohnen02_ID = "bohnen02";
const bulgur01_ID = "bulgur01";
const linsen_ID = "linsen";
const choublanc_ID = "choublanc";
const weinblätter02_ID = "weinblätter02";
const weinblätter03_ID = "weinblätter03";
const tahin_ID = "tahin";
const bohnen03_ID = "bohnen03";
const hummus_ID = "hummus";
const tomatenPaste_ID = "tomatenPaste";
const snacksNuggets_ID = "snacksNuggets";
const eier01_ID = "eier01";
const eier02_ID = "eier02";
const jodSalz_ID = "jodSalz";
const weinblätter_ID = "weinblätter";
const weißkäse_ID = "weißkäse";
const golden_ID = "golden";
const fettJohgurt01_ID = "fettJohgurt01";
const fettJohgurt02_ID = "fettJohgurt02";
const johgurt01_ID = "johgurt01";
const johgurt02_ID = "johgurt02";
const pommes_ID = "pommes";
const falafel_ID = "falafel";
const fruchtStk_ID = "fruchtStk";
const milch_ID = "milch";
const weizenmehl_ID = "weizenmehl";
const kakao_ID = "kakao";


sardinen_price.innerText = sardinen + "€";
thunfischfilets_price.innerText = thunfischfilets + "€";
margarine_price.innerText = margarine + "€";
margarine02_price.innerText = margarine02 + "€";
öl_price.innerText = öl + "€";
pflanzenmargarine_price.innerText = pflanzenmargarine + "€";
basmati_price.innerText = basmati + "€";
jasmin_price.innerText = jasmin + "€";
milchreis_price.innerText = milchreis + "€";
parboiled_price.innerText = parboiled + "€";
olivenöl_price.innerText = olivenöl + "€";
fusilli_price.innerText = fusilli + "€";
gnocchi_price.innerText = gnocchi + "€";
penne_price.innerText = penne + "€";
spaghetti_price.innerText = spaghetti + "€";
tagliatelle_price.innerText = tagliatelle + "€";
mayonnaise_price.innerText = mayonnaise + "€";
puderzucker_price.innerText = puderzucker + "€";
zucker_price.innerText = zucker + "€";
fleischwurst_price.innerText = fleischwurst + "€";
paprikalyoner_price.innerText = paprikalyoner + "€";
mortadella_price.innerText = mortadella + "€";
zitronenSaft_price.innerText = zitronenSaft + "€";
tomatenketchup_price.innerText = tomatenketchup + "€";
chickenNuggets_price.innerText = chickenNuggets + "€";
crispyChickenNuggets_price.innerText = crispyChickenNuggets + "€";
miniSchnitzel_price.innerText = miniSchnitzel + "€";
cordonBleu_price.innerText = cordonBleu + "€";
miniKnusper_price.innerText = miniKnusper + "€";
champignons_price.innerText = champignons + "€";
erbsen_price.innerText = erbsen + "€";
kichererbsen_price.innerText = kichererbsen + "€";
kidneyBohnen_price.innerText = kidneyBohnen + "€";
oliven_price.innerText = oliven + "€";
cornichons_price.innerText = cornichons + "€";
sonnenmais_price.innerText = sonnenmais + "€";
mayonnaise02_price.innerText = mayonnaise02 + "€";
kichererbsen02_price.innerText = kichererbsen02 + "€";
bohnen01_price.innerText = bohnen01 + "€";
bohnen02_price.innerText = bohnen02 + "€";
bulgur01_price.innerText = bulgur01 + "€";
linsen_price.innerText = linsen + "€";
choublanc_price.innerText = choublanc + "€";
weinblätter02_price.innerText = weinblätter02 + "€";
weinblätter03_price.innerText = weinblätter03 + "€";
tahin_price.innerText = tahin + "€";
bohnen03_price.innerText = bohnen03 + "€";
hummus_price.innerText = hummus + "€";
tomatenPaste_price.innerText = tomatenPaste + "€";
snacksNuggets_price.innerText = snacksNuggets + "€";
eier01_price.innerText = eier01 + "€";
eier02_price.innerText = eier02 + "€";
jodSalz_price.innerText = jodSalz + "€";
weinblätter_price.innerText = weinblätter + "€";
weißkäse_price.innerText = weißkäse + "€";
golden_price.innerText = golden + "€";
fettJohgurt01_price.innerText = fettJohgurt01 + "€";
fettJohgurt02_price.innerText = fettJohgurt02 + "€";
johgurt01_price.innerText = johgurt01 + "€";
johgurt01_price.innerText = johgurt01 + "€";
pommes_price.innerText = pommes + "€";
falafel_price.innerText = falafel + "€";
fruchtStk_price.innerText = fruchtStk + "€";
milch_price.innerText = milch + "€";
weizenmehl_price.innerText = weizenmehl + "€";
kakao_price.innerText = kakao + "€";


//------------------------------- Brötchen ---------------------------------//
//------------------------------- Brötchen ---------------------------------//
let toast = 1.49;
let gewürzbutter = 0.99;
let brot = 0.80;


const toast_ID = "toast";
const gewürzbutter_ID = "gewürzbutter";
const brot_ID = "brot";


toast_price.innerText = toast + "€";
gewürzbutter_price.innerText = gewürzbutter + "€";
brot_price.innerText = brot + "€";


//------------------------------- Getränke ---------------------------------//
//------------------------------- Getränke ---------------------------------//
let cappuccino = 1.49;
let multivitamin01 = 1.19;
let cola = 0.65;
let schwarzertee = 0.99;
let kamile = 0.79;
let kümmel = 1.19;
let coffee = 2.69;


const cappuccino_ID = "cappuccino";
const multivitamin01_ID = "multivitamin01";
const cola_ID = "cola";
const schwarzertee_ID = "schwarzertee";
const kamile_ID = "kamile";
const kümmel_ID = "kümmel";
const coffee_ID = "coffee";


cappuccino_price.innerText = cappuccino + "€";
multivitamin01_price.innerText = multivitamin01 + "€";
cola_price.innerText = cola + "€";
schwarzertee_price.innerText = schwarzertee + "€";
kamile_price.innerText = kamile + "€";
kümmel_price.innerText = kümmel + "€";
coffee_price.innerText = coffee + "€";


//------------------------------- Bäkerei ---------------------------------//
//------------------------------- Bäkerei ---------------------------------//
let apfelecke = 0.79;
let laugenecke = 0.79;
let buttercroissant = 0.69;
let spinatFeta = 0.69;
let ciabatta = 0.89;
let donut = 0.99;
let eiweiß = 0.59;
let franzbrötchen = 0.75;
let laugenbrezel = 0.35;
let laugenzopf = 0.59;
let meisterbaguette = 0.85;
let nougatBerliner = 0.35;
let nussCroissant = 0.75;
let pizzaMargeritta = 0.85;
let rosenbrötchen = 0.35;
let sesamring = 0.59;
let sonnenkrüstchen = 0.45;
let vanillestange = 0.75;
let walnussbrötchen = 0.55;
let weizenbrötchen = 0.19;
let weltmeister = 0.39;



const apfelecke_ID = "apfelecke";
const laugenecke_ID = "laugenecke";
const buttercroissant_ID = "buttercroissant";
const spinatFeta_ID = "spinatFeta";
const ciabatta_ID = "ciabatta";
const donut_ID = "donut";
const eiweiß_ID = "eiweiß";
const franzbrötchen_ID = "franzbrötchen";
const laugenbrezel_ID = "laugenbrezel";
const laugenzopf_ID = "laugenzopf";
const meisterbaguette_ID = "meisterbaguette";
const nougatBerliner_ID = "nougatBerliner";
const nussCroissant_ID = "nussCroissant";
const pizzaMargeritta_ID = "pizzaMargeritta";
const rosenbrötchen_ID = "rosenbrötchen";
const sesamring_ID = "sesamring";
const sonnenkrüstchen_ID = "sonnenkrüstchen";
const vanillestange_ID = "vanillestange";
const walnussbrötchen_ID = "walnussbrötchen";
const weizenbrötchen_ID = "weizenbrötchen";
const weltmeister_ID = "weltmeister";



apfelecke_price.innerText = apfelecke + "€";
laugenecke_price.innerText = laugenecke + "€";
buttercroissant_price.innerText = buttercroissant + "€";
spinatFeta_price.innerText = spinatFeta + "€";
ciabatta_price.innerText = ciabatta + "€";
donut_price.innerText = donut + "€";
eiweiß_price.innerText = eiweiß + "€";
franzbrötchen_price.innerText = franzbrötchen + "€";
laugenbrezel_price.innerText = laugenbrezel + "€";
laugenzopf_price.innerText = laugenzopf + "€";
meisterbaguette_price.innerText = meisterbaguette + "€";
nougatBerliner_price.innerText = nougatBerliner + "€";
nussCroissant_price.innerText = nussCroissant + "€";
pizzaMargeritta_price.innerText = pizzaMargeritta + "€";
rosenbrötchen_price.innerText = rosenbrötchen + "€";
sesamring_price.innerText = sesamring + "€";
sonnenkrüstchen_price.innerText = sonnenkrüstchen + "€";
vanillestange_price.innerText = vanillestange + "€";
walnussbrötchen_price.innerText = walnussbrötchen + "€";
weizenbrötchen_price.innerText = weizenbrötchen + "€";
weltmeister_price.innerText = weltmeister + "€";



//------------------------------- Haushalt ---------------------------------//
//------------------------------- Haushalt ---------------------------------//
let wc_reiniger = 0.95;
let bad_reiniger = 0.95;
let granatapfelseife = 0.75;
let seifenstuck = 0.275;
let duschgel = 1.75;
let antitranspirant = 0.55;
let zahnpaste = 0.65;
let mundspulung = 0.85;
let haarfarbe = 1.95;
let toilettenpapier = 2.65;
let toilettenpapier02 = 2.95;
let schaumaShampoo = 2.95;
let kosmetiktücher = 0.75;
let kosmetiktücher02 = 0.99;
let balsam = 0.75;
let handhygiene = 1.29;
let hygienespüler = 1.65;
let rasierschaum = 1.39;
let vollwaschmittel = 3.65;
let vitamin = 0.55;
let damenbinden01 = 0;
let damenbinden02 = 0.99;
let damenbinden03 = 0.85;
let einwegrasierermänner = 1.15;
let einwegrasiererdamen = 1.15;


const wc_reiniger_ID = "wc_reiniger";
const bad_reiniger_ID = "bad_reiniger";
const granatapfelseife_ID = "granatapfelseife";
const seifenstuck_ID = "seifenstuck";
const duschgel_ID = "duschgel";
const antitranspirant_ID = "antitranspirant";
const zahnpaste_ID = "zahnpaste";
const mundspulung_ID = "mundspulung";
const haarfarbe_ID = "haarfarbe";
const toilettenpapier_ID = "toilettenpapier";
const toilettenpapier02_ID = "toilettenpapier02";
const schaumaShampoo_ID = "schaumaShampoo";
const kosmetiktücher_ID = "kosmetiktücher";
const kosmetiktücher02_ID = "kosmetiktücher02";
const balsam_ID = "balsam";
const handhygiene_ID = "handhygiene";
const hygienespüler_ID = "hygienespüler";
const rasierschaum_ID = "rasierschaum";
const vollwaschmittel_ID = "vollwaschmittel";
const vitamin_ID = "vitamin";
const damenbinden01_ID = "damenbinden01";
const damenbinden02_ID = "damenbinden02";
const damenbinden03_ID = "damenbinden03";
const einwegrasierermänner_ID = "einwegrasierermänner";
const einwegrasiererdamen_ID = "einwegrasiererdamen";


kosmetiktücher_price.innerText = kosmetiktücher + "€";
kosmetiktücher02_price.innerText = kosmetiktücher02 + "€";
wc_reiniger_price.innerText = wc_reiniger + "€";
bad_reiniger_price.innerText = bad_reiniger + "€";
granatapfelseife_price.innerText = granatapfelseife + "€";
seifenstuck_price.innerText = seifenstuck + "€";
duschgel_price.innerText = duschgel + "€";
antitranspirant_price.innerText = antitranspirant + "€";
zahnpaste_price.innerText = zahnpaste + "€";
mundspulung_price.innerText = mundspulung + "€";
haarfarbe_price.innerText = haarfarbe + "€";
toilettenpapier_price.innerText = toilettenpapier + "€";
toilettenpapier02_price.innerText = toilettenpapier02 + "€";
schaumaShampoo_price.innerText = schaumaShampoo + "€";
balsam_price.innerText = balsam + "€";
handhygiene_price.innerText = handhygiene + "€";
hygienespüler_price.innerText = hygienespüler + "€";
rasierschaum_price.innerText = rasierschaum + "€";
vollwaschmittel_price.innerText = vollwaschmittel + "€";
vitamin_price.innerText = vitamin + "€";
damenbinden01_price.innerText = damenbinden01 + "€";
damenbinden02_price.innerText = damenbinden02 + "€";
damenbinden03_price.innerText = damenbinden03 + "€";
einwegrasierermänner_price.innerText = einwegrasierermänner + "€";
einwegrasiererdamen_price.innerText = einwegrasiererdamen + "€";


//------------------------------- Pizza ---------------------------------//
//------------------------------- Pizza ---------------------------------//
let pizza01 = 3.99;
let baugette = 1.99;

const pizza01_ID = "pizza01";
const baugette_ID = "baugette";

pizza01_price.innerText = pizza01 + "€";
baugette_price.innerText = baugette + "€";


//------------------------------- Gemüse ---------------------------------//
//------------------------------- Gemüse ---------------------------------//
let tomaten = 0.95;
let gurcke = 0.99;
let zucchini = 3.2;
let eisbergsalat = 0.69;


const tomaten_ID = "tomaten";
const gurcke_ID = "gurcke";
const zucchini_ID = "zucchini";
const eisbergsalat_ID = "eisbergsalat";


tomaten_price.innerText = tomaten + "€";
gurcke_price.innerText = gurcke + "€";
zucchini_price.innerText = zucchini + "€";
eisbergsalat_price.innerText = eisbergsalat + "€";


//------------------------------- Obst ---------------------------------//
//------------------------------- Obst ---------------------------------//
let apfel = 1.49;
let banana = 1.29;
let kirsche = 9.00;
let mandarin = 2.45;
let orange = 1.25;


const apfel_ID = "apfel";
const banana_ID = "banana";
const kirsche_ID = "kirsche";
const mandarin_ID = "mandarin";
const orange_ID = "orange";


apfel_price.innerText = apfel + "€";
banana_price.innerText = banana + "€";
kirsche_price.innerText = kirsche + "€";
mandarin_price.innerText = mandarin + "€";
orange_price.innerText = orange + "€";




//------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------Activation-------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------- Basic ---------------------------------//
//------------------------------- Basic ---------------------------------//
sardinen_btn.onclick = function() {
    add_Item(sardinen_amount, sardinen, sardinen_ID);
}
sardinen_amount.onclick = function() {
    remove_Item(sardinen_amount, sardinen, sardinen_ID);
}
thunfischfilets_btn.onclick = function() {
    add_Item(thunfischfilets_amount, thunfischfilets, thunfischfilets_ID);
}
thunfischfilets_amount.onclick = function() {
    remove_Item(thunfischfilets_amount, thunfischfilets, thunfischfilets_ID);
}
margarine_btn.onclick = function() {
    add_Item(margarine_amount, margarine, margarine_ID);
}
margarine_amount.onclick = function() {
    remove_Item(margarine_amount, margarine, margarine_ID);
}
margarine02_btn.onclick = function() {
    add_Item(margarine02_amount, margarine02, margarine02_ID);
}
margarine02_amount.onclick = function() {
    remove_Item(margarine02_amount, margarine02, margarine02_ID);
}
öl_btn.onclick = function() {
    add_Item(öl_amount, öl, öl_ID);
}
öl_amount.onclick = function() {
    remove_Item(öl_amount, öl, öl_ID);
}
pflanzenmargarine_btn.onclick = function() {
    add_Item(pflanzenmargarine_amount, pflanzenmargarine, pflanzenmargarine_ID);
}
pflanzenmargarine_amount.onclick = function() {
    remove_Item(pflanzenmargarine_amount, pflanzenmargarine, pflanzenmargarine_ID);
}
basmati_btn.onclick = function() {
    add_Item(basmati_amount, basmati, basmati_ID);
}
basmati_amount.onclick = function() {
    remove_Item(basmati_amount, basmati, basmati_ID);
}
jasmin_btn.onclick = function() {
    add_Item(jasmin_amount, jasmin, jasmin_ID);
}
jasmin_amount.onclick = function() {
    remove_Item(jasmin_amount, jasmin, jasmin_ID);
}
milchreis_btn.onclick = function() {
    add_Item(milchreis_amount, milchreis, milchreis_ID);
}
milchreis_amount.onclick = function() {
    remove_Item(milchreis_amount, milchreis, milchreis_ID);
}
parboiled_btn.onclick = function() {
    add_Item(parboiled_amount, parboiled, parboiled_ID);
}
parboiled_amount.onclick = function() {
    remove_Item(parboiled_amount, parboiled, parboiled_ID);
}
olivenöl_btn.onclick = function() {
    add_Item(olivenöl_amount, olivenöl, olivenöl_ID);
}
olivenöl_amount.onclick = function() {
    remove_Item(olivenöl_amount, olivenöl, olivenöl_ID);
}
fusilli_btn.onclick = function() {
    add_Item(fusilli_amount, fusilli, fusilli_ID);
}
fusilli_amount.onclick = function() {
    remove_Item(fusilli_amount, fusilli, fusilli_ID);
}
gnocchi_btn.onclick = function() {
    add_Item(gnocchi_amount, gnocchi, gnocchi_ID);
}
gnocchi_amount.onclick = function() {
    remove_Item(gnocchi_amount, gnocchi, gnocchi_ID);
}
penne_btn.onclick = function() {
    add_Item(penne_amount, penne, penne_ID);
}
penne_amount.onclick = function() {
    remove_Item(penne_amount, penne, penne_ID);
}
spaghetti_btn.onclick = function() {
    add_Item(spaghetti_amount, spaghetti, spaghetti_ID);
}
spaghetti_amount.onclick = function() {
    remove_Item(spaghetti_amount, spaghetti, spaghetti_ID);
}
tagliatelle_btn.onclick = function() {
    add_Item(tagliatelle_amount, tagliatelle, tagliatelle_ID);
}
tagliatelle_amount.onclick = function() {
    remove_Item(tagliatelle_amount, tagliatelle, tagliatelle_ID);
}
mayonnaise_btn.onclick = function() {
    add_Item(mayonnaise_amount, mayonnaise, mayonnaise_ID);
}
mayonnaise_amount.onclick = function() {
    remove_Item(mayonnaise_amount, mayonnaise, mayonnaise_ID);
}
puderzucker_btn.onclick = function() {
    add_Item(puderzucker_amount, puderzucker, puderzucker_ID);
}
puderzucker_amount.onclick = function() {
    remove_Item(puderzucker_amount, puderzucker, puderzucker_ID);
}
zucker_btn.onclick = function() {
    add_Item(zucker_amount, zucker, zucker_ID);
}
zucker_amount.onclick = function() {
    remove_Item(zucker_amount, zucker, zucker_ID);
}
fleischwurst_btn.onclick = function() {
    add_Item(fleischwurst_amount, fleischwurst, fleischwurst_ID);
}
fleischwurst_amount.onclick = function() {
    remove_Item(fleischwurst_amount, fleischwurst, fleischwurst_ID);
}
paprikalyoner_btn.onclick = function() {
    add_Item(paprikalyoner_amount, paprikalyoner, paprikalyoner_ID);
}
paprikalyoner_amount.onclick = function() {
    remove_Item(paprikalyoner_amount, paprikalyoner, paprikalyoner_ID);
}
mortadella_btn.onclick = function() {
    add_Item(mortadella_amount, mortadella, mortadella_ID);
}
mortadella_amount.onclick = function() {
    remove_Item(mortadella_amount, mortadella, mortadella_ID);
}
zitronenSaft_btn.onclick = function() {
    add_Item(zitronenSaft_amount, zitronenSaft, zitronenSaft_ID);
}
zitronenSaft_amount.onclick = function() {
    remove_Item(zitronenSaft_amount, zitronenSaft, zitronenSaft_ID);
}
tomatenketchup_btn.onclick = function() {
    add_Item(tomatenketchup_amount, tomatenketchup, tomatenketchup_ID);
}
tomatenketchup_amount.onclick = function() {
    remove_Item(tomatenketchup_amount, tomatenketchup, tomatenketchup_ID);
}
chickenNuggets_btn.onclick = function() {
    add_Item(chickenNuggets_amount, chickenNuggets, chickenNuggets_ID);
}
chickenNuggets_amount.onclick = function() {
    remove_Item(chickenNuggets_amount, chickenNuggets, chickenNuggets_ID);
}
crispyChickenNuggets_btn.onclick = function() {
    add_Item(crispyChickenNuggets_amount, crispyChickenNuggets, crispyChickenNuggets_ID);
}
crispyChickenNuggets_amount.onclick = function() {
    remove_Item(crispyChickenNuggets_amount, crispyChickenNuggets, crispyChickenNuggets_ID);
}
miniSchnitzel_btn.onclick = function() {
    add_Item(miniSchnitzel_amount, miniSchnitzel, miniSchnitzel_ID);
}
miniSchnitzel_amount.onclick = function() {
    remove_Item(miniSchnitzel_amount, miniSchnitzel, miniSchnitzel_ID);
}
cordonBleu_btn.onclick = function() {
    add_Item(cordonBleu_amount, cordonBleu, cordonBleu_ID);
}
cordonBleu_amount.onclick = function() {
    remove_Item(cordonBleu_amount, cordonBleu, cordonBleu_ID);
}
miniKnusper_btn.onclick = function() {
    add_Item(miniKnusper_amount, miniKnusper, miniKnusper_ID);
}
miniKnusper_amount.onclick = function() {
    remove_Item(miniKnusper_amount, miniKnusper, miniKnusper_ID);
}
champignons_btn.onclick = function() {
    add_Item(champignons_amount, champignons, champignons_ID);
}
champignons_amount.onclick = function() {
    remove_Item(champignons_amount, champignons, champignons_ID);
}
erbsen_btn.onclick = function() {
    add_Item(erbsen_amount, erbsen, erbsen_ID);
}
erbsen_amount.onclick = function() {
    remove_Item(erbsen_amount, erbsen, erbsen_ID);
}
kichererbsen_btn.onclick = function() {
    add_Item(kichererbsen_amount, kichererbsen, kichererbsen_ID);
}
kichererbsen_amount.onclick = function() {
    remove_Item(kichererbsen_amount, kichererbsen, kichererbsen_ID);
}
kidneyBohnen_btn.onclick = function() {
    add_Item(kidneyBohnen_amount, kidneyBohnen, kidneyBohnen_ID);
}
kidneyBohnen_amount.onclick = function() {
    remove_Item(kidneyBohnen_amount, kidneyBohnen, kidneyBohnen_ID);
}
oliven_btn.onclick = function() {
    add_Item(oliven_amount, oliven, oliven_ID);
}
oliven_amount.onclick = function() {
    remove_Item(oliven_amount, oliven, oliven_ID);
}
cornichons_btn.onclick = function() {
    add_Item(cornichons_amount, cornichons, cornichons_ID);
}
cornichons_amount.onclick = function() {
    remove_Item(cornichons_amount, cornichons, cornichons_ID);
}
sonnenmais_btn.onclick = function() {
    add_Item(sonnenmais_amount, sonnenmais, sonnenmais_ID);
}
sonnenmais_amount.onclick = function() {
    remove_Item(sonnenmais_amount, sonnenmais, sonnenmais_ID);
}
mayonnaise02_btn.onclick = function() {
    add_Item(mayonnaise02_amount, mayonnaise02, mayonnaise02_ID);
}
mayonnaise02_amount.onclick = function() {
    remove_Item(mayonnaise02_amount, mayonnaise02, mayonnaise02_ID);
}
kichererbsen02_btn.onclick = function() {
    add_Item(kichererbsen02_amount, kichererbsen02, kichererbsen02_ID);
}
kichererbsen02_amount.onclick = function() {
    remove_Item(kichererbsen02_amount, kichererbsen02, kichererbsen02_ID);
}
bohnen01_btn.onclick = function() {
    add_Item(bohnen01_amount, bohnen01, bohnen01_ID);
}
bohnen01_amount.onclick = function() {
    remove_Item(bohnen01_amount, bohnen01, bohnen01_ID);
}
bohnen02_btn.onclick = function() {
    add_Item(bohnen02_amount, bohnen02, bohnen02_ID);
}
bohnen02_amount.onclick = function() {
    remove_Item(bohnen02_amount, bohnen02, bohnen02_ID);
}
bulgur01_btn.onclick = function() {
    add_Item(bulgur01_amount, bulgur01, bulgur01_ID);
}
bulgur01_amount.onclick = function() {
    remove_Item(bulgur01_amount, bulgur01, bulgur01_ID);
}
linsen_btn.onclick = function() {
    add_Item(linsen_amount, linsen, linsen_ID);
}
linsen_amount.onclick = function() {
    remove_Item(linsen_amount, linsen, linsen_ID);
}
choublanc_btn.onclick = function() {
    add_Item(choublanc_amount, choublanc, choublanc_ID);
}
choublanc_amount.onclick = function() {
    remove_Item(choublanc_amount, choublanc, choublanc_ID);
}
weinblätter02_btn.onclick = function() {
    add_Item(weinblätter02_amount, weinblätter02, weinblätter02_ID);
}
weinblätter02_amount.onclick = function() {
    remove_Item(weinblätter02_amount, weinblätter02, weinblätter02_ID);
}
weinblätter03_btn.onclick = function() {
    add_Item(weinblätter03_amount, weinblätter03, weinblätter03_ID);
}
weinblätter03_amount.onclick = function() {
    remove_Item(weinblätter03_amount, weinblätter03, weinblätter03_ID);
}
tahin_btn.onclick = function() {
    add_Item(tahin_amount, tahin, tahin_ID);
}
tahin_amount.onclick = function() {
    remove_Item(tahin_amount, tahin, tahin_ID);
}
bohnen03_btn.onclick = function() {
    add_Item(bohnen03_amount, bohnen03, bohnen03_ID);
}
bohnen03_amount.onclick = function() {
    remove_Item(bohnen03_amount, bohnen03, bohnen03_ID);
}
hummus_btn.onclick = function() {
    add_Item(hummus_amount, hummus, hummus_ID);
}
hummus_amount.onclick = function() {
    remove_Item(hummus_amount, hummus, hummus_ID);
}
tomatenPaste_btn.onclick = function() {
    add_Item(tomatenPaste_amount, tomatenPaste, tomatenPaste_ID);
}
tomatenPaste_amount.onclick = function() {
    remove_Item(tomatenPaste_amount, tomatenPaste, tomatenPaste_ID);
}
snacksNuggets_btn.onclick = function() {
    add_Item(snacksNuggets_amount, snacksNuggets, snacksNuggets_ID);
}
snacksNuggets_amount.onclick = function() {
    remove_Item(snacksNuggets_amount, snacksNuggets, snacksNuggets_ID);
}
eier01_btn.onclick = function() {
    add_Item(eier01_amount, eier01, eier01_ID);
}
eier01_amount.onclick = function() {
    remove_Item(eier01_amount, eier01, eier01_ID);
}
eier02_btn.onclick = function() {
    add_Item(eier02_amount, eier02, eier02_ID);
}
eier02_amount.onclick = function() {
    remove_Item(eier02_amount, eier02, eier02_ID);
}
jodSalz_btn.onclick = function() {
    add_Item(jodSalz_amount, jodSalz, jodSalz_ID);
}
jodSalz_amount.onclick = function() {
    remove_Item(jodSalz_amount, jodSalz, jodSalz_ID);
}
weinblätter_btn.onclick = function() {
    add_Item(weinblätter_amount, weinblätter, weinblätter_ID);
}
weinblätter_amount.onclick = function() {
    remove_Item(weinblätter_amount, weinblätter, weinblätter_ID);
}
weißkäse_btn.onclick = function() {
    add_Item(weißkäse_amount, weißkäse, weißkäse_ID);
}
weißkäse_amount.onclick = function() {
    remove_Item(weißkäse_amount, weißkäse, weißkäse_ID);
}
golden_btn.onclick = function() {
    add_Item(golden_amount, golden, golden_ID);
}
golden_amount.onclick = function() {
    remove_Item(golden_amount, golden, golden_ID);
}
fettJohgurt01_btn.onclick = function() {
    add_Item(fettJohgurt01_amount, fettJohgurt01, fettJohgurt01_ID);
}
fettJohgurt01_amount.onclick = function() {
    remove_Item(fettJohgurt01_amount, fettJohgurt01, fettJohgurt01_ID);
}
fettJohgurt02_btn.onclick = function() {
    add_Item(fettJohgurt02_amount, fettJohgurt02, fettJohgurt02_ID);
}
fettJohgurt02_amount.onclick = function() {
    remove_Item(fettJohgurt02_amount, fettJohgurt02, fettJohgurt02_ID);
}
johgurt01_btn.onclick = function() {
    add_Item(johgurt01_amount, johgurt01, johgurt01_ID);
}
johgurt01_amount.onclick = function() {
    remove_Item(johgurt01_amount, johgurt01, johgurt01_ID);
}
johgurt02_btn.onclick = function() {
    add_Item(johgurt02_amount, johgurt02, johgurt02_ID);
}
johgurt02_amount.onclick = function() {
    remove_Item(johgurt02_amount, johgurt02, johgurt02_ID);
}
pommes_btn.onclick = function() {
    add_Item(pommes_amount, pommes, pommes_ID);
}
pommes_amount.onclick = function() {
    remove_Item(pommes_amount, pommes, pommes_ID);
}
falafel_btn.onclick = function() {
    add_Item(falafel_amount, falafel, falafel_ID);
}
falafel_amount.onclick = function() {
    remove_Item(falafel_amount, falafel, falafel_ID);
}
fruchtStk_btn.onclick = function() {
    add_Item(fruchtStk_amount, fruchtStk, fruchtStk_ID);
}
fruchtStk_amount.onclick = function() {
    remove_Item(fruchtStk_amount, fruchtStk, fruchtStk_ID);
}
milch_btn.onclick = function() {
    add_Item(milch_amount, milch, milch_ID);
}
milch_amount.onclick = function() {
    remove_Item(milch_amount, milch, milch_ID);
}
weizenmehl_btn.onclick = function() {
    add_Item(weizenmehl_amount, weizenmehl, weizenmehl_ID);
}
weizenmehl_amount.onclick = function() {
    remove_Item(weizenmehl_amount, weizenmehl, weizenmehl_ID);
}
kakao_btn.onclick = function() {
    add_Item(kakao_amount, kakao, kakao_ID);
}
kakao_amount.onclick = function() {
    remove_Item(kakao_amount, kakao, kakao_ID);
}



//------------------------------- Brötchen ---------------------------------//
//------------------------------- Brötchen ---------------------------------//
toast_btn.onclick = function() {
    add_Item(toast_amount, toast, toast_ID);
}
toast_amount.onclick = function() {
    remove_Item(toast_amount, toast, toast_ID);
}
gewürzbutter_btn.onclick = function() {
    add_Item(gewürzbutter_amount, gewürzbutter, gewürzbutter_ID);
}
gewürzbutter_amount.onclick = function() {
    remove_Item(gewürzbutter_amount, gewürzbutter, gewürzbutter_ID);
}
brot_btn.onclick = function() {
    add_Item(brot_amount, brot, brot_ID);
}
brot_amount.onclick = function() {
    remove_Item(brot_amount, brot, brot_ID);
}


//------------------------------- Getränke ---------------------------------//
//------------------------------- Getränke ---------------------------------//
cappuccino_btn.onclick = function() {
    add_Item(cappuccino_amount, cappuccino, cappuccino_ID);
}
cappuccino_amount.onclick = function() {
    remove_Item(cappuccino_amount, cappuccino, cappuccino_ID);
}
multivitamin01_btn.onclick = function() {
    add_Item(multivitamin01_amount, multivitamin01, multivitamin01_ID);
}
multivitamin01_amount.onclick = function() {
    remove_Item(multivitamin01_amount, multivitamin01, multivitamin01_ID);
}
cola_btn.onclick = function() {
    add_Item(cola_amount, cola, cola_ID);
}
cola_amount.onclick = function() {
    remove_Item(cola_amount, cola, cola_ID);
}
schwarzertee_btn.onclick = function() {
    add_Item(schwarzertee_amount, schwarzertee, schwarzertee_ID);
}
schwarzertee_amount.onclick = function() {
    remove_Item(schwarzertee_amount, schwarzertee, schwarzertee_ID);
}
kamile_btn.onclick = function() {
    add_Item(kamile_amount, kamile, kamile_ID);
}
kamile_amount.onclick = function() {
    remove_Item(kamile_amount, kamile, kamile_ID);
}
kümmel_btn.onclick = function() {
    add_Item(kümmel_amount, kümmel, kümmel_ID);
}
kümmel_amount.onclick = function() {
    remove_Item(kümmel_amount, kümmel, kümmel_ID);
}


//------------------------------- Bäkerei ---------------------------------//
//------------------------------- Bäkerei ---------------------------------//
apfelecke_btn.onclick = function() {
    add_Item(apfelecke_amount, apfelecke, apfelecke_ID);
}
apfelecke_amount.onclick = function() {
    remove_Item(apfelecke_amount, apfelecke, apfelecke_ID);
}
laugenecke_btn.onclick = function() {
    add_Item(laugenecke_amount, laugenecke, laugenecke_ID);
}
laugenecke_amount.onclick = function() {
    remove_Item(laugenecke_amount, laugenecke, laugenecke_ID);
}
buttercroissant_btn.onclick = function() {
    add_Item(buttercroissant_amount, buttercroissant, buttercroissant_ID);
}
buttercroissant_amount.onclick = function() {
    remove_Item(buttercroissant_amount, buttercroissant, buttercroissant_ID);
}
spinatFeta_btn.onclick = function() {
    add_Item(spinatFeta_amount, spinatFeta, spinatFeta_ID);
}
spinatFeta_amount.onclick = function() {
    remove_Item(spinatFeta_amount, spinatFeta, spinatFeta_ID);
}
ciabatta_btn.onclick = function() {
    add_Item(ciabatta_amount, ciabatta, ciabatta_ID);
}
ciabatta_amount.onclick = function() {
    remove_Item(ciabatta_amount, ciabatta, ciabatta_ID);
}
donut_btn.onclick = function() {
    add_Item(donut_amount, donut, donut_ID);
}
donut_amount.onclick = function() {
    remove_Item(donut_amount, donut, donut_ID);
}
eiweiß_btn.onclick = function() {
    add_Item(eiweiß_amount, eiweiß, eiweiß_ID);
}
eiweiß_amount.onclick = function() {
    remove_Item(eiweiß_amount, eiweiß, eiweiß_ID);
}
franzbrötchen_btn.onclick = function() {
    add_Item(franzbrötchen_amount, franzbrötchen, franzbrötchen_ID);
}
franzbrötchen_amount.onclick = function() {
    remove_Item(franzbrötchen_amount, franzbrötchen, franzbrötchen_ID);
}
laugenbrezel_btn.onclick = function() {
    add_Item(laugenbrezel_amount, laugenbrezel, laugenbrezel_ID);
}
laugenbrezel_amount.onclick = function() {
    remove_Item(laugenbrezel_amount, laugenbrezel, laugenbrezel_ID);
}
laugenzopf_btn.onclick = function() {
    add_Item(laugenzopf_amount, laugenzopf, laugenzopf_ID);
}
laugenzopf_amount.onclick = function() {
    remove_Item(laugenzopf_amount, laugenzopf, laugenzopf_ID);
}
meisterbaguette_btn.onclick = function() {
    add_Item(meisterbaguette_amount, meisterbaguette, meisterbaguette_ID);
}
meisterbaguette_amount.onclick = function() {
    remove_Item(meisterbaguette_amount, meisterbaguette, meisterbaguette_ID);
}
nougatBerliner_btn.onclick = function() {
    add_Item(nougatBerliner_amount, nougatBerliner, nougatBerliner_ID);
}
nougatBerliner_amount.onclick = function() {
    remove_Item(nougatBerliner_amount, nougatBerliner, nougatBerliner_ID);
}
nussCroissant_btn.onclick = function() {
    add_Item(nussCroissant_amount, nussCroissant, nussCroissant_ID);
}
nussCroissant_amount.onclick = function() {
    remove_Item(nussCroissant_amount, nussCroissant, nussCroissant_ID);
}
pizzaMargeritta_btn.onclick = function() {
    add_Item(pizzaMargeritta_amount, pizzaMargeritta, pizzaMargeritta_ID);
}
pizzaMargeritta_amount.onclick = function() {
    remove_Item(pizzaMargeritta_amount, pizzaMargeritta, pizzaMargeritta_ID);
}
rosenbrötchen_btn.onclick = function() {
    add_Item(rosenbrötchen_amount, rosenbrötchen, rosenbrötchen_ID);
}
rosenbrötchen_amount.onclick = function() {
    remove_Item(rosenbrötchen_amount, rosenbrötchen, rosenbrötchen_ID);
}
sesamring_btn.onclick = function() {
    add_Item(sesamring_amount, sesamring, sesamring_ID);
}
sesamring_amount.onclick = function() {
    remove_Item(sesamring_amount, sesamring, sesamring_ID);
}
sonnenkrüstchen_btn.onclick = function() {
    add_Item(sonnenkrüstchen_amount, sonnenkrüstchen, sonnenkrüstchen_ID);
}
sonnenkrüstchen_amount.onclick = function() {
    remove_Item(sonnenkrüstchen_amount, sonnenkrüstchen, sonnenkrüstchen_ID);
}
vanillestange_btn.onclick = function() {
    add_Item(vanillestange_amount, vanillestange, vanillestange_ID);
}
vanillestange_amount.onclick = function() {
    remove_Item(vanillestange_amount, vanillestange, vanillestange_ID);
}
walnussbrötchen_btn.onclick = function() {
    add_Item(walnussbrötchen_amount, walnussbrötchen, walnussbrötchen_ID);
}
walnussbrötchen_amount.onclick = function() {
    remove_Item(walnussbrötchen_amount, walnussbrötchen, walnussbrötchen_ID);
}
weizenbrötchen_btn.onclick = function() {
    add_Item(weizenbrötchen_amount, weizenbrötchen, weizenbrötchen_ID);
}
weizenbrötchen_amount.onclick = function() {
    remove_Item(weizenbrötchen_amount, weizenbrötchen, weizenbrötchen_ID);
}
weltmeister_btn.onclick = function() {
    add_Item(weltmeister_amount, weltmeister, weltmeister_ID);
}
weltmeister_amount.onclick = function() {
    remove_Item(weltmeister_amount, weltmeister, weltmeister_ID);
}


//------------------------------- Haushalt ---------------------------------//
//------------------------------- Haushalt ---------------------------------//
kosmetiktücher_btn.onclick = function() {
    add_Item(kosmetiktücher_amount, kosmetiktücher, kosmetiktücher_ID);
}
kosmetiktücher_amount.onclick = function() {
    remove_Item(kosmetiktücher_amount, kosmetiktücher, kosmetiktücher_ID);
}
kosmetiktücher02_btn.onclick = function() {
    add_Item(kosmetiktücher02_amount, kosmetiktücher02, kosmetiktücher02_ID);
}
kosmetiktücher02_amount.onclick = function() {
    remove_Item(kosmetiktücher02_amount, kosmetiktücher02, kosmetiktücher02_ID);
}
wc_reiniger_btn.onclick = function() {
    add_Item(wc_reiniger_amount, wc_reiniger, wc_reiniger_ID);
}
wc_reiniger_amount.onclick = function() {
    remove_Item(wc_reiniger_amount, wc_reiniger, wc_reiniger_ID);
}
bad_reiniger_btn.onclick = function() {
    add_Item(bad_reiniger_amount, bad_reiniger, bad_reiniger_ID);
}
bad_reiniger_amount.onclick = function() {
    remove_Item(bad_reiniger_amount, bad_reiniger, bad_reiniger_ID);
}
granatapfelseife_btn.onclick = function() {
    add_Item(granatapfelseife_amount, granatapfelseife, granatapfelseife_ID);
}
granatapfelseife_amount.onclick = function() {
    remove_Item(granatapfelseife_amount, granatapfelseife, granatapfelseife_ID);
}
seifenstuck_btn.onclick = function() {
    add_Item(seifenstuck_amount, seifenstuck, seifenstuck_ID);
}
seifenstuck_amount.onclick = function() {
    remove_Item(seifenstuck_amount, seifenstuck, seifenstuck_ID);
}
duschgel_btn.onclick = function() {
    add_Item(duschgel_amount, duschgel, duschgel_ID);
}
duschgel_amount.onclick = function() {
    remove_Item(duschgel_amount, duschgel, duschgel_ID);
}
antitranspirant_btn.onclick = function() {
    add_Item(antitranspirant_amount, antitranspirant, antitranspirant_ID);
}
antitranspirant_amount.onclick = function() {
    remove_Item(antitranspirant_amount, antitranspirant, antitranspirant_ID);
}
zahnpaste_btn.onclick = function() {
    add_Item(zahnpaste_amount, zahnpaste, zahnpaste_ID);
}
zahnpaste_amount.onclick = function() {
    remove_Item(zahnpaste_amount, zahnpaste, zahnpaste_ID);
}
mundspulung_btn.onclick = function() {
    add_Item(mundspulung_amount, mundspulung, mundspulung_ID);
}
mundspulung_amount.onclick = function() {
    remove_Item(mundspulung_amount, mundspulung, mundspulung_ID);
}
haarfarbe_btn.onclick = function() {
    add_Item(haarfarbe_amount, haarfarbe, haarfarbe_ID);
}
haarfarbe_amount.onclick = function() {
    remove_Item(haarfarbe_amount, haarfarbe, haarfarbe_ID);
}
toilettenpapier_btn.onclick = function() {
    add_Item(toilettenpapier_amount, toilettenpapier, toilettenpapier_ID);
}
toilettenpapier_amount.onclick = function() {
    remove_Item(toilettenpapier_amount, toilettenpapier, toilettenpapier_ID);
}
toilettenpapier02_btn.onclick = function() {
    add_Item(toilettenpapier02_amount, toilettenpapier02, toilettenpapier02_ID);
}
toilettenpapier02_amount.onclick = function() {
    remove_Item(toilettenpapier02_amount, toilettenpapier02, toilettenpapier02_ID);
}
schaumaShampoo_btn.onclick = function() {
    add_Item(schaumaShampoo_amount, schaumaShampoo, schaumaShampoo_ID);
}
schaumaShampoo_amount.onclick = function() {
    remove_Item(schaumaShampoo_amount, schaumaShampoo, schaumaShampoo_ID);
}
balsam_btn.onclick = function() {
    add_Item(balsam_amount, balsam, balsam_ID);
}
balsam_amount.onclick = function() {
    remove_Item(balsam_amount, balsam, balsam_ID);
}
handhygiene_btn.onclick = function() {
    add_Item(handhygiene_amount, handhygiene, handhygiene_ID);
}
handhygiene_amount.onclick = function() {
    remove_Item(handhygiene_amount, handhygiene, handhygiene_ID);
}
hygienespüler_btn.onclick = function() {
    add_Item(hygienespüler_amount, hygienespüler, hygienespüler_ID);
}
hygienespüler_amount.onclick = function() {
    remove_Item(hygienespüler_amount, hygienespüler, hygienespüler_ID);
}
rasierschaum_btn.onclick = function() {
    add_Item(rasierschaum_amount, rasierschaum, rasierschaum_ID);
}
rasierschaum_amount.onclick = function() {
    remove_Item(rasierschaum_amount, rasierschaum, rasierschaum_ID);
}
vollwaschmittel_btn.onclick = function() {
    add_Item(vollwaschmittel_amount, vollwaschmittel, vollwaschmittel_ID);
}
vollwaschmittel_amount.onclick = function() {
    remove_Item(vollwaschmittel_amount, vollwaschmittel, vollwaschmittel_ID);
}
vitamin_btn.onclick = function() {
    add_Item(vitamin_amount, vitamin, vitamin_ID);
}
vitamin_amount.onclick = function() {
    remove_Item(vitamin_amount, vitamin, vitamin_ID);
}
damenbinden01_btn.onclick = function() {
    add_Item(damenbinden01_amount, damenbinden01, damenbinden01_ID);
}
damenbinden01_amount.onclick = function() {
    remove_Item(damenbinden01_amount, damenbinden01, damenbinden01_ID);
}
damenbinden02_btn.onclick = function() {
    add_Item(damenbinden02_amount, damenbinden02, damenbinden02_ID);
}
damenbinden02_amount.onclick = function() {
    remove_Item(damenbinden02_amount, damenbinden02, damenbinden02_ID);
}
damenbinden03_btn.onclick = function() {
    add_Item(damenbinden03_amount, damenbinden03, damenbinden03_ID);
}
damenbinden03_amount.onclick = function() {
    remove_Item(damenbinden03_amount, damenbinden03, damenbinden03_ID);
}
einwegrasierermänner_btn.onclick = function() {
    add_Item(einwegrasierermänner_amount, einwegrasierermänner, einwegrasierermänner_ID);
}
einwegrasierermänner_amount.onclick = function() {
    remove_Item(einwegrasierermänner_amount, einwegrasierermänner, einwegrasierermänner_ID);
}
einwegrasiererdamen_btn.onclick = function() {
    add_Item(einwegrasiererdamen_amount, einwegrasiererdamen, einwegrasiererdamen_ID);
}
einwegrasiererdamen_amount.onclick = function() {
    remove_Item(einwegrasiererdamen_amount, einwegrasiererdamen, einwegrasiererdamen_ID);
}


//------------------------------- pizza ---------------------------------//
//------------------------------- pizza ---------------------------------//
pizza01_btn.onclick = function() {
    add_Item(pizza01_amount, pizza01, pizza01_ID);
}
pizza01_amount.onclick = function() {
    remove_Item(pizza01_amount, pizza01, pizza01_ID);
}
baugette_btn.onclick = function() {
    add_Item(baugette_amount, baugette, baugette_ID);
}
baugette_amount.onclick = function() {
    remove_Item(baugette_amount, baugette, baugette_ID);
}


//------------------------------- Gemüse ---------------------------------//
//------------------------------- Gemüse ---------------------------------//
tomaten_btn.onclick = function() {
    add_Item(tomaten_amount, tomaten, tomaten_ID);
}
tomaten_amount.onclick = function() {
    remove_Item(tomaten_amount, tomaten, tomaten_ID);
}
gurcke_btn.onclick = function() {
    add_Item(gurcke_amount, gurcke, gurcke_ID);
}
gurcke_amount.onclick = function() {
    remove_Item(gurcke_amount, gurcke, gurcke_ID);
}
zucchini_btn.onclick = function() {
    add_Item(zucchini_amount, zucchini, zucchini_ID);
}
zucchini_amount.onclick = function() {
    remove_Item(zucchini_amount, zucchini, zucchini_ID);
}
eisbergsalat_btn.onclick = function() {
    add_Item(eisbergsalat_amount, eisbergsalat, eisbergsalat_ID);
}
eisbergsalat_amount.onclick = function() {
    remove_Item(eisbergsalat_amount, eisbergsalat, eisbergsalat_ID);
}



//------------------------------- Obst ---------------------------------//
//------------------------------- Obst ---------------------------------//
apfel_btn.onclick = function() {
    add_Item(apfel_amount, apfel, apfel_ID);
}
apfel_amount.onclick = function() {
    remove_Item(apfel_amount, apfel, apfel_ID);
}
banana_btn.onclick = function() {
    add_Item(banana_amount, banana, banana_ID);
}
banana_amount.onclick = function() {
    remove_Item(banana_amount, banana, banana_ID);
}
kirsche_btn.onclick = function() {
    add_Item(kirsche_amount, kirsche, kirsche_ID);
}
kirsche_amount.onclick = function() {
    remove_Item(kirsche_amount, kirsche, kirsche_ID);
}
mandarin_btn.onclick = function() {
    add_Item(mandarin_amount, mandarin, mandarin_ID);
}
mandarin_amount.onclick = function() {
    remove_Item(mandarin_amount, mandarin, mandarin_ID);
}
orange_btn.onclick = function() {
    add_Item(orange_amount, orange, orange_ID);
}
orange_amount.onclick = function() {
    remove_Item(orange_amount, orange, orange_ID);
}


//------------------------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------Functions---------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------------------//
let sum = 0;

function add_Item(x, z, i) {
    x.innerText = parseInt(x.innerText) + 1;
    
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
        
        document.querySelector(".n_" + i).style.width = "150px";
        document.querySelector(".n_" + i).style.paddingTop = "10px";
        document.querySelector(".a_" + i).style.paddingTop = "10px";
        document.querySelector(".p_" + i).style.paddingTop = "10px";

        document.querySelector(".n_" + i).innerText = document.querySelector(".proName" + "." + i).innerText;
        document.querySelector(".a_" + i).innerText = x.innerText;
        document.querySelector(".p_" + i).innerText = z * parseInt(x.innerText);
        
        document.querySelector(".kasseBtn." + i).style.transform = "scaleX(100%)";
        document.querySelector(".kasseBtn." + i + " a").style.left = "4px";

        //-- Add Div
        const sack = document.createElement("div");
        document.querySelector(".myOrder").appendChild(sack);
        sack.classList.add("order");
        sack.classList.add(i);

        document.querySelector(".order." + i).onclick = function(){
            if(x.innerText > 0 && x.innerText < 2){
                x.innerText = parseInt(x.innerText) - 1;
                
                document.querySelector(".kasseBtn." + i).style.transform = "translateX(-20px) scaleX(1%)";
                document.querySelector(".kasseBtn." + i + " a").style.left = "65px";
        
                sum = 0;
        
                document.querySelector(".order." + i).remove();
                document.querySelector(".div_" + i).remove();
                document.querySelector(".n_" + i).remove();
                document.querySelector(".a_" + i).remove();
                document.querySelector(".p_" + i).remove();
            }
            if(x.innerText > 1){
                x.innerText = parseInt(x.innerText) - 1;
                document.querySelector(".a_" + i).innerText = x.innerText;
                document.querySelector(".p_" + i).innerText = z * parseInt(x.innerText);
                        
                document.querySelector(".amount." + i).innerText = document.querySelector(".a_" + i).innerText;
        
                sum = (sum * 100) - (z * 100);
                sum /= 100;
            }
        }
        //-- Add Image
        const myImg = document.querySelector("." + i + "_img");
        const attr = myImg.src;
        const productImg = document.createElement("img");
        sack.appendChild(productImg);
        productImg.classList.add("image");
        productImg.classList.add(i);
        document.querySelector(".image." + i).setAttribute("src", attr);
        //-- Add Amount Space
        const amountSpace = document.createElement("div");
        sack.appendChild(amountSpace);
        amountSpace.classList.add("amount");
        amountSpace.classList.add(i);
        amountSpace.innerText = x.innerText;

        sum = (sum * 100) + (z * 100);
        sum /= 100;        
    }
    if(x.innerText > 1){
        document.querySelector(".a_" + i).innerText = x.innerText;
        document.querySelector(".p_" + i).innerText = z * parseInt(x.innerText);
        
        document.querySelector(".amount." + i).innerText = document.querySelector(".a_" + i).innerText;

        sum = (sum * 100) + (z * 100);
        sum /= 100;
    }
}
function remove_Item(x, z, i) {
    if(x.innerText > 0 && x.innerText < 2){
        x.innerText = parseInt(x.innerText) - 1;
        
        document.querySelector(".kasseBtn." + i).style.transform = "translateX(-20px) scaleX(1%)";
        document.querySelector(".kasseBtn." + i + " a").style.left = "65px";

        sum = 0;

        document.querySelector(".order." + i).remove();
        document.querySelector(".div_" + i).remove();
        document.querySelector(".n_" + i).remove();
        document.querySelector(".a_" + i).remove();
        document.querySelector(".p_" + i).remove();
    }
    if(x.innerText > 1){
        x.innerText = parseInt(x.innerText) - 1;
        document.querySelector(".a_" + i).innerText = x.innerText;
        document.querySelector(".p_" + i).innerText = z * parseInt(x.innerText);
                
        document.querySelector(".amount." + i).innerText = document.querySelector(".a_" + i).innerText;

        sum = (sum * 100) - (z * 100);
        sum /= 100;
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


document.querySelector(".myList").onclick = function(){
    document.querySelector(".myList").classList.toggle("flipMe");
    document.querySelector(".pocketIcon").classList.toggle("appear");
    document.querySelector(".listIcon").classList.toggle("disappear");
    document.querySelector(".myOrder").classList.toggle("openMyOrder");
}


