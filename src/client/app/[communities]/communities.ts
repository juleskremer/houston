import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CommunitiesService} from '../_/communities';
import {CommunitiesListingComponent} from './[communities-listing]';
import {CommunityEditComponent} from './[community-edit]';

@Component({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet],
  providers: [CommunitiesService]
})
@RouteConfig([
  {
    path: '/',
    name: 'CommunitiesListing',
    component: CommunitiesListingComponent,
    useAsDefault: true
  },
  {path: '/community-edit/:id', name: 'CommunityEdit', component: CommunityEditComponent},
])
export class CommunitiesComponent {
}
