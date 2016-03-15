import {IDeveloper} from '../developers/developer';
import {DeveloperService} from '../developers/developer.service';
import {IEvent} from '../events/event';
import {EventsService} from '../events/events.service';
import {ICommunity} from '../communities/community';
import {CommunitiesService} from '../communities/communities.service';
import {IContent} from '../content/content';
import {ContentsService} from '../content/contents.service';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
    
    developers$: Observable<IDeveloper[]>;
    events$: Observable<IEvent[]>;
    communities$: Observable<ICommunity[]>;
    contents$: Observable<IContent[]>;
    
    constructor(
        private _eventService: EventsService, 
        private _devService: DeveloperService,
        private _communityService: CommunitiesService,
        private _contentsService: ContentsService
      ) {
    }
    
    initData(){

        this.developers$ = this._devService.fetchDevelopers();
        this.events$ = this._eventService.fetchEvents();
        this.communities$ = this._communityService.fetchCommunities();
        this.contents$ = this._contentsService.fetchContents();
    }
    
    
}