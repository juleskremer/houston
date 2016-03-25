import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {IDeveloper} from '../../developers';
import {AppStore} from '../../store';
import {DataService} from '../../data-service';


@Component({
  selector: 'developers-listing',
  templateUrl: 'app/+developers/+developers-listing/developers-listing.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevelopersListingComponent {
  developers$: Observable<IDeveloper[]>;

  constructor(
      private _router: Router, private _dataService: DataService, private store: Store<AppStore>) {
    this.developers$ = _dataService.developers$;
  }

  onSelect(developer: IDeveloper) {
    this._router.navigate(['DeveloperDetail', {id: developer.id}]);
  }
}
