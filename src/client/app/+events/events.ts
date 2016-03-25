import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {EventsService} from '../events';


@Component({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet],
  providers: [EventsService]
})
@RouteConfig([
  {
    path: '/',
    name: 'EventsListing',
    useAsDefault: true,
    loader: () => window['System'].import('app/+events/+events-listing').then((module) => module.EventsListingComponent)
  },
  {
    path: '/event-edit/:id',
    name: 'EventEdit',
    loader: () => window['System'].import('app/+events/+event-edit').then((module) => module.EventEditComponent)
  },
])
export class EventsComponent {
}
