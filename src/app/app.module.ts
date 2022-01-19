import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { UsersModule } from './users/users.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    ], 

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    UsersModule,
    HttpClientModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
