//this service will get replaced entirely
//with some magical firebase lib


import {Developer} from './developer';
import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class DeveloperService {

    developerRef: Firebase;
    ngDevelopers: Developer[] = [];

    constructor() {

        this.developerRef = new Firebase("https://ngmain.firebaseio.com/developers/");
        this.developerRef.on("value", snapshot => {
            snapshot.forEach(childSnap => {
                this.ngDevelopers.push(childSnap.val())
            });
        });
    }

    getDeveloper(id: string): Developer {

        var index: number;
        index = this.ngDevelopers.findIndex(function(o) { return o.gitID == id; })
        return this.ngDevelopers[index];

    }

    saveDeveloper(dev: Developer) {

        this.developerRef.update(dev);

    }

}

