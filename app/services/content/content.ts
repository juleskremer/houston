import {IDeveloper} from '../developers/developer';
import {Observable} from 'rxjs';

export interface IContent {
  id: string;
  title: string;
  type: string;
  description: string;
  author: IDeveloper;
  date: string;
  url: string;  
}