import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin=false;
  constructor(private router:Router,private authenticateUser:AuthenticationService) { }
  errmsg='';
  userName='';
  password='';

  


  userLogin(){
    if(this.authenticateUser.authenticate(this.userName,this.password) != false){
      
   this.router.navigate(['Hotels',this.userName]);
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
      this.errmsg="Credentials Invalid";
    }
  }
  ngOnInit(): void {
  }

}
