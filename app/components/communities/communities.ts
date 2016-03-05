import {Component, OnInit} from 'angular2/core';
import {CommunitiesService} from '../../services/communities/communities.service';
import {ICommunity} from '../../services/communities/community';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {CommunitiesListingComponent} from './communities-listing';
import {CommunityEditComponent} from './community-edit';

@Component({
    template: '<router-outlet></router-outlet>',
    directives: [RouterOutlet],
    providers: [CommunitiesService]
})
@RouteConfig([
    { path: '/', name: 'CommunitiesListing', component: CommunitiesListingComponent, useAsDefault: true },
    { path: '/community-edit', name: 'CommunityEdit', component: CommunityEditComponent },
])
export class CommunitiesComponent { }