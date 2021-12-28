import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MonServiceService } from 'src/app/services/mon-service.service';
import { Customer } from '../template-forms/customer-model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  customer:Customer={
    email:'toto',pwd:'',address:'',address2:'',city:'',zip:''
  }
  registrationForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private monService:MonServiceService) {
    this.registrationForm = this.formBuilder.group({
      email:[this.customer.email,Validators.required],
      pwd:['',Validators.required],
      address:['',Validators.required],
      address2:['',Validators.required],
      city:['',Validators.required],
      zip:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }
  save(){
    console.log(this.registrationForm.value);
    this.monService.save(this.registrationForm.value);
  }

}
