import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IDeveloper} from '../../services/developers/developer';
import {Observable} from 'rxjs';
import {DeveloperEditFormComponent} from './developer-editform';
import {DeveloperService} from '../../services/developers/developer.service';
import {DataService} from '../../services/dataservice/dataservice';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'developer-edit',
    directives: [DeveloperEditFormComponent],
    template: `
        <developer-editform [developer]="developer$ | async" 
        (save)=saveDeveloper($event)>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperEditComponent {

    developer$: Observable<IDeveloper>;

    constructor(
        private _params: RouteParams,
        private _dataService: DataService,
        private _devService: DeveloperService) {
            
        this.developer$ = _dataService.developers$.map(devs => devs.find(dev => dev.id === _params.get('id')));
    }

    saveDeveloper(developer: IDeveloper) {

        this._devService.updateDeveloper(developer);
    }
}