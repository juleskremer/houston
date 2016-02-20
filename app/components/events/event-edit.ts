import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IEvent} from '../../services/events/event';
import {Observable} from 'rxjs';
import {EventEditFormComponent} from './event-editform';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/AppStore';
import {EventsService} from '../../services/events/events.service';

@Component({
    selector: 'event-edit',
    directives: [EventEditFormComponent],
    template:`
        <event-editform [event]="event$ | async" 
        (save)=saveEvent($event)>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditComponent {
   
    event$: Observable<IEvent>;

    constructor(private store: Store<AppStore>, private _eventsService: EventsService) 
    {
        this.event$ = store.select('selectedEvent');
    }
    
    saveEvent(event: IEvent){

        this._eventsService.updateEvent(event); 
    }
}