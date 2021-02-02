import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking, Hotel,CustomerObj } from '../hotels/hotels.component';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-show-bookings',
  templateUrl: './show-bookings.component.html',
  styleUrls: ['./show-bookings.component.css']
})
export class ShowBookingsComponent implements OnInit {
  id:number;
  book:Booking[];
  cust:CustomerObj;
  hotel:Hotel[];
  constructor(private route:ActivatedRoute, private bookService:BookingService) { }



  deleteBooking(id){
    console.log(id +" todo is gonna be deleted");
    this.bookService.deleteByRid(id).subscribe(
  
      response=>{
       //this.message=`${id} deleted successfully`;
       this.refreshBookings();
      }
    )
  }

  refreshBookings(){

    this.id=Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.retriveByHotelId(this.id).subscribe(
      response=>{
        console.log(response);
        this.book=response;
      }
    );
  }

  

  ngOnInit(): void {
    this.refreshBookings();
    

}
}