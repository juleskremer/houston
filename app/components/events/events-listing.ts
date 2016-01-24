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
  events: Event[] = [];
  
  constructor(
    private _router: Router,
    private _service: EventsService){}
  
  ngOnInit() {
    //this.events = new Array();
    this.events = this._service.getEvents();
    //this._service.getEvents().then(events => this.events = events);
  }

  onSpeakerSelect(developer: string) {
   this._router.parent.navigate(['DevelopersComponent', 'DeveloperDetail', { id: developer}]);
  }
}