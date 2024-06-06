import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { ResponseData } from '../models/response.model';
import { Student, StudentPayment, Trainer } from '../models/request.model';
import { StudentDetails } from '../../student/student-details/student-details.component';
import { StudentPaymentComponent } from '../../student/student-payment/student-payment.component';
import { StudentCompleteDetails } from '../../../../models/student.model';
import { TrainerCompleteDetails } from '../../../../models/trainer.model';
import { TrainerDetails } from '../../trainer/trainer-details/trainer-details.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student = new StudentCompleteDetails();
  trainer = new TrainerCompleteDetails();
  

  get studentSaveURL() { return environment.apiUrl + 'student/saveStudent' };
  get paymentSaveURL() { return environment.apiUrl + 'payment/savePayment' };
  get studentListURL() { return environment.apiUrl + 'student/getStudent' };
  get studentGetByIDURL() { return environment.apiUrl + 'student/getStudent/' };
  get paymentGetByIDURL() { return environment.apiUrl + 'payment/getPayment/' };
  get trainerSaveURL() { return environment.apiUrl + 'trainer/saveTrainer' };
  get trainerGetByIDURL() { return environment.apiUrl + 'trainer/getTrainer/' };
  get trainerListURL() { return environment.apiUrl + 'trainer/getTrainer' };


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

  saveTrainer(body: Trainer): Observable<ResponseData<null>> {
    return this.http.post<ResponseData<null>>(this.trainerSaveURL, JSON.stringify(body), this.httpOptions).pipe(map(res => {
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

  getTrainer(): Observable<ResponseData<TrainerDetails[]>> {
    return this.http.get<ResponseData<TrainerDetails[]>>(this.trainerListURL, this.httpOptions).pipe(map(res => {
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

  getTrainerId(id: string): Observable<ResponseData<TrainerDetails>> {
    return this.http.get<ResponseData<TrainerDetails>>(this.trainerGetByIDURL + id, this.httpOptions).pipe(map(res => {

      var data = res.data;
      if(!!data){
      const trainer : Partial<TrainerCompleteDetails> = {
        firstName : data?.firstName,
        lastName : data?.lastName,
        dob : data?.dob,
        gender : data?.gender,
        phoneNumber : data?.phoneNumber,
        whatsappNumber : data?.whatsappNumber,
        email : data?.email,
        address : data?.address,
        id : data.trainerId,
        couresEnrolled : data.couresEnrolled,
        conductedCourse : data.conductedCourse,
        status : data.status,
        trainerSalary : data.trainerSalary,
        trainerId : data.trainerId
      }

      this.saveTrainerDetails(trainer);
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

  saveTrainerDetails(trainerDetails: Partial<TrainerCompleteDetails>) {
    this.trainer = { ...this.trainer, ...trainerDetails };
  }

  clearStudentDetails(): void {
    this.student = new StudentCompleteDetails();
  }

  clearTrainerDetails(): void {
    this.trainer = new TrainerCompleteDetails();
  }

  
      

}
