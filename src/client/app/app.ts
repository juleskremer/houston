import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DeveloperService} from './_/developers';
import {DataService} from './_/data-service';
import {CommunitiesService} from './_/communities';
import {EventsService} from './_/events';


import {DevelopersComponent} from './[developers]';
import {MissionsComponent} from '[missions]/missions';
import {EventsComponent} from './[events]';
import {CommunitiesComponent} from './[communities]';


@Component({
  selector: 'houston-app',
  templateUrl: 'app/app.html',
  viewProviders: [],
  directives: [[ROUTER_DIRECTIVES]],
  providers: [
    ROUTER_PROVIDERS,
    DataService,
    EventsService,
    DeveloperService,
    CommunitiesService,
  ]
})
@RouteConfig([
  {
    path: '/developers/...',
    name: 'DevelopersComponent',
    component: DevelopersComponent,
    useAsDefault: true
  },
  {
    path: '/events/...',
    name: 'EventsComponent',
    component: EventsComponent,
  },
  {path: '/missions/...', name: 'MissionsComponent', component: MissionsComponent},
  {path: '/communities/...', name: 'CommunitiesComponent', component: CommunitiesComponent},
])

export class AppComponent implements OnInit {
  constructor(private _dataService: DataService) {}

  ngOnInit() { this._dataService.initData(); }
}
