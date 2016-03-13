import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/appstore';
import {IContent} from '../../services/content/content';
import {DataService} from '../../services/dataservice/dataservice';

@Component({
    selector: 'contents-listing',
    templateUrl: 'app/components/content/contents-listing.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentsListingComponent {

    contents$: Observable<IContent[]>;

    constructor(
        private _router: Router,
        private _dataService: DataService,
        private store: Store<AppStore>
    ) {
        this.contents$ = _dataService.contents$;
    }
}