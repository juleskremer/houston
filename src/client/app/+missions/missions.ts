import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {MissionsService} from '../missions';


@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers: [MissionsService]
})
@RouteConfig([
  {
    path: '/',
    name: 'MissionsListing',
    useAsDefault: true,
    loader: () => window['System']
                      .import('app/+missions/+missions-listings')
                      .then((module) => module.MissionsListingComponent),
  },
  {
    path: '/:id',
    name: 'MissionDetail',
    loader: () => window['System']
                      .import('app/+missions/+mission-detail')
                      .then((module) => module.MissionDetailComponent),
  },
  {
    path: '/mission-edit/:id',
    name: 'MissionEdit',
    loader: () => window['System']
                      .import('app/+missions/+mission-edit')
                      .then((module) => module.MissionEditComponent),
  }

])
export class MissionsComponent {
}
