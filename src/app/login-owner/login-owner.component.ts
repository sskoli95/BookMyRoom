import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from '../hotels/hotels.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent implements OnInit {

  constructor(private authenticate:AuthenticationService,private router:Router) { }

  invalidLogin=false;
  errMsg="";
  username='';
  password='';
  owner:Owner;
  ownid:any;

  ownerLogin(){
    if(this.authenticate.authenticateOwner(this.username,this.password)){
    
     this.router.navigate(['OwnerPanel']);
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
      this.errMsg="Wrong credentials";
    }
  }

  ngOnInit(): void {
  }

}
