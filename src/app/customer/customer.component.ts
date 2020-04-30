import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer_data:string[];

  constructor(private service:HttpClient) { }

  ngOnInit(): void {
    this.service.get('http://localhost:9090/usr/allUser').subscribe(
      data=>{
        this.customer_data=data as string[];
      }
    );
  }

}
