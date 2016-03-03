//this service will get replaced entirely
//with some magical firebase lib


import {Mission} from './mission';
import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class MissionsService {


    getMission(id: string) {

//         var firebaseUrl: string;
//         var missionRef: Firebase;
//         var ngMission: Mission;
// 
//         firebaseUrl = "https://ngmain.firebaseio.com/missions/" + id;
//         missionRef = new Firebase(firebaseUrl);
// 
//         missionRef.once("value", function(snapshot) {
//             ngMission = snapshot.val();
//             // data === "hello"
//         });
//         return Promise.resolve(ngMission);

    }

    getMissions() {

//         var firebaseUrl: string;
//         var missionsRef: Firebase;
//         var ngMissions: Mission[] = new Array();
// 
//         firebaseUrl = "https://ngmain.firebaseio.com/missions";
//         missionsRef = new Firebase(firebaseUrl);
// 
//         missionsRef.on("value", snapshot => {
//             snapshot.forEach(childSnap => {
//                 ngMissions.push(childSnap.val())
//             });
//         });
// 
//         return Promise.resolve(ngMissions);

    }

}

