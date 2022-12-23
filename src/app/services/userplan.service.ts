import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserplanService {
  constructor(private http: HttpClient) {}
  Hemle=new Array<any>;
  All=new Array<any>;
  Mango:any;
  public showPlan(plan:any): Observable<any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url='http://127.0.0.1:8000/api/choices/';
    return this.http.post<any>(url,plan,{headers});
  }
  public setHemle(obj:any){
    this.Hemle.push(obj);
  }
  public SetMango(obj:any){
    this.Mango=obj;
  }
  public getHemle(){
    return this.Hemle;
  }
  public getMango(){
    return this.Mango;
  }
  public allforfait(obj:any){
    this.All.push(obj)
  }
  public  getAll(){
    return this.All;
  }
}
