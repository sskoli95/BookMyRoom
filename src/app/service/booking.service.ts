import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Booking } from '../hotels/hotels.component';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  addNewBooking(cid , hid,booking){
    return this.http.post(`http://localhost:8080/bookRoom/${cid}/${hid}`,booking);
  }

  //used for retriving hotel bookings
  retriveByHotelId(hid){
    return this.http.get<Booking[]>(`http://localhost:8080/bookings/${hid}`);
  }

  //used for retreving customer bookings
  retriveByCustId(cid){
    return this.http.get<Booking[]>(`http://localhost:8080/bookingCust/${cid}`);
  }

  deleteByRid(id){
    return this.http.delete(`http://localhost:8080/bookings/${id}`);
  }
}
