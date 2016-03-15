import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IDeveloper} from '../../services/developers/developer';
import {Observable} from 'rxjs/Observable';
import {DeveloperDetailsComponent} from './developer-details';
import {RouteParams} from 'angular2/router';
import {DataService} from '../../services/dataservice/dataservice';

@Component({
    selector: 'developer-detail',
    directives: [DeveloperDetailsComponent],
    template:'<developer-details [developer]="developer$ | async">',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetailComponent {
   
    developer$: Observable<IDeveloper>;

    constructor(
        private _params: RouteParams, 
        private _dataService: DataService) 
    {
        this.developer$ = _dataService.developers$.map(devs => devs.find(dev => dev.id === _params.get('id')));
    }
}