//this service will get replaced entirely
//with some magical firebase lib


import {Developer} from './developer';
import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class DeveloperService {
  

  getDeveloper(id: string) {
    
    var firebaseUrl: string;
	  var developerRef: Firebase;
    var ngDeveloper: Developer;
    
		firebaseUrl = "https://ngmain.firebaseio.com/developers/" + id;
		developerRef = new Firebase(firebaseUrl);

   developerRef.once("value", function(snapshot) {
    ngDeveloper = snapshot.val();
    // data === "hello"
  });
  return Promise.resolve(ngDeveloper);
  
  }

  getDevelopers() {
    
    var firebaseUrl: string;
	  var developersRef: Firebase;
    var ngDevelopers: Developer[] = new Array();
    
		firebaseUrl = "https://ngmain.firebaseio.com/developers";
		developersRef = new Firebase(firebaseUrl);

     developersRef.on("value", snapshot => {
      snapshot.forEach(childSnap => {
        ngDevelopers.push(childSnap.val())
      });
     });

    return Promise.resolve(ngDevelopers);

  }

   saveDeveloper(dev: Developer) {
    
    var firebaseUrl: string;
	  var developerRef: Firebase;
    var ngDeveloper: Developer;
    
		firebaseUrl = "https://ngmain.firebaseio.com/developers/" + dev.gitID;
		developerRef = new Firebase(firebaseUrl);

    developerRef.update(
       {
            "firstName": dev.firstName,
            "lastName": dev.lastName,
            "bio" : dev.bio,
            "blogUrl" : dev.blogUrl
        }
       
    );
  
  }
  
}

