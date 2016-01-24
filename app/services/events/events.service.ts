//this service will get replaced entirely
//with some magical firebase lib


import {Event} from './event';
import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {DeveloperService} from "../developers/developer.service"

@Injectable()
export class EventsService {


  getEvent(id: string) {

    var firebaseUrl: string;
    var eventRef: Firebase;
    var ngEvent: Event;

    firebaseUrl = "https://ngmain.firebaseio.com/events/" + id;
    eventRef = new Firebase(firebaseUrl);

    eventRef.once("value", function(snapshot) {
      ngEvent = snapshot.val();
      // data === "hello"
    });
    return Promise.resolve(ngEvent);

  }

  getEvents() {

    var firebaseUrl: string;
    var eventsRef: Firebase;
    var ngEvent: Event;
    var ngEvents: Event[] = new Array();

    firebaseUrl = "https://ngmain.firebaseio.com/events";
    eventsRef = new Firebase(firebaseUrl);

    eventsRef.on("value", snapshot => {
        
        snapshot.forEach(childSnap => {
            ngEvent = childSnap.val();
            this.getEventSpeakers(ngEvent);
            ngEvents.push(ngEvent);
        });
    });
        
    return Promise.resolve(ngEvents);

  }
  
  
  //this should not be here
  //this should be done off a class with a constructor that populates this internally
  getEventSpeakers(event: Event)
  {      
      var devService = new DeveloperService();
      event.eventSpeakers = new Array();
      for(var prop in event.speakers)
      {
          devService.getDeveloper(prop).then(developer => event.eventSpeakers.push(developer));
      }
      console.log(event);    
      
       
  }

}

