import {LANGUAGES} from './mock-language';
import {COUNTRIES} from './mock-countries';

export interface ILanguage {
    code: string;
    name: string;
    nativeName: string;
}

export interface Country {
    name: string;
    code: string;
}

export class CommonService {

    getLanguages(): Promise<ILanguage[]> { return Promise.resolve(LANGUAGES); }

    getLanguage(id: string): Promise<ILanguage> {
        return Promise.resolve(LANGUAGES)
            .then(languages => languages.find((lang) => lang.code === id));
    }

    getCountries(): Promise<Country[]> { return Promise.resolve(COUNTRIES); }

    getCountry(id: string): Promise<Country> {
        return Promise.resolve(COUNTRIES)
            .then(countries => countries.find((country) => country.code === id));
    }
}
