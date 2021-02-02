import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LogoutComponent } from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HttpClientModule } from '@angular/common/http';
import { HoteldetailComponent } from './hoteldetail/hoteldetail.component';
import { OwnerPanelComponent } from './owner-panel/owner-panel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { ShowBookingsComponent } from './show-bookings/show-bookings.component';
import { CustomerBookingComponent } from './customer-booking/customer-booking.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ErrorComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    LogoutComponent,
    LoginComponent,
    RegisterComponent,
    LoginOwnerComponent,
    RegisterOwnerComponent,
    HotelsComponent,
    HoteldetailComponent,
    OwnerPanelComponent,
    AddHotelComponent,
    UpdateHotelComponent,
    ShowBookingsComponent,
    CustomerBookingComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
