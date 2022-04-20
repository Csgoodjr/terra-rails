'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fr2.default);

var messages = {
  "Terra.ajax.error": "Échec du chargement du contenu.",
  "Terra.form.field.optional": "(facultatif)",
  "Terra.form.select.activeOption": "{text} ({index} sur {totalOptions}).",
  "Terra.form.select.add": "Ajouter \"{text}\"",
  "Terra.form.select.ariaLabel": "Rechercher",
  "Terra.form.select.clearSelect": "Effacer la sélection",
  "Terra.form.select.defaultDisplay": "Sélectionner",
  "Terra.form.select.defaultUsageGuidance": "Utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner une option.",
  "Terra.form.select.dimmed": "Grisé.",
  "Terra.form.select.disabled": "Désactivé.",
  "Terra.form.select.listOfTotalOptions": "Liste de options.",
  "Terra.form.select.maxSelectionHelp": "Limite de {text} éléments",
  "Terra.form.select.maxSelectionOption": "{text} éléments maximum sélectionnés",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Appuyez pour naviguer vers les options.",
  "Terra.form.select.mobileUsageGuidance": "Balayez vers la droite pour naviguer vers les options.",
  "Terra.form.select.multiSelectUsageGuidance": "Saisissez du texte ou utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner ou désélectionner une option.",
  "Terra.form.select.noResults": "Aucun résultat correspondant pour \"{text}\"",
  "Terra.form.select.optGroup": "Groupe {text}",
  "Terra.form.select.option": "Options",
  "Terra.form.select.searchUsageGuidance": "Saisissez du texte ou utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner une option.",
  "Terra.form.select.selectCleared": "Valeur sélectionnée effacée.",
  "Terra.form.select.selected": "Sélectionné.",
  "Terra.form.select.selectedText": "{text} sélectionné. ({index} sur {totalOptions}).",
  "Terra.form.select.unselected": "Désélectionné.",
  "Terra.form.select.unselectedText": "{text} désélectionné.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Icône Instructions électroniques pour l'utilisation"
};
var areTranslationsLoaded = true;
var locale = 'fr-FR';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
