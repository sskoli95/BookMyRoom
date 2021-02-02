import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
  }

  status(){
    
    return this.authentication.isUserLoggedIn();
  }


  statusOwner(){
    return this.authentication.isOwnerLoggedIn();
  }

}
