import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DeveloperService} from './services/developers/developer.service';
import {DevelopersComponent} from './components/developers/developers';
import {MissionsComponent} from './components/missions/missions';
import {MissionsService} from './services/missions/mission.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [DevelopersComponent, MissionsComponent, [ROUTER_DIRECTIVES]],
  providers: [DeveloperService, MissionsService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/developers/...',
    name: 'DevelopersComponent',
    component: DevelopersComponent,
    useAsDefault: true
  },
  {
    path: '/missions/...',
    name: 'MissionsComponent',
    component: MissionsComponent
  }
])
export class AppComponent {
}