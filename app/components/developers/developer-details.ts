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
        this._router.navigate(['DeveloperEdit', { id: developer.id }]);
    }
    
    gotoDevelopers() {
        this._router.navigate(['DevelopersListing']);
    }
}
