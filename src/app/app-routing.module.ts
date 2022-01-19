import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {path : "home", component: HomeComponent},
  {path :"users",
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {path :"profile",
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
