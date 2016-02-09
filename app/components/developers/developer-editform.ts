import {Component, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {DeveloperService} from '../../services/developers/developer.service';
import {IDeveloper} from '../../services/developers/developer';
import {Router} from 'angular2/router';
import {Language} from '../../services/common/language-model';
import {LanguageService} from '../../services/common/language.service';
import {Observable} from 'rxjs';
import {EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'developer-editform',
    templateUrl: 'app/components/developers/developer-editform.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    inputs: ['developer', 'language'],
    providers: [LanguageService]
})
export class DeveloperEditFormComponent {
    public languages: Language[];
    submitted = false;

    @Input() developer: IDeveloper;
    @Output() save: EventEmitter<IDeveloper> = new EventEmitter();

    constructor(
        private _router: Router,
        public _devService: DeveloperService) { }

    onSubmit() { 
        this.submitted = true; 
    }

    onSave(developer: IDeveloper) {
        this.save.emit(developer);
    }
    
    onCancel(developer: IDeveloper) {
        this._router.navigate(['DeveloperDetail', { id: developer.gitID }]);
    }
}