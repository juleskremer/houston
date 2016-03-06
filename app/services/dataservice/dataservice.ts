import {IDeveloper} from '../developers/developer';
import {DeveloperService} from '../developers/developer.service';
import {IEvent} from '../events/event';
import {EventsService} from '../events/events.service';
import {ICommunity} from '../communities/community';
import {CommunitiesService} from '../communities/communities.service';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';

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