/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js

const { configure } = require('quasar/wrappers'),
  envparser = require('./src/config/envparser.js'),
  // SitemapPlugin = require('sitemap-webpack-plugin').default,
  CopyWebpackPlugin = require('copy-webpack-plugin')

// const paths = [
//   { path: '/' },
//   { path: '/#/' },
//   { path: '/#/my-account' },
//   { path: '/#/blogs' },
//   { path: '/#/bakerys' },
//   { path: '/#/products' },
//   {
//     path: "/#/bakery/boulangerie-latelier-de-lozanne--barjouville"
//   },
//   {
//     path: "/#/bakery/boulangerie-latelier-de-lozanne--chteaudun"
//   },
//   {
//     path: "/#/bakery/boulangerie-latelier-de-lozanne--le-mans"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-tossiat"
//   },
//   {
//     path: "/#/bakery/peronne-fabrice"
//   },
//   {
//     path: "/#/bakery/peronnet"
//   },
//   {
//     path: "/#/bakery/peronnet-olivier"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-eric-et-sandrine"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-peronne"
//   },
//   {
//     path: "/#/bakery/fournil-du-saint-bernard"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-de-saint-bernard"
//   },
//   {
//     path: "/#/bakery/martinet-eric"
//   },
//   {
//     path: "/#/bakery/la-ferme-du-bois-rouland"
//   },
//   {
//     path: "/#/bakery/-saveurs-dancenis"
//   },
//   {
//     path: "/#/bakery/boulangerie-bois-et-levain"
//   },
//   {
//     path: "/#/bakery/ptissier-chocolatier-poncin-daniel"
//   },
//   {
//     path: "/#/bakery/epicuria-sucr-sal"
//   },
//   {
//     path: "/#/bakery/maison-floran"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/fischer"
//   },
//   {
//     path: "/#/bakery/saint-didier"
//   },
//   {
//     path: "/#/bakery/au-vieux-fournil"
//   },
//   {
//     path: "/#/bakery/au-vieux-ptrin"
//   },
//   {
//     path: "/#/bakery/au-vieux-four"
//   },
//   {
//     path: "/#/bakery/au-vieux-ptrin"
//   },
//   {
//     path: "/#/bakery/fournil-du-vieux-moulin--ccile-peschaud"
//   },
//   {
//     path: "/#/bakery/patisserie-saint-andr-letendart"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/de-sousa-brito"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-jean"
//   },
//   {
//     path: "/#/bakery/ptisserie-thillard"
//   },
//   {
//     path: "/#/bakery/thillerot-franck-daniiel"
//   },
//   {
//     path: "/#/bakery/thillerot-christophe-christophe"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-thil"
//   },
//   {
//     path: "/#/bakery/boulangerie-thillard"
//   },
//   {
//     path: "/#/bakery/baland-pau"
//   },
//   {
//     path: "/#/bakery/baland-arsenal"
//   },
//   {
//     path: "/#/bakery/pain-snacking-baland-auch"
//   },
//   {
//     path: "/#/bakery/chez-paillat-le-boulanger"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-saint-maurice"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-maurice"
//   },
//   {
//     path: "/#/bakery/maison-letellier-"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-martin"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-clos-saint-martin"
//   },
//   {
//     path: "/#/bakery/boulangerie-ange"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-briord"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-cyr"
//   },
//   {
//     path: "/#/bakery/saint-didier"
//   },
//   {
//     path: "/#/bakery/la-fleur-du-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-saint-loi"
//   },
//   {
//     path: "/#/bakery/la-gourmandise"
//   },
//   {
//     path: "/#/bakery/la-mazarine"
//   },
//   {
//     path: "/#/bakery/boulangerie-galzin"
//   },
//   {
//     path: "/#/bakery/boulangerie-latelier-des-sens"
//   },
//   {
//     path: "/#/bakery/au-pain-marie"
//   },
//   {
//     path: "/#/bakery/le-fournil-la-chapelle-viviers"
//   },
//   {
//     path: "/#/bakery/boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/de-sousa-brito"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-benot"
//   },
//   {
//     path: "/#/bakery/le-moulin-saint-benoit"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-benot"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-joseph-andr"
//   },
//   {
//     path: "/#/bakery/boulangerie-maxime-revidat"
//   },
//   {
//     path: "/#/bakery/la-germinoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-simonetti"
//   },
//   {
//     path: "/#/bakery/atelier-boutique-bouillet-miribel"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/de-sousa-brito"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-jean"
//   },
//   {
//     path: "/#/bakery/villeneuve-pascal"
//   },
//   {
//     path: "/#/bakery/boulangerie-villeneuve"
//   },
//   {
//     path: "/#/bakery/boulangerie-villeneuve-minervois"
//   },
//   {
//     path: "/#/bakery/chevalier-romain"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-l-eglise-saint-justin"
//   },
//   {
//     path: "/#/bakery/le-boulanger-de-saint-just"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-augusta--civrieux"
//   },
//   {
//     path: "/#/bakery/saint-julien"
//   },
//   {
//     path: "/#/bakery/fournil-saint-julien"
//   },
//   {
//     path: "/#/bakery/boulangerie-st-julien"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-le-st-julien"
//   },
//   {
//     path: "/#/bakery/be-my-cookie--rue-du-pas-saint-georges"
//   },
//   {
//     path: "/#/bakery/aux-gourmandises-disa-et-nico"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-saint-georges"
//   },
//   {
//     path: "/#/bakery/aux-deux-epis"
//   },
//   {
//     path: "/#/bakery/ewan-jeme-boulangerie-patisserie"
//   },
//   {
//     path: "/#/bakery/maison-beaumont"
//   },
//   {
//     path: "/#/bakery/au-fournil-dallemans"
//   },
//   {
//     path: "/#/bakery/la-pierre-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-delices"
//   },
//   {
//     path: "/#/bakery/boulangerie-bobichon"
//   },
//   {
//     path: "/#/bakery/saint-julien"
//   },
//   {
//     path: "/#/bakery/fournil-saint-julien"
//   },
//   {
//     path: "/#/bakery/boulangerie-st-julien"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-le-st-julien"
//   },
//   {
//     path: "/#/bakery/patisserie-saint-andr-letendart"
//   },
//   {
//     path: "/#/bakery/chez-bol--le-pain-de-villemotier--le-relais-de-villemotier"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/de-sousa-brito"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-jean"
//   },
//   {
//     path: "/#/bakery/frans"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-lille--boulangerie-ptisserie--fransois-olivier"
//   },
//   {
//     path: "/#/bakery/boulangerie-fransois"
//   },
//   {
//     path: "/#/bakery/bager"
//   },
//   {
//     path: "/#/bakery/latelier-lagnieu"
//   },
//   {
//     path: "/#/bakery/patisserie-saint-andr-letendart"
//   },
//   {
//     path: "/#/bakery/sunyer-andr-maitre-artisan"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-crozet"
//   },
//   {
//     path: "/#/bakery/camille-crozet-ptisserie"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-versonnex"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-ly-sow"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-laurent"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-laurent"
//   },
//   {
//     path: "/#/bakery/saint-remy"
//   },
//   {
//     path: "/#/bakery/boulangerie-st-rmy"
//   },
//   {
//     path: "/#/bakery/delb-didier"
//   },
//   {
//     path: "/#/bakery/dulin-pascal-herve-didier"
//   },
//   {
//     path: "/#/bakery/saint-didier"
//   },
//   {
//     path: "/#/bakery/chez-paillat-le-boulanger"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-saint-maurice"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-maurice"
//   },
//   {
//     path: "/#/bakery/boulangerie-picerie-saint-sulpice"
//   },
//   {
//     path: "/#/bakery/aux-douceurs-de-collonges"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-joseph-andr"
//   },
//   {
//     path: "/#/bakery/boulangerie-maxime-revidat"
//   },
//   {
//     path: "/#/bakery/la-germinoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-simonetti"
//   },
//   {
//     path: "/#/bakery/maison-letellier-"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-martin"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-clos-saint-martin"
//   },
//   {
//     path: "/#/bakery/boulangerie-ange"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/benyahia-cherife"
//   },
//   {
//     path: "/#/bakery/aux-delices-de-beny"
//   },
//   {
//     path: "/#/bakery/lpinette"
//   },
//   {
//     path: "/#/bakery/cumpanis"
//   },
//   {
//     path: "/#/bakery/maison-letellier-"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-martin"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-clos-saint-martin"
//   },
//   {
//     path: "/#/bakery/boulangerie-ange"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/chez-paillat-le-boulanger"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-saint-maurice"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-maurice"
//   },
//   {
//     path: "/#/bakery/boulangerie-au-vieux-four-cancalais"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/de-sousa-brito"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-vieux-four-fabrication-lancienne-cuisson-naturelle-au-bois-longue-conservation"
//   },
//   {
//     path: "/#/bakery/soulabaille"
//   },
//   {
//     path: "/#/bakery/le-petit-fournil"
//   },
//   {
//     path: "/#/bakery/boulangerie-ange"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-coligny"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-fournil-de-coligny-patisserie"
//   },
//   {
//     path: "/#/bakery/maison-bettant"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-montluel"
//   },
//   {
//     path: "/#/bakery/beyer-damien"
//   },
//   {
//     path: "/#/bakery/ptisserie-beyer"
//   },
//   {
//     path: "/#/bakery/les-gateaux-du-bey"
//   },
//   {
//     path: "/#/bakery/delices-beyatatra"
//   },
//   {
//     path: "/#/bakery/maison-beyaz"
//   },
//   {
//     path: "/#/bakery/les-dlices-de-saint-marcel"
//   },
//   {
//     path: "/#/bakery/maison-dolce"
//   },
//   {
//     path: "/#/bakery/marcel-et-cavazza"
//   },
//   {
//     path: "/#/bakery/maison-planchot-saint-paul"
//   },
//   {
//     path: "/#/bakery/maison-le-gouallec--rez"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-paul-maison-farine-lyon"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-paul"
//   },
//   {
//     path: "/#/bakery/gironde-spcialits"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-girondon"
//   },
//   {
//     path: "/#/bakery/le-fournil-girondin"
//   },
//   {
//     path: "/#/bakery/le-fournil-girondin"
//   },
//   {
//     path: "/#/bakery/fournil-des-girondins"
//   },
//   {
//     path: "/#/bakery/lhopitalier-alain-pierre"
//   },
//   {
//     path: "/#/bakery/portland-by-nicolas-adam"
//   },
//   {
//     path: "/#/bakery/porte-de-vanves"
//   },
//   {
//     path: "/#/bakery/port-de-piles"
//   },
//   {
//     path: "/#/bakery/maison-portelada"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-colline"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-joseph-andr"
//   },
//   {
//     path: "/#/bakery/boulangerie-maxime-revidat"
//   },
//   {
//     path: "/#/bakery/la-germinoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-simonetti"
//   },
//   {
//     path: "/#/bakery/boulangerie-brion"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-maison-chevillard--artisan--snacking"
//   },
//   {
//     path: "/#/bakery/lentrept-du-pain"
//   },
//   {
//     path: "/#/bakery/lentressens"
//   },
//   {
//     path: "/#/bakery/lentremet"
//   },
//   {
//     path: "/#/bakery/lentarte"
//   },
//   {
//     path: "/#/bakery/lentremets-gourmand"
//   },
//   {
//     path: "/#/bakery/denis"
//   },
//   {
//     path: "/#/bakery/ewan-jeme-boulangerie-patisserie"
//   },
//   {
//     path: "/#/bakery/sas-meunier"
//   },
//   {
//     path: "/#/bakery/bourau-olivier"
//   },
//   {
//     path: "/#/bakery/chevalier-romain"
//   },
//   {
//     path: "/#/bakery/le-moulin-de-chevry"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/de-sousa-brito"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-jean"
//   },
//   {
//     path: "/#/bakery/patisserie-saint-andr-letendart"
//   },
//   {
//     path: "/#/bakery/boulangerie-biscuits-joyeux--dinard"
//   },
//   {
//     path: "/#/bakery/latelier-joyeux--boulangerie-caf"
//   },
//   {
//     path: "/#/bakery/maison-joyeux--boulangerie-salon-de-th"
//   },
//   {
//     path: "/#/bakery/boulangerie--ptisserie-joyeux--la-madeleine"
//   },
//   {
//     path: "/#/bakery/biscuits-joyeux--saint-malo-rocabey"
//   },
//   {
//     path: "/#/bakery/la-panire--gex"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-3-fontaines-centre-commercial-les-3-fontaines-gare-cergy-prfecture"
//   },
//   {
//     path: "/#/bakery/lorette-boulangerie-ptisserie-glacier"
//   },
//   {
//     path: "/#/bakery/lorette-boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/lorette-boulangerie-ptisserie-glacier"
//   },
//   {
//     path: "/#/bakery/lorette-boulangerie-pains-bio"
//   },
//   {
//     path: "/#/bakery/lorentz-ptissier-traiteur"
//   },
//   {
//     path: "/#/bakery/maison-planchot-montaigu"
//   },
//   {
//     path: "/#/bakery/maison-pascalis--romans-sur-isre"
//   },
//   {
//     path: "/#/bakery/maison-pascalis--chanos-curson"
//   },
//   {
//     path: "/#/bakery/maison-pascalis--valence"
//   },
//   {
//     path: "/#/bakery/lili-croustille"
//   },
//   {
//     path: "/#/bakery/lionneton"
//   },
//   {
//     path: "/#/bakery/oisy-club"
//   },
//   {
//     path: "/#/bakery/langle-gourmand"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-menhirs"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-brossardise"
//   },
//   {
//     path: "/#/bakery/moulins-de-saint-armel"
//   },
//   {
//     path: "/#/bakery/moulins-du-terrier-marteau"
//   },
//   {
//     path: "/#/bakery/moulins-bourgeois"
//   },
//   {
//     path: "/#/bakery/le-moulin-de-bruges"
//   },
//   {
//     path: "/#/bakery/boulangerie-pithon"
//   },
//   {
//     path: "/#/bakery/aux-perles-de-letang"
//   },
//   {
//     path: "/#/bakery/la-perle-a-pain-pain"
//   },
//   {
//     path: "/#/bakery/une-perle-gourmande--gteaux-personnaliss"
//   },
//   {
//     path: "/#/bakery/les-perles-de-sab"
//   },
//   {
//     path: "/#/bakery/les-perles-painpain"
//   },
//   {
//     path: "/#/bakery/au-ble-d-or"
//   },
//   {
//     path: "/#/bakery/au-bl-sucr"
//   },
//   {
//     path: "/#/bakery/au-bl-dor"
//   },
//   {
//     path: "/#/bakery/au-bl-dor"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-saint-aubin"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-saint-aubin"
//   },
//   {
//     path: "/#/bakery/la-fourne-des-restriens"
//   },
//   {
//     path: "/#/bakery/boulangerie-fleury"
//   },
//   {
//     path: "/#/bakery/fleury-laurent"
//   },
//   {
//     path: "/#/bakery/laurent-fleury"
//   },
//   {
//     path: "/#/bakery/artisan-boulangerie-ptisserie-de-fleury"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-monteil"
//   },
//   {
//     path: "/#/bakery/ptisserie-le-mont-blanc"
//   },
//   {
//     path: "/#/bakery/au-pain-montagnard"
//   },
//   {
//     path: "/#/bakery/le-montagu"
//   },
//   {
//     path: "/#/bakery/la-valle"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-valle"
//   },
//   {
//     path: "/#/bakery/chatrieux-james"
//   },
//   {
//     path: "/#/bakery/laonvie-gourmande"
//   },
//   {
//     path: "/#/bakery/maison-lemon"
//   },
//   {
//     path: "/#/bakery/boulangerie-goubet"
//   },
//   {
//     path: "/#/bakery/lemaire-sueur"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-march"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-seraincourt"
//   },
//   {
//     path: "/#/bakery/patisserie-nouvelle-cappa"
//   },
//   {
//     path: "/#/bakery/ptisserie-carl-marletti"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-marlne"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-marlau"
//   },
//   {
//     path: "/#/bakery/au-bourdeuphro"
//   },
//   {
//     path: "/#/bakery/la-fourne-marlesienne"
//   },
//   {
//     path: "/#/bakery/le-meunier-deyrans"
//   },
//   {
//     path: "/#/bakery/boulangerie-leme"
//   },
//   {
//     path: "/#/bakery/boulangerie-lemee"
//   },
//   {
//     path: "/#/bakery/ptisserie-le-meur"
//   },
//   {
//     path: "/#/bakery/maison-pommiers"
//   },
//   {
//     path: "/#/bakery/bouetard-laurent"
//   },
//   {
//     path: "/#/bakery/bouet-pascal"
//   },
//   {
//     path: "/#/bakery/boue-bourdel-paulette-eliane"
//   },
//   {
//     path: "/#/bakery/le-bouedec-sbastien"
//   },
//   {
//     path: "/#/bakery/st-michel-guingamp"
//   },
//   {
//     path: "/#/bakery/st-michel-commercy"
//   },
//   {
//     path: "/#/bakery/usine-biscuiterie-st-michel"
//   },
//   {
//     path: "/#/bakery/latelier-st-michel-chef-chef"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-saint-michel"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-castres"
//   },
//   {
//     path: "/#/bakery/ptisserie-chocolaterie-charmes-moi"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-neuilly-saint-front"
//   },
//   {
//     path: "/#/bakery/sissis-cupcakes"
//   },
//   {
//     path: "/#/bakery/la-fourne-des-restriens"
//   },
//   {
//     path: "/#/bakery/boulangerie-fleury"
//   },
//   {
//     path: "/#/bakery/fleury-laurent"
//   },
//   {
//     path: "/#/bakery/laurent-fleury"
//   },
//   {
//     path: "/#/bakery/artisan-boulangerie-ptisserie-de-fleury"
//   },
//   {
//     path: "/#/bakery/a-lacroix"
//   },
//   {
//     path: "/#/bakery/boulangerie-fontenelle"
//   },
//   {
//     path: "/#/bakery/leu-fontenelle"
//   },
//   {
//     path: "/#/bakery/boulangerie-acikgoz"
//   },
//   {
//     path: "/#/bakery/boulangerie-lancienne"
//   },
//   {
//     path: "/#/bakery/au-pain-lancienne"
//   },
//   {
//     path: "/#/bakery/le-fournil-lancienne"
//   },
//   {
//     path: "/#/bakery/boulangerie-lancienne"
//   },
//   {
//     path: "/#/bakery/a-lancienne-mairie"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-coeuvres-valsery"
//   },
//   {
//     path: "/#/bakery/germaine-david-vanessa"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-servais"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-servais"
//   },
//   {
//     path: "/#/bakery/la-baguette-dhauteville"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-phare"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-pierre"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-saint-pierre"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-pierre"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-saint-pierre"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-maison-fedila"
//   },
//   {
//     path: "/#/bakery/la-magie-du-bl"
//   },
//   {
//     path: "/#/bakery/le-ptrin-daugustin"
//   },
//   {
//     path: "/#/bakery/boulangerie-montfaucon-gcb"
//   },
//   {
//     path: "/#/bakery/villeret-nicolas"
//   },
//   {
//     path: "/#/bakery/crouy-sur-ourcq"
//   },
//   {
//     path: "/#/bakery/a-la-brioche-feuillete"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-pain-du-coingt"
//   },
//   {
//     path: "/#/bakery/boulangerie-dury"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-marcy--maison-blache"
//   },
//   {
//     path: "/#/bakery/boulangerie-d-orgeval"
//   },
//   {
//     path: "/#/bakery/julien-et-marine-duhamel-orgeval-boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/lempire-des-pains"
//   },
//   {
//     path: "/#/bakery/lempire-des-sans"
//   },
//   {
//     path: "/#/bakery/empire-du-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-housset-st-gilles"
//   },
//   {
//     path: "/#/bakery/boulangerie-housset-marigny"
//   },
//   {
//     path: "/#/bakery/boulangerie-st-nicolas"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-nicolas"
//   },
//   {
//     path: "/#/bakery/saint-nicolas-gourmet"
//   },
//   {
//     path: "/#/bakery/de-saint-nicolas"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-nicolas"
//   },
//   {
//     path: "/#/bakery/gricourt-roger-jean-charles"
//   },
//   {
//     path: "/#/bakery/boulangerie-rosny-tradition"
//   },
//   {
//     path: "/#/bakery/la-rosnylloise"
//   },
//   {
//     path: "/#/bakery/krispy-kreme--rosny-2"
//   },
//   {
//     path: "/#/bakery/boulangerie-doulchy-le-chteau"
//   },
//   {
//     path: "/#/bakery/champs-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-champs-libres"
//   },
//   {
//     path: "/#/bakery/le-pain-des-champs-voisins"
//   },
//   {
//     path: "/#/bakery/lepi-des-champs"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-champ-de-mars"
//   },
//   {
//     path: "/#/bakery/patisserie-saint-thomas"
//   },
//   {
//     path: "/#/bakery/biscuiterie-saint-thomas"
//   },
//   {
//     path: "/#/bakery/au-pain-dantan-savy-berlette"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-limelette"
//   },
//   {
//     path: "/#/bakery/aux-delices-de-bonneuil"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-halle"
//   },
//   {
//     path: "/#/bakery/la-mie-du-paysan"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-saint-simon"
//   },
//   {
//     path: "/#/bakery/boulangerie-brier"
//   },
//   {
//     path: "/#/bakery/boulangerie-brier"
//   },
//   {
//     path: "/#/bakery/boulangerie-briend"
//   },
//   {
//     path: "/#/bakery/le-fournil-briron"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-brirons"
//   },
//   {
//     path: "/#/bakery/traiteur-auchan-epagny"
//   },
//   {
//     path: "/#/bakery/beaumet-yann"
//   },
//   {
//     path: "/#/bakery/beaumet"
//   },
//   {
//     path: "/#/bakery/baumel-franck-germain"
//   },
//   {
//     path: "/#/bakery/baumert-et-heinrich"
//   },
//   {
//     path: "/#/bakery/suzy-et-arlette"
//   },
//   {
//     path: "/#/bakery/suzygourmandises"
//   },
//   {
//     path: "/#/bakery/feuillette-boulangerie"
//   },
//   {
//     path: "/#/bakery/feuillete"
//   },
//   {
//     path: "/#/bakery/boulangerie-feuillette"
//   },
//   {
//     path: "/#/bakery/boulangerie-feuillette"
//   },
//   {
//     path: "/#/bakery/boulangerie-feuillette"
//   },
//   {
//     path: "/#/bakery/adam-christophe"
//   },
//   {
//     path: "/#/bakery/la-saint-christophe"
//   },
//   {
//     path: "/#/bakery/audissergues-christophe"
//   },
//   {
//     path: "/#/bakery/donuts-bar-by-shadow"
//   },
//   {
//     path: "/#/bakery/briocherie-sicard"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-thomas"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-marine"
//   },
//   {
//     path: "/#/bakery/llot-gourmandises"
//   },
//   {
//     path: "/#/bakery/gouyet-pascal"
//   },
//   {
//     path: "/#/bakery/gouy"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-lepine"
//   },
//   {
//     path: "/#/bakery/harrys-france"
//   },
//   {
//     path: "/#/bakery/harrys-france-sas"
//   },
//   {
//     path: "/#/bakery/les-dlices-danizy"
//   },
//   {
//     path: "/#/bakery/gauchy-christian"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-nr"
//   },
//   {
//     path: "/#/bakery/la-mie-du-paysan"
//   },
//   {
//     path: "/#/bakery/saint-palais-sur-mer"
//   },
//   {
//     path: "/#/bakery/chatillon-en-bazois"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-aux-dlices-chtillonnais"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-chatillonnaise-patrick-riquelme"
//   },
//   {
//     path: "/#/bakery/le-fou-du-pain"
//   },
//   {
//     path: "/#/bakery/domrat-maison-triboulet"
//   },
//   {
//     path: "/#/bakery/kouign-amann-de-saint-malo"
//   },
//   {
//     path: "/#/bakery/feeling-good-bakery"
//   },
//   {
//     path: "/#/bakery/au-pain-des-traboules--le-flanboyant"
//   },
//   {
//     path: "/#/bakery/douceurs-macarons"
//   },
//   {
//     path: "/#/bakery/ptisserie-carl-marletti"
//   },
//   {
//     path: "/#/bakery/yzeure"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-fouques-saint-lger"
//   },
//   {
//     path: "/#/bakery/besson-alain"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-besson"
//   },
//   {
//     path: "/#/bakery/boulangerie-besson"
//   },
//   {
//     path: "/#/bakery/sarl-fournil-olivan"
//   },
//   {
//     path: "/#/bakery/au-petit-mitron"
//   },
//   {
//     path: "/#/bakery/fournil-des-alles"
//   },
//   {
//     path: "/#/bakery/fournil-dartigues"
//   },
//   {
//     path: "/#/bakery/fournil-du-march-de-bassens"
//   },
//   {
//     path: "/#/bakery/fournil-de-lunivers"
//   },
//   {
//     path: "/#/bakery/fournil-sthlin"
//   },
//   {
//     path: "/#/bakery/aux-dlices-du-colombier"
//   },
//   {
//     path: "/#/bakery/colombier"
//   },
//   {
//     path: "/#/bakery/le-7me-pch-saint-loup-ganges"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-saint-loup-bio--litzellmann"
//   },
//   {
//     path: "/#/bakery/patisserie-saint-victor"
//   },
//   {
//     path: "/#/bakery/la-saint-christophe"
//   },
//   {
//     path: "/#/bakery/au-dessert-du-roy"
//   },
//   {
//     path: "/#/bakery/aux-dsirs-de-manon"
//   },
//   {
//     path: "/#/bakery/le-destin-du-gourmand"
//   },
//   {
//     path: "/#/bakery/ptisserie-dinger-beaucaire"
//   },
//   {
//     path: "/#/bakery/l-artisan-du-pain"
//   },
//   {
//     path: "/#/bakery/mercy-cake"
//   },
//   {
//     path: "/#/bakery/farine-et-chocolat"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-foret-des-pains"
//   },
//   {
//     path: "/#/bakery/la-fort-des-gourmandises"
//   },
//   {
//     path: "/#/bakery/a-la-fort-noire"
//   },
//   {
//     path: "/#/bakery/--"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-fort"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-breuil"
//   },
//   {
//     path: "/#/bakery/ptisserie-chocolaterie-charmes-moi"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-hrisson"
//   },
//   {
//     path: "/#/bakery/lherisson"
//   },
//   {
//     path: "/#/bakery/le-herisson-gourmand"
//   },
//   {
//     path: "/#/bakery/ptissier-chocolatier-glacier-mols"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-maison-vie-hauterives"
//   },
//   {
//     path: "/#/bakery/patisserie-du-donjon"
//   },
//   {
//     path: "/#/bakery/sensation-vanille"
//   },
//   {
//     path: "/#/bakery/sensations-gourmandes"
//   },
//   {
//     path: "/#/bakery/sensation-pain-boulangerie-bio"
//   },
//   {
//     path: "/#/bakery/sensation"
//   },
//   {
//     path: "/#/bakery/boulangerie-sensations"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-chapelle"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-chapelle-des-dlices"
//   },
//   {
//     path: "/#/bakery/emma-patisserie-boulangerie-la-chapelle-sur-erdre"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-saint-aubin"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-saint-aubin"
//   },
//   {
//     path: "/#/bakery/berthe-boulangerie-ptisserie-paris-13-service-traiteur"
//   },
//   {
//     path: "/#/bakery/bertrands-paris-notre-dame"
//   },
//   {
//     path: "/#/bakery/berthe"
//   },
//   {
//     path: "/#/bakery/berth-pain"
//   },
//   {
//     path: "/#/bakery/berthe-boulangerie"
//   },
//   {
//     path: "/#/bakery/vaux-sur-mer"
//   },
//   {
//     path: "/#/bakery/aux-dlices-du-vauxhall"
//   },
//   {
//     path: "/#/bakery/chapeau-alain-daniel-robert"
//   },
//   {
//     path: "/#/bakery/dlice-dophelie"
//   },
//   {
//     path: "/#/bakery/tonton-du-bread--boulangerie-ptisserie-caf-restaurant"
//   },
//   {
//     path: "/#/bakery/aux-delices-de-croix-chapeau"
//   },
//   {
//     path: "/#/bakery/maison-ardouin"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-bonnet"
//   },
//   {
//     path: "/#/bakery/le-fournil-saint-bonnet"
//   },
//   {
//     path: "/#/bakery/murat-filo"
//   },
//   {
//     path: "/#/bakery/murat-filo"
//   },
//   {
//     path: "/#/bakery/murat-delices"
//   },
//   {
//     path: "/#/bakery/boulangerie-snacking-murat"
//   },
//   {
//     path: "/#/bakery/aux-cornets-de-murat--ptisserie-hourlier"
//   },
//   {
//     path: "/#/bakery/le-fournil-saint-leonard"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-leonard"
//   },
//   {
//     path: "/#/bakery/vicq-boulangerie"
//   },
//   {
//     path: "/#/bakery/maillet-frres-sarl"
//   },
//   {
//     path: "/#/bakery/boulangerie-maillet"
//   },
//   {
//     path: "/#/bakery/les-delices-des-maillets"
//   },
//   {
//     path: "/#/bakery/la-petite-du-march"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-vicq-sur-nahon"
//   },
//   {
//     path: "/#/bakery/la-grange-a-pains"
//   },
//   {
//     path: "/#/bakery/saint-hilaire-dozilhan"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-hilaire-bonneval"
//   },
//   {
//     path: "/#/bakery/les-pains-de-saint-hilaire-bellme"
//   },
//   {
//     path: "/#/bakery/boulangerie-bost"
//   },
//   {
//     path: "/#/bakery/jean-luc-bost"
//   },
//   {
//     path: "/#/bakery/maison-lemon"
//   },
//   {
//     path: "/#/bakery/saint-sauvier-artisan-boulanger--patissier-"
//   },
//   {
//     path: "/#/bakery/maison-falco"
//   },
//   {
//     path: "/#/bakery/le-puy-des-delices"
//   },
//   {
//     path: "/#/bakery/puy-de-farine"
//   },
//   {
//     path: "/#/bakery/couzon"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-couzon"
//   },
//   {
//     path: "/#/bakery/diouf-sokhna"
//   },
//   {
//     path: "/#/bakery/boulangerie-marini--trattoria"
//   },
//   {
//     path: "/#/bakery/boulangerie-sorbier"
//   },
//   {
//     path: "/#/bakery/sarl-le-froment"
//   },
//   {
//     path: "/#/bakery/maison-blieux"
//   },
//   {
//     path: "/#/bakery/le-fournil-montfortais"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-montfort"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-marcoux"
//   },
//   {
//     path: "/#/bakery/colmars-michel"
//   },
//   {
//     path: "/#/bakery/viennoiserie-mirabeau"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-dauphin"
//   },
//   {
//     path: "/#/bakery/le-dauphin-gourmand"
//   },
//   {
//     path: "/#/bakery/ptisserie-du-dauphin--berthelot"
//   },
//   {
//     path: "/#/bakery/boulangerie-dauphine"
//   },
//   {
//     path: "/#/bakery/saint-pierre-du-perray"
//   },
//   {
//     path: "/#/bakery/boulangerie-claret"
//   },
//   {
//     path: "/#/bakery/latelier-original-de-claret"
//   },
//   {
//     path: "/#/bakery/carette"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-vincent"
//   },
//   {
//     path: "/#/bakery/fournil-saint-vincent"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-vincent"
//   },
//   {
//     path: "/#/bakery/st-vincent"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-verdon"
//   },
//   {
//     path: "/#/bakery/boulangerie-mont-moulin"
//   },
//   {
//     path: "/#/bakery/pioline-villecroix-floiras"
//   },
//   {
//     path: "/#/bakery/la-mie-vendenne"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-sommet"
//   },
//   {
//     path: "/#/bakery/fournil-de-larche-gaec-de-larche-lhomme"
//   },
//   {
//     path: "/#/bakery/boulangerie--ptisserie-larche-des-saveurs"
//   },
//   {
//     path: "/#/bakery/boulangerie-larchet"
//   },
//   {
//     path: "/#/bakery/larche-du-pain"
//   },
//   {
//     path: "/#/bakery/larche-aux-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-verdon"
//   },
//   {
//     path: "/#/bakery/lescale-douceur"
//   },
//   {
//     path: "/#/bakery/l-escale-gourmande"
//   },
//   {
//     path: "/#/bakery/lescale-depinay"
//   },
//   {
//     path: "/#/bakery/lescale-gourmande"
//   },
//   {
//     path: "/#/bakery/lescale"
//   },
//   {
//     path: "/#/bakery/malle-arnoux"
//   },
//   {
//     path: "/#/bakery/ptisserie-saint-jacques"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-patrick-et-batrice-rialland"
//   },
//   {
//     path: "/#/bakery/les-gourmandises-de-laroport"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-jacques"
//   },
//   {
//     path: "/#/bakery/manlin-le-boulanger-de-jean-mac"
//   },
//   {
//     path: "/#/bakery/le-manege-des-pains-sarl"
//   },
//   {
//     path: "/#/bakery/le-mange-des-pains"
//   },
//   {
//     path: "/#/bakery/le-mange-des-pains"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-montclard"
//   },
//   {
//     path: "/#/bakery/le-garde-manger"
//   },
//   {
//     path: "/#/bakery/la-gardonnoise"
//   },
//   {
//     path: "/#/bakery/le-fournil-dallos"
//   },
//   {
//     path: "/#/bakery/maison-louvard"
//   },
//   {
//     path: "/#/bakery/maison-ounissi--paris-11"
//   },
//   {
//     path: "/#/bakery/maison-bergeron"
//   },
//   {
//     path: "/#/bakery/maison-doucet--boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/maison-terrasson"
//   },
//   {
//     path: "/#/bakery/le-pain-dauzet"
//   },
//   {
//     path: "/#/bakery/la-maison-de-lartisan"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-le-clos-saint-donat"
//   },
//   {
//     path: "/#/bakery/langles-d-pains"
//   },
//   {
//     path: "/#/bakery/le-pain-des-angles-boulangerie-ptisserie-artisanale"
//   },
//   {
//     path: "/#/bakery/la-petite-franaise"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-castellane"
//   },
//   {
//     path: "/#/bakery/biscuiterie-du-lacydon"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-corbires"
//   },
//   {
//     path: "/#/bakery/sisteron"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-banon"
//   },
//   {
//     path: "/#/bakery/brunet-jol"
//   },
//   {
//     path: "/#/bakery/brunet-sebastien"
//   },
//   {
//     path: "/#/bakery/brunet-boulanger-patissier"
//   },
//   {
//     path: "/#/bakery/boulangerie-brunet"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-verdon"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-vincent"
//   },
//   {
//     path: "/#/bakery/fournil-saint-vincent"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-vincent"
//   },
//   {
//     path: "/#/bakery/st-vincent"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-la-roche"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-crpain"
//   },
//   {
//     path: "/#/bakery/la-grande-alsia"
//   },
//   {
//     path: "/#/bakery/la-grande-boulangerie"
//   },
//   {
//     path: "/#/bakery/la-grande-boulangerie-de-paris"
//   },
//   {
//     path: "/#/bakery/la-grande-cave-chocolat"
//   },
//   {
//     path: "/#/bakery/la-grande-boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-les-embruns"
//   },
//   {
//     path: "/#/bakery/bdonuts-gap"
//   },
//   {
//     path: "/#/bakery/la-mie-cline-gap"
//   },
//   {
//     path: "/#/bakery/boulangerie-lieval-gap"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-patrick-et-batrice-rialland"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-jacques"
//   },
//   {
//     path: "/#/bakery/ptisserie-saint-jacques"
//   },
//   {
//     path: "/#/bakery/ptisserie-saint-jacques"
//   },
//   {
//     path: "/#/bakery/patisserie-brusq-et-vos-envies"
//   },
//   {
//     path: "/#/bakery/ptisserie-brusini-collet"
//   },
//   {
//     path: "/#/bakery/rambaud"
//   },
//   {
//     path: "/#/bakery/atelier-rambaud"
//   },
//   {
//     path: "/#/bakery/lalliance-des-sens"
//   },
//   {
//     path: "/#/bakery/boulangerie-rambaud-les-verneys"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-rambaud"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-sauveur"
//   },
//   {
//     path: "/#/bakery/boutique-de-st-sauveur-de-la-ptisserie-mousnier-le-yeu"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-la-roche"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-gravette"
//   },
//   {
//     path: "/#/bakery/upaix"
//   },
//   {
//     path: "/#/bakery/boulangerie-poullain"
//   },
//   {
//     path: "/#/bakery/boulangerie-gosset"
//   },
//   {
//     path: "/#/bakery/dpt-o-bon-pain"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-loriol"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-orustique"
//   },
//   {
//     path: "/#/bakery/la-sainte-colombe"
//   },
//   {
//     path: "/#/bakery/baecker-serres"
//   },
//   {
//     path: "/#/bakery/affigliati"
//   },
//   {
//     path: "/#/bakery/carrefour-montagne--les-orres-1650"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-mallorant"
//   },
//   {
//     path: "/#/bakery/autour-dune-tradition"
//   },
//   {
//     path: "/#/bakery/lpinette"
//   },
//   {
//     path: "/#/bakery/boulangerie-mont-moulin"
//   },
//   {
//     path: "/#/bakery/pioline-villecroix-floiras"
//   },
//   {
//     path: "/#/bakery/la-mie-vendenne"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-sommet"
//   },
//   {
//     path: "/#/bakery/les-douceurs-du-lac-les-douceurs-dapremont"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-lac-des-sapins"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-lac"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-choupatie"
//   },
//   {
//     path: "/#/bakery/la-charmille"
//   },
//   {
//     path: "/#/bakery/patisserie-confiserie-salon-de-th-rousset-apt"
//   },
//   {
//     path: "/#/bakery/ftm-rochebrune"
//   },
//   {
//     path: "/#/bakery/love-and-cakes-paris-gateaux-danniversaire-dinspiration-amricaine-birthday-number-letter-layer-cakes-"
//   },
//   {
//     path: "/#/bakery/adlice-ptisserie-layer-cake-design-gteaux-dvnement"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-roquette"
//   },
//   {
//     path: "/#/bakery/lamie-du-pain"
//   },
//   {
//     path: "/#/bakery/varcin"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-roquette"
//   },
//   {
//     path: "/#/bakery/boulangerie-grasset-bio-et-artisanale"
//   },
//   {
//     path: "/#/bakery/grasser-franck-jose"
//   },
//   {
//     path: "/#/bakery/fournil-boulangerie-grasset"
//   },
//   {
//     path: "/#/bakery/grasset-myriam"
//   },
//   {
//     path: "/#/bakery/boulangerie-grasse-dlices"
//   },
//   {
//     path: "/#/bakery/les-frres-chapelier--boulangerie-bio-artisanale--bayard"
//   },
//   {
//     path: "/#/bakery/les-frres-blavette"
//   },
//   {
//     path: "/#/bakery/les-frres-chapelier--boulangerie-bio-artisanale--ponts-jumeaux"
//   },
//   {
//     path: "/#/bakery/les-frres-chapelier--boulangerie-bio-artisanale--capitole"
//   },
//   {
//     path: "/#/bakery/les-freres-chapelier-montaudran"
//   },
//   {
//     path: "/#/bakery/les-dlices-dalexis"
//   },
//   {
//     path: "/#/bakery/le-ptit-chef"
//   },
//   {
//     path: "/#/bakery/boulangerie-stphanie-et-jean-pierre"
//   },
//   {
//     path: "/#/bakery/biotiful-pain--boulangerie-bio-au-levain"
//   },
//   {
//     path: "/#/bakery/la-tourtire"
//   },
//   {
//     path: "/#/bakery/la-tour-boulangerie"
//   },
//   {
//     path: "/#/bakery/le-boulanger-de-la-tour"
//   },
//   {
//     path: "/#/bakery/la-tourtire"
//   },
//   {
//     path: "/#/bakery/la-tour-des-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-jr--valbonne"
//   },
//   {
//     path: "/#/bakery/boutique-de-st-sauveur-de-la-ptisserie-mousnier-le-yeu"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-sauveur"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-fontana"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-fontanelles"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-four-banal"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-sospel-ademaria"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-sospel"
//   },
//   {
//     path: "/#/bakery/drapeau-bakery"
//   },
//   {
//     path: "/#/bakery/maison-joly-aux-dlices-de-villers"
//   },
//   {
//     path: "/#/bakery/fournil-du-moulinet"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-comtesse"
//   },
//   {
//     path: "/#/bakery/le-comte-de-champagne"
//   },
//   {
//     path: "/#/bakery/la-comtesse-de-trvise"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-la-comtesse"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-comtesse"
//   },
//   {
//     path: "/#/bakery/castillon-sarl"
//   },
//   {
//     path: "/#/bakery/boulangerie-castillon"
//   },
//   {
//     path: "/#/bakery/sarl-bruno-castillon"
//   },
//   {
//     path: "/#/bakery/boulangerie-les-dlices-de-lescarene"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-belvedere"
//   },
//   {
//     path: "/#/bakery/maison-roger-talant-belvedere"
//   },
//   {
//     path: "/#/bakery/le-belvedere"
//   },
//   {
//     path: "/#/bakery/boulangerie-belvdre"
//   },
//   {
//     path: "/#/bakery/maison-delaroche"
//   },
//   {
//     path: "/#/bakery/boulangerie-beuilloise"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-rigaud"
//   },
//   {
//     path: "/#/bakery/boulangerie-rigaux"
//   },
//   {
//     path: "/#/bakery/la-mie-disola"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-collongues"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-collongues"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-collongues"
//   },
//   {
//     path: "/#/bakery/boulangerie-carrosserie-barthes"
//   },
//   {
//     path: "/#/bakery/ptisserie-thiery"
//   },
//   {
//     path: "/#/bakery/patisserie-chocolaterie-hommel-thierry"
//   },
//   {
//     path: "/#/bakery/atelier-tiery"
//   },
//   {
//     path: "/#/bakery/thierry-marx-bakery-beaupassage"
//   },
//   {
//     path: "/#/bakery/thierry-meunier"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-bonson"
//   },
//   {
//     path: "/#/bakery/un-gars-dans-le-ptrin"
//   },
//   {
//     path: "/#/bakery/boulangerie-garsi"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-roquette"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-roquette"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-lemasson"
//   },
//   {
//     path: "/#/bakery/saulna"
//   },
//   {
//     path: "/#/bakery/maison-armand--ptisserie-boulangerie-nice-gambetta"
//   },
//   {
//     path: "/#/bakery/jmultari-vieux-nice"
//   },
//   {
//     path: "/#/bakery/patisserie-lac-nice-vieille-ville"
//   },
//   {
//     path: "/#/bakery/green-bagel-caf-nice-arenas"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-kayser--vieux-nice"
//   },
//   {
//     path: "/#/bakery/maison-caille"
//   },
//   {
//     path: "/#/bakery/le-fournil-caillerot"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-caillet"
//   },
//   {
//     path: "/#/bakery/maison-caillet"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-cousins"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-petite-suisse"
//   },
//   {
//     path: "/#/bakery/tendance-gourmande"
//   },
//   {
//     path: "/#/bakery/tendance-et-tradition"
//   },
//   {
//     path: "/#/bakery/boulangerie-tendances-gourmandes"
//   },
//   {
//     path: "/#/bakery/delicatisserie-141-avenue-de-verdun-chemin-des-montquartiers-batiment-b-trait-tendance--92130-issy-les-moulineaux"
//   },
//   {
//     path: "/#/bakery/boulangers-ptissiers-tendance-gourmande"
//   },
//   {
//     path: "/#/bakery/la-sigale-le-fournil"
//   },
//   {
//     path: "/#/bakery/lepi-du-broc"
//   },
//   {
//     path: "/#/bakery/dlices-caf-de-la-plage"
//   },
//   {
//     path: "/#/bakery/saint-blaise"
//   },
//   {
//     path: "/#/bakery/saint-blaise"
//   },
//   {
//     path: "/#/bakery/boulangerie-les-dlices-de-lescarene"
//   },
//   {
//     path: "/#/bakery/mariette-cours-vitton-lyon"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/mariette-cours-emile-zola-villeurbanne"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-mesnil"
//   },
//   {
//     path: "/#/bakery/boulanger-gourdon-patissier-au-petit-nice"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-sernin"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-pierre"
//   },
//   {
//     path: "/#/bakery/dunes-blanches-chez-pascal-saint-jean-de-luz"
//   },
//   {
//     path: "/#/bakery/flaviac"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-vincent"
//   },
//   {
//     path: "/#/bakery/fournil-saint-vincent"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-vincent"
//   },
//   {
//     path: "/#/bakery/st-vincent"
//   },
//   {
//     path: "/#/bakery/saint-symphorien"
//   },
//   {
//     path: "/#/bakery/boulangerie-ardoix"
//   },
//   {
//     path: "/#/bakery/maison-leroux"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-roux-concarneau"
//   },
//   {
//     path: "/#/bakery/leroux-patrick"
//   },
//   {
//     path: "/#/bakery/la-banetiere-bourg-de-peage"
//   },
//   {
//     path: "/#/bakery/artisan-banette-boulanger"
//   },
//   {
//     path: "/#/bakery/la-banette"
//   },
//   {
//     path: "/#/bakery/ma-boulangerie-caf-banette--saumur"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-boulogne-billancourt"
//   },
//   {
//     path: "/#/bakery/boutique-de-st-sauveur-de-la-ptisserie-mousnier-le-yeu"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-sauveur"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-breugnot"
//   },
//   {
//     path: "/#/bakery/saint-symphorien"
//   },
//   {
//     path: "/#/bakery/bergouli-sarl"
//   },
//   {
//     path: "/#/bakery/bergamote"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-breugnot"
//   },
//   {
//     path: "/#/bakery/saint-priest-pain-etablissements-charrier"
//   },
//   {
//     path: "/#/bakery/boulangerie-dayau"
//   },
//   {
//     path: "/#/bakery/boutique-de-st-sauveur-de-la-ptisserie-mousnier-le-yeu"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-sauveur"
//   },
//   {
//     path: "/#/bakery/leroux-patrick"
//   },
//   {
//     path: "/#/bakery/maison-leroux"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-roux-concarneau"
//   },
//   {
//     path: "/#/bakery/leroux-roger"
//   },
//   {
//     path: "/#/bakery/pralus-clermont-ferrand-ptisserie-chocolaterie"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-mauves"
//   },
//   {
//     path: "/#/bakery/ptisserie-des-mauves"
//   },
//   {
//     path: "/#/bakery/le-fournil-dozon"
//   },
//   {
//     path: "/#/bakery/franois-kouign-amann--crpes--gteaux-breton"
//   },
//   {
//     path: "/#/bakery/le-meilleur-de-la-patisserie"
//   },
//   {
//     path: "/#/bakery/la-maison-du-kougelhopf--ptisserie-buhler"
//   },
//   {
//     path: "/#/bakery/boulangerie-amoruso-herve"
//   },
//   {
//     path: "/#/bakery/ptisserie-lejeune"
//   },
//   {
//     path: "/#/bakery/patisserie-lejeune"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-patrick-et-batrice-rialland"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-jacques"
//   },
//   {
//     path: "/#/bakery/ptisserie-saint-jacques"
//   },
//   {
//     path: "/#/bakery/ptisserie-saint-jacques"
//   },
//   {
//     path: "/#/bakery/peyraud"
//   },
//   {
//     path: "/#/bakery/ptisserie-explore-anglet--maxime-raiff"
//   },
//   {
//     path: "/#/bakery/maison-planchot-la-roche-sur-yon"
//   },
//   {
//     path: "/#/bakery/a-deux-mains-la-rochelle"
//   },
//   {
//     path: "/#/bakery/boulangerie-dayau"
//   },
//   {
//     path: "/#/bakery/aux-saveurs-de-vernonnet"
//   },
//   {
//     path: "/#/bakery/boulangerie-ribes"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-borne"
//   },
//   {
//     path: "/#/bakery/la-parisienne-saint-germain"
//   },
//   {
//     path: "/#/bakery/ptisserie-michalak-l-saint-germain-des-prs"
//   },
//   {
//     path: "/#/bakery/la-parisienne-les-halles"
//   },
//   {
//     path: "/#/bakery/boulangerie-honorino-fonseca"
//   },
//   {
//     path: "/#/bakery/boulangerie-honorino-fonseca"
//   },
//   {
//     path: "/#/bakery/la-fonsoise"
//   },
//   {
//     path: "/#/bakery/la-fonsoise"
//   },
//   {
//     path: "/#/bakery/aux-dlices-sanilhacois"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-vincent"
//   },
//   {
//     path: "/#/bakery/fournil-saint-vincent"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-vincent"
//   },
//   {
//     path: "/#/bakery/st-vincent"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-saint-clair"
//   },
//   {
//     path: "/#/bakery/granges-croustillantes"
//   },
//   {
//     path: "/#/bakery/le-moulin-de-barnas"
//   },
//   {
//     path: "/#/bakery/boulangerie-grasset-bio-et-artisanale"
//   },
//   {
//     path: "/#/bakery/grasser-franck-jose"
//   },
//   {
//     path: "/#/bakery/fournil-boulangerie-grasset"
//   },
//   {
//     path: "/#/bakery/gras-david"
//   },
//   {
//     path: "/#/bakery/maison-gras-cur"
//   },
//   {
//     path: "/#/bakery/ptisserie-chalencon"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-breugnot"
//   },
//   {
//     path: "/#/bakery/les-macarons-de-joyeuse"
//   },
//   {
//     path: "/#/bakery/boulangerie-ange"
//   },
//   {
//     path: "/#/bakery/martial-champagne"
//   },
//   {
//     path: "/#/bakery/maison-asteria-by-jean-thomas-schneider"
//   },
//   {
//     path: "/#/bakery/aster"
//   },
//   {
//     path: "/#/bakery/mirabella"
//   },
//   {
//     path: "/#/bakery/miramel-cake-design"
//   },
//   {
//     path: "/#/bakery/boulangerie-miravel"
//   },
//   {
//     path: "/#/bakery/la-mirabelle"
//   },
//   {
//     path: "/#/bakery/madeleine-et-mirabelle"
//   },
//   {
//     path: "/#/bakery/boulangerie-prunet"
//   },
//   {
//     path: "/#/bakery/la-boule-dantan"
//   },
//   {
//     path: "/#/bakery/la-boule-ange"
//   },
//   {
//     path: "/#/bakery/boulangerie-les-trois-petits-bannetons"
//   },
//   {
//     path: "/#/bakery/coucou-biscuit"
//   },
//   {
//     path: "/#/bakery/coucagne--boulangerie-tranquille"
//   },
//   {
//     path: "/#/bakery/le-fournil-cabannais"
//   },
//   {
//     path: "/#/bakery/le-fournil-sarrassois"
//   },
//   {
//     path: "/#/bakery/la-sarrasine"
//   },
//   {
//     path: "/#/bakery/ptisserie-sarrazin-marc"
//   },
//   {
//     path: "/#/bakery/le-boulanger-de-st-jo"
//   },
//   {
//     path: "/#/bakery/boulangerie-chevallier"
//   },
//   {
//     path: "/#/bakery/boulangerie-pic"
//   },
//   {
//     path: "/#/bakery/maison-1830"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-joseph"
//   },
//   {
//     path: "/#/bakery/boulangerie-mont-moulin"
//   },
//   {
//     path: "/#/bakery/pioline-villecroix-floiras"
//   },
//   {
//     path: "/#/bakery/la-mie-vendenne"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-sommet"
//   },
//   {
//     path: "/#/bakery/lepi-cerie"
//   },
//   {
//     path: "/#/bakery/vion-olivier"
//   },
//   {
//     path: "/#/bakery/vion-olivier-jean-louis"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-labeaume"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-sommet"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-mesnil"
//   },
//   {
//     path: "/#/bakery/boulanger-gourdon-patissier-au-petit-nice"
//   },
//   {
//     path: "/#/bakery/la-ptisserie-cyril-lignac--saint-tropez"
//   },
//   {
//     path: "/#/bakery/la-ptisserie-cyril-lignac--saint-tropez-village"
//   },
//   {
//     path: "/#/bakery/au-pain-quotidien"
//   },
//   {
//     path: "/#/bakery/boulangerie-banette-maison-barthelemy-pizzeria-lannexe"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-cheylard-andr-laurent"
//   },
//   {
//     path: "/#/bakery/boulangerie-mont-moulin"
//   },
//   {
//     path: "/#/bakery/pioline-villecroix-floiras"
//   },
//   {
//     path: "/#/bakery/la-mie-vendenne"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-sommet"
//   },
//   {
//     path: "/#/bakery/rocher-des-pyrnes"
//   },
//   {
//     path: "/#/bakery/au-rocher-davon"
//   },
//   {
//     path: "/#/bakery/la-gustive-l-f-rochereau"
//   },
//   {
//     path: "/#/bakery/rochereau-franois-et-laurence"
//   },
//   {
//     path: "/#/bakery/ptisserie-rocher"
//   },
//   {
//     path: "/#/bakery/boulangerie-dayau"
//   },
//   {
//     path: "/#/bakery/boulangerie-mont-moulin"
//   },
//   {
//     path: "/#/bakery/pioline-villecroix-floiras"
//   },
//   {
//     path: "/#/bakery/la-mie-vendenne"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-sommet"
//   },
//   {
//     path: "/#/bakery/fantastiks-cakes"
//   },
//   {
//     path: "/#/bakery/la-fantasquerie-ptisserie-biscuiterie-jura-bletterans"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-lussassoise"
//   },
//   {
//     path: "/#/bakery/soyons-choux-lyon"
//   },
//   {
//     path: "/#/bakery/dooks-marseille-donuts"
//   },
//   {
//     path: "/#/bakery/marsellie"
//   },
//   {
//     path: "/#/bakery/marseille"
//   },
//   {
//     path: "/#/bakery/bonjour-marseille"
//   },
//   {
//     path: "/#/bakery/cookieland-marseille"
//   },
//   {
//     path: "/#/bakery/beaulieu"
//   },
//   {
//     path: "/#/bakery/le-beaulieu"
//   },
//   {
//     path: "/#/bakery/boulangerie-terre-de-beaulieu"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-beaulieu--14000"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-beau-lieu-des-pains"
//   },
//   {
//     path: "/#/bakery/xavier-brignon"
//   },
//   {
//     path: "/#/bakery/this-et-cie"
//   },
//   {
//     path: "/#/bakery/boulangerie-r-this"
//   },
//   {
//     path: "/#/bakery/maison-vallery"
//   },
//   {
//     path: "/#/bakery/la-fourne-lanonnaise"
//   },
//   {
//     path: "/#/bakery/fosse-aux-chnes"
//   },
//   {
//     path: "/#/bakery/fossey-frdrick"
//   },
//   {
//     path: "/#/bakery/l-atelier-fossey"
//   },
//   {
//     path: "/#/bakery/boulangerie-montgolfire"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-falaises"
//   },
//   {
//     path: "/#/bakery/authentique-mittelhausbergen-clickcollect"
//   },
//   {
//     path: "/#/bakery/authentic-donuts-boutique-emporter-service-vnementiel-pour-particuliers-et-professionnels"
//   },
//   {
//     path: "/#/bakery/authentik"
//   },
//   {
//     path: "/#/bakery/authentique-boulangerie--paris-stphane"
//   },
//   {
//     path: "/#/bakery/lauthentique-boulangerie"
//   },
//   {
//     path: "/#/bakery/aurlien-cohen-ptisserie-chocolaterie--masterclass"
//   },
//   {
//     path: "/#/bakery/aurlie-ribay-boulangre"
//   },
//   {
//     path: "/#/bakery/aurlie-et-franck-buchberger"
//   },
//   {
//     path: "/#/bakery/aurlien-garcia--artisan-ptissier"
//   },
//   {
//     path: "/#/bakery/aurlie-et-cdric-delhaye-provocateurs-de-gourmandises"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-maison-kuntz"
//   },
//   {
//     path: "/#/bakery/auger-michel-ptissier-chocolatier"
//   },
//   {
//     path: "/#/bakery/atelier-auger"
//   },
//   {
//     path: "/#/bakery/maison-augereau"
//   },
//   {
//     path: "/#/bakery/le-patton"
//   },
//   {
//     path: "/#/bakery/boulangerie-sery-moreuil"
//   },
//   {
//     path: "/#/bakery/serendipity"
//   },
//   {
//     path: "/#/bakery/serenity-biscuits"
//   },
//   {
//     path: "/#/bakery/sereivan"
//   },
//   {
//     path: "/#/bakery/serevia"
//   },
//   {
//     path: "/#/bakery/au-fournil-dautry"
//   },
//   {
//     path: "/#/bakery/gomont-jean-franois"
//   },
//   {
//     path: "/#/bakery/doux-nuts-coffee-v2-donuts-fait-maison"
//   },
//   {
//     path: "/#/bakery/douxnuts-coffee-donuts-fait-maison"
//   },
//   {
//     path: "/#/bakery/au-doux-palais"
//   },
//   {
//     path: "/#/bakery/au-doux-pch"
//   },
//   {
//     path: "/#/bakery/aux-doux-palais-maison-roy"
//   },
//   {
//     path: "/#/bakery/l-aire-dambrail"
//   },
//   {
//     path: "/#/bakery/aire-boulange"
//   },
//   {
//     path: "/#/bakery/les-airettes"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-airel"
//   },
//   {
//     path: "/#/bakery/aire-de-repos"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-marcq"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--puiseux-pontoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-edith-lor"
//   },
//   {
//     path: "/#/bakery/la-biscuiterie-de-saint-aignan"
//   },
//   {
//     path: "/#/bakery/-mont-dlice"
//   },
//   {
//     path: "/#/bakery/le-palais-des-pains"
//   },
//   {
//     path: "/#/bakery/sonia-assia"
//   },
//   {
//     path: "/#/bakery/boulangerie-sonia-et-fabrice"
//   },
//   {
//     path: "/#/bakery/le-son-de-bl"
//   },
//   {
//     path: "/#/bakery/warth-sonia"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-sonza"
//   },
//   {
//     path: "/#/bakery/boulangerie-dricourt"
//   },
//   {
//     path: "/#/bakery/boulangerie-dricourt-jrme"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-des-dames"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-signy"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-thermes"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-thermes"
//   },
//   {
//     path: "/#/bakery/le-petit-landais"
//   },
//   {
//     path: "/#/bakery/le-ptit-galu"
//   },
//   {
//     path: "/#/bakery/le-petit-petrin"
//   },
//   {
//     path: "/#/bakery/le-petit-fournil-de-louvigny"
//   },
//   {
//     path: "/#/bakery/le-ptit-fournil-du-marais"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-chez-deville"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-chez-deville"
//   },
//   {
//     path: "/#/bakery/le-petit-landais"
//   },
//   {
//     path: "/#/bakery/le-ptit-galu"
//   },
//   {
//     path: "/#/bakery/le-petit-petrin"
//   },
//   {
//     path: "/#/bakery/le-petit-fournil-de-louvigny"
//   },
//   {
//     path: "/#/bakery/le-ptit-fournil-du-marais"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-carignan"
//   },
//   {
//     path: "/#/bakery/suzanne-briocherie"
//   },
//   {
//     path: "/#/bakery/suzanne-jojo"
//   },
//   {
//     path: "/#/bakery/maison-suzanne"
//   },
//   {
//     path: "/#/bakery/m-arnaud-suzanne-arnaud"
//   },
//   {
//     path: "/#/bakery/boulangerie-suzanne-fabrice-louis-olivier"
//   },
//   {
//     path: "/#/bakery/boulangerie-perthes"
//   },
//   {
//     path: "/#/bakery/grandpre-vincennes"
//   },
//   {
//     path: "/#/bakery/boulangerie-grandpr"
//   },
//   {
//     path: "/#/bakery/stoney-clove-bakery"
//   },
//   {
//     path: "/#/bakery/stone-that-turns"
//   },
//   {
//     path: "/#/bakery/la-croisire-gourmande"
//   },
//   {
//     path: "/#/bakery/sylvana-briocherie-gonfle"
//   },
//   {
//     path: "/#/bakery/sylvana-briocherie-festive"
//   },
//   {
//     path: "/#/bakery/sylvain-marie"
//   },
//   {
//     path: "/#/bakery/sylvie-sarda-artisan-ptissier"
//   },
//   {
//     path: "/#/bakery/sylvie-et-didier-giraud"
//   },
//   {
//     path: "/#/bakery/les-sabls-dasnelles"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-ursulines"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-fournil-belloc-et-fils"
//   },
//   {
//     path: "/#/bakery/segura-christophe"
//   },
//   {
//     path: "/#/bakery/dunes-blanches-chez-pascal-bordeaux"
//   },
//   {
//     path: "/#/bakery/dunes-blanches"
//   },
//   {
//     path: "/#/bakery/dunes-blanches-chez-pascal-arcachon"
//   },
//   {
//     path: "/#/bakery/dunes-blanches-chez-pascal-biarritz"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-bastide"
//   },
//   {
//     path: "/#/bakery/chez-louise-mandelieu-tourrades"
//   },
//   {
//     path: "/#/bakery/fournil-de-la-bastide--var-83840"
//   },
//   {
//     path: "/#/bakery/le-fournil-demy"
//   },
//   {
//     path: "/#/bakery/boulangerie-ugo"
//   },
//   {
//     path: "/#/bakery/distributeur-de-baguettes-fournil-de-la-tour--plormel"
//   },
//   {
//     path: "/#/bakery/au-pain-dautrefois-rocabey"
//   },
//   {
//     path: "/#/bakery/boulangerie-eddy-lger"
//   },
//   {
//     path: "/#/bakery/febre--la-tour-de-salvagny"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-soullans"
//   },
//   {
//     path: "/#/bakery/suzanne-briocherie"
//   },
//   {
//     path: "/#/bakery/suzanne-jojo"
//   },
//   {
//     path: "/#/bakery/maison-suzanne"
//   },
//   {
//     path: "/#/bakery/m-arnaud-suzanne-arnaud"
//   },
//   {
//     path: "/#/bakery/boulangerie-suzanne-fabrice-louis-olivier"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-rouzeau"
//   },
//   {
//     path: "/#/bakery/boulangerie--ptisserie-laffite"
//   },
//   {
//     path: "/#/bakery/la-cazaux-pains"
//   },
//   {
//     path: "/#/bakery/big-or-pain"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-laiguillon"
//   },
//   {
//     path: "/#/bakery/boulangerie-utopie"
//   },
//   {
//     path: "/#/bakery/boulangerie-bomie-louvre-rivoli"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-marquise"
//   },
//   {
//     path: "/#/bakery/boulangerie-moderne"
//   },
//   {
//     path: "/#/bakery/la-boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-tybalt-nicolas"
//   },
//   {
//     path: "/#/bakery/la-tabl-des-saveurs"
//   },
//   {
//     path: "/#/bakery/la-table-du-boulanger"
//   },
//   {
//     path: "/#/bakery/tableau-en-sucre"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-marquise"
//   },
//   {
//     path: "/#/bakery/la-table-des-coles-brasserie--brunch--boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-massat"
//   },
//   {
//     path: "/#/bakery/sarl-jolibert-massat-sarl"
//   },
//   {
//     path: "/#/bakery/maison-dally--mazeres-lezons"
//   },
//   {
//     path: "/#/bakery/happy-cookie"
//   },
//   {
//     path: "/#/bakery/happy-bakery-coffee"
//   },
//   {
//     path: "/#/bakery/happy-donuts-le-havre-coty"
//   },
//   {
//     path: "/#/bakery/happy-truck"
//   },
//   {
//     path: "/#/bakery/happy-day-cake"
//   },
//   {
//     path: "/#/bakery/oustau-nouguier"
//   },
//   {
//     path: "/#/bakery/loustalet"
//   },
//   {
//     path: "/#/bakery/loustal-doussat"
//   },
//   {
//     path: "/#/bakery/sarl-loustal-doussat"
//   },
//   {
//     path: "/#/bakery/pch-mignon"
//   },
//   {
//     path: "/#/bakery/pchs-gourmands-belfort"
//   },
//   {
//     path: "/#/bakery/pech-mignon"
//   },
//   {
//     path: "/#/bakery/pchs-gourmands"
//   },
//   {
//     path: "/#/bakery/pchs-gourmands-lisle-sur-la-sorgue"
//   },
//   {
//     path: "/#/bakery/camon-philippe"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-bastide"
//   },
//   {
//     path: "/#/bakery/chez-louise-mandelieu-tourrades"
//   },
//   {
//     path: "/#/bakery/fournil-de-la-bastide--var-83840"
//   },
//   {
//     path: "/#/bakery/le-fournil-demy"
//   },
//   {
//     path: "/#/bakery/boulangerie-ugo"
//   },
//   {
//     path: "/#/bakery/la-mie-de-pain-lescure-dalbigeois"
//   },
//   {
//     path: "/#/bakery/boulangerie-buret"
//   },
//   {
//     path: "/#/bakery/ptisserie-chocolaterie-sburet-blois"
//   },
//   {
//     path: "/#/bakery/sophie-lebreuilly"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-bastide"
//   },
//   {
//     path: "/#/bakery/chez-louise-mandelieu-tourrades"
//   },
//   {
//     path: "/#/bakery/fournil-de-la-bastide--var-83840"
//   },
//   {
//     path: "/#/bakery/le-fournil-demy"
//   },
//   {
//     path: "/#/bakery/boulangerie-ugo"
//   },
//   {
//     path: "/#/bakery/la-tourtire-landaise"
//   },
//   {
//     path: "/#/bakery/distributeur-de-baguettes-fournil-de-la-tour--plormel"
//   },
//   {
//     path: "/#/bakery/au-pain-dautrefois-rocabey"
//   },
//   {
//     path: "/#/bakery/boulangerie-eddy-lger"
//   },
//   {
//     path: "/#/bakery/la-tourte-de-limeyrat"
//   },
//   {
//     path: "/#/bakery/boulangerie-ange"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-la-galerie"
//   },
//   {
//     path: "/#/bakery/dfc-gastel"
//   },
//   {
//     path: "/#/bakery/toc-toque-boulangerie"
//   },
//   {
//     path: "/#/bakery/cantegrel"
//   },
//   {
//     path: "/#/bakery/fournil-de-canteloup"
//   },
//   {
//     path: "/#/bakery/maison-ponzoni-cantebonne"
//   },
//   {
//     path: "/#/bakery/boulangerie-cantet"
//   },
//   {
//     path: "/#/bakery/fournil-paresys"
//   },
//   {
//     path: "/#/bakery/la-valse-des-pains"
//   },
//   {
//     path: "/#/bakery/la-valse-des-pains"
//   },
//   {
//     path: "/#/bakery/la-valse-des-pains"
//   },
//   {
//     path: "/#/bakery/vals"
//   },
//   {
//     path: "/#/bakery/la-valse-des-bls"
//   },
//   {
//     path: "/#/bakery/le-fondant-baulois-nantes"
//   },
//   {
//     path: "/#/bakery/le-fondant-baulois"
//   },
//   {
//     path: "/#/bakery/le-fondant-baulois"
//   },
//   {
//     path: "/#/bakery/le-fondant-baulois"
//   },
//   {
//     path: "/#/bakery/la-toque-cuivre"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-cave-pains"
//   },
//   {
//     path: "/#/bakery/la-cave-pains"
//   },
//   {
//     path: "/#/bakery/la-cave-a-pain"
//   },
//   {
//     path: "/#/bakery/la-cave-ptisseries"
//   },
//   {
//     path: "/#/bakery/earl-lacave-francis"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-bastide"
//   },
//   {
//     path: "/#/bakery/chez-louise-mandelieu-tourrades"
//   },
//   {
//     path: "/#/bakery/fournil-de-la-bastide--var-83840"
//   },
//   {
//     path: "/#/bakery/le-fournil-demy"
//   },
//   {
//     path: "/#/bakery/boulangerie-ugo"
//   },
//   {
//     path: "/#/bakery/boulangerie-aigues-vives-pains-et-gourmandises"
//   },
//   {
//     path: "/#/bakery/le-pain-pascal"
//   },
//   {
//     path: "/#/bakery/au-chant-du-moulin"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-verdun"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-bastide"
//   },
//   {
//     path: "/#/bakery/chez-louise-mandelieu-tourrades"
//   },
//   {
//     path: "/#/bakery/fournil-de-la-bastide--var-83840"
//   },
//   {
//     path: "/#/bakery/le-fournil-demy"
//   },
//   {
//     path: "/#/bakery/boulangerie-ugo"
//   },
//   {
//     path: "/#/bakery/sembat"
//   },
//   {
//     path: "/#/bakery/semidis"
//   },
//   {
//     path: "/#/bakery/semap"
//   },
//   {
//     path: "/#/bakery/semercioglu"
//   },
//   {
//     path: "/#/bakery/les-semeurs-de-pains"
//   },
//   {
//     path: "/#/bakery/au-ptrin-du-matin-boulangerie--ptisserie--viennoiserie--sandwicherie"
//   },
//   {
//     path: "/#/bakery/maison-boulay"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-charlie-et-angel-tain-lhermitage"
//   },
//   {
//     path: "/#/bakery/maison-pascalis--tain-lhermitage"
//   },
//   {
//     path: "/#/bakery/legrand"
//   },
//   {
//     path: "/#/bakery/pain-dalouette"
//   },
//   {
//     path: "/#/bakery/soraya-et-ses-gteaux"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-maison-sordillon--provence"
//   },
//   {
//     path: "/#/bakery/sorin-gilles-gilles"
//   },
//   {
//     path: "/#/bakery/boulangerie-laurent-soro"
//   },
//   {
//     path: "/#/bakery/goulier"
//   },
//   {
//     path: "/#/bakery/cosette"
//   },
//   {
//     path: "/#/bakery/cosy-boulangerie-bio-ptisserie"
//   },
//   {
//     path: "/#/bakery/boulangerie-coste"
//   },
//   {
//     path: "/#/bakery/coste-herv"
//   },
//   {
//     path: "/#/bakery/fournil-moulin-neuf"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-moulin-neuf"
//   },
//   {
//     path: "/#/bakery/boulangerie-moulin-neuf-pain-bio-cuit-au-feu-de-bois"
//   },
//   {
//     path: "/#/bakery/boulangerie-dosda"
//   },
//   {
//     path: "/#/bakery/ganache"
//   },
//   {
//     path: "/#/bakery/ganachou"
//   },
//   {
//     path: "/#/bakery/ganache-cabosse"
//   },
//   {
//     path: "/#/bakery/isabelle-et-valrie-ganachaud"
//   },
//   {
//     path: "/#/bakery/ganache-cration"
//   },
//   {
//     path: "/#/bakery/aux-saveurs-de-prat"
//   },
//   {
//     path: "/#/bakery/au-virage-des-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie--maison-lasserre"
//   },
//   {
//     path: "/#/bakery/ptisserie-maison-lasserre"
//   },
//   {
//     path: "/#/bakery/le-plaisir-sucr"
//   },
//   {
//     path: "/#/bakery/le-plaisir-du-pain-rafflegeau-pascal"
//   },
//   {
//     path: "/#/bakery/le-plaisir-des-gourmands"
//   },
//   {
//     path: "/#/bakery/le-plaisir-du-pain"
//   },
//   {
//     path: "/#/bakery/le-plaisir-du-pain"
//   },
//   {
//     path: "/#/bakery/le-fournil-dantan-coussay-les-bois"
//   },
//   {
//     path: "/#/bakery/boulangerie-les-bls-banette-clermont-ferrand"
//   },
//   {
//     path: "/#/bakery/donuts-rpublique--clermont-ferrand"
//   },
//   {
//     path: "/#/bakery/20-rue-des-gras-63000-clermont-ferrand"
//   },
//   {
//     path: "/#/bakery/atelier-bon-pain-vivant-gourmandises-clermont-ferrand"
//   },
//   {
//     path: "/#/bakery/aux-merveilleux-de-fred"
//   },
//   {
//     path: "/#/bakery/aux-merveilleux-de-fred"
//   },
//   {
//     path: "/#/bakery/aux-merveilleux-de-fred"
//   },
//   {
//     path: "/#/bakery/aux-merveilleux-de-fred"
//   },
//   {
//     path: "/#/bakery/aux-merveilleux-de-fred"
//   },
//   {
//     path: "/#/bakery/soulatges-sarl"
//   },
//   {
//     path: "/#/bakery/boulange-ptiss-soulard"
//   },
//   {
//     path: "/#/bakery/soulat-jean-philippe"
//   },
//   {
//     path: "/#/bakery/boulangerie-soulas"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-fontaine"
//   },
//   {
//     path: "/#/bakery/la-fontaine-gourmande"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-de-la-fontaine-michalon"
//   },
//   {
//     path: "/#/bakery/fontaine-de-vaucluse"
//   },
//   {
//     path: "/#/bakery/la-fontaine-aux-pains"
//   },
//   {
//     path: "/#/bakery/sarl-boulangerie-palisse"
//   },
//   {
//     path: "/#/bakery/maison-paroty-dampierre"
//   },
//   {
//     path: "/#/bakery/ptisserie-bourguignon-metz"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-bourguignon"
//   },
//   {
//     path: "/#/bakery/societe-bourguignonne-de-patisserie"
//   },
//   {
//     path: "/#/bakery/maison-bourguignon"
//   },
//   {
//     path: "/#/bakery/bourguignon-claude"
//   },
//   {
//     path: "/#/bakery/petit-jean--le-maupas"
//   },
//   {
//     path: "/#/bakery/du-moulin-au-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-chtres--maison-rouge"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-vulaines"
//   },
//   {
//     path: "/#/bakery/au-faim-palais"
//   },
//   {
//     path: "/#/bakery/les-douceurs-du-chene"
//   },
//   {
//     path: "/#/bakery/isle-aux-pains"
//   },
//   {
//     path: "/#/bakery/lisle-aux-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-rouget--lisle-adam"
//   },
//   {
//     path: "/#/bakery/lsle-adam"
//   },
//   {
//     path: "/#/bakery/racines-urbaines-boulangerie-artisanale"
//   },
//   {
//     path: "/#/bakery/boulangerie-racines"
//   },
//   {
//     path: "/#/bakery/pain-racine"
//   },
//   {
//     path: "/#/bakery/des-racines-et-du-pain"
//   },
//   {
//     path: "/#/bakery/mergey-gerard-maurice-eugene"
//   },
//   {
//     path: "/#/bakery/boulangerie-gerard-mergey"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-mdivale"
//   },
//   {
//     path: "/#/bakery/boulangerie-hardy-brienne-le-chteau"
//   },
//   {
//     path: "/#/bakery/defert-yanisse"
//   },
//   {
//     path: "/#/bakery/maison-dor"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-brienne-le-chteau"
//   },
//   {
//     path: "/#/bakery/les-dlices-des-pains"
//   },
//   {
//     path: "/#/bakery/la-grande-boulangerie"
//   },
//   {
//     path: "/#/bakery/la-petite-biscuiterie"
//   },
//   {
//     path: "/#/bakery/le-fournil-damancey-patrice"
//   },
//   {
//     path: "/#/bakery/rennes-81"
//   },
//   {
//     path: "/#/bakery/la-mie-cline-rennes-pllo"
//   },
//   {
//     path: "/#/bakery/vaudescal-laurent"
//   },
//   {
//     path: "/#/bakery/boulangerie-bca"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-fresn"
//   },
//   {
//     path: "/#/bakery/salon-cacaot"
//   },
//   {
//     path: "/#/bakery/salon-de-th--ptisserie-des-tuileries"
//   },
//   {
//     path: "/#/bakery/salon-de-th-patisserie-le-st-antoine"
//   },
//   {
//     path: "/#/bakery/salon-de-provence"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-moussey"
//   },
//   {
//     path: "/#/bakery/le-pavillon-des-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-pavillon-gourmet"
//   },
//   {
//     path: "/#/bakery/pavillon-sucr"
//   },
//   {
//     path: "/#/bakery/boulangerie-coustenoble"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-la-trainelloise"
//   },
//   {
//     path: "/#/bakery/troyes"
//   },
//   {
//     path: "/#/bakery/la-mie-caline-troyes-croncels"
//   },
//   {
//     path: "/#/bakery/les-troyes-delices"
//   },
//   {
//     path: "/#/bakery/la-fert-mac"
//   },
//   {
//     path: "/#/bakery/maison-saint-thibault"
//   },
//   {
//     path: "/#/bakery/maison-des-champs"
//   },
//   {
//     path: "/#/bakery/maison-des-champs"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-des-champs"
//   },
//   {
//     path: "/#/bakery/maison-deschamps--boulangerie-caf-bio"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-maison-deschamps"
//   },
//   {
//     path: "/#/bakery/maison-caffet"
//   },
//   {
//     path: "/#/bakery/ptisserie-leroy-benoit"
//   },
//   {
//     path: "/#/bakery/lavaud-boulangerie-ptisserie-sas"
//   },
//   {
//     path: "/#/bakery/lavaud-philippe"
//   },
//   {
//     path: "/#/bakery/lavaud"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-lavaux"
//   },
//   {
//     path: "/#/bakery/etablissements-lavot-robert-et-fils"
//   },
//   {
//     path: "/#/bakery/aulnay-sous-bois"
//   },
//   {
//     path: "/#/bakery/la-aulnaysienne"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-flouret"
//   },
//   {
//     path: "/#/bakery/maisons-gourmandes"
//   },
//   {
//     path: "/#/bakery/maisonsantos"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-bcam--brissac"
//   },
//   {
//     path: "/#/bakery/el-makoudi-boulangerie--ptisserie"
//   },
//   {
//     path: "/#/bakery/bchu"
//   },
//   {
//     path: "/#/bakery/sophie-lebreuilly"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-lysel"
//   },
//   {
//     path: "/#/bakery/caillaux-jerome"
//   },
//   {
//     path: "/#/bakery/boulangerie-caillat"
//   },
//   {
//     path: "/#/bakery/biscuiterie-des-treilles"
//   },
//   {
//     path: "/#/bakery/boulangerie-rivela"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-chalabre"
//   },
//   {
//     path: "/#/bakery/fermes-de-laubette-et-du-cheval-gris--monzein-benoit-et-laurie--garandet-charles"
//   },
//   {
//     path: "/#/bakery/la-feuillantine"
//   },
//   {
//     path: "/#/bakery/feuilletine"
//   },
//   {
//     path: "/#/bakery/ptisserie-artisanale-les-feuillantines"
//   },
//   {
//     path: "/#/bakery/la-feuillantine"
//   },
//   {
//     path: "/#/bakery/pauline"
//   },
//   {
//     path: "/#/bakery/boulangerie-pauline-et-steve"
//   },
//   {
//     path: "/#/bakery/boulangerie-pauline"
//   },
//   {
//     path: "/#/bakery/pauline-boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-pauline"
//   },
//   {
//     path: "/#/bakery/salzard-christophe-et-fabienne"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-ker-alppain"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-ker-alppain"
//   },
//   {
//     path: "/#/bakery/caves-et-terroirs"
//   },
//   {
//     path: "/#/bakery/caves-et-terroirs"
//   },
//   {
//     path: "/#/bakery/gardien"
//   },
//   {
//     path: "/#/bakery/le-palais-gourmand-cazilhac"
//   },
//   {
//     path: "/#/bakery/maison-marques-levis"
//   },
//   {
//     path: "/#/bakery/lacombe-cyril-ptisseriechocolaterie"
//   },
//   {
//     path: "/#/bakery/lacombe-jacques"
//   },
//   {
//     path: "/#/bakery/lacombet-frere-et-soeur"
//   },
//   {
//     path: "/#/bakery/au-palet-dor"
//   },
//   {
//     path: "/#/bakery/maison-des-champs"
//   },
//   {
//     path: "/#/bakery/maison-des-champs"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-pref"
//   },
//   {
//     path: "/#/bakery/catherine-kelsen-ptisserie--tablissement-gaultmillau"
//   },
//   {
//     path: "/#/bakery/point-chaud-boulangerie-patisserie-vuillemard-nicola"
//   },
//   {
//     path: "/#/bakery/pain-dor"
//   },
//   {
//     path: "/#/bakery/la-parisienne-poissonnire"
//   },
//   {
//     path: "/#/bakery/saint-denis-pain-chaud"
//   },
//   {
//     path: "/#/bakery/la-rose-de-tunis--saint-denis"
//   },
//   {
//     path: "/#/bakery/poly-didier"
//   },
//   {
//     path: "/#/bakery/polygone"
//   },
//   {
//     path: "/#/bakery/fournil-du-polygone--boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/poly-bakes"
//   },
//   {
//     path: "/#/bakery/boulangerie-fitour"
//   },
//   {
//     path: "/#/bakery/boulangerie-marsan"
//   },
//   {
//     path: "/#/bakery/ptisserie-giannelli"
//   },
//   {
//     path: "/#/bakery/berges"
//   },
//   {
//     path: "/#/bakery/boulangerie-ange"
//   },
//   {
//     path: "/#/bakery/la-tourtire-mont-de-marsan"
//   },
//   {
//     path: "/#/bakery/bramerie-joseph"
//   },
//   {
//     path: "/#/bakery/la-nouvelle-baguette"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-fournil-saint-andr-laval"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-fournil-saint-andr-skate-park"
//   },
//   {
//     path: "/#/bakery/lagrasse"
//   },
//   {
//     path: "/#/bakery/le-ptrin-de-jonquires"
//   },
//   {
//     path: "/#/bakery/faysi-tis"
//   },
//   {
//     path: "/#/bakery/farine"
//   },
//   {
//     path: "/#/bakery/farinoman-fou-aix"
//   },
//   {
//     path: "/#/bakery/farine-et-cannelle"
//   },
//   {
//     path: "/#/bakery/farine"
//   },
//   {
//     path: "/#/bakery/gourmandises-leucate"
//   },
//   {
//     path: "/#/bakery/planete-donuts"
//   },
//   {
//     path: "/#/bakery/planet-macarons"
//   },
//   {
//     path: "/#/bakery/planete-pain"
//   },
//   {
//     path: "/#/bakery/plante-levain"
//   },
//   {
//     path: "/#/bakery/boulangerie-planet"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/boulangerie-aragonais"
//   },
//   {
//     path: "/#/bakery/sucrment-gourmand"
//   },
//   {
//     path: "/#/bakery/ptisserie-maison-gaillardo"
//   },
//   {
//     path: "/#/bakery/boulangerie-aragon"
//   },
//   {
//     path: "/#/bakery/le-fournil-saint-louis"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-sonia-et-dom"
//   },
//   {
//     path: "/#/bakery/cordier-grgory"
//   },
//   {
//     path: "/#/bakery/alban-kuntz-versailles-st-louis"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-louis"
//   },
//   {
//     path: "/#/bakery/gourmandises-leucate"
//   },
//   {
//     path: "/#/bakery/boulangerie-banette--le-petit-brivadois"
//   },
//   {
//     path: "/#/bakery/maison-ferrand"
//   },
//   {
//     path: "/#/bakery/maison-ferrante"
//   },
//   {
//     path: "/#/bakery/la-palme-dor"
//   },
//   {
//     path: "/#/bakery/boulangerie-artisanale-la-palme-dor"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-montjoie"
//   },
//   {
//     path: "/#/bakery/canet"
//   },
//   {
//     path: "/#/bakery/canet"
//   },
//   {
//     path: "/#/bakery/ptisserie-grald-canet"
//   },
//   {
//     path: "/#/bakery/patisserie-canet"
//   },
//   {
//     path: "/#/bakery/biscuiterie-des-treilles"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-saturnin"
//   },
//   {
//     path: "/#/bakery/au-bon-pain-du-lvzou"
//   },
//   {
//     path: "/#/bakery/le-quinssainois"
//   },
//   {
//     path: "/#/bakery/farine-et-vanille--fournil-de-quinsac"
//   },
//   {
//     path: "/#/bakery/boulangerie-cornu"
//   },
//   {
//     path: "/#/bakery/la-grandboulangerie"
//   },
//   {
//     path: "/#/bakery/le-fournil-villersois"
//   },
//   {
//     path: "/#/bakery/la-martrinole-sarl"
//   },
//   {
//     path: "/#/bakery/la-fouace-de-laguiole--maison-roux"
//   },
//   {
//     path: "/#/bakery/latelier-original-la-loubire"
//   },
//   {
//     path: "/#/bakery/paul--perpignan-louis-blanc"
//   },
//   {
//     path: "/#/bakery/paul"
//   },
//   {
//     path: "/#/bakery/mr-laurent-stephane"
//   },
//   {
//     path: "/#/bakery/patisserie-clement"
//   },
//   {
//     path: "/#/bakery/lepi-du-rouergue--4-saisons"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-marc"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/sarl-cavalier-la-fouace-de-campagnac"
//   },
//   {
//     path: "/#/bakery/cavalier-la-fouace-de-campagnac"
//   },
//   {
//     path: "/#/bakery/boulangerie-plaisance"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-plaisance-maison-nol"
//   },
//   {
//     path: "/#/bakery/cocorosa-donuts-bagels"
//   },
//   {
//     path: "/#/bakery/maison-crespin"
//   },
//   {
//     path: "/#/bakery/crespain"
//   },
//   {
//     path: "/#/bakery/lacan-jean-raymond"
//   },
//   {
//     path: "/#/bakery/firmin"
//   },
//   {
//     path: "/#/bakery/firmin"
//   },
//   {
//     path: "/#/bakery/firmin-pains-ptisserie"
//   },
//   {
//     path: "/#/bakery/firmin-boulangerie"
//   },
//   {
//     path: "/#/bakery/firmin"
//   },
//   {
//     path: "/#/bakery/moulin-de-paiou-esplanade"
//   },
//   {
//     path: "/#/bakery/fournil-de-la-mourette"
//   },
//   {
//     path: "/#/bakery/mouret-bernard"
//   },
//   {
//     path: "/#/bakery/les-2-cabanes"
//   },
//   {
//     path: "/#/bakery/les-cabanes-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-moustier"
//   },
//   {
//     path: "/#/bakery/fournil-des-3-moulins"
//   },
//   {
//     path: "/#/bakery/fournil-de-sainte-marguerite"
//   },
//   {
//     path: "/#/bakery/cornard-dominique"
//   },
//   {
//     path: "/#/bakery/boulangerie-sainte-marguerite"
//   },
//   {
//     path: "/#/bakery/latelier-du-bl"
//   },
//   {
//     path: "/#/bakery/boulangerie-aubineau--lquipe-du-fournil"
//   },
//   {
//     path: "/#/bakery/boulangerie-aubin"
//   },
//   {
//     path: "/#/bakery/nanteuil-les-pains"
//   },
//   {
//     path: "/#/bakery/baguette-eclair--nanterre-universitboulanger-patissier"
//   },
//   {
//     path: "/#/bakery/boulangerie-nantilly"
//   },
//   {
//     path: "/#/bakery/la-nantellienne"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--nanterre"
//   },
//   {
//     path: "/#/bakery/boulangerie-dlice-de-st-cme"
//   },
//   {
//     path: "/#/bakery/cassis-framboise"
//   },
//   {
//     path: "/#/bakery/cassi-ptisserie"
//   },
//   {
//     path: "/#/bakery/la-cassissine"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-quentin"
//   },
//   {
//     path: "/#/bakery/la-cure-gourmande-marseille--fabricant-de-navettes"
//   },
//   {
//     path: "/#/bakery/les-2-cabanes"
//   },
//   {
//     path: "/#/bakery/les-cabanes-pain"
//   },
//   {
//     path: "/#/bakery/biscuits-charly"
//   },
//   {
//     path: "/#/bakery/lorgonnaise-boulangerie-patisserie"
//   },
//   {
//     path: "/#/bakery/sarl-chez-remy-et-martine-remy"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-provence-mazza-et-fils"
//   },
//   {
//     path: "/#/bakery/salon-de-provence"
//   },
//   {
//     path: "/#/bakery/maison-cerealia-istres"
//   },
//   {
//     path: "/#/bakery/maison-novs"
//   },
//   {
//     path: "/#/bakery/maison-zw--aix-en-provence"
//   },
//   {
//     path: "/#/bakery/les-macarons-de-caroline-aix-en-provence"
//   },
//   {
//     path: "/#/bakery/mr-chou-aix-en-provence-sextius"
//   },
//   {
//     path: "/#/bakery/dounuts-project--donuts-aix-en-provence"
//   },
//   {
//     path: "/#/bakery/green-bagel-caf-aix-en-provence"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-oliviers"
//   },
//   {
//     path: "/#/bakery/les-oliviers-de-brassagou"
//   },
//   {
//     path: "/#/bakery/les-macarons-de-caroline-bouc-bel-air"
//   },
//   {
//     path: "/#/bakery/boulangerie-paul"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-langry"
//   },
//   {
//     path: "/#/bakery/le-four-a-bois"
//   },
//   {
//     path: "/#/bakery/salon-de-provence"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-ceyrestenne"
//   },
//   {
//     path: "/#/bakery/latelier-antik"
//   },
//   {
//     path: "/#/bakery/marseille-jacques-bernard"
//   },
//   {
//     path: "/#/bakery/la-fourne-de-saint-louis"
//   },
//   {
//     path: "/#/bakery/banette-de-saint--louis"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-maillane"
//   },
//   {
//     path: "/#/bakery/fournil-de-saint-mitre"
//   },
//   {
//     path: "/#/bakery/ce-bonheur-l--boulangerie--restauration-rapide"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-talmelire"
//   },
//   {
//     path: "/#/bakery/boulangerie-artisanale-du-rempart"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-provence-mazza-et-fils"
//   },
//   {
//     path: "/#/bakery/salon-de-provence"
//   },
//   {
//     path: "/#/bakery/biscuits-charly"
//   },
//   {
//     path: "/#/bakery/martigues"
//   },
//   {
//     path: "/#/bakery/le-moulin-de-port-de-bouc"
//   },
//   {
//     path: "/#/bakery/la-pannetiere"
//   },
//   {
//     path: "/#/bakery/paul-la-ciotat-avenue-ernest-subilia"
//   },
//   {
//     path: "/#/bakery/la-fabrique-la-ciotat-matagots"
//   },
//   {
//     path: "/#/bakery/au-grs-du-pain"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-gare-trets"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-fontvieille"
//   },
//   {
//     path: "/#/bakery/jean-le-boulanger"
//   },
//   {
//     path: "/#/bakery/le-fournil-saintois-maitre-artisan"
//   },
//   {
//     path: "/#/bakery/boulangerie-pain-2-caphan"
//   },
//   {
//     path: "/#/bakery/la-fabrique-du-boulanger"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-plaisance"
//   },
//   {
//     path: "/#/bakery/maison-potereau-boulangerie"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/maison-grandsagne"
//   },
//   {
//     path: "/#/bakery/grand-pre-jules-nemours"
//   },
//   {
//     path: "/#/bakery/grande-saveur-coutiches"
//   },
//   {
//     path: "/#/bakery/grandmengin-emmanuel"
//   },
//   {
//     path: "/#/bakery/le-moulin-du-vieux-bourg"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-yaroma"
//   },
//   {
//     path: "/#/bakery/boulangerie-torres-du-vieux-bourg"
//   },
//   {
//     path: "/#/bakery/aux-tendres-epis"
//   },
//   {
//     path: "/#/bakery/le-bon-ptisserie"
//   },
//   {
//     path: "/#/bakery/le-boulanger-des-arnes-bayonne"
//   },
//   {
//     path: "/#/bakery/le-boulanger-de-lhtel-de-ville"
//   },
//   {
//     path: "/#/bakery/le-boulanger-feydeau"
//   },
//   {
//     path: "/#/bakery/la-meule-de-pierre-evrecy"
//   },
//   {
//     path: "/#/bakery/la-meule-de-pierre-ifs"
//   },
//   {
//     path: "/#/bakery/latelier-des-pierres-dores"
//   },
//   {
//     path: "/#/bakery/boulangerie-aubervilliers"
//   },
//   {
//     path: "/#/bakery/sep"
//   },
//   {
//     path: "/#/bakery/ernest-samaritaine--la-boulangerie-par-eric-kayser"
//   },
//   {
//     path: "/#/bakery/ernest-valentin"
//   },
//   {
//     path: "/#/bakery/ernest-valentin"
//   },
//   {
//     path: "/#/bakery/ernest-ptisserie-caf"
//   },
//   {
//     path: "/#/bakery/ernest-valentin"
//   },
//   {
//     path: "/#/bakery/la-rose-de-vaucelles"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-callout"
//   },
//   {
//     path: "/#/bakery/saint-ouen-touberville"
//   },
//   {
//     path: "/#/bakery/les-delices-de-saint-ouen"
//   },
//   {
//     path: "/#/bakery/rouvres-sylvia"
//   },
//   {
//     path: "/#/bakery/la-vieille-france"
//   },
//   {
//     path: "/#/bakery/boulangerie-au-fournil-du-donjon"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-bois"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-bois-de-groslay"
//   },
//   {
//     path: "/#/bakery/les-4-chouquettes-creully"
//   },
//   {
//     path: "/#/bakery/poppa-petits-gteaux"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-maison-gest"
//   },
//   {
//     path: "/#/bakery/boulongerie"
//   },
//   {
//     path: "/#/bakery/boulongerie-patisserie-voisine"
//   },
//   {
//     path: "/#/bakery/maison-chaudemanche-houlgate"
//   },
//   {
//     path: "/#/bakery/atelier-du-biscuit"
//   },
//   {
//     path: "/#/bakery/la-meule-de-pierre-evrecy"
//   },
//   {
//     path: "/#/bakery/donuts-family"
//   },
//   {
//     path: "/#/bakery/boulangerie-family"
//   },
//   {
//     path: "/#/bakery/boulangerie-maudet"
//   },
//   {
//     path: "/#/bakery/boulangerie-leray"
//   },
//   {
//     path: "/#/bakery/monts-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-parvis-de-notre-dame"
//   },
//   {
//     path: "/#/bakery/la-madeleine-de-montigny"
//   },
//   {
//     path: "/#/bakery/maison-blayo"
//   },
//   {
//     path: "/#/bakery/roseli"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-roselire"
//   },
//   {
//     path: "/#/bakery/boulangerie-rose--le-virolet"
//   },
//   {
//     path: "/#/bakery/boulangerie-larbre-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-tharonnaise"
//   },
//   {
//     path: "/#/bakery/au-fournil-dagathe"
//   },
//   {
//     path: "/#/bakery/les-deux-tours"
//   },
//   {
//     path: "/#/bakery/les-2-boulangers-julienne-et-vincent"
//   },
//   {
//     path: "/#/bakery/gennevilliers"
//   },
//   {
//     path: "/#/bakery/mathieu-pouvreau-ptisserie"
//   },
//   {
//     path: "/#/bakery/mathieu-co"
//   },
//   {
//     path: "/#/bakery/mathieu-and-co"
//   },
//   {
//     path: "/#/bakery/mathieu-zimmermann-ptissier"
//   },
//   {
//     path: "/#/bakery/mathieu-pouvreau-ptisserie"
//   },
//   {
//     path: "/#/bakery/les-ptisseries-delona"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-bois"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-bois-de-groslay"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-colleville"
//   },
//   {
//     path: "/#/bakery/le-grand-fournil-basque"
//   },
//   {
//     path: "/#/bakery/le-grand-mchant-got"
//   },
//   {
//     path: "/#/bakery/au-grand-caraque"
//   },
//   {
//     path: "/#/bakery/latelierdelaboulange"
//   },
//   {
//     path: "/#/bakery/mercier-nicolas"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-gillier"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie"
//   },
//   {
//     path: "/#/bakery/merci-jrme-blanqui"
//   },
//   {
//     path: "/#/bakery/boulangerie-au-petit-canon"
//   },
//   {
//     path: "/#/bakery/la-toque-cuivre"
//   },
//   {
//     path: "/#/bakery/la-toque-cuivre"
//   },
//   {
//     path: "/#/bakery/la-toque-cuivre"
//   },
//   {
//     path: "/#/bakery/la-toque-cuivre"
//   },
//   {
//     path: "/#/bakery/boulangerie-soignolles-en-brie-77111-boulangerie-eugene"
//   },
//   {
//     path: "/#/bakery/la-folie-gourmande"
//   },
//   {
//     path: "/#/bakery/la-foliedouce"
//   },
//   {
//     path: "/#/bakery/la-folies-boulangerie--ptisserie--brasserie"
//   },
//   {
//     path: "/#/bakery/la-folie-des-pains"
//   },
//   {
//     path: "/#/bakery/la-folie-du-pain"
//   },
//   {
//     path: "/#/bakery/clment-lucas"
//   },
//   {
//     path: "/#/bakery/maison-toulorge-ifs"
//   },
//   {
//     path: "/#/bakery/maison-bcam--ifs"
//   },
//   {
//     path: "/#/bakery/la-meule-de-pierre-ifs"
//   },
//   {
//     path: "/#/bakery/la-petite-villette"
//   },
//   {
//     path: "/#/bakery/boissiere"
//   },
//   {
//     path: "/#/bakery/les-douceurs-du-tronquay"
//   },
//   {
//     path: "/#/bakery/cheux-teddy"
//   },
//   {
//     path: "/#/bakery/fournil-du-basque"
//   },
//   {
//     path: "/#/bakery/fournil-du-gast"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-fournil-du-gastelier"
//   },
//   {
//     path: "/#/bakery/maison-noel-colombelles"
//   },
//   {
//     path: "/#/bakery/deauville"
//   },
//   {
//     path: "/#/bakery/la-parisienne-deauville"
//   },
//   {
//     path: "/#/bakery/comme-lisbonne"
//   },
//   {
//     path: "/#/bakery/la-maison-de-la-ptisserie-ptisserie-artisanale"
//   },
//   {
//     path: "/#/bakery/photo-comestible"
//   },
//   {
//     path: "/#/bakery/boulangerie-laurent"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-montel"
//   },
//   {
//     path: "/#/bakery/boulangerie-maudet"
//   },
//   {
//     path: "/#/bakery/boulangerie-leray"
//   },
//   {
//     path: "/#/bakery/monts-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-parvis-de-notre-dame"
//   },
//   {
//     path: "/#/bakery/boulangerie-roques-sarl"
//   },
//   {
//     path: "/#/bakery/boulangerie-duch"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-may-sur-orne"
//   },
//   {
//     path: "/#/bakery/aux-trois-chocolats"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-montel"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-montel"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-gespunsart"
//   },
//   {
//     path: "/#/bakery/fouret-yohann"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-arnoult"
//   },
//   {
//     path: "/#/bakery/mercier-nicolas"
//   },
//   {
//     path: "/#/bakery/merci-jrme-blanqui"
//   },
//   {
//     path: "/#/bakery/merci-jrme-motte-picquet"
//   },
//   {
//     path: "/#/bakery/merci-jrme-klber"
//   },
//   {
//     path: "/#/bakery/ptisserie-bouyges"
//   },
//   {
//     path: "/#/bakery/mercier-nicolas"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-gillier"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie"
//   },
//   {
//     path: "/#/bakery/joanel-laurent"
//   },
//   {
//     path: "/#/bakery/merci-jrme-blanqui"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-livry"
//   },
//   {
//     path: "/#/bakery/le-fournil-sanois"
//   },
//   {
//     path: "/#/bakery/fournil-basly"
//   },
//   {
//     path: "/#/bakery/ptisserie-le-daniel--boutique-le-laboratoire"
//   },
//   {
//     path: "/#/bakery/kiosque-alma--le-daniel"
//   },
//   {
//     path: "/#/bakery/patisserie-le-daniel-boutique-les-halles"
//   },
//   {
//     path: "/#/bakery/ptisserie-le-daniel"
//   },
//   {
//     path: "/#/bakery/missys-gourmandises-douces"
//   },
//   {
//     path: "/#/bakery/la-fromentine"
//   },
//   {
//     path: "/#/bakery/la-fromentine"
//   },
//   {
//     path: "/#/bakery/boulangerie-aux-gourmandises-de-claire"
//   },
//   {
//     path: "/#/bakery/carbon"
//   },
//   {
//     path: "/#/bakery/carbonneau-thierry"
//   },
//   {
//     path: "/#/bakery/boulangerie-carbonnier"
//   },
//   {
//     path: "/#/bakery/boulangerie-carbonera"
//   },
//   {
//     path: "/#/bakery/maison-glis--ptisserie-chocolaterie-carbonne"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-tho"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-vignette"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-cernay"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-cernay-ismail"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-cernay"
//   },
//   {
//     path: "/#/bakery/boulangerie-balleroy"
//   },
//   {
//     path: "/#/bakery/ptisserie-bibiche-caf-gourmand"
//   },
//   {
//     path: "/#/bakery/van-caeneghem"
//   },
//   {
//     path: "/#/bakery/ptisserie-bauthi-lunion"
//   },
//   {
//     path: "/#/bakery/ptisserie-bauthi-saint-orens-de-gameville-31650"
//   },
//   {
//     path: "/#/bakery/ptisserie-bauthi"
//   },
//   {
//     path: "/#/bakery/aux-grains-de-folie"
//   },
//   {
//     path: "/#/bakery/au-grain-de-folie"
//   },
//   {
//     path: "/#/bakery/au-grain-de-malice"
//   },
//   {
//     path: "/#/bakery/au-grain-de-bl"
//   },
//   {
//     path: "/#/bakery/boulangerie-au-grain-dor"
//   },
//   {
//     path: "/#/bakery/boulangerie-maudet"
//   },
//   {
//     path: "/#/bakery/boulangerie-leray"
//   },
//   {
//     path: "/#/bakery/monts-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-parvis-de-notre-dame"
//   },
//   {
//     path: "/#/bakery/aux-dlices-des-fourches-laval"
//   },
//   {
//     path: "/#/bakery/boulangerie-longueville"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-callout"
//   },
//   {
//     path: "/#/bakery/saint-ouen-touberville"
//   },
//   {
//     path: "/#/bakery/les-delices-de-saint-ouen"
//   },
//   {
//     path: "/#/bakery/le-vieux-pont"
//   },
//   {
//     path: "/#/bakery/boulangerie-ric-kayser--honfleur-rpublique"
//   },
//   {
//     path: "/#/bakery/boulangerie-l-honfleuraise"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-courson"
//   },
//   {
//     path: "/#/bakery/au-fournil-demma"
//   },
//   {
//     path: "/#/bakery/aux-dlices-saint-charles"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-charles"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-charles"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-saint-charles"
//   },
//   {
//     path: "/#/bakery/le-manoir-des-saveurs"
//   },
//   {
//     path: "/#/bakery/au-manoir"
//   },
//   {
//     path: "/#/bakery/lassiette-du-boulanger"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-callout"
//   },
//   {
//     path: "/#/bakery/saint-ouen-touberville"
//   },
//   {
//     path: "/#/bakery/les-delices-de-saint-ouen"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-rouget"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-gladines-daniel"
//   },
//   {
//     path: "/#/bakery/besse-michel"
//   },
//   {
//     path: "/#/bakery/borzeix-besse"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-besse-david"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-herv-besse"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-bess-mr-debre-loic"
//   },
//   {
//     path: "/#/bakery/mamie-m-clavieres"
//   },
//   {
//     path: "/#/bakery/crousti-pain"
//   },
//   {
//     path: "/#/bakery/le-fournil-camarguais"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-grimouille"
//   },
//   {
//     path: "/#/bakery/boulangerie-corentin-cottier"
//   },
//   {
//     path: "/#/bakery/biscuiterie-corentin"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-letoile-issy"
//   },
//   {
//     path: "/#/bakery/ptisserie-torres"
//   },
//   {
//     path: "/#/bakery/la-petite-bayonnaise"
//   },
//   {
//     path: "/#/bakery/roumegous"
//   },
//   {
//     path: "/#/bakery/la-chanterelle"
//   },
//   {
//     path: "/#/bakery/boulangerie-valette"
//   },
//   {
//     path: "/#/bakery/valette-henri"
//   },
//   {
//     path: "/#/bakery/valette-michel"
//   },
//   {
//     path: "/#/bakery/valette-wilfrid-emile"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-antoine"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-saint-antoine--boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-st-antoine"
//   },
//   {
//     path: "/#/bakery/boisset"
//   },
//   {
//     path: "/#/bakery/la-fourne-de-boisset"
//   },
//   {
//     path: "/#/bakery/la-boulange-saint-georges"
//   },
//   {
//     path: "/#/bakery/le-comptoir-de-saint-georges"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-lauriers"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-saint-congard"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-laurie-et-grald"
//   },
//   {
//     path: "/#/bakery/100-maison-by-laveissire"
//   },
//   {
//     path: "/#/bakery/ptisserie-laveissire"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-persigny"
//   },
//   {
//     path: "/#/bakery/boulangerie-person"
//   },
//   {
//     path: "/#/bakery/boulangerie-persephone"
//   },
//   {
//     path: "/#/bakery/persouyre-pascal"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-aux-dlices-de-chazelles"
//   },
//   {
//     path: "/#/bakery/lartisan-boulanger"
//   },
//   {
//     path: "/#/bakery/au-macaron-de-massiac--boulet-julien-et-charlotte"
//   },
//   {
//     path: "/#/bakery/le-faubourg-boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/au-faubourg-de-lcluse"
//   },
//   {
//     path: "/#/bakery/couplet-armelle-et-nicolas"
//   },
//   {
//     path: "/#/bakery/ptisserie-eymoutiers-choubeurrepomme"
//   },
//   {
//     path: "/#/bakery/lk-ptisserie-de-luxe"
//   },
//   {
//     path: "/#/bakery/aux-gouts-de-luxe"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-cognac-la-fort"
//   },
//   {
//     path: "/#/bakery/arsne-boulangerie-bio"
//   },
//   {
//     path: "/#/bakery/arsac-david"
//   },
//   {
//     path: "/#/bakery/arsne-le-pain"
//   },
//   {
//     path: "/#/bakery/le-fournil-dars-en-r"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-larsenal"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-saint-eutrope"
//   },
//   {
//     path: "/#/bakery/la-douceur-coulongeoise"
//   },
//   {
//     path: "/#/bakery/bonne-miette"
//   },
//   {
//     path: "/#/bakery/aux-bonnes-recettes"
//   },
//   {
//     path: "/#/bakery/boulangerie-les-bonnes-saveurs"
//   },
//   {
//     path: "/#/bakery/boulangerie--les-bonnes-graines"
//   },
//   {
//     path: "/#/bakery/la-couronne"
//   },
//   {
//     path: "/#/bakery/la-couronne-dor"
//   },
//   {
//     path: "/#/bakery/la-couronne-des-prs"
//   },
//   {
//     path: "/#/bakery/la-couronne"
//   },
//   {
//     path: "/#/bakery/la-couronne-cauchoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-les-pins"
//   },
//   {
//     path: "/#/bakery/boulangerie-les-pins"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-tesse"
//   },
//   {
//     path: "/#/bakery/garat--boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-garat-mathieu-eurl"
//   },
//   {
//     path: "/#/bakery/boulangerie-garat"
//   },
//   {
//     path: "/#/bakery/la-garatoise"
//   },
//   {
//     path: "/#/bakery/la-garattine"
//   },
//   {
//     path: "/#/bakery/presse-fils"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/maison-perrin--mrignac"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-barros"
//   },
//   {
//     path: "/#/bakery/boulangerie-baron-civrais"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-julien-barroul"
//   },
//   {
//     path: "/#/bakery/houle-gourmande"
//   },
//   {
//     path: "/#/bakery/le-palais-du-dessert"
//   },
//   {
//     path: "/#/bakery/palais-du-gourmet"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-racine-sarl-new-boulang"
//   },
//   {
//     path: "/#/bakery/boulangerie-juillet"
//   },
//   {
//     path: "/#/bakery/magnac-sur-touvre"
//   },
//   {
//     path: "/#/bakery/la-cigogne-et-le-fournil"
//   },
//   {
//     path: "/#/bakery/la-biscuiterie-de-la-moutonne--maison-r"
//   },
//   {
//     path: "/#/bakery/boulangerie-fournil-de-verneuil"
//   },
//   {
//     path: "/#/bakery/souvignet"
//   },
//   {
//     path: "/#/bakery/souvignet-david"
//   },
//   {
//     path: "/#/bakery/boulangerie-souvignet"
//   },
//   {
//     path: "/#/bakery/valence-croustillant"
//   },
//   {
//     path: "/#/bakery/anas-cookies-cie"
//   },
//   {
//     path: "/#/bakery/anas-ptisserie-fine"
//   },
//   {
//     path: "/#/bakery/anas"
//   },
//   {
//     path: "/#/bakery/anais-cupcakes-et-compagnie"
//   },
//   {
//     path: "/#/bakery/anais-daval"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-cognac-la-fort"
//   },
//   {
//     path: "/#/bakery/cerise"
//   },
//   {
//     path: "/#/bakery/cerise-chocolat"
//   },
//   {
//     path: "/#/bakery/boulangerie-lessentiel"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-lessentiel"
//   },
//   {
//     path: "/#/bakery/de-lessentiel-la-gourmandise"
//   },
//   {
//     path: "/#/bakery/lessentiel-de-mahoudeaux"
//   },
//   {
//     path: "/#/bakery/boulangerie-lessentiel--anthony-bosson"
//   },
//   {
//     path: "/#/bakery/boulangerie-perlimpainpain-saint-romain"
//   },
//   {
//     path: "/#/bakery/aux-ronsardises-boulangerie-tabac-multiservices"
//   },
//   {
//     path: "/#/bakery/le-nelson--la-boutique-du-centre"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-philot"
//   },
//   {
//     path: "/#/bakery/le-petrin-saint-mdard"
//   },
//   {
//     path: "/#/bakery/boulangerie-lafayette"
//   },
//   {
//     path: "/#/bakery/au-pain-des-amis"
//   },
//   {
//     path: "/#/bakery/pain-paillasse"
//   },
//   {
//     path: "/#/bakery/au-pain-paillasse"
//   },
//   {
//     path: "/#/bakery/le-pain-paillasse"
//   },
//   {
//     path: "/#/bakery/la-paillasse"
//   },
//   {
//     path: "/#/bakery/la-paillasse"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-saint-brice"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--saint-brice-sous-fort"
//   },
//   {
//     path: "/#/bakery/boulangerie-banette-gente"
//   },
//   {
//     path: "/#/bakery/monsieur-m--roubaix-brunch"
//   },
//   {
//     path: "/#/bakery/monsieur-caramel"
//   },
//   {
//     path: "/#/bakery/monsieur-tartine"
//   },
//   {
//     path: "/#/bakery/monsieur-david-hodin"
//   },
//   {
//     path: "/#/bakery/monsieur-misu"
//   },
//   {
//     path: "/#/bakery/boulangerie-cervants"
//   },
//   {
//     path: "/#/bakery/boulangerie-champniers--lauthentique"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-lisle"
//   },
//   {
//     path: "/#/bakery/la-chabanaise"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-monaco"
//   },
//   {
//     path: "/#/bakery/la-ronde-des-pains"
//   },
//   {
//     path: "/#/bakery/la-ronde-des-pains"
//   },
//   {
//     path: "/#/bakery/la-ronde-des-pains"
//   },
//   {
//     path: "/#/bakery/la-ronde-des-pains"
//   },
//   {
//     path: "/#/bakery/la-ronde-des-pains"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-la-clamartoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-cercoux"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-philot"
//   },
//   {
//     path: "/#/bakery/le-petrin-saint-mdard"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-cir-daunis"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-chatenet"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-des-forges"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-forges"
//   },
//   {
//     path: "/#/bakery/fournil-saint-esprit"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-clion"
//   },
//   {
//     path: "/#/bakery/aux-petites-douceurs"
//   },
//   {
//     path: "/#/bakery/lesportes-mickael"
//   },
//   {
//     path: "/#/bakery/l-atelier-ponseel-boulangerie-ptisseries"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-ponseel"
//   },
//   {
//     path: "/#/bakery/boulangerie-juillard-pons"
//   },
//   {
//     path: "/#/bakery/ptisserie-glaces-pons"
//   },
//   {
//     path: "/#/bakery/boulangerie-ponsardin"
//   },
//   {
//     path: "/#/bakery/riou-thierry"
//   },
//   {
//     path: "/#/bakery/biscuiterie-des-les--maison-familiale-artisanal-depuis-1875"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-lisle"
//   },
//   {
//     path: "/#/bakery/presse-fils"
//   },
//   {
//     path: "/#/bakery/perenchio-boulangerie"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-du-pere-pain-pain"
//   },
//   {
//     path: "/#/bakery/presse-fils--lannexe-des-artisans"
//   },
//   {
//     path: "/#/bakery/perez-aubert-christian-christian"
//   },
//   {
//     path: "/#/bakery/anas-cookies-cie"
//   },
//   {
//     path: "/#/bakery/anas-ptisserie-fine"
//   },
//   {
//     path: "/#/bakery/anas"
//   },
//   {
//     path: "/#/bakery/anais-cupcakes-et-compagnie"
//   },
//   {
//     path: "/#/bakery/anais-daval"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-ferrieres"
//   },
//   {
//     path: "/#/bakery/madeleine-by-ferrires"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-migrenne"
//   },
//   {
//     path: "/#/bakery/brangeon-frdric"
//   },
//   {
//     path: "/#/bakery/brangeon-frdric"
//   },
//   {
//     path: "/#/bakery/brandenberg"
//   },
//   {
//     path: "/#/bakery/branthome-loic-et-ludivine"
//   },
//   {
//     path: "/#/bakery/branlant-sbastien"
//   },
//   {
//     path: "/#/bakery/boulangerie-bourneuf"
//   },
//   {
//     path: "/#/bakery/le-paradis-des-dlices-bourgneuf"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-martin--maison-af"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-saint-martinoise"
//   },
//   {
//     path: "/#/bakery/-la-reine-mathilde"
//   },
//   {
//     path: "/#/bakery/le-fournil-saint-seurin"
//   },
//   {
//     path: "/#/bakery/morgane-et-vincent"
//   },
//   {
//     path: "/#/bakery/boulangerie-chez-morgane-et-jonathan"
//   },
//   {
//     path: "/#/bakery/ptisserie-morgane--sevrier"
//   },
//   {
//     path: "/#/bakery/morgane-et-bruno"
//   },
//   {
//     path: "/#/bakery/artisan-boulanger-durand-patrick-et-alexandra"
//   },
//   {
//     path: "/#/bakery/saujon"
//   },
//   {
//     path: "/#/bakery/chambon-frres"
//   },
//   {
//     path: "/#/bakery/chambon-freres-chambon-romain"
//   },
//   {
//     path: "/#/bakery/boulangerie-m-c-chambon"
//   },
//   {
//     path: "/#/bakery/maison-chambon"
//   },
//   {
//     path: "/#/bakery/pepite-cookie--la-rochelle"
//   },
//   {
//     path: "/#/bakery/latelier-st-michel-la-rochelle"
//   },
//   {
//     path: "/#/bakery/djolly--ptissier-glacier-la-rochelle"
//   },
//   {
//     path: "/#/bakery/pton-boulangerie-la-rochelle"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-barrire-cdric-lassau"
//   },
//   {
//     path: "/#/bakery/boulangerie-benony"
//   },
//   {
//     path: "/#/bakery/le-regal-bressan"
//   },
//   {
//     path: "/#/bakery/sarl-benonnier"
//   },
//   {
//     path: "/#/bakery/biscuits-arena"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-taillon-patisserie"
//   },
//   {
//     path: "/#/bakery/boulangerie-grain-dpain--saint-georges"
//   },
//   {
//     path: "/#/bakery/laiguille-capdenac"
//   },
//   {
//     path: "/#/bakery/robin-des-pains"
//   },
//   {
//     path: "/#/bakery/la-mie-aytresienneartisan-boulanger-patissier"
//   },
//   {
//     path: "/#/bakery/nektar-pont-labb"
//   },
//   {
//     path: "/#/bakery/nektar-brest"
//   },
//   {
//     path: "/#/bakery/nektar-concarneau"
//   },
//   {
//     path: "/#/bakery/nektar"
//   },
//   {
//     path: "/#/bakery/nektar-bnodet"
//   },
//   {
//     path: "/#/bakery/fournil-de-la-tessone"
//   },
//   {
//     path: "/#/bakery/contrepois-fabrice"
//   },
//   {
//     path: "/#/bakery/la-nouvelle-boulangerie--royan"
//   },
//   {
//     path: "/#/bakery/maison-perrin--mrignac"
//   },
//   {
//     path: "/#/bakery/merci-jrme-italiens"
//   },
//   {
//     path: "/#/bakery/le-rond-pain-de-saint-augustin"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-st-augustin"
//   },
//   {
//     path: "/#/bakery/old-bakery-cressely"
//   },
//   {
//     path: "/#/bakery/crescent-moon-bakery"
//   },
//   {
//     path: "/#/bakery/crescent-night"
//   },
//   {
//     path: "/#/bakery/avy-bernard"
//   },
//   {
//     path: "/#/bakery/avy-et-cie-martine"
//   },
//   {
//     path: "/#/bakery/patisserie-avyel-salon-de-the"
//   },
//   {
//     path: "/#/bakery/avy-etcie-martine"
//   },
//   {
//     path: "/#/bakery/boulangerie-daction-au-pain-dautrefois"
//   },
//   {
//     path: "/#/bakery/mirambeau-jean-jacques"
//   },
//   {
//     path: "/#/bakery/naan-boulangerie-ptisserie--villeurbanne-la-soie"
//   },
//   {
//     path: "/#/bakery/boulangerie-st-jean-by-chips"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-symphorien-un-bout-dpin"
//   },
//   {
//     path: "/#/bakery/boistelle-christian"
//   },
//   {
//     path: "/#/bakery/boissinot-pascal"
//   },
//   {
//     path: "/#/bakery/boissin-boulangerie"
//   },
//   {
//     path: "/#/bakery/boisan-olivier"
//   },
//   {
//     path: "/#/bakery/les-dlices-de-pina"
//   },
//   {
//     path: "/#/bakery/la-fille-du-boulanger"
//   },
//   {
//     path: "/#/bakery/la-chadenacaise"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-rtaud"
//   },
//   {
//     path: "/#/bakery/boulangerie-cervants"
//   },
//   {
//     path: "/#/bakery/saines-saveurs"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-laurent"
//   },
//   {
//     path: "/#/bakery/boulangerie-fournil-des-vignes"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-le-grand"
//   },
//   {
//     path: "/#/bakery/legrand-jrme"
//   },
//   {
//     path: "/#/bakery/legrand-jrme"
//   },
//   {
//     path: "/#/bakery/jerome-legrand"
//   },
//   {
//     path: "/#/bakery/bironneau"
//   },
//   {
//     path: "/#/bakery/bironneau-mathieu"
//   },
//   {
//     path: "/#/bakery/boulangerie-biron"
//   },
//   {
//     path: "/#/bakery/sa-brosset-la-brioche-de-vendrennes"
//   },
//   {
//     path: "/#/bakery/boulangerie-desnandes"
//   },
//   {
//     path: "/#/bakery/region-analanjirofo-sainte-marie-mananara-nord-maroantsetra"
//   },
//   {
//     path: "/#/bakery/rcration-sucre-sale"
//   },
//   {
//     path: "/#/bakery/ptisserie-vergne-traiteur-glacier-chocolatier"
//   },
//   {
//     path: "/#/bakery/ptisserie-vergne-traiteur-glacier-chocolatier-belfort"
//   },
//   {
//     path: "/#/bakery/vergne-frdric"
//   },
//   {
//     path: "/#/bakery/fournil-de-vergne"
//   },
//   {
//     path: "/#/bakery/franois-vergne-ptissier"
//   },
//   {
//     path: "/#/bakery/rochefort-sur-mer"
//   },
//   {
//     path: "/#/bakery/rochefort"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-toublanc-valry"
//   },
//   {
//     path: "/#/bakery/ballon"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-ballon"
//   },
//   {
//     path: "/#/bakery/boulangerie-courcelle"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-laborie"
//   },
//   {
//     path: "/#/bakery/the-bakery-maguier-luzacaise-cake"
//   },
//   {
//     path: "/#/bakery/la-meursacaise"
//   },
//   {
//     path: "/#/bakery/boulangerie-s-courant"
//   },
//   {
//     path: "/#/bakery/la-douceur-coulongeoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-phare"
//   },
//   {
//     path: "/#/bakery/les-3-marches"
//   },
//   {
//     path: "/#/bakery/atelier-du-pain"
//   },
//   {
//     path: "/#/bakery/atelin-jean-paul"
//   },
//   {
//     path: "/#/bakery/boulangerie-moulin-robert"
//   },
//   {
//     path: "/#/bakery/moulin-melou"
//   },
//   {
//     path: "/#/bakery/yves-jehanne-ptisserie-boulangerie"
//   },
//   {
//     path: "/#/bakery/rivalain-yves"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-piguel"
//   },
//   {
//     path: "/#/bakery/la-bande-bonneau"
//   },
//   {
//     path: "/#/bakery/pacallet-yves"
//   },
//   {
//     path: "/#/bakery/la-seigneurie-compigne"
//   },
//   {
//     path: "/#/bakery/boulangerie-lepi-dor-pargnes"
//   },
//   {
//     path: "/#/bakery/maison-perrin--mrignac"
//   },
//   {
//     path: "/#/bakery/domaine-des-macarons-de-rau"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-du-palais"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-palais"
//   },
//   {
//     path: "/#/bakery/boulangerie-lb"
//   },
//   {
//     path: "/#/bakery/le-fournil-prignacais"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-grandjean"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-grandjean-jean-marie"
//   },
//   {
//     path: "/#/bakery/grandjean-jean-marie"
//   },
//   {
//     path: "/#/bakery/boulangerie-eric-grandjean"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-grandjean"
//   },
//   {
//     path: "/#/bakery/ptisserie-beurlay"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-philot"
//   },
//   {
//     path: "/#/bakery/le-petrin-saint-mdard"
//   },
//   {
//     path: "/#/bakery/paille-i-verde"
//   },
//   {
//     path: "/#/bakery/maison-pailliette"
//   },
//   {
//     path: "/#/bakery/paill-_-jean-franois"
//   },
//   {
//     path: "/#/bakery/pailleret-alain"
//   },
//   {
//     path: "/#/bakery/paillert-boulangerie-patisserie"
//   },
//   {
//     path: "/#/bakery/monsieur-m--roubaix-brunch"
//   },
//   {
//     path: "/#/bakery/monsieur-caramel"
//   },
//   {
//     path: "/#/bakery/monsieur-tartine"
//   },
//   {
//     path: "/#/bakery/monsieur-david-hodin"
//   },
//   {
//     path: "/#/bakery/monsieur-misu"
//   },
//   {
//     path: "/#/bakery/la-valle-du-pain"
//   },
//   {
//     path: "/#/bakery/la-valle-gourmande"
//   },
//   {
//     path: "/#/bakery/caf-pierre-herm-paris"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-parnay"
//   },
//   {
//     path: "/#/bakery/chambon-frres"
//   },
//   {
//     path: "/#/bakery/chambon-freres-chambon-romain"
//   },
//   {
//     path: "/#/bakery/boulangerie-m-c-chambon"
//   },
//   {
//     path: "/#/bakery/maison-chambon"
//   },
//   {
//     path: "/#/bakery/le-fondant-de-vierzon"
//   },
//   {
//     path: "/#/bakery/le-fondant-de-vierzon-village"
//   },
//   {
//     path: "/#/bakery/au-fournil-du-buch"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-mon-enfance"
//   },
//   {
//     path: "/#/bakery/boulangerie-st-maurice-pellevoisin"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-grotte-aux-fes"
//   },
//   {
//     path: "/#/bakery/la-griotte-boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/patisserie-traiteur-chaumontet-co"
//   },
//   {
//     path: "/#/bakery/artizarra"
//   },
//   {
//     path: "/#/bakery/au-fournil-chaumontais"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-ccroisyl"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-ccroisyl"
//   },
//   {
//     path: "/#/bakery/boulangerie--couston-valry"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-lyse"
//   },
//   {
//     path: "/#/bakery/boulangerie-grard-levetti"
//   },
//   {
//     path: "/#/bakery/la-fille-du-boulanger"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-ligerot"
//   },
//   {
//     path: "/#/bakery/boulangerie-porte-dalsace"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-de-chavannes"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-mreau"
//   },
//   {
//     path: "/#/bakery/boulangerie-mrour"
//   },
//   {
//     path: "/#/bakery/panade"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-quincy"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-chry"
//   },
//   {
//     path: "/#/bakery/charly-et-maeva"
//   },
//   {
//     path: "/#/bakery/charly-b"
//   },
//   {
//     path: "/#/bakery/boulangerie-charly"
//   },
//   {
//     path: "/#/bakery/boulangerie-reymond"
//   },
//   {
//     path: "/#/bakery/herve-thierry-raymond"
//   },
//   {
//     path: "/#/bakery/rauly-philippe"
//   },
//   {
//     path: "/#/bakery/boulangerie-raymond-morel-boulangerie-ptisserie-traiteur"
//   },
//   {
//     path: "/#/bakery/raymond-legrand-vendeuil"
//   },
//   {
//     path: "/#/bakery/boulangerie-torteron"
//   },
//   {
//     path: "/#/bakery/boulangerie-nancay"
//   },
//   {
//     path: "/#/bakery/au-feu-de-bois"
//   },
//   {
//     path: "/#/bakery/aux-saveurs-de-b"
//   },
//   {
//     path: "/#/bakery/biscuits-landon-dauvergne"
//   },
//   {
//     path: "/#/bakery/boulangerie-bussy"
//   },
//   {
//     path: "/#/bakery/boulangerie-bio-la-panetire-des-hameaux-pornic"
//   },
//   {
//     path: "/#/bakery/la-panif"
//   },
//   {
//     path: "/#/bakery/la-panire-valle"
//   },
//   {
//     path: "/#/bakery/la-panire--gaillard"
//   },
//   {
//     path: "/#/bakery/la-paniere--le-kiosque"
//   },
//   {
//     path: "/#/bakery/le-relais-des-desserts"
//   },
//   {
//     path: "/#/bakery/le-relais-gourmand"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-le-fournil-lren"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-lerebourg"
//   },
//   {
//     path: "/#/bakery/le-relais-de-merignies"
//   },
//   {
//     path: "/#/bakery/thouvenot-lionel"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-thouret"
//   },
//   {
//     path: "/#/bakery/thouez-philippe"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-thouvenin"
//   },
//   {
//     path: "/#/bakery/maison-thoury"
//   },
//   {
//     path: "/#/bakery/chres-cousines-bagels"
//   },
//   {
//     path: "/#/bakery/a-la-plouguinoise"
//   },
//   {
//     path: "/#/bakery/la-ploubezroise"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-ploubaz"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-ploubaz"
//   },
//   {
//     path: "/#/bakery/boulangerie-bussy"
//   },
//   {
//     path: "/#/bakery/ptisserie-maison-marteau--bussy-saint-georges"
//   },
//   {
//     path: "/#/bakery/le-pav-de-murigny"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-turenne"
//   },
//   {
//     path: "/#/bakery/saint-paul-pain"
//   },
//   {
//     path: "/#/bakery/le-saint-paul-by-ja"
//   },
//   {
//     path: "/#/bakery/alleyrat-jean-pierre"
//   },
//   {
//     path: "/#/bakery/le-relais-gourmand"
//   },
//   {
//     path: "/#/bakery/la-figounette-argentat"
//   },
//   {
//     path: "/#/bakery/rochette-heroz"
//   },
//   {
//     path: "/#/bakery/boulangerie-aixoise"
//   },
//   {
//     path: "/#/bakery/ayandra-creil"
//   },
//   {
//     path: "/#/bakery/boulangerie-au-festival-des-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-cornile-louis"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-cornillier"
//   },
//   {
//     path: "/#/bakery/boulangerie-cornillon"
//   },
//   {
//     path: "/#/bakery/cournille-etablissements"
//   },
//   {
//     path: "/#/bakery/viennoiserie-patisserie"
//   },
//   {
//     path: "/#/bakery/viennoiserie-de-menin"
//   },
//   {
//     path: "/#/bakery/viennoiserie-zola"
//   },
//   {
//     path: "/#/bakery/viennoiserie-du-brun-pain"
//   },
//   {
//     path: "/#/bakery/viennoiseries-du-colbras"
//   },
//   {
//     path: "/#/bakery/sarl-aux-dlices-seilhacois"
//   },
//   {
//     path: "/#/bakery/patisserie-feyt"
//   },
//   {
//     path: "/#/bakery/barnab--boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/barnab--boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/br"
//   },
//   {
//     path: "/#/bakery/barnab--boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/bara-lanester"
//   },
//   {
//     path: "/#/bakery/le-jardin-sucr"
//   },
//   {
//     path: "/#/bakery/le-jardin-sucr"
//   },
//   {
//     path: "/#/bakery/le-jardin-des-douceurs--ptisserie-orientale"
//   },
//   {
//     path: "/#/bakery/le-jardin-des-anges"
//   },
//   {
//     path: "/#/bakery/le-jardin-des-gourmandises"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-lglise"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-lglise"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-de-lglise"
//   },
//   {
//     path: "/#/bakery/le-fournil-meymacois-ratelade-guillaume"
//   },
//   {
//     path: "/#/bakery/la-ptite-boulange"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-talmeunier"
//   },
//   {
//     path: "/#/bakery/maison-saint-jalme--juan-les-pins"
//   },
//   {
//     path: "/#/bakery/maison-saint-jalme--antibes"
//   },
//   {
//     path: "/#/bakery/maison-bav"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-noailles"
//   },
//   {
//     path: "/#/bakery/boulangerie-julien"
//   },
//   {
//     path: "/#/bakery/neuville-jean-louis"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-nord"
//   },
//   {
//     path: "/#/bakery/la-boulange-rit"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-tilleuls"
//   },
//   {
//     path: "/#/bakery/leroy-isabelle-sbastien--boulanger-ptissier-chocolatier"
//   },
//   {
//     path: "/#/bakery/leroy-herv"
//   },
//   {
//     path: "/#/bakery/leroy-philippe"
//   },
//   {
//     path: "/#/bakery/boulangerie-leroy-monti"
//   },
//   {
//     path: "/#/bakery/leroy-mickal"
//   },
//   {
//     path: "/#/bakery/victoire-boulangerie"
//   },
//   {
//     path: "/#/bakery/victor-et-compagnie-ecully"
//   },
//   {
//     path: "/#/bakery/victor-et-compagnie-craponne"
//   },
//   {
//     path: "/#/bakery/victoires-dlices"
//   },
//   {
//     path: "/#/bakery/victor-le-boulanger-rillieux-la-pape"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-helier"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-helier"
//   },
//   {
//     path: "/#/bakery/le-puits-damour"
//   },
//   {
//     path: "/#/bakery/le-puits-damour"
//   },
//   {
//     path: "/#/bakery/le-puits-damour--maison-seguin-captieux"
//   },
//   {
//     path: "/#/bakery/ptisserie-au-puits-damour"
//   },
//   {
//     path: "/#/bakery/au-puits-savoyard"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-diablotins--boulangerie-bio-au-levain--march-de-nuits-saint-georges"
//   },
//   {
//     path: "/#/bakery/foissy-loc"
//   },
//   {
//     path: "/#/bakery/a-votre-got"
//   },
//   {
//     path: "/#/bakery/la-ptite-chambertine"
//   },
//   {
//     path: "/#/bakery/le-chalet-du-pain"
//   },
//   {
//     path: "/#/bakery/les-pains-de-longchamps"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-rougemont"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-rougemont"
//   },
//   {
//     path: "/#/bakery/la-rougemontoise"
//   },
//   {
//     path: "/#/bakery/le-grignon-dpain"
//   },
//   {
//     path: "/#/bakery/la-grignonaise"
//   },
//   {
//     path: "/#/bakery/le-grignon-dpain"
//   },
//   {
//     path: "/#/bakery/le-grignon-dpain"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-grignon-dpain"
//   },
//   {
//     path: "/#/bakery/boulangeriepatisserie-le-dlice-de-davzieux"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-doriana"
//   },
//   {
//     path: "/#/bakery/la-panire--saint-julien-en-genevois"
//   },
//   {
//     path: "/#/bakery/brain-de-bl"
//   },
//   {
//     path: "/#/bakery/biscuits-mistral-beaune"
//   },
//   {
//     path: "/#/bakery/la-bruyere"
//   },
//   {
//     path: "/#/bakery/au-pain-royal"
//   },
//   {
//     path: "/#/bakery/pain-noir-pain-blanc--boulangerie-bio-au-levain-naturel"
//   },
//   {
//     path: "/#/bakery/le-pain-blanc"
//   },
//   {
//     path: "/#/bakery/dijon"
//   },
//   {
//     path: "/#/bakery/pralus-dijon-ptisserie-chocolaterie"
//   },
//   {
//     path: "/#/bakery/ptisserie-des-dijonnais--ben-stef"
//   },
//   {
//     path: "/#/bakery/maison-paroty-dijon-thtre"
//   },
//   {
//     path: "/#/bakery/mon-plaisir-gourmand"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-jouet"
//   },
//   {
//     path: "/#/bakery/laubaine"
//   },
//   {
//     path: "/#/bakery/biscuiterie-la-mre-poulard--magasin-de-vente-directe"
//   },
//   {
//     path: "/#/bakery/au-bl-du-coin"
//   },
//   {
//     path: "/#/bakery/la-cave-a-pains"
//   },
//   {
//     path: "/#/bakery/le-pain-de-la-fontaine"
//   },
//   {
//     path: "/#/bakery/jb-boulangerie"
//   },
//   {
//     path: "/#/bakery/tresse-nicolas"
//   },
//   {
//     path: "/#/bakery/la-fte-des-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-tilleuls"
//   },
//   {
//     path: "/#/bakery/chateauneuf-du-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-vertu-rgalade"
//   },
//   {
//     path: "/#/bakery/talant"
//   },
//   {
//     path: "/#/bakery/boulangerie-daix"
//   },
//   {
//     path: "/#/bakery/les-dlices-ptisserie-daix"
//   },
//   {
//     path: "/#/bakery/larray-franois"
//   },
//   {
//     path: "/#/bakery/jocteur-le-boulanger-de-lentilly"
//   },
//   {
//     path: "/#/bakery/banette-buxerolles--epi-de-blais"
//   },
//   {
//     path: "/#/bakery/chez-lux-saint-barthlemy"
//   },
//   {
//     path: "/#/bakery/ben-et-lux-sarl"
//   },
//   {
//     path: "/#/bakery/boulangerie-tony-lux"
//   },
//   {
//     path: "/#/bakery/chez-lux--lux-du-lyce"
//   },
//   {
//     path: "/#/bakery/chez-lux"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-vieux-chteau"
//   },
//   {
//     path: "/#/bakery/boulangerie-minotine"
//   },
//   {
//     path: "/#/bakery/minotine-89-boulanger-patissier"
//   },
//   {
//     path: "/#/bakery/le-petit-minotier"
//   },
//   {
//     path: "/#/bakery/les-minots-de-republique"
//   },
//   {
//     path: "/#/bakery/shop-biscuit-abbey"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-de-labbaye"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-labbaye"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-labbaye"
//   },
//   {
//     path: "/#/bakery/au-coeur-de-la-gourmandise-charny-89"
//   },
//   {
//     path: "/#/bakery/boulangerie-buffon--pains-viennoiseries-et-ptisseries-bio"
//   },
//   {
//     path: "/#/bakery/maison-bihan"
//   },
//   {
//     path: "/#/bakery/biscuits-mistral-semur-en-auxois"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-pont-tabarly"
//   },
//   {
//     path: "/#/bakery/pontlevy-jean-luc"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-pontoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-pontet"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--brtigny-sur-orge"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-montmain"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-paumard-cantenay"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-fiacre--avon"
//   },
//   {
//     path: "/#/bakery/perreton-boulangerie"
//   },
//   {
//     path: "/#/bakery/perret-olivier"
//   },
//   {
//     path: "/#/bakery/boulangerie-perret"
//   },
//   {
//     path: "/#/bakery/maison-perret"
//   },
//   {
//     path: "/#/bakery/boulangerie-olivier-de-peretti"
//   },
//   {
//     path: "/#/bakery/fournil-quevertois"
//   },
//   {
//     path: "/#/bakery/le-fournil-bio-du-trieux"
//   },
//   {
//     path: "/#/bakery/boulangerie-en-terre-de-vie"
//   },
//   {
//     path: "/#/bakery/ricard-sylvain"
//   },
//   {
//     path: "/#/bakery/ricabs"
//   },
//   {
//     path: "/#/bakery/poulaillon"
//   },
//   {
//     path: "/#/bakery/aux-dlices-crehennais"
//   },
//   {
//     path: "/#/bakery/pratali-et-fils"
//   },
//   {
//     path: "/#/bakery/pratblli-depot-de-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-corlay"
//   },
//   {
//     path: "/#/bakery/ptisserie-rhel-widmer"
//   },
//   {
//     path: "/#/bakery/solignac-pierre"
//   },
//   {
//     path: "/#/bakery/maison-solignac"
//   },
//   {
//     path: "/#/bakery/au-croissant-dor--maison-solignac"
//   },
//   {
//     path: "/#/bakery/maison-solignac"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-solignac"
//   },
//   {
//     path: "/#/bakery/poulaillon-vieux-march-aux-poissons"
//   },
//   {
//     path: "/#/bakery/au-fournil-des-matignon"
//   },
//   {
//     path: "/#/bakery/biscuiterie-saint-gunol"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-du-port"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-trmelo-latelier-gourmand-deric-et-julien"
//   },
//   {
//     path: "/#/bakery/la-trlvernaise"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-henon"
//   },
//   {
//     path: "/#/bakery/boulangerie-henon-madeleine"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-menez"
//   },
//   {
//     path: "/#/bakery/la-cheze"
//   },
//   {
//     path: "/#/bakery/boulangerie-morieux"
//   },
//   {
//     path: "/#/bakery/pierre-morieux"
//   },
//   {
//     path: "/#/bakery/ptisserie-berthet"
//   },
//   {
//     path: "/#/bakery/patisserie-berthet"
//   },
//   {
//     path: "/#/bakery/boulangerie--patisserie-berthet"
//   },
//   {
//     path: "/#/bakery/artisan-boulanger-ptissier-ab-le-mat"
//   },
//   {
//     path: "/#/bakery/boutique-gavottes-taden"
//   },
//   {
//     path: "/#/bakery/boulangerie-cavan"
//   },
//   {
//     path: "/#/bakery/boutique-gavottes-taden"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-vicomt"
//   },
//   {
//     path: "/#/bakery/paulette"
//   },
//   {
//     path: "/#/bakery/ptisserie-micheline-et-paulette"
//   },
//   {
//     path: "/#/bakery/la-mie-paulette"
//   },
//   {
//     path: "/#/bakery/paulet-anglique"
//   },
//   {
//     path: "/#/bakery/pain-paulette"
//   },
//   {
//     path: "/#/bakery/guitteny-sarl"
//   },
//   {
//     path: "/#/bakery/patisserie-guitter"
//   },
//   {
//     path: "/#/bakery/aux-dlices-crehennais"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-artisanale--chausson-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-maison-lamotte"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-lamotte-des-pains"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-menez"
//   },
//   {
//     path: "/#/bakery/soumans-boulangerie-viennoiserie"
//   },
//   {
//     path: "/#/bakery/nothe-farine"
//   },
//   {
//     path: "/#/bakery/n-et-jp-cayet"
//   },
//   {
//     path: "/#/bakery/nn-boulanger-ptissier"
//   },
//   {
//     path: "/#/bakery/nb-dlices-moulin-du-rondeau"
//   },
//   {
//     path: "/#/bakery/christophe-brousse"
//   },
//   {
//     path: "/#/bakery/chardon-bleu--espace-gourmet-lorraine"
//   },
//   {
//     path: "/#/bakery/chardon-bleu--albert-1er-de-belgique"
//   },
//   {
//     path: "/#/bakery/chardon-bleu--espace-gourmet-rpublique"
//   },
//   {
//     path: "/#/bakery/chardon-bleu--le-versoud"
//   },
//   {
//     path: "/#/bakery/chardon-bleu--biviers"
//   },
//   {
//     path: "/#/bakery/au-temple-du-pain"
//   },
//   {
//     path: "/#/bakery/ptisserie-villard"
//   },
//   {
//     path: "/#/bakery/villard-ludovic"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-bussire"
//   },
//   {
//     path: "/#/bakery/o-delice-de-la-plaine"
//   },
//   {
//     path: "/#/bakery/boulangerie-bonnat"
//   },
//   {
//     path: "/#/bakery/leyrat-jean"
//   },
//   {
//     path: "/#/bakery/maison-leyrat"
//   },
//   {
//     path: "/#/bakery/maison-leyrat-garches"
//   },
//   {
//     path: "/#/bakery/festival-des-pains"
//   },
//   {
//     path: "/#/bakery/morel-jean-louis"
//   },
//   {
//     path: "/#/bakery/la-montagnette"
//   },
//   {
//     path: "/#/bakery/lart-du-pain-linars"
//   },
//   {
//     path: "/#/bakery/ptisserie-feuille-dor"
//   },
//   {
//     path: "/#/bakery/boulangerie-feuillette"
//   },
//   {
//     path: "/#/bakery/boulangerie-feuillette"
//   },
//   {
//     path: "/#/bakery/boulangerie-feuillette"
//   },
//   {
//     path: "/#/bakery/le-compastis"
//   },
//   {
//     path: "/#/bakery/signature-au-38"
//   },
//   {
//     path: "/#/bakery/boulangerie-signature"
//   },
//   {
//     path: "/#/bakery/la-signature-des-artisans"
//   },
//   {
//     path: "/#/bakery/boulangerie-signature-by-degrange-rue-dantibes"
//   },
//   {
//     path: "/#/bakery/boulangerie-signature-by-degrange-rue-jean-jaurs"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-arnes"
//   },
//   {
//     path: "/#/bakery/les-fournils-des-arnes"
//   },
//   {
//     path: "/#/bakery/le-bleu--boulangerie-arnes-toulouse"
//   },
//   {
//     path: "/#/bakery/crockn-mie"
//   },
//   {
//     path: "/#/bakery/crocgourmand"
//   },
//   {
//     path: "/#/bakery/croc-miam"
//   },
//   {
//     path: "/#/bakery/croc-moi"
//   },
//   {
//     path: "/#/bakery/croc-daqu"
//   },
//   {
//     path: "/#/bakery/festival-des-pains"
//   },
//   {
//     path: "/#/bakery/morel-jean-louis"
//   },
//   {
//     path: "/#/bakery/la-montagnette"
//   },
//   {
//     path: "/#/bakery/le-fournil-crozantais"
//   },
//   {
//     path: "/#/bakery/le-dunois"
//   },
//   {
//     path: "/#/bakery/banette-battesti-bettelani"
//   },
//   {
//     path: "/#/bakery/o-delice-de-la-plaine"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-feuilletire-les-champs-du-pain-"
//   },
//   {
//     path: "/#/bakery/les-champs-du-destin--pains-et-chocolats-bio"
//   },
//   {
//     path: "/#/bakery/les-champs-de-la-dme"
//   },
//   {
//     path: "/#/bakery/lafayette-delights"
//   },
//   {
//     path: "/#/bakery/boulangerie-lafayette"
//   },
//   {
//     path: "/#/bakery/boulangerie-malatier--lafayette-lyon-3"
//   },
//   {
//     path: "/#/bakery/boulangerie-delices-lafayette"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-lanouaille"
//   },
//   {
//     path: "/#/bakery/auriat-pascal"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-jg"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-fougres"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-badefols-sur-dordogne"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-lhermitage"
//   },
//   {
//     path: "/#/bakery/ribrac"
//   },
//   {
//     path: "/#/bakery/pierre-herm-saint-louis"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-moulin"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-meyrals"
//   },
//   {
//     path: "/#/bakery/lisle-aux-pains-boulangerie--ptisserie"
//   },
//   {
//     path: "/#/bakery/l-isle-aux-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-boisseau"
//   },
//   {
//     path: "/#/bakery/boulangerie-boisselier-la-miette-de-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-dlices"
//   },
//   {
//     path: "/#/bakery/maison-colibri"
//   },
//   {
//     path: "/#/bakery/boulangerie-colise-gourmet"
//   },
//   {
//     path: "/#/bakery/colin-sebastien"
//   },
//   {
//     path: "/#/bakery/maison-colin"
//   },
//   {
//     path: "/#/bakery/le-ptrin-saint-lazare"
//   },
//   {
//     path: "/#/bakery/ladure"
//   },
//   {
//     path: "/#/bakery/pierre-herm-paris"
//   },
//   {
//     path: "/#/bakery/saint-lazare-la-boulangerie"
//   },
//   {
//     path: "/#/bakery/krispy-kreme--cc-saint-lazare"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-maison-ginestet-cros-lombers"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-bardoulet"
//   },
//   {
//     path: "/#/bakery/la-gourmandise"
//   },
//   {
//     path: "/#/bakery/maison-carr"
//   },
//   {
//     path: "/#/bakery/au-buisson-dor"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-saint-gry"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-mareuil-sur-cher"
//   },
//   {
//     path: "/#/bakery/l-art-et-le-pain"
//   },
//   {
//     path: "/#/bakery/la-rivire-des-dlices"
//   },
//   {
//     path: "/#/bakery/la-riviere-des-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-fournil-de-varennes"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-jordery"
//   },
//   {
//     path: "/#/bakery/la-calche"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-grives"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-grives"
//   },
//   {
//     path: "/#/bakery/le-fournil-dissac"
//   },
//   {
//     path: "/#/bakery/isaac-sebastien"
//   },
//   {
//     path: "/#/bakery/le-petrin-des-saveurs--boulangerie-ptisserie-snacking"
//   },
//   {
//     path: "/#/bakery/maison-isaac"
//   },
//   {
//     path: "/#/bakery/festival-des-pains--artisan-boulanger"
//   },
//   {
//     path: "/#/bakery/artisan-boulangerie-villars"
//   },
//   {
//     path: "/#/bakery/la-maie-de-saint-genies"
//   },
//   {
//     path: "/#/bakery/le-ptrin-de-saint-genis"
//   },
//   {
//     path: "/#/bakery/boulangerie-verdon"
//   },
//   {
//     path: "/#/bakery/verdon"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-antoine"
//   },
//   {
//     path: "/#/bakery/le-four-de-st-antoine"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-agne"
//   },
//   {
//     path: "/#/bakery/ma-boulangerie-caf--rez"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-mareuil-sur-cher"
//   },
//   {
//     path: "/#/bakery/boulangerie-lamonzie-saint-martin"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-lavaur"
//   },
//   {
//     path: "/#/bakery/boulangerie-lacassagne"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-cassagne"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-domme-mikal"
//   },
//   {
//     path: "/#/bakery/pain-paulin"
//   },
//   {
//     path: "/#/bakery/la-jaursartisan-boulangerpatissier"
//   },
//   {
//     path: "/#/bakery/le-jaures"
//   },
//   {
//     path: "/#/bakery/mialet-alain"
//   },
//   {
//     path: "/#/bakery/patisserie-laurent"
//   },
//   {
//     path: "/#/bakery/campagne-boulangerie--bonlieu"
//   },
//   {
//     path: "/#/bakery/campagne-boulangerie--faubourg"
//   },
//   {
//     path: "/#/bakery/campagne-et-saveurs"
//   },
//   {
//     path: "/#/bakery/boulangerie-pain-de-campagne-patisserie"
//   },
//   {
//     path: "/#/bakery/pain-de-campagne"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-castelsagrat"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-des-molires"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-molieres"
//   },
//   {
//     path: "/#/bakery/la-chanteracoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-antoine"
//   },
//   {
//     path: "/#/bakery/le-four-de-st-antoine"
//   },
//   {
//     path: "/#/bakery/fournil-de-gardonnenque"
//   },
//   {
//     path: "/#/bakery/boulangerie-hautefort"
//   },
//   {
//     path: "/#/bakery/au-tour-des-traditions"
//   },
//   {
//     path: "/#/bakery/la-brioche-gelineau"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-mont-dor"
//   },
//   {
//     path: "/#/bakery/rven-chimney-cake"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-morteau"
//   },
//   {
//     path: "/#/bakery/gosselin-saint-germain"
//   },
//   {
//     path: "/#/bakery/fournil-de-pierre"
//   },
//   {
//     path: "/#/bakery/au-fournil-sainte-anne"
//   },
//   {
//     path: "/#/bakery/le-moulin-divaldi"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-sainte-anne"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-mandon"
//   },
//   {
//     path: "/#/bakery/bulle-boulangerie"
//   },
//   {
//     path: "/#/bakery/bulles-de-sucre--bulles-de-jouets-et-de-jeux--guyajeux-courcelles"
//   },
//   {
//     path: "/#/bakery/bulles-de-levain"
//   },
//   {
//     path: "/#/bakery/la-bulle-sucre-de-marie"
//   },
//   {
//     path: "/#/bakery/boulangerie-rougs"
//   },
//   {
//     path: "/#/bakery/boulangerie-rouge"
//   },
//   {
//     path: "/#/bakery/rouget-jean-claude"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-sandwich-lairelle"
//   },
//   {
//     path: "/#/bakery/laire-du-boulanger"
//   },
//   {
//     path: "/#/bakery/laurent-duchne-paris-13me"
//   },
//   {
//     path: "/#/bakery/laurent-duchne"
//   },
//   {
//     path: "/#/bakery/laurent-duchne-vincennes-ptisserie-et-caf-boutique"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-sarazin"
//   },
//   {
//     path: "/#/bakery/sarrazin-sarah"
//   },
//   {
//     path: "/#/bakery/byb-gastronomie"
//   },
//   {
//     path: "/#/bakery/by-josphine"
//   },
//   {
//     path: "/#/bakery/by-baddache"
//   },
//   {
//     path: "/#/bakery/la-byzantine"
//   },
//   {
//     path: "/#/bakery/by-diana-ptisserie"
//   },
//   {
//     path: "/#/bakery/la-bossue"
//   },
//   {
//     path: "/#/bakery/le-fourgien"
//   },
//   {
//     path: "/#/bakery/barthelaix-sarl"
//   },
//   {
//     path: "/#/bakery/ptissier-chocolatier-barthelemy"
//   },
//   {
//     path: "/#/bakery/barthoulot-philippe"
//   },
//   {
//     path: "/#/bakery/barthelemy-guillaume"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-barthlmy"
//   },
//   {
//     path: "/#/bakery/marc-verdant--les-gravilliers-pontarlier"
//   },
//   {
//     path: "/#/bakery/soyez-gourmands"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-soyez-gourmands"
//   },
//   {
//     path: "/#/bakery/soyez-gourmands"
//   },
//   {
//     path: "/#/bakery/maison-vernet"
//   },
//   {
//     path: "/#/bakery/vernet-michel"
//   },
//   {
//     path: "/#/bakery/verney-cyrille"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-verney"
//   },
//   {
//     path: "/#/bakery/ptisserie-vernet"
//   },
//   {
//     path: "/#/bakery/boulangerie-cleron-james"
//   },
//   {
//     path: "/#/bakery/lombard-pascal"
//   },
//   {
//     path: "/#/bakery/lombard-alain"
//   },
//   {
//     path: "/#/bakery/lombard-duban-veronique"
//   },
//   {
//     path: "/#/bakery/donz-didier"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-march-lombard"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-mathey"
//   },
//   {
//     path: "/#/bakery/maison-vaucamps-dunkerque-centre"
//   },
//   {
//     path: "/#/bakery/maison-vaucamps-malo-les-bains"
//   },
//   {
//     path: "/#/bakery/le-secret-des-pains--71590-gergy--lisa-et-maximilien-marchal-glain"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-beauvallon"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-lepeautre--boulangerie-ptisserie-eric-ragon"
//   },
//   {
//     path: "/#/bakery/franois-pralus-croix-rousse"
//   },
//   {
//     path: "/#/bakery/franois-la-ptisserie"
//   },
//   {
//     path: "/#/bakery/franois-descamps"
//   },
//   {
//     path: "/#/bakery/francois"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-belmonte"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-belmonte"
//   },
//   {
//     path: "/#/bakery/les-doubs-biscuits"
//   },
//   {
//     path: "/#/bakery/aux-doubsoeurs"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-sainte-anne"
//   },
//   {
//     path: "/#/bakery/fournil-de-pierre"
//   },
//   {
//     path: "/#/bakery/au-fournil-sainte-anne"
//   },
//   {
//     path: "/#/bakery/le-moulin-divaldi"
//   },
//   {
//     path: "/#/bakery/boulangerie-torpes"
//   },
//   {
//     path: "/#/bakery/boulangerie-buffard"
//   },
//   {
//     path: "/#/bakery/morreale-stephane"
//   },
//   {
//     path: "/#/bakery/maison-lorayane"
//   },
//   {
//     path: "/#/bakery/le-campagn-art"
//   },
//   {
//     path: "/#/bakery/le-campagn"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-le-campagnard"
//   },
//   {
//     path: "/#/bakery/la-manufacture-du-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-marcel-lyon"
//   },
//   {
//     path: "/#/bakery/pierre-herm-gare-lyon-part-dieu"
//   },
//   {
//     path: "/#/bakery/pralus-lyon-saint-jean-ptisserie-chocolaterie"
//   },
//   {
//     path: "/#/bakery/samson-frederic"
//   },
//   {
//     path: "/#/bakery/au-bon-pain-de-campagne"
//   },
//   {
//     path: "/#/bakery/boulangerie-savigny"
//   },
//   {
//     path: "/#/bakery/boulangerie-giraud-samson"
//   },
//   {
//     path: "/#/bakery/le-moncey"
//   },
//   {
//     path: "/#/bakery/boulangerie-genests"
//   },
//   {
//     path: "/#/bakery/la-genesienne"
//   },
//   {
//     path: "/#/bakery/genest-s-liszt"
//   },
//   {
//     path: "/#/bakery/la-gourmandise-du-blamont"
//   },
//   {
//     path: "/#/bakery/la-blamontaise"
//   },
//   {
//     path: "/#/bakery/boulangerie-a-fougeray"
//   },
//   {
//     path: "/#/bakery/regal-roosevelt-rhone-delices"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--crteil-carrefour-pompadour"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--morangis"
//   },
//   {
//     path: "/#/bakery/la-romainville"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--epinay-sur-seine"
//   },
//   {
//     path: "/#/bakery/boulangerie-besanon"
//   },
//   {
//     path: "/#/bakery/donuts-factory-besanon"
//   },
//   {
//     path: "/#/bakery/baud-patisserie-besanon-centre"
//   },
//   {
//     path: "/#/bakery/la-grange-des-pains"
//   },
//   {
//     path: "/#/bakery/la-grange-pain-sarl"
//   },
//   {
//     path: "/#/bakery/la-grange-de-nathalie"
//   },
//   {
//     path: "/#/bakery/la-grange-aux-saveurs"
//   },
//   {
//     path: "/#/bakery/la-grange-aux-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-novillars"
//   },
//   {
//     path: "/#/bakery/boulangerie-chazot-eurl"
//   },
//   {
//     path: "/#/bakery/ptisserie-etchebaster"
//   },
//   {
//     path: "/#/bakery/boulangerie-crestey"
//   },
//   {
//     path: "/#/bakery/maison-crest"
//   },
//   {
//     path: "/#/bakery/loule-de-bl"
//   },
//   {
//     path: "/#/bakery/dietsch-georges"
//   },
//   {
//     path: "/#/bakery/dieme"
//   },
//   {
//     path: "/#/bakery/dieulesaint-cyrille"
//   },
//   {
//     path: "/#/bakery/dieu-pierre"
//   },
//   {
//     path: "/#/bakery/dieusaert-isabelle"
//   },
//   {
//     path: "/#/bakery/granet-frdric"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-granet"
//   },
//   {
//     path: "/#/bakery/chez-louis-by-thierry-avignon"
//   },
//   {
//     path: "/#/bakery/le-fournil-des-prs"
//   },
//   {
//     path: "/#/bakery/boulangerie-bouchet"
//   },
//   {
//     path: "/#/bakery/boulangerie-bouchet"
//   },
//   {
//     path: "/#/bakery/boulangerie-servage-r"
//   },
//   {
//     path: "/#/bakery/bethany-bouchet"
//   },
//   {
//     path: "/#/bakery/boucherie-de-lhorloge"
//   },
//   {
//     path: "/#/bakery/bretteau-sbastien"
//   },
//   {
//     path: "/#/bakery/bretteville"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-bretteville"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-beauvallon"
//   },
//   {
//     path: "/#/bakery/albon-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-dalbon"
//   },
//   {
//     path: "/#/bakery/chamaret-didier"
//   },
//   {
//     path: "/#/bakery/boulangerie-place-xavier"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-pont-de-clans"
//   },
//   {
//     path: "/#/bakery/le-fournil-saint-ferrol"
//   },
//   {
//     path: "/#/bakery/le-boulch-et-fils-sarl"
//   },
//   {
//     path: "/#/bakery/-la-beauvoisine"
//   },
//   {
//     path: "/#/bakery/distributeur-de-baguettes-la-marmite-du-meunier-24h24"
//   },
//   {
//     path: "/#/bakery/fournil-du-pigeonnier"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-malataverne"
//   },
//   {
//     path: "/#/bakery/cambon-thierry"
//   },
//   {
//     path: "/#/bakery/cambon-thierry"
//   },
//   {
//     path: "/#/bakery/boulangerie-eric-aubert"
//   },
//   {
//     path: "/#/bakery/lamie-bourthoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-essarts"
//   },
//   {
//     path: "/#/bakery/chez-many"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-barre"
//   },
//   {
//     path: "/#/bakery/barcelon-jacques"
//   },
//   {
//     path: "/#/bakery/barca-ambar"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-chantaloups"
//   },
//   {
//     path: "/#/bakery/maison-cesbron-boulangerie-du-parc"
//   },
//   {
//     path: "/#/bakery/au-fournil-du-parc-sarl"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-parc"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-du-parc-de-diane"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-parc"
//   },
//   {
//     path: "/#/bakery/mostier-mickal"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-maclou"
//   },
//   {
//     path: "/#/bakery/lami-des-pains"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--epinay-sur-seine"
//   },
//   {
//     path: "/#/bakery/la-pralinoise"
//   },
//   {
//     path: "/#/bakery/lily-cake"
//   },
//   {
//     path: "/#/bakery/la-cuisine-de-lily"
//   },
//   {
//     path: "/#/bakery/boulangerie-lily-rose"
//   },
//   {
//     path: "/#/bakery/lili-cake-store"
//   },
//   {
//     path: "/#/bakery/lili-croustille"
//   },
//   {
//     path: "/#/bakery/fontenay"
//   },
//   {
//     path: "/#/bakery/la-fontenaysienne"
//   },
//   {
//     path: "/#/bakery/au-galion-dor"
//   },
//   {
//     path: "/#/bakery/folie-gourmande-verrires"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-prs"
//   },
//   {
//     path: "/#/bakery/dor-et-mie"
//   },
//   {
//     path: "/#/bakery/biscuiterie-dorient-et-dailleurs"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-dore"
//   },
//   {
//     path: "/#/bakery/brenot"
//   },
//   {
//     path: "/#/bakery/brin-de-levain"
//   },
//   {
//     path: "/#/bakery/pradelle-jean-jacques"
//   },
//   {
//     path: "/#/bakery/sarl-boulangerie-pradelles"
//   },
//   {
//     path: "/#/bakery/ptisserie-laurent"
//   },
//   {
//     path: "/#/bakery/paul"
//   },
//   {
//     path: "/#/bakery/boulangerie-condorcet"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-condorcet"
//   },
//   {
//     path: "/#/bakery/les-dlices-de-saint-roman"
//   },
//   {
//     path: "/#/bakery/pani-canto-le-fournil-des-cevennes"
//   },
//   {
//     path: "/#/bakery/marchese-laurent"
//   },
//   {
//     path: "/#/bakery/marchesi-david"
//   },
//   {
//     path: "/#/bakery/rottier-laurent"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-olland"
//   },
//   {
//     path: "/#/bakery/cussenot-allan"
//   },
//   {
//     path: "/#/bakery/cussenot-allan"
//   },
//   {
//     path: "/#/bakery/ptisserie-chocolaterie-salon-de-th-la-chaumire"
//   },
//   {
//     path: "/#/bakery/le-fournil-disa"
//   },
//   {
//     path: "/#/bakery/boulangerie-florian-launay"
//   },
//   {
//     path: "/#/bakery/tonys-cakes"
//   },
//   {
//     path: "/#/bakery/ptisserie-tony-pluot"
//   },
//   {
//     path: "/#/bakery/herve-stephane-yannick-tony"
//   },
//   {
//     path: "/#/bakery/mr-suaud-tony"
//   },
//   {
//     path: "/#/bakery/la-crothoise"
//   },
//   {
//     path: "/#/bakery/chambray-les-tours"
//   },
//   {
//     path: "/#/bakery/traiteur-auchan-tours-sud-chambray"
//   },
//   {
//     path: "/#/bakery/la-mie-cline-forum-dorvault"
//   },
//   {
//     path: "/#/bakery/beaucourt-frres"
//   },
//   {
//     path: "/#/bakery/beaucourt-fils"
//   },
//   {
//     path: "/#/bakery/beaucourt-fils"
//   },
//   {
//     path: "/#/bakery/boulangerie--ptisserie-beaucourt"
//   },
//   {
//     path: "/#/bakery/massot-raphael"
//   },
//   {
//     path: "/#/bakery/massot-guillaume"
//   },
//   {
//     path: "/#/bakery/sarah-et-benot--saumuroise"
//   },
//   {
//     path: "/#/bakery/ej-coudray--boulangerie-ptisserie-chocolaterie"
//   },
//   {
//     path: "/#/bakery/fournil-du-coudray"
//   },
//   {
//     path: "/#/bakery/le-bec-sucr-sal"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-selles"
//   },
//   {
//     path: "/#/bakery/boulangerie-jumel"
//   },
//   {
//     path: "/#/bakery/au-fournil-brayon-maison-bernardin"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-bray"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-madeleine-sarl"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-la-madeleine"
//   },
//   {
//     path: "/#/bakery/blenews"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-la-madeleine"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-saint-luc"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-val"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-val-de-grce"
//   },
//   {
//     path: "/#/bakery/les-dlices-du-val"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-vieux-port"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-grainville"
//   },
//   {
//     path: "/#/bakery/tilly"
//   },
//   {
//     path: "/#/bakery/boulangerie-mamie-madeleine"
//   },
//   {
//     path: "/#/bakery/la-jolie-tarte"
//   },
//   {
//     path: "/#/bakery/les-gourmandises-de-tilly"
//   },
//   {
//     path: "/#/bakery/la-baguette-de-campagne"
//   },
//   {
//     path: "/#/bakery/bohme-christophe"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-marennaise"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-mare-drancy"
//   },
//   {
//     path: "/#/bakery/le-grenier-pain-tocqueville"
//   },
//   {
//     path: "/#/bakery/tocqueville-bruno"
//   },
//   {
//     path: "/#/bakery/la-biscuiterie-de-chambord"
//   },
//   {
//     path: "/#/bakery/la-biscuiterie-de-chambord"
//   },
//   {
//     path: "/#/bakery/biscuiterie-de-chambord"
//   },
//   {
//     path: "/#/bakery/la-biscuiterie-de-chambord"
//   },
//   {
//     path: "/#/bakery/romane-anthony"
//   },
//   {
//     path: "/#/bakery/boulangerie-romane-et-mickal"
//   },
//   {
//     path: "/#/bakery/boulangerie-artisanale-romano-sarl"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-du-val"
//   },
//   {
//     path: "/#/bakery/cookidiction"
//   },
//   {
//     path: "/#/bakery/latelier-du-ptit-louis"
//   },
//   {
//     path: "/#/bakery/popelini-neuilly"
//   },
//   {
//     path: "/#/bakery/pain-neuilly"
//   },
//   {
//     path: "/#/bakery/justine-co"
//   },
//   {
//     path: "/#/bakery/boulangerie-epaignes"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-isles"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-beuzeville"
//   },
//   {
//     path: "/#/bakery/breteuil"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-breteuil"
//   },
//   {
//     path: "/#/bakery/boulangerie-corneille"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-corneillette"
//   },
//   {
//     path: "/#/bakery/portes-ouvertes-esg-13-mai"
//   },
//   {
//     path: "/#/bakery/les-portes-gourmandes"
//   },
//   {
//     path: "/#/bakery/aux-portes-de-largonne-mercier-coralie"
//   },
//   {
//     path: "/#/bakery/les-portes-de-la-balagne"
//   },
//   {
//     path: "/#/bakery/la-flnerie-notre-dame"
//   },
//   {
//     path: "/#/bakery/boulangerie-notre-dame"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-selles"
//   },
//   {
//     path: "/#/bakery/saccas-katy-guillaume"
//   },
//   {
//     path: "/#/bakery/la-boulangerie--menneval"
//   },
//   {
//     path: "/#/bakery/fournil-andeville"
//   },
//   {
//     path: "/#/bakery/andeco"
//   },
//   {
//     path: "/#/bakery/au-fournil-dailly"
//   },
//   {
//     path: "/#/bakery/boulangerie-chaudron"
//   },
//   {
//     path: "/#/bakery/maison-chaudron-artisan-boulanger-ptissier"
//   },
//   {
//     path: "/#/bakery/ptisserie-le-chardon-bleu"
//   },
//   {
//     path: "/#/bakery/ptisserie-chaudron"
//   },
//   {
//     path: "/#/bakery/boulangerie-brouillon-philippe"
//   },
//   {
//     path: "/#/bakery/brouard-laurent-jean-michel-boulangerie-patisserie"
//   },
//   {
//     path: "/#/bakery/la-brouette-boutique-paysanne-ferme-dorvilliers-paysans-boulangers-bio"
//   },
//   {
//     path: "/#/bakery/le-fournil-broutain"
//   },
//   {
//     path: "/#/bakery/challet-yannick"
//   },
//   {
//     path: "/#/bakery/chalet-concorde"
//   },
//   {
//     path: "/#/bakery/chalet-alpain"
//   },
//   {
//     path: "/#/bakery/le-chalet-de-la-diligenceex-le-relais-de-la-diligence"
//   },
//   {
//     path: "/#/bakery/le-chalet-gourmand"
//   },
//   {
//     path: "/#/bakery/maison-de-gas"
//   },
//   {
//     path: "/#/bakery/o-ptit-plaisir-langue-de-chat"
//   },
//   {
//     path: "/#/bakery/xyz-company"
//   },
//   {
//     path: "/#/bakery/gastons"
//   },
//   {
//     path: "/#/bakery/gaspard-est-dans-le-ptrin"
//   },
//   {
//     path: "/#/bakery/gastons-lescar"
//   },
//   {
//     path: "/#/bakery/gastel"
//   },
//   {
//     path: "/#/bakery/gastro-folies"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-montreuil"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-templiers"
//   },
//   {
//     path: "/#/bakery/les-montreuillois"
//   },
//   {
//     path: "/#/bakery/neron"
//   },
//   {
//     path: "/#/bakery/boulangerie-manoury"
//   },
//   {
//     path: "/#/bakery/aux-sources-du-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-source"
//   },
//   {
//     path: "/#/bakery/le-retour-aux-sources"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-source"
//   },
//   {
//     path: "/#/bakery/la-source-du-pain"
//   },
//   {
//     path: "/#/bakery/le-grenier-gourmand"
//   },
//   {
//     path: "/#/bakery/pains-levs--pain-bio-au-levain-naturel"
//   },
//   {
//     path: "/#/bakery/lucette"
//   },
//   {
//     path: "/#/bakery/emma-ptisserie-boulangerie-sainte-luce-sur-loire"
//   },
//   {
//     path: "/#/bakery/lepi-luceen"
//   },
//   {
//     path: "/#/bakery/fournil-sainte-luce"
//   },
//   {
//     path: "/#/bakery/lucette"
//   },
//   {
//     path: "/#/bakery/la-ptisserie-de-chartres"
//   },
//   {
//     path: "/#/bakery/franconville-rue-du-haut-daulny"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-jouy"
//   },
//   {
//     path: "/#/bakery/aux-dlices-de-jouy"
//   },
//   {
//     path: "/#/bakery/boulangerie-fjouy-ptisserie"
//   },
//   {
//     path: "/#/bakery/boulangerie-doyen"
//   },
//   {
//     path: "/#/bakery/butterfly-ptisseries"
//   },
//   {
//     path: "/#/bakery/bunnys-cookies"
//   },
//   {
//     path: "/#/bakery/bulliz"
//   },
//   {
//     path: "/#/bakery/buns-baker-toulouse"
//   },
//   {
//     path: "/#/bakery/centre-ville"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-l-ardre"
//   },
//   {
//     path: "/#/bakery/le-caprice-dor"
//   },
//   {
//     path: "/#/bakery/mr-magny-gerard"
//   },
//   {
//     path: "/#/bakery/charpentier"
//   },
//   {
//     path: "/#/bakery/charpentier-et-associs"
//   },
//   {
//     path: "/#/bakery/ma-boulangerie-caf--la-flche"
//   },
//   {
//     path: "/#/bakery/boulangerie-charpentier-ludovic"
//   },
//   {
//     path: "/#/bakery/dreux-ambroise"
//   },
//   {
//     path: "/#/bakery/la-saint-jean"
//   },
//   {
//     path: "/#/bakery/collectif-tte-bche"
//   },
//   {
//     path: "/#/bakery/colle"
//   },
//   {
//     path: "/#/bakery/collery-jrme"
//   },
//   {
//     path: "/#/bakery/ptisserie-boulangerie-chocolaterie-grgory-collet"
//   },
//   {
//     path: "/#/bakery/collection-paris"
//   },
//   {
//     path: "/#/bakery/beauchet-samuel-daniel-rene"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--villebon-sur-yvette"
//   },
//   {
//     path: "/#/bakery/nogent-le-roi"
//   },
//   {
//     path: "/#/bakery/france-cake-tradition"
//   },
//   {
//     path: "/#/bakery/les-macarons-dolivier-sas-france-macaron"
//   },
//   {
//     path: "/#/bakery/le-fournil-dautrefois"
//   },
//   {
//     path: "/#/bakery/patisserie-guillaume-france"
//   },
//   {
//     path: "/#/bakery/la-baguette-dore"
//   },
//   {
//     path: "/#/bakery/boulangerie-chouquette"
//   },
//   {
//     path: "/#/bakery/boulangerie-around-the-bread"
//   },
//   {
//     path: "/#/bakery/arouss"
//   },
//   {
//     path: "/#/bakery/ptisserie-la-romainville--goussainville"
//   },
//   {
//     path: "/#/bakery/la-brouette-boutique-paysanne-ferme-dorvilliers-paysans-boulangers-bio"
//   },
//   {
//     path: "/#/bakery/ptisserie-gilles-marchal"
//   },
//   {
//     path: "/#/bakery/boulangerie-gilles-sarl"
//   },
//   {
//     path: "/#/bakery/gilles-thierry"
//   },
//   {
//     path: "/#/bakery/gilles-francis-guy"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-estelle-et-gilles-ritter"
//   },
//   {
//     path: "/#/bakery/l-agatine"
//   },
//   {
//     path: "/#/bakery/tartine-bonne-humeur"
//   },
//   {
//     path: "/#/bakery/maison-sabatier"
//   },
//   {
//     path: "/#/bakery/boulangerie-jean-pierre-chesn"
//   },
//   {
//     path: "/#/bakery/indivision-papadopoulos-jean-pierre"
//   },
//   {
//     path: "/#/bakery/kouign-amann-berrou"
//   },
//   {
//     path: "/#/bakery/tolego"
//   },
//   {
//     path: "/#/bakery/fournil-de-leonce"
//   },
//   {
//     path: "/#/bakery/maison-de-leon"
//   },
//   {
//     path: "/#/bakery/leone"
//   },
//   {
//     path: "/#/bakery/leon-et-marius"
//   },
//   {
//     path: "/#/bakery/maison-le-faou"
//   },
//   {
//     path: "/#/bakery/stphane-giraud-roscoff"
//   },
//   {
//     path: "/#/bakery/chez-raqjo"
//   },
//   {
//     path: "/#/bakery/chez-bouder"
//   },
//   {
//     path: "/#/bakery/boulangerie-chauvet"
//   },
//   {
//     path: "/#/bakery/la-biscuiterie-de-chambord"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-les-tabliers-toqus-by-sbastien-baye"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-traiteur-atelier-garlan"
//   },
//   {
//     path: "/#/bakery/la-maison-du-boulanger-plabennec"
//   },
//   {
//     path: "/#/bakery/boulangerie-blanc"
//   },
//   {
//     path: "/#/bakery/blanchard-stphane"
//   },
//   {
//     path: "/#/bakery/boulangerie-blanchard"
//   },
//   {
//     path: "/#/bakery/boulangerie-blanc-andr"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-saint-nicolas"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-goff"
//   },
//   {
//     path: "/#/bakery/lazzarotto-philippe"
//   },
//   {
//     path: "/#/bakery/lazrag"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-lazaar"
//   },
//   {
//     path: "/#/bakery/laziza-rida"
//   },
//   {
//     path: "/#/bakery/laziza"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-quimperloise"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-plomarch"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-benodet"
//   },
//   {
//     path: "/#/bakery/neveztell"
//   },
//   {
//     path: "/#/bakery/brest"
//   },
//   {
//     path: "/#/bakery/brest-yves"
//   },
//   {
//     path: "/#/bakery/paris-brest"
//   },
//   {
//     path: "/#/bakery/brest-bcd"
//   },
//   {
//     path: "/#/bakery/paul-brest-moulin-blanc"
//   },
//   {
//     path: "/#/bakery/le-pain-des-cimes-1400--ville-vieille"
//   },
//   {
//     path: "/#/bakery/baron-frres"
//   },
//   {
//     path: "/#/bakery/baron-jean-luc"
//   },
//   {
//     path: "/#/bakery/la-baronne"
//   },
//   {
//     path: "/#/bakery/baron-thierry"
//   },
//   {
//     path: "/#/bakery/combas-francis"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-fabrique-rouvire"
//   },
//   {
//     path: "/#/bakery/au-coeur-de-notre-dame"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/au-fournil-sarabel"
//   },
//   {
//     path: "/#/bakery/tradition-gourmandises"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-noly"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-la-fort-des-pains"
//   },
//   {
//     path: "/#/bakery/la-gaillonnette"
//   },
//   {
//     path: "/#/bakery/lumeau-denis"
//   },
//   {
//     path: "/#/bakery/les-saveurs-de-mon-moulin"
//   },
//   {
//     path: "/#/bakery/aux-dlices-digny"
//   },
//   {
//     path: "/#/bakery/castel"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-coffee-shop-benot-castel"
//   },
//   {
//     path: "/#/bakery/castel-boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/benot-castel-jean-pierre-timbaud"
//   },
//   {
//     path: "/#/bakery/castellano-marc"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-du-roi"
//   },
//   {
//     path: "/#/bakery/les-ptisseries-du-roy--ptisserie-salon-de-th-versailles"
//   },
//   {
//     path: "/#/bakery/les-traditions-du-roi"
//   },
//   {
//     path: "/#/bakery/sauveur-ptissier-chocolatier-artisan"
//   },
//   {
//     path: "/#/bakery/sauvet-jamet-marie-laure-maryse"
//   },
//   {
//     path: "/#/bakery/maison-seuz-ex-fournilin"
//   },
//   {
//     path: "/#/bakery/le-friand-daigues-mortes"
//   },
//   {
//     path: "/#/bakery/biscuiterie-du-fort-bloqu"
//   },
//   {
//     path: "/#/bakery/au-ptrin-du-fort"
//   },
//   {
//     path: "/#/bakery/boulangerie-damien-cros"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-crosnier-alain"
//   },
//   {
//     path: "/#/bakery/maison-crosnier"
//   },
//   {
//     path: "/#/bakery/jacques-cros"
//   },
//   {
//     path: "/#/bakery/ptisserie-jean-cros--gteaux-vnementiel"
//   },
//   {
//     path: "/#/bakery/maison-cardet"
//   },
//   {
//     path: "/#/bakery/cardet-thierry"
//   },
//   {
//     path: "/#/bakery/au-fournil-danduze"
//   },
//   {
//     path: "/#/bakery/mf-amalric-g-privat"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-rousson"
//   },
//   {
//     path: "/#/bakery/nimes-center"
//   },
//   {
//     path: "/#/bakery/nmes"
//   },
//   {
//     path: "/#/bakery/paul-vache-noire"
//   },
//   {
//     path: "/#/bakery/lorsannaise"
//   },
//   {
//     path: "/#/bakery/bouquet-de-ptisseries"
//   },
//   {
//     path: "/#/bakery/boulangerie-pascal-roussel"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-bouquet-didier"
//   },
//   {
//     path: "/#/bakery/bouquet-de-pains"
//   },
//   {
//     path: "/#/bakery/le-grenier-pain"
//   },
//   {
//     path: "/#/bakery/le-grenier-pain-le-rheu"
//   },
//   {
//     path: "/#/bakery/le-grenier-pain-chang"
//   },
//   {
//     path: "/#/bakery/le-grenier-pain-trlaz"
//   },
//   {
//     path: "/#/bakery/le-grenier-pain-angers"
//   },
//   {
//     path: "/#/bakery/le-moulin-de-la-poterie"
//   },
//   {
//     path: "/#/bakery/des-pains-qui-parlent-bersol"
//   },
//   {
//     path: "/#/bakery/must-try-croissant-la-maison-disabelle"
//   },
//   {
//     path: "/#/bakery/ptisserie-musquar"
//   },
//   {
//     path: "/#/bakery/la-muscadine"
//   },
//   {
//     path: "/#/bakery/patisserie-museur"
//   },
//   {
//     path: "/#/bakery/le-muse-du-pain"
//   },
//   {
//     path: "/#/bakery/larrt-gourmand"
//   },
//   {
//     path: "/#/bakery/larrt-pains--st-hilaire"
//   },
//   {
//     path: "/#/bakery/boulangerie-larrt-pains"
//   },
//   {
//     path: "/#/bakery/larrt-gourmand--sandwicherie-ptisserie"
//   },
//   {
//     path: "/#/bakery/la-fougasse-duzs"
//   },
//   {
//     path: "/#/bakery/pb-alesia"
//   },
//   {
//     path: "/#/bakery/au-fournil-alsien"
//   },
//   {
//     path: "/#/bakery/la-pyramide-des-pains-sandwicherie-patisserie-st-christol-les-ales"
//   },
//   {
//     path: "/#/bakery/aux-dlices-dalessia"
//   },
//   {
//     path: "/#/bakery/boulangerie-bonnet-stphane"
//   },
//   {
//     path: "/#/bakery/boulangerie-bonnet"
//   },
//   {
//     path: "/#/bakery/la-pyramide-des-pains-sandwicherie-patisserie-st-christol-les-ales"
//   },
//   {
//     path: "/#/bakery/arbonnier-christophe"
//   },
//   {
//     path: "/#/bakery/le-zed-boulangerie"
//   },
//   {
//     path: "/#/bakery/maison-beauhaire--lguevin"
//   },
//   {
//     path: "/#/bakery/fossier"
//   },
//   {
//     path: "/#/bakery/fossier-magasin-usine"
//   },
//   {
//     path: "/#/bakery/fossier"
//   },
//   {
//     path: "/#/bakery/magasin-biscuits-fossier-pierry"
//   },
//   {
//     path: "/#/bakery/chaumeny-sarl"
//   },
//   {
//     path: "/#/bakery/la-chaumire-de-rosny"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-chaumire"
//   },
//   {
//     path: "/#/bakery/boulangerie-yohann-et-mercedes--cugnaux"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-aux-pains-du-muret"
//   },
//   {
//     path: "/#/bakery/saint-lys-boulangerie"
//   },
//   {
//     path: "/#/bakery/ora-ptisserie"
//   },
//   {
//     path: "/#/bakery/lore-smerveille"
//   },
//   {
//     path: "/#/bakery/lore-des-pains"
//   },
//   {
//     path: "/#/bakery/o-repre-damaury"
//   },
//   {
//     path: "/#/bakery/miremont-patisserie"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-miremont"
//   },
//   {
//     path: "/#/bakery/sophie-lebreuilly"
//   },
//   {
//     path: "/#/bakery/histoire-de-got"
//   },
//   {
//     path: "/#/bakery/histoire-de-la-baguette"
//   },
//   {
//     path: "/#/bakery/histoire-de-boulanger"
//   },
//   {
//     path: "/#/bakery/histoire-du-bl"
//   },
//   {
//     path: "/#/bakery/histoire-de-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-garennes"
//   },
//   {
//     path: "/#/bakery/gareneaux-bertrand"
//   },
//   {
//     path: "/#/bakery/sarl-boulangerie-de-la-garenne"
//   },
//   {
//     path: "/#/bakery/gorrel-prestige"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-wernet-alain"
//   },
//   {
//     path: "/#/bakery/boulangerie-mh--tournefeuille"
//   },
//   {
//     path: "/#/bakery/latourrette-michael"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-latour"
//   },
//   {
//     path: "/#/bakery/la-tourtellerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-latourte"
//   },
//   {
//     path: "/#/bakery/biscuiterie-latour"
//   },
//   {
//     path: "/#/bakery/la-cure-gourmande-lourdes"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/sarl-boulangerie-lhermitte"
//   },
//   {
//     path: "/#/bakery/boulangerie-cox"
//   },
//   {
//     path: "/#/bakery/gourmandises-de-coccinelle"
//   },
//   {
//     path: "/#/bakery/saveurs-croquants"
//   },
//   {
//     path: "/#/bakery/saveur-intense"
//   },
//   {
//     path: "/#/bakery/saveurs-et-gourmandises"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-akharouid-pre-et-fils"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-bessires"
//   },
//   {
//     path: "/#/bakery/la-lauragaise"
//   },
//   {
//     path: "/#/bakery/oh-my-cooks--cookies-toulouse"
//   },
//   {
//     path: "/#/bakery/-donuts-toulouse"
//   },
//   {
//     path: "/#/bakery/le-fournil-deymet"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-des-canes"
//   },
//   {
//     path: "/#/bakery/pains-de-beaufort"
//   },
//   {
//     path: "/#/bakery/les-delices-de-beaufort"
//   },
//   {
//     path: "/#/bakery/jules-et-marie-escalquens"
//   },
//   {
//     path: "/#/bakery/valentine"
//   },
//   {
//     path: "/#/bakery/valentine-bakery"
//   },
//   {
//     path: "/#/bakery/valentines-dlices"
//   },
//   {
//     path: "/#/bakery/mademoiselle-valentine-ptisserie--salon-de-th"
//   },
//   {
//     path: "/#/bakery/-levains-boulangerie-patisserie"
//   },
//   {
//     path: "/#/bakery/sophie-lebreuilly"
//   },
//   {
//     path: "/#/bakery/huis-laplange"
//   },
//   {
//     path: "/#/bakery/au-pain-de-st-jean"
//   },
//   {
//     path: "/#/bakery/boulangerie-saint-jean-moinard-alain"
//   },
//   {
//     path: "/#/bakery/maison-couret"
//   },
//   {
//     path: "/#/bakery/union-boulangerie"
//   },
//   {
//     path: "/#/bakery/la-mie-de-pain-lunion"
//   },
//   {
//     path: "/#/bakery/marie-blachre-boulangerie-sandwicherie-tarterie"
//   },
//   {
//     path: "/#/bakery/sodex-ecoffet"
//   },
//   {
//     path: "/#/bakery/so-dlicieux"
//   },
//   {
//     path: "/#/bakery/maison-mauranes--matras"
//   },
//   {
//     path: "/#/bakery/maison-mauranes--ville-bourbon"
//   },
//   {
//     path: "/#/bakery/maison-mauranes--thas"
//   },
//   {
//     path: "/#/bakery/maison-mauranes--tarn"
//   },
//   {
//     path: "/#/bakery/maison-mauranes--coulandrires"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-christian-larroque-et-ses-fils"
//   },
//   {
//     path: "/#/bakery/berat-boulangerie"
//   },
//   {
//     path: "/#/bakery/berat-boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-berat"
//   },
//   {
//     path: "/#/bakery/ptisserie-bax"
//   },
//   {
//     path: "/#/bakery/latourrette-michael"
//   },
//   {
//     path: "/#/bakery/roux-daniel"
//   },
//   {
//     path: "/#/bakery/boulangerie-roux-fouillet"
//   },
//   {
//     path: "/#/bakery/roux-philippe"
//   },
//   {
//     path: "/#/bakery/boulangerie-roux-chez-anglique-et-nicolas"
//   },
//   {
//     path: "/#/bakery/sarl-boulangerie-lhermitte"
//   },
//   {
//     path: "/#/bakery/boulangerie-lapeyre"
//   },
//   {
//     path: "/#/bakery/boulangerie-lapeyre"
//   },
//   {
//     path: "/#/bakery/balmadeleine"
//   },
//   {
//     path: "/#/bakery/saint-andr-david"
//   },
//   {
//     path: "/#/bakery/milles-delices"
//   },
//   {
//     path: "/#/bakery/mille-un"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-mille-feuille-dides"
//   },
//   {
//     path: "/#/bakery/boulangerie-banette--aux-mille-douceurs-patissier"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-maison-fraudin"
//   },
//   {
//     path: "/#/bakery/ooh-my-cookie"
//   },
//   {
//     path: "/#/bakery/ooh-my-cookie-place-de-gaulle"
//   },
//   {
//     path: "/#/bakery/ookies"
//   },
//   {
//     path: "/#/bakery/ooki-cooki"
//   },
//   {
//     path: "/#/bakery/rouet-christian"
//   },
//   {
//     path: "/#/bakery/rouen-rue-du-bec"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-maison-rouer"
//   },
//   {
//     path: "/#/bakery/la-roue-du-levain"
//   },
//   {
//     path: "/#/bakery/maison-vatelier--rouen"
//   },
//   {
//     path: "/#/bakery/nomie-giorno--my-little-kitchen"
//   },
//   {
//     path: "/#/bakery/no--boulangerie-ptisserie-traiteur-moulin-bio"
//   },
//   {
//     path: "/#/bakery/no--boulangerie-ptisserie-bio"
//   },
//   {
//     path: "/#/bakery/no--boulangerie-ptisserie-traiteur-moulin-bio"
//   },
//   {
//     path: "/#/bakery/no--boulangerie-ptisserie-traiteur-moulin-bio"
//   },
//   {
//     path: "/#/bakery/boulangerie-mh--quint-fonsegrives"
//   },
//   {
//     path: "/#/bakery/gallien"
//   },
//   {
//     path: "/#/bakery/gallien-sa"
//   },
//   {
//     path: "/#/bakery/larraud-lailai"
//   },
//   {
//     path: "/#/bakery/larrat-jean-philippe"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-larrat"
//   },
//   {
//     path: "/#/bakery/le-plan-cake"
//   },
//   {
//     path: "/#/bakery/le-panificateur-matre-artisan-boulanger"
//   },
//   {
//     path: "/#/bakery/festival-des-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-mauzac"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-fronton--paul-pauline"
//   },
//   {
//     path: "/#/bakery/montastruc-la-conseillere"
//   },
//   {
//     path: "/#/bakery/legendre-tolbiac"
//   },
//   {
//     path: "/#/bakery/lgret-et-gourmandises"
//   },
//   {
//     path: "/#/bakery/legendre-joel-joel"
//   },
//   {
//     path: "/#/bakery/ptisserie-nicolas-lger-fondettes"
//   },
//   {
//     path: "/#/bakery/lamandine"
//   },
//   {
//     path: "/#/bakery/garac-boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/sanabile"
//   },
//   {
//     path: "/#/bakery/la-boulange-sanato"
//   },
//   {
//     path: "/#/bakery/sana"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-sanae-et-tony"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-vieillard"
//   },
//   {
//     path: "/#/bakery/lhotellier-franc"
//   },
//   {
//     path: "/#/bakery/linstant-sucr-revellin-pialet-didier"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-vast"
//   },
//   {
//     path: "/#/bakery/le-fournil-revelois-revel"
//   },
//   {
//     path: "/#/bakery/galaxia-3"
//   },
//   {
//     path: "/#/bakery/cake-galaxy"
//   },
//   {
//     path: "/#/bakery/sion-sbastien"
//   },
//   {
//     path: "/#/bakery/painssionnment-gourmand"
//   },
//   {
//     path: "/#/bakery/boulangerie-painssionnement"
//   },
//   {
//     path: "/#/bakery/simon-et-simon"
//   },
//   {
//     path: "/#/bakery/simon"
//   },
//   {
//     path: "/#/bakery/bcasso"
//   },
//   {
//     path: "/#/bakery/la-bcassine"
//   },
//   {
//     path: "/#/bakery/les-tartines-de-bcassine"
//   },
//   {
//     path: "/#/bakery/des-pains-qui-parlent"
//   },
//   {
//     path: "/#/bakery/boulangerie-bio-czamie"
//   },
//   {
//     path: "/#/bakery/le-czanne"
//   },
//   {
//     path: "/#/bakery/ti-biscuit"
//   },
//   {
//     path: "/#/bakery/traiteur-auchan-prigueux-marsac"
//   },
//   {
//     path: "/#/bakery/traiteur-auchan-viry-noureuil"
//   },
//   {
//     path: "/#/bakery/au-chant-du-coq"
//   },
//   {
//     path: "/#/bakery/trateur-auchan-fontenay-sous-bois"
//   },
//   {
//     path: "/#/bakery/betous-christian-henri"
//   },
//   {
//     path: "/#/bakery/patisserie-canet"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-fournil-cannetois"
//   },
//   {
//     path: "/#/bakery/boulangerie-patrice-lartigue"
//   },
//   {
//     path: "/#/bakery/boulangerie-artisanale-macphi"
//   },
//   {
//     path: "/#/bakery/aux-petits-fours-ptisserie-saint-criq"
//   },
//   {
//     path: "/#/bakery/pistache--ptisserie-et-pince-de-sel"
//   },
//   {
//     path: "/#/bakery/pistache-et-chocolat"
//   },
//   {
//     path: "/#/bakery/pistache"
//   },
//   {
//     path: "/#/bakery/la-pisserie-deloison"
//   },
//   {
//     path: "/#/bakery/le-pistore"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-laubespain"
//   },
//   {
//     path: "/#/bakery/jouemanjulie"
//   },
//   {
//     path: "/#/bakery/jouen-pascal"
//   },
//   {
//     path: "/#/bakery/les-dlices-de-roquefort"
//   },
//   {
//     path: "/#/bakery/ptisserie-sansano"
//   },
//   {
//     path: "/#/bakery/le-fournil-saint-martin"
//   },
//   {
//     path: "/#/bakery/boulangerie-bomie--saint-martin"
//   },
//   {
//     path: "/#/bakery/saint-martin-sur-ecaillon"
//   },
//   {
//     path: "/#/bakery/boulangerie-louise-saint-martin-des-champs"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-saint-clar"
//   },
//   {
//     path: "/#/bakery/durand-et-fils"
//   },
//   {
//     path: "/#/bakery/durand-jol"
//   },
//   {
//     path: "/#/bakery/durand-pre-et-fils"
//   },
//   {
//     path: "/#/bakery/durand-philippe"
//   },
//   {
//     path: "/#/bakery/matre-boulangerie-ptisserie-ambassadeurs-du-painsmaison-durand-yves"
//   },
//   {
//     path: "/#/bakery/vives-alain-vincent"
//   },
//   {
//     path: "/#/bakery/boulangerie-villefranche-de-conflent"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-la-redoute"
//   },
//   {
//     path: "/#/bakery/transpain"
//   },
//   {
//     path: "/#/bakery/le-transalpain"
//   },
//   {
//     path: "/#/bakery/transmission-de-saveurs"
//   },
//   {
//     path: "/#/bakery/transparence"
//   },
//   {
//     path: "/#/bakery/letagre-pain"
//   },
//   {
//     path: "/#/bakery/ricourt-patrick"
//   },
//   {
//     path: "/#/bakery/boulangerie-ricourt"
//   },
//   {
//     path: "/#/bakery/boulangerie-ricourt"
//   },
//   {
//     path: "/#/bakery/noel-damien"
//   },
//   {
//     path: "/#/bakery/toile-de-no"
//   },
//   {
//     path: "/#/bakery/les-gourmandises-d-erwan-et-serena"
//   },
//   {
//     path: "/#/bakery/magnani-alain"
//   },
//   {
//     path: "/#/bakery/cazeneuve-christophe-et-coralie"
//   },
//   {
//     path: "/#/bakery/origines"
//   },
//   {
//     path: "/#/bakery/boulangerie-origine"
//   },
//   {
//     path: "/#/bakery/boulangerie-origine"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-le-bourhis"
//   },
//   {
//     path: "/#/bakery/maison-planchot-origine-halle"
//   },
//   {
//     path: "/#/bakery/le-petit-palais"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-petit-palais"
//   },
//   {
//     path: "/#/bakery/montussan"
//   },
//   {
//     path: "/#/bakery/saint-emilion"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-ptrin-de-saint-emilion"
//   },
//   {
//     path: "/#/bakery/macarons-de-saint-milion--nadia-fermigier"
//   },
//   {
//     path: "/#/bakery/canels-baillardran-st-emilion"
//   },
//   {
//     path: "/#/bakery/fournil-du-marensin-le"
//   },
//   {
//     path: "/#/bakery/le-four-de-babel"
//   },
//   {
//     path: "/#/bakery/materiel-absolu-france"
//   },
//   {
//     path: "/#/bakery/boulangerie-fargues"
//   },
//   {
//     path: "/#/bakery/boulangerie-voyages-gourmands"
//   },
//   {
//     path: "/#/bakery/saint-macaire"
//   },
//   {
//     path: "/#/bakery/la-mignonette"
//   },
//   {
//     path: "/#/bakery/snc-arsac-chanin"
//   },
//   {
//     path: "/#/bakery/boulangerie-arsac"
//   },
//   {
//     path: "/#/bakery/les-dlices-de-margaux"
//   },
//   {
//     path: "/#/bakery/les-dlices-de-margaux"
//   },
//   {
//     path: "/#/bakery/ptisserie-bchard"
//   },
//   {
//     path: "/#/bakery/le-moulin-de-margaux"
//   },
//   {
//     path: "/#/bakery/margaux-m--ptissire-nomade--cours-de-ptisserie--marseille"
//   },
//   {
//     path: "/#/bakery/au-fournil-daudenge"
//   },
//   {
//     path: "/#/bakery/mdocn-crpes"
//   },
//   {
//     path: "/#/bakery/canels-baillardran-arcachon"
//   },
//   {
//     path: "/#/bakery/ptisserie-chocolaterie-aspa-loic-33000-bordeaux"
//   },
//   {
//     path: "/#/bakery/au-petit-bonheur-de-pagnol"
//   },
//   {
//     path: "/#/bakery/pierre-mathieu-ptissier-bordelais"
//   },
//   {
//     path: "/#/bakery/au-petit-bonheur-de-cesar"
//   },
//   {
//     path: "/#/bakery/barrire-sarl"
//   },
//   {
//     path: "/#/bakery/boulangerie-firmin"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-golf"
//   },
//   {
//     path: "/#/bakery/bordeaux"
//   },
//   {
//     path: "/#/bakery/canels-baillardran-bordeaux-intendance"
//   },
//   {
//     path: "/#/bakery/bag_bakery-art-gallery--boulangerie-biologique-libre-de-gluten-bordeaux"
//   },
//   {
//     path: "/#/bakery/boulangerie-cerqueira"
//   },
//   {
//     path: "/#/bakery/les-gourmandises-de-bruges"
//   },
//   {
//     path: "/#/bakery/ruche-la"
//   },
//   {
//     path: "/#/bakery/boulangerie--ptisserie-la-ruche-des-pains"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-ruche"
//   },
//   {
//     path: "/#/bakery/gaec-la-ruche-pain"
//   },
//   {
//     path: "/#/bakery/la-ruche-trianon"
//   },
//   {
//     path: "/#/bakery/batch"
//   },
//   {
//     path: "/#/bakery/boulangerie-lugosienne"
//   },
//   {
//     path: "/#/bakery/boulangerie-tony-letournel"
//   },
//   {
//     path: "/#/bakery/bourgeois-christophe"
//   },
//   {
//     path: "/#/bakery/bourgouin-boulangerie"
//   },
//   {
//     path: "/#/bakery/bourget-david"
//   },
//   {
//     path: "/#/bakery/le-temple-du-pain"
//   },
//   {
//     path: "/#/bakery/le-temple-de-la-gourmandise"
//   },
//   {
//     path: "/#/bakery/le-temple-gourmand"
//   },
//   {
//     path: "/#/bakery/dambroise"
//   },
//   {
//     path: "/#/bakery/monsieur-tartine"
//   },
//   {
//     path: "/#/bakery/avenel"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-avenel"
//   },
//   {
//     path: "/#/bakery/boulangerie-laurent--du-bois-grand-sas"
//   },
//   {
//     path: "/#/bakery/lpi-dargent"
//   },
//   {
//     path: "/#/bakery/biscuiterie-saint-guilhem"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-golf"
//   },
//   {
//     path: "/#/bakery/boissinot-thierry"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-moulon"
//   },
//   {
//     path: "/#/bakery/boulangerie-oct-tradition"
//   },
//   {
//     path: "/#/bakery/moulon"
//   },
//   {
//     path: "/#/bakery/moulin-de-chessy"
//   },
//   {
//     path: "/#/bakery/moulin-delise-saint-brieuc"
//   },
//   {
//     path: "/#/bakery/les-rives-de-la-borne"
//   },
//   {
//     path: "/#/bakery/boulangerie-lacoste"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-circuit"
//   },
//   {
//     path: "/#/bakery/boulangerie-myla"
//   },
//   {
//     path: "/#/bakery/le-creusois"
//   },
//   {
//     path: "/#/bakery/boulangerie-goursaud"
//   },
//   {
//     path: "/#/bakery/boulangerie-gours"
//   },
//   {
//     path: "/#/bakery/anglade-pour-sarl-anglade"
//   },
//   {
//     path: "/#/bakery/lartisan-boulanger-ghislain-anglade"
//   },
//   {
//     path: "/#/bakery/anglade-fv-et-fils"
//   },
//   {
//     path: "/#/bakery/la-marqueze"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-lamarque"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-sablons"
//   },
//   {
//     path: "/#/bakery/boulangerie-les-sablons"
//   },
//   {
//     path: "/#/bakery/le-pain-des-martres"
//   },
//   {
//     path: "/#/bakery/les-delices-de-saint-germain"
//   },
//   {
//     path: "/#/bakery/maison-sans-tresses"
//   },
//   {
//     path: "/#/bakery/philippe-tayac-ptisserie"
//   },
//   {
//     path: "/#/bakery/philippe-tayac-ptisserie-salon-de-th--cannes"
//   },
//   {
//     path: "/#/bakery/philippe-tayac-ptisserie-saint-laurent-du-var--cap3000"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-emile-parisse"
//   },
//   {
//     path: "/#/bakery/pains-brioches-fantaisies"
//   },
//   {
//     path: "/#/bakery/la-rauzanne"
//   },
//   {
//     path: "/#/bakery/hur-crateur-de-plaisir--arcole"
//   },
//   {
//     path: "/#/bakery/hurel-patrice"
//   },
//   {
//     path: "/#/bakery/atelier-hur"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/boulangerie-arici"
//   },
//   {
//     path: "/#/bakery/maison-laurent-sarreau"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-emile-parisse"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-du-mont-olympe"
//   },
//   {
//     path: "/#/bakery/galgon"
//   },
//   {
//     path: "/#/bakery/la-galgonnaise"
//   },
//   {
//     path: "/#/bakery/paul-brest-jean-jaurs"
//   },
//   {
//     path: "/#/bakery/paul"
//   },
//   {
//     path: "/#/bakery/paul"
//   },
//   {
//     path: "/#/bakery/paul"
//   },
//   {
//     path: "/#/bakery/les-dlices-detauliers"
//   },
//   {
//     path: "/#/bakery/ptisserie-brach"
//   },
//   {
//     path: "/#/bakery/montagne-de-pain"
//   },
//   {
//     path: "/#/bakery/une-montagne-de-gourmandises"
//   },
//   {
//     path: "/#/bakery/le-pain-des-montagnes-du-cezallier"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-chteau"
//   },
//   {
//     path: "/#/bakery/les-peintures"
//   },
//   {
//     path: "/#/bakery/boulangerie-cadaujac"
//   },
//   {
//     path: "/#/bakery/fabrgues-alain"
//   },
//   {
//     path: "/#/bakery/aux-gourmandises-disa-et-nico"
//   },
//   {
//     path: "/#/bakery/boulangerie-laurens"
//   },
//   {
//     path: "/#/bakery/le-gabian-gourmand"
//   },
//   {
//     path: "/#/bakery/jacoud-christian"
//   },
//   {
//     path: "/#/bakery/ptisserie-mattieu-jacoulot--salins-les-bains"
//   },
//   {
//     path: "/#/bakery/jacouton-mickael-gabriel"
//   },
//   {
//     path: "/#/bakery/la-cure-gourmande-pzenas"
//   },
//   {
//     path: "/#/bakery/david-vincent"
//   },
//   {
//     path: "/#/bakery/maison-lopez-poussan"
//   },
//   {
//     path: "/#/bakery/laurette-marinette"
//   },
//   {
//     path: "/#/bakery/baguettes-et-chouquettes--boulangerie-pignan"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-rouet"
//   },
//   {
//     path: "/#/bakery/-terrasse-du-rouet"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-rouet"
//   },
//   {
//     path: "/#/bakery/rouet"
//   },
//   {
//     path: "/#/bakery/montpellier-orientale-pain"
//   },
//   {
//     path: "/#/bakery/passionnment-biscuiterie-montpellier"
//   },
//   {
//     path: "/#/bakery/cinnasens-montpellier"
//   },
//   {
//     path: "/#/bakery/baguettes-chouquettes--boulangerie-ptisserie-montpellier"
//   },
//   {
//     path: "/#/bakery/boulangerie-plaissan"
//   },
//   {
//     path: "/#/bakery/au-fournil-des-garrigues"
//   },
//   {
//     path: "/#/bakery/garrigues-thierry"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-maraussan"
//   },
//   {
//     path: "/#/bakery/ptisserie-guillaume-france"
//   },
//   {
//     path: "/#/bakery/floripain"
//   },
//   {
//     path: "/#/bakery/boulangerie-cauxpain"
//   },
//   {
//     path: "/#/bakery/angelina-paris"
//   },
//   {
//     path: "/#/bakery/boulangerie-mh--camille-pujol"
//   },
//   {
//     path: "/#/bakery/boulangerie-vias-plage"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-compagnon"
//   },
//   {
//     path: "/#/bakery/le-compagnon-du-boulanger"
//   },
//   {
//     path: "/#/bakery/le-compagnon-de-pasteur"
//   },
//   {
//     path: "/#/bakery/les-compagnons-de-la-boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/le-compagnon-de-l-artisan-boulanger"
//   },
//   {
//     path: "/#/bakery/latelier-banette-clermont-lhrault"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-scellerie"
//   },
//   {
//     path: "/#/bakery/la-gigeannette"
//   },
//   {
//     path: "/#/bakery/la-beauceronne"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-thierry-redon"
//   },
//   {
//     path: "/#/bakery/boulangerie-thierry-redon"
//   },
//   {
//     path: "/#/bakery/tresse-dore-pain-ptisserie-fine"
//   },
//   {
//     path: "/#/bakery/la-tresse-dore"
//   },
//   {
//     path: "/#/bakery/maison-sans-tresses"
//   },
//   {
//     path: "/#/bakery/la-tresse-dore"
//   },
//   {
//     path: "/#/bakery/boulangerie-gvez-le-fournil-de-sylvain"
//   },
//   {
//     path: "/#/bakery/pralus--roanne-charles-de-gaulle-ptisserie-chocolaterie"
//   },
//   {
//     path: "/#/bakery/parcelles-assainies-unit-7"
//   },
//   {
//     path: "/#/bakery/boulangerie-bomie--hotel-de-ville"
//   },
//   {
//     path: "/#/bakery/maison-pozzoli--htel-dieu"
//   },
//   {
//     path: "/#/bakery/hotel"
//   },
//   {
//     path: "/#/bakery/ty-chou-saint-germain"
//   },
//   {
//     path: "/#/bakery/boulangerie-fleur-de-sarrasin"
//   },
//   {
//     path: "/#/bakery/gal-ptisserie-vitr"
//   },
//   {
//     path: "/#/bakery/gal-redout--ptissier-chocolatier"
//   },
//   {
//     path: "/#/bakery/galle-et-raphal"
//   },
//   {
//     path: "/#/bakery/gal-redout--ptissier-chocolatier"
//   },
//   {
//     path: "/#/bakery/lamour-est-dans-le-bl-retiers-35"
//   },
//   {
//     path: "/#/bakery/loblige"
//   },
//   {
//     path: "/#/bakery/patissier-chocolatier-dinger"
//   },
//   {
//     path: "/#/bakery/sain-boulangerie"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-maison-champeaud"
//   },
//   {
//     path: "/#/bakery/vandemoortele-torc-1"
//   },
//   {
//     path: "/#/bakery/bille-de-sucre"
//   },
//   {
//     path: "/#/bakery/la-panace"
//   },
//   {
//     path: "/#/bakery/vitre-michel-rene-yvon"
//   },
//   {
//     path: "/#/bakery/vitreux"
//   },
//   {
//     path: "/#/bakery/le-moulin-vitreen"
//   },
//   {
//     path: "/#/bakery/boulangerie-maison-marot"
//   },
//   {
//     path: "/#/bakery/baillet-patrick"
//   },
//   {
//     path: "/#/bakery/societe-baille-pain"
//   },
//   {
//     path: "/#/bakery/boulangerie-alain-baillet"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-vignoc"
//   },
//   {
//     path: "/#/bakery/mellelli"
//   },
//   {
//     path: "/#/bakery/mlle-rose--saint-valery-en-caux"
//   },
//   {
//     path: "/#/bakery/mlle-amandine"
//   },
//   {
//     path: "/#/bakery/mlle-loujayne-patisserie-orientales"
//   },
//   {
//     path: "/#/bakery/mademoiselle-chou"
//   },
//   {
//     path: "/#/bakery/boulangerie-la-bazouge-du-dsert"
//   },
//   {
//     path: "/#/bakery/biscuiterie-de-bretagne"
//   },
//   {
//     path: "/#/bakery/mlodie-des-pains"
//   },
//   {
//     path: "/#/bakery/mline-et-nicolas"
//   },
//   {
//     path: "/#/bakery/mlodie-du-bl"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-des-ondes"
//   },
//   {
//     path: "/#/bakery/biscuiterie-de-bretagne"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-lieuron"
//   },
//   {
//     path: "/#/bakery/princesse-bakery"
//   },
//   {
//     path: "/#/bakery/maison-princet"
//   },
//   {
//     path: "/#/bakery/la-princesse-boulangerie"
//   },
//   {
//     path: "/#/bakery/maison-princet"
//   },
//   {
//     path: "/#/bakery/la-petite-princesse"
//   },
//   {
//     path: "/#/bakery/biscuiterie-des-vntes-artisan-biscuitier-bio"
//   },
//   {
//     path: "/#/bakery/mousselin-deregnaucourt-lucie"
//   },
//   {
//     path: "/#/bakery/mousset-richard"
//   },
//   {
//     path: "/#/bakery/boulangerie-mousset"
//   },
//   {
//     path: "/#/bakery/boulangerie-mousset-les-miettes-de-pain"
//   },
//   {
//     path: "/#/bakery/ptisserie-sens"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-sens"
//   },
//   {
//     path: "/#/bakery/boulangerie-au-bonheur-des-sens"
//   },
//   {
//     path: "/#/bakery/boulangerie-gosnet"
//   },
//   {
//     path: "/#/bakery/brielles-saint-jacques"
//   },
//   {
//     path: "/#/bakery/boulangerie-polign"
//   },
//   {
//     path: "/#/bakery/odelices-derne"
//   },
//   {
//     path: "/#/bakery/biscuiterie-joubard"
//   },
//   {
//     path: "/#/bakery/la-bretagne-lhonneur"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie--la-bretagne"
//   },
//   {
//     path: "/#/bakery/fougerolles"
//   },
//   {
//     path: "/#/bakery/la-fourne-du-chteau"
//   },
//   {
//     path: "/#/bakery/vouillon-jean-philippe"
//   },
//   {
//     path: "/#/bakery/les-delices-de-villiers-faissal"
//   },
//   {
//     path: "/#/bakery/boulangerie-villiersoise"
//   },
//   {
//     path: "/#/bakery/chteauroux"
//   },
//   {
//     path: "/#/bakery/aux-gourmandises-de-cond"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-cond-chez-manu-et-thierry"
//   },
//   {
//     path: "/#/bakery/au-fournil-de-rochy-conde"
//   },
//   {
//     path: "/#/bakery/boulangerie-portier"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-associs-angers"
//   },
//   {
//     path: "/#/bakery/la-ptisserie-cyril-lignac--poncelet"
//   },
//   {
//     path: "/#/bakery/la-ptisserie-cyril-lignac--pasteur"
//   },
//   {
//     path: "/#/bakery/la-ptisserie-cyril-lignac--paul-bert"
//   },
//   {
//     path: "/#/bakery/la-ptisserie-cyril-lignac--svres"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-2-lacs"
//   },
//   {
//     path: "/#/bakery/boulangerie-thibaut-ardain--le-blanc-mteil"
//   },
//   {
//     path: "/#/bakery/mignet-julien"
//   },
//   {
//     path: "/#/bakery/migneaux-arnaud"
//   },
//   {
//     path: "/#/bakery/boulangerie-migneaux-anthony"
//   },
//   {
//     path: "/#/bakery/au-moulin-de-mignet"
//   },
//   {
//     path: "/#/bakery/la-champenoise"
//   },
//   {
//     path: "/#/bakery/la-champesoise"
//   },
//   {
//     path: "/#/bakery/boulangerie-du-parnasse"
//   },
//   {
//     path: "/#/bakery/le-fournil-du-parnasse"
//   },
//   {
//     path: "/#/bakery/la-boulangerie-de-lourdoueix-st-michel"
//   },
//   {
//     path: "/#/bakery/boulangerie-patisserie-des-marronniers"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-maronniers"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-des-maronniers"
//   },
//   {
//     path: "/#/bakery/maronnier-thierry"
//   },
//   {
//     path: "/#/bakery/au-marron-glac"
//   },
//   {
//     path: "/#/bakery/au-plaisir-de-chinon"
//   },
//   {
//     path: "/#/bakery/aux-douceurs-de-laray"
//   },
//   {
//     path: "/#/bakery/boulangerie-druyer"
//   },
//   {
//     path: "/#/bakery/latelier-st-michel"
//   },
//   {
//     path: "/#/bakery/rivire-fabrice-au-bon-mitron"
//   },
//   {
//     path: "/#/bakery/les-artisans-runis"
//   },
//   {
//     path: "/#/bakery/riviere-ludovic"
//   },
//   {
//     path: "/#/bakery/chez-catherine"
//   },
//   {
//     path: "/#/bakery/monts-merveilles"
//   },
//   {
//     path: "/#/bakery/monts-pch-mignon"
//   },
//   {
//     path: "/#/bakery/mont-sucr"
//   },
//   {
//     path: "/#/bakery/monts-pain"
//   },
//   {
//     path: "/#/bakery/paul-fondettes"
//   },
//   {
//     path: "/#/bakery/lina-boulangerie-ptisserie"
//   },
//   {
//     path: "/#/bakery/losier"
//   },
//   {
//     path: "/#/bakery/laval-et-fils-sarl"
//   },
//   {
//     path: "/#/bakery/la-valise-macarons"
//   },
//   {
//     path: "/#/bakery/les-dlices-de-lavallonnais-sarl"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-la-tour"
//   },
//   {
//     path: "/#/bakery/patisserie-de-la-tour-dauvergne"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-cron"
//   },
//   {
//     path: "/#/bakery/pralus-ste-ptisserie-chocolaterie"
//   },
//   {
//     path: "/#/bakery/boulangerie-combes-frres"
//   },
//   {
//     path: "/#/bakery/boulangerie-combes"
//   },
//   {
//     path: "/#/bakery/combe-laurent"
//   },
//   {
//     path: "/#/bakery/boulangerie-combes-jean-nol-carole"
//   },
//   {
//     path: "/#/bakery/le-pch-de-gourmandise"
//   },
//   {
//     path: "/#/bakery/le-pch-mignon"
//   },
//   {
//     path: "/#/bakery/le-pch-des-anges"
//   },
//   {
//     path: "/#/bakery/le-pch-mignon"
//   },
//   {
//     path: "/#/bakery/le-pch-mignon"
//   },
//   {
//     path: "/#/bakery/saint-suliac"
//   },
//   {
//     path: "/#/bakery/bruz"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-sandwicherie-drive"
//   },
//   {
//     path: "/#/bakery/le-crousti-chaud"
//   },
//   {
//     path: "/#/bakery/boulangerie-brec"
//   },
//   {
//     path: "/#/bakery/sma-mouaz"
//   },
//   {
//     path: "/#/bakery/baisson-claude"
//   },
//   {
//     path: "/#/bakery/lange-sbastien"
//   },
//   {
//     path: "/#/bakery/langer-laurent"
//   },
//   {
//     path: "/#/bakery/langlique-matre-artisan-boulanger"
//   },
//   {
//     path: "/#/bakery/langlique-matre-artisan-boulanger"
//   },
//   {
//     path: "/#/bakery/maison-lauris"
//   },
//   {
//     path: "/#/bakery/patisserie-marquet"
//   },
//   {
//     path: "/#/bakery/boulangerie-sainte-fauste--paul-ginisty"
//   },
//   {
//     path: "/#/bakery/la-chartreuse-de-parme"
//   },
//   {
//     path: "/#/bakery/les-belles-mes-ptisserie"
//   },
//   {
//     path: "/#/bakery/boulangerie-de-belles-manires"
//   },
//   {
//     path: "/#/bakery/les-belles-envies"
//   },
//   {
//     path: "/#/bakery/la-bien-nomme--biscuiterie-confiserie-de-belle-le-en-mer"
//   },
//   {
//     path: "/#/bakery/boulangerie-le-forezien"
//   },
//   {
//     path: "/#/bakery/la-forezienne"
//   },
//   {
//     path: "/#/bakery/le-fournil-de-pruniers"
//   },
//   {
//     path: "/#/bakery/sophie-lebreuilly"
//   },
//   {
//     path: "/#/bakery/biscuiterie-damboise"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-laurent--loches"
//   },
//   {
//     path: "/#/bakery/boulangerie-descartes"
//   },
//   {
//     path: "/#/bakery/mozart-iii"
//   },
//   {
//     path: "/#/bakery/boulangerie-mozart"
//   },
//   {
//     path: "/#/bakery/les-gourmandises-de-mozart"
//   },
//   {
//     path: "/#/bakery/boulangerie-ptisserie-mozart"
//   },
//   {
//     path: "/#/bakery/boulangerie-des-tuffeaux-sarl"
//   },
//   {
//     path: "/#/bakery/maison-fracchiolla--artisan-boulanger"
//   },
//   {
//     path: "/#/bakery/boulangerie-viriville-le-fournil-de-chambaran"
//   },
//   {
//     path: "/#/bakery/les-douceurs-de-st-guillaume"
//   },
//   {
//     path: "/#/blogs/my-bakery-classement-des-meilleurs-boulangerie-de-france"
//   },
//   {
//     path: "/#/blogs/comment-definir-une-bonne-boulangerie-sur-my-bakery"
//   }
// ]

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
      vueRouterMode: 'hash', // available values: 'hash', 'history'

      env: envparser(),
      publicPath: ctx.prod ? process.env.WEBSITE_LOCAL : '',

      extendWebpack(cfg) {
        cfg.plugins.push(
          // new SitemapPlugin({
          //   base: 'https://my-bakery.fr',
          //   paths,
          //   options: {
          //     filename: 'sitemap.xml',
          //     lastmod: true,
          //     changefreq: 'weekly',
          //   }
          // })
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
