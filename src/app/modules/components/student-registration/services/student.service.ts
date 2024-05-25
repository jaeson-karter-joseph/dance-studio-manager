import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { ResponseData } from '../models/response.model';
import { Student, StudentPayment } from '../models/request.model';
import { StudentDetails } from '../../student/student-details/student-details.component';
import { StudentPaymentComponent } from '../../student/student-payment/student-payment.component';
import { StudentCompleteDetails } from '../../../../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student = new StudentCompleteDetails();

  get studentSaveURL() { return environment.apiUrl + 'student/saveStudent' };
  get paymentSaveURL() { return environment.apiUrl + 'payment/savePayment' };
  get studentListURL() { return environment.apiUrl + 'student/getStudent' };
  get studentGetByIDURL() { return environment.apiUrl + 'student/getStudent/' };
  get paymentGetByIDURL() { return environment.apiUrl + 'payment/getPayment/' };

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

  savePayment(body: StudentPaymentComponent): Observable<ResponseData<null>> {
    return this.http.post<ResponseData<null>>(this.paymentSaveURL, JSON.stringify(body), this.httpOptions).pipe(map(res => {
      return res;
    }))
  }

  getStudent(): Observable<ResponseData<StudentDetails[]>> {
    return this.http.get<ResponseData<StudentDetails[]>>(this.studentListURL, this.httpOptions).pipe(map(res => {
      return res;
    }))
  }

  getStudentId(id: string): Observable<ResponseData<StudentDetails>> {
    return this.http.get<ResponseData<StudentDetails>>(this.studentGetByIDURL + id, this.httpOptions).pipe(map(res => {

      var data = res.data;
      if(!!data){
      const student : Partial<StudentCompleteDetails> = {
        firstName : data?.firstName,
        lastName : data?.lastName,
        dob : data?.dob,
        gender : data?.gender,
        phoneNumber : data?.mobile,
        whatsappNumber : data?.whatsappNo,
        email : data?.email,
        address : data?.address,
        id : data.studentId,
        couresEnrolled : data.couresEnrolled,
        classDate : data.classDate,
        trainer : data.trainer,
        fees : data.fees,
        paymentMode : data.paymentMode,
        paymentDate : new Date(data.paymentDate as Date),
        vat : data.vat,
        addNotes : data.addNotes
        
      }

      this.saveStudentDetails(student).subscribe({
        next : res => {
          return res;
        }
      })
    }

      return res;
    }))
  }

  getPaymentId(id: string): Observable<ResponseData<StudentPayment>> {
    return this.http.get<ResponseData<StudentPayment>>(this.paymentGetByIDURL + id, this.httpOptions).pipe(map(res => {
      return res;
    }))
  }

  saveStudentDetails(studentDetails: Partial<StudentCompleteDetails>): Observable<void> {
    this.student = { ...this.student, ...studentDetails };
    return of();
  }

  clearStudentDetails(): void {
    this.student = new StudentCompleteDetails();
  }

}
