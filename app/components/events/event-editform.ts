import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {EventsService} from '../../services/events/events.service';
import {IEvent} from '../../services/events/event';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';
import {EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'event-editform',
    templateUrl: 'app/components/events/event-editform.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    inputs: ['event'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditFormComponent {
    submitted = false;

    @Input() event: IEvent;
    @Output() save: EventEmitter<IEvent> = new EventEmitter();

    constructor(
        private _router: Router,
        public _eventsService: EventsService) { }

    onSubmit() { 
        this.submitted = true; 
    }

    onSave(event: IEvent) {
        this.save.emit(event);
    }
    
    onCancel() {
        this._router.navigate(['EventsListing']);
    }
}