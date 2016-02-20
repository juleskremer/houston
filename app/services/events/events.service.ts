import {IEvent} from './event';
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../store/appstore';

const BASE_URL = 'http://localhost:3004/events/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class EventsService {

    events$: Observable<IEvent[]>;

    constructor(public _http: Http, private store: Store<AppStore>) {
        this.events$ = store.select('events');
    }
    
        loadEvents() {

        this._http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: 'ADD_EVENTS', payload }))
            .subscribe(action => this.store.dispatch(action));

    }

}

