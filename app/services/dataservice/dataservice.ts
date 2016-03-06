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
        //load raw store data
        this._devService.fetchDevelopers();
        this._eventService.fetchEvents();
        this._communityService.fetchCommunities();
        
        //generate computed streams
        this._devService.loadDevelopers();
        this._eventService.loadEvents();
        this._communityService.loadCommunities();
        
        //setup streams
        this.developers$ = this._devService.developers$;
        this.events$ = this._eventService.events$;
        this.communities$ = this._communityService.communities$;

    }
    
    
}