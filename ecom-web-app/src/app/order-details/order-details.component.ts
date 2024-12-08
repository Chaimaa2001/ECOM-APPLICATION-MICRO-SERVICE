import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {json} from 'express';
import {DatePipe, DecimalPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    NgIf,
    JsonPipe,
    DatePipe,
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit{
  orderDetails:any
  orderId!:number
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.orderId=this.route.snapshot.params['orderId'];
  }
  ngOnInit() {
    this.http.get('http://localhost:8888/billing-service/fullBill/'+this.orderId).subscribe({
      next: (data) => {
        this.orderDetails = data;
      },
      error: (err) => {
        console.error(err); // Ajout d'un traitement minimal pour les erreurs
      },
    });
  }

  getOrders(c: any) {
    this.router.navigateByUrl("/orders/"+c.id); // Navigation dynamique en utilisant l'ID du client
  }

  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/"+o.id);
  }


}
