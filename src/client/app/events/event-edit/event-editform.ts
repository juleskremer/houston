import {EventEmitter, Output, Component, Input, ChangeDetectionStrategy} from 'angular2/core';

import {EVENT_TYPES} from '../../_/const/const';
import {IEvent} from '../../_/events/event';


@Component({
  selector: 'event-editform',
  templateUrl: 'app/events/event-edit/event-editform.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  inputs: ['event'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditFormComponent {
  submitted = false;
  selectedType = {};
  eventTypes = EVENT_TYPES;

  @Output() save: EventEmitter<IEvent> = new EventEmitter();
  @Output() cancel: EventEmitter<IEvent> = new EventEmitter();

  originalID: string;
  selectedEvent: IEvent;

  @Input('event')
  set event(value: IEvent) {
    if (value) this.originalID = value.id;
    this.selectedEvent = Object.assign({}, value);
  }

  onSubmit() { this.submitted = true; }

  onTypeChange(event) {
    this.selectedEvent.type = event.target.options.selectedIndex;
    this.selectedType = EVENT_TYPES[event.target.options.selectedIndex]
  }

  addSpeaker() {}
}