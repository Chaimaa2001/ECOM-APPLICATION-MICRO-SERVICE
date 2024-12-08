import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForOf, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgIf, RouterModule], // Ajout de RouterModule pour Router
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'], // Correction de styleUrl -> styleUrls
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private http: HttpClient, private router: Router) {} // Utilisation correcte de Router

  ngOnInit() {
    this.http.get('http://localhost:8888/customer-service/api/customers').subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        console.error(err); // Ajout d'un traitement minimal pour les erreurs
      },
    });
  }

  getOrders(c: any) {
    this.router.navigateByUrl("/orders/"+c.id); // Navigation dynamique en utilisant l'ID du client
  }
}
