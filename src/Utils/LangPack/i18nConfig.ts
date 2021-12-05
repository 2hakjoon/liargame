import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { setLanguagePack } from './langPack';


export const LangKR = "ko-KR";
export const LangEN = "en-US"

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {...setLanguagePack()};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale === LangKR ? LangKR : LangEN
//console.log(Localization.locale)
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

//i18n.defaultLocale = "pt-BR";

export const changLangtoKr = () => {
  i18n.locale = LangKR;
  //console.log(i18n.currentLocale());

}

export const changLangtoEn = () => {
  i18n.locale = LangEN;
  //console.log(i18n.currentLocale());

}
export const currentLocale = () => i18n.currentLocale();

export default i18n.t