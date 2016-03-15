import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IEvent} from '../../services/events/event';
import {Observable} from 'rxjs/Observable';
import {EventEditFormComponent} from './event-editform';
import {EventsService} from '../../services/events/events.service';
import {Router, RouteParams} from 'angular2/router';
import {DataService} from '../../services/dataservice/dataservice';

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

    constructor(
        private _router: Router, 
        private _params: RouteParams,
       private _dataService: DataService, 
        private _eventsService: EventsService) 
    {
        //how do I address
        //the new state here
        //I need a new event as an observable? yes...blank events stream?
        this.event$ = _dataService.events$.map(events => events.find(event => event.id === _params.get('id')));
    }
    
    saveEvent(event: IEvent){
        //TODO:  Need to confirm save & route or show notification
        this._eventsService.saveEvent(event); 
    }
    
    onCancel(){
        //TODO:  Can I set this to null here or not?
        this._router.navigate(['EventsListing']);
    }
}