import {IDeveloper} from '../developers/developer';
import {DeveloperService} from '../developers/developer.service';
import {IEvent} from '../events/event';
import {EventsService} from '../events/events.service';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
    
    developers$: Observable<IDeveloper[]>;
    events$: Observable<IEvent[]>;
    
    constructor(private _eventService: EventsService, private _devService: DeveloperService) {
    }
    
    initData(){
        //load raw store data
        this._devService.fetchDevelopers();
        this._eventService.fetchEvents();
        
        //generate computed streams
        this._devService.loadDevelopers();
        this._eventService.loadEvents();
        
        //setup streams
        this.developers$ = this._devService.developers$;
        this.events$ = this._eventService.events$;
    }
    
    
}