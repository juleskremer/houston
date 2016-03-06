import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {ICommunity} from '../../services/communities/community';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/appstore';
import {DataService} from '../../services/dataservice/dataservice';

@Component({

    selector: 'communities-listing',
    templateUrl: 'app/components/communities/communities-listing.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunitiesListingComponent  {

    communities$: Observable<ICommunity[]>;

    constructor(
        private _router: Router,
        private _dataService: DataService,
        private store: Store<AppStore>
    ) {
        this.communities$ = _dataService.communities$;
    }
    
    onEdit(community: ICommunity) {
        this._router.navigate(['CommunityEdit', { id: community.id }]);

    }
    onSelect(developer) {
       this._router.parent.navigate(['DevelopersComponent', 'DeveloperDetail', { id: developer.id }]);
    }
    
    onNew(){
        this._router.navigate(['CommunityEdit']);        
    }
}