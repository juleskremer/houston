import {IContent} from './content';
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from '../store/appstore';
import {IDeveloper} from '../developers/developer';

const BASE_URL = 'http://localhost:3004/contents/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ContentsService {

    contents$: Observable<IContent[]>;

    constructor(public _http: Http, private store: Store<AppStore>) {

    }


    fetchContents(): Observable<IContent[]> {

        this._http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: 'ADD_CONTENTS', payload }))
            .subscribe(action => this.store.dispatch(action));

        return this.contents$ = Observable.combineLatest(
            this.store.select('contents'),
            this.store.select('developers'),
            (contents: any[], developers: any[]) => {
                return contents.map(content => {
                    var author: IDeveloper = developers.find(developer => developer.id === content.author) || ({id:content.author});
                    return Object.assign({}, content, { author: author });
                });
            });        
    }

    saveContent(content: IContent) {
        (content.id) ? this.updateContent(content) : this.createContent(content);
    }

    createContent(content: IContent) {

        this._http.post(`${BASE_URL}`, JSON.stringify(this.addUUID(content)), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'CREATE_CONTENT', payload: content }));
    }

    updateContent(content: IContent) {

        this._http.put(`${BASE_URL}${content.id}`, JSON.stringify(content), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'UPDATE_CONTENT', payload: content }));

    }
    
    // NOTE: Utility functions to simulate server generated IDs
    private addUUID(content: IContent): IContent {
        return Object.assign({}, content, { id: this.generateUUID() }); // Avoiding state mutation FTW!
    }

    private generateUUID(): string {
        return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
            .replace(/1|0/g, function() {
                return (0 | Math.random() * 16).toString(16);
            });
    };

}

