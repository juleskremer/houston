import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {Mission, MissionsService} from '../_/missions';
import {MissionsListingComponent} from './missions-listings';
import {MissionDetailComponent} from './mission-detail';
import {MissionEditComponent} from './mission-edit';


@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers: [MissionsService]
})
@RouteConfig([
  {path: '/', name: 'MissionsListing', component: MissionsListingComponent, useAsDefault: true},
  {path: '/:id', name: 'MissionDetail', component: MissionDetailComponent},
  {path: '/mission-detail/:id', name: 'MissionEdit', component: MissionEditComponent}

])
export class MissionsComponent {
}