import {Component, OnInit} from 'angular2/core';
import {DeveloperService} from '../../services/developers/developer.service';
import {Developer} from '../../services/developers/developer';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {DevelopersListingComponent} from './developers-listing';
import {DeveloperDetailComponent} from './developer-detail';
import {DeveloperEditComponent} from './developer-edit';

@Component({
  template:  `
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [DeveloperService]
})
@RouteConfig([
  {path:'/',         name: 'DevelopersListing', component: DevelopersListingComponent, useAsDefault: true},
  {path:'/:id',      name: 'DeveloperDetail', component: DeveloperDetailComponent},
  {path:'/developer-detail/:id', name: 'DeveloperEdit', component: DeveloperEditComponent }

])
export class DevelopersComponent {}