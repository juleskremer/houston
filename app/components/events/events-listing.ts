import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IEvent} from '../../services/events/event';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/appstore';
import {DataService} from '../../services/dataservice/dataservice';

@Component({

    selector: 'events-listing',
    templateUrl: 'app/components/events/events-listing.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsListingComponent  {

    events$: Observable<IEvent[]>;

    constructor(
        private _router: Router,
        private _dataService: DataService,
        private store: Store<AppStore>
    ) {
        this.events$ = _dataService.events$;
    }
    
    onEdit(event: IEvent) {
        this._router.navigate(['EventEdit', { id: event.id }]);
    }
    onSpeakerSelect(developer) {
       this._router.parent.navigate(['DevelopersComponent', 'DeveloperDetail', { id: developer.id }]);
    }
    
    onNew(){
        this._router.navigate(['EventEdit']);        
    }
}