import {IEvent} from '../events/event';
import {EventsService} from '../events/events.service';


export interface IDeveloper {
  //id: string;
  bio: string;
  buddy: string;
  community: string;
  events: string;
  email: string;
  firstName: string;
  gitID: string;
  languages: string;
  lastName: string;
  locations: string;
  picUrl: string;
  resumeUrl: string;
  twitterID: string;
  typeDev: string;
  blogUrl: string;
  ngConsult: string;
  projects: string;  
  isGDE: string;
}

// export class Developer implements IDeveloper {
//   id: string;
//   bio: string;
//   buddy: string;
//   community: string;
//   events: any;
//   email: string;
//   firstName: string;
//   gitID: string;
//   languages: string;
//   lastName: string;
//   locations: string;
//   picUrl: string;
//   resumeUrl: string;
//   twitterID: string;
//   typeDev: string;
//   blogUrl: string;
//   ngConsult: string;
//   projects: string;  
//   isGDE: string;
//   
//   constructor(developer: IDeveloper, public eventService?: EventsService){
//       
//       ( { id: this.id, bio: this.bio, buddy: this.buddy, community: this.community, events: this.events,
//           email: this.email, firstName: this.firstName, gitID: this.gitID,  languages: this.languages,
//           lastName: this.lastName, locations: this.locations, picUrl: this.picUrl, resumeUrl: this.resumeUrl,
//           twitterID: this.twitterID, typeDev: this.typeDev, blogUrl: this.blogUrl, ngConsult: this.ngConsult,
//           projects: this.projects, isGDE: this.isGDE } = developer );           
//       
//   
// }
// 
