import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
 title = 'promatics-assignment';
 private data:any = []
  constructor(
    private http: HttpClient
) {}
  


 /* getData(){
    const url ="http://34.93.237.153:8901/users"
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }*/
 }




