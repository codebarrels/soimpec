import { NgModule } from "@angular/core";
import { EventModalPage } from "./event-modal";
import { IonicPageModule } from "ionic-angular";
import { CustomerSelectorModule } from "../../../pages/customer-selector/customer-selector.module";

@NgModule({
    declarations: [
      EventModalPage,
    ],
    imports: [
      IonicPageModule.forChild(EventModalPage),
      CustomerSelectorModule
    ],
  })
  export class EventModalPageModule {}
  