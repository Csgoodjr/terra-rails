'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.select.activeOption": "{text} {index} de {totalOptions}.",
  "Terra.form.select.add": "Agregar \"{text}\"",
  "Terra.form.select.ariaLabel": "Buscar",
  "Terra.form.select.clearSelect": "Borrar selección",
  "Terra.form.select.defaultDisplay": "- Seleccionar -",
  "Terra.form.select.defaultUsageGuidance": "Use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.",
  "Terra.form.select.dimmed": "Atenuado.",
  "Terra.form.select.disabled": "Deshabilitado.",
  "Terra.form.select.listOfTotalOptions": "Lista de opciones.",
  "Terra.form.select.maxSelectionHelp": "Limite los elementos {text}.",
  "Terra.form.select.maxSelectionOption": "Número máximo de elementos {text} seleccionados",
  "Terra.form.select.menu": "Menú",
  "Terra.form.select.mobileButtonUsageGuidance": "Pulse para acceder a las opciones.",
  "Terra.form.select.mobileUsageGuidance": "Deslice a la derecha para acceder a las opciones.",
  "Terra.form.select.multiSelectUsageGuidance": "Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar o deseleccionar una opción.",
  "Terra.form.select.noResults": "No se encontró ningún resultado que coincida para \"{text}\"",
  "Terra.form.select.optGroup": "Grupo {text}",
  "Terra.form.select.option": "Opciones",
  "Terra.form.select.searchUsageGuidance": "Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.",
  "Terra.form.select.selectCleared": "Se borró el valor seleccionado",
  "Terra.form.select.selected": "Seleccionado.",
  "Terra.form.select.selectedText": "Se seleccionó {text}. ({index} de {totalOptions}).",
  "Terra.form.select.unselected": "No seleccionado.",
  "Terra.form.select.unselectedText": "{text} sin seleccionar.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Icono para instrucciones electrónicas de uso"
};
var areTranslationsLoaded = true;
var locale = 'es';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
