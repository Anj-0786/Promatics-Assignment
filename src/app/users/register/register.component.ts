import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  register_data:any;
  constructor(private authService: AuthService, router: Router) { }
  ngOnInit() {
  this.registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('',  [Validators.required, Validators.email]),
    gender: new FormControl('',  [Validators.required]),
    dateofbirth: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required]),
      
    });
  }
onSave() {
  if(this.registerForm.valid){
    this.authService.register(this.registerForm.value).subscribe(result=>{
      if(result.success){
        console.log(result);
        alert(result.message);
      }else
      {alert(result.message)
      }
    });
  }
}
  
}
