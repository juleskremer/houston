import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {DeveloperService} from '../developers';


@Component({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet],
  providers: [DeveloperService]
})
@RouteConfig([
  {
    path: '/',
    name: 'DevelopersListing',
    useAsDefault: true,
    loader: () => window['System'].import('app/+developers/+developers-listing').then((module) => module.DevelopersListingComponent)
  },
  {
    path: '/developer-detail/:id',
    name: 'DeveloperDetail',
    loader: () => window['System'].import('app/+developers/+developer-details').then((module) => module.DeveloperDetailsComponent)
  },
  {
    path: '/developer-edit/:id',
    name: 'DeveloperEdit',
    loader: () => window['System'].import('app/+developers/+developer-edit').then((module) => module.DeveloperEditComponent)
  }
])
export class DevelopersComponent {
}
