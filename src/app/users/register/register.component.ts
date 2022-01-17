import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

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
      
    })
  }
onSave() {
  console.log(this.registerForm.value);
}
  
}
