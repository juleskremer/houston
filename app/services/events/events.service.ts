import {IEvent} from './event';
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs';
import  'rxjs/add/operator/share';
import  'rxjs/add/operator/map';


@Injectable()
export class EventsService {

    ngEvents: Observable<IEvent[]>;

    constructor(public _http: Http) {

        this.ngEvents = _http.get('/app/mock-data/events.json')
            .map(response => response.json()).share();
            
    }

}

