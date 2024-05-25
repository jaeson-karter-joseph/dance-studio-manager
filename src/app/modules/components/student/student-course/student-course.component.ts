import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../student-registration/services/student.service';
import { StudentCourse } from '../../student-registration/models/request.model';
import { Router } from '@angular/router';
import { StudentCompleteDetails } from '../../../../models/student.model';


@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrl: './student-course.component.scss'
})
export class StudentCourseComponent {
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
      coursesEnrolled: new FormControl(this.studentService.student.couresEnrolled, [Validators.required]),
      sessionTimes: new FormControl(this.studentService.student.classDate?.map(e => new Date(e)),[Validators.required]),
      instructorTrainer: new FormControl(this.studentService.student.trainer, [Validators.required]),
    });


    if (this.id) {
      this.studentService.getStudentId(this.id).subscribe({
        next: (res) => {
          this.loading = false;
          //res);
          this.courseDetails.patchValue(res);
        },
        error: (err) => {
          this.loading = false;
          //err);
        },
      });
    }
  }

  Payment() {
    this.router.navigate(['/student/studentPayment']);
  }

  load() {
    this.loading = true;

    const studentCourseData: StudentCourse = {
      coursesEnrolled: this.f['coursesEnrolled'].value,
      sessionTimes: this.f['sessionTimes'].value,
      instructorTrainer: this.f['instructorTrainer'].value,
    };

    //studentCourseData);

    const student : Partial<StudentCompleteDetails> = {
      couresEnrolled: this.f['coursesEnrolled'].value,
      classDate: this.f['sessionTimes'].value,
      trainer: this.f['instructorTrainer'].value,
    }

    this.studentService.saveStudentDetails(student);

    this.isFormSubmitted=true;
    this.loading = false;
    this.Payment()

  }

  resetForm() {
    this.courseDetails.reset();
    //'Form reset');
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
    this.router.navigate(['/student/studentRegistration/' + this.studentService.student.id]);
  }

}
