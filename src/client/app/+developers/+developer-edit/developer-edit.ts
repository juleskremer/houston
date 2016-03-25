import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

import {DataService} from '../../data-service';
import {IDeveloper, DeveloperService} from '../../developers';
import {DeveloperEditFormComponent} from './developer-editform';


@Component({
  selector: 'developer-edit',
  directives: [DeveloperEditFormComponent],
  template: `
        <developer-editform [developer]='developer$ | async' 
        (save)=saveDeveloper($event)>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperEditComponent {
  developer$: Observable<IDeveloper>;

  constructor(
      private _params: RouteParams, private _dataService: DataService,
      private _devService: DeveloperService) {
    this.developer$ =
        _dataService.developers$.map(devs => devs.find(dev => dev.id === _params.get('id')));
  }

  saveDeveloper(developer: IDeveloper) { this._devService.updateDeveloper(developer); }
}
