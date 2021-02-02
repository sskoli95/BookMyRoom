import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer, CustomerObj } from '../hotels/hotels.component';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  retrieveCustomerDetails(id){
    return this.http.get<CustomerObj>(`http://localhost:8080/customer/${id}`);
  }
}
