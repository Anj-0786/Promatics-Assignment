import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

 data:any = []
  constructor(
    private http: HttpClient
) {}
  
ngOnInit(): void {
  const url ="http://34.93.237.153:8901/Details"
  this.http.get(url).subscribe((res)=>{
    this.data = res
    console.log(this.data)
  })
}
}

  