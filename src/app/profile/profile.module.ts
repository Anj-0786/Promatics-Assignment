import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
