import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import {Store} from '@ngrx/store';

import {IDeveloper} from './developer';
import {IEvent} from '../events/event';
import {ICommunity} from '../communities/community';

import {AppStore} from '../store/appstore';

const BASE_URL = 'http://localhost:3004/developers';
const HEADER = {
  headers: new Headers({'Content-Type': 'application/json'})
};

@Injectable()
export class DeveloperService {
  developers$: Observable<IDeveloper[]>;

  constructor(public _http: Http, private store: Store<AppStore>) {}

  fetchDevelopers(): Observable<IDeveloper[]> {
    // retrieve and *store* developer data stream
    this._http.get(BASE_URL)
        .map(res => res.json())
        .map(payload => ({type: 'ADD_DEVELOPERS', payload}))
        .subscribe(action => this.store.dispatch(action));

    // compute developer data stream
    // for application view
    return this.developers$ = Observable.combineLatest(
               this.store.select('developers'), this.store.select('events'),
               this.store.select('communities'),
               (developers: any[], events: any[], communities: any[]) => {
                 return developers.map(developer => {
                   var devEvents: Array<IEvent> =
                       Object.keys(developer.events)
                           .map(
                               eventId =>
                                   events.find(event => event.id === eventId) || ({id: eventId}));
                   var devCommunities: Array<ICommunity> =
                       Object.keys(developer.communities)
                           .map(
                               communityId =>
                                   communities.find(community => community.id === communityId) ||
                                   ({id: communityId}));
                   return Object.assign(
                       {}, developer, {events: devEvents, communities: devCommunities});
                 });
               });
  }

  updateDeveloper(developer: IDeveloper) {
    this._http.put(`${BASE_URL}/${developer.id}`, JSON.stringify(developer), HEADER)
        .subscribe(action => this.store.dispatch({type: 'UPDATE_DEVELOPER', payload: developer}));
  }
}
