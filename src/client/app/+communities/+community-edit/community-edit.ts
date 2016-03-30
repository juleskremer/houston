import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

import {ICommunity, CommunitiesService} from '../../communities';
import {DataService} from '../../data-service';

import {CommunityEditFormComponent} from './community-editform';


@Component({
  selector: 'community-edit',
  directives: [CommunityEditFormComponent],
  template: `
        <community-editform [community]='communities$ | async' 
        (save)='saveEvent($community)'
        (cancel)='onCancel()'></community-editform>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityEditComponent {
  community$: Observable<ICommunity>;

  constructor(
      private _router: Router, private _dataService: DataService, private _params: RouteParams,
      private _communitiesService: CommunitiesService) {
    // how do I address
    // the new state here
    // I need a new event as an observable? yes...blank events stream?
    this.community$ = _dataService.communities$.map(
        communities => communities.find(community => community.id === _params.get('id')));
  }

  saveCommunity(community: ICommunity) {
    // TODO:  Need to confirm save & route or show notification
    this._communitiesService.saveCommunity(community);
  }

  onCancel() {
    // TODO:  Can I set this to null here or not?
    this._router.navigate(['CommunitiesListing']);
  }
}
