import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerBookingComponent } from './customer-booking/customer-booking.component';
import { ErrorComponent } from './error/error.component';
import { HoteldetailComponent } from './hoteldetail/hoteldetail.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OwnerPanelComponent } from './owner-panel/owner-panel.component';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuardService } from './service/route-guard.service';
import { ShowBookingsComponent } from './show-bookings/show-bookings.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'LoginOwner', component: LoginOwnerComponent },
  { path: 'About us', component: AboutusComponent },
  { path: 'contact us', component: ContactusComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Register/owner', component: RegisterOwnerComponent },
  { path: 'Hotels/:name', component: HotelsComponent, canActivate: [RouteGuardService] },
  { path: 'Hotel/:id', component: HoteldetailComponent, canActivate: [RouteGuardService] },
  { path: 'Logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'OwnerPanel', component: OwnerPanelComponent },
  { path: 'showBookings/:id', component: ShowBookingsComponent },
  { path: 'updateHotel', component: UpdateHotelComponent },
  {path:'profileCustDetails', component:UpdateProfileComponent},
  {path:'bookings',component:CustomerBookingComponent},
  { path: 'addHotel/:id', component: AddHotelComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
