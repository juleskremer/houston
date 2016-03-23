import {IDeveloper} from '../developers-model/developer';

export interface IEvent {
  id: string;
  name: string;
  type: string;
  location: string;
  speakers: IDeveloper[];
  date: string;
  url: string;
}
