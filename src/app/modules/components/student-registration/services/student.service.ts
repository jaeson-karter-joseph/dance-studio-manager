import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ResponseData } from '../models/response.model';
import { Payment, Student } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  get studentSaveURL() { return environment.apiUrl + 'student/saveStudent' };
  get paymentSaveURL() { return environment.apiUrl + 'payment/savePayment' };
  get studentListURL() { return environment.apiUrl + 'student/getStudent' };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  constructor(private http: HttpClient) { }

  saveStudent(body: Student): Observable<ResponseData<null>> {
    return this.http.post<ResponseData<null>>(this.studentSaveURL, JSON.stringify(body), this.httpOptions).pipe(map(res => {
      return res;
    }))
  }

  savePayment(body: Payment): Observable<ResponseData<null>> {
    return this.http.post<ResponseData<null>>(this.paymentSaveURL, JSON.stringify(body), this.httpOptions).pipe(map(res => {
      return res;
    }))
  }

  getStudent(): Observable<ResponseData<Student[]>> {
    return this.http.get<ResponseData<Student[]>>(this.studentListURL, this.httpOptions).pipe(map(res => {
      return res;
    }))
  }

}
