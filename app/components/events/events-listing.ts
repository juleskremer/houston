import {Component} from 'angular2/core';
import {EventsService} from '../../services/events/events.service';
import {IEvent} from '../../services/events/event';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';

@Component({

    selector: 'events-listing',
    templateUrl: 'app/components/events/events-listing.html'
})
export class EventsListingComponent  {

    events$: Observable<IEvent[]>;

    constructor(
        private _router: Router,
        public _eventService: EventsService) {

        this.events$ = this._eventService.events$;
        
    }
    
    onSpeakerSelect(developer: string) {
        this._router.parent.navigate(['DevelopersComponent', 'DeveloperDetail', { id: developer }]);
    }
}