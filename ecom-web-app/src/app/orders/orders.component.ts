import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DatePipe,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders:any
  customerId!:number
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }
  ngOnInit() {
    this.http.get('http://localhost:8888/billing-service/bills/search/byCustomerId?projection=fullOrder&customerId='+this.customerId).subscribe({
      next: (data) => {
        this.orders = data;
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
