import {IDeveloper} from './developer';
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../store/appstore';

const BASE_URL = 'http://localhost:3004/developers/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class DeveloperService {

    developers$: Observable<IDeveloper[]>;
    
    constructor(public _http: Http, private store: Store<AppStore>) {
        this.developers$ = store.select('developers');
    }

    loadDevelopers() {

        this._http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: 'ADD_DEVELOPERS', payload }))
            .subscribe(action => this.store.dispatch(action));

    }

    getDeveloper(id: string): Observable<IDeveloper> {
        return this.developers$.map(devs => devs.find(dev => dev.id === id));
    }

    updateDeveloper(developer: IDeveloper) {

        this._http.put(`${BASE_URL}${developer.id}`, JSON.stringify(developer), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'UPDATE_DEVELOPER', payload: developer }));

    }
}

