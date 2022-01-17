import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  imageSrc: string;
  myForm = new FormGroup({
   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
   file: new FormControl('', [Validators.required]),
   fileSource: new FormControl('', [Validators.required])
 });
}

 
