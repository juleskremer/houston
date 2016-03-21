import {Observable} from 'rxjs/Observable';
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

const BASE_URL = 'http://localhost:3004/';

export interface ILanguage {
  id: string;
  name: string;
}

@Injectable()
export class CommonService {
  constructor(public _http: Http) {}

  fetchLanguages(): Observable<ILanguage[]> {
    return this._http.get(BASE_URL + 'languages').map(res => res.json());
  }

  searchLanguages(query) {
    return this._http
        .get(
            BASE_URL + 'languages' +
            '/' + query)
        .map(res => res.json());
  }
}