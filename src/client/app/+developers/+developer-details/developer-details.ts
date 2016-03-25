import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

import {IDeveloper} from '../../developers';
import {DataService} from '../../data-service';

import {DeveloperDetailComponent} from './developer-detail';


@Component({
  selector: 'developer-detail',
  directives: [DeveloperDetailComponent],
  template: '<developer-details [developer]="developer$ | async"></developer-details>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetailsComponent {
  developer$: Observable<IDeveloper>;

  constructor(private _params: RouteParams, private _dataService: DataService) {
    this.developer$ =
        _dataService.developers$.map(devs => devs.find(dev => dev.id === _params.get('id')));
  }
}
