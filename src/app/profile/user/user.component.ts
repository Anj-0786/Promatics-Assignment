import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  implements OnInit{
   data:any = []
  constructor(
    private http: HttpClient
) {}
  

ngOnInit(): void {
    const url ="http://34.93.237.153:8901/users"
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
 }
  


