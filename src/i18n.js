import i18n from "i18next";
import { initReactI18next ,reactI18nextModule } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import translationUS from './locales/US/translation.json';
import translationBR from './locales/BR/translation.json';

// the translations
const resources = {
    us: {
      translation: translationUS
    },
    br: {
      translation: translationBR
    }
  };
// function changeData(data){
//     console.log('data changing here',data)
// }
i18n
  .use(LanguageDetector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
//   .use(initReactI18next)
  .init({
    resources,
    // lng: "us",
    // fallbackLng: "us",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

// export default i18n;
i18n.changeLanguage('br', (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  });
  
// -----------------------------------------------------------------------------



export default i18n;
