import { AddressComponent } from "../../components/address/address.component";
import { IonicPageModule } from "ionic-angular/module";
import { NgModule } from "@angular/core";
import { AddressPage } from "./address";


@NgModule({
    declarations: [
      AddressComponent,
      AddressPage
    ],
    entryComponents: [
        AddressPage
    ],
    imports: [
      IonicPageModule.forChild(AddressPageModule),
    ],
  })
  export class AddressPageModule {}
  