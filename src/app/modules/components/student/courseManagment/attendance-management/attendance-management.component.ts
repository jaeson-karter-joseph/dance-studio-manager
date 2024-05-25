import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceManage, Fees } from '../../../student-registration/models/request.model';
import { StudentService } from '../../../student-registration/services/student.service';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrl: './attendance-management.component.scss'
})
export class AttendanceManagementComponent {
  @Input() id!: string;
  loading: boolean = false;
  attendanceManage!: FormGroup;
  isIECFound: boolean = false;
  maxDate: Date = new Date();
  formSubmitted = false;
  minDate : Date = new Date();
  danceForms: string[] = ['Ballet', 'Jazz', 'Hip Hop', 'Contemporary', 'Tap', 'Salsa', 'Swing', 'Tango', 'Belly', 'Break'];



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.attendanceManage = this.formBuilder.group({

      date: [null, Validators.required],
      studentName: [null, Validators.required],
      courseName: [null, Validators.required],
      sessionTimes: [null, Validators.required],
      status: [false],


    });

    if (!!this.id) {
      this.studentService.getStudentId(this.id).subscribe({
        next: (res) => {
          this.loading = false;
          console.log(res);

          this.attendanceManage.patchValue;
        },
        error: (err) => {
          this.loading = false;
          console.log(err);
        },
      });
    }

    this.route.queryParamMap.subscribe(res => {
      console.log(res);
      console.log(res.get('id'));
      console.log(res.get('studentName'));
      console.log(res.get('date'));
      console.log(res.get('courseName'));
      console.log(res.get('sessionTimes'));


      this.attendanceManage.patchValue({
        studentName : res.get('studentName'),
        date : new Date(res.get('dob') as string),
      })
    })
  }

  onBack(){
    this.router.navigate(['/student/courseManagement']);
  }
  load() {
    this.loading = true;

    const feesCollectionData: AttendanceManage = {

      date: this.formatDate(this.f['date'].value),
      studentName: this.f['studentName'].value,
      courseName: this.f['courseName'].value,
      sessionTimes: this.f['sessionTimes'].value,
      status: this.f['checked'].value,





    };

    console.log(feesCollectionData);

    // this.studentService.saveStudent(feesCollectionData).subscribe({
    //   next: (res) => {
    //     this.loading = false;
    //     console.log(res);
    //     this.formSubmitted = true
    //   },
    // });
  }

  resetForm() {
    this.attendanceManage.reset();
    console.log('Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.attendanceManage.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return (
      this.attendanceManage.controls[controlName].hasError(errorName) &&
      this.attendanceManage.controls[controlName].dirty
    );
  };

  searchIEC() {
    this.isIECFound = true;
  }

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
      '0' + date.getDate()
    ).slice(-2)}`;
  }

  generateUniqueAndReadableStudentID(name: string) {
    // Convert the name to lowercase and remove spaces for consistency
    const formattedName = name.toLowerCase().replace(/ /g, '');

    // Create a unique part by combining the first letter of the name,
    // the current year, and a random number
    const uniquePart = formattedName[0] + new Date().getFullYear() + Math.floor(Math.random() * 1000);

    // Ensure the unique part is always 5 characters long by padding with zeros if necessary
    const paddedUniquePart = uniquePart.padEnd(5, '0');

    // Return the formatted name followed by the unique part
    return `${formattedName}-${paddedUniquePart}`;
  }

}
