import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class UserplanService {
  constructor(private http: HttpClient) {}
  public showPlan(plan:any): Observable<any>
  {
    const url='http://127.0.0.1:8000/api/choices/';
    return this.http.post<any>(url,plan,httpOptions);
  }
}
