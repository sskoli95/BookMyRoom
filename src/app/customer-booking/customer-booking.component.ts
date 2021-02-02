import { Component, OnInit } from '@angular/core';
import { Booking,Hotel } from '../hotels/hotels.component';
import { AuthenticationService } from '../service/authentication.service';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.css']
})
export class CustomerBookingComponent implements OnInit {
  name=sessionStorage.getItem("authenticatedUser");
  custNum:number=-1;
  retrieveNum:number;
  book:Booking[];
  hotel:Hotel[];
  message:string;
  constructor(private booking:BookingService,private serviceObj:AuthenticationService) { }
  
  deleteBooking(id){
    console.log(id +" todo is gonna be deleted");
    this.booking.deleteByRid(id).subscribe(
  
      response=>{
       this.message=`${id} deleted successfully`;
       this.refreshBookings();
      }
    )
  }

  refreshBookings(){
    this.custNum=parseInt(sessionStorage.getItem('custId'));
    this.booking.retriveByCustId(this.custNum).subscribe(
      data=>{
        this.book=data;
      }


    )


  }
  ngOnInit(): void {
    this.refreshBookings();
    
  }

}
