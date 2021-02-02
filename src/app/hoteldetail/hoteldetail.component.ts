import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


import { Booking, CustomerObj, Hotel, RoomType } from '../hotels/hotels.component';
import { AuthenticationService } from '../service/authentication.service';
import { BookingService } from '../service/booking.service';
import { HoteldataService } from '../service/hoteldata.service';

@Component({
  selector: 'app-hoteldetail',
  templateUrl: './hoteldetail.component.html',
  styleUrls: ['./hoteldetail.component.css']
})
export class HoteldetailComponent implements OnInit {
  name=sessionStorage.getItem("authenticatedUser");
  custNum:number=-1;
  userObj;
  realUserObj:CustomerObj;
  id:number;
  hotel:Hotel;
  rooms:RoomType[];
  roomSelected:RoomType;
  minDate = new Date('YYYY-MM-DD');
  date1: Date =new Date();
  
  date2:Date= new Date();
  dataSubmitted=false;
  diff:any;
  diffCurr:any;
  diffDays:any;
  errorDate=false;

  
  dateMessage="Date Criteria Breached Max-days 20  Or selected past date";
  cost:number;
  booking:Booking;
  bookingAdded=false;
  constructor(private router:Router,private route:ActivatedRoute,private serviceObj:AuthenticationService, private retriveHotelById:HoteldataService, private addBooking:BookingService) { }
  

onSubmit(){
  console.log("button is clicked submit");
  this.errorDate=false;
  this.dataSubmitted=true;
  console.log(this.date1);
  this.diff=new Date(this.date2).getTime() - new Date(this.date1).getTime();
  this.diffDays=Math.ceil(this.diff/(1000 * 3600 * 24))+1;
  if(this.diffDays>20 ){
    this.errorDate=true;
  }

  console.log("yes time is calculation" + (new Date(this.date1).getTime()- new Date(this.minDate).getTime()));
  if((new Date(this.date1).getTime()- new Date(this.minDate).getTime())<0){
    this.errorDate=true;

  }
  console.log("here bro the day is displayed");
  console.log(this.diffDays);
  this.cost=this.diffDays * this.roomSelected.price;
  this.booking= new Booking(this.date1, this.date2,this.roomSelected.type,this.cost);
}

PersistData(){
  console.log("about to be persisted");
  this.custNum=parseInt(sessionStorage.getItem('custId'));
  console.log("value of custNum is"+this.custNum);
  if(this.custNum!=-1){
  this.addBooking.addNewBooking(this.custNum,this.id,this.booking).subscribe(
    data=>{
      console.log(data);
      if(data != null){
        this.bookingAdded=true;
        
      }
    }
  );
  }
}


// refresh(){
//   console.log(this.name);
//   if(this.name){
//   this.serviceObj.getCustomerId(this.name).subscribe(
//     data=>{
//       this.userObj=JSON.stringify(data);
//       console.log(this.userObj);
//      this.realUserObj= JSON.parse(this.userObj);
//      console.log("the real object is here "+ this.realUserObj);
//       if (this.userObj.hasOwnProperty("custId")){
//         console.log(this.userObj.custId);
//       console.log("user object retrieven here is" + this.userObj)
//       }

//     }
//   )}
// }




refresh(){
  // console.log(this.name);
  // if(this.name){
  // this.serviceObj.getCustomerId(this.name).subscribe(
  //   data=>{
  //     this.userObj=data;
  //     console.log(this.userObj);
     
  //    console.log("the real object is here "+ this.userObj.custId);
  //   sessionStorage.setItem('custId',this.userObj.custId)

  //   }
  // )}
}

  ngOnInit(): void {
    
    this.refresh();
   
    
    this.id=Number(this.route.snapshot.paramMap.get('id'));

    console.log("the value of hid is " +this.id);
    this.retriveHotelById.retriveHotelById(this.id).subscribe(
      data=>{
        console.log(data);
      
        console.log(this.roomSelected);
        this.hotel=data;
        this.rooms=this.hotel.roomTypes;
        console.log(this.hotel.roomTypes[0].type);
      }
    )
  
   }

}
