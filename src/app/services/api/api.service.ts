import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[]=[
    {id: 1,name:'MODEL S',category:'INDIA',img:'/assets/icon/car1.jpg'},
    {id: 1,name:'MODEL X',category:'INDIA',img:'/assets/icon/car5.jpg'},
    {id: 1,name:'MODEL Y',category:'INDIA',img:'/assets/icon/car3.jpg'},
    {id: 1,name:'SOLAR ROOF',category:'INDIA',img:'/assets/icon/solarroof.jpg'},
    {id: 1,name:'SOLAR PANEL',category:'INDIA',img:'/assets/icon/solarpanel.jpg'},
  ];

  constructor() { }
}
