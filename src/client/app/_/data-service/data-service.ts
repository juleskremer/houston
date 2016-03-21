import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {IDeveloper, DeveloperService} from '../developers';
import {IEvent, EventsService} from '../events';
import {ICommunity, CommunitiesService} from '../communities';


@Injectable()
export class DataService {

    developers$: Observable<IDeveloper[]>;
    events$: Observable<IEvent[]>;
    communities$: Observable<ICommunity[]>;

    constructor(
        private _eventService: EventsService,
        private _devService: DeveloperService,
        private _communityService: CommunitiesService
      ) {
    }

    initData(){

        this.developers$ = this._devService.fetchDevelopers();
        this.events$ = this._eventService.fetchEvents();
        this.communities$ = this._communityService.fetchCommunities();
    }


}