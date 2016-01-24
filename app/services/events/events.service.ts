import {Event} from './event';
import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {DeveloperService} from "../developers/developer.service"
import {Developer} from "../developers/developer"

@Injectable()
export class EventsService  {


  getEvent(id: string) : Event {

    var firebaseUrl: string;
    var eventRef: Firebase;
    var ngEvent: Event;

    firebaseUrl = "https://ngmain.firebaseio.com/events/" + id;
    eventRef = new Firebase(firebaseUrl);

    eventRef.once("value", function(snapshot) {
      ngEvent = snapshot.val();
      // data === "hello"
    });
    //return Promise.resolve(ngEvent);
    return ngEvent;

  }

  getEvents() : Event[] {

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
        
    //return Promise.resolve(ngEvents);
    return ngEvents;

  }
  
  
  //this should not be here
  //this should be done off a class with a constructor that populates this internally
  getEventSpeakers(event: Event)
  {      
      var devService = new DeveloperService();
      event.eventSpeakers = new Array();
      var newDev: Developer;
      for(var prop in event.speakers)
      {
          newDev = devService.getDeveloper(prop);
          event.eventSpeakers.push(newDev)
          //devService.getDeveloper(prop).then(developer => event.eventSpeakers.push(developer));
      }   
  }

}

