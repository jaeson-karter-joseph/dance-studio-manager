import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fees } from '../../../student-registration/models/request.model';
import { StudentService } from '../../../student-registration/services/student.service';

@Component({
  selector: 'app-fees-collection',
  templateUrl: './fees-collection.component.html',
  styleUrl: './fees-collection.component.scss'
})


export class FeesCollectionComponent {
  @Input() id!: string;
  loading: boolean = false;
  fessDemog!: FormGroup;
  isIECFound: boolean = false;
  maxDate: Date = new Date();
  formSubmitted = false;
  paymentMethods = [
    { name: 'Cash' },
    { name: 'Credit Card' },
    { name: 'Debit Card' },
    { name: 'Net Banking' },
    { name: 'Bank Transfer' },
  ];
  danceForms: string[] = ['Ballet', 'Jazz', 'Hip Hop', 'Contemporary', 'Tap', 'Salsa', 'Swing', 'Tango', 'Belly', 'Break'];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fessDemog = this.formBuilder.group({

      date: [null, Validators.required],
      studentName: [null, Validators.required],
      courseName: [null, Validators.required],
      paidFees: [null, Validators.required],
      paymentMethod: [null, Validators.required],
      remarks: [null]

    });

    // if (!!this.id) {
    //   this.studentService.getStudentId(this.id).subscribe({
    //     next: (res) => {
    //       this.loading = false;
    //       //res);

    //       this.fessDemog.patchValue;
    //     },
    //     error: (err) => {
    //       this.loading = false;
    //       //err);
    //     },
    //   });
    // }

    this.route.queryParamMap.subscribe(res => {
      console.log(res);
    })
    this.route.queryParamMap.subscribe(res => {
      console.log(res);
      console.log(res.get('id'));
      console.log(res.get('studentName'));
      console.log(res.get('paidFees'));
      console.log(res.get('paymentMethod'));
      console.log(res.get('courseName'));
      console.log(res.get('date'));


      this.fessDemog.patchValue({
        studentName : res.get('studentName'),
        paidFees : res.get('paidFees'),
        paymentMethod : res.get('paymentMethod'),
        courseName : res.get('courseName'),
        date : res.get('date'),
      })
    })

  }

  Course() {
    this.router.navigate(['/student/courseManagement']);
  }

  load() {
    this.loading = true;

    const feesCollectionData: Fees = {

      date: this.formatDate(this.f['date'].value),
      studentName: this.f['studentName'].value,
      courseName: this.f['courseName'].value,
      paidFees: this.f['paidFees'].value,
      paymentMethod: this.f['paymentMethod'].value.name,
      remarks: this.f['remarks'].value,




    };

    //feesCollectionData);

    // this.studentService.saveStudent(feesCollectionData).subscribe({
    //   next: (res) => {
    //     this.loading = false;
    //     //res);
    //     this.formSubmitted = true
    //   },
    // });
  }

  resetForm() {
    this.fessDemog.reset();
    //'Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.fessDemog.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return (
      this.fessDemog.controls[controlName].hasError(errorName) &&
      this.fessDemog.controls[controlName].dirty
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
