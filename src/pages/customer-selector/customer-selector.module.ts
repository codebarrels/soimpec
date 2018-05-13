import { CustomerSelectorPage } from "./customer-selector";
import { IonicPageModule } from "ionic-angular";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        CustomerSelectorPage
    ],
    entryComponents: [
        CustomerSelectorPage
    ],
    imports: [
        IonicPageModule.forChild(CustomerSelectorPage),
    ],
})
export class CustomerSelectorModule { }
