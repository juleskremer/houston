import {Event} from './event';
import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {DeveloperService} from "../developers/developer.service"
import {Developer} from "../developers/developer"

@Injectable()
export class EventsService {


    eventRef: Firebase;
    ngEvents: Event[] = [];

    constructor(public devService: DeveloperService) {

        this.eventRef = new Firebase("https://ngmain.firebaseio.com/events/");
        this.eventRef.on("value", snapshot => {
            snapshot.forEach(childSnap => {
                this.ngEvents.push(new Event(childSnap.val(), this.devService));
            });
        });


    }


    getEvent(id: string): Event {

        var index: number;
        index = this.ngEvents.findIndex(function(o) { return o.id == id; })
        return this.ngEvents[index];

    }

}

