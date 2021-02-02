import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Owner } from '../hotels/hotels.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent implements OnInit {

  constructor(private http:HttpClient, private register:AuthenticationService) { }

  invalidLogin=false;
  errmsg="";
  ownerUserName='';
  ownerPass='';
  ownerRepeatPass='';
  ownerEmail='';
  owner:Owner;
  userAddedSuccess=false;

  checkPass(){
    if(this.ownerPass!=this.ownerRepeatPass){
      this.invalidLogin=true;
      this.errmsg="Password not matching ";
    }
  }

  registerOwner(){
    this.checkPass();
    if(!this.invalidLogin){
    this.owner= new Owner(this.ownerEmail,this.ownerUserName,this.ownerPass);
    this.register.registerOwner(this.owner).subscribe(
      data=>{
        console.log(data);
        if(data!=null){
          this.userAddedSuccess=true;

        }
      }
    );
    }
  }
  ngOnInit(): void {
  }

}
