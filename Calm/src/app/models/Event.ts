import User from '../models/User';

export default interface Event {
    id?: number;
    title:string;  
    occurrenceData:string;  
    organizer:User[];  
    attendees:string;
    city:string;  
    isEvent:boolean;
}
