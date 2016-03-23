import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {DeveloperService} from '../_/developers';
import {DevelopersListingComponent} from './_developers-listing';
import {DeveloperDetailsComponent} from './_developer-details';
import {DeveloperEditComponent} from './_developer-edit';


@Component({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet],
  providers: [DeveloperService]
})
@RouteConfig([
  {path: '/', name: 'DevelopersListing', component: DevelopersListingComponent, useAsDefault: true},
  {path: '/developer-detail/:id', name: 'DeveloperDetail', component: DeveloperDetailsComponent},
  {path: '/developer-edit/', name: 'DeveloperEdit', component: DeveloperEditComponent}

])
export class DevelopersComponent {
}
