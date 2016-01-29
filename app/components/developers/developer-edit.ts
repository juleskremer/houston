import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {DeveloperService} from '../../services/developers/developer.service';
import {Developer} from '../../services/developers/developer';
import {RouteParams, Router} from 'angular2/router';
import {Language} from '../../services/common/language-model';
import {LanguageService} from '../../services/common/language.service';

@Component({
    selector: 'developer-edit',
    templateUrl: 'app/components/developers/developer-edit.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    inputs: ['developer', 'language'],
    providers: [LanguageService]
})
export class DeveloperEditComponent {
    public developer: Developer;
    public languages: Language[];

    submitted = false;

    onSubmit() { this.submitted = true; }

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        public devService: DeveloperService) { }

    ngOnInit() {
        this.developer = this.devService.getDeveloper(this._routeParams.get('id'));
    }

    onSave(developer: Developer) {
        this.devService.saveDeveloper(developer);
    }
    onCancel(developer: Developer) {
        this._router.navigate(['DeveloperDetail', { id: developer.gitID }]);
    }
}