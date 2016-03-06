import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IDeveloper} from '../../services/developers/developer';
import {Observable} from 'rxjs';
import {DeveloperDetailsComponent} from './developer-details';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/AppStore';
import {RouteParams} from 'angular2/router';
import {DeveloperService} from '../../services/developers/developer.service';

@Component({
    selector: 'developer-detail',
    directives: [DeveloperDetailsComponent],
    template:'<developer-details [developer]="developer$ | async">',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetailComponent {
   
    developer$: Observable<IDeveloper>;

    constructor(
        private store: Store<AppStore>,
        private _params: RouteParams, 
        private _devService: DeveloperService) 
    {
        //if there was any route parameter, it would be the
        //developer id (for now) and as such need to set the selectedDeveloper
        //in the store
        //THIS DOESN"T WORK FIND OUT WHY"        
        var devID = this._params.get("id");
        if(devID){
           this.store.dispatch({type: 'SELECT_DEVELOPER', payload: this._devService.getDeveloper(devID)});
        }
        
        this.developer$ = this.store.select('selectedDeveloper'); 
     
    }
}