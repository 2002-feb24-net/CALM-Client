import User from './User';

export default interface Gathering {
    title:string;  
    occurrenceData:string;  
    organizer?:User[];  
    attendees?:string;
    details?:string;
    city:string;  
    isEvent:boolean;
}
