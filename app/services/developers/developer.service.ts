import {IDeveloper} from './developer';
import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs';
import  'rxjs/add/operator/share';
import  'rxjs/add/operator/map';

@Injectable()
export class DeveloperService {

    developers$: Observable<IDeveloper[]>;
    constructor(public _http: Http) {
       
        this.developers$ = _http.get('/app/mock-data/developers.json')
            .map(response => response.json()).share();
    }


    getDeveloper(id: string) : Observable<IDeveloper> {
 //       this.devCache[id] = new ReplaySubject(1);
 //       this.ngDevelopers.map(devs => devs.find(dev => dev.gitID === id))
 //         .subscribe(dev => this.devCache[id].next(dev));        
 
        return this.developers$.map(devs => devs.find(dev => dev.gitID === id));
        
 //       return this.devCache[id];
    }

    saveDeveloper(dev: IDeveloper) {
//         this.devCache[dev.gitId].next()
    }

}

