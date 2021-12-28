import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  constructor() { }

  save(data:any){
    console.log('http request');
  }
}
