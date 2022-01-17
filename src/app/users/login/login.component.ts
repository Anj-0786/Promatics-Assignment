import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.LoginForm = new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        
      })
    }
    onSave() {
      console.log("", this.LoginForm.value);
    }
    }


