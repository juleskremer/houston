import {LANGUAGES} from './mock-language';
import {Language} from "./language-model";

export class LanguageService {
  getLanguages(): Promise<Language[]> { return Promise.resolve(LANGUAGES); }

  getLanguage(id: string): Promise<Language> {
    return Promise.resolve(LANGUAGES).then((languages) => {
      for (var language of languages) {
        if (language.code === id) {
          return language;
        }
      }
    });
  }
}
