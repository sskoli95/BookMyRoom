import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel, Owner } from '../hotels/hotels.component';
import { AuthenticationService } from '../service/authentication.service';
import { HoteldataService } from '../service/hoteldata.service';

@Component({
  selector: 'app-owner-panel',
  templateUrl: './owner-panel.component.html',
  styleUrls: ['./owner-panel.component.css']
})
export class OwnerPanelComponent implements OnInit {

  constructor(private hotelService:HoteldataService,private route:Router,private authentic:AuthenticationService) { }
  
 name= sessionStorage.getItem("authenticatedOwner");
 owner:Owner;
 value=false;
 id:number;
  storageOwnId=sessionStorage.getItem('ownerId');
 hotels:Hotel[];
 
fetchingHotelData(){
  this.hotelService.retrieveHotelByOwnId(this.id).subscribe(response=>{
    this.hotels=response;
    console.log(response);
  })}

 
 showBooking(hid){
  this.route.navigate(['showBookings',hid])
 }
 addHotel(){
  this.route.navigate(['addHotel',this.id])
 }
  ngOnInit(): void {
    console.log(this.name);
    this.authentic.getOwnerId(this.name).subscribe(
      data=>{
        console.log("getting data of user");
        this.id=data;
        this.fetchingHotelData();
        
      }
    )
    
    sessionStorage.removeItem("hotelId");
  
}
}