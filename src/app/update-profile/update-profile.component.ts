import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Customer, CustomerObj } from '../hotels/hotels.component';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private profile:ClientService) { }
  cust:CustomerObj;
  custNum:number=-1;
  update=false;

  toggle(){
    
  }

  refresh(){
    this.custNum=parseInt(sessionStorage.getItem('custId'));

    if(this.custNum!=-1){
      this.profile.retrieveCustomerDetails(this.custNum).subscribe(
        data=>{

          this.cust=data;
          console.log(this.cust);
        }

      )

    }

  }

  ngOnInit(): void {
    this.refresh();
  }

}
