
export interface IEvent {
  //id: string;
  name: string;
  type: string;
  location: string;
  speakers: any;
  date: string;
  url: string;  
}

// export class Event implements IEvent{
//     
//   //id: string;
//   name: string;
//   type: string;
//   location: string;
//   speakers: any;
//   date: string;
//   url: string;
//   eventSpeakers: Developer[] = [];
//   
//   constructor(event: IEvent){
//       
//       ( { name: this.name, type: this.type, location: this.location,
//           speakers: this.speakers, date: this.date, url: this.url } = event );           
//       
//       for(var prop in this.speakers)
//       {
//           this.eventSpeakers.push(this.devService.getDeveloper(prop));
//       } 
// 
//  }
//}