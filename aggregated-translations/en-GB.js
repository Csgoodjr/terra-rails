'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  "Terra.ajax.error": "This content failed to load.",
  "Terra.form.field.optional": "(optional)",
  "Terra.form.select.activeOption": "{text} ({index} of {totalOptions}).",
  "Terra.form.select.add": "Add \"{text}\"",
  "Terra.form.select.ariaLabel": "Search",
  "Terra.form.select.clearSelect": "Clear select",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.form.select.defaultUsageGuidance": "Use up and down arrow keys to navigate through options. Press enter to select an option.",
  "Terra.form.select.dimmed": "Dimmed.",
  "Terra.form.select.disabled": "Disabled.",
  "Terra.form.select.listOfTotalOptions": "List of options.",
  "Terra.form.select.maxSelectionHelp": "Limit {text} items.",
  "Terra.form.select.maxSelectionOption": "Maximum number of {text} items selected",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Tap to navigate to options.",
  "Terra.form.select.mobileUsageGuidance": "Swipe right to navigate to options.",
  "Terra.form.select.multiSelectUsageGuidance": "Enter text or use up and down arrow keys to navigate through options. Press enter to select or unselect an option.",
  "Terra.form.select.noResults": "No matching results for \"{text}\"",
  "Terra.form.select.optGroup": "Group {text}",
  "Terra.form.select.option": "Options",
  "Terra.form.select.searchUsageGuidance": "Enter text or use up and down arrow keys to navigate through options. Press enter to select an option.",
  "Terra.form.select.selectCleared": "Select value cleared",
  "Terra.form.select.selected": "Selected.",
  "Terra.form.select.selectedText": "{text} Selected. ({index} of {totalOptions}).",
  "Terra.form.select.unselected": "Unselected.",
  "Terra.form.select.unselectedText": "{text} Unselected",
  "Terra.icon.IconConsultInstructionsForUse.title": "Electronic Instructions for Use Icon"
};
var areTranslationsLoaded = true;
var locale = 'en-GB';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
