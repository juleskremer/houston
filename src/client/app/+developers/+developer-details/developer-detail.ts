import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {Router} from 'angular2/router';

import {IDeveloper} from '../../developers';
import {ValuesPipe} from '../../values-pipe';


@Component({
  selector: 'developer-details',
  templateUrl: 'app/+developers/+developer-details/developer-detail.html',
  inputs: ['developer'],
  pipes: [ValuesPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetailComponent {
  constructor(private _router: Router) {}


  @Input() developer: IDeveloper;

  onEdit(developer: IDeveloper) {
    this._router.navigate(['DeveloperEdit', {id: this.developer.id}]);
  }

  gotoDevelopers() { this._router.navigate(['DevelopersListing']); }
}
