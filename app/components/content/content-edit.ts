import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {IContent} from '../../services/content/content';
import {Observable} from 'rxjs/Observable';
import {ContentEditFormComponent} from './content-editform';
import {ContentsService} from '../../services/content/contents.service';
import {Router, RouteParams} from 'angular2/router';
import {DataService} from '../../services/dataservice/dataservice';

@Component({
    selector: 'content-edit',
    directives: [ContentEditFormComponent],
    template: `
        <content-editform [content]="content$ | async" 
        (save)="saveContent($content)"
        (cancel)="onCancel()">`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentEditComponent {

    content$: Observable<IContent>;

    constructor(
        private _router: Router,
        private _dataService: DataService,
        private _params: RouteParams,
        private _contentsService: ContentsService) {
        //how do I address
        //the new state here
        //I need a new event as an observable? yes...blank events stream?
        this.content$ = _dataService.contents$.map(contents => contents.find(content => content.id === _params.get('id')));
    }

    saveContent(content: IContent) {
        //TODO:  Need to confirm save & route or show notification
        this._contentsService.saveContent(content);
    }

    onCancel() {
        //TODO:  Can I set this to null here or not?
        this._router.navigate(['ContentsListing']);
    }
}