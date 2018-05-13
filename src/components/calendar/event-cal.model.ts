import {  Customer } from "../../pages/customer/customer.model";
import { CalendarOptions } from "@ionic-native/calendar";

export class EventCalendar {
   key: string; 
   customer: Customer;
   title: string;
   notes: string;
   startTime: string;
   endTime: string;
   calOptions: CalendarOptions;
   allDay: string;
}