import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomerListService } from '../pages/customer-list/customer-list.service';
import { CustomerListPage } from '../pages/customer-list/customer-list';
import { CustomerPageModule } from '../pages/customer/customer.module';
import { CityCodesService } from '../components/address/city-codes.service';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { NgCalendarModule } from 'ionic2-calendar';
import { EventModalPage } from '../components/calendar/event-modal/event-modal';
import { EventModalPageModule } from '../components/calendar/event-modal/event-modal.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { Calendar } from '@ionic-native/calendar';
import { CalendarService } from '../components/calendar/calendar.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomerListPage,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    CustomerPageModule,
    NgCalendarModule,
    EventModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomerListPage,
    CalendarComponent
  ],
  providers: [
    Calendar,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CustomerListService,
    CityCodesService,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    CalendarService
  ]
})
export class AppModule { }
