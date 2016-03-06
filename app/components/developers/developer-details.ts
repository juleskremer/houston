import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {IDeveloper} from '../../services/developers/developer';
import {Router, RouteParams} from 'angular2/router';
import {ValuesPipe} from '../../pipes/valuespipe';

@Component({
    selector: 'developer-details',
    templateUrl: 'app/components/developers/developer-details.html',
    inputs: ['developer'],
    pipes: [ValuesPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperDetailsComponent {
 
    constructor(private _router: Router){
        
    }

 
    @Input() developer: IDeveloper;
    
    onEdit(developer: IDeveloper) {
        this._router.navigate(['DeveloperEdit', { id: this.developer.id }]);
    }
    
    gotoDevelopers() {
        this._router.navigate(['DevelopersListing']);
    }
    
}
