import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiEndPoint: string = "https://localhost:7285/api/"

  constructor(private http: HttpClient) { }

  createNew(obj:any): Observable<any> {
    return this.http.post(this.apiEndPoint + "AddNewAppointment", obj)
  }
  getAllAppointment(): Observable<any> {
    return this.http.get< Observable<any>>(this.apiEndPoint +"GetAllAppointments")
  }
  getTodaysAppointment(): Observable<any> {
    return this.http.get< Observable<any>>(this.apiEndPoint +"GetTodaysAppointments")
  }
}
