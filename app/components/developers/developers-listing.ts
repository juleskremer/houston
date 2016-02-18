import {Component} from 'angular2/core';
import {DeveloperService} from '../../services/developers/developer.service';
import {IDeveloper} from '../../services/developers/developer';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';
// import {AppStore} from '../../services/store/AppStore';
// import {Store} from "@ngrx/store";

@Component({
    selector: 'developers-listing',
    templateUrl: 'app/components/developers/developers-listing.html',
})
export class DevelopersListingComponent {

    developers$: Observable<IDeveloper[]>;

    constructor(
        private _router: Router,
        private _devService: DeveloperService
    ) {

        this.developers$ = this._devService.developers$;
        // this.developers$ = _devService.developers$;
        // _devService.loadDevelopers();
    }

    onSelect(developer: IDeveloper) {

        this._router.navigate(['DeveloperDetail', { id: developer.gitID }]);
    }
}