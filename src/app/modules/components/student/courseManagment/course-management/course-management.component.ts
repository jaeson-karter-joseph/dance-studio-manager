import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../student-registration/services/student.service';
import { Router } from '@angular/router';
import { StudentCompleteDetails } from '../../../../../models/student.model';
import { CourseManagement, StudentCourse } from '../../../student-registration/models/request.model';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrl: './course-management.component.scss'
})
export class CourseManagementComponent {
  @Input() id!: string;
  loading: boolean = false;
  courseDetails!: FormGroup;
  danceForms: string[] = ['Ballet', 'Jazz', 'Hip Hop', 'Contemporary', 'Tap', 'Salsa', 'Swing', 'Tango', 'Belly', 'Break'];
  danceInstructors : string[] = ['Jaeson', 'Joseph', 'Rafi', 'Aakash'];
  minDate : Date = new Date();
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {

    this.courseDetails = this.formBuilder.group({
      coursesName: new FormControl(this.studentService.student.couresEnrolled, [Validators.required]),
      sessionTimes: new FormControl(this.studentService.student.classDate,[Validators.required]),
      instructorTrainer: new FormControl(this.studentService.student.trainer, [Validators.required]),
      attendanceStatus: new FormControl(this.studentService.student.classDate,[Validators.required]),
      totalFees: [this.studentService.student.fees, Validators.required],

    });

    if (this.id) {
      this.studentService.getStudentId(this.id).subscribe({
        next: (res) => {
          this.loading = false;
          console.log(res);
          this.courseDetails.patchValue(res);
        },
        error: (err) => {
          this.loading = false;
          console.log(err);
        },
      });
    }
  }

  attendance() {
    this.router.navigate(['/student/attendanceManagement']);
  }

  load() {
    this.loading = true;


    console.log({
        coursesName: this.f['coursesEnrolled'].value,
        sessionTimes: this.f['sessionTimes'].value,
        instructorTrainer: this.f['instructorTrainer'].value,
      });

    const student : Partial<StudentCompleteDetails> = {
      couresEnrolled: this.f['coursesEnrolled'].value,
      classDate: this.f['sessionTimes'].value,
      trainer: this.f['instructorTrainer'].value,
    }

    this.studentService.saveStudentDetails(student);

    this.isFormSubmitted=true;
    this.loading = false;

  }

  resetForm() {
    this.courseDetails.reset();
    console.log('Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.courseDetails.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return (
      this.courseDetails.controls[controlName].hasError(errorName) &&
      this.courseDetails.controls[controlName].dirty
    );
  };

  onBack(){
    this.router.navigate(['/student/feesManagement']);
  }

}
