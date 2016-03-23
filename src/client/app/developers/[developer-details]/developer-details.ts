import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {RouteParams} from 'angular2/router';

import {IDeveloper} from '../../_/developers';
import {DataService} from '../../_/data-service';
import {DeveloperDetailComponent} from './developer-detail';


@Component({
  selector: 'developer-detail',
  directives: [DeveloperDetailComponent],
  template: '<developer-details [developer]="developer$ | async">',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetailsComponent {
  developer$: Observable<IDeveloper>;

  constructor(private _params: RouteParams, private _dataService: DataService) {
    this.developer$ =
        _dataService.developers$.map(devs => devs.find(dev => dev.id === _params.get('id')));
  }
}