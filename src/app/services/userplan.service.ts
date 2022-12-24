import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

export interface BundleItems {
  amount: number;
  sms: number;
  call: number;
  validity: number;
  data: number;
  priorities: Map<string, number>;
}

@Injectable({
  providedIn: 'root'
})
export class UserplanService {
  constructor(private http: HttpClient) {}
  hemles!:Map<string, BundleItems>;
  mangos!: Map<string, BundleItems>;
  public showPlan(plan:any): Observable<any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url='http://127.0.0.1:8000/api/choices/';
    return this.http.post<Map<string, BundleItems>>(url,plan,{headers});
  }
  public setHemle(obj:Map<string, BundleItems>){
    this.hemles=obj;
    console.log("hemle set service",this.hemles);
    localStorage.removeItem('hemle');
    localStorage.setItem('hemle', JSON.stringify(this.hemles))
    return this.hemles;
  }
  public SetMango(obj:Map<string, BundleItems>){
    this.mangos=obj;
    localStorage.removeItem('mango');
    localStorage.setItem('mango', JSON.stringify(this.mangos))
    console.log("mango set service",this.mangos);
    return this.mangos;
  }
  public getHemle(): Map<string, BundleItems>{
    //@ts-ignore
    this.hemles = JSON.parse(localStorage.getItem('hemle'))
    console.log("hemle get service",this.hemles);
    return this.hemles;
  }
  public getMango(): Map<string, BundleItems>{
    //@ts-ignore
    this.mangos = JSON.parse(localStorage.getItem('mango'))
    console.log("mango get service",this.mangos);
    return this.mangos;
  }
}
