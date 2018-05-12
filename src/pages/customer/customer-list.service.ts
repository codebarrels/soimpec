import { Customer } from './customer.model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Select } from 'ionic-angular/components/select/select';

@Injectable() 

export class CustomerListService {
    private customerListRef = this.afDb.list<Customer>('clientes-list'); 

    constructor(private afDb: AngularFireDatabase) {
    }

    getCustomersList() {
        console.log(this.customerListRef)
        return this.customerListRef;
    }

    createCustomer(customer: Customer) {
        return this.customerListRef.push(customer);
    }

    updateCustomer(customer: Customer) {
        return this.customerListRef.update(customer.key, customer);
    }

    deleteCustomer(customer: Customer) {
        return this.customerListRef.remove(customer.key);
    }
}