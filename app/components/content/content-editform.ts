import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {IContent} from '../../services/content/content';
import {Observable} from 'rxjs/Observable';
import {EventEmitter, Output} from 'angular2/core';
import {CONTENT_TYPES} from '../../const/const';

@Component({
    selector: 'content-editform',
    templateUrl: 'app/components/content/content-editform.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    inputs: ['content'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentEditFormComponent {
    submitted = false;
    selectedType = {};
    contentTypes = CONTENT_TYPES;

    //TODO:  Do we want the date to be the date of submission
    //if so default that
    //Do we want the author to be only submitting user? if so, defautl that too
    //and pass in from Add Content button on DeveloperProfile form with login

    @Input('content') _content: IContent;
    @Output() save: EventEmitter<IContent> = new EventEmitter();
    @Output() cancel: EventEmitter<IContent> = new EventEmitter(); 

    originalID: string;
    selectedContent: IContent;
    
    set _content(value: IContent){
        if (value) this.originalID = value.id;
        this.selectedContent = Object.assign({}, value);
    }

    onSubmit() { 
        this.submitted = true; 
    }
    
    onTypeChange(content){
        this.selectedContent.type = event.target.options.selectedIndex; 
        this.selectedType = CONTENT_TYPES[event.target.options.selectedIndex]
    }

}