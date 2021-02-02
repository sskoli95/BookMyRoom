import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Hotel } from '../hotels/hotels.component';
@Injectable({
  providedIn: 'root'
})
export class HoteldataService {

  constructor(private http:HttpClient) { }

  retrieveAllHotels(){
    return this.http.get<Hotel[]>(`http://localhost:8080/hotels`)
  }


  retrieveHotelByLocation(location){
    return this.http.get<Hotel[]>( `http://localhost:8080/hotel/${location}`)
 
   } 



   //used by client when he selects read more about hotel
   retriveHotelById(hid){
    return this.http.get<Hotel>(`http://localhost:8080/hotels/${hid}`)
   }


   //used by owner when he wants to see all registerd hotels
   retrieveHotelByOwnId(oid){
    return this.http.get<Hotel[]>(`http://localhost:8080/Owner/${oid}`);
   }

   //used for posting hotel data in database 

   addNewHotel(oid,hotel){
    return this.http.post(`http://localhost:8080/addHotel/${oid}`,hotel);

   }

   addNewRoom(hid,room){
     return this.http.post(`http://localhost:8080/addHotelDetails/${hid}`,room)
   }
}
