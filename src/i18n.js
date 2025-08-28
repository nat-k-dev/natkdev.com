import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from './assets/locales/en/translation.json';
import nl from './assets/locales/nl/translation.json';

i18n
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      nl: {
        translation: nl
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already escapes
    },
    //debug: true,
  });

export default i18n;
