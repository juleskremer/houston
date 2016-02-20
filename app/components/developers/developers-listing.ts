import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {DeveloperService} from '../../services/developers/developer.service';
import {IDeveloper} from '../../services/developers/developer';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/appstore';

@Component({
    selector: 'developers-listing',
    templateUrl: 'app/components/developers/developers-listing.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevelopersListingComponent {

    developers$: Observable<IDeveloper[]>;

    constructor(
        private _router: Router,
        private _devService: DeveloperService,
        private store: Store<AppStore>
    ) {
        this.developers$ = _devService.developers$;
        _devService.loadDevelopers();
    }

    onSelect(developer: IDeveloper) {

        this.store.dispatch({type: 'SELECT_DEVELOPER', payload: developer});
        this._router.navigate(['DeveloperDetail']);
    }
}