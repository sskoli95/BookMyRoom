import { Component, OnInit } from '@angular/core';
import { Hotel, RoomType } from '../hotels/hotels.component';

import { ActivatedRoute} from '@angular/router';
import { HoteldataService } from '../service/hoteldata.service';
import { RoomTypeService } from '../service/room-type.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  
  constructor(private route:ActivatedRoute, private hotelService:HoteldataService, private roomService:RoomTypeService) { }
  id:number;
  hotel:Hotel;
  room:RoomType;
  rooms:RoomType[];
  newHotel:any;
  hotelName:string;
  hotelAdded=false;
  message:string;
  roomData=false;
  addedHotelId:number;
  idRoom:number;
  


  addRoom(){
    this.idRoom=parseInt(sessionStorage.getItem('hotelId'));
    console.log("new hotel id from request");
    console.log(this.newHotel.id);
    console.log("new id from session storage");
    console.log(this.idRoom);
    this.hotelService.addNewRoom(this.idRoom,this.room).subscribe(
      data =>{
          console.log(data);
          this.roomData=true;
      }
    );
    console.log("detail adding initiated");
  }

  getRoomData(){
    console.log("getting room information");
    this.roomService.retrieveRoomByHid(this.idRoom).subscribe(response=>{
      this.rooms=response;
      console.log(this.rooms);
    });
  }

  addHotel(){
    
    console.log("add hotel initiated");
    this.newHotel= new Hotel(-1,"Add Hotel Name","Add location","Add description","Add ameneties",null,this.id,null);
    this.hotelService.addNewHotel(this.id,this.hotel).subscribe(
      data =>{console.log(data)
      if(data != null){
        this.hotelAdded=true;
        this.newHotel=data;
        sessionStorage.setItem('hotelId',this.newHotel.hid);
        this.message= "Hotel Added successfully";
        console.log("new hotel id is",this.newHotel.hid);
      }
      }
    )
  }



  // public hid: number,
  // public name: string,
  // public location: string,
  // public description: string,
  // public amenities: string,
  // public bookings: Booking[],
  // public hotelOwnerId: number,
  // public roomTypes: RoomType[],

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    console.log("what is id"+this.id);

    this.hotel=new Hotel(-1,"Add Hotel Name","Add location","Add description","Add ameneties",null,this.id,null);
    this.room=new RoomType(-1,"na",0,0);
  }

}
