import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ResponseData } from '../models/response.model';
import { Student } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  get studentSaveURL() { return environment.apiUrl + 'student/saveStudent' };

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


}
