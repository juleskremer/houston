import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {IDeveloper} from '../../services/developers/developer';
import {Router} from 'angular2/router';

@Component({
    selector: 'developer-details',
    templateUrl: 'app/components/developers/developer-details.html',
    inputs: ['developer'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetailsComponent {
 
    constructor(private _router: Router){}
 
    @Input() developer: IDeveloper;
    
    onSelect(developer: IDeveloper) {
        //we are already with our selectedDeveloper so need to update store
        this._router.navigate(['DeveloperEdit']);
    }
    
    gotoDevelopers() {
        this._router.navigate(['DevelopersListing']);
    }
}
