import {IDeveloper} from '../developers/developer';
import {IEvent} from '../events/event';
import {ICommunity} from '../communities/community';

export interface AppStore {
    developers: IDeveloper[];
    selectedDeveloper: IDeveloper;
    
    events: IEvent[];
    selectedEvent: IEvent;
    
    communities: ICommunity[];
    selectedCommunity: ICommunity;
    
}

export const developers = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_DEVELOPERS':
      return payload;
    case 'CREATE_DEVELOPER':
      return [...state, payload];
    case 'UPDATE_DEVELOPER':
      return state.map(developer => {
        return developer.id === payload.id ? Object.assign({}, developer, payload) : developer;
      });
    case 'DELETE_DEVELOPER':
      return state.filter(developer => {
        return developer.id !== payload.id;
      });
    default:
      return state;
  }
};

export const selectedDeveloper = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_DEVELOPER':
      return payload;
    default:
      return state;
  }
};


export const events = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_EVENTS':
      return payload;
    case 'CREATE_EVENT':
      return [...state, payload];
    case 'UPDATE_EVENT':
      return state.map(event => {
        return event.id === payload.id ? Object.assign({}, event, payload) : event;
      });
    case 'DELETE_EVENT':
      return state.filter(event => {
        return event.id !== payload.id;
      });
    default:
      return state;
  }
};

export const selectedEvent = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_EVENT':
      return payload;
    default:
      return state;
  }
};


export const communities = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_COMMUNITIES':
      return payload;
    case 'CREATE_COMMUNITY':
      return [...state, payload];
    case 'UPDATE_COMMUNITY':
      return state.map(community => {
        return community.id === payload.id ? Object.assign({}, community, payload) : community;
      });
    case 'DELETE_COMMUNITY':
      return state.filter(community => {
        return community.id !== payload.id;
      });
    default:
      return state;
  }
};

export const selectedCommunity = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_COMMUNITY':
      return payload;
    default:
      return state;
  }
};