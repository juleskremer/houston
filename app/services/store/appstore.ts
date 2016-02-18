import {IDeveloper} from '../developers/developer';

export interface AppStore {
    developers: IDeveloper[];
}

export const developers = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_DEVELOPERS':
      return payload;
    case 'CREATE_DEVELOPER':
      return [...state, payload];
    case 'UPDATE_DEVELOPER':
      return state.map(developer => {
        return developer.gitID === payload.gitID ? Object.assign({}, developer, payload) : developer;
      });
    case 'DELETE_DEVELOPER':
      return state.filter(developer => {
        return developer.gitID !== payload.gitID;
      });
    default:
      return state;
  }
};