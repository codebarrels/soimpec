export class CityCodeResponse {
    input: string; 
    cities?: Array<CityCode>
} 

export class CityCode {
    code: number;
    city: string;
}