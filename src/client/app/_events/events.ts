import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {EventsService} from '../_/events';
import {EventsListingComponent} from './_events-listing';
import {EventEditComponent} from './_event-edit';

@Component({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet],
  providers: [EventsService]
})
@RouteConfig([
  {path: '/', name: 'EventsListing', component: EventsListingComponent, useAsDefault: true},
  {path: '/event-edit/:id', name: 'EventEdit', component: EventEditComponent},
])
export class EventsComponent {
}
