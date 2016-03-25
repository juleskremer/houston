import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';


import {ICommunity} from '../../communities';
import {AppStore} from '../../store';
import {DataService} from '../../data-service';


@Component({
  selector: 'communities-listing',
  templateUrl: 'app/communities/communities-listing/communities-listing.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunitiesListingComponent {
  communities$: Observable<ICommunity[]>;

  constructor(
      private _router: Router, private _dataService: DataService, private store: Store<AppStore>) {
    this.communities$ = _dataService.communities$;
  }

  onEdit(community: ICommunity) { this._router.navigate(['CommunityEdit', {id: community.id}]); }

  onSelect(developer) {
    this._router.parent.navigate(['DevelopersComponent', 'DeveloperDetail', {id: developer.id}]);
  }

  onNew() { this._router.navigate(['CommunityEdit']); }
}
