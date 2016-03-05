import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {IDeveloper} from '../../services/developers/developer';
import {Router} from 'angular2/router';
import {Language} from '../../services/common/language-model';
import {Observable} from 'rxjs';
import {EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'developer-editform',
    templateUrl: 'app/components/developers/developer-editform.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    inputs: ['developer'],
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperEditFormComponent {
    submitted = false;

    @Input() developer: IDeveloper;
    @Output() save: EventEmitter<IDeveloper> = new EventEmitter();

    constructor(
        private _router: Router) { }

    onSubmit() { 
        this.submitted = true; 
    }

    onSave(developer: IDeveloper) {
        this.save.emit(developer);
    }
    
    onCancel(developer: IDeveloper) {
        this._router.navigate(['DeveloperDetail']);
    }
}