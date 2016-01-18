import {Component, OnInit} from 'angular2/core';
import {MissionsService} from '../../services/missions/mission.service';
import {Mission} from '../../services/missions/mission';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {MissionsListingComponent} from './missions-listing';
import {MissionDetailComponent} from './mission-detail';
import {MissionEditComponent} from './mission-edit';

@Component({
  template:  `
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [MissionsService]
})
@RouteConfig([
  {path:'/',         name: 'MissionsListing', component: MissionsListingComponent, useAsDefault: true},
  {path:'/:id',      name: 'MissionDetail', component: MissionDetailComponent},
  {path:'/mission-detail/:id', name: 'MissionEdit', component: MissionEditComponent }

])
export class MissionsComponent { }