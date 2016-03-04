import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {EventsService} from '../../services/events/events.service';
import {IEvent} from '../../services/events/event';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/appstore';

@Component({

    selector: 'events-listing',
    templateUrl: 'app/components/events/events-listing.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsListingComponent  {

    events$: Observable<IEvent[]>;

    constructor(
        private _router: Router,
        private _eventService: EventsService,
        private store: Store<AppStore>
    ) {
        _eventService.loadEvents();
        this.events$ = _eventService.events$;
    }
    
    onEdit(event: IEvent) {

        this.store.dispatch({type: 'SELECT_EVENT', payload: event});
        this._router.navigate(['EventEdit']);
    }
    onSpeakerSelect(developer: string) {
       
      
       //need to figure out how to do this in store
       // this._router.parent.navigate(['DevelopersComponent', 'DeveloperDetail', { id: developer }]);
    }
    
    onNew(){
        this._router.navigate(['EventEdit']);        
    }
}