import { Component, ConstructorSansProvider, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HoteldataService } from '../service/hoteldata.service';


export class Booking {
  constructor(
  //public roomId: number,
  public checkin: Date,
  public chekout: Date,
  public roomType: string,
  public totalPrice: number,)
  {}
}

export class Owner{
  constructor(
       public   email: string,
       public  userName: string,
       public  password: string,
       
  ){}
}


export class Customer{
  constructor(
        //public custId:number,
       public   email: string,
       public  userName: string,
       public  password: string,
       
  ){}
}


export class CustomerObj{
  constructor(
        public custId:number,
       public   email: string,
       public  userName: string,
       public  password: string,
       
  ){}
}

export class RoomType {
  constructor(
  public rtid: number,
  public type: string,
  public price: number,
  public unitsAvailable: number,
  )
  {}
}


export class Hotel {
  constructor(
 public hid: number,
 public name: string,
 public location: string,
 public description: string,
 public amenities: string,
 public bookings: Booking[],
 public hotelOwnerId: number,
 public roomTypes: RoomType[],
  )
  {}
}




//fail safe plan : )

// export class Hotel{
//   constructor(
//     public hid:number,
//     public amenities:string,
//     public description:string,
//     public location:string,
//     public name:string,
    
    
//     )
//     {}   
// }






@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  //creating array of hotels to store the data coming from hotel service
  hotels:Hotel[];
   name=sessionStorage.getItem("authenticatedUser");
 searchLocation="";
 userObj;

  //dependency injection for HoteldataService
  constructor(private getHotels:HoteldataService, private route:Router,private serviceObj:AuthenticationService) { }
  
  searchByLocation(){

    this.getHotels.retrieveHotelByLocation(this.searchLocation).subscribe(response=>{
      this.hotels=response;
      console.log(this.hotels);
    })
  }


  //
  getHotelDetail(hid){
    this.route.navigate(['Hotel',hid])
  }
  
  refresh(){
    console.log(this.name);
    if(this.name){
    this.serviceObj.getCustomerId(this.name).subscribe(
      data=>{
        this.userObj=data;
        console.log(this.userObj);
       
       console.log("the real object is here "+ this.userObj.custId);
      sessionStorage.setItem('custId',this.userObj.custId)
  
      }
    )}


  }


  //retrieving all hotels and placing them into hotels array of angular and subscribing to extract data

  ngOnInit(): void {
    this.refresh();

    this.getHotels.retrieveAllHotels().subscribe(response=>{
      this.hotels=response;
      console.log(this.hotels);
    }
    )
  }
  
}
