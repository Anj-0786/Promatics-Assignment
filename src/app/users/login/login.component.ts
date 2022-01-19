import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private authService: AuthService, router: Router) { }

  ngOnInit() {
    this.LoginForm = new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        
      });
    }
    loginProcess() {
      if(this.LoginForm.valid){
        this.authService.login(this.LoginForm.value).subscribe(result=>
          {
          if(result.success) {
            console.log(result);
            alert(result.message) 
            }
          else {
            alert(console.error())
            
          }
    });
     }
     }
    }