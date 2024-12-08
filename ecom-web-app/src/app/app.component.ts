import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, RouterLink, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecom-web-app';
  actions:Array<any>=[
    {title:"Home","route":"/home",icon:"house"},
    {title:"Products","route":"/products",icon:"search"},
    {title:"New product","route":"/newProduct",icon:"safe"},
  ];
  currentAction:any;

  setCurrentAction(action: any) {
    this.currentAction=action;
  }
}
