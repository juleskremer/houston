import {COUNTRIES} from './mock-countries';
import {Country} from "./country-model";

export class CountryService {
  getCountries(): Promise<Country[]> { return Promise.resolve(COUNTRIES); }

  getCountry(id: string): Promise<Country> {
    return Promise.resolve(COUNTRIES)
      .then(countries => countries.find((country) => country.code === id));
  }
}
