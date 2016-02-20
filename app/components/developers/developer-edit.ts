import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IDeveloper} from '../../services/developers/developer';
import {Observable} from 'rxjs';
import {DeveloperEditFormComponent} from './developer-editform';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/AppStore';
import {DeveloperService} from '../../services/developers/developer.service';

@Component({
    selector: 'developer-edit',
    directives: [DeveloperEditFormComponent],
    template:`
        <developer-editform [developer]="developer$ | async" 
        (save)=saveDeveloper($event)>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperEditComponent {
   
    developer$: Observable<IDeveloper>;

    constructor(private store: Store<AppStore>, private _devService: DeveloperService) 
    {
        this.developer$ = store.select('selectedDeveloper');
    }
    
    saveDeveloper(developer: IDeveloper){

        this._devService.updateDeveloper(developer); 
    }
}