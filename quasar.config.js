/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js

const { configure } = require('quasar/wrappers'),
  envparser = require('./src/config/envparser.js'),
  SitemapPlugin = require('sitemap-webpack-plugin').default,
  CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = [
  { path: '/' },
  { path: '/my-account' },
  { path: '/blogs' },
  { path: '/bakerys' },
  { path: '/products' },
  {
    path: "/bakery/boulangerie-l-atelier-de-l-ozanne-barjouville"
  },
  {
    path: "/bakery/boulangerie-l-atelier-de-l-ozanne-chateaudun"
  },
  {
    path: "/bakery/boulangerie-l-atelier-de-l-ozanne-le-mans"
  },
  {
    path: "/bakery/boulangerie-de-tossiat"
  },
  {
    path: "/bakery/peronne-fabrice"
  },
  {
    path: "/bakery/peronnet"
  },
  {
    path: "/bakery/peronnet-olivier"
  },
  {
    path: "/bakery/boulangerie-patisserie-eric-et-sandrine"
  },
  {
    path: "/bakery/boulangerie-maison-peronne"
  },
  {
    path: "/bakery/fournil-du-saint-bernard"
  },
  {
    path: "/bakery/boulangerie-patisserie-de-saint-bernard"
  },
  {
    path: "/bakery/martinet-eric"
  },
  {
    path: "/bakery/la-ferme-du-bois-rouland"
  },
  {
    path: "/bakery/o-saveurs-d-ancenis"
  },
  {
    path: "/bakery/boulangerie-bois-et-levain"
  },
  {
    path: "/bakery/patissier-chocolatier-poncin-daniel"
  },
  {
    path: "/bakery/epicuria-sucre-sale"
  },
  {
    path: "/bakery/maison-floran"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie"
  },
  {
    path: "/bakery/fischer"
  },
  {
    path: "/bakery/au-vieux-fournil"
  },
  {
    path: "/bakery/au-vieux-petrin"
  },
  {
    path: "/bakery/au-vieux-four"
  },
  {
    path: "/bakery/au-vieux-petrin-2"
  },
  {
    path: "/bakery/fournil-du-vieux-moulin-cecile-peschaud"
  },
  {
    path: "/bakery/patisserie-thillard"
  },
  {
    path: "/bakery/thillerot-franck-daniiel"
  },
  {
    path: "/bakery/thillerot-christophe-christophe"
  },
  {
    path: "/bakery/boulangerie-du-thil"
  },
  {
    path: "/bakery/boulangerie-thillard"
  },
  {
    path: "/bakery/baland-pau"
  },
  {
    path: "/bakery/baland-arsenal"
  },
  {
    path: "/bakery/pain-snacking-baland-auch"
  },
  {
    path: "/bakery/le-fournil-de-briord"
  },
  {
    path: "/bakery/boulangerie-saint-cyr"
  },
  {
    path: "/bakery/la-fleur-du-pain"
  },
  {
    path: "/bakery/boulangerie-le-saint-eloi"
  },
  {
    path: "/bakery/la-gourmandise"
  },
  {
    path: "/bakery/la-mazarine"
  },
  {
    path: "/bakery/boulangerie-galzin"
  },
  {
    path: "/bakery/boulangerie-l-atelier-des-sens"
  },
  {
    path: "/bakery/au-pain-marie"
  },
  {
    path: "/bakery/le-fournil-la-chapelle-viviers"
  },
  {
    path: "/bakery/boulangerie"
  },
  {
    path: "/bakery/boulangerie-2"
  },
  {
    path: "/bakery/boulangerie-saint-benoît"
  },
  {
    path: "/bakery/le-moulin-saint-benoit"
  },
  {
    path: "/bakery/boulangerie-saint-benoît-2"
  },
  {
    path: "/bakery/atelier-boutique-bouillet-miribel"
  },
  {
    path: "/bakery/villeneuve-pascal"
  },
  {
    path: "/bakery/boulangerie-villeneuve"
  },
  {
    path: "/bakery/boulangerie-villeneuve-minervois"
  },
  {
    path: "/bakery/boulangerie-de-l-eglise-saint-justin"
  },
  {
    path: "/bakery/le-boulanger-de-saint-just"
  },
  {
    path: "/bakery/boulangerie-patisserie-augusta-civrieux"
  },
  {
    path: "/bakery/be-my-cookie-rue-du-pas-saint-georges"
  },
  {
    path: "/bakery/aux-gourmandises-d-isa-et-nico"
  },
  {
    path: "/bakery/le-fournil-de-saint-georges"
  },
  {
    path: "/bakery/aux-deux-epis"
  },
  {
    path: "/bakery/maison-beaumont"
  },
  {
    path: "/bakery/au-fournil-d-allemans"
  },
  {
    path: "/bakery/la-pierre-a-pain"
  },
  {
    path: "/bakery/boulangerie-patisserie-o-delices"
  },
  {
    path: "/bakery/boulangerie-bobichon"
  },
  {
    path: "/bakery/saint-julien"
  },
  {
    path: "/bakery/fournil-saint-julien"
  },
  {
    path: "/bakery/boulangerie-st-julien"
  },
  {
    path: "/bakery/boulangerie-patisserie-le-st-julien"
  },
  {
    path: "/bakery/chez-bol-le-pain-de-villemotier-le-relais-de-villemotier"
  },
  {
    path: "/bakery/frans"
  },
  {
    path: "/bakery/au-fournil-de-lille-boulangerie-patisserie-fransois-olivier"
  },
  {
    path: "/bakery/boulangerie-fransois"
  },
  {
    path: "/bakery/bager"
  },
  {
    path: "/bakery/l-atelier-lagnieu"
  },
  {
    path: "/bakery/sunyer-andre-maitre-artisan"
  },
  {
    path: "/bakery/boulangerie-patisserie-crozet"
  },
  {
    path: "/bakery/camille-crozet-patisserie"
  },
  {
    path: "/bakery/boulangerie-de-versonnex"
  },
  {
    path: "/bakery/boulangerie-patisserie-ly-sow"
  },
  {
    path: "/bakery/boulangerie-saint-laurent"
  },
  {
    path: "/bakery/boulangerie-saint-laurent-2"
  },
  {
    path: "/bakery/saint-remy"
  },
  {
    path: "/bakery/boulangerie-st-remy"
  },
  {
    path: "/bakery/delbe-didier"
  },
  {
    path: "/bakery/dulin-pascal-herve-didier"
  },
  {
    path: "/bakery/saint-didier"
  },
  {
    path: "/bakery/boulangerie-epicerie-saint-sulpice"
  },
  {
    path: "/bakery/aux-douceurs-de-collonges"
  },
  {
    path: "/bakery/benyahia-cherife"
  },
  {
    path: "/bakery/aux-delices-de-beny"
  },
  {
    path: "/bakery/l-epinette"
  },
  {
    path: "/bakery/cumpanis"
  },
  {
    path: "/bakery/maison-letellier-🍫🥐"
  },
  {
    path: "/bakery/boulangerie-saint-martin"
  },
  {
    path: "/bakery/boulangerie-du-clos-saint-martin"
  },
  {
    path: "/bakery/boulangerie-ange"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-2"
  },
  {
    path: "/bakery/chez-paillat-le-boulanger"
  },
  {
    path: "/bakery/au-fournil-de-saint-maurice"
  },
  {
    path: "/bakery/boulangerie-saint-maurice"
  },
  {
    path: "/bakery/boulangerie-au-vieux-four-cancalais"
  },
  {
    path: "/bakery/boulangerie-le-vieux-four-fabrication-a-l-ancienne-cuisson-naturelle-au-bois-longue-conservation"
  },
  {
    path: "/bakery/soulabaille"
  },
  {
    path: "/bakery/le-petit-fournil"
  },
  {
    path: "/bakery/boulangerie-ange-2"
  },
  {
    path: "/bakery/le-fournil-de-coligny"
  },
  {
    path: "/bakery/boulangerie-le-fournil-de-coligny-patisserie"
  },
  {
    path: "/bakery/maison-bettant"
  },
  {
    path: "/bakery/boulangerie-de-montluel"
  },
  {
    path: "/bakery/beyer-damien"
  },
  {
    path: "/bakery/patisserie-beyer"
  },
  {
    path: "/bakery/les-gateaux-du-bey"
  },
  {
    path: "/bakery/delices-beyatatra"
  },
  {
    path: "/bakery/maison-beyaz"
  },
  {
    path: "/bakery/les-delices-de-saint-marcel"
  },
  {
    path: "/bakery/maison-dolce"
  },
  {
    path: "/bakery/marcel-et-cavazza"
  },
  {
    path: "/bakery/maison-planchot-saint-paul"
  },
  {
    path: "/bakery/maison-le-gouallec-reze"
  },
  {
    path: "/bakery/boulangerie-saint-paul-maison-farine-lyon"
  },
  {
    path: "/bakery/boulangerie-saint-paul"
  },
  {
    path: "/bakery/gironde-specialites"
  },
  {
    path: "/bakery/boulangerie-patisserie-girondon"
  },
  {
    path: "/bakery/le-fournil-girondin"
  },
  {
    path: "/bakery/le-fournil-girondin-2"
  },
  {
    path: "/bakery/fournil-des-girondins"
  },
  {
    path: "/bakery/l-hopitalier-alain-pierre"
  },
  {
    path: "/bakery/portland-by-nicolas-adam"
  },
  {
    path: "/bakery/porte-de-vanves"
  },
  {
    path: "/bakery/port-de-piles"
  },
  {
    path: "/bakery/maison-portelada"
  },
  {
    path: "/bakery/le-fournil-de-la-colline"
  },
  {
    path: "/bakery/boulangerie-patisserie-joseph-andre"
  },
  {
    path: "/bakery/boulangerie-maxime-revidat"
  },
  {
    path: "/bakery/la-germinoise"
  },
  {
    path: "/bakery/boulangerie-simonetti"
  },
  {
    path: "/bakery/boulangerie-brion"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-chevillard-artisan-snacking"
  },
  {
    path: "/bakery/l-entrepot-du-pain"
  },
  {
    path: "/bakery/l-entressens"
  },
  {
    path: "/bakery/l-entremet"
  },
  {
    path: "/bakery/l-entartee"
  },
  {
    path: "/bakery/l-entremets-gourmand"
  },
  {
    path: "/bakery/denis"
  },
  {
    path: "/bakery/ewan-jeme-boulangerie-patisserie"
  },
  {
    path: "/bakery/bourau-olivier"
  },
  {
    path: "/bakery/chevalier-romain"
  },
  {
    path: "/bakery/le-moulin-de-chevry"
  },
  {
    path: "/bakery/boulangerie-saint-jean"
  },
  {
    path: "/bakery/boulangerie-saint-jean-2"
  },
  {
    path: "/bakery/de-sousa-brito"
  },
  {
    path: "/bakery/boulangerie-saint-jean-3"
  },
  {
    path: "/bakery/boulangerie-de-saint-jean"
  },
  {
    path: "/bakery/patisserie-saint-andre-letendart"
  },
  {
    path: "/bakery/boulangerie-&-biscuits-joyeux-dinard"
  },
  {
    path: "/bakery/l-atelier-joyeux-boulangerie-&-cafe"
  },
  {
    path: "/bakery/maison-joyeux-boulangerie-&-salon-de-the"
  },
  {
    path: "/bakery/boulangerie-patisserie-joyeux-la-madeleine"
  },
  {
    path: "/bakery/biscuits-joyeux-saint-malo-rocabey"
  },
  {
    path: "/bakery/la-paniere-gex"
  },
  {
    path: "/bakery/boulangerie-des-3-fontaines-centre-commercial-les-3-fontaines-gare-cergy-prefecture"
  },
  {
    path: "/bakery/lorette-boulangerie-patisserie-glacier"
  },
  {
    path: "/bakery/lorette-boulangerie-patisserie"
  },
  {
    path: "/bakery/lorette-boulangerie-patisserie-glacier-2"
  },
  {
    path: "/bakery/lorette-boulangerie-pains-bio"
  },
  {
    path: "/bakery/lorentz-patissier-traiteur"
  },
  {
    path: "/bakery/maison-planchot-montaigu"
  },
  {
    path: "/bakery/maison-pascalis-romans-sur-isere"
  },
  {
    path: "/bakery/maison-pascalis-chanos-curson"
  },
  {
    path: "/bakery/maison-pascalis-valence"
  },
  {
    path: "/bakery/lili-croustille"
  },
  {
    path: "/bakery/lionneton"
  },
  {
    path: "/bakery/oisy-club"
  },
  {
    path: "/bakery/l-angle-gourmand"
  },
  {
    path: "/bakery/le-fournil-des-menhirs"
  },
  {
    path: "/bakery/boulangerie-la-brossardise"
  },
  {
    path: "/bakery/moulins-de-saint-armel"
  },
  {
    path: "/bakery/moulins-du-terrier-marteau"
  },
  {
    path: "/bakery/moulins-bourgeois"
  },
  {
    path: "/bakery/le-moulin-de-bruges"
  },
  {
    path: "/bakery/boulangerie-pithon"
  },
  {
    path: "/bakery/aux-perles-de-l-etang"
  },
  {
    path: "/bakery/la-perle-a-pain-pain"
  },
  {
    path: "/bakery/une-perle-gourmande-gateaux-personnalises"
  },
  {
    path: "/bakery/les-perles-de-sab"
  },
  {
    path: "/bakery/les-perles-a-painpain"
  },
  {
    path: "/bakery/au-ble-d-or"
  },
  {
    path: "/bakery/au-ble-sucre"
  },
  {
    path: "/bakery/au-ble-d-or-2"
  },
  {
    path: "/bakery/au-ble-d-or-3"
  },
  {
    path: "/bakery/boulangerie-du-monteil"
  },
  {
    path: "/bakery/patisserie-le-mont-blanc"
  },
  {
    path: "/bakery/au-pain-montagnard"
  },
  {
    path: "/bakery/le-montagu"
  },
  {
    path: "/bakery/la-vallee"
  },
  {
    path: "/bakery/boulangerie-la-vallee"
  },
  {
    path: "/bakery/chatrieux-james"
  },
  {
    path: "/bakery/laon-vie-gourmande"
  },
  {
    path: "/bakery/boulangerie-goubet"
  },
  {
    path: "/bakery/lemaire-sueur"
  },
  {
    path: "/bakery/boulangerie-du-marche"
  },
  {
    path: "/bakery/boulangerie-de-seraincourt"
  },
  {
    path: "/bakery/patisserie-nouvelle-cappa"
  },
  {
    path: "/bakery/la-boulangerie-de-marlene"
  },
  {
    path: "/bakery/boulangerie-patisserie-marlau"
  },
  {
    path: "/bakery/au-bourd-euphro"
  },
  {
    path: "/bakery/la-fournee-marlesienne"
  },
  {
    path: "/bakery/le-meunier-d-eyrans"
  },
  {
    path: "/bakery/boulangerie-lemee"
  },
  {
    path: "/bakery/boulangerie-lemee-2"
  },
  {
    path: "/bakery/patisserie-le-meur"
  },
  {
    path: "/bakery/maison-pommiers"
  },
  {
    path: "/bakery/bouetard-laurent"
  },
  {
    path: "/bakery/bouet-pascal"
  },
  {
    path: "/bakery/boue-bourdel-paulette-eliane"
  },
  {
    path: "/bakery/le-bouedec-sebastien"
  },
  {
    path: "/bakery/st-michel-guingamp"
  },
  {
    path: "/bakery/st-michel-commercy"
  },
  {
    path: "/bakery/usine-biscuiterie-st-michel"
  },
  {
    path: "/bakery/l-atelier-st-michel-chef-chef"
  },
  {
    path: "/bakery/la-boulangerie-de-saint-michel"
  },
  {
    path: "/bakery/le-fournil-de-castres"
  },
  {
    path: "/bakery/boulangerie-de-neuilly-saint-front"
  },
  {
    path: "/bakery/sissi-s-cupcakes"
  },
  {
    path: "/bakery/la-fournee-des-resteriens"
  },
  {
    path: "/bakery/boulangerie-fleury"
  },
  {
    path: "/bakery/fleury-laurent"
  },
  {
    path: "/bakery/laurent-fleury"
  },
  {
    path: "/bakery/artisan-boulangerie-patisserie-de-fleury"
  },
  {
    path: "/bakery/a.-lacroix"
  },
  {
    path: "/bakery/boulangerie-fontenelle"
  },
  {
    path: "/bakery/leu-fontenelle"
  },
  {
    path: "/bakery/boulangerie-acikgoz"
  },
  {
    path: "/bakery/boulangerie-l-ancienne"
  },
  {
    path: "/bakery/au-pain-a-l-ancienne"
  },
  {
    path: "/bakery/le-fournil-a-l-ancienne"
  },
  {
    path: "/bakery/boulangerie-l-ancienne-2"
  },
  {
    path: "/bakery/a-l-ancienne-mairie"
  },
  {
    path: "/bakery/boulangerie-de-coeuvres-&-valsery"
  },
  {
    path: "/bakery/germaine-david-&-vanessa"
  },
  {
    path: "/bakery/boulangerie-patisserie-servais"
  },
  {
    path: "/bakery/boulangerie-patisserie-servais-2"
  },
  {
    path: "/bakery/la-baguette-d-hauteville"
  },
  {
    path: "/bakery/boulangerie-du-phare"
  },
  {
    path: "/bakery/boulangerie-saint-pierre"
  },
  {
    path: "/bakery/boulangerie-patisserie-saint-pierre"
  },
  {
    path: "/bakery/boulangerie-saint-pierre-2"
  },
  {
    path: "/bakery/boulangerie-patisserie-saint-pierre-2"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-fedila"
  },
  {
    path: "/bakery/la-magie-du-ble"
  },
  {
    path: "/bakery/le-petrin-d-augustin"
  },
  {
    path: "/bakery/boulangerie-montfaucon-g.c.b"
  },
  {
    path: "/bakery/villeret-nicolas"
  },
  {
    path: "/bakery/crouy-sur-ourcq"
  },
  {
    path: "/bakery/a-la-brioche-feuilletee"
  },
  {
    path: "/bakery/boulangerie-le-pain-du-c-oingt"
  },
  {
    path: "/bakery/boulangerie-d-ury"
  },
  {
    path: "/bakery/la-boulangerie-de-marcy-maison-blache"
  },
  {
    path: "/bakery/boulangerie-d-orgeval"
  },
  {
    path: "/bakery/julien-et-marine-duhamel-a-orgeval-boulangerie-patisserie"
  },
  {
    path: "/bakery/l-empire-des-pains"
  },
  {
    path: "/bakery/l-empire-des-sans"
  },
  {
    path: "/bakery/empire-du-pain"
  },
  {
    path: "/bakery/boulangerie-housset-st-gilles"
  },
  {
    path: "/bakery/boulangerie-housset-marigny"
  },
  {
    path: "/bakery/boulangerie-st-nicolas"
  },
  {
    path: "/bakery/boulangerie-saint-nicolas"
  },
  {
    path: "/bakery/saint-nicolas-gourmet"
  },
  {
    path: "/bakery/de-saint-nicolas"
  },
  {
    path: "/bakery/boulangerie-saint-nicolas-2"
  },
  {
    path: "/bakery/gricourt-roger-jean-charles"
  },
  {
    path: "/bakery/boulangerie-rosny-tradition"
  },
  {
    path: "/bakery/la-rosnylloise"
  },
  {
    path: "/bakery/krispy-kreme-rosny-2"
  },
  {
    path: "/bakery/boulangerie-d-oulchy-le-chateau"
  },
  {
    path: "/bakery/champs-pains"
  },
  {
    path: "/bakery/boulangerie-champs-libres"
  },
  {
    path: "/bakery/le-pain-des-champs-voisins"
  },
  {
    path: "/bakery/l-epi-des-champs"
  },
  {
    path: "/bakery/boulangerie-du-champ-de-mars"
  },
  {
    path: "/bakery/patisserie-saint-thomas"
  },
  {
    path: "/bakery/biscuiterie-saint-thomas"
  },
  {
    path: "/bakery/au-pain-d-antan-savy-berlette"
  },
  {
    path: "/bakery/boulangerie-de-limelette"
  },
  {
    path: "/bakery/aux-delices-de-bonneuil"
  },
  {
    path: "/bakery/boulangerie-de-la-halle"
  },
  {
    path: "/bakery/boulangerie-patisserie-saint-simon"
  },
  {
    path: "/bakery/boulangerie-brier"
  },
  {
    path: "/bakery/boulangerie-brier-2"
  },
  {
    path: "/bakery/boulangerie-briend"
  },
  {
    path: "/bakery/le-fournil-brieron"
  },
  {
    path: "/bakery/le-fournil-des-brierons"
  },
  {
    path: "/bakery/traiteur-auchan-epagny"
  },
  {
    path: "/bakery/beaumet-yann"
  },
  {
    path: "/bakery/beaumet"
  },
  {
    path: "/bakery/baumel-franck-germain"
  },
  {
    path: "/bakery/baumert-et-heinrich"
  },
  {
    path: "/bakery/suzy-et-arlette"
  },
  {
    path: "/bakery/suzygourmandises"
  },
  {
    path: "/bakery/feuillette-boulangerie"
  },
  {
    path: "/bakery/feuillete"
  },
  {
    path: "/bakery/boulangerie-feuillette"
  },
  {
    path: "/bakery/boulangerie-feuillette-2"
  },
  {
    path: "/bakery/boulangerie-feuillette-3"
  },
  {
    path: "/bakery/adam-christophe"
  },
  {
    path: "/bakery/audissergues-christophe"
  },
  {
    path: "/bakery/donuts-bar-by-shadow"
  },
  {
    path: "/bakery/briocherie-sicard"
  },
  {
    path: "/bakery/boulangerie-patisserie-thomas"
  },
  {
    path: "/bakery/boulangerie-de-la-marine"
  },
  {
    path: "/bakery/l-îlot-gourmandises"
  },
  {
    path: "/bakery/gouyet-pascal"
  },
  {
    path: "/bakery/gouy"
  },
  {
    path: "/bakery/boulangerie-de-l-epine"
  },
  {
    path: "/bakery/harry-s-france"
  },
  {
    path: "/bakery/harry-s-france-sas"
  },
  {
    path: "/bakery/les-delices-d-anizy"
  },
  {
    path: "/bakery/gauchy-christian"
  },
  {
    path: "/bakery/le-fournil-de-nere"
  },
  {
    path: "/bakery/la-mie-du-paysan"
  },
  {
    path: "/bakery/saint-palais-sur-mer"
  },
  {
    path: "/bakery/chatillon-en-bazois"
  },
  {
    path: "/bakery/boulangerie-patisserie-aux-delices-chatillonnais"
  },
  {
    path: "/bakery/boulangerie-patisserie-chatillonnaise-patrick-riquelme"
  },
  {
    path: "/bakery/le-fou-du-pain"
  },
  {
    path: "/bakery/domerat-maison-triboulet"
  },
  {
    path: "/bakery/kouign-amann-de-saint-malo"
  },
  {
    path: "/bakery/feeling-good-bakery"
  },
  {
    path: "/bakery/au-pain-des-traboules-le-flanboyant"
  },
  {
    path: "/bakery/douceurs-macarons"
  },
  {
    path: "/bakery/patisserie-carl-marletti"
  },
  {
    path: "/bakery/yzeure"
  },
  {
    path: "/bakery/boulangerie-maison-fouques-saint-leger"
  },
  {
    path: "/bakery/besson-alain"
  },
  {
    path: "/bakery/boulangerie-patisserie-besson"
  },
  {
    path: "/bakery/boulangerie-besson"
  },
  {
    path: "/bakery/sarl-fournil-olivan"
  },
  {
    path: "/bakery/au-petit-mitron"
  },
  {
    path: "/bakery/fournil-des-allees"
  },
  {
    path: "/bakery/fournil-d-artigues"
  },
  {
    path: "/bakery/fournil-du-marche-de-bassens"
  },
  {
    path: "/bakery/fournil-de-l-univers"
  },
  {
    path: "/bakery/fournil-stehelin"
  },
  {
    path: "/bakery/aux-delices-du-colombier"
  },
  {
    path: "/bakery/colombier"
  },
  {
    path: "/bakery/le-7eme-peche-saint-loup-geanges"
  },
  {
    path: "/bakery/le-fournil-de-saint-loup-bio-litzellmann"
  },
  {
    path: "/bakery/patisserie-saint-victor"
  },
  {
    path: "/bakery/la-saint-christophe"
  },
  {
    path: "/bakery/aux-desirs-de-manon"
  },
  {
    path: "/bakery/le-destin-du-gourmand"
  },
  {
    path: "/bakery/patisserie-dinger-beaucaire"
  },
  {
    path: "/bakery/l-artisan-du-pain"
  },
  {
    path: "/bakery/mercy-cake"
  },
  {
    path: "/bakery/farine-et-chocolat"
  },
  {
    path: "/bakery/boulangerie-la-foret-des-pains"
  },
  {
    path: "/bakery/la-foret-des-gourmandises"
  },
  {
    path: "/bakery/a-la-foret-noire"
  },
  {
    path: "/bakery/𝕷𝖊𝖘-𝕻𝖆𝖎𝖓𝖘-𝖉𝖊-𝖑𝖆-𝕱𝖔𝖗𝖊𝖙"
  },
  {
    path: "/bakery/boulangerie-de-la-foret"
  },
  {
    path: "/bakery/le-fournil-du-breuil"
  },
  {
    path: "/bakery/patisserie-chocolaterie-charmes-&-moi"
  },
  {
    path: "/bakery/boulangerie-le-herisson"
  },
  {
    path: "/bakery/l-herisson"
  },
  {
    path: "/bakery/le-herisson-gourmand"
  },
  {
    path: "/bakery/patissier-chocolatier-glacier-moles"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-vie-hauterives"
  },
  {
    path: "/bakery/patisserie-du-donjon"
  },
  {
    path: "/bakery/sensation-vanille"
  },
  {
    path: "/bakery/sensations-gourmandes"
  },
  {
    path: "/bakery/sensation-pain-boulangerie-bio"
  },
  {
    path: "/bakery/sensation"
  },
  {
    path: "/bakery/boulangerie-sensations"
  },
  {
    path: "/bakery/boulangerie-la-chapelle"
  },
  {
    path: "/bakery/boulangerie-la-chapelle-des-delices"
  },
  {
    path: "/bakery/emma-patisserie-boulangerie-la-chapelle-sur-erdre"
  },
  {
    path: "/bakery/aux-delices-de-saint-aubin"
  },
  {
    path: "/bakery/boulangerie-patisserie-saint-aubin"
  },
  {
    path: "/bakery/berthe-boulangerie-patisserie-paris-13-(service-traiteur)"
  },
  {
    path: "/bakery/bertrand-s-paris-notre-dame"
  },
  {
    path: "/bakery/berthe"
  },
  {
    path: "/bakery/berth-&-pain"
  },
  {
    path: "/bakery/berthe-boulangerie"
  },
  {
    path: "/bakery/vaux-sur-mer"
  },
  {
    path: "/bakery/aux-delices-du-vauxhall"
  },
  {
    path: "/bakery/chapeau-alain-daniel-robert"
  },
  {
    path: "/bakery/tonton-du-bread-boulangerie-patisserie-cafe-restaurant"
  },
  {
    path: "/bakery/aux-delices-de-croix-chapeau"
  },
  {
    path: "/bakery/maison-ardouin"
  },
  {
    path: "/bakery/boulangerie-saint-bonnet"
  },
  {
    path: "/bakery/le-fournil-saint-bonnet"
  },
  {
    path: "/bakery/murat-filo"
  },
  {
    path: "/bakery/murat-filo-2"
  },
  {
    path: "/bakery/murat-delices"
  },
  {
    path: "/bakery/boulangerie-&-snacking-murat"
  },
  {
    path: "/bakery/aux-cornets-de-murat-patisserie-hourlier"
  },
  {
    path: "/bakery/le-fournil-saint-leonard"
  },
  {
    path: "/bakery/boulangerie-saint-leonard"
  },
  {
    path: "/bakery/vicq-boulangerie"
  },
  {
    path: "/bakery/maillet-freres-sarl"
  },
  {
    path: "/bakery/boulangerie-maillet"
  },
  {
    path: "/bakery/les-delices-des-maillets"
  },
  {
    path: "/bakery/la-petite-du-marche"
  },
  {
    path: "/bakery/boulangerie-de-vicq-sur-nahon"
  },
  {
    path: "/bakery/la-grange-a-pains"
  },
  {
    path: "/bakery/saint-hilaire-d-ozilhan"
  },
  {
    path: "/bakery/boulangerie-saint-hilaire-bonneval"
  },
  {
    path: "/bakery/les-pains-de-saint-hilaire-belleme"
  },
  {
    path: "/bakery/boulangerie-bost"
  },
  {
    path: "/bakery/jean-luc-bost"
  },
  {
    path: "/bakery/maison-lemon"
  },
  {
    path: "/bakery/saint-sauvier-(-artisan-boulanger-patissier-)"
  },
  {
    path: "/bakery/maison-falco"
  },
  {
    path: "/bakery/le-puy-des-delices"
  },
  {
    path: "/bakery/puy-de-farine"
  },
  {
    path: "/bakery/couzon"
  },
  {
    path: "/bakery/boulangerie-patisserie-couzon"
  },
  {
    path: "/bakery/diouf-sokhna"
  },
  {
    path: "/bakery/boulangerie-marini-trattoria"
  },
  {
    path: "/bakery/boulangerie-sorbier"
  },
  {
    path: "/bakery/sarl-le-froment"
  },
  {
    path: "/bakery/maison-blieux"
  },
  {
    path: "/bakery/le-fournil-montfortais"
  },
  {
    path: "/bakery/boulangerie-du-montfort"
  },
  {
    path: "/bakery/boulangerie-patisserie-marcoux"
  },
  {
    path: "/bakery/colmars-michel"
  },
  {
    path: "/bakery/viennoiserie-mirabeau"
  },
  {
    path: "/bakery/le-fournil-du-dauphine"
  },
  {
    path: "/bakery/le-dauphin-gourmand"
  },
  {
    path: "/bakery/patisserie-du-dauphin-berthelot"
  },
  {
    path: "/bakery/boulangerie-dauphine"
  },
  {
    path: "/bakery/saint-pierre-du-perray"
  },
  {
    path: "/bakery/boulangerie-claret"
  },
  {
    path: "/bakery/l-atelier-original-de-claret"
  },
  {
    path: "/bakery/carette"
  },
  {
    path: "/bakery/fournil-de-l-arche-(gaec-de-l-arche-l-hommee)"
  },
  {
    path: "/bakery/boulangerie-patisserie-l-arche-des-saveurs"
  },
  {
    path: "/bakery/boulangerie-larchet"
  },
  {
    path: "/bakery/l-arche-du-pain"
  },
  {
    path: "/bakery/l-arche-aux-pains"
  },
  {
    path: "/bakery/l-escale-douceur"
  },
  {
    path: "/bakery/l-escale-gourmande"
  },
  {
    path: "/bakery/l-escale-d-epinay"
  },
  {
    path: "/bakery/l-escale-gourmande-2"
  },
  {
    path: "/bakery/l-escale"
  },
  {
    path: "/bakery/maelle-arnoux"
  },
  {
    path: "/bakery/les-gourmandises-de-l-aeroport"
  },
  {
    path: "/bakery/manelin-le-boulanger-de-jean-mace"
  },
  {
    path: "/bakery/le-manege-des-pains-sarl"
  },
  {
    path: "/bakery/le-manege-des-pains"
  },
  {
    path: "/bakery/le-manege-des-pains-2"
  },
  {
    path: "/bakery/le-fournil-de-montclard"
  },
  {
    path: "/bakery/le-garde-manger"
  },
  {
    path: "/bakery/la-gardonnoise"
  },
  {
    path: "/bakery/le-fournil-d-allos"
  },
  {
    path: "/bakery/maison-louvard"
  },
  {
    path: "/bakery/maison-ounissi-paris-11"
  },
  {
    path: "/bakery/maison-bergeron"
  },
  {
    path: "/bakery/maison-doucet-boulangerie-patisserie"
  },
  {
    path: "/bakery/maison-terrasson"
  },
  {
    path: "/bakery/le-pain-d-auzet"
  },
  {
    path: "/bakery/la-maison-de-l-artisan"
  },
  {
    path: "/bakery/boulangerie-patisserie-le-clos-saint-donat"
  },
  {
    path: "/bakery/l-angles-d-pains"
  },
  {
    path: "/bakery/le-pain-des-angles-boulangerie-patisserie-artisanale"
  },
  {
    path: "/bakery/la-petite-française."
  },
  {
    path: "/bakery/boulangerie-de-castellane"
  },
  {
    path: "/bakery/biscuiterie-du-lacydon"
  },
  {
    path: "/bakery/le-fournil-des-corbieres"
  },
  {
    path: "/bakery/sisteron"
  },
  {
    path: "/bakery/boulangerie-de-banon"
  },
  {
    path: "/bakery/brunet-joel"
  },
  {
    path: "/bakery/brunet-sebastien"
  },
  {
    path: "/bakery/brunet-boulanger-patissier"
  },
  {
    path: "/bakery/boulangerie-brunet"
  },
  {
    path: "/bakery/boulangerie-du-verdon"
  },
  {
    path: "/bakery/boulangerie-saint-cre-pain"
  },
  {
    path: "/bakery/la-grande-alesia"
  },
  {
    path: "/bakery/la-grande-boulangerie"
  },
  {
    path: "/bakery/la-grande-boulangerie-de-paris"
  },
  {
    path: "/bakery/la-grande-cave-a-chocolat"
  },
  {
    path: "/bakery/la-grande-boulangerie-2"
  },
  {
    path: "/bakery/boulangerie-les-embruns"
  },
  {
    path: "/bakery/bdonuts-gap"
  },
  {
    path: "/bakery/la-mie-caline-gap"
  },
  {
    path: "/bakery/boulangerie-lieval-gap"
  },
  {
    path: "/bakery/patisserie-brusq-et-vos-envies"
  },
  {
    path: "/bakery/patisserie-brusini-collet"
  },
  {
    path: "/bakery/rambaud"
  },
  {
    path: "/bakery/atelier-rambaud"
  },
  {
    path: "/bakery/l-alliance-des-sens"
  },
  {
    path: "/bakery/boulangerie-rambaud-les-verneys"
  },
  {
    path: "/bakery/boulangerie-patisserie-rambaud"
  },
  {
    path: "/bakery/boulangerie-patisserie"
  },
  {
    path: "/bakery/boulangerie-patisserie-la-roche"
  },
  {
    path: "/bakery/le-fournil-de-la-gravette"
  },
  {
    path: "/bakery/upaix"
  },
  {
    path: "/bakery/boulangerie-poullain"
  },
  {
    path: "/bakery/boulangerie-gosset"
  },
  {
    path: "/bakery/depot-o-bon-pain"
  },
  {
    path: "/bakery/aux-delices-de-loriol"
  },
  {
    path: "/bakery/boulangerie-patisserie-o-rustique"
  },
  {
    path: "/bakery/la-sainte-colombe"
  },
  {
    path: "/bakery/baecker-serres"
  },
  {
    path: "/bakery/affigliati"
  },
  {
    path: "/bakery/carrefour-montagne-les-orres-1650"
  },
  {
    path: "/bakery/boulangerie-patisserie-mallorant"
  },
  {
    path: "/bakery/autour-d-une-tradition"
  },
  {
    path: "/bakery/l-epinette-2"
  },
  {
    path: "/bakery/les-douceurs-du-lac-les-douceurs-d-apremont"
  },
  {
    path: "/bakery/boulangerie-du-lac-des-sapins"
  },
  {
    path: "/bakery/boulangerie-du-lac"
  },
  {
    path: "/bakery/boulangerie-la-choupatie"
  },
  {
    path: "/bakery/la-charmille"
  },
  {
    path: "/bakery/patisserie-confiserie-salon-de-the-rousset-apt"
  },
  {
    path: "/bakery/ftm-rochebrune"
  },
  {
    path: "/bakery/love-and-cakes-paris-(gateaux-d-anniversaire-d-inspiration-americaine-birthday-number-letter-layer-cakes-)"
  },
  {
    path: "/bakery/a-delice-patisserie-layer-cake-design-gateaux-d-evenement"
  },
  {
    path: "/bakery/l-amie-du-pain"
  },
  {
    path: "/bakery/varcin"
  },
  {
    path: "/bakery/grasset-myriam"
  },
  {
    path: "/bakery/boulangerie-grasse-delices"
  },
  {
    path: "/bakery/les-freres-chapelier-boulangerie-bio-artisanale-bayard"
  },
  {
    path: "/bakery/les-freres-blavette"
  },
  {
    path: "/bakery/les-freres-chapelier-boulangerie-bio-artisanale-ponts-jumeaux"
  },
  {
    path: "/bakery/les-freres-chapelier-boulangerie-bio-artisanale-capitole"
  },
  {
    path: "/bakery/les-freres-chapelier-montaudran"
  },
  {
    path: "/bakery/les-delices-d-alexis"
  },
  {
    path: "/bakery/le-p-tit-chef"
  },
  {
    path: "/bakery/boulangerie-stephanie-et-jean-pierre"
  },
  {
    path: "/bakery/biotiful-pain-boulangerie-bio-au-levain"
  },
  {
    path: "/bakery/la-tourtiere"
  },
  {
    path: "/bakery/la-tour-boulangerie"
  },
  {
    path: "/bakery/le-boulanger-de-la-tour"
  },
  {
    path: "/bakery/la-tourtiere-2"
  },
  {
    path: "/bakery/la-tour-des-pains"
  },
  {
    path: "/bakery/boulangerie-jr-valbonne"
  },
  {
    path: "/bakery/boulangerie-patisserie-fontana"
  },
  {
    path: "/bakery/boulangerie-des-fontanelles"
  },
  {
    path: "/bakery/boulangerie-du-four-banal"
  },
  {
    path: "/bakery/boulangerie-patisserie-sospel-a.demaria"
  },
  {
    path: "/bakery/boulangerie-de-sospel"
  },
  {
    path: "/bakery/drapeau-bakery"
  },
  {
    path: "/bakery/maison-joly-aux-delices-de-villers"
  },
  {
    path: "/bakery/fournil-du-moulinet"
  },
  {
    path: "/bakery/le-fournil-de-la-comtesse"
  },
  {
    path: "/bakery/le-comte-de-champagne"
  },
  {
    path: "/bakery/la-comtesse-de-trevise"
  },
  {
    path: "/bakery/aux-delices-de-la-comtesse"
  },
  {
    path: "/bakery/boulangerie-de-la-comtesse"
  },
  {
    path: "/bakery/castillon-sarl"
  },
  {
    path: "/bakery/boulangerie-castillon"
  },
  {
    path: "/bakery/sarl-bruno-castillon"
  },
  {
    path: "/bakery/au-fournil-de-belvedere"
  },
  {
    path: "/bakery/maison-roger-talant-belvedere"
  },
  {
    path: "/bakery/le-belvedere"
  },
  {
    path: "/bakery/boulangerie-belvedere"
  },
  {
    path: "/bakery/maison-delaroche"
  },
  {
    path: "/bakery/boulangerie-beuilloise"
  },
  {
    path: "/bakery/boulangerie-maison-rigaud"
  },
  {
    path: "/bakery/boulangerie-rigaux"
  },
  {
    path: "/bakery/la-mie-d-isola"
  },
  {
    path: "/bakery/boulangerie-patisserie-collongues"
  },
  {
    path: "/bakery/boulangerie-patisserie-collongues-2"
  },
  {
    path: "/bakery/boulangerie-patisserie-collongues-3"
  },
  {
    path: "/bakery/boulangerie-carrosserie-barthes"
  },
  {
    path: "/bakery/patisserie-thiery"
  },
  {
    path: "/bakery/patisserie-chocolaterie-hommel-thierry"
  },
  {
    path: "/bakery/atelier-tiery"
  },
  {
    path: "/bakery/thierry-marx-bakery-beaupassage"
  },
  {
    path: "/bakery/thierry-meunier"
  },
  {
    path: "/bakery/la-boulangerie-de-bonson"
  },
  {
    path: "/bakery/un-gars-dans-le-petrin"
  },
  {
    path: "/bakery/boulangerie-garsi"
  },
  {
    path: "/bakery/boulangerie-la-roquette"
  },
  {
    path: "/bakery/le-fournil-de-la-roquette"
  },
  {
    path: "/bakery/boulangerie-maison-lemasson"
  },
  {
    path: "/bakery/saulna"
  },
  {
    path: "/bakery/maison-armand-patisserie-boulangerie-nice-gambetta"
  },
  {
    path: "/bakery/j.multari-vieux-nice"
  },
  {
    path: "/bakery/patisserie-lac-nice-vieille-ville"
  },
  {
    path: "/bakery/green-bagel-cafe-nice-arenas"
  },
  {
    path: "/bakery/boulangerie-maison-kayser-vieux-nice"
  },
  {
    path: "/bakery/maison-caille"
  },
  {
    path: "/bakery/le-fournil-caillerot"
  },
  {
    path: "/bakery/boulangerie-patisserie-caillet"
  },
  {
    path: "/bakery/maison-caillet"
  },
  {
    path: "/bakery/le-fournil-des-cousins"
  },
  {
    path: "/bakery/boulangerie-la-petite-suisse"
  },
  {
    path: "/bakery/tendance-gourmande"
  },
  {
    path: "/bakery/tendance-et-tradition"
  },
  {
    path: "/bakery/boulangerie-tendances-gourmandes"
  },
  {
    path: "/bakery/delicatisserie.-141-avenue-de-verdun-chemin-des-montquartiers-batiment-b-trait-tendance-92130-issy-les-moulineaux."
  },
  {
    path: "/bakery/boulangers-patissiers-tendance-gourmande"
  },
  {
    path: "/bakery/la-sigale-&-le-fournil"
  },
  {
    path: "/bakery/l-epi-du-broc"
  },
  {
    path: "/bakery/delices-cafe-de-la-plage"
  },
  {
    path: "/bakery/saint-blaise"
  },
  {
    path: "/bakery/saint-blaise-2"
  },
  {
    path: "/bakery/boulangerie-les-delices-de-l-escarene"
  },
  {
    path: "/bakery/mariette-cours-vitton-lyon"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-3"
  },
  {
    path: "/bakery/mariette-cours-emile-zola-villeurbanne"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-4"
  },
  {
    path: "/bakery/boulangerie-saint-sernin"
  },
  {
    path: "/bakery/la-boulangerie-de-pierre"
  },
  {
    path: "/bakery/dunes-blanches-chez-pascal-saint-jean-de-luz"
  },
  {
    path: "/bakery/flaviac"
  },
  {
    path: "/bakery/boulangerie-ardoix"
  },
  {
    path: "/bakery/la-banetiere-bourg-de-peage"
  },
  {
    path: "/bakery/artisan-banette-boulanger"
  },
  {
    path: "/bakery/la-banette"
  },
  {
    path: "/bakery/ma-boulangerie-cafe-banette-saumur"
  },
  {
    path: "/bakery/boulangerie-de-boulogne-billancourt"
  },
  {
    path: "/bakery/saint-symphorien"
  },
  {
    path: "/bakery/bergouli-sarl"
  },
  {
    path: "/bakery/bergamote"
  },
  {
    path: "/bakery/saint-priest-pain-etablissements-charrier"
  },
  {
    path: "/bakery/boutique-de-st-sauveur-de-la-patisserie-mousnier-île-yeu"
  },
  {
    path: "/bakery/boulangerie-saint-sauveur"
  },
  {
    path: "/bakery/leroux-patrick"
  },
  {
    path: "/bakery/maison-leroux"
  },
  {
    path: "/bakery/boulangerie-le-roux-concarneau"
  },
  {
    path: "/bakery/leroux-roger"
  },
  {
    path: "/bakery/pralus-clermont-ferrand-:-patisserie-chocolaterie"
  },
  {
    path: "/bakery/le-fournil-des-mauves"
  },
  {
    path: "/bakery/patisserie-des-mauves"
  },
  {
    path: "/bakery/le-fournil-d-ozon"
  },
  {
    path: "/bakery/françois-kouign-amann-crepes-gateaux-breton"
  },
  {
    path: "/bakery/le-meilleur-de-la-patisserie"
  },
  {
    path: "/bakery/la-maison-du-kougelhopf-patisserie-buhler"
  },
  {
    path: "/bakery/boulangerie-(amoruso-herve)"
  },
  {
    path: "/bakery/patisserie-lejeune"
  },
  {
    path: "/bakery/patisserie-lejeune-2"
  },
  {
    path: "/bakery/boulangerie-de-patrick-et-beatrice-rialland"
  },
  {
    path: "/bakery/boulangerie-de-saint-jacques"
  },
  {
    path: "/bakery/patisserie-saint-jacques"
  },
  {
    path: "/bakery/patisserie-saint-jacques-2"
  },
  {
    path: "/bakery/peyraud"
  },
  {
    path: "/bakery/patisserie-explore-anglet-maxime-raiffe"
  },
  {
    path: "/bakery/maison-planchot-la-roche-sur-yon"
  },
  {
    path: "/bakery/a-deux-mains-la-rochelle"
  },
  {
    path: "/bakery/aux-saveurs-de-vernonnet"
  },
  {
    path: "/bakery/boulangerie-ribes"
  },
  {
    path: "/bakery/boulangerie-patisserie-borne"
  },
  {
    path: "/bakery/la-parisienne-saint-germain"
  },
  {
    path: "/bakery/patisserie-michalak-l-saint-germain-des-pres"
  },
  {
    path: "/bakery/la-parisienne-les-halles"
  },
  {
    path: "/bakery/boulangerie-honorino-fonseca"
  },
  {
    path: "/bakery/boulangerie-honorino-fonseca-2"
  },
  {
    path: "/bakery/la-fonsoise"
  },
  {
    path: "/bakery/aux-delices-sanilhacois"
  },
  {
    path: "/bakery/boulangerie-saint-vincent"
  },
  {
    path: "/bakery/fournil-saint-vincent"
  },
  {
    path: "/bakery/boulangerie-saint-vincent-2"
  },
  {
    path: "/bakery/st-vincent"
  },
  {
    path: "/bakery/aux-delices-de-saint-clair"
  },
  {
    path: "/bakery/granges-croustillantes"
  },
  {
    path: "/bakery/le-moulin-de-barnas"
  },
  {
    path: "/bakery/boulangerie-grasset-(bio-et-artisanale)"
  },
  {
    path: "/bakery/grasser-franck-jose"
  },
  {
    path: "/bakery/fournil-boulangerie-grasset"
  },
  {
    path: "/bakery/gras-david"
  },
  {
    path: "/bakery/maison-gras-cœur"
  },
  {
    path: "/bakery/patisserie-chalencon"
  },
  {
    path: "/bakery/boulangerie-patisserie-breugnot"
  },
  {
    path: "/bakery/les-macarons-de-joyeuse"
  },
  {
    path: "/bakery/boulangerie-ange-3"
  },
  {
    path: "/bakery/martial-champagne"
  },
  {
    path: "/bakery/maison-asteria-by-jean-thomas-schneider"
  },
  {
    path: "/bakery/aster"
  },
  {
    path: "/bakery/mirabella"
  },
  {
    path: "/bakery/miramel-cake-design"
  },
  {
    path: "/bakery/boulangerie-miravel"
  },
  {
    path: "/bakery/la-mirabelle"
  },
  {
    path: "/bakery/madeleine-et-mirabelle"
  },
  {
    path: "/bakery/boulangerie-prunet"
  },
  {
    path: "/bakery/la-boule-d-antan"
  },
  {
    path: "/bakery/la-boule-ange"
  },
  {
    path: "/bakery/boulangerie-les-trois-petits-bannetons"
  },
  {
    path: "/bakery/coucou-biscuit"
  },
  {
    path: "/bakery/coucagne-boulangerie-tranquille"
  },
  {
    path: "/bakery/le-fournil-cabannais"
  },
  {
    path: "/bakery/le-fournil-sarrassois"
  },
  {
    path: "/bakery/la-sarrasine"
  },
  {
    path: "/bakery/patisserie-sarrazin-marc"
  },
  {
    path: "/bakery/le-boulanger-de-st-jo"
  },
  {
    path: "/bakery/boulangerie-chevallier"
  },
  {
    path: "/bakery/boulangerie-pic"
  },
  {
    path: "/bakery/maison-1830"
  },
  {
    path: "/bakery/boulangerie-saint-joseph"
  },
  {
    path: "/bakery/l-epi-cerie"
  },
  {
    path: "/bakery/vion-olivier"
  },
  {
    path: "/bakery/vion-olivier-jean-louis"
  },
  {
    path: "/bakery/boulangerie-de-labeaume"
  },
  {
    path: "/bakery/boulangerie-du-mesnil"
  },
  {
    path: "/bakery/boulanger-gourdon-patissier-au-petit-nice"
  },
  {
    path: "/bakery/la-patisserie-cyril-lignac-saint-tropez"
  },
  {
    path: "/bakery/la-patisserie-cyril-lignac-saint-tropez-village"
  },
  {
    path: "/bakery/au-pain-quotidien"
  },
  {
    path: "/bakery/boulangerie-banette-maison-barthelemy-&-pizzeria-l-annexe"
  },
  {
    path: "/bakery/boulangerie-le-cheylard-andre-laurent"
  },
  {
    path: "/bakery/rocher-des-pyrenees"
  },
  {
    path: "/bakery/au-rocher-d-avon"
  },
  {
    path: "/bakery/la-gustive-(l-&-f.-rochereau)"
  },
  {
    path: "/bakery/rochereau-françois-et-laurence"
  },
  {
    path: "/bakery/patisserie-rocher"
  },
  {
    path: "/bakery/boulangerie-d-ayau"
  },
  {
    path: "/bakery/boulangerie-mont-moulin"
  },
  {
    path: "/bakery/pioline-villecroix-floiras"
  },
  {
    path: "/bakery/la-mie-vendeenne"
  },
  {
    path: "/bakery/le-fournil-du-sommet"
  },
  {
    path: "/bakery/fantastiks-cakes"
  },
  {
    path: "/bakery/la-fantasquerie-patisserie-&-biscuiterie-jura-bletterans"
  },
  {
    path: "/bakery/boulangerie-la-lussassoise"
  },
  {
    path: "/bakery/soyons-choux-lyon"
  },
  {
    path: "/bakery/dook-s-marseille-donuts"
  },
  {
    path: "/bakery/marsellie"
  },
  {
    path: "/bakery/marseille"
  },
  {
    path: "/bakery/bonjour-marseille"
  },
  {
    path: "/bakery/cookieland-marseille"
  },
  {
    path: "/bakery/beaulieu"
  },
  {
    path: "/bakery/le-beaulieu"
  },
  {
    path: "/bakery/boulangerie-terre-de-beaulieu"
  },
  {
    path: "/bakery/le-fournil-de-beaulieu-14000"
  },
  {
    path: "/bakery/boulangerie-patisserie-o-beau-lieu-des-pains"
  },
  {
    path: "/bakery/xavier-brignon"
  },
  {
    path: "/bakery/this-et-cie"
  },
  {
    path: "/bakery/boulangerie-r.-this"
  },
  {
    path: "/bakery/maison-vallery"
  },
  {
    path: "/bakery/la-fournee-lançonnaise"
  },
  {
    path: "/bakery/fosse-aux-chenes"
  },
  {
    path: "/bakery/fossey-frederick"
  },
  {
    path: "/bakery/l-atelier-fossey"
  },
  {
    path: "/bakery/boulangerie-montgolfiere"
  },
  {
    path: "/bakery/le-fournil-des-falaises"
  },
  {
    path: "/bakery/authentique-mittelhausbergen-click&collect"
  },
  {
    path: "/bakery/authentic-donuts-🍩-boutique-a-emporter-&-service-evenementiel-pour-particuliers-et-professionnels"
  },
  {
    path: "/bakery/authentik"
  },
  {
    path: "/bakery/authentique-boulangerie-paris-stephane"
  },
  {
    path: "/bakery/l-authentique-boulangerie"
  },
  {
    path: "/bakery/aurelien-cohen-patisserie-&-chocolaterie-masterclass"
  },
  {
    path: "/bakery/aurelie-ribay-boulangere"
  },
  {
    path: "/bakery/aurelie-et-franck-buchberger"
  },
  {
    path: "/bakery/aurelien-garcia-artisan-patissier"
  },
  {
    path: "/bakery/aurelie-et-cedric-delhaye-provocateurs-de-gourmandises"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-kuntz"
  },
  {
    path: "/bakery/auger-michel-patissier-chocolatier"
  },
  {
    path: "/bakery/atelier-auger"
  },
  {
    path: "/bakery/maison-augereau"
  },
  {
    path: "/bakery/le-patton"
  },
  {
    path: "/bakery/boulangerie-sery-moreuil"
  },
  {
    path: "/bakery/serendipity"
  },
  {
    path: "/bakery/serenity-biscuits"
  },
  {
    path: "/bakery/sereivan"
  },
  {
    path: "/bakery/serevia"
  },
  {
    path: "/bakery/au-fournil-d-autry"
  },
  {
    path: "/bakery/gomont-jean-françois"
  },
  {
    path: "/bakery/doux-nuts-coffee-v2-(donuts-fait-maison)"
  },
  {
    path: "/bakery/doux-nuts-coffee-(donuts-fait-maison)"
  },
  {
    path: "/bakery/au-doux-palais"
  },
  {
    path: "/bakery/au-doux-peche"
  },
  {
    path: "/bakery/aux-doux-palais-maison-roy"
  },
  {
    path: "/bakery/l-aire-d-ambrail"
  },
  {
    path: "/bakery/aire-boulange"
  },
  {
    path: "/bakery/les-airettes"
  },
  {
    path: "/bakery/boulangerie-patisserie-airel"
  },
  {
    path: "/bakery/aire-de-repos"
  },
  {
    path: "/bakery/boulangerie-patisserie-marcq"
  },
  {
    path: "/bakery/patisserie-la-romainville-puiseux-pontoise"
  },
  {
    path: "/bakery/boulangerie-edith-lor"
  },
  {
    path: "/bakery/la-biscuiterie-de-saint-aignan"
  },
  {
    path: "/bakery/o-mont-delice"
  },
  {
    path: "/bakery/le-palais-des-pains"
  },
  {
    path: "/bakery/sonia-assia"
  },
  {
    path: "/bakery/boulangerie-sonia-et-fabrice"
  },
  {
    path: "/bakery/le-son-de-ble"
  },
  {
    path: "/bakery/warth-sonia"
  },
  {
    path: "/bakery/boulangerie-patisserie-sonza"
  },
  {
    path: "/bakery/boulangerie-dricourt"
  },
  {
    path: "/bakery/boulangerie-dricourt-jerome"
  },
  {
    path: "/bakery/boulangerie-patisserie-des-dames"
  },
  {
    path: "/bakery/le-fournil-de-signy"
  },
  {
    path: "/bakery/le-fournil-des-thermes"
  },
  {
    path: "/bakery/boulangerie-des-thermes"
  },
  {
    path: "/bakery/boulangerie-patisserie-chez-deville"
  },
  {
    path: "/bakery/boulangerie-patisserie-chez-deville-2"
  },
  {
    path: "/bakery/le-petit-landais"
  },
  {
    path: "/bakery/le-p-tit-galu"
  },
  {
    path: "/bakery/le-petit-petrin"
  },
  {
    path: "/bakery/le-petit-fournil-de-louvigny"
  },
  {
    path: "/bakery/le-p-tit-fournil-du-marais"
  },
  {
    path: "/bakery/le-fournil-de-carignan"
  },
  {
    path: "/bakery/boulangerie-perthes"
  },
  {
    path: "/bakery/grandpre-vincennes"
  },
  {
    path: "/bakery/boulangerie-grandpre"
  },
  {
    path: "/bakery/stoney-clove-bakery"
  },
  {
    path: "/bakery/stone-that-turns"
  },
  {
    path: "/bakery/la-croisiėre-gourmande"
  },
  {
    path: "/bakery/sylvana-briocherie-gonflee"
  },
  {
    path: "/bakery/sylvana-briocherie-festive"
  },
  {
    path: "/bakery/sylvain-marie"
  },
  {
    path: "/bakery/sylvie-sarda-artisan-patissier"
  },
  {
    path: "/bakery/sylvie-et-didier-giraud"
  },
  {
    path: "/bakery/les-sables-d-asnelles"
  },
  {
    path: "/bakery/boulangerie-des-ursulines"
  },
  {
    path: "/bakery/boulangerie-patisserie-:-fournil-belloc-et-fils"
  },
  {
    path: "/bakery/segura-christophe"
  },
  {
    path: "/bakery/dunes-blanches-chez-pascal-bordeaux"
  },
  {
    path: "/bakery/dunes-blanches"
  },
  {
    path: "/bakery/dunes-blanches-chez-pascal-arcachon"
  },
  {
    path: "/bakery/dunes-blanches-chez-pascal-biarritz"
  },
  {
    path: "/bakery/febre-la-tour-de-salvagny"
  },
  {
    path: "/bakery/la-boulangerie-de-soullans"
  },
  {
    path: "/bakery/suzanne-briocherie"
  },
  {
    path: "/bakery/suzanne-&-jojo"
  },
  {
    path: "/bakery/maison-suzanne"
  },
  {
    path: "/bakery/m-arnaud-suzanne-arnaud"
  },
  {
    path: "/bakery/boulangerie-suzanne-fabrice-louis-olivier"
  },
  {
    path: "/bakery/boulangerie-patisserie-rouzeau"
  },
  {
    path: "/bakery/boulangerie-patisserie-laffite"
  },
  {
    path: "/bakery/la-caz-aux-pains"
  },
  {
    path: "/bakery/big-or-pain"
  },
  {
    path: "/bakery/la-boulangerie-de-l-aiguillon"
  },
  {
    path: "/bakery/boulangerie-utopie"
  },
  {
    path: "/bakery/boulangerie-bo&mie-louvre-rivoli"
  },
  {
    path: "/bakery/boulangerie-moderne"
  },
  {
    path: "/bakery/la-boulangerie"
  },
  {
    path: "/bakery/boulangerie-patisserie-tybalt-&-nicolas"
  },
  {
    path: "/bakery/la-ta-ble-des-saveurs"
  },
  {
    path: "/bakery/la-table-du-boulanger"
  },
  {
    path: "/bakery/tableau-en-sucre"
  },
  {
    path: "/bakery/boulangerie-maison-marquise"
  },
  {
    path: "/bakery/la-table-des-ecoles-:-brasserie-brunch-boulangerie"
  },
  {
    path: "/bakery/boulangerie-massat"
  },
  {
    path: "/bakery/sarl-jolibert-massat-sarl"
  },
  {
    path: "/bakery/maison-dally-mazeres-lezons"
  },
  {
    path: "/bakery/happy-cookie"
  },
  {
    path: "/bakery/happy-bakery-&-coffee"
  },
  {
    path: "/bakery/happy-donuts-le-havre-coty"
  },
  {
    path: "/bakery/happy-truck"
  },
  {
    path: "/bakery/happy-day-cake"
  },
  {
    path: "/bakery/oustau-nouguier"
  },
  {
    path: "/bakery/l-oustalet"
  },
  {
    path: "/bakery/l-oustal-doussat"
  },
  {
    path: "/bakery/sarl-l-oustal-doussat"
  },
  {
    path: "/bakery/peche-mignon"
  },
  {
    path: "/bakery/peches-gourmands-belfort"
  },
  {
    path: "/bakery/peche-mignon-2"
  },
  {
    path: "/bakery/peches-gourmands"
  },
  {
    path: "/bakery/peches-gourmands-l-isle-sur-la-sorgue"
  },
  {
    path: "/bakery/camon-philippe"
  },
  {
    path: "/bakery/la-mie-de-pain-lescure-d-albigeois"
  },
  {
    path: "/bakery/boulangerie-buret"
  },
  {
    path: "/bakery/patisserie-chocolaterie-s.buret-blois"
  },
  {
    path: "/bakery/sophie-lebreuilly"
  },
  {
    path: "/bakery/la-tourtiere-landaise"
  },
  {
    path: "/bakery/distributeur-de-baguettes-(fournil-de-la-tour-ploermel)"
  },
  {
    path: "/bakery/au-pain-d-autrefois-rocabey"
  },
  {
    path: "/bakery/boulangerie-eddy-leger"
  },
  {
    path: "/bakery/la-tourte-de-limeyrat"
  },
  {
    path: "/bakery/boulangerie-ange-4"
  },
  {
    path: "/bakery/aux-delices-de-la-galerie"
  },
  {
    path: "/bakery/dfc-gastel"
  },
  {
    path: "/bakery/toc-toque-boulangerie"
  },
  {
    path: "/bakery/cantegrel"
  },
  {
    path: "/bakery/fournil-de-canteloup"
  },
  {
    path: "/bakery/maison-ponzoni-cantebonne"
  },
  {
    path: "/bakery/boulangerie-cantet"
  },
  {
    path: "/bakery/fournil-paresys"
  },
  {
    path: "/bakery/la-valse-des-pains"
  },
  {
    path: "/bakery/la-valse-des-pains-2"
  },
  {
    path: "/bakery/la-valse-des-pains-3"
  },
  {
    path: "/bakery/vals"
  },
  {
    path: "/bakery/la-valse-des-bles"
  },
  {
    path: "/bakery/le-fondant-baulois-nantes"
  },
  {
    path: "/bakery/le-fondant-baulois"
  },
  {
    path: "/bakery/le-fondant-baulois-2"
  },
  {
    path: "/bakery/le-fondant-baulois-3"
  },
  {
    path: "/bakery/la-toque-cuivree"
  },
  {
    path: "/bakery/boulangerie-la-cave-a-pains"
  },
  {
    path: "/bakery/la-cave-a-pains"
  },
  {
    path: "/bakery/la-cave-a-pain"
  },
  {
    path: "/bakery/la-cave-a-patisseries"
  },
  {
    path: "/bakery/earl-lacave-francis"
  },
  {
    path: "/bakery/boulangerie-aigues-vives-pains-et-gourmandises"
  },
  {
    path: "/bakery/le-pain-pascal"
  },
  {
    path: "/bakery/au-chant-du-moulin"
  },
  {
    path: "/bakery/boulangerie-de-verdun"
  },
  {
    path: "/bakery/boulangerie-de-la-bastide"
  },
  {
    path: "/bakery/chez-louise-mandelieu-tourrades"
  },
  {
    path: "/bakery/fournil-de-la-bastide-var-83840"
  },
  {
    path: "/bakery/le-fournil-d-emy"
  },
  {
    path: "/bakery/boulangerie-ugo"
  },
  {
    path: "/bakery/sembat"
  },
  {
    path: "/bakery/semidis"
  },
  {
    path: "/bakery/semap"
  },
  {
    path: "/bakery/semercioglu"
  },
  {
    path: "/bakery/les-semeurs-de-pains"
  },
  {
    path: "/bakery/au-petrin-du-matin-🥐-boulangerie-patisserie-viennoiserie-sandwicherie"
  },
  {
    path: "/bakery/maison-boulay"
  },
  {
    path: "/bakery/le-fournil-de-charlie-et-angel-tain-l-hermitage"
  },
  {
    path: "/bakery/maison-pascalis-tain-l-hermitage"
  },
  {
    path: "/bakery/legrand"
  },
  {
    path: "/bakery/pain-d-alouette"
  },
  {
    path: "/bakery/soraya-et-ses-gateaux"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-sordillon-provence"
  },
  {
    path: "/bakery/sorin-gilles-gilles"
  },
  {
    path: "/bakery/boulangerie-laurent-soro"
  },
  {
    path: "/bakery/goulier"
  },
  {
    path: "/bakery/cosette"
  },
  {
    path: "/bakery/cosy-boulangerie-bio-patisserie"
  },
  {
    path: "/bakery/boulangerie-coste"
  },
  {
    path: "/bakery/coste-herve"
  },
  {
    path: "/bakery/fournil-moulin-neuf"
  },
  {
    path: "/bakery/boulangerie-du-moulin-neuf"
  },
  {
    path: "/bakery/boulangerie-moulin-neuf-pain-bio-cuit-au-feu-de-bois"
  },
  {
    path: "/bakery/boulangerie-dosda"
  },
  {
    path: "/bakery/ganache"
  },
  {
    path: "/bakery/ganachou"
  },
  {
    path: "/bakery/ganache-&-cabosse"
  },
  {
    path: "/bakery/isabelle-et-valerie-ganachaud"
  },
  {
    path: "/bakery/ganache-creation"
  },
  {
    path: "/bakery/aux-saveurs-de-prat"
  },
  {
    path: "/bakery/au-virage-des-pains"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-lasserre"
  },
  {
    path: "/bakery/patisserie-maison-lasserre"
  },
  {
    path: "/bakery/le-plaisir-sucre"
  },
  {
    path: "/bakery/le-plaisir-du-pain-rafflegeau-pascal"
  },
  {
    path: "/bakery/le-plaisir-des-gourmands"
  },
  {
    path: "/bakery/le-plaisir-du-pain"
  },
  {
    path: "/bakery/le-plaisir-du-pain-2"
  },
  {
    path: "/bakery/le-fournil-d-antan-coussay-les-bois"
  },
  {
    path: "/bakery/boulangerie-les-bles-&-banette-clermont-ferrand"
  },
  {
    path: "/bakery/donuts-republique-clermont-ferrand"
  },
  {
    path: "/bakery/20-rue-des-gras-63000-clermont-ferrand"
  },
  {
    path: "/bakery/atelier-bon-pain-vivant-&-gourmandises-clermont-ferrand"
  },
  {
    path: "/bakery/aux-merveilleux-de-fred"
  },
  {
    path: "/bakery/aux-merveilleux-de-fred-2"
  },
  {
    path: "/bakery/aux-merveilleux-de-fred-3"
  },
  {
    path: "/bakery/aux-merveilleux-de-fred-4"
  },
  {
    path: "/bakery/aux-merveilleux-de-fred-5"
  },
  {
    path: "/bakery/soulatges-(sarl)"
  },
  {
    path: "/bakery/boulange-patiss-soulard"
  },
  {
    path: "/bakery/soulat-jean-philippe"
  },
  {
    path: "/bakery/boulangerie-soulas"
  },
  {
    path: "/bakery/boulangerie-maison-fontaine"
  },
  {
    path: "/bakery/la-fontaine-gourmande"
  },
  {
    path: "/bakery/boulangerie-patisserie-de-la-fontaine-michalon"
  },
  {
    path: "/bakery/fontaine-de-vaucluse"
  },
  {
    path: "/bakery/la-fontaine-aux-pains"
  },
  {
    path: "/bakery/sarl-boulangerie-palisse"
  },
  {
    path: "/bakery/maison-paroty-dampierre"
  },
  {
    path: "/bakery/patisserie-bourguignon-metz"
  },
  {
    path: "/bakery/boulangerie-patisserie-bourguignon"
  },
  {
    path: "/bakery/societe-bourguignonne-de-patisserie"
  },
  {
    path: "/bakery/maison-bourguignon"
  },
  {
    path: "/bakery/bourguignon-claude"
  },
  {
    path: "/bakery/petit-jean-le-maupas"
  },
  {
    path: "/bakery/du-moulin-au-pain"
  },
  {
    path: "/bakery/boulangerie-chatres-maison-rouge"
  },
  {
    path: "/bakery/aux-delices-de-vulaines"
  },
  {
    path: "/bakery/au-faim-palais"
  },
  {
    path: "/bakery/les-douceurs-du-chene"
  },
  {
    path: "/bakery/isle-aux-pains"
  },
  {
    path: "/bakery/l-isle-aux-pains"
  },
  {
    path: "/bakery/boulangerie-patisserie-rouget-l‘isle-adam"
  },
  {
    path: "/bakery/l-îsle-adam"
  },
  {
    path: "/bakery/racines-urbaines-boulangerie-artisanale"
  },
  {
    path: "/bakery/boulangerie-racines"
  },
  {
    path: "/bakery/pain-racine"
  },
  {
    path: "/bakery/des-racines-et-du-pain"
  },
  {
    path: "/bakery/mergey-gerard-maurice-eugene"
  },
  {
    path: "/bakery/boulangerie-gerard-mergey"
  },
  {
    path: "/bakery/boulangerie-la-medievale"
  },
  {
    path: "/bakery/boulangerie-hardy-brienne-le-chateau"
  },
  {
    path: "/bakery/defert-yanisse"
  },
  {
    path: "/bakery/maison-dore"
  },
  {
    path: "/bakery/le-fournil-de-brienne-le-chateau"
  },
  {
    path: "/bakery/les-delices-des-pains"
  },
  {
    path: "/bakery/la-grande-boulangerie-3"
  },
  {
    path: "/bakery/la-petite-biscuiterie"
  },
  {
    path: "/bakery/le-fournil-d-amancey-patrice"
  },
  {
    path: "/bakery/rennes-81"
  },
  {
    path: "/bakery/la-mie-caline-rennes-plelo"
  },
  {
    path: "/bakery/vaudescal-laurent"
  },
  {
    path: "/bakery/boulangerie-bca"
  },
  {
    path: "/bakery/aux-delices-de-fresne"
  },
  {
    path: "/bakery/salon-cacao-t"
  },
  {
    path: "/bakery/salon-de-the-patisserie-des-tuileries"
  },
  {
    path: "/bakery/salon-de-the-patisserie-le-st.-antoine"
  },
  {
    path: "/bakery/boulangerie-de-moussey"
  },
  {
    path: "/bakery/le-pavillon-des-pains"
  },
  {
    path: "/bakery/boulangerie-le-pavillon-gourmet"
  },
  {
    path: "/bakery/pavillon-sucre"
  },
  {
    path: "/bakery/boulangerie-coustenoble"
  },
  {
    path: "/bakery/boulangerie-patisserie-la-trainelloise"
  },
  {
    path: "/bakery/troyes"
  },
  {
    path: "/bakery/la-mie-caline-troyes-croncels"
  },
  {
    path: "/bakery/les-troyes-delices"
  },
  {
    path: "/bakery/la-ferte-mace"
  },
  {
    path: "/bakery/maison-saint-thibault"
  },
  {
    path: "/bakery/boulangerie-maison-des-champs"
  },
  {
    path: "/bakery/maison-deschamps-boulangerie-&-cafe-bio"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-deschamps"
  },
  {
    path: "/bakery/maison-caffet"
  },
  {
    path: "/bakery/patisserie-leroy-benoit."
  },
  {
    path: "/bakery/lavaud-boulangerie-patisserie-sas"
  },
  {
    path: "/bakery/lavaud-philippe"
  },
  {
    path: "/bakery/lavaud"
  },
  {
    path: "/bakery/le-fournil-de-lavaux"
  },
  {
    path: "/bakery/etablissements-lavot-robert-et-fils"
  },
  {
    path: "/bakery/aulnay-sous-bois"
  },
  {
    path: "/bakery/la-aulnaysienne"
  },
  {
    path: "/bakery/boulangerie-patisserie-flouret"
  },
  {
    path: "/bakery/maisons-gourmandes"
  },
  {
    path: "/bakery/maisonsantos"
  },
  {
    path: "/bakery/boulangerie-maison-becam-brissac"
  },
  {
    path: "/bakery/el-makoudi-boulangerie-patisserie"
  },
  {
    path: "/bakery/bechu"
  },
  {
    path: "/bakery/sophie-lebreuilly-2"
  },
  {
    path: "/bakery/boulangerie-de-lysel"
  },
  {
    path: "/bakery/caillaux-jerome"
  },
  {
    path: "/bakery/boulangerie-caillat"
  },
  {
    path: "/bakery/boulangerie-rivela"
  },
  {
    path: "/bakery/le-fournil-de-chalabre"
  },
  {
    path: "/bakery/fermes-de-l-aubette-et-du-cheval-gris-monzein-benoit-et-laurie-garandet-charles"
  },
  {
    path: "/bakery/la-feuillantine"
  },
  {
    path: "/bakery/feuilletine"
  },
  {
    path: "/bakery/patisserie-artisanale-les-feuillantines"
  },
  {
    path: "/bakery/la-feuillantine-2"
  },
  {
    path: "/bakery/pauline"
  },
  {
    path: "/bakery/boulangerie-pauline-et-steve"
  },
  {
    path: "/bakery/boulangerie-pauline"
  },
  {
    path: "/bakery/pauline-boulangerie"
  },
  {
    path: "/bakery/boulangerie-patisserie-pauline"
  },
  {
    path: "/bakery/salzard-christophe-et-fabienne"
  },
  {
    path: "/bakery/boulangerie-patisserie-ker-alp-pain"
  },
  {
    path: "/bakery/boulangerie-patisserie-ker-alp-pain-2"
  },
  {
    path: "/bakery/caves-et-terroirs"
  },
  {
    path: "/bakery/caves-et-terroirs-2"
  },
  {
    path: "/bakery/gardien"
  },
  {
    path: "/bakery/le-palais-gourmand-cazilhac"
  },
  {
    path: "/bakery/maison-marques-levis"
  },
  {
    path: "/bakery/lacombe-cyril-patisseriechocolaterie"
  },
  {
    path: "/bakery/lacombe-jacques"
  },
  {
    path: "/bakery/lacombet-frere-et-soeur"
  },
  {
    path: "/bakery/au-palet-d-or"
  },
  {
    path: "/bakery/maison-des-champs"
  },
  {
    path: "/bakery/maison-des-champs-2"
  },
  {
    path: "/bakery/boulangerie-de-la-pref"
  },
  {
    path: "/bakery/catherine-kelsen-patisserie-etablissement-gault&millau"
  },
  {
    path: "/bakery/point-chaud-boulangerie-patisserie-vuillemard-nicola"
  },
  {
    path: "/bakery/pain-dore"
  },
  {
    path: "/bakery/la-parisienne-poissonniere"
  },
  {
    path: "/bakery/saint-denis-pain-chaud"
  },
  {
    path: "/bakery/la-rose-de-tunis-saint-denis"
  },
  {
    path: "/bakery/poly-didier"
  },
  {
    path: "/bakery/polygone"
  },
  {
    path: "/bakery/fournil-du-polygone-boulangerie-patisserie"
  },
  {
    path: "/bakery/poly-bakes"
  },
  {
    path: "/bakery/boulangerie-fitour"
  },
  {
    path: "/bakery/boulangerie-marsan"
  },
  {
    path: "/bakery/patisserie-giannelli"
  },
  {
    path: "/bakery/berges"
  },
  {
    path: "/bakery/boulangerie-ange-5"
  },
  {
    path: "/bakery/la-tourtiere-mont-de-marsan"
  },
  {
    path: "/bakery/bramerie-joseph"
  },
  {
    path: "/bakery/la-nouvelle-baguette"
  },
  {
    path: "/bakery/boulangerie-le-fournil-saint-andre-laval"
  },
  {
    path: "/bakery/boulangerie-le-fournil-saint-andre-skate-park"
  },
  {
    path: "/bakery/lagrasse"
  },
  {
    path: "/bakery/le-petrin-de-jonquieres"
  },
  {
    path: "/bakery/fay-si-tis"
  },
  {
    path: "/bakery/farine"
  },
  {
    path: "/bakery/farinoman-fou-aix"
  },
  {
    path: "/bakery/farine-et-cannelle"
  },
  {
    path: "/bakery/farine-2"
  },
  {
    path: "/bakery/planete-donuts"
  },
  {
    path: "/bakery/planet-macarons"
  },
  {
    path: "/bakery/planete-pain"
  },
  {
    path: "/bakery/planete-levain"
  },
  {
    path: "/bakery/boulangerie-planet"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-5"
  },
  {
    path: "/bakery/boulangerie-aragonais"
  },
  {
    path: "/bakery/sucrement-gourmand"
  },
  {
    path: "/bakery/patisserie-maison-gaillardo"
  },
  {
    path: "/bakery/boulangerie-aragon"
  },
  {
    path: "/bakery/le-fournil-saint-louis"
  },
  {
    path: "/bakery/aux-delices-de-sonia-et-dom"
  },
  {
    path: "/bakery/cordier-gregory"
  },
  {
    path: "/bakery/alban-kuntz-versailles-st-louis"
  },
  {
    path: "/bakery/boulangerie-saint-louis"
  },
  {
    path: "/bakery/gourmandises-leucate"
  },
  {
    path: "/bakery/boulangerie-banette-le-petit-brivadois"
  },
  {
    path: "/bakery/maison-ferrand"
  },
  {
    path: "/bakery/maison-ferrante"
  },
  {
    path: "/bakery/la-palme-d-or"
  },
  {
    path: "/bakery/boulangerie-artisanale-la-palme-d-or"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-6"
  },
  {
    path: "/bakery/aux-delices-de-montjoie"
  },
  {
    path: "/bakery/canet"
  },
  {
    path: "/bakery/canet-2"
  },
  {
    path: "/bakery/patisserie-gerald-canet"
  },
  {
    path: "/bakery/patisserie-canet"
  },
  {
    path: "/bakery/biscuiterie-des-treilles"
  },
  {
    path: "/bakery/boulangerie-saint-saturnin"
  },
  {
    path: "/bakery/au-bon-pain-du-levezou"
  },
  {
    path: "/bakery/le-quinssainois"
  },
  {
    path: "/bakery/farine-et-vanille-fournil-de-quinsac"
  },
  {
    path: "/bakery/boulangerie-cornu"
  },
  {
    path: "/bakery/la-grand-boulangerie"
  },
  {
    path: "/bakery/le-fournil-villersois"
  },
  {
    path: "/bakery/la-martrinole-sarl"
  },
  {
    path: "/bakery/la-fouace-de-laguiole-maison-roux"
  },
  {
    path: "/bakery/l-atelier-original-la-loubiere"
  },
  {
    path: "/bakery/paul-perpignan-louis-blanc"
  },
  {
    path: "/bakery/paul"
  },
  {
    path: "/bakery/mr-laurent-stephane"
  },
  {
    path: "/bakery/patisserie-clement"
  },
  {
    path: "/bakery/l-epi-du-rouergue-4-saisons"
  },
  {
    path: "/bakery/boulangerie-saint-marc"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-7"
  },
  {
    path: "/bakery/sarl-cavalier-la-fouace-de-campagnac"
  },
  {
    path: "/bakery/cavalier-la-fouace-de-campagnac"
  },
  {
    path: "/bakery/boulangerie-plaisance"
  },
  {
    path: "/bakery/aux-delices-de-plaisance-maison-noel"
  },
  {
    path: "/bakery/cocorosa-donuts-&-bagels"
  },
  {
    path: "/bakery/maison-crespin"
  },
  {
    path: "/bakery/cres-pain"
  },
  {
    path: "/bakery/lacan-jean-raymond"
  },
  {
    path: "/bakery/firmin"
  },
  {
    path: "/bakery/firmin-2"
  },
  {
    path: "/bakery/firmin-pains-patisserie"
  },
  {
    path: "/bakery/firmin-boulangerie"
  },
  {
    path: "/bakery/firmin-3"
  },
  {
    path: "/bakery/moulin-de-paiou-esplanade"
  },
  {
    path: "/bakery/fournil-de-la-mourette"
  },
  {
    path: "/bakery/mouret-bernard"
  },
  {
    path: "/bakery/boulangerie-du-moustier"
  },
  {
    path: "/bakery/fournil-des-3-moulins"
  },
  {
    path: "/bakery/fournil-de-sainte-marguerite"
  },
  {
    path: "/bakery/cornard-dominique"
  },
  {
    path: "/bakery/boulangerie-sainte-marguerite"
  },
  {
    path: "/bakery/l-atelier-du-ble"
  },
  {
    path: "/bakery/boulangerie-aubineau-l-equipe-du-fournil"
  },
  {
    path: "/bakery/boulangerie-aubin"
  },
  {
    path: "/bakery/nanteuil-les-pains"
  },
  {
    path: "/bakery/baguette-eclair-nanterre-universite...boulanger..-patissier"
  },
  {
    path: "/bakery/boulangerie-nantilly"
  },
  {
    path: "/bakery/la-nantellienne"
  },
  {
    path: "/bakery/patisserie-la-romainville-nanterre"
  },
  {
    path: "/bakery/boulangerie-delice-de-st-come"
  },
  {
    path: "/bakery/cassis-framboise"
  },
  {
    path: "/bakery/cassi-patisserie"
  },
  {
    path: "/bakery/la-cassissine"
  },
  {
    path: "/bakery/aux-delices-de-quentin"
  },
  {
    path: "/bakery/la-cure-gourmande-marseille-fabricant-de-navettes"
  },
  {
    path: "/bakery/les-2-cabanes"
  },
  {
    path: "/bakery/les-cabanes-a-pain"
  },
  {
    path: "/bakery/l-orgonnaise-boulangerie-patisserie"
  },
  {
    path: "/bakery/sarl-chez-remy-et-martine-remy"
  },
  {
    path: "/bakery/maison-cerealia-istres"
  },
  {
    path: "/bakery/maison-noves"
  },
  {
    path: "/bakery/maison-z&w-aix-en-provence"
  },
  {
    path: "/bakery/les-macarons-de-caroline-aix-en-provence"
  },
  {
    path: "/bakery/mr-chou-aix-en-provence-sextius"
  },
  {
    path: "/bakery/dounut-s-project-donuts-aix-en-provence"
  },
  {
    path: "/bakery/green-bagel-cafe-aix-en-provence"
  },
  {
    path: "/bakery/boulangerie-des-oliviers"
  },
  {
    path: "/bakery/les-oliviers-de-brassagou"
  },
  {
    path: "/bakery/les-macarons-de-caroline-bouc-bel-air"
  },
  {
    path: "/bakery/boulangerie-paul"
  },
  {
    path: "/bakery/boulangerie-patisserie-langry"
  },
  {
    path: "/bakery/le-four-a-bois"
  },
  {
    path: "/bakery/boulangerie-la-ceyrestenne"
  },
  {
    path: "/bakery/l-atelier-antik"
  },
  {
    path: "/bakery/marseille-jacques-bernard"
  },
  {
    path: "/bakery/la-fournee-de-saint-louis"
  },
  {
    path: "/bakery/banette-de-saint-louis"
  },
  {
    path: "/bakery/le-fournil-de-maillane"
  },
  {
    path: "/bakery/fournil-de-saint-mitre"
  },
  {
    path: "/bakery/ce-bonheur-la-boulangerie-restauration-rapide"
  },
  {
    path: "/bakery/boulangerie-la-talmeliere"
  },
  {
    path: "/bakery/boulangerie-artisanale-du-rempart"
  },
  {
    path: "/bakery/boulangerie-de-provence-mazza-et-fils"
  },
  {
    path: "/bakery/salon-de-provence"
  },
  {
    path: "/bakery/biscuits-charly"
  },
  {
    path: "/bakery/martigues"
  },
  {
    path: "/bakery/le-moulin-de-port-de-bouc"
  },
  {
    path: "/bakery/la-pannetiere"
  },
  {
    path: "/bakery/paul-la-ciotat-avenue-ernest-subilia"
  },
  {
    path: "/bakery/la-fabrique-la-ciotat-matagots"
  },
  {
    path: "/bakery/au-gres-du-pain"
  },
  {
    path: "/bakery/le-fournil-de-la-gare-trets"
  },
  {
    path: "/bakery/boulangerie-de-fontvieille"
  },
  {
    path: "/bakery/jean-le-boulanger"
  },
  {
    path: "/bakery/le-fournil-saintois-(-maitre-artisan)"
  },
  {
    path: "/bakery/boulangerie-pain-2-caphan"
  },
  {
    path: "/bakery/la-fabrique-du-boulanger"
  },
  {
    path: "/bakery/boulangerie-de-la-plaisance"
  },
  {
    path: "/bakery/maison-potereau-boulangerie"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-8"
  },
  {
    path: "/bakery/maison-grandsagne"
  },
  {
    path: "/bakery/grand-pere-jules-(nemours)"
  },
  {
    path: "/bakery/grande-saveur-coutiches"
  },
  {
    path: "/bakery/grandmengin-emmanuel"
  },
  {
    path: "/bakery/le-moulin-du-vieux-bourg"
  },
  {
    path: "/bakery/boulangerie-patisserie-yaroma"
  },
  {
    path: "/bakery/boulangerie-torres-du-vieux-bourg"
  },
  {
    path: "/bakery/aux-tendres-epis"
  },
  {
    path: "/bakery/le-bon-patisserie"
  },
  {
    path: "/bakery/le-boulanger-des-arenes-(-bayonne)"
  },
  {
    path: "/bakery/le-boulanger-de-l-hotel-de-ville"
  },
  {
    path: "/bakery/le-boulanger-feydeau"
  },
  {
    path: "/bakery/l-atelier-des-pierres-dorees."
  },
  {
    path: "/bakery/boulangerie-aubervilliers"
  },
  {
    path: "/bakery/s.e.p"
  },
  {
    path: "/bakery/ernest-samaritaine-la-boulangerie-par-eric-kayser"
  },
  {
    path: "/bakery/ernest-&-valentin"
  },
  {
    path: "/bakery/ernest-&-valentin-2"
  },
  {
    path: "/bakery/ernest-patisserie-&-cafe"
  },
  {
    path: "/bakery/ernest-&-valentin-3"
  },
  {
    path: "/bakery/la-rose-de-vaucelles"
  },
  {
    path: "/bakery/rouvres-sylvia"
  },
  {
    path: "/bakery/la-vieille-france"
  },
  {
    path: "/bakery/boulangerie-au-fournil-du-donjon"
  },
  {
    path: "/bakery/les-4-chouquettes-(creully)"
  },
  {
    path: "/bakery/poppa-petits-gateaux"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-gest"
  },
  {
    path: "/bakery/boulongerie"
  },
  {
    path: "/bakery/boulongerie-patisserie-voisine"
  },
  {
    path: "/bakery/maison-chaudemanche-houlgate"
  },
  {
    path: "/bakery/atelier-du-biscuit"
  },
  {
    path: "/bakery/la-meule-de-pierre-evrecy"
  },
  {
    path: "/bakery/donut-s-family"
  },
  {
    path: "/bakery/boulangerie-family"
  },
  {
    path: "/bakery/la-madeleine-de-montigny"
  },
  {
    path: "/bakery/maison-blayo"
  },
  {
    path: "/bakery/roseli"
  },
  {
    path: "/bakery/le-fournil-de-la-roseliere"
  },
  {
    path: "/bakery/boulangerie-rose-le-virolet"
  },
  {
    path: "/bakery/boulangerie-l-arbre-a-pains"
  },
  {
    path: "/bakery/boulangerie-tharonnaise"
  },
  {
    path: "/bakery/au-fournil-d-agathe"
  },
  {
    path: "/bakery/les-deux-tours"
  },
  {
    path: "/bakery/les-2-boulangers-(julienne-et-vincent)"
  },
  {
    path: "/bakery/gennevilliers"
  },
  {
    path: "/bakery/mathieu-pouvreau-patisserie"
  },
  {
    path: "/bakery/mathieu-&-co"
  },
  {
    path: "/bakery/mathieu-and-co"
  },
  {
    path: "/bakery/mathieu-zimmermann-patissier"
  },
  {
    path: "/bakery/mathieu-pouvreau-patisserie-2"
  },
  {
    path: "/bakery/les-patisseries-d-elona"
  },
  {
    path: "/bakery/boulangerie-des-bois"
  },
  {
    path: "/bakery/boulangerie-des-bois-de-groslay"
  },
  {
    path: "/bakery/aux-delices-de-colleville"
  },
  {
    path: "/bakery/le-grand-fournil-basque"
  },
  {
    path: "/bakery/le-grand-mechant-goût"
  },
  {
    path: "/bakery/au-grand-caraque"
  },
  {
    path: "/bakery/latelierdelaboulange"
  },
  {
    path: "/bakery/boulangerie-au-petit-canon"
  },
  {
    path: "/bakery/la-toque-cuivree-2"
  },
  {
    path: "/bakery/la-toque-cuivree-3"
  },
  {
    path: "/bakery/la-toque-cuivree-4"
  },
  {
    path: "/bakery/la-toque-cuivree-5"
  },
  {
    path: "/bakery/boulangerie-soignolles-en-brie-77111.-boulangerie-eugene"
  },
  {
    path: "/bakery/la-folie-gourmande"
  },
  {
    path: "/bakery/la-foliedouce"
  },
  {
    path: "/bakery/la-folie-s-(boulangerie-patisserie-brasserie)"
  },
  {
    path: "/bakery/la-folie-des-pains"
  },
  {
    path: "/bakery/la-folie-du-pain"
  },
  {
    path: "/bakery/clement-lucas"
  },
  {
    path: "/bakery/maison-toulorge-ifs"
  },
  {
    path: "/bakery/maison-becam-ifs"
  },
  {
    path: "/bakery/la-meule-de-pierre-ifs"
  },
  {
    path: "/bakery/la-petite-villette"
  },
  {
    path: "/bakery/boissiere"
  },
  {
    path: "/bakery/les-douceurs-du-tronquay"
  },
  {
    path: "/bakery/cheux-teddy"
  },
  {
    path: "/bakery/fournil-du-basque"
  },
  {
    path: "/bakery/fournil-du-gast"
  },
  {
    path: "/bakery/boulangerie-le-fournil-du-gastelier"
  },
  {
    path: "/bakery/maison-noel-colombelles"
  },
  {
    path: "/bakery/deauville"
  },
  {
    path: "/bakery/la-parisienne-deauville"
  },
  {
    path: "/bakery/comme-a-lisbonne"
  },
  {
    path: "/bakery/la-maison-de-la-patisserie-patisserie-artisanale"
  },
  {
    path: "/bakery/photo-comestible"
  },
  {
    path: "/bakery/boulangerie-laurent"
  },
  {
    path: "/bakery/boulangerie-roques-sarl"
  },
  {
    path: "/bakery/boulangerie-duche"
  },
  {
    path: "/bakery/boulangerie-de-may-sur-orne"
  },
  {
    path: "/bakery/aux-trois-chocolats"
  },
  {
    path: "/bakery/boulangerie-du-montel"
  },
  {
    path: "/bakery/boulangerie-du-montel-2"
  },
  {
    path: "/bakery/au-fournil-de-gespunsart"
  },
  {
    path: "/bakery/fouret-yohann"
  },
  {
    path: "/bakery/boulangerie-saint-arnoult"
  },
  {
    path: "/bakery/merci-jerome-motte-picquet"
  },
  {
    path: "/bakery/merci-jerome-kleber"
  },
  {
    path: "/bakery/patisserie-bouyges"
  },
  {
    path: "/bakery/mercier-nicolas"
  },
  {
    path: "/bakery/boulangerie-patisserie-gillier"
  },
  {
    path: "/bakery/boulangerie-patisserie-2"
  },
  {
    path: "/bakery/joanel-laurent"
  },
  {
    path: "/bakery/boulangerie-de-livry"
  },
  {
    path: "/bakery/le-fournil-saonois"
  },
  {
    path: "/bakery/fournil-basly"
  },
  {
    path: "/bakery/patisserie-le-daniel-boutique-le-laboratoire"
  },
  {
    path: "/bakery/kiosque-alma-le-daniel"
  },
  {
    path: "/bakery/patisserie-le-daniel-boutique-les-halles"
  },
  {
    path: "/bakery/patisserie-le-daniel"
  },
  {
    path: "/bakery/missy-s-gourmandises-douces"
  },
  {
    path: "/bakery/la-fromentine"
  },
  {
    path: "/bakery/la-fromentine-2"
  },
  {
    path: "/bakery/boulangerie-aux-gourmandises-de-claire"
  },
  {
    path: "/bakery/carbon"
  },
  {
    path: "/bakery/carbonneau-thierry"
  },
  {
    path: "/bakery/boulangerie-carbonnier"
  },
  {
    path: "/bakery/boulangerie-carbonera"
  },
  {
    path: "/bakery/maison-gelis-patisserie-chocolaterie-a-carbonne"
  },
  {
    path: "/bakery/aux-delices-de-theo"
  },
  {
    path: "/bakery/boulangerie-la-vignette"
  },
  {
    path: "/bakery/boulangerie-de-cernay"
  },
  {
    path: "/bakery/boulangerie-de-cernay-ismail."
  },
  {
    path: "/bakery/boulangerie-de-cernay-2"
  },
  {
    path: "/bakery/boulangerie-balleroy"
  },
  {
    path: "/bakery/patisserie-bibiche-cafe-gourmand"
  },
  {
    path: "/bakery/patisserie-b.authie-l-union"
  },
  {
    path: "/bakery/patisserie-b.authie-(saint-orens-de-gameville-31650)"
  },
  {
    path: "/bakery/patisserie-b.authie"
  },
  {
    path: "/bakery/aux-grains-de-folie"
  },
  {
    path: "/bakery/au-grain-de-folie"
  },
  {
    path: "/bakery/au-grain-de-malice"
  },
  {
    path: "/bakery/au-grain-de-ble"
  },
  {
    path: "/bakery/boulangerie-au-grain-d-or"
  },
  {
    path: "/bakery/boulangerie-maudet"
  },
  {
    path: "/bakery/boulangerie-leray"
  },
  {
    path: "/bakery/monts-pain"
  },
  {
    path: "/bakery/boulangerie-le-parvis-de-notre-dame"
  },
  {
    path: "/bakery/aux-delices-des-fourches-laval"
  },
  {
    path: "/bakery/boulangerie-longueville"
  },
  {
    path: "/bakery/le-vieux-pont"
  },
  {
    path: "/bakery/boulangerie-eric-kayser-honfleur-republique"
  },
  {
    path: "/bakery/boulangerie-la-honfleuraise"
  },
  {
    path: "/bakery/le-fournil-de-courson"
  },
  {
    path: "/bakery/au-fournil-d-emma"
  },
  {
    path: "/bakery/aux-delices-saint-charles"
  },
  {
    path: "/bakery/boulangerie-saint-charles"
  },
  {
    path: "/bakery/boulangerie-saint-charles-2"
  },
  {
    path: "/bakery/le-fournil-de-saint-charles"
  },
  {
    path: "/bakery/le-manoir-des-saveurs"
  },
  {
    path: "/bakery/au-manoir"
  },
  {
    path: "/bakery/l-assiette-du-boulanger"
  },
  {
    path: "/bakery/le-fournil-du-callouet"
  },
  {
    path: "/bakery/saint-ouen-touberville"
  },
  {
    path: "/bakery/les-delices-de-saint-ouen"
  },
  {
    path: "/bakery/boulangerie-patisserie-rouget"
  },
  {
    path: "/bakery/boulangerie-patisserie-gladines-daniel"
  },
  {
    path: "/bakery/besse-michel"
  },
  {
    path: "/bakery/borzeix-besse"
  },
  {
    path: "/bakery/boulangerie-patisserie-besse-david"
  },
  {
    path: "/bakery/boulangerie-patisserie-herve-besse"
  },
  {
    path: "/bakery/aux-delices-de-besse-mr-debree-loic"
  },
  {
    path: "/bakery/mamie-m-clavieres"
  },
  {
    path: "/bakery/crousti-pain"
  },
  {
    path: "/bakery/le-fournil-camarguais"
  },
  {
    path: "/bakery/boulangerie-patisserie-grimouille"
  },
  {
    path: "/bakery/boulangerie-corentin-cottier"
  },
  {
    path: "/bakery/biscuiterie-corentin"
  },
  {
    path: "/bakery/aux-delices-de-l-etoile-issy"
  },
  {
    path: "/bakery/patisserie-torres"
  },
  {
    path: "/bakery/la-petite-bayonnaise"
  },
  {
    path: "/bakery/roumegous"
  },
  {
    path: "/bakery/la-chanterelle"
  },
  {
    path: "/bakery/boulangerie-valette"
  },
  {
    path: "/bakery/valette-henri"
  },
  {
    path: "/bakery/valette-michel"
  },
  {
    path: "/bakery/valette-wilfrid-emile"
  },
  {
    path: "/bakery/boulangerie-saint-antoine"
  },
  {
    path: "/bakery/aux-delices-de-saint-antoine-boulangerie"
  },
  {
    path: "/bakery/boulangerie-st-antoine"
  },
  {
    path: "/bakery/boisset"
  },
  {
    path: "/bakery/la-fournee-de-boisset"
  },
  {
    path: "/bakery/la-boulange-saint-georges"
  },
  {
    path: "/bakery/le-comptoir-de-saint-georges"
  },
  {
    path: "/bakery/boulangerie-des-lauriers"
  },
  {
    path: "/bakery/le-fournil-de-saint-congard"
  },
  {
    path: "/bakery/la-boulangerie-de-laurie-et-gerald"
  },
  {
    path: "/bakery/100-pourcent-maison-by-laveissiere"
  },
  {
    path: "/bakery/patisserie-laveissiere"
  },
  {
    path: "/bakery/boulangerie-patisserie-persigny"
  },
  {
    path: "/bakery/boulangerie-person"
  },
  {
    path: "/bakery/boulangerie-persephone"
  },
  {
    path: "/bakery/persouyre-pascal"
  },
  {
    path: "/bakery/boulangerie-patisserie-aux-delices-de-chazelles"
  },
  {
    path: "/bakery/l-artisan-boulanger"
  },
  {
    path: "/bakery/au-macaron-de-massiac-boulet-julien-et-charlotte"
  },
  {
    path: "/bakery/le-faubourg-boulangerie-patisserie"
  },
  {
    path: "/bakery/au-faubourg-de-l-ecluse"
  },
  {
    path: "/bakery/couplet-armelle-et-nicolas"
  },
  {
    path: "/bakery/patisserie-eymoutiers-choubeurrepomme"
  },
  {
    path: "/bakery/lk-patisserie-de-luxe"
  },
  {
    path: "/bakery/aux-gouts-de-luxe"
  },
  {
    path: "/bakery/arsene-boulangerie-bio"
  },
  {
    path: "/bakery/arsac-david"
  },
  {
    path: "/bakery/arsene-le-pain"
  },
  {
    path: "/bakery/le-fournil-d-ars-en-re"
  },
  {
    path: "/bakery/boulangerie-de-l-arsenal"
  },
  {
    path: "/bakery/le-fournil-de-saint-eutrope"
  },
  {
    path: "/bakery/bonne-miette"
  },
  {
    path: "/bakery/aux-bonnes-recettes"
  },
  {
    path: "/bakery/boulangerie-les-bonnes-saveurs"
  },
  {
    path: "/bakery/boulangerie-les-bonnes-graines"
  },
  {
    path: "/bakery/la-couronne-d-or"
  },
  {
    path: "/bakery/la-couronne-des-pres"
  },
  {
    path: "/bakery/la-couronne"
  },
  {
    path: "/bakery/la-couronne-cauchoise"
  },
  {
    path: "/bakery/boulangerie-les-pins"
  },
  {
    path: "/bakery/boulangerie-les-pins-2"
  },
  {
    path: "/bakery/boulangerie-de-tesse"
  },
  {
    path: "/bakery/garat-boulangerie"
  },
  {
    path: "/bakery/boulangerie-garat-mathieu-eurl"
  },
  {
    path: "/bakery/boulangerie-garat"
  },
  {
    path: "/bakery/la-garatoise"
  },
  {
    path: "/bakery/la-garattine"
  },
  {
    path: "/bakery/boulangerie-patisserie-3"
  },
  {
    path: "/bakery/boulangerie-de-barros"
  },
  {
    path: "/bakery/boulangerie-baron-civrais"
  },
  {
    path: "/bakery/boulangerie-patisserie-julien-barroul"
  },
  {
    path: "/bakery/houle-gourmande"
  },
  {
    path: "/bakery/le-palais-du-dessert"
  },
  {
    path: "/bakery/palais-du-gourmet"
  },
  {
    path: "/bakery/boulangerie-patisserie-racine-(sarl-new-boulang)"
  },
  {
    path: "/bakery/boulangerie-juillet"
  },
  {
    path: "/bakery/magnac-sur-touvre"
  },
  {
    path: "/bakery/la-cigogne-et-le-fournil"
  },
  {
    path: "/bakery/la-biscuiterie-de-la-moutonne-maison-re"
  },
  {
    path: "/bakery/boulangerie-fournil-de-verneuil"
  },
  {
    path: "/bakery/souvignet"
  },
  {
    path: "/bakery/souvignet-david"
  },
  {
    path: "/bakery/boulangerie-souvignet"
  },
  {
    path: "/bakery/valence-croustillant"
  },
  {
    path: "/bakery/boulangerie-de-cognac-la-foret"
  },
  {
    path: "/bakery/cerise"
  },
  {
    path: "/bakery/cerise-&-chocolat"
  },
  {
    path: "/bakery/boulangerie-l-essentiel"
  },
  {
    path: "/bakery/boulangerie-patisserie-l-essentiel"
  },
  {
    path: "/bakery/de-l-essentiel-a-la-gourmandise"
  },
  {
    path: "/bakery/l-essentiel-de-mahoudeaux"
  },
  {
    path: "/bakery/boulangerie-l-essentiel-anthony-bosson"
  },
  {
    path: "/bakery/boulangerie-perlimpainpain-saint-romain"
  },
  {
    path: "/bakery/aux-ronsardises.-boulangerie-tabac-multiservices."
  },
  {
    path: "/bakery/le-nelson-la-boutique-du-centre"
  },
  {
    path: "/bakery/boulangerie-lafayette"
  },
  {
    path: "/bakery/au-pain-des-amis"
  },
  {
    path: "/bakery/pain-paillasse"
  },
  {
    path: "/bakery/au-pain-paillasse"
  },
  {
    path: "/bakery/le-pain-paillasse"
  },
  {
    path: "/bakery/la-paillasse"
  },
  {
    path: "/bakery/la-paillasse-2"
  },
  {
    path: "/bakery/le-fournil-de-saint-brice"
  },
  {
    path: "/bakery/patisserie-la-romainville-saint-brice-sous-foret"
  },
  {
    path: "/bakery/boulangerie-banette-gente"
  },
  {
    path: "/bakery/boulangerie-champniers-l-authentique"
  },
  {
    path: "/bakery/la-chabanaise"
  },
  {
    path: "/bakery/boulangerie-du-monaco"
  },
  {
    path: "/bakery/la-ronde-des-pains"
  },
  {
    path: "/bakery/la-ronde-des-pains-2"
  },
  {
    path: "/bakery/la-ronde-des-pains-3"
  },
  {
    path: "/bakery/la-ronde-des-pains-4"
  },
  {
    path: "/bakery/la-ronde-des-pains-5"
  },
  {
    path: "/bakery/la-boulangerie-la-clamartoise"
  },
  {
    path: "/bakery/boulangerie-cercoux"
  },
  {
    path: "/bakery/boulangerie-de-cire-d-aunis"
  },
  {
    path: "/bakery/boulangerie-patisserie-chatenet"
  },
  {
    path: "/bakery/la-boulangerie-des-forges"
  },
  {
    path: "/bakery/boulangerie-des-forges"
  },
  {
    path: "/bakery/fournil-saint-esprit"
  },
  {
    path: "/bakery/le-fournil-du-clion"
  },
  {
    path: "/bakery/aux-petites-douceurs"
  },
  {
    path: "/bakery/lesportes-mickael"
  },
  {
    path: "/bakery/l-atelier-ponseel-boulangerie-patisseries"
  },
  {
    path: "/bakery/boulangerie-patisserie-ponseel"
  },
  {
    path: "/bakery/boulangerie-juillard-pons"
  },
  {
    path: "/bakery/patisserie-glaces-pons"
  },
  {
    path: "/bakery/boulangerie-ponsardin"
  },
  {
    path: "/bakery/riou-thierry"
  },
  {
    path: "/bakery/biscuiterie-des-îles-maison-familiale-&-artisanal-depuis-1875"
  },
  {
    path: "/bakery/boulangerie-patisserie-4"
  },
  {
    path: "/bakery/boulangerie-de-l-isle"
  },
  {
    path: "/bakery/peresse-&-fils"
  },
  {
    path: "/bakery/perenchio-boulangerie"
  },
  {
    path: "/bakery/la-boulangerie-du-pere-pain-pain"
  },
  {
    path: "/bakery/peresse-&-fils-l-annexe-des-artisans"
  },
  {
    path: "/bakery/perez-aubert-christian-christian"
  },
  {
    path: "/bakery/anais-cookies-&-cie"
  },
  {
    path: "/bakery/anais-patisserie-fine"
  },
  {
    path: "/bakery/anais"
  },
  {
    path: "/bakery/anais-cupcakes-et-compagnie"
  },
  {
    path: "/bakery/anais-daval"
  },
  {
    path: "/bakery/le-fournil-de-ferrieres"
  },
  {
    path: "/bakery/madeleine-by-ferrieres"
  },
  {
    path: "/bakery/boulangerie-patisserie-migrenne"
  },
  {
    path: "/bakery/brangeon-frederic"
  },
  {
    path: "/bakery/brangeon-frederic-2"
  },
  {
    path: "/bakery/brandenberg"
  },
  {
    path: "/bakery/branthome-loic-et-ludivine"
  },
  {
    path: "/bakery/branlant-sebastien"
  },
  {
    path: "/bakery/boulangerie-bourneuf"
  },
  {
    path: "/bakery/le-paradis-des-delices-bourgneuf"
  },
  {
    path: "/bakery/boulangerie-saint-martin-maison-a&f"
  },
  {
    path: "/bakery/boulangerie-patisserie-saint-martinoise"
  },
  {
    path: "/bakery/a-la-reine-mathilde"
  },
  {
    path: "/bakery/le-fournil-saint-seurin"
  },
  {
    path: "/bakery/morgane-et-vincent"
  },
  {
    path: "/bakery/boulangerie-chez-morgane-et-jonathan"
  },
  {
    path: "/bakery/patisserie-morgane-sevrier"
  },
  {
    path: "/bakery/morgane-et-bruno"
  },
  {
    path: "/bakery/artisan-boulanger-durand-patrick-et-alexandra"
  },
  {
    path: "/bakery/saujon"
  },
  {
    path: "/bakery/pepite-cookie-la-rochelle"
  },
  {
    path: "/bakery/l-atelier-st-michel-la-rochelle"
  },
  {
    path: "/bakery/d-jolly-patissier-glacier-la-rochelle"
  },
  {
    path: "/bakery/paton-boulangerie-la-rochelle"
  },
  {
    path: "/bakery/boulangerie-de-la-barriere-cedric-lassau"
  },
  {
    path: "/bakery/boulangerie-benony"
  },
  {
    path: "/bakery/le-regal-bressan"
  },
  {
    path: "/bakery/sarl-benonnier"
  },
  {
    path: "/bakery/biscuits-arena"
  },
  {
    path: "/bakery/boulangerie-du-taillon....-patisserie"
  },
  {
    path: "/bakery/boulangerie-grain-d-pain-saint-georges"
  },
  {
    path: "/bakery/l-aiguille-capdenac"
  },
  {
    path: "/bakery/robin-des-pains"
  },
  {
    path: "/bakery/la-mie-aytresienne..artisan-boulanger-patissier"
  },
  {
    path: "/bakery/nektar-pont-l-abbe"
  },
  {
    path: "/bakery/nektar-brest"
  },
  {
    path: "/bakery/nektar-concarneau"
  },
  {
    path: "/bakery/nektar"
  },
  {
    path: "/bakery/nektar-benodet"
  },
  {
    path: "/bakery/fournil-de-la-tessone"
  },
  {
    path: "/bakery/contrepois-fabrice"
  },
  {
    path: "/bakery/la-nouvelle-boulangerie-royan"
  },
  {
    path: "/bakery/merci-jerome-italiens"
  },
  {
    path: "/bakery/le-rond-pain-de-saint-augustin"
  },
  {
    path: "/bakery/boulangerie-patisserie-st-augustin"
  },
  {
    path: "/bakery/old-bakery-cressely"
  },
  {
    path: "/bakery/crescent-moon-bakery"
  },
  {
    path: "/bakery/crescent-night"
  },
  {
    path: "/bakery/avy-bernard"
  },
  {
    path: "/bakery/avy-et-cie-martine"
  },
  {
    path: "/bakery/patisserie-avyel-salon-de-the"
  },
  {
    path: "/bakery/avy-etcie-martine"
  },
  {
    path: "/bakery/boulangerie-d-action-au-pain-d-autrefois."
  },
  {
    path: "/bakery/mirambeau-jean-jacques"
  },
  {
    path: "/bakery/naan-boulangerie-&-patisserie-villeurbanne-la-soie"
  },
  {
    path: "/bakery/boulangerie-st-jean-by-chip-s"
  },
  {
    path: "/bakery/boulangerie-saint-symphorien-un-bout-d-pin"
  },
  {
    path: "/bakery/boistelle-christian"
  },
  {
    path: "/bakery/boissinot-pascal"
  },
  {
    path: "/bakery/boissin-boulangerie"
  },
  {
    path: "/bakery/boisan-olivier"
  },
  {
    path: "/bakery/les-delices-de-pina"
  },
  {
    path: "/bakery/la-chadenacaise"
  },
  {
    path: "/bakery/boulangerie-patisserie-retaud"
  },
  {
    path: "/bakery/boulangerie-cervantes"
  },
  {
    path: "/bakery/saines-saveurs"
  },
  {
    path: "/bakery/boulangerie-patisserie-laurent"
  },
  {
    path: "/bakery/boulangerie-fournil-des-vignes"
  },
  {
    path: "/bakery/boulangerie-patisserie-le-grand"
  },
  {
    path: "/bakery/legrand-jerome"
  },
  {
    path: "/bakery/legrand-jerome-2"
  },
  {
    path: "/bakery/jerome-legrand"
  },
  {
    path: "/bakery/bironneau"
  },
  {
    path: "/bakery/bironneau-mathieu"
  },
  {
    path: "/bakery/boulangerie-biron"
  },
  {
    path: "/bakery/sa-brosset-la-brioche-de-vendrennes"
  },
  {
    path: "/bakery/boulangerie-d-esnandes"
  },
  {
    path: "/bakery/region-analanjirofo-sainte-marie-mananara-nord-maroantsetra"
  },
  {
    path: "/bakery/recreation-sucree-salee"
  },
  {
    path: "/bakery/patisserie-vergne-traiteur-glacier-chocolatier"
  },
  {
    path: "/bakery/patisserie-vergne-traiteur-glacier-chocolatier-(belfort)"
  },
  {
    path: "/bakery/vergne-frederic"
  },
  {
    path: "/bakery/fournil-de-vergnee"
  },
  {
    path: "/bakery/françois-vergne-patissier"
  },
  {
    path: "/bakery/rochefort-sur-mer"
  },
  {
    path: "/bakery/rochefort"
  },
  {
    path: "/bakery/boulangerie-patisserie-toublanc-valery"
  },
  {
    path: "/bakery/ballon"
  },
  {
    path: "/bakery/boulangerie-du-ballon"
  },
  {
    path: "/bakery/boulangerie-courcelle"
  },
  {
    path: "/bakery/boulangerie-maison-laborie"
  },
  {
    path: "/bakery/the-bakery-maguier-luzacaise-cake"
  },
  {
    path: "/bakery/la-meursacaise"
  },
  {
    path: "/bakery/boulangerie-s.-courant"
  },
  {
    path: "/bakery/la-douceur-coulongeoise"
  },
  {
    path: "/bakery/boulangerie-du-phare-2"
  },
  {
    path: "/bakery/les-3-marches"
  },
  {
    path: "/bakery/atelier-du-pain"
  },
  {
    path: "/bakery/atelin-jean-paul"
  },
  {
    path: "/bakery/boulangerie-moulin-robert"
  },
  {
    path: "/bakery/moulin-melou"
  },
  {
    path: "/bakery/yves-jehanne-patisserie-boulangerie"
  },
  {
    path: "/bakery/rivalain-yves"
  },
  {
    path: "/bakery/boulangerie-patisserie-piguel"
  },
  {
    path: "/bakery/la-bande-a-bonneau"
  },
  {
    path: "/bakery/pacallet-yves"
  },
  {
    path: "/bakery/la-seigneurie-compiegne"
  },
  {
    path: "/bakery/boulangerie-l-epi-d-or-epargnes"
  },
  {
    path: "/bakery/maison-perrin-merignac"
  },
  {
    path: "/bakery/domaine-des-macarons-de-reau"
  },
  {
    path: "/bakery/la-boulangerie-du-palais"
  },
  {
    path: "/bakery/boulangerie-du-palais"
  },
  {
    path: "/bakery/boulangerie-lb"
  },
  {
    path: "/bakery/le-fournil-prignacais"
  },
  {
    path: "/bakery/boulangerie-patisserie-grandjean"
  },
  {
    path: "/bakery/boulangerie-patisserie-grandjean-jean-marie"
  },
  {
    path: "/bakery/grandjean-jean-marie"
  },
  {
    path: "/bakery/boulangerie-eric-grandjean"
  },
  {
    path: "/bakery/boulangerie-patisserie-grandjean-2"
  },
  {
    path: "/bakery/patisserie-beurlay"
  },
  {
    path: "/bakery/boulangerie-patisserie-philot"
  },
  {
    path: "/bakery/le-petrin-saint-medard"
  },
  {
    path: "/bakery/paille-i-verde"
  },
  {
    path: "/bakery/maison-pailliette"
  },
  {
    path: "/bakery/paille-_-jean-françois"
  },
  {
    path: "/bakery/pailleret-alain"
  },
  {
    path: "/bakery/paillert-boulangerie-patisserie"
  },
  {
    path: "/bakery/monsieur-m-roubaix-(brunch)"
  },
  {
    path: "/bakery/monsieur-caramel"
  },
  {
    path: "/bakery/monsieur-tartine"
  },
  {
    path: "/bakery/monsieur-david-hodin"
  },
  {
    path: "/bakery/monsieur-misu"
  },
  {
    path: "/bakery/la-vallee-du-pain"
  },
  {
    path: "/bakery/la-vallee-gourmande"
  },
  {
    path: "/bakery/cafe-pierre-herme-paris"
  },
  {
    path: "/bakery/la-boulangerie-de-parnay"
  },
  {
    path: "/bakery/chambon-freres"
  },
  {
    path: "/bakery/chambon-freres-chambon-romain"
  },
  {
    path: "/bakery/boulangerie-m-&-c-chambon"
  },
  {
    path: "/bakery/maison-chambon"
  },
  {
    path: "/bakery/le-fondant-de-vierzon"
  },
  {
    path: "/bakery/le-fondant-de-vierzon-village"
  },
  {
    path: "/bakery/au-fournil-du-buech"
  },
  {
    path: "/bakery/le-fournil-de-mon-enfance"
  },
  {
    path: "/bakery/boulangerie-st-maurice-pellevoisin"
  },
  {
    path: "/bakery/le-fournil-de-la-grotte-aux-fees"
  },
  {
    path: "/bakery/la-griotte-boulangerie-patisserie"
  },
  {
    path: "/bakery/patisserie-traiteur-chaumontet-&-co"
  },
  {
    path: "/bakery/artizarra"
  },
  {
    path: "/bakery/au-fournil-chaumontais"
  },
  {
    path: "/bakery/boulangerie-patisserie-c.croisyl"
  },
  {
    path: "/bakery/boulangerie-patisserie-c.croisyl-2"
  },
  {
    path: "/bakery/boulangerie-couston-valery"
  },
  {
    path: "/bakery/boulangerie-patisserie-lyse"
  },
  {
    path: "/bakery/boulangerie-gerard-levetti"
  },
  {
    path: "/bakery/la-fille-du-boulanger"
  },
  {
    path: "/bakery/boulangerie-maison-ligerot"
  },
  {
    path: "/bakery/boulangerie-porte-d-alsace"
  },
  {
    path: "/bakery/boulangerie-patisserie-de-chavannes"
  },
  {
    path: "/bakery/boulangerie-patisserie-mereau"
  },
  {
    path: "/bakery/boulangerie-merour"
  },
  {
    path: "/bakery/panade"
  },
  {
    path: "/bakery/le-fournil-de-quincy"
  },
  {
    path: "/bakery/boulangerie-la-chery"
  },
  {
    path: "/bakery/charly-et-maeva"
  },
  {
    path: "/bakery/charly-b"
  },
  {
    path: "/bakery/boulangerie-charly"
  },
  {
    path: "/bakery/boulangerie-reymond"
  },
  {
    path: "/bakery/herve-thierry-raymond"
  },
  {
    path: "/bakery/rauly-philippe"
  },
  {
    path: "/bakery/boulangerie-raymond-morel:-boulangerie-patisserie-traiteur"
  },
  {
    path: "/bakery/raymond-legrand-vendeuil"
  },
  {
    path: "/bakery/boulangerie-torteron"
  },
  {
    path: "/bakery/boulangerie-nancay"
  },
  {
    path: "/bakery/au-feu-de-bois"
  },
  {
    path: "/bakery/aux-saveurs-de-b"
  },
  {
    path: "/bakery/biscuits-landon-d-auvergne"
  },
  {
    path: "/bakery/boulangerie-bio-la-panetiere-des-hameaux-pornic"
  },
  {
    path: "/bakery/la-panif-"
  },
  {
    path: "/bakery/la-paniere-vallee"
  },
  {
    path: "/bakery/la-paniere-gaillard"
  },
  {
    path: "/bakery/la-paniere-le-kiosque"
  },
  {
    path: "/bakery/le-relais-des-desserts"
  },
  {
    path: "/bakery/boulangerie-patisserie-le-fournil-lereen"
  },
  {
    path: "/bakery/boulangerie-patisserie-lerebourg"
  },
  {
    path: "/bakery/le-relais-de-merignies"
  },
  {
    path: "/bakery/thouvenot-lionel"
  },
  {
    path: "/bakery/boulangerie-patisserie-thouret"
  },
  {
    path: "/bakery/thouez-philippe"
  },
  {
    path: "/bakery/boulangerie-patisserie-thouvenin"
  },
  {
    path: "/bakery/maison-thoury"
  },
  {
    path: "/bakery/cheres-cousines-bagels"
  },
  {
    path: "/bakery/a-la-plouguinoise"
  },
  {
    path: "/bakery/la-ploubezroise"
  },
  {
    path: "/bakery/le-fournil-de-ploubaz"
  },
  {
    path: "/bakery/aux-delices-de-ploubaz"
  },
  {
    path: "/bakery/boulangerie-bussy"
  },
  {
    path: "/bakery/patisserie-maison-marteau-bussy-saint-georges"
  },
  {
    path: "/bakery/le-pave-de-murigny"
  },
  {
    path: "/bakery/aux-delices-de-turenne"
  },
  {
    path: "/bakery/saint-paul-pain"
  },
  {
    path: "/bakery/le-saint-paul-by-j.a"
  },
  {
    path: "/bakery/alleyrat-jean-pierre"
  },
  {
    path: "/bakery/le-relais-gourmand"
  },
  {
    path: "/bakery/la-figounette-argentat"
  },
  {
    path: "/bakery/rochette-heroz"
  },
  {
    path: "/bakery/boulangerie-aixoise"
  },
  {
    path: "/bakery/ayandra-creil"
  },
  {
    path: "/bakery/boulangerie-au-festival-des-pains"
  },
  {
    path: "/bakery/boulangerie-patisserie-cornile-louis."
  },
  {
    path: "/bakery/boulangerie-patisserie-cornillier"
  },
  {
    path: "/bakery/boulangerie-cornillon"
  },
  {
    path: "/bakery/cournille-etablissements"
  },
  {
    path: "/bakery/viennoiserie-patisserie"
  },
  {
    path: "/bakery/viennoiserie-de-menin"
  },
  {
    path: "/bakery/viennoiserie-zola"
  },
  {
    path: "/bakery/viennoiserie-du-brun-pain"
  },
  {
    path: "/bakery/viennoiseries-du-colbras"
  },
  {
    path: "/bakery/sarl-aux-delices-seilhacois"
  },
  {
    path: "/bakery/patisserie-feyt"
  },
  {
    path: "/bakery/barnabe-boulangerie-patisserie"
  },
  {
    path: "/bakery/barnabe-boulangerie-patisserie-2"
  },
  {
    path: "/bakery/bärä"
  },
  {
    path: "/bakery/barnabe-boulangerie-patisserie-3"
  },
  {
    path: "/bakery/bara-lanester"
  },
  {
    path: "/bakery/le-jardin-sucre"
  },
  {
    path: "/bakery/le-jardin-sucre-2"
  },
  {
    path: "/bakery/le-jardin-des-douceurs-patisserie-orientale"
  },
  {
    path: "/bakery/le-jardin-des-anges"
  },
  {
    path: "/bakery/le-jardin-des-gourmandises"
  },
  {
    path: "/bakery/boulangerie-de-l-eglise"
  },
  {
    path: "/bakery/la-boulangerie-de-l-eglise"
  },
  {
    path: "/bakery/boulangerie-patisserie-de-l-eglise"
  },
  {
    path: "/bakery/le-fournil-meymacois-ratelade-guillaume"
  },
  {
    path: "/bakery/la-ptite-boulange"
  },
  {
    path: "/bakery/le-fournil-du-talmeunier"
  },
  {
    path: "/bakery/maison-saint-jalme-juan-les-pins"
  },
  {
    path: "/bakery/maison-saint-jalme-antibes"
  },
  {
    path: "/bakery/maison-bave"
  },
  {
    path: "/bakery/boulangerie-patisserie-noailles"
  },
  {
    path: "/bakery/boulangerie-julien"
  },
  {
    path: "/bakery/neuville-jean-louis"
  },
  {
    path: "/bakery/le-fournil-de-nord"
  },
  {
    path: "/bakery/la-boulange-rit"
  },
  {
    path: "/bakery/leroy-isabelle-&-sebastien-boulanger-patissier-chocolatier"
  },
  {
    path: "/bakery/leroy-herve"
  },
  {
    path: "/bakery/leroy-philippe"
  },
  {
    path: "/bakery/boulangerie-leroy-monti"
  },
  {
    path: "/bakery/leroy-mickael"
  },
  {
    path: "/bakery/victoire-boulangerie"
  },
  {
    path: "/bakery/victor-et-compagnie-ecully"
  },
  {
    path: "/bakery/victor-et-compagnie-craponne"
  },
  {
    path: "/bakery/victoire-s-delices"
  },
  {
    path: "/bakery/victor-le-boulanger-rillieux-la-pape"
  },
  {
    path: "/bakery/boulangerie-saint-helier"
  },
  {
    path: "/bakery/boulangerie-saint-helier-2"
  },
  {
    path: "/bakery/le-puits-d-amour"
  },
  {
    path: "/bakery/le-puits-d-amour-2"
  },
  {
    path: "/bakery/le-puits-d-amour-maison-seguin-captieux"
  },
  {
    path: "/bakery/patisserie-au-puits-d-amour"
  },
  {
    path: "/bakery/au-puits-savoyard"
  },
  {
    path: "/bakery/le-fournil-des-diablotins-boulangerie-bio-au-levain-marche-de-nuits-saint-georges"
  },
  {
    path: "/bakery/foissy-loic"
  },
  {
    path: "/bakery/a-votre-goût"
  },
  {
    path: "/bakery/la-p-tite-chambertine"
  },
  {
    path: "/bakery/le-chalet-du-pain"
  },
  {
    path: "/bakery/les-pains-de-longchamps"
  },
  {
    path: "/bakery/le-fournil-de-rougemont."
  },
  {
    path: "/bakery/boulangerie-patisserie-rougemont"
  },
  {
    path: "/bakery/la-rougemontoise"
  },
  {
    path: "/bakery/le-grignon-d-pain"
  },
  {
    path: "/bakery/la-grignonaise"
  },
  {
    path: "/bakery/le-grignon-d-pain-2"
  },
  {
    path: "/bakery/le-grignon-d-pain-3"
  },
  {
    path: "/bakery/le-fournil-du-grignon-d-pain"
  },
  {
    path: "/bakery/boulangeriepatisserie-le-delice-de-davezieux"
  },
  {
    path: "/bakery/la-boulangerie-d-oriana"
  },
  {
    path: "/bakery/la-paniere-saint-julien-en-genevois"
  },
  {
    path: "/bakery/brain-de-ble"
  },
  {
    path: "/bakery/biscuits-mistral-beaune"
  },
  {
    path: "/bakery/la-bruyere"
  },
  {
    path: "/bakery/au-pain-royal"
  },
  {
    path: "/bakery/pain-noir-pain-blanc-boulangerie-bio-au-levain-naturel"
  },
  {
    path: "/bakery/le-pain-blanc"
  },
  {
    path: "/bakery/dijon"
  },
  {
    path: "/bakery/pralus-dijon-:-patisserie-chocolaterie"
  },
  {
    path: "/bakery/patisserie-des-dijonnais-ben-&-stef"
  },
  {
    path: "/bakery/maison-paroty-dijon-theatre"
  },
  {
    path: "/bakery/mon-plaisir-gourmand"
  },
  {
    path: "/bakery/boulangerie-patisserie-jouet"
  },
  {
    path: "/bakery/l-aubaine"
  },
  {
    path: "/bakery/biscuiterie-la-mere-poulard-magasin-de-vente-directe"
  },
  {
    path: "/bakery/au-ble-du-coin"
  },
  {
    path: "/bakery/la-cave-a-pains-2"
  },
  {
    path: "/bakery/le-pain-de-la-fontaine"
  },
  {
    path: "/bakery/j&b-boulangerie"
  },
  {
    path: "/bakery/tresse-nicolas"
  },
  {
    path: "/bakery/la-fete-des-pains"
  },
  {
    path: "/bakery/boulangerie-des-tilleuls"
  },
  {
    path: "/bakery/chateauneuf-du-pain"
  },
  {
    path: "/bakery/boulangerie-vertu-(regalade)"
  },
  {
    path: "/bakery/talant"
  },
  {
    path: "/bakery/boulangerie-daix"
  },
  {
    path: "/bakery/les-delices-patisserie-d-aix"
  },
  {
    path: "/bakery/larray-françois"
  },
  {
    path: "/bakery/jocteur-le-boulanger-de-lentilly"
  },
  {
    path: "/bakery/banette-buxerolles-epi-de-blais"
  },
  {
    path: "/bakery/chez-lux-saint-barthelemy"
  },
  {
    path: "/bakery/ben-et-lux-sarl"
  },
  {
    path: "/bakery/boulangerie-tony-lux"
  },
  {
    path: "/bakery/chez-lux-lux-du-lycee"
  },
  {
    path: "/bakery/chez-lux"
  },
  {
    path: "/bakery/boulangerie-du-vieux-chateau"
  },
  {
    path: "/bakery/boulangerie-minotine"
  },
  {
    path: "/bakery/minotine-89-boulanger-patissier"
  },
  {
    path: "/bakery/le-petit-minotier"
  },
  {
    path: "/bakery/les-minots-de-republique"
  },
  {
    path: "/bakery/shop-biscuit-abbey"
  },
  {
    path: "/bakery/boulangerie-patisserie-de-l-abbaye"
  },
  {
    path: "/bakery/le-fournil-de-l-abbaye"
  },
  {
    path: "/bakery/le-fournil-de-l-abbaye-2"
  },
  {
    path: "/bakery/au-coeur-de-la-gourmandise-charny-89"
  },
  {
    path: "/bakery/boulangerie-buffon-pains-viennoiseries-et-patisseries-bio"
  },
  {
    path: "/bakery/maison-bihan"
  },
  {
    path: "/bakery/biscuits-mistral-semur-en-auxois"
  },
  {
    path: "/bakery/boulangerie-patisserie-pont-tabarly"
  },
  {
    path: "/bakery/pontlevy-jean-luc"
  },
  {
    path: "/bakery/boulangerie-patisserie-pontoise"
  },
  {
    path: "/bakery/boulangerie-patisserie-pontet"
  },
  {
    path: "/bakery/patisserie-la-romainville-bretigny-sur-orge"
  },
  {
    path: "/bakery/boulangerie-de-montmain"
  },
  {
    path: "/bakery/boulangerie-patisserie-paumard-cantenay"
  },
  {
    path: "/bakery/boulangerie-saint-fiacre-avon"
  },
  {
    path: "/bakery/perreton-boulangerie"
  },
  {
    path: "/bakery/perret-olivier"
  },
  {
    path: "/bakery/boulangerie-perret"
  },
  {
    path: "/bakery/maison-perret"
  },
  {
    path: "/bakery/boulangerie-olivier-de-peretti"
  },
  {
    path: "/bakery/fournil-quevertois"
  },
  {
    path: "/bakery/le-fournil-bio-du-trieux"
  },
  {
    path: "/bakery/boulangerie-en-terre-de-vie"
  },
  {
    path: "/bakery/ricard-sylvain"
  },
  {
    path: "/bakery/rica.bs"
  },
  {
    path: "/bakery/poulaillon"
  },
  {
    path: "/bakery/pratali-et-fils"
  },
  {
    path: "/bakery/pratblli-depot-de-pain"
  },
  {
    path: "/bakery/boulangerie-corlay"
  },
  {
    path: "/bakery/patisserie-rehel-widmer"
  },
  {
    path: "/bakery/solignac-pierre"
  },
  {
    path: "/bakery/maison-solignac"
  },
  {
    path: "/bakery/au-croissant-d-or-maison-solignac"
  },
  {
    path: "/bakery/maison-solignac-2"
  },
  {
    path: "/bakery/boulangerie-patisserie-solignac"
  },
  {
    path: "/bakery/poulaillon-vieux-marche-aux-poissons"
  },
  {
    path: "/bakery/au-fournil-des-matignon"
  },
  {
    path: "/bakery/biscuiterie-saint-guenole"
  },
  {
    path: "/bakery/boulangerie-patisserie-du-port"
  },
  {
    path: "/bakery/boulangerie-patisserie-tremelo-l-atelier-gourmand-d-eric-et-julien"
  },
  {
    path: "/bakery/la-trelevernaise"
  },
  {
    path: "/bakery/boulangerie-patisserie-henon"
  },
  {
    path: "/bakery/boulangerie-henon-madeleine"
  },
  {
    path: "/bakery/la-cheze"
  },
  {
    path: "/bakery/boulangerie-morieux"
  },
  {
    path: "/bakery/pierre-morieux"
  },
  {
    path: "/bakery/patisserie-berthet"
  },
  {
    path: "/bakery/patisserie-berthet-2"
  },
  {
    path: "/bakery/boulangerie-patisserie-berthet"
  },
  {
    path: "/bakery/artisan-boulanger-patissier-a&b-le-mat"
  },
  {
    path: "/bakery/boulangerie-cavan"
  },
  {
    path: "/bakery/boutique-gavottes-taden"
  },
  {
    path: "/bakery/boulangerie-la-vicomte"
  },
  {
    path: "/bakery/paulette"
  },
  {
    path: "/bakery/patisserie-micheline-et-paulette"
  },
  {
    path: "/bakery/la-mie-paulette"
  },
  {
    path: "/bakery/paulet-angelique"
  },
  {
    path: "/bakery/pain-paulette"
  },
  {
    path: "/bakery/guitteny-sarl"
  },
  {
    path: "/bakery/patisserie-guitter"
  },
  {
    path: "/bakery/aux-delices-crehennais"
  },
  {
    path: "/bakery/boulangerie-patisserie-artisanale-chausson-jean"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-lamotte"
  },
  {
    path: "/bakery/boulangerie-patisserie-lamotte-des-pains"
  },
  {
    path: "/bakery/le-fournil-du-menez"
  },
  {
    path: "/bakery/soumans-boulangerie-viennoiserie"
  },
  {
    path: "/bakery/n-othe-farine"
  },
  {
    path: "/bakery/n-et-jp-cayet"
  },
  {
    path: "/bakery/n&n-boulanger-patissier"
  },
  {
    path: "/bakery/n.b-delices-moulin-du-rondeau"
  },
  {
    path: "/bakery/christophe-brousse"
  },
  {
    path: "/bakery/chardon-bleu-espace-gourmet-lorraine"
  },
  {
    path: "/bakery/chardon-bleu-albert-1er-de-belgique"
  },
  {
    path: "/bakery/chardon-bleu-espace-gourmet-republique"
  },
  {
    path: "/bakery/chardon-bleu-le-versoud"
  },
  {
    path: "/bakery/chardon-bleu-biviers"
  },
  {
    path: "/bakery/au-temple-du-pain"
  },
  {
    path: "/bakery/patisserie-villard"
  },
  {
    path: "/bakery/villard-ludovic"
  },
  {
    path: "/bakery/le-fournil-de-bussiere"
  },
  {
    path: "/bakery/boulangerie-bonnat"
  },
  {
    path: "/bakery/leyrat-jean"
  },
  {
    path: "/bakery/maison-leyrat"
  },
  {
    path: "/bakery/maison-leyrat-garches"
  },
  {
    path: "/bakery/l-art-du-pain-linars"
  },
  {
    path: "/bakery/patisserie-feuille-d-or"
  },
  {
    path: "/bakery/boulangerie-feuillette-4"
  },
  {
    path: "/bakery/boulangerie-feuillette-5"
  },
  {
    path: "/bakery/boulangerie-feuillette-6"
  },
  {
    path: "/bakery/le-compastis"
  },
  {
    path: "/bakery/signature-au-38"
  },
  {
    path: "/bakery/boulangerie-signature"
  },
  {
    path: "/bakery/la-signature-des-artisans"
  },
  {
    path: "/bakery/boulangerie-signature-by-degrange-rue-d-antibes"
  },
  {
    path: "/bakery/boulangerie-signature-by-degrange-rue-jean-jaures"
  },
  {
    path: "/bakery/le-fournil-des-arenes"
  },
  {
    path: "/bakery/les-fournils-des-arenes"
  },
  {
    path: "/bakery/le-bleu-boulangerie-arenes-toulouse"
  },
  {
    path: "/bakery/crock-n-mie"
  },
  {
    path: "/bakery/croc-gourmand"
  },
  {
    path: "/bakery/croc-miam"
  },
  {
    path: "/bakery/croc-&-moi"
  },
  {
    path: "/bakery/croc-d-aquí"
  },
  {
    path: "/bakery/festival-des-pains"
  },
  {
    path: "/bakery/morel-jean-louis"
  },
  {
    path: "/bakery/la-montagnette"
  },
  {
    path: "/bakery/le-fournil-crozantais"
  },
  {
    path: "/bakery/le-dunois"
  },
  {
    path: "/bakery/banette-(battesti-&-bettelani)"
  },
  {
    path: "/bakery/o-delice-de-la-plaine"
  },
  {
    path: "/bakery/boulangerie-la-feuilletiere-«-les-champs-du-pain-»"
  },
  {
    path: "/bakery/les-champs-du-destin-pains-et-chocolats-bio"
  },
  {
    path: "/bakery/les-champs-de-la-deme"
  },
  {
    path: "/bakery/lafayette-delights"
  },
  {
    path: "/bakery/boulangerie-lafayette-2"
  },
  {
    path: "/bakery/boulangerie-malatier-lafayette-lyon-3"
  },
  {
    path: "/bakery/boulangerie-delices-lafayette"
  },
  {
    path: "/bakery/le-fournil-de-lanouaille"
  },
  {
    path: "/bakery/auriat-pascal"
  },
  {
    path: "/bakery/boulangerie-patisserie-j&g"
  },
  {
    path: "/bakery/le-fournil-des-fougeres"
  },
  {
    path: "/bakery/la-boulangerie-de-badefols-sur-dordogne"
  },
  {
    path: "/bakery/boulangerie-de-l-hermitage"
  },
  {
    path: "/bakery/riberac"
  },
  {
    path: "/bakery/pierre-herme-saint-louis"
  },
  {
    path: "/bakery/boulangerie-le-moulin"
  },
  {
    path: "/bakery/la-boulangerie-de-meyrals"
  },
  {
    path: "/bakery/l-isle-aux-pains-boulangerie-patisserie"
  },
  {
    path: "/bakery/l-isle-aux-pains-2"
  },
  {
    path: "/bakery/boulangerie-patisserie-boisseau"
  },
  {
    path: "/bakery/boulangerie-boisselier-la-miette-de-pain"
  },
  {
    path: "/bakery/boulangerie-des-delices"
  },
  {
    path: "/bakery/maison-colibri"
  },
  {
    path: "/bakery/boulangerie-colisee-gourmet"
  },
  {
    path: "/bakery/colin-sebastien"
  },
  {
    path: "/bakery/maison-colin"
  },
  {
    path: "/bakery/le-petrin-saint-lazare"
  },
  {
    path: "/bakery/laduree"
  },
  {
    path: "/bakery/saint-lazare-la-boulangerie"
  },
  {
    path: "/bakery/krispy-kreme-cc-saint-lazare"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-ginestet-cros-lombers"
  },
  {
    path: "/bakery/boulangerie-patisserie-bardoulet"
  },
  {
    path: "/bakery/la-gourmandise-2"
  },
  {
    path: "/bakery/maison-carre"
  },
  {
    path: "/bakery/au-buisson-dore"
  },
  {
    path: "/bakery/le-fournil-de-saint-gery"
  },
  {
    path: "/bakery/l-art-et-le-pain"
  },
  {
    path: "/bakery/la-riviere-des-delices"
  },
  {
    path: "/bakery/la-riviere-des-pains"
  },
  {
    path: "/bakery/boulangerie-le-fournil-de-varennes"
  },
  {
    path: "/bakery/boulangerie-patisserie-jordery"
  },
  {
    path: "/bakery/la-caleche"
  },
  {
    path: "/bakery/le-fournil-des-grives"
  },
  {
    path: "/bakery/boulangerie-des-grives"
  },
  {
    path: "/bakery/le-fournil-d-issac"
  },
  {
    path: "/bakery/isaac-sebastien"
  },
  {
    path: "/bakery/le-petrin-des-saveurs-boulangerie-patisserie-snacking"
  },
  {
    path: "/bakery/maison-isaac"
  },
  {
    path: "/bakery/festival-des-pains-artisan-boulanger"
  },
  {
    path: "/bakery/artisan-boulangerie-villars"
  },
  {
    path: "/bakery/la-maie-de-saint-genies"
  },
  {
    path: "/bakery/le-petrin-de-saint-genies"
  },
  {
    path: "/bakery/boulangerie-verdon"
  },
  {
    path: "/bakery/verdon"
  },
  {
    path: "/bakery/boulangerie-de-saint-agne"
  },
  {
    path: "/bakery/ma-boulangerie-cafe-reze"
  },
  {
    path: "/bakery/boulangerie-de-mareuil-sur-cher"
  },
  {
    path: "/bakery/boulangerie-lamonzie-saint-martin"
  },
  {
    path: "/bakery/le-fournil-de-lavaur"
  },
  {
    path: "/bakery/boulangerie-lacassagne"
  },
  {
    path: "/bakery/boulangerie-la-cassagne"
  },
  {
    path: "/bakery/boulangerie-patisserie-domme-mikael"
  },
  {
    path: "/bakery/pain-paulin"
  },
  {
    path: "/bakery/la-jaures...artisan-boulanger..patissier"
  },
  {
    path: "/bakery/le-jaures"
  },
  {
    path: "/bakery/mialet-alain"
  },
  {
    path: "/bakery/patisserie-laurent"
  },
  {
    path: "/bakery/campagne-boulangerie-bonlieu"
  },
  {
    path: "/bakery/campagne-boulangerie-faubourg"
  },
  {
    path: "/bakery/campagne-et-saveurs"
  },
  {
    path: "/bakery/boulangerie-pain-de-campagne-patisserie"
  },
  {
    path: "/bakery/pain-de-campagne"
  },
  {
    path: "/bakery/boulangerie-patisserie-castelsagrat"
  },
  {
    path: "/bakery/la-boulangerie-des-molieres"
  },
  {
    path: "/bakery/boulangerie-des-molieres"
  },
  {
    path: "/bakery/la-chanteracoise"
  },
  {
    path: "/bakery/boulangerie-saint-antoine-2"
  },
  {
    path: "/bakery/le-four-de-st-antoine"
  },
  {
    path: "/bakery/fournil-de-gardonnenque"
  },
  {
    path: "/bakery/boulangerie-hautefort"
  },
  {
    path: "/bakery/au-tour-des-traditions"
  },
  {
    path: "/bakery/la-brioche-gelineau"
  },
  {
    path: "/bakery/le-fournil-du-mont-d-or"
  },
  {
    path: "/bakery/orven-chimney-cake"
  },
  {
    path: "/bakery/le-fournil-de-morteau"
  },
  {
    path: "/bakery/gosselin-saint-germain"
  },
  {
    path: "/bakery/boulangerie-patisserie-mandon"
  },
  {
    path: "/bakery/bulle-boulangerie"
  },
  {
    path: "/bakery/bulles-de-sucre-bulles-de-jouets-et-de-jeux-guyajeux-courcelles"
  },
  {
    path: "/bakery/bulles-de-levain"
  },
  {
    path: "/bakery/la-bulle-sucree-de-marie"
  },
  {
    path: "/bakery/boulangerie-rouges"
  },
  {
    path: "/bakery/boulangerie-rouge"
  },
  {
    path: "/bakery/rouget-jean-claude"
  },
  {
    path: "/bakery/boulangerie-patisserie-sandwich-l-airelle"
  },
  {
    path: "/bakery/l-aire-du-boulanger"
  },
  {
    path: "/bakery/laurent-duchene-paris-13eme"
  },
  {
    path: "/bakery/laurent-duchene"
  },
  {
    path: "/bakery/laurent-duchene-vincennes-patisserie-et-cafe-boutique"
  },
  {
    path: "/bakery/boulangerie-patisserie-sarazin"
  },
  {
    path: "/bakery/sarrazin-sarah"
  },
  {
    path: "/bakery/b.y.b-gastronomie"
  },
  {
    path: "/bakery/by-josephine"
  },
  {
    path: "/bakery/by-baddache"
  },
  {
    path: "/bakery/la-byzantine"
  },
  {
    path: "/bakery/by-diana-patisserie"
  },
  {
    path: "/bakery/la-bossue"
  },
  {
    path: "/bakery/le-four-gien"
  },
  {
    path: "/bakery/barthelaix-sarl"
  },
  {
    path: "/bakery/patissier-chocolatier-barthelemy"
  },
  {
    path: "/bakery/barthoulot-philippe"
  },
  {
    path: "/bakery/barthelemy-guillaume"
  },
  {
    path: "/bakery/boulangerie-patisserie-barthelemy"
  },
  {
    path: "/bakery/marc-verdant-les-gravilliers-pontarlier"
  },
  {
    path: "/bakery/soyez-gourmands"
  },
  {
    path: "/bakery/boulangerie-patisserie-soyez-gourmands"
  },
  {
    path: "/bakery/soyez-gourmands-2"
  },
  {
    path: "/bakery/maison-vernet"
  },
  {
    path: "/bakery/vernet-michel"
  },
  {
    path: "/bakery/verney-cyrille"
  },
  {
    path: "/bakery/boulangerie-patisserie-verney"
  },
  {
    path: "/bakery/patisserie-vernet"
  },
  {
    path: "/bakery/boulangerie-cleron-james"
  },
  {
    path: "/bakery/lombard-pascal"
  },
  {
    path: "/bakery/lombard-alain"
  },
  {
    path: "/bakery/lombard-duban-veronique"
  },
  {
    path: "/bakery/donze-didier"
  },
  {
    path: "/bakery/boulangerie-du-marche-lombard"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-9"
  },
  {
    path: "/bakery/boulangerie-patisserie-mathey"
  },
  {
    path: "/bakery/maison-vaucamps-dunkerque-centre"
  },
  {
    path: "/bakery/maison-vaucamps-malo-les-bains"
  },
  {
    path: "/bakery/le-secret-des-pains-71590-gergy-lisa-et-maximilien-marchal-glain"
  },
  {
    path: "/bakery/le-fournil-de-l-epeautre-boulangerie-patisserie-eric-ragon"
  },
  {
    path: "/bakery/françois-pralus-croix-rousse"
  },
  {
    path: "/bakery/françois-la-patisserie"
  },
  {
    path: "/bakery/françois-descamps"
  },
  {
    path: "/bakery/francois"
  },
  {
    path: "/bakery/boulangerie-patisserie-belmonte"
  },
  {
    path: "/bakery/boulangerie-patisserie-belmonte-2"
  },
  {
    path: "/bakery/les-doubs-biscuits"
  },
  {
    path: "/bakery/aux-doub-soeurs"
  },
  {
    path: "/bakery/le-fournil-de-sainte-anne"
  },
  {
    path: "/bakery/fournil-de-pierre"
  },
  {
    path: "/bakery/au-fournil-sainte-anne"
  },
  {
    path: "/bakery/le-moulin-d-ivaldi"
  },
  {
    path: "/bakery/boulangerie-torpes"
  },
  {
    path: "/bakery/boulangerie-buffard"
  },
  {
    path: "/bakery/morreale-stephane"
  },
  {
    path: "/bakery/maison-l-orayane"
  },
  {
    path: "/bakery/le-campagn-art"
  },
  {
    path: "/bakery/le-campagne"
  },
  {
    path: "/bakery/boulangerie-patisserie-le-campagnard"
  },
  {
    path: "/bakery/la-manufacture-du-pain"
  },
  {
    path: "/bakery/boulangerie-marcel-lyon"
  },
  {
    path: "/bakery/pierre-herme-gare-lyon-part-dieu"
  },
  {
    path: "/bakery/pralus-lyon-saint-jean-:-patisserie-chocolaterie"
  },
  {
    path: "/bakery/samson-frederic"
  },
  {
    path: "/bakery/au-bon-pain-de-campagne"
  },
  {
    path: "/bakery/boulangerie-savigny"
  },
  {
    path: "/bakery/boulangerie-giraud-samson"
  },
  {
    path: "/bakery/le-moncey"
  },
  {
    path: "/bakery/boulangerie-genest-s"
  },
  {
    path: "/bakery/la-genesienne"
  },
  {
    path: "/bakery/genest-s-liszt"
  },
  {
    path: "/bakery/la-gourmandise-du-blamont"
  },
  {
    path: "/bakery/la-blamontaise"
  },
  {
    path: "/bakery/boulangerie-a.-fougeray"
  },
  {
    path: "/bakery/regal-roosevelt-rhone-delices"
  },
  {
    path: "/bakery/patisserie-la-romainville-creteil-(carrefour-pompadour)"
  },
  {
    path: "/bakery/patisserie-la-romainville-morangis"
  },
  {
    path: "/bakery/la-romainville"
  },
  {
    path: "/bakery/boulangerie-besançon"
  },
  {
    path: "/bakery/donuts-factory-besançon"
  },
  {
    path: "/bakery/baud-patisserie-besançon-centre"
  },
  {
    path: "/bakery/la-grange-des-pains"
  },
  {
    path: "/bakery/la-grange-a-pain-sarl"
  },
  {
    path: "/bakery/la-grange-de-nathalie"
  },
  {
    path: "/bakery/la-grange-aux-saveurs"
  },
  {
    path: "/bakery/la-grange-aux-pains"
  },
  {
    path: "/bakery/boulangerie-novillars"
  },
  {
    path: "/bakery/boulangerie-chazot-eurl"
  },
  {
    path: "/bakery/patisserie-etchebaster"
  },
  {
    path: "/bakery/boulangerie-crestey"
  },
  {
    path: "/bakery/maison-crest"
  },
  {
    path: "/bakery/l-oule-de-ble"
  },
  {
    path: "/bakery/dietsch-georges"
  },
  {
    path: "/bakery/dieme."
  },
  {
    path: "/bakery/dieulesaint-cyrille"
  },
  {
    path: "/bakery/dieu-pierre"
  },
  {
    path: "/bakery/dieusaert-isabelle"
  },
  {
    path: "/bakery/granet-frederic"
  },
  {
    path: "/bakery/boulangerie-&-patisserie-granet"
  },
  {
    path: "/bakery/chez-louis-by-thierry-avignon"
  },
  {
    path: "/bakery/le-fournil-des-pres"
  },
  {
    path: "/bakery/boulangerie-bouchet"
  },
  {
    path: "/bakery/boulangerie-bouchet-2"
  },
  {
    path: "/bakery/boulangerie-servage-r"
  },
  {
    path: "/bakery/bethany-bouchet"
  },
  {
    path: "/bakery/boucherie-de-l-horloge"
  },
  {
    path: "/bakery/bretteau-sebastien"
  },
  {
    path: "/bakery/bretteville"
  },
  {
    path: "/bakery/le-fournil-de-bretteville"
  },
  {
    path: "/bakery/le-fournil-de-beauvallon"
  },
  {
    path: "/bakery/al-bon-pain"
  },
  {
    path: "/bakery/boulangerie-patisserie-d-albon"
  },
  {
    path: "/bakery/chamaret-didier"
  },
  {
    path: "/bakery/boulangerie-place-xavier"
  },
  {
    path: "/bakery/le-fournil-du-pont-de-clans"
  },
  {
    path: "/bakery/le-fournil-saint-ferreol"
  },
  {
    path: "/bakery/le-boulc-h-et-fils-sarl"
  },
  {
    path: "/bakery/a-la-beauvoisine"
  },
  {
    path: "/bakery/distributeur-de-baguettes-la-marmite-du-meunier-24h24"
  },
  {
    path: "/bakery/fournil-du-pigeonnier"
  },
  {
    path: "/bakery/le-fournil-de-malataverne"
  },
  {
    path: "/bakery/cambon-thierry"
  },
  {
    path: "/bakery/cambon-thierry-2"
  },
  {
    path: "/bakery/boulangerie-eric-aubert"
  },
  {
    path: "/bakery/l-amie-bourthoise"
  },
  {
    path: "/bakery/boulangerie-des-essarts"
  },
  {
    path: "/bakery/chez-many"
  },
  {
    path: "/bakery/boulangerie-la-barre"
  },
  {
    path: "/bakery/barcelon-jacques"
  },
  {
    path: "/bakery/barca-ambar"
  },
  {
    path: "/bakery/boulangerie-des-chantaloups"
  },
  {
    path: "/bakery/maison-cesbron-boulangerie-du-parc"
  },
  {
    path: "/bakery/au-fournil-du-parc-sarl"
  },
  {
    path: "/bakery/boulangerie-du-parc"
  },
  {
    path: "/bakery/boulangerie-patisserie-du-parc-de-diane"
  },
  {
    path: "/bakery/boulangerie-du-parc-2"
  },
  {
    path: "/bakery/mostier-mickael"
  },
  {
    path: "/bakery/boulangerie-saint-maclou"
  },
  {
    path: "/bakery/l-ami-des-pains"
  },
  {
    path: "/bakery/patisserie-la-romainville-epinay-sur-seine"
  },
  {
    path: "/bakery/la-pralinoise"
  },
  {
    path: "/bakery/lily-cake"
  },
  {
    path: "/bakery/la-cuisine-de-lily"
  },
  {
    path: "/bakery/boulangerie-lily-rose"
  },
  {
    path: "/bakery/lili-cake-store"
  },
  {
    path: "/bakery/lili-croustille-2"
  },
  {
    path: "/bakery/fontenay"
  },
  {
    path: "/bakery/la-fontenaysienne"
  },
  {
    path: "/bakery/au-galion-d-or"
  },
  {
    path: "/bakery/folie-gourmande-verrieres"
  },
  {
    path: "/bakery/boulangerie-des-pres"
  },
  {
    path: "/bakery/d-or-et-mie"
  },
  {
    path: "/bakery/biscuiterie-d-orient-et-d-ailleurs"
  },
  {
    path: "/bakery/boulangerie-patisserie-d-oree"
  },
  {
    path: "/bakery/brenot"
  },
  {
    path: "/bakery/brin-de-levain"
  },
  {
    path: "/bakery/pradelle-jean-jacques"
  },
  {
    path: "/bakery/sarl-boulangerie-pradelles"
  },
  {
    path: "/bakery/patisserie-laurent-2"
  },
  {
    path: "/bakery/paul-2"
  },
  {
    path: "/bakery/boulangerie-condorcet"
  },
  {
    path: "/bakery/le-fournil-de-condorcet"
  },
  {
    path: "/bakery/les-delices-de-saint-roman"
  },
  {
    path: "/bakery/pani-canto-le-fournil-des-cevennes"
  },
  {
    path: "/bakery/marchese-laurent"
  },
  {
    path: "/bakery/marchesi-david"
  },
  {
    path: "/bakery/rottier-laurent"
  },
  {
    path: "/bakery/boulangerie-patisserie-olland"
  },
  {
    path: "/bakery/cussenot-allan"
  },
  {
    path: "/bakery/cussenot-allan-2"
  },
  {
    path: "/bakery/patisserie-chocolaterie-salon-de-the-la-chaumiere"
  },
  {
    path: "/bakery/le-fournil-d-isa"
  },
  {
    path: "/bakery/boulangerie-florian-launay"
  },
  {
    path: "/bakery/tony-s-cakes"
  },
  {
    path: "/bakery/patisserie-tony-pluot"
  },
  {
    path: "/bakery/herve-stephane-yannick-tony"
  },
  {
    path: "/bakery/mr-suaud-tony"
  },
  {
    path: "/bakery/la-crothoise"
  },
  {
    path: "/bakery/chambray-les-tours"
  },
  {
    path: "/bakery/traiteur-auchan-tours-sud-chambray"
  },
  {
    path: "/bakery/la-mie-caline-forum-d-orvault"
  },
  {
    path: "/bakery/beaucourt-freres"
  },
  {
    path: "/bakery/beaucourt-fils"
  },
  {
    path: "/bakery/beaucourt-fils-2"
  },
  {
    path: "/bakery/boulangerie-patisserie-beaucourt"
  },
  {
    path: "/bakery/massot-raphael"
  },
  {
    path: "/bakery/massot-guillaume"
  },
  {
    path: "/bakery/sarah-et-benoît-saumuroise"
  },
  {
    path: "/bakery/e&j-coudray-boulangerie-patisserie-chocolaterie"
  },
  {
    path: "/bakery/fournil-du-coudray"
  },
  {
    path: "/bakery/le-bec-sucre-sale"
  },
  {
    path: "/bakery/boulangerie-ju-mel"
  },
  {
    path: "/bakery/au-fournil-brayon-maison-bernardin"
  },
  {
    path: "/bakery/le-fournil-de-bray"
  },
  {
    path: "/bakery/le-fournil-de-la-madeleine-sarl"
  },
  {
    path: "/bakery/boulangerie-patisserie-la-madeleine"
  },
  {
    path: "/bakery/blenews"
  },
  {
    path: "/bakery/la-boulangerie-de-la-madeleine"
  },
  {
    path: "/bakery/le-fournil-de-saint-luc"
  },
  {
    path: "/bakery/boulangerie-du-val"
  },
  {
    path: "/bakery/boulangerie-du-val-de-grace"
  },
  {
    path: "/bakery/les-delices-du-val"
  },
  {
    path: "/bakery/boulangerie-du-vieux-port"
  },
  {
    path: "/bakery/au-fournil-de-grainville"
  },
  {
    path: "/bakery/tilly"
  },
  {
    path: "/bakery/boulangerie-mamie-madeleine"
  },
  {
    path: "/bakery/la-jolie-tarte"
  },
  {
    path: "/bakery/les-gourmandises-de-tilly"
  },
  {
    path: "/bakery/la-baguette-de-campagne"
  },
  {
    path: "/bakery/boheme-christophe"
  },
  {
    path: "/bakery/boulangerie-la-marennaise"
  },
  {
    path: "/bakery/boulangerie-la-mare-drancy"
  },
  {
    path: "/bakery/le-grenier-a-pain-tocqueville"
  },
  {
    path: "/bakery/tocqueville-bruno"
  },
  {
    path: "/bakery/la-biscuiterie-de-chambord"
  },
  {
    path: "/bakery/biscuiterie-de-chambord"
  },
  {
    path: "/bakery/la-biscuiterie-de-chambord-2"
  },
  {
    path: "/bakery/romane-anthony"
  },
  {
    path: "/bakery/boulangerie-romane-et-mickael"
  },
  {
    path: "/bakery/boulangerie-artisanale-romano-sarl"
  },
  {
    path: "/bakery/la-boulangerie-du-val"
  },
  {
    path: "/bakery/cookidiction"
  },
  {
    path: "/bakery/l-atelier-du-ptit-louis"
  },
  {
    path: "/bakery/popelini-neuilly"
  },
  {
    path: "/bakery/pain-neuilly"
  },
  {
    path: "/bakery/justine-&-co"
  },
  {
    path: "/bakery/boulangerie-epaignes"
  },
  {
    path: "/bakery/boulangerie-des-isles"
  },
  {
    path: "/bakery/le-fournil-de-beuzeville"
  },
  {
    path: "/bakery/breteuil"
  },
  {
    path: "/bakery/le-fournil-de-breteuil"
  },
  {
    path: "/bakery/boulangerie-corneille"
  },
  {
    path: "/bakery/boulangerie-la-corneillette"
  },
  {
    path: "/bakery/portes-ouvertes-esg-13-mai"
  },
  {
    path: "/bakery/les-portes-gourmandes"
  },
  {
    path: "/bakery/aux-portes-de-l-argonne-mercier-coralie"
  },
  {
    path: "/bakery/les-portes-de-la-balagne"
  },
  {
    path: "/bakery/la-flanerie-notre-dame"
  },
  {
    path: "/bakery/boulangerie-de-selles"
  },
  {
    path: "/bakery/saccas-katy-guillaume"
  },
  {
    path: "/bakery/la-boulangerie-menneval"
  },
  {
    path: "/bakery/fournil-andeville"
  },
  {
    path: "/bakery/andeco"
  },
  {
    path: "/bakery/au-fournil-d-ailly"
  },
  {
    path: "/bakery/boulangerie-chaudron"
  },
  {
    path: "/bakery/maison-chaudron-artisan-boulanger-patissier"
  },
  {
    path: "/bakery/patisserie-le-chardon-bleu"
  },
  {
    path: "/bakery/patisserie-chaudron"
  },
  {
    path: "/bakery/boulangerie-brouillon-philippe"
  },
  {
    path: "/bakery/brouard-laurent-jean-michel-boulangerie-patisserie"
  },
  {
    path: "/bakery/le-fournil-broutain"
  },
  {
    path: "/bakery/challet-yannick"
  },
  {
    path: "/bakery/chalet-concorde"
  },
  {
    path: "/bakery/chalet-alpain"
  },
  {
    path: "/bakery/le-chalet-de-la-diligenceex-le-relais-de-la-diligence"
  },
  {
    path: "/bakery/le-chalet-gourmand"
  },
  {
    path: "/bakery/maison-de-gas"
  },
  {
    path: "/bakery/o-p-tit-plaisir-(langue-de-chat)"
  },
  {
    path: "/bakery/xyz-company"
  },
  {
    path: "/bakery/gaston-s"
  },
  {
    path: "/bakery/gaspard-est-dans-le-petrin"
  },
  {
    path: "/bakery/gaston-s-lescar"
  },
  {
    path: "/bakery/gastel"
  },
  {
    path: "/bakery/gastro-folies"
  },
  {
    path: "/bakery/aux-delices-de-montreuil"
  },
  {
    path: "/bakery/boulangerie-des-templiers"
  },
  {
    path: "/bakery/les-montreuillois"
  },
  {
    path: "/bakery/neron"
  },
  {
    path: "/bakery/boulangerie-manoury"
  },
  {
    path: "/bakery/aux-sources-du-pain"
  },
  {
    path: "/bakery/boulangerie-la-source"
  },
  {
    path: "/bakery/le-retour-aux-sources"
  },
  {
    path: "/bakery/boulangerie-la-source-2"
  },
  {
    path: "/bakery/la-source-du-pain"
  },
  {
    path: "/bakery/le-grenier-gourmand"
  },
  {
    path: "/bakery/pains-leves-pain-bio-au-levain-naturel"
  },
  {
    path: "/bakery/lucette"
  },
  {
    path: "/bakery/emma-patisserie-boulangerie-sainte-luce-sur-loire"
  },
  {
    path: "/bakery/lepi-luceen"
  },
  {
    path: "/bakery/fournil-sainte-luce"
  },
  {
    path: "/bakery/lucette-2"
  },
  {
    path: "/bakery/la-patisserie-de-chartres"
  },
  {
    path: "/bakery/franconville-rue-du-haut-d-aulny"
  },
  {
    path: "/bakery/la-boulangerie-de-jouy"
  },
  {
    path: "/bakery/aux-delices-de-jouy"
  },
  {
    path: "/bakery/boulangerie-f.jouy-patisserie"
  },
  {
    path: "/bakery/boulangerie-doyen"
  },
  {
    path: "/bakery/butterfly-patisseries"
  },
  {
    path: "/bakery/bunny-s-cookies"
  },
  {
    path: "/bakery/bulliz"
  },
  {
    path: "/bakery/bun-s-baker-toulouse"
  },
  {
    path: "/bakery/centre-ville"
  },
  {
    path: "/bakery/au-fournil-de-l-ardre"
  },
  {
    path: "/bakery/le-caprice-d-or"
  },
  {
    path: "/bakery/mr-magny-gerard"
  },
  {
    path: "/bakery/charpentier"
  },
  {
    path: "/bakery/charpentier-et-associes"
  },
  {
    path: "/bakery/ma-boulangerie-cafe-la-fleche"
  },
  {
    path: "/bakery/boulangerie-charpentier-ludovic"
  },
  {
    path: "/bakery/dreux-ambroise"
  },
  {
    path: "/bakery/la-saint-jean"
  },
  {
    path: "/bakery/collectif-tete-beche"
  },
  {
    path: "/bakery/colle"
  },
  {
    path: "/bakery/collery-jerome"
  },
  {
    path: "/bakery/patisserie-boulangerie-chocolaterie-gregory-collet"
  },
  {
    path: "/bakery/collection-paris"
  },
  {
    path: "/bakery/beauchet-samuel-daniel-rene"
  },
  {
    path: "/bakery/patisserie-la-romainville-villebon-sur-yvette"
  },
  {
    path: "/bakery/nogent-le-roi"
  },
  {
    path: "/bakery/france-cake-tradition"
  },
  {
    path: "/bakery/les-macarons-d-olivier-sas-france-macaron"
  },
  {
    path: "/bakery/le-fournil-d-autrefois"
  },
  {
    path: "/bakery/patisserie-guillaume-france"
  },
  {
    path: "/bakery/la-baguette-doree"
  },
  {
    path: "/bakery/boulangerie-chouquette"
  },
  {
    path: "/bakery/boulangerie-around-the-bread"
  },
  {
    path: "/bakery/arouss"
  },
  {
    path: "/bakery/patisserie-la-romainville-goussainville"
  },
  {
    path: "/bakery/la-brouette-boutique-paysanne-(ferme-d-orvilliers-:-paysans-boulangers-bio)"
  },
  {
    path: "/bakery/patisserie-gilles-marchal"
  },
  {
    path: "/bakery/boulangerie-gilles-sarl"
  },
  {
    path: "/bakery/gilles-thierry"
  },
  {
    path: "/bakery/gilles-francis-guy"
  },
  {
    path: "/bakery/boulangerie-patisserie-estelle-et-gilles-ritter"
  },
  {
    path: "/bakery/l-agatine"
  },
  {
    path: "/bakery/tartine-&-bonne-humeur"
  },
  {
    path: "/bakery/maison-sabatier"
  },
  {
    path: "/bakery/boulangerie-jean-pierre-chesne"
  },
  {
    path: "/bakery/indivision-papadopoulos-jean-pierre"
  },
  {
    path: "/bakery/kouign-amann-berrou"
  },
  {
    path: "/bakery/tolego"
  },
  {
    path: "/bakery/fournil-de-leonce"
  },
  {
    path: "/bakery/maison-de-leon"
  },
  {
    path: "/bakery/leone"
  },
  {
    path: "/bakery/leon-et-marius"
  },
  {
    path: "/bakery/maison-le-faou"
  },
  {
    path: "/bakery/stephane-giraud-roscoff"
  },
  {
    path: "/bakery/chez-raq&jo"
  },
  {
    path: "/bakery/chez-bouder"
  },
  {
    path: "/bakery/boulangerie-chauvet"
  },
  {
    path: "/bakery/la-biscuiterie-de-chambord-3"
  },
  {
    path: "/bakery/boulangerie-patisserie-les-tabliers-toques-by-sebastien-baye"
  },
  {
    path: "/bakery/boulangerie-patisserie-traiteur-atelier-garlan"
  },
  {
    path: "/bakery/la-maison-du-boulanger-plabennec"
  },
  {
    path: "/bakery/boulangerie-blanc"
  },
  {
    path: "/bakery/blanchard-stephane"
  },
  {
    path: "/bakery/boulangerie-blanchard"
  },
  {
    path: "/bakery/boulangerie-blanc-andre"
  },
  {
    path: "/bakery/boulangerie-de-saint-nicolas"
  },
  {
    path: "/bakery/boulangerie-le-goff"
  },
  {
    path: "/bakery/lazzarotto-philippe"
  },
  {
    path: "/bakery/lazrag"
  },
  {
    path: "/bakery/boulangerie-patisserie-lazaar"
  },
  {
    path: "/bakery/l-aziza-rida"
  },
  {
    path: "/bakery/l-aziza"
  },
  {
    path: "/bakery/boulangerie-patisserie-quimperloise"
  },
  {
    path: "/bakery/boulangerie-des-plomarc-h"
  },
  {
    path: "/bakery/la-boulangerie-benodet"
  },
  {
    path: "/bakery/neveztell"
  },
  {
    path: "/bakery/brest"
  },
  {
    path: "/bakery/brest-yves"
  },
  {
    path: "/bakery/paris-brest"
  },
  {
    path: "/bakery/brest-bcd"
  },
  {
    path: "/bakery/paul-brest-moulin-blanc"
  },
  {
    path: "/bakery/le-pain-des-cimes-1400-ville-vieille"
  },
  {
    path: "/bakery/baron-freres"
  },
  {
    path: "/bakery/baron-jean-luc"
  },
  {
    path: "/bakery/la-baronne"
  },
  {
    path: "/bakery/baron-thierry"
  },
  {
    path: "/bakery/combas-francis"
  },
  {
    path: "/bakery/boulangerie-la-fabrique-rouviere"
  },
  {
    path: "/bakery/au-coeur-de-notre-dame"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-10"
  },
  {
    path: "/bakery/au-fournil-sarabel"
  },
  {
    path: "/bakery/tradition-&-gourmandises"
  },
  {
    path: "/bakery/le-fournil-de-noely"
  },
  {
    path: "/bakery/boulangerie-patisserie-la-foret-des-pains"
  },
  {
    path: "/bakery/la-gaillonnette"
  },
  {
    path: "/bakery/lumeau-denis"
  },
  {
    path: "/bakery/les-saveurs-de-mon-moulin"
  },
  {
    path: "/bakery/aux-delices-d-igny"
  },
  {
    path: "/bakery/castel"
  },
  {
    path: "/bakery/boulangerie-patisserie-coffee-shop-benoît-castel"
  },
  {
    path: "/bakery/castel-boulangerie-patisserie"
  },
  {
    path: "/bakery/benoît-castel-jean-pierre-timbaud"
  },
  {
    path: "/bakery/castellano-marc"
  },
  {
    path: "/bakery/boulangerie-patisserie-du-roi"
  },
  {
    path: "/bakery/les-patisseries-du-roy-patisserie-salon-de-the-versailles"
  },
  {
    path: "/bakery/les-traditions-du-roi"
  },
  {
    path: "/bakery/sauveur-patissier-chocolatier-artisan"
  },
  {
    path: "/bakery/sauvet-jamet-marie-laure-maryse"
  },
  {
    path: "/bakery/maison-seuz-(ex-fournil-in)"
  },
  {
    path: "/bakery/le-friand-d-aigues-mortes"
  },
  {
    path: "/bakery/biscuiterie-du-fort-bloque"
  },
  {
    path: "/bakery/au-petrin-du-fort"
  },
  {
    path: "/bakery/boulangerie-damien-cros"
  },
  {
    path: "/bakery/boulangerie-patisserie-crosnier-alain"
  },
  {
    path: "/bakery/maison-crosnier"
  },
  {
    path: "/bakery/jacques-cros"
  },
  {
    path: "/bakery/patisserie-jean-cros-gateaux-evenementiel"
  },
  {
    path: "/bakery/maison-cardet"
  },
  {
    path: "/bakery/cardet-thierry"
  },
  {
    path: "/bakery/au-fournil-d-anduze"
  },
  {
    path: "/bakery/mf-amalric-g-privat"
  },
  {
    path: "/bakery/boulangerie-de-rousson"
  },
  {
    path: "/bakery/nimes-center"
  },
  {
    path: "/bakery/nîmes"
  },
  {
    path: "/bakery/paul-vache-noire"
  },
  {
    path: "/bakery/l-orsannaise"
  },
  {
    path: "/bakery/bouquet-de-patisseries"
  },
  {
    path: "/bakery/boulangerie-pascal-roussel"
  },
  {
    path: "/bakery/boulangerie-patisserie-bouquet-didier"
  },
  {
    path: "/bakery/bouquet-de-pains"
  },
  {
    path: "/bakery/le-grenier-a-pain"
  },
  {
    path: "/bakery/le-grenier-a-pain-le-rheu"
  },
  {
    path: "/bakery/le-grenier-a-pain-change"
  },
  {
    path: "/bakery/le-grenier-a-pain-trelaze"
  },
  {
    path: "/bakery/le-grenier-a-pain-angers"
  },
  {
    path: "/bakery/le-moulin-de-la-poterie"
  },
  {
    path: "/bakery/des-pains-qui-parlent-@-bersol"
  },
  {
    path: "/bakery/must-try-croissant-la-maison-d-isabelle"
  },
  {
    path: "/bakery/patisserie-musquar"
  },
  {
    path: "/bakery/la-muscadine"
  },
  {
    path: "/bakery/patisserie-museur"
  },
  {
    path: "/bakery/le-musee-du-pain"
  },
  {
    path: "/bakery/l-arret-gourmand"
  },
  {
    path: "/bakery/l-arret-pains-st-hilaire"
  },
  {
    path: "/bakery/boulangerie-l-arret-pains"
  },
  {
    path: "/bakery/l-arret-gourmand-sandwicherie-patisserie"
  },
  {
    path: "/bakery/la-fougasse-d-uzes"
  },
  {
    path: "/bakery/pb-alesia"
  },
  {
    path: "/bakery/au-fournil-alesien"
  },
  {
    path: "/bakery/aux-delices-d-alessia"
  },
  {
    path: "/bakery/boulangerie-bonnet-stephane"
  },
  {
    path: "/bakery/boulangerie-bonnet"
  },
  {
    path: "/bakery/la-pyramide-des-pains-sandwicherie-patisserie-st-christol-les-ales"
  },
  {
    path: "/bakery/arbonnier-christophe"
  },
  {
    path: "/bakery/le-zed-boulangerie"
  },
  {
    path: "/bakery/maison-beauhaire-leguevin"
  },
  {
    path: "/bakery/fossier"
  },
  {
    path: "/bakery/fossier-magasin-usine"
  },
  {
    path: "/bakery/fossier-2"
  },
  {
    path: "/bakery/magasin-biscuits-fossier-pierry"
  },
  {
    path: "/bakery/chaumeny-sarl"
  },
  {
    path: "/bakery/la-chaumiere-de-rosny"
  },
  {
    path: "/bakery/boulangerie-de-la-chaumiere"
  },
  {
    path: "/bakery/boulangerie-yohann-et-mercedes-cugnaux"
  },
  {
    path: "/bakery/la-boulangerie-aux-pains-du-muret"
  },
  {
    path: "/bakery/saint-lys-boulangerie"
  },
  {
    path: "/bakery/orea-patisserie"
  },
  {
    path: "/bakery/l-oree-s-emerveille"
  },
  {
    path: "/bakery/l-oree-des-pains"
  },
  {
    path: "/bakery/o-repere-d-amaury"
  },
  {
    path: "/bakery/miremont-patisserie"
  },
  {
    path: "/bakery/la-boulangerie-de-miremont"
  },
  {
    path: "/bakery/histoire-de-goût"
  },
  {
    path: "/bakery/histoire-de-la-baguette"
  },
  {
    path: "/bakery/histoire-de-boulanger"
  },
  {
    path: "/bakery/histoire-du-ble"
  },
  {
    path: "/bakery/histoire-de-pains"
  },
  {
    path: "/bakery/boulangerie-des-garennes"
  },
  {
    path: "/bakery/gareneaux-bertrand"
  },
  {
    path: "/bakery/sarl-boulangerie-de-la-garenne"
  },
  {
    path: "/bakery/gorrel-prestige"
  },
  {
    path: "/bakery/boulangerie-patisserie-wernet-alain"
  },
  {
    path: "/bakery/boulangerie-mh-tournefeuille"
  },
  {
    path: "/bakery/boulangerie-patisserie-latour"
  },
  {
    path: "/bakery/la-tourtellerie"
  },
  {
    path: "/bakery/boulangerie-latourte"
  },
  {
    path: "/bakery/biscuiterie-latour"
  },
  {
    path: "/bakery/la-cure-gourmande-lourdes"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-11"
  },
  {
    path: "/bakery/boulangerie-cox"
  },
  {
    path: "/bakery/gourmandises-de-coccinelle"
  },
  {
    path: "/bakery/saveurs-&-croquants"
  },
  {
    path: "/bakery/saveur-intense"
  },
  {
    path: "/bakery/saveurs-et-gourmandises"
  },
  {
    path: "/bakery/boulangerie-patisserie-akharouid-pere-et-fils"
  },
  {
    path: "/bakery/le-fournil-de-bessieres"
  },
  {
    path: "/bakery/la-lauragaise"
  },
  {
    path: "/bakery/oh-my-cooks-cookies-a-toulouse"
  },
  {
    path: "/bakery/o-donuts-toulouse"
  },
  {
    path: "/bakery/le-fournil-d-eymet"
  },
  {
    path: "/bakery/boulangerie-patisserie-des-canes"
  },
  {
    path: "/bakery/pains-de-beaufort"
  },
  {
    path: "/bakery/les-delices-de-beaufort"
  },
  {
    path: "/bakery/jules-et-marie-escalquens"
  },
  {
    path: "/bakery/valentine"
  },
  {
    path: "/bakery/valentine-bakery"
  },
  {
    path: "/bakery/valentine-s-delices"
  },
  {
    path: "/bakery/mademoiselle-valentine-patisserie-salon-de-the"
  },
  {
    path: "/bakery/o-levains-boulangerie-patisserie"
  },
  {
    path: "/bakery/sophie-lebreuilly-3"
  },
  {
    path: "/bakery/huis-laplange"
  },
  {
    path: "/bakery/au-pain-de-st-jean"
  },
  {
    path: "/bakery/boulangerie-saint-jean-moinard-alain"
  },
  {
    path: "/bakery/maison-couret"
  },
  {
    path: "/bakery/union-boulangerie"
  },
  {
    path: "/bakery/la-mie-de-pain-l-union"
  },
  {
    path: "/bakery/marie-blachere-boulangerie-sandwicherie-tarterie-12"
  },
  {
    path: "/bakery/sodex-ecoffet"
  },
  {
    path: "/bakery/so-delicieux"
  },
  {
    path: "/bakery/maison-mauranes-matras"
  },
  {
    path: "/bakery/maison-mauranes-ville-bourbon"
  },
  {
    path: "/bakery/maison-mauranes-theas"
  },
  {
    path: "/bakery/maison-mauranes-tarn"
  },
  {
    path: "/bakery/maison-mauranes-coulandrieres"
  },
  {
    path: "/bakery/boulangerie-patisserie-christian-larroque-et-ses-fils"
  },
  {
    path: "/bakery/berat-boulangerie"
  },
  {
    path: "/bakery/berat-boulangerie-2"
  },
  {
    path: "/bakery/boulangerie-patisserie-berat"
  },
  {
    path: "/bakery/patisserie-bax"
  },
  {
    path: "/bakery/latourrette-michael"
  },
  {
    path: "/bakery/roux-daniel"
  },
  {
    path: "/bakery/boulangerie-roux-fouillet"
  },
  {
    path: "/bakery/roux-philippe"
  },
  {
    path: "/bakery/boulangerie-roux-chez-angelique-et-nicolas"
  },
  {
    path: "/bakery/sarl-boulangerie-lhermitte"
  },
  {
    path: "/bakery/boulangerie-lapeyre"
  },
  {
    path: "/bakery/boulangerie-lapeyre-2"
  },
  {
    path: "/bakery/balmadeleine"
  },
  {
    path: "/bakery/saint-andre-david"
  },
  {
    path: "/bakery/milles-delices"
  },
  {
    path: "/bakery/mille-&-un"
  },
  {
    path: "/bakery/boulangerie-patisserie-mille-feuille-d-idees"
  },
  {
    path: "/bakery/boulangerie-banette-aux-mille-douceurs.-patissier"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-fraudin"
  },
  {
    path: "/bakery/ooh-my-cookie"
  },
  {
    path: "/bakery/ooh-my-cookie-place-de-gaulle"
  },
  {
    path: "/bakery/ookies"
  },
  {
    path: "/bakery/ooki-cooki"
  },
  {
    path: "/bakery/rouet-christian"
  },
  {
    path: "/bakery/rouen-rue-du-bec"
  },
  {
    path: "/bakery/boulangerie-patisserie-maison-rouer"
  },
  {
    path: "/bakery/la-roue-du-levain"
  },
  {
    path: "/bakery/maison-vatelier-rouen"
  },
  {
    path: "/bakery/noemie-giorno-my-little-kitchen"
  },
  {
    path: "/bakery/noe-boulangerie-patisserie-traiteur-&-moulin-bio"
  },
  {
    path: "/bakery/noe-boulangerie-&-patisserie-bio"
  },
  {
    path: "/bakery/noe-boulangerie-patisserie-traiteur-&-moulin-bio-2"
  },
  {
    path: "/bakery/noe-boulangerie-patisserie-traiteur-&-moulin-bio-3"
  },
  {
    path: "/bakery/boulangerie-mh-quint-fonsegrives"
  },
  {
    path: "/bakery/gallien"
  },
  {
    path: "/bakery/gallien-sa"
  },
  {
    path: "/bakery/larraud-lailai"
  },
  {
    path: "/bakery/larrat-jean-philippe"
  },
  {
    path: "/bakery/boulangerie-patisserie-larrat"
  },
  {
    path: "/bakery/le-plan-cake"
  },
  {
    path: "/bakery/le-panificateur-maître-artisan-boulanger"
  },
  {
    path: "/bakery/festival-des-pains-2"
  },
  {
    path: "/bakery/boulangerie-le-mauzac"
  },
  {
    path: "/bakery/boulangerie-du-fronton-paul-&-pauline"
  },
  {
    path: "/bakery/montastruc-la-conseillere"
  },
  {
    path: "/bakery/legendre-tolbiac"
  },
  {
    path: "/bakery/legerete-et-gourmandises"
  },
  {
    path: "/bakery/legendre-joel-joel"
  },
  {
    path: "/bakery/patisserie-nicolas-leger-fondettes"
  },
  {
    path: "/bakery/l-amandine"
  },
  {
    path: "/bakery/garac-boulangerie-patisserie"
  },
  {
    path: "/bakery/sanabile"
  },
  {
    path: "/bakery/la-boulange-sanato"
  },
  {
    path: "/bakery/sana"
  },
  {
    path: "/bakery/le-fournil-de-sanae-et-tony"
  },
  {
    path: "/bakery/boulangerie-patisserie-vieillard"
  },
  {
    path: "/bakery/l-hotellier-franc"
  },
  {
    path: "/bakery/l-instant-sucre-revellin-pialet-didier"
  },
  {
    path: "/bakery/boulangerie-du-vast"
  },
  {
    path: "/bakery/le-fournil-revelois-revel"
  },
  {
    path: "/bakery/galaxia-3"
  },
  {
    path: "/bakery/cake-galaxy"
  },
  {
    path: "/bakery/sion-sebastien"
  },
  {
    path: "/bakery/pain-ssionnement-gourmand"
  },
  {
    path: "/bakery/boulangerie-pains-sionnement"
  },
  {
    path: "/bakery/simon-et-simon"
  },
  {
    path: "/bakery/simon"
  },
  {
    path: "/bakery/becasso"
  },
  {
    path: "/bakery/la-becassine"
  },
  {
    path: "/bakery/les-tartines-de-becassine"
  },
  {
    path: "/bakery/des-pains-qui-parlent"
  },
  {
    path: "/bakery/boulangerie-bio-cezamie"
  },
  {
    path: "/bakery/le-cezanne"
  },
  {
    path: "/bakery/ti-biscuit"
  },
  {
    path: "/bakery/traiteur-auchan-perigueux-marsac"
  },
  {
    path: "/bakery/traiteur-auchan-viry-noureuil"
  },
  {
    path: "/bakery/au-chant-du-coq"
  },
  {
    path: "/bakery/traîteur-auchan-fontenay-sous-bois"
  },
  {
    path: "/bakery/betous-christian-henri"
  },
  {
    path: "/bakery/patisserie-canet-2"
  },
  {
    path: "/bakery/boulangerie-le-fournil-cannetois"
  },
  {
    path: "/bakery/boulangerie-patrice-lartigue"
  },
  {
    path: "/bakery/boulangerie-artisanale-macphi"
  },
  {
    path: "/bakery/aux-petits-fours-patisserie-saint-criq"
  },
  {
    path: "/bakery/pistache-patisserie-et-pincee-de-sel"
  },
  {
    path: "/bakery/pistache-et-chocolat"
  },
  {
    path: "/bakery/pistache"
  },
  {
    path: "/bakery/la-pisserie-deloison"
  },
  {
    path: "/bakery/le-pistore"
  },
  {
    path: "/bakery/le-fournil-de-l-aubes-pain"
  },
  {
    path: "/bakery/jouemanjulie"
  },
  {
    path: "/bakery/jouen-pascal"
  },
  {
    path: "/bakery/les-delices-de-roquefort"
  },
  {
    path: "/bakery/patisserie-sansano"
  },
  {
    path: "/bakery/le-fournil-saint-martin"
  },
  {
    path: "/bakery/boulangerie-bo&mie-saint-martin"
  },
  {
    path: "/bakery/saint-martin-sur-ecaillon"
  },
  {
    path: "/bakery/boulangerie-louise-saint-martin-des-champs"
  },
  {
    path: "/bakery/le-fournil-de-saint-clar"
  },
  {
    path: "/bakery/durand-et-fils."
  },
  {
    path: "/bakery/durand-joel"
  },
  {
    path: "/bakery/durand-pere-et-fils"
  },
  {
    path: "/bakery/durand-philippe"
  },
  {
    path: "/bakery/maître-boulangerie-patisserie-ambassadeurs-du-pains(maison-durand-yves)"
  },
  {
    path: "/bakery/vives-alain-vincent"
  },
  {
    path: "/bakery/boulangerie-villefranche-de-conflent"
  },
  {
    path: "/bakery/le-fournil-de-la-redoute"
  },
  {
    path: "/bakery/transpain"
  },
  {
    path: "/bakery/le-transal-pain"
  },
  {
    path: "/bakery/transmission-de-saveurs"
  },
  {
    path: "/bakery/transparence"
  },
  {
    path: "/bakery/l-etagere-a-pain"
  },
  {
    path: "/bakery/ricourt-patrick"
  },
  {
    path: "/bakery/boulangerie-ricourt"
  },
  {
    path: "/bakery/boulangerie-ricourt-2"
  },
  {
    path: "/bakery/noel-damien"
  },
  {
    path: "/bakery/etoile-de-noe"
  },
  {
    path: "/bakery/les-gourmandises-d-erwan-et-serena"
  },
  {
    path: "/bakery/magnani-alain"
  },
  {
    path: "/bakery/cazeneuve-christophe-et-coralie"
  },
  {
    path: "/bakery/origines"
  },
  {
    path: "/bakery/boulangerie-origine"
  },
  {
    path: "/bakery/boulangerie-origine-2"
  },
  {
    path: "/bakery/boulangerie-patisserie-le-bourhis"
  },
  {
    path: "/bakery/maison-planchot-origine-halle"
  },
  {
    path: "/bakery/le-petit-palais"
  },
  {
    path: "/bakery/boulangerie-de-petit-palais"
  },
  {
    path: "/bakery/montussan"
  },
  {
    path: "/bakery/saint-emilion"
  },
  {
    path: "/bakery/boulangerie-le-petrin-de-saint-emilion"
  },
  {
    path: "/bakery/macarons-de-saint-emilion-nadia-fermigier"
  },
  {
    path: "/bakery/caneles-baillardran-st-emilion"
  },
  {
    path: "/bakery/fournil-du-marensin-le"
  },
  {
    path: "/bakery/le-four-de-babel"
  },
  {
    path: "/bakery/boulangerie-fargues"
  },
  {
    path: "/bakery/boulangerie-voyages-gourmands"
  },
  {
    path: "/bakery/saint-macaire"
  },
  {
    path: "/bakery/la-mignonette"
  },
  {
    path: "/bakery/snc-arsac-chanin"
  },
  {
    path: "/bakery/boulangerie-arsac"
  },
  {
    path: "/bakery/les-delices-de-margaux"
  },
  {
    path: "/bakery/les-delices-de-margaux-2"
  },
  {
    path: "/bakery/patisserie-bechard"
  },
  {
    path: "/bakery/le-moulin-de-margaux"
  },
  {
    path: "/bakery/margaux-m-patissiere-nomade-cours-de-patisserie-marseille"
  },
  {
    path: "/bakery/au-fournil-d-audenge"
  },
  {
    path: "/bakery/medoc-n-crepes"
  },
  {
    path: "/bakery/caneles-baillardran-arcachon"
  },
  {
    path: "/bakery/patisserie-chocolaterie-aspa-loic-33000-bordeaux"
  },
  {
    path: "/bakery/au-petit-bonheur-de-pagnol"
  },
  {
    path: "/bakery/pierre-mathieu-patissier-bordelais"
  },
  {
    path: "/bakery/au-petit-bonheur-de-cesar"
  },
  {
    path: "/bakery/barriere-sarl"
  },
  {
    path: "/bakery/boulangerie-firmin"
  },
  {
    path: "/bakery/bordeaux"
  },
  {
    path: "/bakery/caneles-baillardran-bordeaux-intendance"
  },
  {
    path: "/bakery/bag_bakery-art-gallery-boulangerie-biologique-&-libre-de-gluten-a-bordeaux"
  },
  {
    path: "/bakery/boulangerie-cerqueira"
  },
  {
    path: "/bakery/les-gourmandises-de-bruges"
  },
  {
    path: "/bakery/ruche-la"
  },
  {
    path: "/bakery/boulangerie-patisserie-la-ruche-des-pains"
  },
  {
    path: "/bakery/boulangerie-de-la-ruche"
  },
  {
    path: "/bakery/g.a.e.c.-la-ruche-a-pain"
  },
  {
    path: "/bakery/la-ruche-trianon"
  },
  {
    path: "/bakery/batch"
  },
  {
    path: "/bakery/boulangerie-lugosienne"
  },
  {
    path: "/bakery/boulangerie-tony-letournel"
  },
  {
    path: "/bakery/bourgeois-christophe"
  },
  {
    path: "/bakery/bourgouin-boulangerie"
  },
  {
    path: "/bakery/bourget-david"
  },
  {
    path: "/bakery/le-temple-du-pain"
  },
  {
    path: "/bakery/le-temple-de-la-gourmandise"
  },
  {
    path: "/bakery/le-temple-gourmand"
  },
  {
    path: "/bakery/dambroise"
  },
  {
    path: "/bakery/monsieur-tartine-2"
  },
  {
    path: "/bakery/avenel"
  },
  {
    path: "/bakery/boulangerie-patisserie-avenel"
  },
  {
    path: "/bakery/boulangerie-laurent-du-bois-grand-sas"
  },
  {
    path: "/bakery/l-epi-d-argent"
  },
  {
    path: "/bakery/biscuiterie-saint-guilhem"
  },
  {
    path: "/bakery/boulangerie-du-golf"
  },
  {
    path: "/bakery/boissinot-thierry"
  },
  {
    path: "/bakery/boulangerie-du-moulon"
  },
  {
    path: "/bakery/boulangerie-oct-tradition"
  },
  {
    path: "/bakery/moulon"
  },
  {
    path: "/bakery/moulin-de-chessy"
  },
  {
    path: "/bakery/moulin-d-elise-saint-brieuc"
  },
  {
    path: "/bakery/les-rives-de-la-borne"
  },
  {
    path: "/bakery/boulangerie-lacoste"
  },
  {
    path: "/bakery/boulangerie-du-circuit"
  },
  {
    path: "/bakery/boulangerie-myla"
  },
  {
    path: "/bakery/le-creusois"
  },
  {
    path: "/bakery/boulangerie-goursaud"
  },
  {
    path: "/bakery/boulangerie-gours"
  },
  {
    path: "/bakery/anglade-pour-sarl-anglade"
  },
  {
    path: "/bakery/l-artisan-boulanger-ghislain-anglade"
  },
  {
    path: "/bakery/anglade-fv-et-fils"
  },
  {
    path: "/bakery/la-marqueze"
  },
  {
    path: "/bakery/le-fournil-de-lamarque"
  },
  {
    path: "/bakery/boulangerie-des-sablons"
  },
  {
    path: "/bakery/boulangerie-les-sablons"
  },
  {
    path: "/bakery/le-pain-des-martres"
  },
  {
    path: "/bakery/les-delices-de-saint-germain"
  },
  {
    path: "/bakery/philippe-tayac-patisserie"
  },
  {
    path: "/bakery/philippe-tayac-patisserie-&-salon-de-the-cannes"
  },
  {
    path: "/bakery/philippe-tayac-patisserie-saint-laurent-du-var-cap3000"
  },
  {
    path: "/bakery/pains-brioches-fantaisies"
  },
  {
    path: "/bakery/la-rauzanne"
  },
  {
    path: "/bakery/hure-createur-de-plaisir-arcole"
  },
  {
    path: "/bakery/hurel-patrice"
  },
  {
    path: "/bakery/atelier-hure"
  },
  {
    path: "/bakery/boulangerie-patisserie-5"
  },
  {
    path: "/bakery/boulangerie-arici"
  },
  {
    path: "/bakery/maison-laurent-sarreau"
  },
  {
    path: "/bakery/boulangerie-patisserie-emile-parisse"
  },
  {
    path: "/bakery/boulangerie-patisserie-du-mont-olympe"
  },
  {
    path: "/bakery/galgon"
  },
  {
    path: "/bakery/la-galgonnaise"
  },
  {
    path: "/bakery/paul-brest-jean-jaures"
  },
  {
    path: "/bakery/paul-3"
  },
  {
    path: "/bakery/paul-4"
  },
  {
    path: "/bakery/paul-5"
  },
  {
    path: "/bakery/les-delices-d-etauliers"
  },
  {
    path: "/bakery/patisserie-brach"
  },
  {
    path: "/bakery/montagne-de-pain"
  },
  {
    path: "/bakery/une-montagne-de-gourmandises"
  },
  {
    path: "/bakery/le-pain-des-montagnes-du-cezallier"
  },
  {
    path: "/bakery/boulangerie-du-chateau"
  },
  {
    path: "/bakery/les-peintures"
  },
  {
    path: "/bakery/boulangerie-cadaujac"
  },
  {
    path: "/bakery/fabregues-alain"
  },
  {
    path: "/bakery/aux-gourmandises-d-isa-et-nico-2"
  },
  {
    path: "/bakery/boulangerie-laurens"
  },
  {
    path: "/bakery/le-gabian-gourmand"
  },
  {
    path: "/bakery/jacoud-christian"
  },
  {
    path: "/bakery/patisserie-mattieu-jacoulot-salins-les-bains"
  },
  {
    path: "/bakery/jacouton-mickael-gabriel"
  },
  {
    path: "/bakery/la-cure-gourmande-pezenas"
  },
  {
    path: "/bakery/david-vincent"
  },
  {
    path: "/bakery/maison-lopez-poussan"
  },
  {
    path: "/bakery/laurette-&-marinette"
  },
  {
    path: "/bakery/baguettes-et-chouquettes-boulangerie-pignan"
  },
  {
    path: "/bakery/boulangerie-du-rouet"
  },
  {
    path: "/bakery/o-terrasse-du-rouet"
  },
  {
    path: "/bakery/le-fournil-du-rouet"
  },
  {
    path: "/bakery/rouet"
  },
  {
    path: "/bakery/montpellier-orientale-pain"
  },
  {
    path: "/bakery/passionnement-biscuiterie-montpellier"
  },
  {
    path: "/bakery/cinnasens-montpellier"
  },
  {
    path: "/bakery/baguettes-&-chouquettes-boulangerie-patisserie-montpellier"
  },
  {
    path: "/bakery/boulangerie-plaissan"
  },
  {
    path: "/bakery/au-fournil-des-garrigues"
  },
  {
    path: "/bakery/garrigues-thierry"
  },
  {
    path: "/bakery/le-fournil-de-maraussan"
  },
  {
    path: "/bakery/patisserie-guillaume-france-2"
  },
  {
    path: "/bakery/floripain"
  },
  {
    path: "/bakery/boulangerie-caux-pain"
  },
  {
    path: "/bakery/angelina-paris"
  },
  {
    path: "/bakery/boulangerie-mh-camille-pujol"
  },
  {
    path: "/bakery/boulangerie-vias-plage"
  },
  {
    path: "/bakery/boulangerie-patisserie-compagnon"
  },
  {
    path: "/bakery/le-compagnon-du-boulanger"
  },
  {
    path: "/bakery/le-compagnon-de-pasteur"
  },
  {
    path: "/bakery/les-compagnons-de-la-boulangerie-patisserie"
  },
  {
    path: "/bakery/le-compagnon-de-l-artisan-boulanger"
  },
  {
    path: "/bakery/l-atelier-banette-clermont-l-herault"
  },
  {
    path: "/bakery/boulangerie-de-la-scellerie"
  },
  {
    path: "/bakery/la-gigeannette"
  },
  {
    path: "/bakery/la-beauceronne"
  },
  {
    path: "/bakery/boulangerie-patisserie-thierry-redon"
  },
  {
    path: "/bakery/boulangerie-thierry-redon"
  },
  {
    path: "/bakery/tresse-doree-pain-patisserie-fine"
  },
  {
    path: "/bakery/la-tresse-doree"
  },
  {
    path: "/bakery/maison-sans-tresses"
  },
  {
    path: "/bakery/la-tresse-doree-2"
  },
  {
    path: "/bakery/boulangerie-geveze-le-fournil-de-sylvain"
  },
  {
    path: "/bakery/pralus-roanne-charles-de-gaulle-:-patisserie-chocolaterie"
  },
  {
    path: "/bakery/parcelles-assainies-unite-7"
  },
  {
    path: "/bakery/boulangerie-bo&mie-hotel-de-ville"
  },
  {
    path: "/bakery/maison-pozzoli-hotel-dieu"
  },
  {
    path: "/bakery/hotel"
  },
  {
    path: "/bakery/ty-chou-saint-germain"
  },
  {
    path: "/bakery/boulangerie-fleur-de-sarrasin"
  },
  {
    path: "/bakery/gael-patisserie-vitre"
  },
  {
    path: "/bakery/gael-redoute-patissier-chocolatier"
  },
  {
    path: "/bakery/gaelle-et-raphael"
  },
  {
    path: "/bakery/gael-redoute-patissier-chocolatier-2"
  },
  {
    path: "/bakery/l-amour-est-dans-le-ble-retiers-(35)"
  },
  {
    path: "/bakery/l-obligee"
  },
  {
    path: "/bakery/patissier-chocolatier-dinger"
  },
  {
    path: "/bakery/sain-boulangerie"
  },
  {
    path: "/bakery/boulangerie-la-maison-champeaud"
  },
  {
    path: "/bakery/vandemoortele-torce-1"
  },
  {
    path: "/bakery/bille-de-sucre"
  },
  {
    path: "/bakery/la-panacee"
  },
  {
    path: "/bakery/vitre-michel-rene-yvon"
  },
  {
    path: "/bakery/vitreux"
  },
  {
    path: "/bakery/le-moulin-vitreen"
  },
  {
    path: "/bakery/boulangerie-maison-marot"
  },
  {
    path: "/bakery/baillet-patrick"
  },
  {
    path: "/bakery/societe-baille-pain"
  },
  {
    path: "/bakery/boulangerie-alain-baillet"
  },
  {
    path: "/bakery/boulangerie-de-vignoc"
  },
  {
    path: "/bakery/mellelli"
  },
  {
    path: "/bakery/mlle-rose-saint-valery-en-caux"
  },
  {
    path: "/bakery/mlle-amandine"
  },
  {
    path: "/bakery/mlle-loujayne.-patisserie-orientales"
  },
  {
    path: "/bakery/mademoiselle-chou"
  },
  {
    path: "/bakery/boulangerie-la-bazouge-du-desert"
  },
  {
    path: "/bakery/melodie-des-pains"
  },
  {
    path: "/bakery/meline-et-nicolas"
  },
  {
    path: "/bakery/melodie-du-ble"
  },
  {
    path: "/bakery/la-boulangerie-des-ondes"
  },
  {
    path: "/bakery/biscuiterie-de-bretagne"
  },
  {
    path: "/bakery/boulangerie-de-lieuron"
  },
  {
    path: "/bakery/princesse-bakery"
  },
  {
    path: "/bakery/maison-princet"
  },
  {
    path: "/bakery/la-princesse-boulangerie"
  },
  {
    path: "/bakery/maison-princet-2"
  },
  {
    path: "/bakery/la-petite-princesse"
  },
  {
    path: "/bakery/biscuiterie-des-venetes-artisan-biscuitier-bio"
  },
  {
    path: "/bakery/mousselin-deregnaucourt-lucie"
  },
  {
    path: "/bakery/mousset-richard"
  },
  {
    path: "/bakery/boulangerie-mousset"
  },
  {
    path: "/bakery/boulangerie-mousset-les-miettes-de-pain"
  },
  {
    path: "/bakery/patisserie-sens"
  },
  {
    path: "/bakery/le-fournil-de-sens"
  },
  {
    path: "/bakery/boulangerie-au-bonheur-des-sens"
  },
  {
    path: "/bakery/boulangerie-gosnet"
  },
  {
    path: "/bakery/brielles-saint-jacques"
  },
  {
    path: "/bakery/boulangerie-poligne"
  },
  {
    path: "/bakery/o-delices-d-ernee"
  },
  {
    path: "/bakery/la-bretagne-a-l-honneur"
  },
  {
    path: "/bakery/boulangerie-patisserie-la-bretagne"
  },
  {
    path: "/bakery/fougerolles"
  },
  {
    path: "/bakery/la-fournee-du-chateau"
  },
  {
    path: "/bakery/vouillon-jean-philippe"
  },
  {
    path: "/bakery/les-delices-de-villiers-faissal."
  },
  {
    path: "/bakery/boulangerie-villiersoise"
  },
  {
    path: "/bakery/chateauroux"
  },
  {
    path: "/bakery/aux-gourmandises-de-conde"
  },
  {
    path: "/bakery/boulangerie-patisserie-6"
  },
  {
    path: "/bakery/au-fournil-de-conde-chez-manu-et-thierry"
  },
  {
    path: "/bakery/au-fournil-de-rochy-conde"
  },
  {
    path: "/bakery/boulangerie-portier"
  },
  {
    path: "/bakery/boulangerie-patisserie-associes-angers"
  },
  {
    path: "/bakery/la-patisserie-cyril-lignac-poncelet"
  },
  {
    path: "/bakery/la-patisserie-cyril-lignac-pasteur"
  },
  {
    path: "/bakery/la-patisserie-cyril-lignac-paul-bert"
  },
  {
    path: "/bakery/la-patisserie-cyril-lignac-sevres"
  },
  {
    path: "/bakery/boulangerie-des-2-lacs"
  },
  {
    path: "/bakery/boulangerie-thibaut-ardain-le-blanc-meteil"
  },
  {
    path: "/bakery/mignet-julien"
  },
  {
    path: "/bakery/migneaux-arnaud"
  },
  {
    path: "/bakery/boulangerie-migneaux-anthony"
  },
  {
    path: "/bakery/au-moulin-de-mignet"
  },
  {
    path: "/bakery/la-champenoise"
  },
  {
    path: "/bakery/la-champesoise"
  },
  {
    path: "/bakery/boulangerie-du-parnasse"
  },
  {
    path: "/bakery/le-fournil-du-parnasse"
  },
  {
    path: "/bakery/la-boulangerie-de-lourdoueix-st-michel"
  },
  {
    path: "/bakery/boulangerie-patisserie-des-marronniers"
  },
  {
    path: "/bakery/boulangerie-des-maronniers"
  },
  {
    path: "/bakery/boulangerie-patisserie-des-maronniers"
  },
  {
    path: "/bakery/maronnier-thierry"
  },
  {
    path: "/bakery/au-marron-glace"
  },
  {
    path: "/bakery/au-plaisir-de-chinon"
  },
  {
    path: "/bakery/aux-douceurs-de-larçay"
  },
  {
    path: "/bakery/boulangerie-druyer"
  },
  {
    path: "/bakery/l-atelier-st-michel"
  },
  {
    path: "/bakery/riviere-fabrice-au-bon-mitron"
  },
  {
    path: "/bakery/les-artisans-reunis"
  },
  {
    path: "/bakery/riviere-ludovic"
  },
  {
    path: "/bakery/chez-catherine"
  },
  {
    path: "/bakery/monts-&-merveilles"
  },
  {
    path: "/bakery/monts-peche-mignon"
  },
  {
    path: "/bakery/mont-sucre"
  },
  {
    path: "/bakery/monts-pain-2"
  },
  {
    path: "/bakery/paul-fondettes"
  },
  {
    path: "/bakery/lina-boulangerie-patisserie"
  },
  {
    path: "/bakery/l-osier"
  },
  {
    path: "/bakery/laval-et-fils-sarl"
  },
  {
    path: "/bakery/la-valise-a-macarons"
  },
  {
    path: "/bakery/les-delices-de-l-avallonnais-sarl"
  },
  {
    path: "/bakery/boulangerie-de-la-tour"
  },
  {
    path: "/bakery/patisserie-de-la-tour-d-auvergne"
  },
  {
    path: "/bakery/le-fournil-de-creon"
  },
  {
    path: "/bakery/pralus-sete-:-patisserie-chocolaterie"
  },
  {
    path: "/bakery/boulangerie-combes-freres"
  },
  {
    path: "/bakery/boulangerie-combes"
  },
  {
    path: "/bakery/combe-laurent"
  },
  {
    path: "/bakery/boulangerie-combes-jean-noel-&-carole"
  },
  {
    path: "/bakery/le-peche-de-gourmandise"
  },
  {
    path: "/bakery/le-peche-mignon"
  },
  {
    path: "/bakery/le-peche-des-anges"
  },
  {
    path: "/bakery/le-peche-mignon-2"
  },
  {
    path: "/bakery/le-peche-mignon-3"
  },
  {
    path: "/bakery/saint-suliac"
  },
  {
    path: "/bakery/bruz"
  },
  {
    path: "/bakery/boulangerie-patisserie-sandwicherie-drive"
  },
  {
    path: "/bakery/le-crousti-chaud"
  },
  {
    path: "/bakery/boulangerie-brece"
  },
  {
    path: "/bakery/sma-mouaze"
  },
  {
    path: "/bakery/baisson-claude"
  },
  {
    path: "/bakery/lange-sebastien"
  },
  {
    path: "/bakery/langer-laurent"
  },
  {
    path: "/bakery/l-angelique-maître-artisan-boulanger"
  },
  {
    path: "/bakery/l-angelique-maître-artisan-boulanger-2"
  },
  {
    path: "/bakery/maison-lauris"
  },
  {
    path: "/bakery/patisserie-marquet"
  },
  {
    path: "/bakery/boulangerie-sainte-fauste-paul-ginisty"
  },
  {
    path: "/bakery/la-chartreuse-de-parme"
  },
  {
    path: "/bakery/les-belles-ames-patisserie"
  },
  {
    path: "/bakery/boulangerie-de-belles-manieres"
  },
  {
    path: "/bakery/les-belles-envies"
  },
  {
    path: "/bakery/la-bien-nommee-biscuiterie-confiserie-de-belle-île-en-mer"
  },
  {
    path: "/bakery/boulangerie-le-forezien"
  },
  {
    path: "/bakery/la-forezienne"
  },
  {
    path: "/bakery/le-fournil-de-pruniers"
  },
  {
    path: "/bakery/sophie-lebreuilly-4"
  },
  {
    path: "/bakery/biscuiterie-d-amboise"
  },
  {
    path: "/bakery/boulangerie-patisserie-laurent-loches"
  },
  {
    path: "/bakery/boulangerie-descartes"
  },
  {
    path: "/bakery/mozart-iii"
  },
  {
    path: "/bakery/boulangerie-mozart"
  },
  {
    path: "/bakery/les-gourmandises-de-mozart"
  },
  {
    path: "/bakery/boulangerie-patisserie-mozart"
  },
  {
    path: "/bakery/boulangerie-des-tuffeaux-sarl"
  },
  {
    path: "/bakery/maison-fracchiolla-artisan-boulanger"
  },
  {
    path: "/bakery/boulangerie-viriville-le-fournil-de-chambaran"
  },
  {
    path: "/bakery/les-douceurs-de-st-guillaume"
  },
  {
    path: "/bakery/maison-billar-patisserie-boulangerie-chocolaterie"
  },
  {
    path: "/bakery/boulangerie-tropicale"
  },
  {
    path: "/bakery/maison-aleonard"
  },
  {
    path: "/bakery/boulangerie-patisserie-la-guerande"
  },
  {
    path: "/bakery/boulangerie-victor-martin-cayenne"
  },
  {
    path: "/blogs/my-bakery-classement-des-meilleurs-boulangerie-de-france"
  },
  {
    path: "/blogs/comment-definir-une-bonne-boulangerie-sur-my-bakery"
  },
  {
    path: "/bakerys-city/acheres/435"
  },
  {
    path: "/bakerys-city/afa/2925"
  },
  {
    path: "/bakerys-city/agde/71"
  },
  {
    path: "/bakerys-city/agen/1087"
  },
  {
    path: "/bakerys-city/aguessac/2449"
  },
  {
    path: "/bakerys-city/aigueperse/2345"
  },
  {
    path: "/bakerys-city/aigues-mortes/2726"
  },
  {
    path: "/bakerys-city/aigues-vives/1073"
  },
  {
    path: "/bakerys-city/aiguillon/1750"
  },
  {
    path: "/bakerys-city/ailly-sur-somme/2575"
  },
  {
    path: "/bakerys-city/airel/919"
  },
  {
    path: "/bakerys-city/aix-en-provence/70"
  },
  {
    path: "/bakerys-city/aix-les-bains/1921"
  },
  {
    path: "/bakerys-city/ajaccio/833"
  },
  {
    path: "/bakerys-city/albertville/1842"
  },
  {
    path: "/bakerys-city/albi/1608"
  },
  {
    path: "/bakerys-city/alençon/1241"
  },
  {
    path: "/bakerys-city/ales/665"
  },
  {
    path: "/bakerys-city/alfortville/469"
  },
  {
    path: "/bakerys-city/allaire/3239"
  },
  {
    path: "/bakerys-city/allanche/211"
  },
  {
    path: "/bakerys-city/allauch/1406"
  },
  {
    path: "/bakerys-city/allemans/99"
  },
  {
    path: "/bakerys-city/allex/3100"
  },
  {
    path: "/bakerys-city/alligny-en-morvan/1105"
  },
  {
    path: "/bakerys-city/allonnes/1421"
  },
  {
    path: "/bakerys-city/allos/548"
  },
  {
    path: "/bakerys-city/allouagne/116"
  },
  {
    path: "/bakerys-city/amberieu-en-bugey/2456"
  },
  {
    path: "/bakerys-city/amboise/183"
  },
  {
    path: "/bakerys-city/amiens/2395"
  },
  {
    path: "/bakerys-city/ancenis-saint-gereon/15"
  },
  {
    path: "/bakerys-city/andelnans/2126"
  },
  {
    path: "/bakerys-city/andeville/2573"
  },
  {
    path: "/bakerys-city/andrest/1339"
  },
  {
    path: "/bakerys-city/andrezieux-boutheon/1913"
  },
  {
    path: "/bakerys-city/anduze/2738"
  },
  {
    path: "/bakerys-city/anet/3160"
  },
  {
    path: "/bakerys-city/angers/464"
  },
  {
    path: "/bakerys-city/angles/557"
  },
  {
    path: "/bakerys-city/anglet/283"
  },
  {
    path: "/bakerys-city/angoisse/2226"
  },
  {
    path: "/bakerys-city/angouleme/413"
  },
  {
    path: "/bakerys-city/anizy-le-chateau/266"
  },
  {
    path: "/bakerys-city/anizy-le-grand/392"
  },
  {
    path: "/bakerys-city/annecy/2039"
  },
  {
    path: "/bakerys-city/annemasse/813"
  },
  {
    path: "/bakerys-city/annezin/2148"
  },
  {
    path: "/bakerys-city/ansac-sur-vienne/1900"
  },
  {
    path: "/bakerys-city/antibes/1281"
  },
  {
    path: "/bakerys-city/antignac/1605"
  },
  {
    path: "/bakerys-city/antony/1139"
  },
  {
    path: "/bakerys-city/antran/920"
  },
  {
    path: "/bakerys-city/aouste-sur-sye/2828"
  },
  {
    path: "/bakerys-city/apprieu/1055"
  },
  {
    path: "/bakerys-city/apt/625"
  },
  {
    path: "/bakerys-city/arbent/165"
  },
  {
    path: "/bakerys-city/arcachon/974"
  },
  {
    path: "/bakerys-city/arcenant/3076"
  },
  {
    path: "/bakerys-city/archettes/2495"
  },
  {
    path: "/bakerys-city/arcueil/2744"
  },
  {
    path: "/bakerys-city/ardelles/2788"
  },
  {
    path: "/bakerys-city/ardoix/738"
  },
  {
    path: "/bakerys-city/ardres/622"
  },
  {
    path: "/bakerys-city/arelaune-en-seine/448"
  },
  {
    path: "/bakerys-city/argeles-gazost/2036"
  },
  {
    path: "/bakerys-city/argentat-sur-dordogne/1982"
  },
  {
    path: "/bakerys-city/argenteuil/2531"
  },
  {
    path: "/bakerys-city/argis/441"
  },
  {
    path: "/bakerys-city/arles/697"
  },
  {
    path: "/bakerys-city/armoy/945"
  },
  {
    path: "/bakerys-city/arnouville/2200"
  },
  {
    path: "/bakerys-city/arpajon/2733"
  },
  {
    path: "/bakerys-city/arques/1751"
  },
  {
    path: "/bakerys-city/ars-en-re/1652"
  },
  {
    path: "/bakerys-city/ars-laquenexy/429"
  },
  {
    path: "/bakerys-city/artigues-pres-bordeaux/415"
  },
  {
    path: "/bakerys-city/artix/2577"
  },
  {
    path: "/bakerys-city/arvieux/600"
  },
  {
    path: "/bakerys-city/asnelles/968"
  },
  {
    path: "/bakerys-city/asnieres-sur-seine/146"
  },
  {
    path: "/bakerys-city/aspres-sur-buech/1918"
  },
  {
    path: "/bakerys-city/athee/524"
  },
  {
    path: "/bakerys-city/attichy/934"
  },
  {
    path: "/bakerys-city/aubagne/561"
  },
  {
    path: "/bakerys-city/aubenas/770"
  },
  {
    path: "/bakerys-city/aubervilliers/501"
  },
  {
    path: "/bakerys-city/aubiere/335"
  },
  {
    path: "/bakerys-city/aubigny-sur-nere/935"
  },
  {
    path: "/bakerys-city/auch/42"
  },
  {
    path: "/bakerys-city/audenge/3001"
  },
  {
    path: "/bakerys-city/audincourt/1855"
  },
  {
    path: "/bakerys-city/audruicq/2803"
  },
  {
    path: "/bakerys-city/augan/2422"
  },
  {
    path: "/bakerys-city/aulnay/1211"
  },
  {
    path: "/bakerys-city/aulnay-sous-bois/2172"
  },
  {
    path: "/bakerys-city/aussois/2962"
  },
  {
    path: "/bakerys-city/autechaux-roide/2338"
  },
  {
    path: "/bakerys-city/auterive/181"
  },
  {
    path: "/bakerys-city/autry-le-chatel/909"
  },
  {
    path: "/bakerys-city/auxerre/3158"
  },
  {
    path: "/bakerys-city/auzet/554"
  },
  {
    path: "/bakerys-city/availles-limouzine/2580"
  },
  {
    path: "/bakerys-city/avallon/3252"
  },
  {
    path: "/bakerys-city/avanne-aveney/1364"
  },
  {
    path: "/bakerys-city/aveze/1813"
  },
  {
    path: "/bakerys-city/avignon/1033"
  },
  {
    path: "/bakerys-city/avon/855"
  },
  {
    path: "/bakerys-city/avranches/2951"
  },
  {
    path: "/bakerys-city/aÿ-champagne/3220"
  },
  {
    path: "/bakerys-city/aytre/1807"
  },
  {
    path: "/bakerys-city/azay-sur-thouet/3276"
  },
  {
    path: "/bakerys-city/azille/687"
  },
  {
    path: "/bakerys-city/baccarat/1788"
  },
  {
    path: "/bakerys-city/badefols-sur-dordogne/2230"
  },
  {
    path: "/bakerys-city/badens/2734"
  },
  {
    path: "/bakerys-city/bages/120"
  },
  {
    path: "/bakerys-city/bagnoles-de-l-orne-normandie/1667"
  },
  {
    path: "/bakerys-city/bailleul/319"
  },
  {
    path: "/bakerys-city/bains-sur-oust/432"
  },
  {
    path: "/bakerys-city/balma/1877"
  },
  {
    path: "/bakerys-city/banon/564"
  },
  {
    path: "/bakerys-city/banyuls-sur-mer/1898"
  },
  {
    path: "/bakerys-city/bar-sur-aube/2579"
  },
  {
    path: "/bakerys-city/baraqueville/1244"
  },
  {
    path: "/bakerys-city/baratier/262"
  },
  {
    path: "/bakerys-city/barbazan-debat/854"
  },
  {
    path: "/bakerys-city/barberey-saint-sulpice/3190"
  },
  {
    path: "/bakerys-city/barbezieux-saint-hilaire/1573"
  },
  {
    path: "/bakerys-city/barbizon/436"
  },
  {
    path: "/bakerys-city/barbotan-les-thermes/2935"
  },
  {
    path: "/bakerys-city/barby/2502"
  },
  {
    path: "/bakerys-city/barcus/1668"
  },
  {
    path: "/bakerys-city/barjouville/1"
  },
  {
    path: "/bakerys-city/barneville-carteret/2558"
  },
  {
    path: "/bakerys-city/barr/370"
  },
  {
    path: "/bakerys-city/bassens/416"
  },
  {
    path: "/bakerys-city/bassillac-et-auberoche/696"
  },
  {
    path: "/bakerys-city/batz-sur-mer/2139"
  },
  {
    path: "/bakerys-city/bauvin/1632"
  },
  {
    path: "/bakerys-city/bayeux/422"
  },
  {
    path: "/bakerys-city/bayonne/1423"
  },
  {
    path: "/bakerys-city/bazainville/811"
  },
  {
    path: "/bakerys-city/bazancourt/3166"
  },
  {
    path: "/bakerys-city/bazouges-cre-sur-loir/1828"
  },
  {
    path: "/bakerys-city/beaucaire/428"
  },
  {
    path: "/bakerys-city/beauchamp/2595"
  },
  {
    path: "/bakerys-city/beaufort-en-vallee/2829"
  },
  {
    path: "/bakerys-city/beaulieu-sur-mer/2947"
  },
  {
    path: "/bakerys-city/beaumont-du-lac/100"
  },
  {
    path: "/bakerys-city/beaumont-les-valence/2417"
  },
  {
    path: "/bakerys-city/beaumont-monteux/101"
  },
  {
    path: "/bakerys-city/beaumont-sur-oise/1600"
  },
  {
    path: "/bakerys-city/beaune/6"
  },
  {
    path: "/bakerys-city/beauvais/214"
  },
  {
    path: "/bakerys-city/beauvallon/807"
  },
  {
    path: "/bakerys-city/beauvoir/860"
  },
  {
    path: "/bakerys-city/beaux/487"
  },
  {
    path: "/bakerys-city/bedous/1986"
  },
  {
    path: "/bakerys-city/begles/1738"
  },
  {
    path: "/bakerys-city/belbeuf/2723"
  },
  {
    path: "/bakerys-city/belfort/1020"
  },
  {
    path: "/bakerys-city/bellac/2698"
  },
  {
    path: "/bakerys-city/belle-isle-en-terre/1757"
  },
  {
    path: "/bakerys-city/bellegarde/3154"
  },
  {
    path: "/bakerys-city/belleu/2327"
  },
  {
    path: "/bakerys-city/belloy-sur-somme/2454"
  },
  {
    path: "/bakerys-city/benassay/2963"
  },
  {
    path: "/bakerys-city/benestroff/931"
  },
  {
    path: "/bakerys-city/benodet/1812"
  },
  {
    path: "/bakerys-city/benon/2460"
  },
  {
    path: "/bakerys-city/bergerac/1581"
  },
  {
    path: "/bakerys-city/bernos-beaulac/3014"
  },
  {
    path: "/bakerys-city/besançon/878"
  },
  {
    path: "/bakerys-city/bessancourt/1767"
  },
  {
    path: "/bakerys-city/besse-sur-braye/1606"
  },
  {
    path: "/bakerys-city/bessines-sur-gartempe/3134"
  },
  {
    path: "/bakerys-city/betheny/1504"
  },
  {
    path: "/bakerys-city/bethune/115"
  },
  {
    path: "/bakerys-city/betton/2605"
  },
  {
    path: "/bakerys-city/beuil/680"
  },
  {
    path: "/bakerys-city/beurlay/1895"
  },
  {
    path: "/bakerys-city/beuzeville/1441"
  },
  {
    path: "/bakerys-city/beuzeville-la-grenier/2559"
  },
  {
    path: "/bakerys-city/beziers/2205"
  },
  {
    path: "/bakerys-city/bezons/579"
  },
  {
    path: "/bakerys-city/bezu-saint-eloi/55"
  },
  {
    path: "/bakerys-city/biarritz/966"
  },
  {
    path: "/bakerys-city/bidart/1481"
  },
  {
    path: "/bakerys-city/billere/2977"
  },
  {
    path: "/bakerys-city/billom/681"
  },
  {
    path: "/bakerys-city/billy-berclau/2915"
  },
  {
    path: "/bakerys-city/biot/3038"
  },
  {
    path: "/bakerys-city/biscarrosse/1245"
  },
  {
    path: "/bakerys-city/bisseuil/3164"
  },
  {
    path: "/bakerys-city/biviers/2179"
  },
  {
    path: "/bakerys-city/blagnac/2406"
  },
  {
    path: "/bakerys-city/blamont/2396"
  },
  {
    path: "/bakerys-city/blangy-le-chateau/1589"
  },
  {
    path: "/bakerys-city/blausasc/1647"
  },
  {
    path: "/bakerys-city/blieux/569"
  },
  {
    path: "/bakerys-city/blois/276"
  },
  {
    path: "/bakerys-city/boen-sur-lignon/493"
  },
  {
    path: "/bakerys-city/bois-grenier/726"
  },
  {
    path: "/bakerys-city/boisse/2240"
  },
  {
    path: "/bakerys-city/boisset-et-gaujac/1627"
  },
  {
    path: "/bakerys-city/boissy-sous-saint-yon/2009"
  },
  {
    path: "/bakerys-city/bondy/1210"
  },
  {
    path: "/bakerys-city/bonnetable/3090"
  },
  {
    path: "/bakerys-city/bonnetan/2991"
  },
  {
    path: "/bakerys-city/bonneuil-en-valois/357"
  },
  {
    path: "/bakerys-city/bonneuil-les-eaux/393"
  },
  {
    path: "/bakerys-city/bonneuil-sur-marne/470"
  },
  {
    path: "/bakerys-city/bonneville/2430"
  },
  {
    path: "/bakerys-city/bonrepaux/1114"
  },
  {
    path: "/bakerys-city/bons-en-chablais/462"
  },
  {
    path: "/bakerys-city/bonson/693"
  },
  {
    path: "/bakerys-city/bordeaux/93"
  },
  {
    path: "/bakerys-city/borgo/296"
  },
  {
    path: "/bakerys-city/bormes-les-mimosas/1082"
  },
  {
    path: "/bakerys-city/bouaye/1649"
  },
  {
    path: "/bakerys-city/bouc-bel-air/605"
  },
  {
    path: "/bakerys-city/boucau/1014"
  },
  {
    path: "/bakerys-city/bouchemaine/3288"
  },
  {
    path: "/bakerys-city/boucoiran-et-nozieres/803"
  },
  {
    path: "/bakerys-city/bouges-le-chateau/3202"
  },
  {
    path: "/bakerys-city/boulay-moselle/2550"
  },
  {
    path: "/bakerys-city/boulogne-billancourt/692"
  },
  {
    path: "/bakerys-city/boulogne-sur-mer/2510"
  },
  {
    path: "/bakerys-city/bourbonne-les-bains/937"
  },
  {
    path: "/bakerys-city/bourbriac/3008"
  },
  {
    path: "/bakerys-city/bourg/1890"
  },
  {
    path: "/bakerys-city/bourg-de-peage/233"
  },
  {
    path: "/bakerys-city/bourg-en-bresse/1250"
  },
  {
    path: "/bakerys-city/bourg-les-valence/1418"
  },
  {
    path: "/bakerys-city/bourg-saint-andeol/1689"
  },
  {
    path: "/bakerys-city/bourganeuf/2889"
  },
  {
    path: "/bakerys-city/bourges/285"
  },
  {
    path: "/bakerys-city/bourgogne-fresne/3124"
  },
  {
    path: "/bakerys-city/bourgoin-jallieu/2151"
  },
  {
    path: "/bakerys-city/bourgvallees/2388"
  },
  {
    path: "/bakerys-city/bourthes/2451"
  },
  {
    path: "/bakerys-city/boussay/2917"
  },
  {
    path: "/bakerys-city/bozouls/3279"
  },
  {
    path: "/bakerys-city/bram/3249"
  },
  {
    path: "/bakerys-city/branne/1618"
  },
  {
    path: "/bakerys-city/braud-et-saint-louis/1290"
  },
  {
    path: "/bakerys-city/brax/1373"
  },
  {
    path: "/bakerys-city/bray-saint-aignan/2523"
  },
  {
    path: "/bakerys-city/breal-sous-montfort/2517"
  },
  {
    path: "/bakerys-city/bren/2482"
  },
  {
    path: "/bakerys-city/bressuire/482"
  },
  {
    path: "/bakerys-city/brest/1044"
  },
  {
    path: "/bakerys-city/bretagne-d-armagnac/1067"
  },
  {
    path: "/bakerys-city/breteuil/2560"
  },
  {
    path: "/bakerys-city/bretigny-sur-orge/2111"
  },
  {
    path: "/bakerys-city/bretteville-sur-ay/2434"
  },
  {
    path: "/bakerys-city/bretteville-sur-odon/2435"
  },
  {
    path: "/bakerys-city/breuillet/3272"
  },
  {
    path: "/bakerys-city/bricquebec-en-cotentin/990"
  },
  {
    path: "/bakerys-city/brienne-le-chateau/1166"
  },
  {
    path: "/bakerys-city/brignais/2348"
  },
  {
    path: "/bakerys-city/briord/51"
  },
  {
    path: "/bakerys-city/brioux-sur-boutonne/2654"
  },
  {
    path: "/bakerys-city/briscous/2293"
  },
  {
    path: "/bakerys-city/brive-la-gaillarde/1085"
  },
  {
    path: "/bakerys-city/brizambourg/1843"
  },
  {
    path: "/bakerys-city/broons/244"
  },
  {
    path: "/bakerys-city/brou/2439"
  },
  {
    path: "/bakerys-city/broue/2651"
  },
  {
    path: "/bakerys-city/bruges/241"
  },
  {
    path: "/bakerys-city/bruges-capbis-mifaget/3015"
  },
  {
    path: "/bakerys-city/brunoy/2899"
  },
  {
    path: "/bakerys-city/brusvily/2120"
  },
  {
    path: "/bakerys-city/bruz/2130"
  },
  {
    path: "/bakerys-city/bry-sur-marne/264"
  },
  {
    path: "/bakerys-city/bucquoy/2657"
  },
  {
    path: "/bakerys-city/bussy-saint-georges/1975"
  },
  {
    path: "/bakerys-city/buxerolles/2088"
  },
  {
    path: "/bakerys-city/cabestany/1515"
  },
  {
    path: "/bakerys-city/cabrieres-d-avignon/1929"
  },
  {
    path: "/bakerys-city/cabries/1300"
  },
  {
    path: "/bakerys-city/cadaujac/3092"
  },
  {
    path: "/bakerys-city/caen/593"
  },
  {
    path: "/bakerys-city/cagnes-sur-mer/2612"
  },
  {
    path: "/bakerys-city/cairon/1577"
  },
  {
    path: "/bakerys-city/cajarc/1001"
  },
  {
    path: "/bakerys-city/calais/461"
  },
  {
    path: "/bakerys-city/calan/1461"
  },
  {
    path: "/bakerys-city/caluire-et-cuire/1299"
  },
  {
    path: "/bakerys-city/calvi/695"
  },
  {
    path: "/bakerys-city/campagnac/1324"
  },
  {
    path: "/bakerys-city/campagne/2538"
  },
  {
    path: "/bakerys-city/cancale/158"
  },
  {
    path: "/bakerys-city/cancon/1262"
  },
  {
    path: "/bakerys-city/cannes/1079"
  },
  {
    path: "/bakerys-city/cantenay-epinard/2113"
  },
  {
    path: "/bakerys-city/capbreton/2006"
  },
  {
    path: "/bakerys-city/capdenac/1805"
  },
  {
    path: "/bakerys-city/captieux/2037"
  },
  {
    path: "/bakerys-city/carbonne/1559"
  },
  {
    path: "/bakerys-city/carcassonne/1477"
  },
  {
    path: "/bakerys-city/carignan-de-bordeaux/951"
  },
  {
    path: "/bakerys-city/carnoux-en-provence/1160"
  },
  {
    path: "/bakerys-city/carpentras/610"
  },
  {
    path: "/bakerys-city/carquefou/1495"
  },
  {
    path: "/bakerys-city/carrieres-sous-poissy/2855"
  },
  {
    path: "/bakerys-city/carrieres-sur-seine/1763"
  },
  {
    path: "/bakerys-city/carry-le-rouet/3106"
  },
  {
    path: "/bakerys-city/cassaniouze/2680"
  },
  {
    path: "/bakerys-city/casteljaloux/3231"
  },
  {
    path: "/bakerys-city/castelnau-de-medoc/411"
  },
  {
    path: "/bakerys-city/castelsagrat/2296"
  },
  {
    path: "/bakerys-city/castillon-la-bataille/2424"
  },
  {
    path: "/bakerys-city/castres-gironde/293"
  },
  {
    path: "/bakerys-city/cauterets/1003"
  },
  {
    path: "/bakerys-city/cavaillon/192"
  },
  {
    path: "/bakerys-city/cavalaire-sur-mer/2666"
  },
  {
    path: "/bakerys-city/cayenne/3305"
  },
  {
    path: "/bakerys-city/cayrac/1239"
  },
  {
    path: "/bakerys-city/cazilhac/1242"
  },
  {
    path: "/bakerys-city/cendras/2447"
  },
  {
    path: "/bakerys-city/cenon/417"
  },
  {
    path: "/bakerys-city/ceret/2442"
  },
  {
    path: "/bakerys-city/cergy/222"
  },
  {
    path: "/bakerys-city/cerisy-la-salle/603"
  },
  {
    path: "/bakerys-city/cerizay/1833"
  },
  {
    path: "/bakerys-city/cernay-la-ville/1564"
  },
  {
    path: "/bakerys-city/cesson-sevigne/644"
  },
  {
    path: "/bakerys-city/ceyreste/1386"
  },
  {
    path: "/bakerys-city/chaban/1732"
  },
  {
    path: "/bakerys-city/chabanais/1798"
  },
  {
    path: "/bakerys-city/chadenac/1838"
  },
  {
    path: "/bakerys-city/chadrac/3045"
  },
  {
    path: "/bakerys-city/chagny/1360"
  },
  {
    path: "/bakerys-city/chailland/1745"
  },
  {
    path: "/bakerys-city/chailles/277"
  },
  {
    path: "/bakerys-city/chalabre/1224"
  },
  {
    path: "/bakerys-city/chaligny/817"
  },
  {
    path: "/bakerys-city/challans/2519"
  },
  {
    path: "/bakerys-city/chalon-sur-saone/1894"
  },
  {
    path: "/bakerys-city/chalons-en-champagne/962"
  },
  {
    path: "/bakerys-city/chalonvillars/2228"
  },
  {
    path: "/bakerys-city/chamalieres/1619"
  },
  {
    path: "/bakerys-city/chamalieres-sur-loire/1891"
  },
  {
    path: "/bakerys-city/chambain/1225"
  },
  {
    path: "/bakerys-city/chambery/1435"
  },
  {
    path: "/bakerys-city/chamborigaud/784"
  },
  {
    path: "/bakerys-city/chambourg-sur-indre/2632"
  },
  {
    path: "/bakerys-city/chambray-les-tours/2507"
  },
  {
    path: "/bakerys-city/champagne-au-mont-d-or/809"
  },
  {
    path: "/bakerys-city/champagne-sur-oise/3223"
  },
  {
    path: "/bakerys-city/champagne-sur-seine/348"
  },
  {
    path: "/bakerys-city/champagnole/2410"
  },
  {
    path: "/bakerys-city/champenoux/2500"
  },
  {
    path: "/bakerys-city/champigneulles/1558"
  },
  {
    path: "/bakerys-city/champigny-sur-marne/1682"
  },
  {
    path: "/bakerys-city/champniers/1730"
  },
  {
    path: "/bakerys-city/champs-sur-marne/3224"
  },
  {
    path: "/bakerys-city/chancelade/2101"
  },
  {
    path: "/bakerys-city/change/2752"
  },
  {
    path: "/bakerys-city/chanteau/2165"
  },
  {
    path: "/bakerys-city/chantepie/2918"
  },
  {
    path: "/bakerys-city/chapelle-viviers/61"
  },
  {
    path: "/bakerys-city/chapelle-voland/865"
  },
  {
    path: "/bakerys-city/charcenne/2321"
  },
  {
    path: "/bakerys-city/charenton-le-pont/1011"
  },
  {
    path: "/bakerys-city/charleville-mezieres/3077"
  },
  {
    path: "/bakerys-city/charmes-sur-rhone/1675"
  },
  {
    path: "/bakerys-city/charny-oree-de-puisaye/2103"
  },
  {
    path: "/bakerys-city/chartres/157"
  },
  {
    path: "/bakerys-city/chartres-de-bretagne/1597"
  },
  {
    path: "/bakerys-city/chateau-arnoux-saint-auban/1369"
  },
  {
    path: "/bakerys-city/chateau-gaillard/2094"
  },
  {
    path: "/bakerys-city/chateau-gontier-sur-mayenne/1939"
  },
  {
    path: "/bakerys-city/chateau-ville-vieille/2697"
  },
  {
    path: "/bakerys-city/chateaubourg/2478"
  },
  {
    path: "/bakerys-city/chateaubriant/1349"
  },
  {
    path: "/bakerys-city/chateaudun/2"
  },
  {
    path: "/bakerys-city/chateauneuf-sur-charente/1205"
  },
  {
    path: "/bakerys-city/chateauroux/1270"
  },
  {
    path: "/bakerys-city/chateauvillain/2716"
  },
  {
    path: "/bakerys-city/chatelaillon-plage/465"
  },
  {
    path: "/bakerys-city/chatellerault/766"
  },
  {
    path: "/bakerys-city/chatillon-la-palud/399"
  },
  {
    path: "/bakerys-city/chatillon-sur-colmont/398"
  },
  {
    path: "/bakerys-city/chatillon-sur-thouet/3225"
  },
  {
    path: "/bakerys-city/chatou/2420"
  },
  {
    path: "/bakerys-city/chatres/1151"
  },
  {
    path: "/bakerys-city/chatte/2260"
  },
  {
    path: "/bakerys-city/chatuzange-le-goubet/232"
  },
  {
    path: "/bakerys-city/chauconin-neufmontiers/3274"
  },
  {
    path: "/bakerys-city/chaucre/94"
  },
  {
    path: "/bakerys-city/chaumont/708"
  },
  {
    path: "/bakerys-city/chaumont-porcien/1925"
  },
  {
    path: "/bakerys-city/chauray/856"
  },
  {
    path: "/bakerys-city/chauvigny/2581"
  },
  {
    path: "/bakerys-city/chavannes-sur-l-etang/1933"
  },
  {
    path: "/bakerys-city/chavannes-sur-suran/1934"
  },
  {
    path: "/bakerys-city/chazelles-sur-lyon/1912"
  },
  {
    path: "/bakerys-city/cheille/1153"
  },
  {
    path: "/bakerys-city/chelles/1189"
  },
  {
    path: "/bakerys-city/chemille-en-anjou/1042"
  },
  {
    path: "/bakerys-city/chemille-sur-deme/2221"
  },
  {
    path: "/bakerys-city/chenimenil/2496"
  },
  {
    path: "/bakerys-city/chennevieres-sur-marne/675"
  },
  {
    path: "/bakerys-city/chepniers/2678"
  },
  {
    path: "/bakerys-city/cheraute/1670"
  },
  {
    path: "/bakerys-city/cherbourg-en-cotentin/2161"
  },
  {
    path: "/bakerys-city/chessy/3043"
  },
  {
    path: "/bakerys-city/chevilly-larue/1005"
  },
  {
    path: "/bakerys-city/chiche/3039"
  },
  {
    path: "/bakerys-city/chilly-mazarin/57"
  },
  {
    path: "/bakerys-city/chinon/653"
  },
  {
    path: "/bakerys-city/choisy-le-roi/344"
  },
  {
    path: "/bakerys-city/cholet/322"
  },
  {
    path: "/bakerys-city/chomelix/804"
  },
  {
    path: "/bakerys-city/chougny/397"
  },
  {
    path: "/bakerys-city/chuelles/858"
  },
  {
    path: "/bakerys-city/cire-d-aunis/1743"
  },
  {
    path: "/bakerys-city/civrieux/88"
  },
  {
    path: "/bakerys-city/clairefontaine-en-yvelines/439"
  },
  {
    path: "/bakerys-city/clairvaux-les-lacs/3217"
  },
  {
    path: "/bakerys-city/clamart/705"
  },
  {
    path: "/bakerys-city/clans/2441"
  },
  {
    path: "/bakerys-city/clapiers/2645"
  },
  {
    path: "/bakerys-city/clarafond-arcine/3218"
  },
  {
    path: "/bakerys-city/cleguerec/238"
  },
  {
    path: "/bakerys-city/clerey/810"
  },
  {
    path: "/bakerys-city/clermont-ferrand/317"
  },
  {
    path: "/bakerys-city/clermont-l-herault/3129"
  },
  {
    path: "/bakerys-city/clisson/2712"
  },
  {
    path: "/bakerys-city/cœuvres-et-valsery/311"
  },
  {
    path: "/bakerys-city/coex/1571"
  },
  {
    path: "/bakerys-city/cognac-la-foret/1698"
  },
  {
    path: "/bakerys-city/coligny/167"
  },
  {
    path: "/bakerys-city/colleville-montgomery/1480"
  },
  {
    path: "/bakerys-city/collias/3115"
  },
  {
    path: "/bakerys-city/collioure/797"
  },
  {
    path: "/bakerys-city/collonges-la-rouge/1945"
  },
  {
    path: "/bakerys-city/collonges-sous-saleve/136"
  },
  {
    path: "/bakerys-city/colmar/2635"
  },
  {
    path: "/bakerys-city/colombelles/1511"
  },
  {
    path: "/bakerys-city/colombes/1188"
  },
  {
    path: "/bakerys-city/colombier-saugnieu/2549"
  },
  {
    path: "/bakerys-city/colomiers/1663"
  },
  {
    path: "/bakerys-city/comines/1347"
  },
  {
    path: "/bakerys-city/commentry/98"
  },
  {
    path: "/bakerys-city/commercy/289"
  },
  {
    path: "/bakerys-city/compiegne/1357"
  },
  {
    path: "/bakerys-city/concarneau/761"
  },
  {
    path: "/bakerys-city/conde-sur-marne/3208"
  },
  {
    path: "/bakerys-city/conde-sur-vesgre/3211"
  },
  {
    path: "/bakerys-city/condeissiat/1221"
  },
  {
    path: "/bakerys-city/confolens/1135"
  },
  {
    path: "/bakerys-city/connaux/971"
  },
  {
    path: "/bakerys-city/conques-en-rouergue/499"
  },
  {
    path: "/bakerys-city/contamine-sur-arve/2593"
  },
  {
    path: "/bakerys-city/contrevoz/2251"
  },
  {
    path: "/bakerys-city/copponex/1120"
  },
  {
    path: "/bakerys-city/corbeil-essonnes/474"
  },
  {
    path: "/bakerys-city/corme-royal/902"
  },
  {
    path: "/bakerys-city/cormelles-le-royal/1447"
  },
  {
    path: "/bakerys-city/cormontreuil/2781"
  },
  {
    path: "/bakerys-city/cornebarrieu/2836"
  },
  {
    path: "/bakerys-city/cosne-cours-sur-loire/2990"
  },
  {
    path: "/bakerys-city/coteaux-du-blanzacais/1283"
  },
  {
    path: "/bakerys-city/coudekerque-branche/2817"
  },
  {
    path: "/bakerys-city/coudoux/304"
  },
  {
    path: "/bakerys-city/coudun/2267"
  },
  {
    path: "/bakerys-city/couhe/1261"
  },
  {
    path: "/bakerys-city/coulanges-les-nevers/1145"
  },
  {
    path: "/bakerys-city/couloisy/961"
  },
  {
    path: "/bakerys-city/coulon/950"
  },
  {
    path: "/bakerys-city/coulonges-les-herolles/2613"
  },
  {
    path: "/bakerys-city/coulonges-sur-l-autize/1870"
  },
  {
    path: "/bakerys-city/cour-maugis-sur-huisne/367"
  },
  {
    path: "/bakerys-city/courcelles-les-lens/2316"
  },
  {
    path: "/bakerys-city/coursac/2679"
  },
  {
    path: "/bakerys-city/coussay-les-bois/1123"
  },
  {
    path: "/bakerys-city/coutainville/2117"
  },
  {
    path: "/bakerys-city/coutiches/1416"
  },
  {
    path: "/bakerys-city/cozes/1868"
  },
  {
    path: "/bakerys-city/craponne/1420"
  },
  {
    path: "/bakerys-city/craponne-sur-arzon/444"
  },
  {
    path: "/bakerys-city/crecy-sur-serre/1772"
  },
  {
    path: "/bakerys-city/crehange/1235"
  },
  {
    path: "/bakerys-city/crehen/2164"
  },
  {
    path: "/bakerys-city/creil/1985"
  },
  {
    path: "/bakerys-city/creon/3255"
  },
  {
    path: "/bakerys-city/crepy-en-valois/353"
  },
  {
    path: "/bakerys-city/cressensac-sarrazac/2295"
  },
  {
    path: "/bakerys-city/creteil/1888"
  },
  {
    path: "/bakerys-city/creully-sur-seulles/1446"
  },
  {
    path: "/bakerys-city/crevin/3196"
  },
  {
    path: "/bakerys-city/croissy-sur-seine/287"
  },
  {
    path: "/bakerys-city/croth/2506"
  },
  {
    path: "/bakerys-city/crouy-sur-ourcq/326"
  },
  {
    path: "/bakerys-city/crozant/2215"
  },
  {
    path: "/bakerys-city/crugny/2625"
  },
  {
    path: "/bakerys-city/cublize/621"
  },
  {
    path: "/bakerys-city/cugnaux/2786"
  },
  {
    path: "/bakerys-city/cuise-la-motte/933"
  },
  {
    path: "/bakerys-city/cuzac/3052"
  },
  {
    path: "/bakerys-city/daglan/1048"
  },
  {
    path: "/bakerys-city/dampierre-sur-salon/1143"
  },
  {
    path: "/bakerys-city/danne-et-quatre-vents/2833"
  },
  {
    path: "/bakerys-city/dannemarie/475"
  },
  {
    path: "/bakerys-city/darnetal/2097"
  },
  {
    path: "/bakerys-city/dasle/623"
  },
  {
    path: "/bakerys-city/davezieux/2056"
  },
  {
    path: "/bakerys-city/dax/652"
  },
  {
    path: "/bakerys-city/deauville/1512"
  },
  {
    path: "/bakerys-city/decines-charpieu/449"
  },
  {
    path: "/bakerys-city/denain/1977"
  },
  {
    path: "/bakerys-city/deols/2008"
  },
  {
    path: "/bakerys-city/deuil-la-barre/271"
  },
  {
    path: "/bakerys-city/digne-les-bains/602"
  },
  {
    path: "/bakerys-city/dijon/340"
  },
  {
    path: "/bakerys-city/dinard/216"
  },
  {
    path: "/bakerys-city/dissay-sous-courcillon/2493"
  },
  {
    path: "/bakerys-city/dizy/3221"
  },
  {
    path: "/bakerys-city/dol-de-bretagne/298"
  },
  {
    path: "/bakerys-city/dole/1163"
  },
  {
    path: "/bakerys-city/dombasle-sur-meurthe/247"
  },
  {
    path: "/bakerys-city/domerat/401"
  },
  {
    path: "/bakerys-city/domessargues/2302"
  },
  {
    path: "/bakerys-city/domfront-en-poiraie/1644"
  },
  {
    path: "/bakerys-city/domino/3094"
  },
  {
    path: "/bakerys-city/dommartin-dampierre/2566"
  },
  {
    path: "/bakerys-city/donville-les-bains/3018"
  },
  {
    path: "/bakerys-city/douarnenez/2689"
  },
  {
    path: "/bakerys-city/doudeville/3120"
  },
  {
    path: "/bakerys-city/draguignan/408"
  },
  {
    path: "/bakerys-city/drancy/198"
  },
  {
    path: "/bakerys-city/dremil-lafage/1616"
  },
  {
    path: "/bakerys-city/drulhe/1523"
  },
  {
    path: "/bakerys-city/duisans/1092"
  },
  {
    path: "/bakerys-city/dunkerque/2358"
  },
  {
    path: "/bakerys-city/dyo/1207"
  },
  {
    path: "/bakerys-city/echenon/864"
  },
  {
    path: "/bakerys-city/echirolles/724"
  },
  {
    path: "/bakerys-city/ecole-valentin/2356"
  },
  {
    path: "/bakerys-city/ecully/2029"
  },
  {
    path: "/bakerys-city/enghien-les-bains/532"
  },
  {
    path: "/bakerys-city/epagny-metz-tessy/366"
  },
  {
    path: "/bakerys-city/epaignes/2557"
  },
  {
    path: "/bakerys-city/epargnes/1883"
  },
  {
    path: "/bakerys-city/epernay/1196"
  },
  {
    path: "/bakerys-city/epinal/916"
  },
  {
    path: "/bakerys-city/epinay-sur-seine/246"
  },
  {
    path: "/bakerys-city/epone/1662"
  },
  {
    path: "/bakerys-city/epron/496"
  },
  {
    path: "/bakerys-city/erbray/2445"
  },
  {
    path: "/bakerys-city/erdeven/2920"
  },
  {
    path: "/bakerys-city/ermont/1562"
  },
  {
    path: "/bakerys-city/ernee/3197"
  },
  {
    path: "/bakerys-city/escalquens/2830"
  },
  {
    path: "/bakerys-city/esnandes/1852"
  },
  {
    path: "/bakerys-city/espoey/3048"
  },
  {
    path: "/bakerys-city/essey-les-nancy/2878"
  },
  {
    path: "/bakerys-city/estampes/2967"
  },
  {
    path: "/bakerys-city/estrees-saint-denis/1777"
  },
  {
    path: "/bakerys-city/etampes/318"
  },
  {
    path: "/bakerys-city/etauliers/3084"
  },
  {
    path: "/bakerys-city/etiolles/2518"
  },
  {
    path: "/bakerys-city/evaux-les-bains/3050"
  },
  {
    path: "/bakerys-city/evrecy/1453"
  },
  {
    path: "/bakerys-city/evreux/292"
  },
  {
    path: "/bakerys-city/evry-courcouronnes/240"
  },
  {
    path: "/bakerys-city/excideuil/1204"
  },
  {
    path: "/bakerys-city/eybens/1510"
  },
  {
    path: "/bakerys-city/eymet/2826"
  },
  {
    path: "/bakerys-city/eymoutiers/1645"
  },
  {
    path: "/bakerys-city/eysines/2081"
  },
  {
    path: "/bakerys-city/famars/827"
  },
  {
    path: "/bakerys-city/fameck/472"
  },
  {
    path: "/bakerys-city/fareins/2643"
  },
  {
    path: "/bakerys-city/faremoutiers/2628"
  },
  {
    path: "/bakerys-city/farges-en-septaine/148"
  },
  {
    path: "/bakerys-city/faux-la-montagne/2213"
  },
  {
    path: "/bakerys-city/fayence/314"
  },
  {
    path: "/bakerys-city/fenouillet/376"
  },
  {
    path: "/bakerys-city/ferriere-la-grande/2636"
  },
  {
    path: "/bakerys-city/ferrieres-en-brie/1771"
  },
  {
    path: "/bakerys-city/feuguerolles-bully/2463"
  },
  {
    path: "/bakerys-city/feurs/528"
  },
  {
    path: "/bakerys-city/feyzin/743"
  },
  {
    path: "/bakerys-city/figeac/1806"
  },
  {
    path: "/bakerys-city/fillinges/2440"
  },
  {
    path: "/bakerys-city/fismes/37"
  },
  {
    path: "/bakerys-city/flaviac/732"
  },
  {
    path: "/bakerys-city/flers/861"
  },
  {
    path: "/bakerys-city/fleurance/26"
  },
  {
    path: "/bakerys-city/fleurey-sur-ouche/2382"
  },
  {
    path: "/bakerys-city/fleury-les-aubrais/498"
  },
  {
    path: "/bakerys-city/fleury-merogis/301"
  },
  {
    path: "/bakerys-city/flixecourt/386"
  },
  {
    path: "/bakerys-city/floing/2876"
  },
  {
    path: "/bakerys-city/flumet/2785"
  },
  {
    path: "/bakerys-city/foix/1007"
  },
  {
    path: "/bakerys-city/folelli/2217"
  },
  {
    path: "/bakerys-city/follainville-dennemont/1016"
  },
  {
    path: "/bakerys-city/fondettes/2013"
  },
  {
    path: "/bakerys-city/fons/1388"
  },
  {
    path: "/bakerys-city/fonsorbes/2674"
  },
  {
    path: "/bakerys-city/fontaine/1227"
  },
  {
    path: "/bakerys-city/fontaine-etoupefour/1500"
  },
  {
    path: "/bakerys-city/fontaine-la-mallet/1138"
  },
  {
    path: "/bakerys-city/fontaine-les-dijon/2076"
  },
  {
    path: "/bakerys-city/fontaine-notre-dame/269"
  },
  {
    path: "/bakerys-city/fontainebleau/371"
  },
  {
    path: "/bakerys-city/fontaines-sur-saone/2693"
  },
  {
    path: "/bakerys-city/fontenay-en-parisis/2474"
  },
  {
    path: "/bakerys-city/fontenay-le-comte/2840"
  },
  {
    path: "/bakerys-city/fontenay-sous-bois/1159"
  },
  {
    path: "/bakerys-city/fontvieille/1715"
  },
  {
    path: "/bakerys-city/forest-sur-marque/1987"
  },
  {
    path: "/bakerys-city/fort-mahon-plage/2921"
  },
  {
    path: "/bakerys-city/fougeres/3051"
  },
  {
    path: "/bakerys-city/fougerolles-saint-valbert/3201"
  },
  {
    path: "/bakerys-city/franconville/2615"
  },
  {
    path: "/bakerys-city/franqueville-saint-pierre/3023"
  },
  {
    path: "/bakerys-city/frejus/777"
  },
  {
    path: "/bakerys-city/fresne-la-mere/1180"
  },
  {
    path: "/bakerys-city/frontenay-rohan-rohan/1863"
  },
  {
    path: "/bakerys-city/frontignan/1394"
  },
  {
    path: "/bakerys-city/fursac/566"
  },
  {
    path: "/bakerys-city/gagnac-sur-cere/2282"
  },
  {
    path: "/bakerys-city/gaillan-en-medoc/184"
  },
  {
    path: "/bakerys-city/gaillard/893"
  },
  {
    path: "/bakerys-city/gaillon/2710"
  },
  {
    path: "/bakerys-city/galgon/3079"
  },
  {
    path: "/bakerys-city/gan/3053"
  },
  {
    path: "/bakerys-city/gannat/3016"
  },
  {
    path: "/bakerys-city/gap/200"
  },
  {
    path: "/bakerys-city/garat/1671"
  },
  {
    path: "/bakerys-city/garches/2189"
  },
  {
    path: "/bakerys-city/gargenville/1147"
  },
  {
    path: "/bakerys-city/garidech/2897"
  },
  {
    path: "/bakerys-city/garons/3259"
  },
  {
    path: "/bakerys-city/gas/2378"
  },
  {
    path: "/bakerys-city/gassin/2801"
  },
  {
    path: "/bakerys-city/gauchy/1947"
  },
  {
    path: "/bakerys-city/genas/2398"
  },
  {
    path: "/bakerys-city/genissieux/3203"
  },
  {
    path: "/bakerys-city/gennevilliers/1471"
  },
  {
    path: "/bakerys-city/gerbepal/2655"
  },
  {
    path: "/bakerys-city/gergy/2360"
  },
  {
    path: "/bakerys-city/gerstheim/1686"
  },
  {
    path: "/bakerys-city/gespunsart/1530"
  },
  {
    path: "/bakerys-city/gevrey-chambertin/2043"
  },
  {
    path: "/bakerys-city/gex/221"
  },
  {
    path: "/bakerys-city/gif-sur-yvette/209"
  },
  {
    path: "/bakerys-city/gigean/3131"
  },
  {
    path: "/bakerys-city/giromagny/1864"
  },
  {
    path: "/bakerys-city/gisors/1214"
  },
  {
    path: "/bakerys-city/givet/2812"
  },
  {
    path: "/bakerys-city/givry/840"
  },
  {
    path: "/bakerys-city/gometz-la-ville/2879"
  },
  {
    path: "/bakerys-city/gonfaron/2231"
  },
  {
    path: "/bakerys-city/gonneville-la-mallet/2086"
  },
  {
    path: "/bakerys-city/gorron/3270"
  },
  {
    path: "/bakerys-city/goudourville/3116"
  },
  {
    path: "/bakerys-city/goulven/2662"
  },
  {
    path: "/bakerys-city/gourdon/2285"
  },
  {
    path: "/bakerys-city/goussainville/2650"
  },
  {
    path: "/bakerys-city/gouy-servins/387"
  },
  {
    path: "/bakerys-city/gradignan/2818"
  },
  {
    path: "/bakerys-city/grainville-la-teinturiere/2533"
  },
  {
    path: "/bakerys-city/gramat/358"
  },
  {
    path: "/bakerys-city/grand-couronne/2452"
  },
  {
    path: "/bakerys-city/grane/1756"
  },
  {
    path: "/bakerys-city/granville/338"
  },
  {
    path: "/bakerys-city/grasse/556"
  },
  {
    path: "/bakerys-city/grenade-sur-l-adour/3056"
  },
  {
    path: "/bakerys-city/grenoble/591"
  },
  {
    path: "/bakerys-city/groslay/1737"
  },
  {
    path: "/bakerys-city/guerande/1060"
  },
  {
    path: "/bakerys-city/guignes/1246"
  },
  {
    path: "/bakerys-city/guilherand-granges/799"
  },
  {
    path: "/bakerys-city/guillestre/2574"
  },
  {
    path: "/bakerys-city/guingamp/369"
  },
  {
    path: "/bakerys-city/guise/1704"
  },
  {
    path: "/bakerys-city/haguenau/2798"
  },
  {
    path: "/bakerys-city/halluin/1995"
  },
  {
    path: "/bakerys-city/hautefort/2303"
  },
  {
    path: "/bakerys-city/hauterives/443"
  },
  {
    path: "/bakerys-city/hazebrouck/2365"
  },
  {
    path: "/bakerys-city/hede-bazouges/3167"
  },
  {
    path: "/bakerys-city/hem/1474"
  },
  {
    path: "/bakerys-city/henin-beaumont/912"
  },
  {
    path: "/bakerys-city/heric/2789"
  },
  {
    path: "/bakerys-city/herserange/153"
  },
  {
    path: "/bakerys-city/hirson/299"
  },
  {
    path: "/bakerys-city/hochfelden/1785"
  },
  {
    path: "/bakerys-city/honfleur/1586"
  },
  {
    path: "/bakerys-city/hopital-camfrout/2682"
  },
  {
    path: "/bakerys-city/horgues/994"
  },
  {
    path: "/bakerys-city/houdain/2171"
  },
  {
    path: "/bakerys-city/houilles/3176"
  },
  {
    path: "/bakerys-city/houlgate/1451"
  },
  {
    path: "/bakerys-city/huisseau-sur-mauves/764"
  },
  {
    path: "/bakerys-city/hulluch/1093"
  },
  {
    path: "/bakerys-city/hyeres/869"
  },
  {
    path: "/bakerys-city/ibos/2814"
  },
  {
    path: "/bakerys-city/ifs/1501"
  },
  {
    path: "/bakerys-city/igny/2713"
  },
  {
    path: "/bakerys-city/île-de-brecun/365"
  },
  {
    path: "/bakerys-city/inchy-en-artois/2210"
  },
  {
    path: "/bakerys-city/ingwiller/171"
  },
  {
    path: "/bakerys-city/irodouer/3139"
  },
  {
    path: "/bakerys-city/isle/151"
  },
  {
    path: "/bakerys-city/isneauville/2945"
  },
  {
    path: "/bakerys-city/isola/683"
  },
  {
    path: "/bakerys-city/issenheim/1056"
  },
  {
    path: "/bakerys-city/issy-les-moulineaux/715"
  },
  {
    path: "/bakerys-city/istres/1372"
  },
  {
    path: "/bakerys-city/jacob-bellecombette/831"
  },
  {
    path: "/bakerys-city/jarnac/250"
  },
  {
    path: "/bakerys-city/jarville-la-malgrange/2157"
  },
  {
    path: "/bakerys-city/jassans-riottier/356"
  },
  {
    path: "/bakerys-city/jaujac/1834"
  },
  {
    path: "/bakerys-city/jeumont/2287"
  },
  {
    path: "/bakerys-city/josselin/363"
  },
  {
    path: "/bakerys-city/jousse/542"
  },
  {
    path: "/bakerys-city/joux-la-ville/2096"
  },
  {
    path: "/bakerys-city/jouy/2616"
  },
  {
    path: "/bakerys-city/jouy-en-josas/2461"
  },
  {
    path: "/bakerys-city/jouy-le-chatel/2617"
  },
  {
    path: "/bakerys-city/joyeuse/808"
  },
  {
    path: "/bakerys-city/juziers/1013"
  },
  {
    path: "/bakerys-city/kedange-sur-canner/2702"
  },
  {
    path: "/bakerys-city/kermoroc-h/2122"
  },
  {
    path: "/bakerys-city/kerners/2141"
  },
  {
    path: "/bakerys-city/l-alpe-d-huez/1238"
  },
  {
    path: "/bakerys-city/l-arbresle/659"
  },
  {
    path: "/bakerys-city/l-île-d-olonne/592"
  },
  {
    path: "/bakerys-city/l-île-d-yeu/757"
  },
  {
    path: "/bakerys-city/l-isle-d-espagnac/1155"
  },
  {
    path: "/bakerys-city/l-isle-adam/1157"
  },
  {
    path: "/bakerys-city/l-isle-d-abeau/1759"
  },
  {
    path: "/bakerys-city/l-isle-sur-la-sorgue/1023"
  },
  {
    path: "/bakerys-city/l-union/1568"
  },
  {
    path: "/bakerys-city/la-bastide/1080"
  },
  {
    path: "/bakerys-city/la-bastide-des-jourdans/1081"
  },
  {
    path: "/bakerys-city/la-baule-escoublac/1059"
  },
  {
    path: "/bakerys-city/la-bazouge-du-desert/3173"
  },
  {
    path: "/bakerys-city/la-bernardiere/312"
  },
  {
    path: "/bakerys-city/la-boissiere-des-landes/614"
  },
  {
    path: "/bakerys-city/la-bouexiere/2861"
  },
  {
    path: "/bakerys-city/la-brede/1476"
  },
  {
    path: "/bakerys-city/la-bruffiere/2053"
  },
  {
    path: "/bakerys-city/la-caillere-saint-hilaire/707"
  },
  {
    path: "/bakerys-city/la-cassagne/2019"
  },
  {
    path: "/bakerys-city/la-chaise-dieu/2340"
  },
  {
    path: "/bakerys-city/la-chapelle-blanche-saint-martin/2074"
  },
  {
    path: "/bakerys-city/la-chapelle-bouexic/3268"
  },
  {
    path: "/bakerys-city/la-chapelle-d-aligne/59"
  },
  {
    path: "/bakerys-city/la-chapelle-d-angillon/62"
  },
  {
    path: "/bakerys-city/la-chapelle-d-armentieres/320"
  },
  {
    path: "/bakerys-city/la-chapelle-launay/3019"
  },
  {
    path: "/bakerys-city/la-chapelle-saint-luc/63"
  },
  {
    path: "/bakerys-city/la-chapelle-saint-ursin/1932"
  },
  {
    path: "/bakerys-city/la-chapelle-sur-erdre/60"
  },
  {
    path: "/bakerys-city/la-cheze/2146"
  },
  {
    path: "/bakerys-city/la-ciotat/1096"
  },
  {
    path: "/bakerys-city/la-courneuve/1431"
  },
  {
    path: "/bakerys-city/la-crau/1687"
  },
  {
    path: "/bakerys-city/la-croupte/1588"
  },
  {
    path: "/bakerys-city/la-fare-les-oliviers/1397"
  },
  {
    path: "/bakerys-city/la-ferte-mace/1195"
  },
  {
    path: "/bakerys-city/la-ferte-saint-aubin/900"
  },
  {
    path: "/bakerys-city/la-ferte-sous-jouarre/2064"
  },
  {
    path: "/bakerys-city/la-fleche/2630"
  },
  {
    path: "/bakerys-city/la-fouillouse/1230"
  },
  {
    path: "/bakerys-city/la-gacilly/1784"
  },
  {
    path: "/bakerys-city/la-goutelle/1946"
  },
  {
    path: "/bakerys-city/la-grand-croix/1621"
  },
  {
    path: "/bakerys-city/la-grigonnais/2162"
  },
  {
    path: "/bakerys-city/la-jarne/1350"
  },
  {
    path: "/bakerys-city/la-laupie/176"
  },
  {
    path: "/bakerys-city/la-londe-les-maures/343"
  },
  {
    path: "/bakerys-city/la-machine/1901"
  },
  {
    path: "/bakerys-city/la-madeleine/1919"
  },
  {
    path: "/bakerys-city/la-montagne/3088"
  },
  {
    path: "/bakerys-city/la-neuve-lyre/1443"
  },
  {
    path: "/bakerys-city/la-neuville-au-pont/2352"
  },
  {
    path: "/bakerys-city/la-neuville-chant-d-oisel/926"
  },
  {
    path: "/bakerys-city/la-pellerine/2243"
  },
  {
    path: "/bakerys-city/la-perriere/2347"
  },
  {
    path: "/bakerys-city/la-ricamarie/1046"
  },
  {
    path: "/bakerys-city/la-richardais/217"
  },
  {
    path: "/bakerys-city/la-riche/1540"
  },
  {
    path: "/bakerys-city/la-riviere-saint-sauveur/1587"
  },
  {
    path: "/bakerys-city/la-roche-des-arnauds/2328"
  },
  {
    path: "/bakerys-city/la-roche-jaudy/2152"
  },
  {
    path: "/bakerys-city/la-roche-sur-yon/779"
  },
  {
    path: "/bakerys-city/la-rochelle/155"
  },
  {
    path: "/bakerys-city/la-sambuchetta/2567"
  },
  {
    path: "/bakerys-city/la-seauve-sur-semene/1989"
  },
  {
    path: "/bakerys-city/la-selle-en-luitre/768"
  },
  {
    path: "/bakerys-city/la-seyne-sur-mer/3187"
  },
  {
    path: "/bakerys-city/la-terrasse-sur-dorlay/11"
  },
  {
    path: "/bakerys-city/la-teste-de-buch/992"
  },
  {
    path: "/bakerys-city/la-tour-de-salvagny/984"
  },
  {
    path: "/bakerys-city/la-tour-du-crieu/1018"
  },
  {
    path: "/bakerys-city/la-tremblade/582"
  },
  {
    path: "/bakerys-city/la-trigalle/466"
  },
  {
    path: "/bakerys-city/la-tronche/2763"
  },
  {
    path: "/bakerys-city/la-tuiliere/8"
  },
  {
    path: "/bakerys-city/la-valette-du-var/504"
  },
  {
    path: "/bakerys-city/la-verpilliere/191"
  },
  {
    path: "/bakerys-city/la-veze/1544"
  },
  {
    path: "/bakerys-city/la-villetelle/1980"
  },
  {
    path: "/bakerys-city/la-voge-les-bains/938"
  },
  {
    path: "/bakerys-city/la-voulte-sur-rhone/2731"
  },
  {
    path: "/bakerys-city/labastide-rouairoux/1720"
  },
  {
    path: "/bakerys-city/labastide-saint-georges/2236"
  },
  {
    path: "/bakerys-city/labouheyre/1199"
  },
  {
    path: "/bakerys-city/labruguiere/673"
  },
  {
    path: "/bakerys-city/lacq/2576"
  },
  {
    path: "/bakerys-city/lagarrigue/671"
  },
  {
    path: "/bakerys-city/lagnieu/118"
  },
  {
    path: "/bakerys-city/lagny-sur-marne/629"
  },
  {
    path: "/bakerys-city/lagorce/1206"
  },
  {
    path: "/bakerys-city/lagrauliere/3035"
  },
  {
    path: "/bakerys-city/laguiole/1315"
  },
  {
    path: "/bakerys-city/lamastre/442"
  },
  {
    path: "/bakerys-city/lambesc/1101"
  },
  {
    path: "/bakerys-city/lamonzie-saint-martin/2281"
  },
  {
    path: "/bakerys-city/lamotte-beuvron/2546"
  },
  {
    path: "/bakerys-city/lamotte-du-rhone/2167"
  },
  {
    path: "/bakerys-city/lancey/2683"
  },
  {
    path: "/bakerys-city/lancieux/1758"
  },
  {
    path: "/bakerys-city/lançon-provence/882"
  },
  {
    path: "/bakerys-city/landivisiau/694"
  },
  {
    path: "/bakerys-city/landrevarzec/1844"
  },
  {
    path: "/bakerys-city/lanester/2002"
  },
  {
    path: "/bakerys-city/langan/847"
  },
  {
    path: "/bakerys-city/langeac/818"
  },
  {
    path: "/bakerys-city/langon/1498"
  },
  {
    path: "/bakerys-city/langres/2887"
  },
  {
    path: "/bakerys-city/lannion/281"
  },
  {
    path: "/bakerys-city/lans-en-vercors/2859"
  },
  {
    path: "/bakerys-city/lanvollon/2668"
  },
  {
    path: "/bakerys-city/laon/267"
  },
  {
    path: "/bakerys-city/larçay/3234"
  },
  {
    path: "/bakerys-city/larmor-plage/3265"
  },
  {
    path: "/bakerys-city/larnod/2587"
  },
  {
    path: "/bakerys-city/laroquebrou/1915"
  },
  {
    path: "/bakerys-city/larra/122"
  },
  {
    path: "/bakerys-city/laruns/1908"
  },
  {
    path: "/bakerys-city/lasseube/2834"
  },
  {
    path: "/bakerys-city/latronquiere/1638"
  },
  {
    path: "/bakerys-city/lauriere/3133"
  },
  {
    path: "/bakerys-city/laval/471"
  },
  {
    path: "/bakerys-city/le-bonhomme/309"
  },
  {
    path: "/bakerys-city/le-bosc/2469"
  },
  {
    path: "/bakerys-city/le-boulou/2627"
  },
  {
    path: "/bakerys-city/le-bourg-d-oisans/1237"
  },
  {
    path: "/bakerys-city/le-bourget-du-lac/511"
  },
  {
    path: "/bakerys-city/le-broc/718"
  },
  {
    path: "/bakerys-city/le-bugue/2234"
  },
  {
    path: "/bakerys-city/le-buisson-de-cadouin/1267"
  },
  {
    path: "/bakerys-city/le-cannet-des-maures/2934"
  },
  {
    path: "/bakerys-city/le-chambon-feugerolles/2314"
  },
  {
    path: "/bakerys-city/le-chambon-sur-lignon/2749"
  },
  {
    path: "/bakerys-city/le-chateau-d-oleron/384"
  },
  {
    path: "/bakerys-city/le-cheylard/849"
  },
  {
    path: "/bakerys-city/le-controis-en-sologne/2389"
  },
  {
    path: "/bakerys-city/le-creusot/1935"
  },
  {
    path: "/bakerys-city/le-crotoy/35"
  },
  {
    path: "/bakerys-city/le-fidelaire/991"
  },
  {
    path: "/bakerys-city/le-grand-bourg/967"
  },
  {
    path: "/bakerys-city/le-grau-du-roi/3097"
  },
  {
    path: "/bakerys-city/le-gua/2835"
  },
  {
    path: "/bakerys-city/le-havre/341"
  },
  {
    path: "/bakerys-city/le-hezo/3186"
  },
  {
    path: "/bakerys-city/le-kremlin-bicetre/1499"
  },
  {
    path: "/bakerys-city/le-malzieu-ville/1602"
  },
  {
    path: "/bakerys-city/le-mans/3"
  },
  {
    path: "/bakerys-city/le-mesnil-sur-oger/440"
  },
  {
    path: "/bakerys-city/le-montsaugeonnais/2969"
  },
  {
    path: "/bakerys-city/le-neubourg/2084"
  },
  {
    path: "/bakerys-city/le-noyer/2602"
  },
  {
    path: "/bakerys-city/le-palais/2974"
  },
  {
    path: "/bakerys-city/le-peage-de-roussillon/17"
  },
  {
    path: "/bakerys-city/le-perray-en-yvelines/2010"
  },
  {
    path: "/bakerys-city/le-perreux-sur-marne/929"
  },
  {
    path: "/bakerys-city/le-pertuis/1650"
  },
  {
    path: "/bakerys-city/le-plessis-belleville/1051"
  },
  {
    path: "/bakerys-city/le-plessis-trevise/668"
  },
  {
    path: "/bakerys-city/le-poinçonnet/433"
  },
  {
    path: "/bakerys-city/le-pont-de-beauvoisin/1941"
  },
  {
    path: "/bakerys-city/le-pont-de-claix/2109"
  },
  {
    path: "/bakerys-city/le-portel/1557"
  },
  {
    path: "/bakerys-city/le-pouliguen/1799"
  },
  {
    path: "/bakerys-city/le-pouzin/1857"
  },
  {
    path: "/bakerys-city/le-pre-saint-gervais/1274"
  },
  {
    path: "/bakerys-city/le-puy-en-velay/2223"
  },
  {
    path: "/bakerys-city/le-puy-sainte-reparade/1658"
  },
  {
    path: "/bakerys-city/le-rheu/2751"
  },
  {
    path: "/bakerys-city/le-rouget-pers/1787"
  },
  {
    path: "/bakerys-city/le-russey/1846"
  },
  {
    path: "/bakerys-city/le-segur/1288"
  },
  {
    path: "/bakerys-city/le-seure/1858"
  },
  {
    path: "/bakerys-city/le-tallud/3275"
  },
  {
    path: "/bakerys-city/le-thil/38"
  },
  {
    path: "/bakerys-city/le-thor/1928"
  },
  {
    path: "/bakerys-city/le-touquet-paris-plage/1906"
  },
  {
    path: "/bakerys-city/le-touvet/3153"
  },
  {
    path: "/bakerys-city/le-tronquay/1506"
  },
  {
    path: "/bakerys-city/le-val-saint-germain/2551"
  },
  {
    path: "/bakerys-city/le-vast/2911"
  },
  {
    path: "/bakerys-city/le-versoud/2178"
  },
  {
    path: "/bakerys-city/le-vesinet/1760"
  },
  {
    path: "/bakerys-city/le-veurdre/2481"
  },
  {
    path: "/bakerys-city/le-vigan/1319"
  },
  {
    path: "/bakerys-city/le-vignon-en-quercy/2483"
  },
  {
    path: "/bakerys-city/lege-cap-ferret/2286"
  },
  {
    path: "/bakerys-city/legny/2607"
  },
  {
    path: "/bakerys-city/leguevin/2778"
  },
  {
    path: "/bakerys-city/lens/1545"
  },
  {
    path: "/bakerys-city/lentilly/2087"
  },
  {
    path: "/bakerys-city/leoville/204"
  },
  {
    path: "/bakerys-city/lere/1961"
  },
  {
    path: "/bakerys-city/lerouville/1574"
  },
  {
    path: "/bakerys-city/les-achards/857"
  },
  {
    path: "/bakerys-city/les-ancizes-comps/2108"
  },
  {
    path: "/bakerys-city/les-angles/558"
  },
  {
    path: "/bakerys-city/les-arenes/1380"
  },
  {
    path: "/bakerys-city/les-bordes-sur-arize/2380"
  },
  {
    path: "/bakerys-city/les-cabannes/825"
  },
  {
    path: "/bakerys-city/les-combasses/866"
  },
  {
    path: "/bakerys-city/les-contamines-montjoie/1301"
  },
  {
    path: "/bakerys-city/les-epesses/491"
  },
  {
    path: "/bakerys-city/les-fins/2772"
  },
  {
    path: "/bakerys-city/les-fougerets/947"
  },
  {
    path: "/bakerys-city/les-hauts-d-anjou/1778"
  },
  {
    path: "/bakerys-city/les-herbiers/2978"
  },
  {
    path: "/bakerys-city/les-martres-d-artiere/3061"
  },
  {
    path: "/bakerys-city/les-molieres/2297"
  },
  {
    path: "/bakerys-city/les-mureaux/1216"
  },
  {
    path: "/bakerys-city/les-orres/611"
  },
  {
    path: "/bakerys-city/les-portes-en-re/2565"
  },
  {
    path: "/bakerys-city/les-sables-d-olonne/890"
  },
  {
    path: "/bakerys-city/les-sieges/2095"
  },
  {
    path: "/bakerys-city/les-trois-îlets/3304"
  },
  {
    path: "/bakerys-city/les-villettes/1691"
  },
  {
    path: "/bakerys-city/lescar/2594"
  },
  {
    path: "/bakerys-city/lescheraines/1223"
  },
  {
    path: "/bakerys-city/lescure-d-albigeois/1030"
  },
  {
    path: "/bakerys-city/lesneven/3264"
  },
  {
    path: "/bakerys-city/lesparre-medoc/2606"
  },
  {
    path: "/bakerys-city/leucate/1294"
  },
  {
    path: "/bakerys-city/levallois-perret/86"
  },
  {
    path: "/bakerys-city/levignac/1556"
  },
  {
    path: "/bakerys-city/lezignan-corbieres/562"
  },
  {
    path: "/bakerys-city/libourne/414"
  },
  {
    path: "/bakerys-city/liesse-notre-dame/327"
  },
  {
    path: "/bakerys-city/lieusaint/1657"
  },
  {
    path: "/bakerys-city/lievin/908"
  },
  {
    path: "/bakerys-city/liez/1848"
  },
  {
    path: "/bakerys-city/lignan-sur-orb/447"
  },
  {
    path: "/bakerys-city/ligne/2268"
  },
  {
    path: "/bakerys-city/lignieres/1136"
  },
  {
    path: "/bakerys-city/lille/303"
  },
  {
    path: "/bakerys-city/limeyrat/1043"
  },
  {
    path: "/bakerys-city/limoges/434"
  },
  {
    path: "/bakerys-city/linars/2193"
  },
  {
    path: "/bakerys-city/linselles/1031"
  },
  {
    path: "/bakerys-city/lisle-sur-tarn/2237"
  },
  {
    path: "/bakerys-city/lissieu/565"
  },
  {
    path: "/bakerys-city/listrac-medoc/410"
  },
  {
    path: "/bakerys-city/livry/1543"
  },
  {
    path: "/bakerys-city/loches/325"
  },
  {
    path: "/bakerys-city/loire-authion/2059"
  },
  {
    path: "/bakerys-city/loireauxence/2239"
  },
  {
    path: "/bakerys-city/loison-sous-lens/1527"
  },
  {
    path: "/bakerys-city/lombers/2250"
  },
  {
    path: "/bakerys-city/longevelle/2477"
  },
  {
    path: "/bakerys-city/longevelle-sur-doubs/2370"
  },
  {
    path: "/bakerys-city/longjumeau/1555"
  },
  {
    path: "/bakerys-city/longwy/154"
  },
  {
    path: "/bakerys-city/lons/375"
  },
  {
    path: "/bakerys-city/loos/2283"
  },
  {
    path: "/bakerys-city/lorient/1045"
  },
  {
    path: "/bakerys-city/loudun/242"
  },
  {
    path: "/bakerys-city/louhans/1736"
  },
  {
    path: "/bakerys-city/lourches/3269"
  },
  {
    path: "/bakerys-city/lourdes/2813"
  },
  {
    path: "/bakerys-city/lourdoueix-saint-michel/3227"
  },
  {
    path: "/bakerys-city/louvigny/949"
  },
  {
    path: "/bakerys-city/luce/373"
  },
  {
    path: "/bakerys-city/lucenay/245"
  },
  {
    path: "/bakerys-city/luçon/2916"
  },
  {
    path: "/bakerys-city/lucquy/899"
  },
  {
    path: "/bakerys-city/lugos/3022"
  },
  {
    path: "/bakerys-city/lugrin/2837"
  },
  {
    path: "/bakerys-city/lunel/2133"
  },
  {
    path: "/bakerys-city/luneville/127"
  },
  {
    path: "/bakerys-city/lure/1236"
  },
  {
    path: "/bakerys-city/lureuil/3277"
  },
  {
    path: "/bakerys-city/lutterbach/2065"
  },
  {
    path: "/bakerys-city/lyon/25"
  },
  {
    path: "/bakerys-city/mache/620"
  },
  {
    path: "/bakerys-city/macon/488"
  },
  {
    path: "/bakerys-city/maen-roch/2072"
  },
  {
    path: "/bakerys-city/magnac-sur-touvre/1685"
  },
  {
    path: "/bakerys-city/magny-les-hameaux/1820"
  },
  {
    path: "/bakerys-city/maîche/1845"
  },
  {
    path: "/bakerys-city/mainvilliers/2611"
  },
  {
    path: "/bakerys-city/maisnil-les-ruitz/3128"
  },
  {
    path: "/bakerys-city/maisons-alfort/873"
  },
  {
    path: "/bakerys-city/maisons-laffitte/2953"
  },
  {
    path: "/bakerys-city/maizieres-la-grande-paroisse/1148"
  },
  {
    path: "/bakerys-city/malestroit/2524"
  },
  {
    path: "/bakerys-city/malzeville/2665"
  },
  {
    path: "/bakerys-city/mametz/2908"
  },
  {
    path: "/bakerys-city/mandelieu-la-napoule/1047"
  },
  {
    path: "/bakerys-city/manicamp/2928"
  },
  {
    path: "/bakerys-city/mansac/1190"
  },
  {
    path: "/bakerys-city/mantes-la-ville/2971"
  },
  {
    path: "/bakerys-city/maraussan/3117"
  },
  {
    path: "/bakerys-city/marcheprime/2204"
  },
  {
    path: "/bakerys-city/marchesieux/3138"
  },
  {
    path: "/bakerys-city/marcilly-en-gault/2428"
  },
  {
    path: "/bakerys-city/marcq-en-barœul/911"
  },
  {
    path: "/bakerys-city/marcy/1428"
  },
  {
    path: "/bakerys-city/marcy-l-etoile/330"
  },
  {
    path: "/bakerys-city/marennes/2540"
  },
  {
    path: "/bakerys-city/mareuil-sur-cher/2280"
  },
  {
    path: "/bakerys-city/margut/1755"
  },
  {
    path: "/bakerys-city/marigny-le-lozon/337"
  },
  {
    path: "/bakerys-city/marles-les-mines/278"
  },
  {
    path: "/bakerys-city/marly-le-roi/1253"
  },
  {
    path: "/bakerys-city/marmande/601"
  },
  {
    path: "/bakerys-city/marquillies/1282"
  },
  {
    path: "/bakerys-city/marquise/372"
  },
  {
    path: "/bakerys-city/marsac-sur-l-isle/2927"
  },
  {
    path: "/bakerys-city/marsaneix/2304"
  },
  {
    path: "/bakerys-city/marseillan-plage/918"
  },
  {
    path: "/bakerys-city/marseille/201"
  },
  {
    path: "/bakerys-city/marsillargues/2135"
  },
  {
    path: "/bakerys-city/martigne-ferchaud/762"
  },
  {
    path: "/bakerys-city/martigny-le-comte/2866"
  },
  {
    path: "/bakerys-city/martigues/243"
  },
  {
    path: "/bakerys-city/martrin/1314"
  },
  {
    path: "/bakerys-city/marvejols/1395"
  },
  {
    path: "/bakerys-city/maslives/2544"
  },
  {
    path: "/bakerys-city/masseube/2936"
  },
  {
    path: "/bakerys-city/massiac/1641"
  },
  {
    path: "/bakerys-city/massignac/1604"
  },
  {
    path: "/bakerys-city/massy/1841"
  },
  {
    path: "/bakerys-city/maubec/2910"
  },
  {
    path: "/bakerys-city/maubeuge/716"
  },
  {
    path: "/bakerys-city/mauleon-licharre/1117"
  },
  {
    path: "/bakerys-city/maurepas/2649"
  },
  {
    path: "/bakerys-city/mauriac/1229"
  },
  {
    path: "/bakerys-city/may-sur-orne/1525"
  },
  {
    path: "/bakerys-city/mazeres/286"
  },
  {
    path: "/bakerys-city/mazeres-lezons/1009"
  },
  {
    path: "/bakerys-city/megeve/2624"
  },
  {
    path: "/bakerys-city/meilhan/1677"
  },
  {
    path: "/bakerys-city/melun/903"
  },
  {
    path: "/bakerys-city/menneval/2572"
  },
  {
    path: "/bakerys-city/menton/2970"
  },
  {
    path: "/bakerys-city/merignac/1508"
  },
  {
    path: "/bakerys-city/merignies/1963"
  },
  {
    path: "/bakerys-city/merlines/1541"
  },
  {
    path: "/bakerys-city/merris/307"
  },
  {
    path: "/bakerys-city/mesnil-sur-l-estree/843"
  },
  {
    path: "/bakerys-city/messanges/2532"
  },
  {
    path: "/bakerys-city/messimy/213"
  },
  {
    path: "/bakerys-city/metz/682"
  },
  {
    path: "/bakerys-city/meudon/1761"
  },
  {
    path: "/bakerys-city/meung-sur-loire/765"
  },
  {
    path: "/bakerys-city/meymac/2011"
  },
  {
    path: "/bakerys-city/meyrals/2235"
  },
  {
    path: "/bakerys-city/meysse/2115"
  },
  {
    path: "/bakerys-city/meze/2208"
  },
  {
    path: "/bakerys-city/mezidon-vallee-d-auge/1489"
  },
  {
    path: "/bakerys-city/mielan/2968"
  },
  {
    path: "/bakerys-city/millau/775"
  },
  {
    path: "/bakerys-city/miniac-morvan/2909"
  },
  {
    path: "/bakerys-city/mios/657"
  },
  {
    path: "/bakerys-city/miramas/1827"
  },
  {
    path: "/bakerys-city/mirambeau/1803"
  },
  {
    path: "/bakerys-city/miremont/2795"
  },
  {
    path: "/bakerys-city/miribel/76"
  },
  {
    path: "/bakerys-city/mittelhausbergen/889"
  },
  {
    path: "/bakerys-city/moissac/2446"
  },
  {
    path: "/bakerys-city/moisselles/3031"
  },
  {
    path: "/bakerys-city/molac/1113"
  },
  {
    path: "/bakerys-city/moncrabeau/3057"
  },
  {
    path: "/bakerys-city/mondeville/2195"
  },
  {
    path: "/bakerys-city/monplaisant/2262"
  },
  {
    path: "/bakerys-city/mont-de-marsan/649"
  },
  {
    path: "/bakerys-city/mont-st.-martin/22"
  },
  {
    path: "/bakerys-city/montagnac/2735"
  },
  {
    path: "/bakerys-city/montagny/2214"
  },
  {
    path: "/bakerys-city/montaigu-vendee/228"
  },
  {
    path: "/bakerys-city/montaigut-en-combraille/3188"
  },
  {
    path: "/bakerys-city/montalieu-vercieu/2484"
  },
  {
    path: "/bakerys-city/montargis/1208"
  },
  {
    path: "/bakerys-city/montauban/646"
  },
  {
    path: "/bakerys-city/montauroux/313"
  },
  {
    path: "/bakerys-city/montbard/1942"
  },
  {
    path: "/bakerys-city/montbeton/2851"
  },
  {
    path: "/bakerys-city/montbonnot-saint-martin/18"
  },
  {
    path: "/bakerys-city/montbrison/2425"
  },
  {
    path: "/bakerys-city/montelier/1893"
  },
  {
    path: "/bakerys-city/montelimar/917"
  },
  {
    path: "/bakerys-city/montertelot/1040"
  },
  {
    path: "/bakerys-city/montfaucon/324"
  },
  {
    path: "/bakerys-city/montfaucon-en-velay/2160"
  },
  {
    path: "/bakerys-city/montfermeil/2644"
  },
  {
    path: "/bakerys-city/montferrand-le-chateau/2397"
  },
  {
    path: "/bakerys-city/montfort-sur-meu/500"
  },
  {
    path: "/bakerys-city/montgeroult/923"
  },
  {
    path: "/bakerys-city/montgerval/451"
  },
  {
    path: "/bakerys-city/montguyon/1740"
  },
  {
    path: "/bakerys-city/montierchaume/391"
  },
  {
    path: "/bakerys-city/montigny-la-resle/3125"
  },
  {
    path: "/bakerys-city/montigny-le-bretonneux/381"
  },
  {
    path: "/bakerys-city/montivilliers/1203"
  },
  {
    path: "/bakerys-city/montluel/169"
  },
  {
    path: "/bakerys-city/montmedy/2343"
  },
  {
    path: "/bakerys-city/montmorency/2265"
  },
  {
    path: "/bakerys-city/montoir-de-bretagne/364"
  },
  {
    path: "/bakerys-city/montpellier/58"
  },
  {
    path: "/bakerys-city/montrabe/227"
  },
  {
    path: "/bakerys-city/montreuil/346"
  },
  {
    path: "/bakerys-city/montreuil-aux-lions/2598"
  },
  {
    path: "/bakerys-city/montreuil-juigne/2090"
  },
  {
    path: "/bakerys-city/montreuil-le-gast/3191"
  },
  {
    path: "/bakerys-city/montreuil-sur-ille/2597"
  },
  {
    path: "/bakerys-city/montrond-le-chateau/16"
  },
  {
    path: "/bakerys-city/montrouge/1962"
  },
  {
    path: "/bakerys-city/monts/3242"
  },
  {
    path: "/bakerys-city/montverdun/1620"
  },
  {
    path: "/bakerys-city/morangis/2400"
  },
  {
    path: "/bakerys-city/moreilles/382"
  },
  {
    path: "/bakerys-city/moret-loing-et-orvanne/915"
  },
  {
    path: "/bakerys-city/moreuil/904"
  },
  {
    path: "/bakerys-city/morlaas/970"
  },
  {
    path: "/bakerys-city/mornant/162"
  },
  {
    path: "/bakerys-city/morsang-sur-orge/495"
  },
  {
    path: "/bakerys-city/mortagne-au-perche/368"
  },
  {
    path: "/bakerys-city/morteau/1847"
  },
  {
    path: "/bakerys-city/morteaux-coulibœuf/1531"
  },
  {
    path: "/bakerys-city/mouchamps/2238"
  },
  {
    path: "/bakerys-city/moulins/580"
  },
  {
    path: "/bakerys-city/moumour/1524"
  },
  {
    path: "/bakerys-city/moussey/1186"
  },
  {
    path: "/bakerys-city/mouvaux/2618"
  },
  {
    path: "/bakerys-city/muides-sur-loire/2547"
  },
  {
    path: "/bakerys-city/mulhouse/174"
  },
  {
    path: "/bakerys-city/murat/473"
  },
  {
    path: "/bakerys-city/muret/1286"
  },
  {
    path: "/bakerys-city/muron/1122"
  },
  {
    path: "/bakerys-city/mussidan/1869"
  },
  {
    path: "/bakerys-city/myans/632"
  },
  {
    path: "/bakerys-city/nançay/1949"
  },
  {
    path: "/bakerys-city/nancy/879"
  },
  {
    path: "/bakerys-city/nans-les-pins/3102"
  },
  {
    path: "/bakerys-city/nanteau-sur-lunain/1355"
  },
  {
    path: "/bakerys-city/nanterre/1353"
  },
  {
    path: "/bakerys-city/nantes/82"
  },
  {
    path: "/bakerys-city/nanteuil-les-meaux/1352"
  },
  {
    path: "/bakerys-city/nassandres-sur-risle/2012"
  },
  {
    path: "/bakerys-city/neant-sur-yvel/2750"
  },
  {
    path: "/bakerys-city/neaufles-saint-martin/2450"
  },
  {
    path: "/bakerys-city/negrepelisse/1990"
  },
  {
    path: "/bakerys-city/nelling/2534"
  },
  {
    path: "/bakerys-city/nemours/321"
  },
  {
    path: "/bakerys-city/nerac/2804"
  },
  {
    path: "/bakerys-city/nere/394"
  },
  {
    path: "/bakerys-city/nersac/525"
  },
  {
    path: "/bakerys-city/neuilly-plaisance/1327"
  },
  {
    path: "/bakerys-city/neuilly-saint-front/295"
  },
  {
    path: "/bakerys-city/neuilly-sur-marne/173"
  },
  {
    path: "/bakerys-city/neuilly-sur-seine/2554"
  },
  {
    path: "/bakerys-city/neussargues-en-pinatelle/2811"
  },
  {
    path: "/bakerys-city/neuves-maisons/2639"
  },
  {
    path: "/bakerys-city/neuville-aux-bois/1220"
  },
  {
    path: "/bakerys-city/neuville-en-ferrain/130"
  },
  {
    path: "/bakerys-city/neuville-sur-saone/771"
  },
  {
    path: "/bakerys-city/neuvy-en-sullias/333"
  },
  {
    path: "/bakerys-city/nevers/2656"
  },
  {
    path: "/bakerys-city/nezignan-l-eveque/478"
  },
  {
    path: "/bakerys-city/nice/273"
  },
  {
    path: "/bakerys-city/nîmes/27"
  },
  {
    path: "/bakerys-city/niort/1053"
  },
  {
    path: "/bakerys-city/nivillac/698"
  },
  {
    path: "/bakerys-city/nogent-le-roi/2641"
  },
  {
    path: "/bakerys-city/noiretable/7"
  },
  {
    path: "/bakerys-city/noisy-le-sec/1505"
  },
  {
    path: "/bakerys-city/nontron/2996"
  },
  {
    path: "/bakerys-city/notre-dame-de-bondeville/930"
  },
  {
    path: "/bakerys-city/notre-dame-de-monts/1578"
  },
  {
    path: "/bakerys-city/nouaille-maupertuis/2102"
  },
  {
    path: "/bakerys-city/nouvoitou/2691"
  },
  {
    path: "/bakerys-city/noves/1015"
  },
  {
    path: "/bakerys-city/novillars/2411"
  },
  {
    path: "/bakerys-city/noyal-chatillon-sur-seiche/284"
  },
  {
    path: "/bakerys-city/noyelles-godault/1094"
  },
  {
    path: "/bakerys-city/noyon/508"
  },
  {
    path: "/bakerys-city/nuits-saint-georges/205"
  },
  {
    path: "/bakerys-city/obernai/896"
  },
  {
    path: "/bakerys-city/objat/2783"
  },
  {
    path: "/bakerys-city/oissel/105"
  },
  {
    path: "/bakerys-city/oisy/234"
  },
  {
    path: "/bakerys-city/oloron-sainte-marie/1284"
  },
  {
    path: "/bakerys-city/onet-le-chateau/1320"
  },
  {
    path: "/bakerys-city/onnaing/390"
  },
  {
    path: "/bakerys-city/orange/1218"
  },
  {
    path: "/bakerys-city/orcines/492"
  },
  {
    path: "/bakerys-city/oree-d-anjou/126"
  },
  {
    path: "/bakerys-city/orgeres-en-beauce/1914"
  },
  {
    path: "/bakerys-city/orgeval/332"
  },
  {
    path: "/bakerys-city/orgon/1368"
  },
  {
    path: "/bakerys-city/origny-le-sec/378"
  },
  {
    path: "/bakerys-city/orleans/166"
  },
  {
    path: "/bakerys-city/ors/383"
  },
  {
    path: "/bakerys-city/orsan/2745"
  },
  {
    path: "/bakerys-city/orvault/2509"
  },
  {
    path: "/bakerys-city/oulchy-le-chateau/347"
  },
  {
    path: "/bakerys-city/oullins-pierre-benite/2658"
  },
  {
    path: "/bakerys-city/outreau/2511"
  },
  {
    path: "/bakerys-city/oyonnax/2218"
  },
  {
    path: "/bakerys-city/pact/2956"
  },
  {
    path: "/bakerys-city/pagney/3161"
  },
  {
    path: "/bakerys-city/palalda/1764"
  },
  {
    path: "/bakerys-city/pamiers/897"
  },
  {
    path: "/bakerys-city/paray-le-monial/1955"
  },
  {
    path: "/bakerys-city/parentis-en-born/1248"
  },
  {
    path: "/bakerys-city/pargny-la-dhuys/3209"
  },
  {
    path: "/bakerys-city/paris/117"
  },
  {
    path: "/bakerys-city/parisot/1679"
  },
  {
    path: "/bakerys-city/parnay/1911"
  },
  {
    path: "/bakerys-city/parthenay/3156"
  },
  {
    path: "/bakerys-city/pau/40"
  },
  {
    path: "/bakerys-city/paulhaguet/1881"
  },
  {
    path: "/bakerys-city/penmarc-h/316"
  },
  {
    path: "/bakerys-city/perigueux/1333"
  },
  {
    path: "/bakerys-city/pernay/988"
  },
  {
    path: "/bakerys-city/pernes-les-boulogne/1257"
  },
  {
    path: "/bakerys-city/peronnas/507"
  },
  {
    path: "/bakerys-city/peronne/1279"
  },
  {
    path: "/bakerys-city/perpignan/1022"
  },
  {
    path: "/bakerys-city/perros-guirec/280"
  },
  {
    path: "/bakerys-city/pessac/260"
  },
  {
    path: "/bakerys-city/petit-bersac/1865"
  },
  {
    path: "/bakerys-city/petit-ebersviller/1108"
  },
  {
    path: "/bakerys-city/peyrat-le-chateau/1874"
  },
  {
    path: "/bakerys-city/peyre-en-aubrac/2136"
  },
  {
    path: "/bakerys-city/peyrins/3095"
  },
  {
    path: "/bakerys-city/pezenas/323"
  },
  {
    path: "/bakerys-city/pierre-de-bresse/2369"
  },
  {
    path: "/bakerys-city/pierrefitte-sur-seine/1836"
  },
  {
    path: "/bakerys-city/pierrefort/2027"
  },
  {
    path: "/bakerys-city/pignan/3105"
  },
  {
    path: "/bakerys-city/pipriac/3180"
  },
  {
    path: "/bakerys-city/plabennec/2676"
  },
  {
    path: "/bakerys-city/plaisance-du-touch/3263"
  },
  {
    path: "/bakerys-city/plaissan/3114"
  },
  {
    path: "/bakerys-city/plancy-l-abbaye/1651"
  },
  {
    path: "/bakerys-city/pledeliac/1944"
  },
  {
    path: "/bakerys-city/plelan-le-petit/948"
  },
  {
    path: "/bakerys-city/plerin/124"
  },
  {
    path: "/bakerys-city/pleudaniel/3179"
  },
  {
    path: "/bakerys-city/pleudihen-sur-rance/1879"
  },
  {
    path: "/bakerys-city/plœmeur/1329"
  },
  {
    path: "/bakerys-city/ploermel/2839"
  },
  {
    path: "/bakerys-city/plomelin/236"
  },
  {
    path: "/bakerys-city/plomodiern/235"
  },
  {
    path: "/bakerys-city/ploubazlanec/1972"
  },
  {
    path: "/bakerys-city/ploubezre/1971"
  },
  {
    path: "/bakerys-city/ploudaniel/54"
  },
  {
    path: "/bakerys-city/ploufragan/103"
  },
  {
    path: "/bakerys-city/plougoumelen/1576"
  },
  {
    path: "/bakerys-city/plouguenast-langast/1088"
  },
  {
    path: "/bakerys-city/plouguin/1970"
  },
  {
    path: "/bakerys-city/plozevet/2634"
  },
  {
    path: "/bakerys-city/poce-les-bois/2333"
  },
  {
    path: "/bakerys-city/poilly-sur-tholon/2646"
  },
  {
    path: "/bakerys-city/poissy/812"
  },
  {
    path: "/bakerys-city/poitiers/377"
  },
  {
    path: "/bakerys-city/pollestres/2211"
  },
  {
    path: "/bakerys-city/pons/2041"
  },
  {
    path: "/bakerys-city/pont-de-labeaume/841"
  },
  {
    path: "/bakerys-city/pont-et-massene/2106"
  },
  {
    path: "/bakerys-city/pont-l-abbe/1808"
  },
  {
    path: "/bakerys-city/pont-saint-esprit/2705"
  },
  {
    path: "/bakerys-city/pont-salomon/1964"
  },
  {
    path: "/bakerys-city/pont-sur-yonne/1585"
  },
  {
    path: "/bakerys-city/pontarlier/624"
  },
  {
    path: "/bakerys-city/pontoise/1187"
  },
  {
    path: "/bakerys-city/pontrieux/2121"
  },
  {
    path: "/bakerys-city/pornic/607"
  },
  {
    path: "/bakerys-city/pornichet/1061"
  },
  {
    path: "/bakerys-city/port-navalo/568"
  },
  {
    path: "/bakerys-city/port-de-bouc/1400"
  },
  {
    path: "/bakerys-city/port-de-piles/190"
  },
  {
    path: "/bakerys-city/port-jerome-sur-seine/1664"
  },
  {
    path: "/bakerys-city/port-la-foret/2168"
  },
  {
    path: "/bakerys-city/port-la-nouvelle/1268"
  },
  {
    path: "/bakerys-city/port-saint-louis-du-rhone/2958"
  },
  {
    path: "/bakerys-city/portes-les-valence/2042"
  },
  {
    path: "/bakerys-city/portets/1469"
  },
  {
    path: "/bakerys-city/poussan/3103"
  },
  {
    path: "/bakerys-city/pouzauges/239"
  },
  {
    path: "/bakerys-city/pouzioux-la-jarrie/830"
  },
  {
    path: "/bakerys-city/pradines/2256"
  },
  {
    path: "/bakerys-city/pranles/3141"
  },
  {
    path: "/bakerys-city/presles-en-brie/2007"
  },
  {
    path: "/bakerys-city/prignac-et-marcamps/1889"
  },
  {
    path: "/bakerys-city/provin/342"
  },
  {
    path: "/bakerys-city/provins/667"
  },
  {
    path: "/bakerys-city/puget-theniers/2955"
  },
  {
    path: "/bakerys-city/puget-ville/1311"
  },
  {
    path: "/bakerys-city/puilboreau/877"
  },
  {
    path: "/bakerys-city/puisserguier/1271"
  },
  {
    path: "/bakerys-city/puligny-montrachet/10"
  },
  {
    path: "/bakerys-city/putanges-le-lac/248"
  },
  {
    path: "/bakerys-city/puteaux/1109"
  },
  {
    path: "/bakerys-city/puyoo/2857"
  },
  {
    path: "/bakerys-city/queven/2070"
  },
  {
    path: "/bakerys-city/quiberon/2105"
  },
  {
    path: "/bakerys-city/quievy/2025"
  },
  {
    path: "/bakerys-city/quimper/282"
  },
  {
    path: "/bakerys-city/quimperle/2688"
  },
  {
    path: "/bakerys-city/quincy-sous-senart/1938"
  },
  {
    path: "/bakerys-city/quinsac/1310"
  },
  {
    path: "/bakerys-city/quinssaines/1309"
  },
  {
    path: "/bakerys-city/quint-fonsegrives/2886"
  },
  {
    path: "/bakerys-city/quistinic/1482"
  },
  {
    path: "/bakerys-city/rabastens/559"
  },
  {
    path: "/bakerys-city/radinghem-en-weppes/202"
  },
  {
    path: "/bakerys-city/rambouillet/2722"
  },
  {
    path: "/bakerys-city/rauzan/1004"
  },
  {
    path: "/bakerys-city/reallon/1338"
  },
  {
    path: "/bakerys-city/reau/1885"
  },
  {
    path: "/bakerys-city/reims/331"
  },
  {
    path: "/bakerys-city/reiningue/2419"
  },
  {
    path: "/bakerys-city/remalard-en-perche/1554"
  },
  {
    path: "/bakerys-city/renage/2259"
  },
  {
    path: "/bakerys-city/renaison/1065"
  },
  {
    path: "/bakerys-city/rennes/163"
  },
  {
    path: "/bakerys-city/replonges/2244"
  },
  {
    path: "/bakerys-city/rethel/1111"
  },
  {
    path: "/bakerys-city/retiers/297"
  },
  {
    path: "/bakerys-city/revel/2912"
  },
  {
    path: "/bakerys-city/reyssouze/208"
  },
  {
    path: "/bakerys-city/reze/179"
  },
  {
    path: "/bakerys-city/riaille/2342"
  },
  {
    path: "/bakerys-city/rians/2846"
  },
  {
    path: "/bakerys-city/rieux/2737"
  },
  {
    path: "/bakerys-city/rillieux-la-pape/2032"
  },
  {
    path: "/bakerys-city/riom/3258"
  },
  {
    path: "/bakerys-city/riom-es-montagnes/1753"
  },
  {
    path: "/bakerys-city/ris-orangis/913"
  },
  {
    path: "/bakerys-city/rive-de-gier/212"
  },
  {
    path: "/bakerys-city/rivedoux-plage/2197"
  },
  {
    path: "/bakerys-city/rives-d-andaine/249"
  },
  {
    path: "/bakerys-city/riviere-saas-et-gourby/3238"
  },
  {
    path: "/bakerys-city/roanne/2853"
  },
  {
    path: "/bakerys-city/robion/1950"
  },
  {
    path: "/bakerys-city/roche-la-moliere/3286"
  },
  {
    path: "/bakerys-city/rochechouart/83"
  },
  {
    path: "/bakerys-city/rochefort/533"
  },
  {
    path: "/bakerys-city/rochejean/2306"
  },
  {
    path: "/bakerys-city/rochy-conde/3210"
  },
  {
    path: "/bakerys-city/rodez/2863"
  },
  {
    path: "/bakerys-city/rognac/1734"
  },
  {
    path: "/bakerys-city/roissy-en-brie/859"
  },
  {
    path: "/bakerys-city/romagnat/431"
  },
  {
    path: "/bakerys-city/romainville/2201"
  },
  {
    path: "/bakerys-city/romaneche-thorins/1066"
  },
  {
    path: "/bakerys-city/romans-sur-isere/229"
  },
  {
    path: "/bakerys-city/romorantin-lanthenay/1332"
  },
  {
    path: "/bakerys-city/ronchin/669"
  },
  {
    path: "/bakerys-city/roquebilliere/2997"
  },
  {
    path: "/bakerys-city/roquebrune-cap-martin/719"
  },
  {
    path: "/bakerys-city/roquefort/2368"
  },
  {
    path: "/bakerys-city/roquefort-les-pins/2946"
  },
  {
    path: "/bakerys-city/roscoff/2669"
  },
  {
    path: "/bakerys-city/rosieres-en-santerre/2664"
  },
  {
    path: "/bakerys-city/rosny-sous-bois/345"
  },
  {
    path: "/bakerys-city/roubaix/308"
  },
  {
    path: "/bakerys-city/rouen/1596"
  },
  {
    path: "/bakerys-city/rougemont-le-chateau/2050"
  },
  {
    path: "/bakerys-city/rousson/2741"
  },
  {
    path: "/bakerys-city/royan/1815"
  },
  {
    path: "/bakerys-city/rozier-en-donzy/3032"
  },
  {
    path: "/bakerys-city/rue/39"
  },
  {
    path: "/bakerys-city/rueil-malmaison/1140"
  },
  {
    path: "/bakerys-city/ruy-montceau/2150"
  },
  {
    path: "/bakerys-city/saacy-sur-marne/1967"
  },
  {
    path: "/bakerys-city/sabres/989"
  },
  {
    path: "/bakerys-city/sacquenay/2220"
  },
  {
    path: "/bakerys-city/sainneville/2350"
  },
  {
    path: "/bakerys-city/saint-affrique/776"
  },
  {
    path: "/bakerys-city/saint-agathon/288"
  },
  {
    path: "/bakerys-city/saint-aignan/925"
  },
  {
    path: "/bakerys-city/saint-amant-roche-savine/1212"
  },
  {
    path: "/bakerys-city/saint-amant-tallende/1528"
  },
  {
    path: "/bakerys-city/saint-amour/2701"
  },
  {
    path: "/bakerys-city/saint-andiol/1398"
  },
  {
    path: "/bakerys-city/saint-andre-de-cubzac/760"
  },
  {
    path: "/bakerys-city/saint-andre-les-vergers/374"
  },
  {
    path: "/bakerys-city/saint-andre-lez-lille/361"
  },
  {
    path: "/bakerys-city/saint-arnoult/1532"
  },
  {
    path: "/bakerys-city/saint-aubin-celloville/2112"
  },
  {
    path: "/bakerys-city/saint-aubin-d-aubigne/453"
  },
  {
    path: "/bakerys-city/saint-aubin-de-medoc/1363"
  },
  {
    path: "/bakerys-city/saint-aubin-du-plain/2504"
  },
  {
    path: "/bakerys-city/saint-augustin/2907"
  },
  {
    path: "/bakerys-city/saint-avold/689"
  },
  {
    path: "/bakerys-city/saint-baldoph/631"
  },
  {
    path: "/bakerys-city/saint-barthelemy/2318"
  },
  {
    path: "/bakerys-city/saint-barthelemy-d-anjou/2089"
  },
  {
    path: "/bakerys-city/saint-barthelemy-le-plain/1142"
  },
  {
    path: "/bakerys-city/saint-benoît/69"
  },
  {
    path: "/bakerys-city/saint-berthevin/458"
  },
  {
    path: "/bakerys-city/saint-blaise/720"
  },
  {
    path: "/bakerys-city/saint-bonnet-de-mure/3083"
  },
  {
    path: "/bakerys-city/saint-bonnet-le-chateau/1875"
  },
  {
    path: "/bakerys-city/saint-bonnet-les-oules/2418"
  },
  {
    path: "/bakerys-city/saint-bonnet-sur-gironde/467"
  },
  {
    path: "/bakerys-city/saint-branchs/1539"
  },
  {
    path: "/bakerys-city/saint-briac-sur-mer/1680"
  },
  {
    path: "/bakerys-city/saint-brice-courcelles/1721"
  },
  {
    path: "/bakerys-city/saint-brice-sous-foret/1722"
  },
  {
    path: "/bakerys-city/saint-brieuc/3044"
  },
  {
    path: "/bakerys-city/saint-chamond/13"
  },
  {
    path: "/bakerys-city/saint-chely-d-apcher/28"
  },
  {
    path: "/bakerys-city/saint-christo-en-jarez/494"
  },
  {
    path: "/bakerys-city/saint-christol-lez-ales/2774"
  },
  {
    path: "/bakerys-city/saint-christoly-de-blaye/594"
  },
  {
    path: "/bakerys-city/saint-clair-sur-l-elle/798"
  },
  {
    path: "/bakerys-city/saint-clar-de-riviere/2952"
  },
  {
    path: "/bakerys-city/saint-claude/305"
  },
  {
    path: "/bakerys-city/saint-come-d-olt/1331"
  },
  {
    path: "/bakerys-city/saint-congard/1631"
  },
  {
    path: "/bakerys-city/saint-corneille/1909"
  },
  {
    path: "/bakerys-city/saint-cyprien/1744"
  },
  {
    path: "/bakerys-city/saint-cyr-en-pail/2198"
  },
  {
    path: "/bakerys-city/saint-denis/12"
  },
  {
    path: "/bakerys-city/saint-denis-de-mere/3207"
  },
  {
    path: "/bakerys-city/saint-denis-de-pile/3091"
  },
  {
    path: "/bakerys-city/saint-denis-les-bourg/1801"
  },
  {
    path: "/bakerys-city/saint-didier/131"
  },
  {
    path: "/bakerys-city/saint-didier-au-mont-d-or/87"
  },
  {
    path: "/bakerys-city/saint-die-des-vosges/509"
  },
  {
    path: "/bakerys-city/saint-doulchard/1075"
  },
  {
    path: "/bakerys-city/saint-emilion/2983"
  },
  {
    path: "/bakerys-city/saint-erblon/3150"
  },
  {
    path: "/bakerys-city/saint-etienne/527"
  },
  {
    path: "/bakerys-city/saint-etienne-du-gres/420"
  },
  {
    path: "/bakerys-city/saint-fargeau/187"
  },
  {
    path: "/bakerys-city/saint-felix-lauragais/2823"
  },
  {
    path: "/bakerys-city/saint-florent-sur-cher/437"
  },
  {
    path: "/bakerys-city/saint-fons/351"
  },
  {
    path: "/bakerys-city/saint-fort-sur-gironde/2429"
  },
  {
    path: "/bakerys-city/saint-françois/3303"
  },
  {
    path: "/bakerys-city/saint-françois-longchamp/2045"
  },
  {
    path: "/bakerys-city/saint-galmier/590"
  },
  {
    path: "/bakerys-city/saint-genest-malifaux/2393"
  },
  {
    path: "/bakerys-city/saint-genies-bellevue/2272"
  },
  {
    path: "/bakerys-city/saint-genies-des-mourgues/2273"
  },
  {
    path: "/bakerys-city/saint-georges-d-esperanche/95"
  },
  {
    path: "/bakerys-city/saint-georges-de-didonne/1871"
  },
  {
    path: "/bakerys-city/saint-georges-de-luzençon/1345"
  },
  {
    path: "/bakerys-city/saint-georges-de-montclard/545"
  },
  {
    path: "/bakerys-city/saint-georges-du-vievre/2589"
  },
  {
    path: "/bakerys-city/saint-georges-en-couzan/96"
  },
  {
    path: "/bakerys-city/saint-georges-les-bains/2110"
  },
  {
    path: "/bakerys-city/saint-georges-motel/2590"
  },
  {
    path: "/bakerys-city/saint-georges-sur-eure/1640"
  },
  {
    path: "/bakerys-city/saint-germain-des-fosses/3062"
  },
  {
    path: "/bakerys-city/saint-germain-des-pres/490"
  },
  {
    path: "/bakerys-city/saint-germain-du-puch/193"
  },
  {
    path: "/bakerys-city/saint-germain-en-cogles/3146"
  },
  {
    path: "/bakerys-city/saint-germain-en-laye/1128"
  },
  {
    path: "/bakerys-city/saint-germain-l-herm/1951"
  },
  {
    path: "/bakerys-city/saint-germain-laprade/195"
  },
  {
    path: "/bakerys-city/saint-germain-lembron/1952"
  },
  {
    path: "/bakerys-city/saint-germain-les-vergnes/1981"
  },
  {
    path: "/bakerys-city/saint-germain-lespinasse/196"
  },
  {
    path: "/bakerys-city/saint-germain-sur-ecole/957"
  },
  {
    path: "/bakerys-city/saint-germer-de-fly/2522"
  },
  {
    path: "/bakerys-city/saint-gervais-en-belin/1107"
  },
  {
    path: "/bakerys-city/saint-gilles/336"
  },
  {
    path: "/bakerys-city/saint-gilles-croix-de-vie/2196"
  },
  {
    path: "/bakerys-city/saint-girons/24"
  },
  {
    path: "/bakerys-city/saint-gregoire/2154"
  },
  {
    path: "/bakerys-city/saint-herblain/1063"
  },
  {
    path: "/bakerys-city/saint-herent/3089"
  },
  {
    path: "/bakerys-city/saint-hilaire/2895"
  },
  {
    path: "/bakerys-city/saint-hilaire-d-ozilhan/483"
  },
  {
    path: "/bakerys-city/saint-hilaire-de-loulay/2055"
  },
  {
    path: "/bakerys-city/saint-hilaire-de-villefranche/1988"
  },
  {
    path: "/bakerys-city/saint-hippolyte/1115"
  },
  {
    path: "/bakerys-city/saint-jacques/773"
  },
  {
    path: "/bakerys-city/saint-jacques-de-la-lande/538"
  },
  {
    path: "/bakerys-city/saint-jacut-de-la-mer/2131"
  },
  {
    path: "/bakerys-city/saint-jean/2844"
  },
  {
    path: "/bakerys-city/saint-jean-bonnefonds/2994"
  },
  {
    path: "/bakerys-city/saint-jean-de-bournay/730"
  },
  {
    path: "/bakerys-city/saint-jean-de-braye/1470"
  },
  {
    path: "/bakerys-city/saint-jean-de-luz/731"
  },
  {
    path: "/bakerys-city/saint-jean-de-monts/2322"
  },
  {
    path: "/bakerys-city/saint-jean-des-ollieres/637"
  },
  {
    path: "/bakerys-city/saint-jean-pied-de-port/1924"
  },
  {
    path: "/bakerys-city/saint-jorioz/578"
  },
  {
    path: "/bakerys-city/saint-joseph-de-riviere/832"
  },
  {
    path: "/bakerys-city/saint-jouin-bruneval/888"
  },
  {
    path: "/bakerys-city/saint-julien-du-pinet/1690"
  },
  {
    path: "/bakerys-city/saint-julien-en-born/1835"
  },
  {
    path: "/bakerys-city/saint-julien-en-genevois/2058"
  },
  {
    path: "/bakerys-city/saint-julien-les-rosiers/1359"
  },
  {
    path: "/bakerys-city/saint-junien/114"
  },
  {
    path: "/bakerys-city/saint-just/2132"
  },
  {
    path: "/bakerys-city/saint-just-en-chevalet/2791"
  },
  {
    path: "/bakerys-city/saint-just-luzac/1867"
  },
  {
    path: "/bakerys-city/saint-just-saint-rambert/502"
  },
  {
    path: "/bakerys-city/saint-justin/946"
  },
  {
    path: "/bakerys-city/saint-laurent-d-aigouze/2894"
  },
  {
    path: "/bakerys-city/saint-laurent-du-var/2300"
  },
  {
    path: "/bakerys-city/saint-laurent-medoc/125"
  },
  {
    path: "/bakerys-city/saint-leger-de-montbrillais/3237"
  },
  {
    path: "/bakerys-city/saint-leger-sous-cholet/1089"
  },
  {
    path: "/bakerys-city/saint-leger-sur-roanne/1064"
  },
  {
    path: "/bakerys-city/saint-leon-sur-l-isle/2299"
  },
  {
    path: "/bakerys-city/saint-leu-la-foret/1563"
  },
  {
    path: "/bakerys-city/saint-loup-geanges/421"
  },
  {
    path: "/bakerys-city/saint-lunaire/1213"
  },
  {
    path: "/bakerys-city/saint-lyphard/3182"
  },
  {
    path: "/bakerys-city/saint-maclou-la-briere/2465"
  },
  {
    path: "/bakerys-city/saint-malo/218"
  },
  {
    path: "/bakerys-city/saint-mamert-du-gard/791"
  },
  {
    path: "/bakerys-city/saint-mande/1899"
  },
  {
    path: "/bakerys-city/saint-marceau/921"
  },
  {
    path: "/bakerys-city/saint-marcel/2515"
  },
  {
    path: "/bakerys-city/saint-marcel-les-valence/175"
  },
  {
    path: "/bakerys-city/saint-mars-de-coutais/535"
  },
  {
    path: "/bakerys-city/saint-martial-d-artenset/2294"
  },
  {
    path: "/bakerys-city/saint-martin-d-estreaux/2124"
  },
  {
    path: "/bakerys-city/saint-martin-de-belleville/2586"
  },
  {
    path: "/bakerys-city/saint-martin-de-crau/1409"
  },
  {
    path: "/bakerys-city/saint-martin-de-fontenay/150"
  },
  {
    path: "/bakerys-city/saint-martin-de-londres/650"
  },
  {
    path: "/bakerys-city/saint-martin-de-riberac/2232"
  },
  {
    path: "/bakerys-city/saint-martin-du-fouilloux/2539"
  },
  {
    path: "/bakerys-city/saint-martin-en-bresse/1781"
  },
  {
    path: "/bakerys-city/saint-martin-lars-en-sainte-hermine/1285"
  },
  {
    path: "/bakerys-city/saint-martin-le-beau/2075"
  },
  {
    path: "/bakerys-city/saint-martin-le-vinoux/2948"
  },
  {
    path: "/bakerys-city/saint-martin-sur-ecaillon/2950"
  },
  {
    path: "/bakerys-city/saint-martin-sur-lavezon/838"
  },
  {
    path: "/bakerys-city/saint-martin-sur-le-pre/152"
  },
  {
    path: "/bakerys-city/saint-martin-valmeroux/1601"
  },
  {
    path: "/bakerys-city/saint-martin-vesubie/710"
  },
  {
    path: "/bakerys-city/saint-maurice-de-lignon/156"
  },
  {
    path: "/bakerys-city/saint-maurice-les-chateauneuf/2403"
  },
  {
    path: "/bakerys-city/saint-medard-d-eyrans/182"
  },
  {
    path: "/bakerys-city/saint-medard-de-guizieres/1897"
  },
  {
    path: "/bakerys-city/saint-medard-en-jalles/2266"
  },
  {
    path: "/bakerys-city/saint-meloir-des-ondes/3178"
  },
  {
    path: "/bakerys-city/saint-mesmin/2274"
  },
  {
    path: "/bakerys-city/saint-michel-chef-chef/291"
  },
  {
    path: "/bakerys-city/saint-michel-de-castelnau/910"
  },
  {
    path: "/bakerys-city/saint-michel-de-fronsac/3078"
  },
  {
    path: "/bakerys-city/saint-michel-en-l-herm/862"
  },
  {
    path: "/bakerys-city/saint-michel-sur-orge/2867"
  },
  {
    path: "/bakerys-city/saint-mihiel/907"
  },
  {
    path: "/bakerys-city/saint-nabord/1769"
  },
  {
    path: "/bakerys-city/saint-nazaire/1119"
  },
  {
    path: "/bakerys-city/saint-nazaire-sur-charente/1572"
  },
  {
    path: "/bakerys-city/saint-omer/1219"
  },
  {
    path: "/bakerys-city/saint-onen-la-chapelle/3163"
  },
  {
    path: "/bakerys-city/saint-orens-de-gameville/1569"
  },
  {
    path: "/bakerys-city/saint-ouen-de-thouberville/1598"
  },
  {
    path: "/bakerys-city/saint-ouen-du-tilleul/1599"
  },
  {
    path: "/bakerys-city/saint-ouen-sur-seine/2467"
  },
  {
    path: "/bakerys-city/saint-palais-sur-mer/396"
  },
  {
    path: "/bakerys-city/saint-pardoux-la-croisille/1537"
  },
  {
    path: "/bakerys-city/saint-paul-de-jarrat/1979"
  },
  {
    path: "/bakerys-city/saint-paul-de-varax/395"
  },
  {
    path: "/bakerys-city/saint-paul-des-landes/380"
  },
  {
    path: "/bakerys-city/saint-paul-en-pareds/178"
  },
  {
    path: "/bakerys-city/saint-pere-en-retz/290"
  },
  {
    path: "/bakerys-city/saint-philbert-de-grand-lieu/1280"
  },
  {
    path: "/bakerys-city/saint-pierre-d-oleron/2038"
  },
  {
    path: "/bakerys-city/saint-pierre-des-corps/531"
  },
  {
    path: "/bakerys-city/saint-pierre-du-mont/1265"
  },
  {
    path: "/bakerys-city/saint-pierre-du-perray/510"
  },
  {
    path: "/bakerys-city/saint-pierre-eglise/2525"
  },
  {
    path: "/bakerys-city/saint-pierre-en-auge/1702"
  },
  {
    path: "/bakerys-city/saint-pol-sur-ternoise/129"
  },
  {
    path: "/bakerys-city/saint-priest/848"
  },
  {
    path: "/bakerys-city/saint-priest-en-jarez/755"
  },
  {
    path: "/bakerys-city/saint-priest-taurion/2182"
  },
  {
    path: "/bakerys-city/saint-quentin/2020"
  },
  {
    path: "/bakerys-city/saint-raphael/1078"
  },
  {
    path: "/bakerys-city/saint-remy-la-varenne/1215"
  },
  {
    path: "/bakerys-city/saint-riquier/2862"
  },
  {
    path: "/bakerys-city/saint-romain-d-albon/2437"
  },
  {
    path: "/bakerys-city/saint-romain-de-colbosc/1706"
  },
  {
    path: "/bakerys-city/saint-saens/2023"
  },
  {
    path: "/bakerys-city/saint-saturnin-de-lenne/1325"
  },
  {
    path: "/bakerys-city/saint-saturnin-les-avignon/3109"
  },
  {
    path: "/bakerys-city/saint-sauvier/489"
  },
  {
    path: "/bakerys-city/saint-savin/2711"
  },
  {
    path: "/bakerys-city/saint-seine-l-abbaye/2080"
  },
  {
    path: "/bakerys-city/saint-senier-de-beuvron/14"
  },
  {
    path: "/bakerys-city/saint-sever/1039"
  },
  {
    path: "/bakerys-city/saint-suliac/3266"
  },
  {
    path: "/bakerys-city/saint-sulpice-et-cameyrac/1049"
  },
  {
    path: "/bakerys-city/saint-sulpice-la-pointe/820"
  },
  {
    path: "/bakerys-city/saint-sulpice-les-champs/135"
  },
  {
    path: "/bakerys-city/saint-symphorien/751"
  },
  {
    path: "/bakerys-city/saint-thierry/609"
  },
  {
    path: "/bakerys-city/saint-thuriau/2421"
  },
  {
    path: "/bakerys-city/saint-tropez/177"
  },
  {
    path: "/bakerys-city/saint-urbain/1776"
  },
  {
    path: "/bakerys-city/saint-usuge/2376"
  },
  {
    path: "/bakerys-city/saint-valery-en-caux/3169"
  },
  {
    path: "/bakerys-city/saint-vallier/891"
  },
  {
    path: "/bakerys-city/saint-yorre/2455"
  },
  {
    path: "/bakerys-city/sainte-anne-d-evenos/2374"
  },
  {
    path: "/bakerys-city/sainte-catherine/1703"
  },
  {
    path: "/bakerys-city/sainte-cecile-plage/3289"
  },
  {
    path: "/bakerys-city/sainte-colombe/608"
  },
  {
    path: "/bakerys-city/sainte-foy-les-lyon/2805"
  },
  {
    path: "/bakerys-city/sainte-gemmes-sur-loire/3212"
  },
  {
    path: "/bakerys-city/sainte-genevieve-des-bois/3042"
  },
  {
    path: "/bakerys-city/sainte-livrade-sur-lot/1849"
  },
  {
    path: "/bakerys-city/sainte-luce-sur-loire/2610"
  },
  {
    path: "/bakerys-city/sainte-marguerite/1361"
  },
  {
    path: "/bakerys-city/sainte-marie/1853"
  },
  {
    path: "/bakerys-city/sainte-marine/203"
  },
  {
    path: "/bakerys-city/sainte-maure-de-touraine/2631"
  },
  {
    path: "/bakerys-city/sainte-maxime/1633"
  },
  {
    path: "/bakerys-city/sainte-opportune-la-mare/1463"
  },
  {
    path: "/bakerys-city/sainte-rose/2381"
  },
  {
    path: "/bakerys-city/sainte-solange/615"
  },
  {
    path: "/bakerys-city/saintes/1886"
  },
  {
    path: "/bakerys-city/saintes-maries-de-la-mer/1407"
  },
  {
    path: "/bakerys-city/saints-geosmes/2888"
  },
  {
    path: "/bakerys-city/salins-les-bains/3099"
  },
  {
    path: "/bakerys-city/sallanches/265"
  },
  {
    path: "/bakerys-city/salon-la-tour/1551"
  },
  {
    path: "/bakerys-city/sambin/2660"
  },
  {
    path: "/bakerys-city/sanary-sur-mer/1823"
  },
  {
    path: "/bakerys-city/sannerville/1452"
  },
  {
    path: "/bakerys-city/sap-en-auge/2018"
  },
  {
    path: "/bakerys-city/sarras/826"
  },
  {
    path: "/bakerys-city/sarre-union/2870"
  },
  {
    path: "/bakerys-city/sarreguemines/645"
  },
  {
    path: "/bakerys-city/satillieu/2860"
  },
  {
    path: "/bakerys-city/saugnacq-et-muret/2787"
  },
  {
    path: "/bakerys-city/saugues/2346"
  },
  {
    path: "/bakerys-city/saujon/892"
  },
  {
    path: "/bakerys-city/saulce-sur-rhone/606"
  },
  {
    path: "/bakerys-city/saumur/746"
  },
  {
    path: "/bakerys-city/sauve/2490"
  },
  {
    path: "/bakerys-city/saverne/1832"
  },
  {
    path: "/bakerys-city/savigneux/1905"
  },
  {
    path: "/bakerys-city/savigny/3098"
  },
  {
    path: "/bakerys-city/savigny-sur-braye/3194"
  },
  {
    path: "/bakerys-city/savigny-sur-orge/3293"
  },
  {
    path: "/bakerys-city/savy-berlette/355"
  },
  {
    path: "/bakerys-city/scey-sur-saone-et-saint-albin/310"
  },
  {
    path: "/bakerys-city/schiltigheim/2063"
  },
  {
    path: "/bakerys-city/scionzier/121"
  },
  {
    path: "/bakerys-city/seichamps/2362"
  },
  {
    path: "/bakerys-city/seilhac/1996"
  },
  {
    path: "/bakerys-city/selestat/2521"
  },
  {
    path: "/bakerys-city/selles/2570"
  },
  {
    path: "/bakerys-city/senan/1178"
  },
  {
    path: "/bakerys-city/sennecey-les-dijon/2553"
  },
  {
    path: "/bakerys-city/sens-de-bretagne/3192"
  },
  {
    path: "/bakerys-city/septfonds/1240"
  },
  {
    path: "/bakerys-city/seraincourt/272"
  },
  {
    path: "/bakerys-city/seremange-erzange/688"
  },
  {
    path: "/bakerys-city/serezin-du-rhone/2323"
  },
  {
    path: "/bakerys-city/serifontaine/1575"
  },
  {
    path: "/bakerys-city/serigny/485"
  },
  {
    path: "/bakerys-city/serris/1910"
  },
  {
    path: "/bakerys-city/servian/106"
  },
  {
    path: "/bakerys-city/sete/1098"
  },
  {
    path: "/bakerys-city/severac-d-aveyron/1133"
  },
  {
    path: "/bakerys-city/sevran/2048"
  },
  {
    path: "/bakerys-city/sevremoine/3026"
  },
  {
    path: "/bakerys-city/sevremont/863"
  },
  {
    path: "/bakerys-city/sevrier/1786"
  },
  {
    path: "/bakerys-city/seyches/2071"
  },
  {
    path: "/bakerys-city/seyssel/3024"
  },
  {
    path: "/bakerys-city/sigalens/717"
  },
  {
    path: "/bakerys-city/signy-le-petit/936"
  },
  {
    path: "/bakerys-city/sillans-la-cascade/1666"
  },
  {
    path: "/bakerys-city/sille-le-guillaume/9"
  },
  {
    path: "/bakerys-city/sisteron/1396"
  },
  {
    path: "/bakerys-city/six-fours-les-plages/2999"
  },
  {
    path: "/bakerys-city/soignolles-en-brie/1494"
  },
  {
    path: "/bakerys-city/soissons/534"
  },
  {
    path: "/bakerys-city/solesmes/2423"
  },
  {
    path: "/bakerys-city/sospel/660"
  },
  {
    path: "/bakerys-city/sotteville-les-rouen/2799"
  },
  {
    path: "/bakerys-city/souleuvre-en-bocage/147"
  },
  {
    path: "/bakerys-city/soullans/985"
  },
  {
    path: "/bakerys-city/soumans/2169"
  },
  {
    path: "/bakerys-city/souraide/2896"
  },
  {
    path: "/bakerys-city/sours/2390"
  },
  {
    path: "/bakerys-city/soussans/3009"
  },
  {
    path: "/bakerys-city/st.-bonnet-le-froid/1617"
  },
  {
    path: "/bakerys-city/st.-flour/1594"
  },
  {
    path: "/bakerys-city/st.-gaudens/3257"
  },
  {
    path: "/bakerys-city/st.-georges-sur-moulon/1629"
  },
  {
    path: "/bakerys-city/st.-julien/821"
  },
  {
    path: "/bakerys-city/st.-sulpice-la-pointe/672"
  },
  {
    path: "/bakerys-city/stainville/2351"
  },
  {
    path: "/bakerys-city/ste.-montaine/2366"
  },
  {
    path: "/bakerys-city/strasbourg/354"
  },
  {
    path: "/bakerys-city/sucy-en-brie/2730"
  },
  {
    path: "/bakerys-city/suresnes/678"
  },
  {
    path: "/bakerys-city/surville/721"
  },
  {
    path: "/bakerys-city/survilliers/419"
  },
  {
    path: "/bakerys-city/sury-pres-lere/2792"
  },
  {
    path: "/bakerys-city/taden/2155"
  },
  {
    path: "/bakerys-city/tailly/1146"
  },
  {
    path: "/bakerys-city/tain-l-hermitage/102"
  },
  {
    path: "/bakerys-city/talant/676"
  },
  {
    path: "/bakerys-city/talence/3007"
  },
  {
    path: "/bakerys-city/tallende/1529"
  },
  {
    path: "/bakerys-city/talmont-saint-hilaire/1097"
  },
  {
    path: "/bakerys-city/tarare/409"
  },
  {
    path: "/bakerys-city/tarbes/41"
  },
  {
    path: "/bakerys-city/tartas/2339"
  },
  {
    path: "/bakerys-city/telgruc-sur-mer/1610"
  },
  {
    path: "/bakerys-city/ternay/2890"
  },
  {
    path: "/bakerys-city/terres-de-caux/881"
  },
  {
    path: "/bakerys-city/tessy-bocage/1538"
  },
  {
    path: "/bakerys-city/thegra/2596"
  },
  {
    path: "/bakerys-city/theillay/526"
  },
  {
    path: "/bakerys-city/thiers/1455"
  },
  {
    path: "/bakerys-city/thionville/164"
  },
  {
    path: "/bakerys-city/thonne-la-long/2344"
  },
  {
    path: "/bakerys-city/thonon-les-bains/944"
  },
  {
    path: "/bakerys-city/thorame-haute/596"
  },
  {
    path: "/bakerys-city/thouars/1678"
  },
  {
    path: "/bakerys-city/tiffauges/2054"
  },
  {
    path: "/bakerys-city/tilly/2537"
  },
  {
    path: "/bakerys-city/tilly-sur-seulles/2535"
  },
  {
    path: "/bakerys-city/tinqueux/1417"
  },
  {
    path: "/bakerys-city/torce/3157"
  },
  {
    path: "/bakerys-city/torcy/677"
  },
  {
    path: "/bakerys-city/torcy-le-grand/1171"
  },
  {
    path: "/bakerys-city/torpes/2375"
  },
  {
    path: "/bakerys-city/torteron/1948"
  },
  {
    path: "/bakerys-city/tossiat/5"
  },
  {
    path: "/bakerys-city/toulon/512"
  },
  {
    path: "/bakerys-city/toulouse/263"
  },
  {
    path: "/bakerys-city/tourcoing/505"
  },
  {
    path: "/bakerys-city/tourlaville/1149"
  },
  {
    path: "/bakerys-city/tournefeuille/2807"
  },
  {
    path: "/bakerys-city/tours/104"
  },
  {
    path: "/bakerys-city/tourville-sur-odon/1468"
  },
  {
    path: "/bakerys-city/traînel/1191"
  },
  {
    path: "/bakerys-city/trappes/3168"
  },
  {
    path: "/bakerys-city/tregastel/2443"
  },
  {
    path: "/bakerys-city/trelaze/2498"
  },
  {
    path: "/bakerys-city/trelevern/2142"
  },
  {
    path: "/bakerys-city/trelissac/2802"
  },
  {
    path: "/bakerys-city/tresses/3137"
  },
  {
    path: "/bakerys-city/trets/1405"
  },
  {
    path: "/bakerys-city/trizay/1861"
  },
  {
    path: "/bakerys-city/troyes/1192"
  },
  {
    path: "/bakerys-city/uchaud/1927"
  },
  {
    path: "/bakerys-city/ugny/1251"
  },
  {
    path: "/bakerys-city/uhlwiller/2762"
  },
  {
    path: "/bakerys-city/ury/329"
  },
  {
    path: "/bakerys-city/ussac/1859"
  },
  {
    path: "/bakerys-city/ussel/2827"
  },
  {
    path: "/bakerys-city/usson-du-poitou/541"
  },
  {
    path: "/bakerys-city/usson-en-forez/1754"
  },
  {
    path: "/bakerys-city/uzer/2704"
  },
  {
    path: "/bakerys-city/uzerche/438"
  },
  {
    path: "/bakerys-city/uzes/793"
  },
  {
    path: "/bakerys-city/val-d-oingt/328"
  },
  {
    path: "/bakerys-city/val-au-perche/3144"
  },
  {
    path: "/bakerys-city/val-d-oire-et-gartempe/2184"
  },
  {
    path: "/bakerys-city/val-d-usiers/1175"
  },
  {
    path: "/bakerys-city/val-de-cognac/2024"
  },
  {
    path: "/bakerys-city/val-de-sos/1099"
  },
  {
    path: "/bakerys-city/valbonne/654"
  },
  {
    path: "/bakerys-city/valence/231"
  },
  {
    path: "/bakerys-city/valenciennes/2621"
  },
  {
    path: "/bakerys-city/vallauris/2964"
  },
  {
    path: "/bakerys-city/vallee-de-ronsard/1707"
  },
  {
    path: "/bakerys-city/valloire/595"
  },
  {
    path: "/bakerys-city/vals-les-bains/814"
  },
  {
    path: "/bakerys-city/vannes/767"
  },
  {
    path: "/bakerys-city/varces-allieres-et-risset/2675"
  },
  {
    path: "/bakerys-city/varennes-jarcy/2261"
  },
  {
    path: "/bakerys-city/varilhes/1008"
  },
  {
    path: "/bakerys-city/vaujurennes/2170"
  },
  {
    path: "/bakerys-city/vaulx-en-velin/1232"
  },
  {
    path: "/bakerys-city/vauvert/1926"
  },
  {
    path: "/bakerys-city/vaux-le-penil/1334"
  },
  {
    path: "/bakerys-city/vaux-sur-mer/460"
  },
  {
    path: "/bakerys-city/velizy-villacoublay/1351"
  },
  {
    path: "/bakerys-city/venarey-les-laumes/2943"
  },
  {
    path: "/bakerys-city/vendays-montalivet/185"
  },
  {
    path: "/bakerys-city/vendin-les-bethune/477"
  },
  {
    path: "/bakerys-city/vendrennes/1851"
  },
  {
    path: "/bakerys-city/venelles/2548"
  },
  {
    path: "/bakerys-city/venissieux/1765"
  },
  {
    path: "/bakerys-city/vergt/210"
  },
  {
    path: "/bakerys-city/verines/1749"
  },
  {
    path: "/bakerys-city/vernet-les-bains/2563"
  },
  {
    path: "/bakerys-city/verneuil-l-etang/1688"
  },
  {
    path: "/bakerys-city/vernioz/149"
  },
  {
    path: "/bakerys-city/vernon/783"
  },
  {
    path: "/bakerys-city/verrieres-le-buisson/2476"
  },
  {
    path: "/bakerys-city/versailles/1292"
  },
  {
    path: "/bakerys-city/versonnex/123"
  },
  {
    path: "/bakerys-city/vertou/1154"
  },
  {
    path: "/bakerys-city/vexin-sur-epte/1768"
  },
  {
    path: "/bakerys-city/veyrac/2453"
  },
  {
    path: "/bakerys-city/veyrier-du-lac/2431"
  },
  {
    path: "/bakerys-city/vezins/412"
  },
  {
    path: "/bakerys-city/vezins-de-levezou/1308"
  },
  {
    path: "/bakerys-city/vias/3123"
  },
  {
    path: "/bakerys-city/vicq-sur-breuilh/484"
  },
  {
    path: "/bakerys-city/vicq-sur-gartempe/906"
  },
  {
    path: "/bakerys-city/vicq-sur-nahon/481"
  },
  {
    path: "/bakerys-city/vielle-saint-girons/2986"
  },
  {
    path: "/bakerys-city/vienne/2180"
  },
  {
    path: "/bakerys-city/vierzon/1746"
  },
  {
    path: "/bakerys-city/vigneux-sur-seine/2692"
  },
  {
    path: "/bakerys-city/villabe/679"
  },
  {
    path: "/bakerys-city/villaines-la-juhel/2619"
  },
  {
    path: "/bakerys-city/villard-de-lans/819"
  },
  {
    path: "/bakerys-city/villars/1766"
  },
  {
    path: "/bakerys-city/ville-en-tardenois/36"
  },
  {
    path: "/bakerys-city/ville-la-grand/1958"
  },
  {
    path: "/bakerys-city/villebon-sur-yvette/599"
  },
  {
    path: "/bakerys-city/villecomtal-sur-arros/2966"
  },
  {
    path: "/bakerys-city/villefontaine/2229"
  },
  {
    path: "/bakerys-city/villefranche-de-conflent/2959"
  },
  {
    path: "/bakerys-city/villefranche-de-lauragais/2771"
  },
  {
    path: "/bakerys-city/villefranche-sur-saone/772"
  },
  {
    path: "/bakerys-city/villemotier/108"
  },
  {
    path: "/bakerys-city/villenave-d-ornon/450"
  },
  {
    path: "/bakerys-city/villeneuve-d-ascq/789"
  },
  {
    path: "/bakerys-city/villeneuve-de-marsan/1263"
  },
  {
    path: "/bakerys-city/villeneuve-la-comtesse/666"
  },
  {
    path: "/bakerys-city/villeneuve-minervois/84"
  },
  {
    path: "/bakerys-city/villeneuve-saint-georges/1907"
  },
  {
    path: "/bakerys-city/villeneuve-sur-lot/658"
  },
  {
    path: "/bakerys-city/villers/1313"
  },
  {
    path: "/bakerys-city/villers-bocage/664"
  },
  {
    path: "/bakerys-city/villers-cotterets/128"
  },
  {
    path: "/bakerys-city/villers-la-chevre/1104"
  },
  {
    path: "/bakerys-city/villers-la-montagne/1252"
  },
  {
    path: "/bakerys-city/villers-les-nancy/2759"
  },
  {
    path: "/bakerys-city/villers-sur-mer/2724"
  },
  {
    path: "/bakerys-city/villerupt/1050"
  },
  {
    path: "/bakerys-city/villeurbanne/168"
  },
  {
    path: "/bakerys-city/villevallier/2129"
  },
  {
    path: "/bakerys-city/villiers-le-bel/1086"
  },
  {
    path: "/bakerys-city/villiers-sur-loir/3205"
  },
  {
    path: "/bakerys-city/vincennes/958"
  },
  {
    path: "/bakerys-city/vindry-sur-turdine/2584"
  },
  {
    path: "/bakerys-city/virey-le-grand/1450"
  },
  {
    path: "/bakerys-city/viriville/3299"
  },
  {
    path: "/bakerys-city/vitrac-en-viadene/3093"
  },
  {
    path: "/bakerys-city/vitre/3147"
  },
  {
    path: "/bakerys-city/vitrolles/1665"
  },
  {
    path: "/bakerys-city/vitry-le-françois/1636"
  },
  {
    path: "/bakerys-city/vitry-sur-seine/816"
  },
  {
    path: "/bakerys-city/vizille/2472"
  },
  {
    path: "/bakerys-city/vorey/1892"
  },
  {
    path: "/bakerys-city/vouziers/2775"
  },
  {
    path: "/bakerys-city/vulaines-sur-seine/1152"
  },
  {
    path: "/bakerys-city/wiancourt/2209"
  },
  {
    path: "/bakerys-city/willgottheim/2480"
  },
  {
    path: "/bakerys-city/wintzenheim/2924"
  },
  {
    path: "/bakerys-city/wissous/56"
  },
  {
    path: "/bakerys-city/yerville/2543"
  },
  {
    path: "/bakerys-city/ytrac/1978"
  },
  {
    path: "/bakerys-city/yvrac/1062"
  },
  {
    path: "/bakerys-city/yzeure/407"
  },
  {
    path: "/bakerys-city/zonza/2119"
  }
]

module.exports = configure(function (ctx) {
  return {
    // https://v2.quasar.dev/quasar-cli-webpack/supporting-ts
    supportTS: false,

    // https://v2.quasar.dev/quasar-cli-webpack/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-webpack/boot-files
    boot: [
      'i18n'
    ],

    // https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-css
    css: [
      'bootstrap.min.scss',
      'app.scss',
      'material.scss'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      // 'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-build
    build: {
      vueRouterMode: 'history', // available values: 'hash', 'history'

      env: envparser(),
      publicPath: ctx.prod ? process.env.WEBSITE_LOCAL : '',

      extendWebpack (cfg) {
        cfg.plugins.push(
          new SitemapPlugin({
            base: 'https://my-bakery.fr',
            paths,
            options: {
              filename: 'sitemap.xml',
              lastmod: true,
              changefreq: 'weekly',
            }
          })
        ),
          cfg.plugins.push(
            new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }])
          )
      },

      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: true, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://v2.quasar.dev/quasar-cli-webpack/handling-webpack
      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-devServer
    devServer: {
      server: {
        type: 'http'
      },
      allowedHosts: ['my-bakery.fr', 'localhost'],
      port: 8080,
      headers: {
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Origin': '*',
      },
      open: true // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-framework
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'fr-FR', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],

      // Quasar plugins
      plugins: [
        'Cookies',
        'Meta',
        'Notify',
        'Loading'
      ]
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: 'all',

    // https://v2.quasar.dev/quasar-cli-webpack/developing-ssr/configuring-ssr
    ssr: {
      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      maxAge: 1000 * 60 * 60 * 24 * 30,
      // Tell browser when a file from the server should expire from cache (in ms)

      middlewares: [
        ctx.prod ? 'compression' : '',
        'render' // keep this as last one
      ]
    },

    // https://v2.quasar.dev/quasar-cli-webpack/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW

      // for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
      // if using workbox in InjectManifest mode

      manifest: {
        name: 'My Bakery - classement des meilleurs boulangerie de France',
        short_name: 'My Bakery - classement des meilleurs boulangerie de France',
        description: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'my-bakery'
      }

      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

    }
  }
})
