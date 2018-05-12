export class Customer {
    key?: string;
    firstName?: string;
    lastName?: string; 
    type?: string;
    birthday?: Date;
    telephone?: Telephone = new Telephone();    
    address?: address = new address();
    serviceList?: Array<string>;
}

export class address {
    numero?: string;
    complement?: string;
    rue?: string;
    codePostal?: string;
    ville?: string;
    notes?: string;
}

export class Telephone {
    num1?: number;
    num2?: number;    
}