import { Component, OnInit } from '@angular/core';
import { Product } from './product-models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products:Product[]=[
    {label:"test",price:1500,color:"red"},
    {label:"test",price:1500,color:"red"},
    {label:"test",price:1500,color:"red"},
    {label:"test",price:1500,color:"red"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.products.push({
      "label":"New product","price":2500
    })
  }

  getColor(){
    return "color: blue;";
  }

  evaluateCost(product:any){
    if(product.price > 1000){
      return "too expensive";
    }
    return "cheap";
  }

}
