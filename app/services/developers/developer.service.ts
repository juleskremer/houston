import {IDeveloper} from './developer';
import {IEvent} from '../events/event';
import {ICommunity} from '../communities/community';
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
        //this.developers$ = store.select('developers');
    }

    fetchDevelopers() {

        this._http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: 'ADD_DEVELOPERS', payload }))
            .subscribe(action => this.store.dispatch(action));

    }

    loadDevelopers() {

        this.developers$ = Observable.combineLatest(
            this.store.select('developers'),
            this.store.select('events'),
            this.store.select('communities'),
            (developers: any[], events: any[], communities: any[]) => {
                return developers.map(developer => {
                    var devEvents: Array<IEvent> = Object.keys(developer.events).map(eventId => events.find(event => event.id === eventId));                   
                    var devCommunities: Array<ICommunity> = Object.keys(developer.communities).map(communityId => communities.find(community => community.id === communityId));                   
                    return Object.assign({}, developer, { events: devEvents, communities: devCommunities });
                });
            });   

    }

    // getDeveloper(id: string): Observable<IDeveloper> {
    //     return this.developers$.map(devs => devs.find(dev => dev.id === id));
    // }

    updateDeveloper(developer: IDeveloper) {

        this._http.put(`${BASE_URL}${developer.id}`, JSON.stringify(developer), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'UPDATE_DEVELOPER', payload: developer }));

    }
}

