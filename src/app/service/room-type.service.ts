import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RoomType } from '../hotels/hotels.component';


@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  constructor(private http:HttpClient) { }

  retrieveRoomByHid(hid){
    return this.http.get<RoomType[]>(`http://localhost:8080/roomDetails/${hid}`)
  }
}
