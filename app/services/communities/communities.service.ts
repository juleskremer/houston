import {ICommunity} from './community';
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../store/appstore';
import {IDeveloper} from '../developers/developer';

const BASE_URL = 'http://localhost:3004/communities/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class CommunitiesService {

    communities$: Observable<ICommunity[]>;
    testcommunities$: Observable<ICommunity[]>;

    constructor(public _http: Http, private store: Store<AppStore>) {
        

    }


    fetchCommunities() {

        this._http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: 'ADD_COMMUNITIES', payload }))
            .subscribe(action => this.store.dispatch(action));
            
    }
    
    loadCommunities(){

        this.communities$ = Observable.combineLatest(
            this.store.select('communities'),
            this.store.select('developers'),
            (communities: any[], developers: any[]) => {
                return communities.map(community => {
                    var members: Array<IDeveloper> = Object.keys(community.members).map(memberId => developers.find(developer => developer.id === memberId))
                    var contact: IDeveloper = developers.find(developer => developer.id === community.contact);
                    var trying = Object.assign({}, community, { members: members, contact: contact });
                    return trying;
                });
            });   
       
    }

    saveCommunity(community: ICommunity) {
        (community.id) ? this.updateCommunity(community) : this.createCommunity(community);
    }

    createCommunity(community: ICommunity) {

        this._http.post(`${BASE_URL}`, JSON.stringify(this.addUUID(community)), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'CREATE_COMMUNITY', payload: event }));
    }

    updateCommunity(community: ICommunity) {

        this._http.put(`${BASE_URL}${community.id}`, JSON.stringify(community), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'UPDATE_COMMUNITY', payload: event }));

    }
    
    // NOTE: Utility functions to simulate server generated IDs
    private addUUID(community: ICommunity): ICommunity {
        return Object.assign({}, community, { id: this.generateUUID() }); // Avoiding state mutation FTW!
    }

    private generateUUID(): string {
        return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
            .replace(/1|0/g, function() {
                return (0 | Math.random() * 16).toString(16);
            });
    };

}

