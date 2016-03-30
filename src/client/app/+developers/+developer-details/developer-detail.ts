import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {IDeveloper} from '../../developers';
import {ValuesPipe} from '../../values-pipe';


@Component({
  selector: 'developer-details',
  templateUrl: 'app/+developers/+developer-details/developer-detail.html',
  inputs: ['developer'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [ValuesPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetailComponent {

  @Input() developer: IDeveloper;

}
