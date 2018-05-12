import { Component, Output, EventEmitter } from "@angular/core";
import { CityCodesService } from "./city-codes.service";
import { CityCode } from "./cities.model";

@Component({
    selector: 'address-component',
    templateUrl: 'address.component.html',
})
export class AddressComponent {
    private codeCityList: Array<CityCode>;;
    private showList: boolean = false;

    @Output() city: EventEmitter<CityCode> = new EventEmitter(); 

    constructor(private cityCodesService: CityCodesService) { }

    selectCity(item: CityCode) {
        this.showList = false ;
        this.city.emit(item);
    } 

    getCodeCityList(event: any) {
        let val = event.target.value;
        this.showList = false;

        if(isNaN(val)){
            if (val.length >= 4) {
                this.cityCodesService.callCodeCityListBy("city", val ).subscribe(code => {
                    this.codeCityList = code.cities;
                    if (val && val.trim() != '' && this.codeCityList.length !== undefined) {
                        this.showList = true;
                    }
                });
            }
        } else {
            if (val.length >= 3) {
                this.cityCodesService.callCodeCityListBy("code", val).subscribe(city => {
                    this.codeCityList = city.cities;
                    if (val && val.trim() != '' && this.codeCityList.length !== undefined) {
                        this.showList = true;
                    }
                });
            }
        }
    }

}