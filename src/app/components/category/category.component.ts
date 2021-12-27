import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../dashboard/category-models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()category!:Category;
  @Output() data = new EventEmitter<Category>()

  constructor() {}

  ngOnInit(): void {
  }

  updateCategory(){
    this.category.libelle = "Computer data child";
    this.data.emit(this.category);
  }
}
