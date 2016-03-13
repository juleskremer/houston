import {Component, OnInit, Input, ChangeDetectionStrategy} from 'angular2/core';
import {NgForm, Control} from 'angular2/common';
import {IDeveloper} from '../../services/developers/developer';
import {Router} from 'angular2/router';
import {ILanguage, CommonService} from '../../services/common/common.service';
import {Observable} from 'rxjs';
import {EventEmitter, Output} from 'angular2/core';
import {ValuesPipe} from '../../pipes/valuespipe';

@Component({
    selector: 'developer-editform',
    templateUrl: 'app/components/developers/developer-editform.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    inputs: ['developer'],
    pipes: [ValuesPipe],
    providers: [CommonService],
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
        private _commonService: CommonService) {
            
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