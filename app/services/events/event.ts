import {IDeveloper} from '../developers/developer';
import {Observable} from 'rxjs';

export interface IEvent {
  id: string;
  name: string;
  type: string;
  location: string;
  speakers: any;
  date: string;
  url: string;  
}