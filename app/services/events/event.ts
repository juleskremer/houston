import {IDeveloper} from '../developers/developer';
import {Observable} from 'rxjs/Observable';

export interface IEvent {
  id: string;
  name: string;
  type: string;
  location: string;
  speakers: IDeveloper[];
  date: string;
  url: string;  
}