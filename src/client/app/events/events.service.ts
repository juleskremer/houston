import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import {Store} from '@ngrx/store';

import {IEvent} from './event';
import {AppStore} from '../store';
import {IDeveloper} from '../developers';


const BASE_URL = 'http://localhost:3004/events/';
const HEADER = {
  headers: new Headers({'Content-Type': 'application/json'})
};

@Injectable()
export class EventsService {
  events$: Observable<IEvent[]>;

  constructor(public _http: Http, private store: Store<AppStore>) {
    store.select('devs').map(developers => developers]-)
  }


  fetchEvents(): Observable<IEvent[]> {
    this._http.get(BASE_URL)
        .map(res => res.json())
        .map(payload => ({type: 'ADD_EVENTS', payload}))
        .subscribe(action => this.store.dispatch(action));

    return this.events$ = Observable.combineLatest(
               this.store.select('events'), this.store.select('developers'),
               (events: any[], developers: any[]) => {
                 return events.map(event => {
                   var speakers: Array<IDeveloper> =
                       Object.keys(event.speakers)
                           .map(
                               speakerId =>
                                   developers.find(developer => developer.id === speakerId) ||
                                   ({id: speakerId}));
                   return Object.assign({}, event, {speakers: speakers});
                 });
               });
  }

  saveEvent(event: IEvent) { (event.id) ? this.updateEvent(event) : this.createEvent(event); }

  createEvent(event: IEvent) {
    this._http.post(`${BASE_URL}`, JSON.stringify(this.addUUID(event)), HEADER)
        .subscribe(action => this.store.dispatch({type: 'CREATE_EVENT', payload: event}));
  }

  updateEvent(event: IEvent) {
    this._http.put(`${BASE_URL}${event.id}`, JSON.stringify(event), HEADER)
        .subscribe(action => this.store.dispatch({type: 'UPDATE_EVENT', payload: event}));
  }

  // NOTE: Utility functions to simulate server generated IDs
  private addUUID(event: IEvent): IEvent {
    return Object.assign({}, event, {id: this.generateUUID()});  // Avoiding state mutation FTW!
  }

  private generateUUID(): string {
    return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/1|0/g, function() {
      return (0 | Math.random() * 16).toString(16);
    });
  };
}
