import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DeveloperService} from './developers';
import {DataService} from './data-service';
import {CommunitiesService} from './communities';
import {EventsService} from './events';


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
    loader: () => window['System'].import('app/+developers').then((module) => module.DevelopersComponent),
    useAsDefault: true
  },
  {
    path: '/events/...',
    name: 'EventsComponent',
    loader: () => window['System'].import('app/+events').then((module) => module.EventsComponent),
  },
  {path: '/missions/...', name: 'MissionsComponent',
    loader: () => window['System'].import('app/+missions').then((module) => module.MissionsComponent),
  },
  {path: '/communities/...', name: 'CommunitiesComponent',
    loader: () => window['System'].import('app/+communities').then((module) => module.CommunitiesComponent),
  },
])

export class AppComponent implements OnInit {
  constructor(private _dataService: DataService) {}

  ngOnInit() { this._dataService.initData(); }
}
