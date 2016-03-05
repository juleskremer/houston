import {IDeveloper} from '../developers/developer';

export interface ICommunity {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  contact: IDeveloper;
  url: string;
  members: IDeveloper[];
}