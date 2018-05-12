import { NgModule } from "@angular/core";
import { EventModalPage } from "./event-modal";
import { IonicPageModule } from "ionic-angular";

@NgModule({
    declarations: [
      EventModalPage,
    ],
    imports: [
      IonicPageModule.forChild(EventModalPage),
    ],
  })
  export class EventModalPageModule {}
  