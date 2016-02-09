import {Component, OnInit} from 'angular2/core';
import {DeveloperService} from '../../services/developers/developer.service';
import {IDeveloper} from '../../services/developers/developer';
import {RouteParams} from 'angular2/router';
import {Observable} from 'rxjs';
import {DeveloperDetailsComponent} from './developer-details';

@Component({
    selector: 'developer-detail',
    directives: [DeveloperDetailsComponent],
    template:`
      <developer-details [developer]="developer | async">
    
    `
})
export class DeveloperDetailComponent {
   
    developer: Observable<IDeveloper>;

    constructor(
        private _routeParams: RouteParams,
        public _devService: DeveloperService) { }

    ngOnInit() {
        this.developer = this._devService.getDeveloper(this._routeParams.get('id'));    
    }

}