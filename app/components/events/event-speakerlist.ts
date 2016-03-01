import {Component, Input, OnInit, ChangeDetectionStrategy} from 'angular2/core';
import {IEvent} from '../../services/events/event';
import {Observable} from 'rxjs';
import {IDeveloper} from '../../services/developers/developer';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/appstore';

@Component({

    selector: 'event-speakerlist',
    template: '<div *ngFor="#speaker of eventSpeakers$ | async"> <img src="{{speaker.picUrl}}" width="50" height="50">  </div>',
    inputs: ['event'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventSpeakerListComponent {

    @Input('event') _event: IEvent;
    eventSpeakers$: Observable<Array<IDeveloper>>;

    constructor(private store: Store<AppStore>) {


    }

    ngOnInit() {

        this.eventSpeakers$ = this.store.select('developers')
            .filter((developer: IDeveloper) => this._event.speakers.indexOf(developer.id) > -1);

    }

}