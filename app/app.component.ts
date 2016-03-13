import {Component, OnInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DeveloperService} from './services/developers/developer.service';
import {DevelopersComponent} from './components/developers/developers';
import {MissionsComponent} from './components/missions/missions';
import {MissionsService} from './services/missions/mission.service';
import {EventsComponent} from './components/events/events';
import {EventsService} from './services/events/events.service';
import {CommunitiesComponent} from './components/communities/communities';
import {CommunitiesService} from './services/communities/communities.service';
import {ContentsComponent} from './components/content/contents';
import {ContentsService} from './services/content/contents.service';
import {DataService} from './services/dataservice/dataservice';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    viewProviders: [],
    directives: [[ROUTER_DIRECTIVES]],
    providers: [ROUTER_PROVIDERS, 
                DataService, 
                EventsService, 
                DeveloperService, 
                CommunitiesService,
                ContentsService
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
    {
        path: '/missions/...',
        name: 'MissionsComponent',
        component: MissionsComponent
    },
    {
        path: '/communities/...',
        name: 'CommunitiesComponent',
        component: CommunitiesComponent
    },
    {
        path: '/contents/...',
        name: 'ContentsComponent',
        component: ContentsComponent
    }
])

export class AppComponent {
    
    constructor(private _dataService: DataService){
        
    }
    
    ngOnInit(){
        
        this._dataService.initData();        
  
    }

}