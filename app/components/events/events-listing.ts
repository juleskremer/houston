import {Component, OnInit} from 'angular2/core';
import {EventsService} from '../../services/events/events.service';
import {Event} from '../../services/events/event';
import {Router} from 'angular2/router';
import {Developer} from "../../services/developers/developer";

@Component({

    selector: 'events-listing',
    templateUrl: 'app/components/events/events-listing.html',
    styleUrls: [],
    providers: [],
    directives: [],
    pipes: []
})
export class EventsListingComponent implements OnInit {

    constructor(
        private _router: Router,
        public eventService: EventsService) { }

    ngOnInit() {
    }

    onSpeakerSelect(developer: string) {
        this._router.parent.navigate(['DevelopersComponent', 'DeveloperDetail', { id: developer }]);
    }
}