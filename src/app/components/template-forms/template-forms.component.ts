import { Component, OnInit } from '@angular/core';
import { Customer } from './customer-model';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  customer:Customer={
    email:'toto',pwd:'',address:'',address2:'',city:'',zip:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.customer);
  }

}
