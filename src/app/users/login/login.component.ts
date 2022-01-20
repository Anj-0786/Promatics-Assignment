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
  login_data:any;
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
	     	if(result?.length){
	    	if(result[0]?.password==this.LoginForm.value.password){
	    		this.login_data = {"status":"success","message":"Logged in successfully","user_data":result[0]}
		}else{
	    		this.login_data = {"status":"error","message":"Incorrect password"}
		}
	    	}else{
	    		this.login_data = {"status":"error","message":"Incorrect email address"}
		}
		});
		}
	}

}
