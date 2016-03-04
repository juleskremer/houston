import {IEvent} from './event';
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../store/appstore';
import {IDeveloper} from '../developers/developer';

const BASE_URL = 'http://localhost:3004/events/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class EventsService {

    events$: Observable<IEvent[]>;
    newest$: Observable<IEvent[]>;

    constructor(public _http: Http, private store: Store<AppStore>) {
        
        //this.events$ = store.select('events');
    }


    loadEvents() {

        this._http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: 'ADD_EVENTS', payload }))
            .subscribe(action => this.store.dispatch(action));
            

this.events$ = Observable.combineLatest(
    this.store.select('events'),
    this.store.select('developers'),
    (events: any[], developers: any[])=> {
      return events.map(event => {
        var speakers = Object.keys(event.speakers).map(speakerId => developers.find(developer => developer.id === speakerId))
        return Object.assign({}, event, {speakers: speakers});
      });
    });

this.events$.subscribe(c => console.log('combined', c));
            
    }

    saveEvent(event: IEvent) {
        (event.id) ? this.updateEvent(event) : this.createEvent(event);
    }

    createEvent(event: IEvent) {
                
        this._http.post(`${BASE_URL}`, JSON.stringify(this.addUUID(event)), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'CREATE_EVENT', payload: event }));
    }

    updateEvent(event: IEvent) {

        this._http.put(`${BASE_URL}${event.id}`, JSON.stringify(event), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'UPDATE_EVENT', payload: event }));

    }
    
    // NOTE: Utility functions to simulate server generated IDs
    private addUUID(event: IEvent): IEvent {
        return Object.assign({}, event, { id: this.generateUUID() }); // Avoiding state mutation FTW!
    }

    private generateUUID(): string {
        return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
            .replace(/1|0/g, function() {
                return (0 | Math.random() * 16).toString(16);
            });
    };

}

