import {Component, OnInit} from 'angular2/core';
import {ConferencesService} from '../../services/conferences/conference.service';
import {Conference} from '../../services/conferences/conference';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ConferencesListingComponent} from './conferences-listing';

@Component({
  template:  `
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [ConferencesService]
})
@RouteConfig([
  {path:'/',         name: 'ConferencesListing', component: ConferencesListingComponent, useAsDefault: true},
])
export class ConferencesComponent { }