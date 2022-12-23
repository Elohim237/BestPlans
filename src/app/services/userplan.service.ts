import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserplanService {
  constructor(private http: HttpClient) {}
  public showPlan(plan:any): Observable<any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url='http://127.0.0.1:8000/api/choices/';
    return this.http.post<any>(url,plan,{headers});
  }
}
