import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer, Owner,CustomerObj } from '../hotels/hotels.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  passcust=false;
  passown=false;
  ownid:any;
  constructor(private http:HttpClient) { }

  authenticate(username,password){
    this.useAuthenticationCust(username,password).subscribe(
      response=>{
        this.passcust=response;
      }
    )
    if(this.passcust){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }
    else{
      return false;
    }
  }

  // authenticateOwner(username,password){
  //   if(username==="sadanand" && password==="root"){
  //     sessionStorage.setItem('authenticatedOwner',username);
  //     return true;
  //   }

  // }






  authenticateOwner(username,password){
    this.useAuthenticationOwner(username,password).subscribe(
      response=>{
        this.passown=response;
      }
    )

    if(this.passown){
      this.getOwnerId(username).subscribe(
        data=>{
          this.ownid=data;
        }

      )
      sessionStorage.setItem('authenticatedOwner',username);
      return true;
    }

  }
  

  useAuthenticationOwner(username,password){
    
    return this.http.get<boolean>(`http://localhost:8080/owners/bool/${username}/${password}`);
  }


  useAuthenticationCust(username,password){
    
    return this.http.get<boolean>(`http://localhost:8080/customer/${username}/${password}`);
  }


  useAuthenticationObject(username,password){
    return this.http.get<Owner>(`http://localhost:8080/owner/${username}/${password}`);

  }

  isOwnerLoggedIn(){
    let ownName= sessionStorage.getItem('authenticatedOwner');
    return !(ownName===null);
  }


  isUserLoggedIn(){
      
    let name= sessionStorage.getItem('authenticatedUser');
    return!(name===null);
  }


  ownerLogout(){
    sessionStorage.removeItem("authenticatedOwner");
    sessionStorage.removeItem("ownerObject");
  }

  userLogout(){
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("custId");
  }

  registerOwner(Owner){
    return this.http.post(`http://localhost:8080/hotel-owner`,Owner);
  }

  registerCustomer(Customer){
    return this.http.post('http://localhost:8080/customer',Customer)
  }

  getOwnerId(ownerName){
    return this.http.get<number>(`http://localhost:8080/ownerId/${ownerName}`);
  }



  //creating this function to get customer object for preserving his id;

  getCustomerId(customerName){
    return this.http.get<CustomerObj>(`http://localhost:8080/customer/object/${customerName}`);
  }
}
