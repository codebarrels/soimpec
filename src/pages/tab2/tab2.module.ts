import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab2Page } from './tab2';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { NgCalendarModule } from 'ionic2-calendar';
import { EventModalPageModule } from '../../components/calendar/event-modal/event-modal.module';
import { Calendar } from '@ionic-native/calendar';
@NgModule({
  declarations: [
    Tab2Page,
    CalendarComponent
  ],
  entryComponents: [CalendarComponent
  ],
  imports: [
    IonicPageModule.forChild(Tab2Page),
    NgCalendarModule,
    EventModalPageModule
  ],
  providers: [
    Calendar
  ]
})
export class Tab2PageModule {}
