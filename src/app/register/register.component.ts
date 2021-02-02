import { Component, OnInit } from '@angular/core';
import { Customer } from '../hotels/hotels.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  val='owner';
  invalidLogin=false;
  errmsg="";
  customer:Customer;
  userAddedSuccess=false;
  




registerCustomer(){
  this.matchPass();
  if(!this.invalidLogin){
  console.log("user up for registration");
  this.customer=new Customer(this.userEmail,this.userNameCust,this.userPass);
  this.register.registerCustomer(this.customer).subscribe(
    data=>{
      if(data!=null){
        console.log(data);
        this.userAddedSuccess=true;
      }
    }
  )

}
  
}

  userNameCust='';
  userPass='';
  userRepeatPass='';
  userEmail='';

  
  constructor(private register:AuthenticationService) { }
  

  matchPass(){
    if(this.userPass!=this.userRepeatPass){
      this.invalidLogin=true;
      this.errmsg="password and confirm password not same";
      
    }

  }


  ngOnInit(): void {
  }
  toggleUser(){
    if(this.val=='owner'){
      this.val='customer';
    }
    else{
      this.val='owner';
    }
  }
}
