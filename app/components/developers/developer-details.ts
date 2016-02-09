import {Component, Input} from 'angular2/core';
import {IDeveloper} from '../../services/developers/developer';
import {Router} from 'angular2/router';

@Component({
    selector: 'developer-details',
    templateUrl: 'app/components/developers/developer-details.html',
    inputs: ['developer']
})
export class DeveloperDetailsComponent {
 
    constructor(private _router: Router){}
 
    @Input() developer: IDeveloper;
    
    onSelect(developer: IDeveloper) {
        this._router.navigate(['DeveloperEdit', { id: developer.gitID }]);
    }
    
    gotoDevelopers() {
        this._router.navigate(['DevelopersListing']);
    }
}
