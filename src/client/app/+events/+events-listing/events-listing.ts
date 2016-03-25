import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {IEvent} from '../../events';
import {AppStore} from '../../store';
import {DataService} from '../../data-service';


@Component({

  selector: 'events-listing',
  templateUrl: 'app/+events/+events-listing/events-listing.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsListingComponent {
  events$: Observable<IEvent[]>;

  constructor(
      private _router: Router, private _dataService: DataService, private store: Store<AppStore>) {
    this.events$ = _dataService.events$;
  }

  onEdit(event: IEvent) { this._router.navigate(['EventEdit', {id: event.id}]); }
  onSpeakerSelect(developer) {
    this._router.parent.navigate(['DevelopersComponent', 'DeveloperDetail', {id: developer.id}]);
  }

  onNew() { this._router.navigate(['EventEdit']); }
}
