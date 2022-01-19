import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent} from './profile/profile.component'
import { AuthGuard } from 'src/app/auth.guard';
import { UserComponent }from './user/user.component';
import { CompaniesComponent }from './companies/companies.component';

const routes: Routes = [
  
  {path: "view", component: ProfileComponent},
  {path: "user",  canActivate:[AuthGuard], component: UserComponent},
  {path: "companies", canActivate: [AuthGuard], component: CompaniesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
