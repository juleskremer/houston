import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IEvent} from '../../services/events/event';
import {Observable} from 'rxjs';
import {EventEditFormComponent} from './event-editform';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/AppStore';
import {EventsService} from '../../services/events/events.service';
import {Router} from 'angular2/router';

@Component({
    selector: 'event-edit',
    directives: [EventEditFormComponent],
    template:`
        <event-editform [event]="event$ | async" 
        (save)="saveEvent($event)"
        (cancel)="onCancel()">`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditComponent {
   
    event$: Observable<IEvent>;

    constructor(private _router: Router, private store: Store<AppStore>, private _eventsService: EventsService) 
    {
        this.event$ = store.select('selectedEvent');
    }
    
    saveEvent(event: IEvent){
        //TODO:  Need to confirm save & route or show notification
        this._eventsService.saveEvent(event); 
    }
    
    onCancel(){
        //TODO:  Can I set this to null here or not?
        this.store.dispatch({type: 'SELECT_EVENT', payload: null});
        this._router.navigate(['EventsListing']);
    }
}