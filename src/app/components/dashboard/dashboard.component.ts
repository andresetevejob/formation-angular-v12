import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from './category-models';
import { Product } from './product-models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products!:Product[];
  category :Category={
    libelle:"Computer",
    qteProduct:25
  };
  
  constructor() { }
  

  ngOnInit(): void {
    this.loadAllData();
  }


  loadAllData(){
    console.log("init data");
    this.products=[
      {label:"Toshiba xp",price:250,color:"red"},
      {label:"Lenovo Old",price:50,color:"red"},
      {label:"Lenovo Yoga",price:200,color:"red"},
      {label:"Apple Macos 2009",price:1500,color:"red"}
    ];
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

  onUpdateCategory(eventData:Category){
    console.log(eventData);
    this.loadAllData();
  }

}
