import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ContentsListingComponent} from './contents-listing';
import {ContentEditComponent} from './content-edit';

@Component({
    template: '<router-outlet></router-outlet>',
    directives: [RouterOutlet]
})
@RouteConfig([
    { path: '/', name: 'ContentsListing', component: ContentsListingComponent, useAsDefault: true },
    { path: '/content-edit/', name: 'ContentEdit', component: ContentEditComponent }

])
export class ContentsComponent { }