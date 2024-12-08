import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgIf, AsyncPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products:any;
  constructor(private http:HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('http://localhost:8888/inventory-service/products?projection=fullProduct').subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{

      }
    })
  }


}
