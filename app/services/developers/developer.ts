import {IEvent} from '../events/event';

export interface IDeveloper {
    //note: using gitID as id
    //gitID: string;

    id: string;
    bio: string;
    buddy: string;
    community: string;
    events: IEvent[];
    email: string;
    firstName: string;
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
    webpage: string;
    phone: string;
    linkedIn: string;
}