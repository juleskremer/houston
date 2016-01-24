import {Developer} from '../developers/developer';

export interface Event {
  id: string;
  name: string;
  type: string;
  location: string;
  speakers: any;
  date: string;
  url: string;
  eventSpeakers: Developer[];
  
}