import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { CityCodeResponse } from "./cities.model";

@Injectable() 

export class CityCodesService {
    constructor(private http: HttpClient) {}

    callCodeCityListBy(query:string, value: string ): Observable<CityCodeResponse> {
       return this.http.get("https://vicopo.selfbuild.fr/?"+ query +"=" + value) as Observable<CityCodeResponse>;
    }

}