import {Component, OnInit} from 'angular2/core';
import {EventsService} from '../../services/events/events.service';
import {Event} from '../../services/events/event';
import {Router} from 'angular2/router';
import {ObjToArr} from "../../pipes/objToArray";
import {Developer} from "../../services/developers/developer";

@Component({
  
  selector: 'events-listing',
  templateUrl: 'app/components/events/events-listing.html',
  styleUrls: [],
  providers: [],
  directives: [],
  pipes: [ObjToArr]
})
export class EventsListingComponent implements OnInit {
  events: Event[] = [];
  
  constructor(
    private _router: Router,
    private _service: EventsService){}
  
  ngOnInit() {
    this._service.getEvents().then(events => this.events = events);
  }

  onSpeakerSelect(developer: Developer) {
    this._router.navigate(['/developers/DeveloperDetail', { id: developer.gitID }]);
  }
}