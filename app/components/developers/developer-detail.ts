import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IDeveloper} from '../../services/developers/developer';
import {Observable} from 'rxjs';
import {DeveloperDetailsComponent} from './developer-details';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/AppStore';

@Component({
    selector: 'developer-detail',
    directives: [DeveloperDetailsComponent],
    template:'<developer-details [developer]="developer$ | async">',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetailComponent {
   
    developer$: Observable<IDeveloper>;

    constructor(private store: Store<AppStore>) 
    {
        this.developer$ = store.select('selectedDeveloper');
    }
}