import {IEvent} from '../events/event';
import {ICommunity} from '../communities/community';
import {ILanguage} from '../language-service/common.service';

export interface IDeveloper {
  // note: using gitID as id
  // gitID: string;

  id: string;
  bio: string;
  buddy: string;
  communities: ICommunity[];
  events: IEvent[];
  email: string;
  firstName: string;
  languages: ILanguage[];
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
  webpage: string;
  phone: string;
  linkedIn: string;
}