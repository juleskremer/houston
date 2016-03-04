import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IDeveloper} from '../../services/developers/developer';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/appstore';
import {DataService} from '../../services/dataservice/dataservice';

@Component({
    selector: 'developers-listing',
    templateUrl: 'app/components/developers/developers-listing.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevelopersListingComponent {

    developers$: Observable<IDeveloper[]>;

    constructor(
        private _router: Router,
        private _dataService: DataService,
        private store: Store<AppStore>
    ) {
        this.developers$ = _dataService.developers$;
    }

    onSelect(developer: IDeveloper) {

        this.store.dispatch({type: 'SELECT_DEVELOPER', payload: developer});
        this._router.navigate(['DeveloperDetail']);
    }
}