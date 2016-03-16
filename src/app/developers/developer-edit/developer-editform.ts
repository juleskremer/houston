import {Component, Input, ChangeDetectionStrategy, EventEmitter, Output} from 'angular2/core';
import {Router} from 'angular2/router';

import {IDeveloper} from '../../_/developers';
import {LanguageService, ILanguage} from '../../_/language-service';
import {ValuesPipe} from '../../_/values-pipe';

@Component({
    selector: 'developer-editform',
    templateUrl: 'app/developers/developers-edit/developer-editform.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    inputs: ['developer'],
    pipes: [ValuesPipe],
    providers: [LanguageService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperEditFormComponent {
    submitted = false;
    // languages$: Observable<ILanguage[]>;
    // developerLanguages: Observable<ILanguage[]>;
    // searchResults: Observable<ILanguage[]>;
    // searchLanguages = new Control()

    @Input() developer: IDeveloper;
    @Output() save: EventEmitter<IDeveloper> = new EventEmitter();

    constructor(
        private _router: Router,
        private _commonService: LanguageService) {

            // this.languages$ = _commonService.fetchLanguages();


    //   this.searchResults = this.searchLanguages.valueChanges
    //   .debounceTime(150)
    //   .switchMap(text => this._commonService.searchLanguages("en"));

         }

    ngOnInit(){
                //     this.developerLanguages = Observable.merge(
                // Observable.of(this.developer.languages),
                // this.searchResults);
    }

    onSubmit() {
        this.submitted = true;
    }

    onSave(developer: IDeveloper) {
        this.save.emit(developer);
    }

    onCancel(developer: IDeveloper) {
        this._router.navigate(['DeveloperDetail', { id: developer.id }]);
    }

}