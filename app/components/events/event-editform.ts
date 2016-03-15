import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {IEvent} from '../../services/events/event';
import {Observable} from 'rxjs/Observable';
import {EventEmitter, Output} from 'angular2/core';
import {EVENT_TYPES} from '../../const/const';

@Component({
    selector: 'event-editform',
    templateUrl: 'app/components/events/event-editform.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    inputs: ['event'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditFormComponent {
    submitted = false;
    selectedType = {};
    eventTypes = EVENT_TYPES;

    //@Input() event: IEvent;
    @Input('event') _event: IEvent;
    @Output() save: EventEmitter<IEvent> = new EventEmitter();
    @Output() cancel: EventEmitter<IEvent> = new EventEmitter(); 

    originalID: string;
    selectedEvent: IEvent;
    
    set _event(value: IEvent){
        if (value) this.originalID = value.id;
        this.selectedEvent = Object.assign({}, value);
    }

    onSubmit() { 
        this.submitted = true; 
    }
    
    onTypeChange(event){
        this.selectedEvent.type = event.target.options.selectedIndex; 
        this.selectedType = EVENT_TYPES[event.target.options.selectedIndex]
    }
    
    addSpeaker(){
        
    }

}