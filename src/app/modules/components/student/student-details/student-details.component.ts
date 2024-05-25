import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { StudentDetailsProduct } from '../../../../../assets/data/DetailsProducts';
import { StudentService } from '../../student-registration/services/student.service';
import { Router } from '@angular/router';


export interface StudentDetails {
  id: number;
  firstName: string;
  lastName: string;
  mobile: number;
  whatsappNo: number;
  email: string;
  studentId: string;
  status: boolean;
  address: string;
  dob?: Date;
  gender?: string;
  phoneNumber?: number;
  whatsappNumber?: number;
  couresEnrolled?: string[];
  classDate?: Date[];
  trainer?: string[];
  fees?: number;
  vat?: number;
  paymentDate?: Date;
  paymentMode?: { name: string };
  addNotes?: string;
}

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class StudentDetailsComponent implements OnInit {
  productDialog: boolean = false;
  studentDetailsProducts!: StudentDetailsProduct[];
  studentDetailsproduct!: StudentDetailsProduct;
  studentDetailsSelectedProducts!: StudentDetailsProduct[] | null;
  submitted: boolean = false;
  statuses!: any[];

  StudentDetails!: StudentDetails;
  StudentDetailsData: StudentDetails[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private studentService: StudentService,
    private router : Router,
  ) {}

  ngOnInit() {
    this.statuses = [
      { label: 'ACTIVE', value: 'ACTIVE' },
      { label: 'INACTIVE', value: 'INACTIVE' },
    ];

    this.studentService.getStudent().subscribe({
      next: (data) => {
        this.StudentDetailsData = data.data as StudentDetails[];
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message,
          life: 3000,
        });
      },
    })
  }

  editStudentDetail(studentDetailsproduct: StudentDetailsProduct) {
    this.studentDetailsproduct = { ...studentDetailsproduct };
    this.productDialog = true;
  }

  deleteStudentDetails(studentDetailsproduct: StudentDetailsProduct) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + studentDetailsproduct.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studentDetailsProducts = this.studentDetailsProducts.filter(
          (val) => val.id !== studentDetailsproduct.id
        );
        this.studentDetailsproduct = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Student Detail Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveStudentDetails() {
    this.submitted = true;
    if (this.studentDetailsproduct.name?.trim()) {
      if (this.studentDetailsproduct.studentID) {
        this.studentDetailsProducts[
          this.findIndexById(this.studentDetailsproduct.studentID)
        ] = this.studentDetailsproduct;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Student Detail Updated',
          life: 3000,
        });
      } else {
        this.studentDetailsproduct.studentID = this.createId();
        this.studentDetailsProducts.push(this.studentDetailsproduct);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Student Detail Created',
          life: 3000,
        });
      }
      this.studentDetailsProducts = [...this.studentDetailsProducts];
      this.productDialog = false;
      this.studentDetailsproduct = {};
    }
  }

  redirectOnEdit(id: string) {
    this.router.navigate(['/student/studentRegistration/' + id]);
  }

  redirectAttendance(id: string, studentName: string, dob: Date, couresEnrolled: string[], classDate: Date[]): void {
    console.log('Redirecting with the following details:');
    console.log('ID:', id);
    console.log('Student Name:', studentName);
    console.log('Date of Birth:', dob);
    console.log('Courses Enrolled:', couresEnrolled);
    console.log('Class Dates:', classDate);
  
    this.router.navigate(['/student/attendanceManagement'], {
      queryParams: {
        id: id,
        studentName: studentName,
        dob: dob,
        couresEnrolled: couresEnrolled,
        classDate: classDate
      }
    });
  }
  

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.studentDetailsProducts.length; i++) {
      if (this.studentDetailsProducts[i].studentID === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'ACTIVE':
        return 'success';
      case 'INACTIVE':
        return 'warning';
      default:
        return '';
    }
  }

  get calculateTotalQty() {
    let total = 0;
    for (let qty of this.StudentDetailsData) {
      total += qty.id;
    }
    return total;
  }
}
