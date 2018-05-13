import { Address } from "../../pages/customer/customer.model";

export class EventCalendar {
   key: string; 
   title: string;
   address: Address;
   notes: string;
   startTime: Date;
   endTime: Date;
   calOptions: string;
}