import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-registration',
  templateUrl: './trainer-registration.component.html',
  styleUrl: './trainer-registration.component.scss'
})
export class TrainerRegistrationComponent {
  conductedCourse = [
    { label: 'Bolly Hop', value: 'Bolly Hop' },
    { label: 'Hip Hop', value: 'Hip Hop' },
    { label: 'Indian Fusion', value: 'Indian Fusion' },
    { label: 'Bharatnatyam', value: 'Bharatnatyam' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Zumba', value: 'Zumba' },
    { label: 'Arts', value: 'Arts' },
  ];
  genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ];
  loading: boolean = false;
  iecForm !: FormGroup;
  isIECFound: boolean = false;
  maxDate: Date = new Date();
  formSubmitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.iecForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      whatsappNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      importerEmailId: [null, [Validators.required, Validators.email]],
      selectedConductedCourse: [null, Validators.required],
      courseConducted: [null, [Validators.required, Validators.min(0)]],
      birthDate: [null, [Validators.required]],
      selectedGender: ['', Validators.required],
      ResidentialAddress: [''],
      checked: [false],
    })
  }




  load() {
    this.loading = true;
    // const iecFormData: IecMaster = {
    //   iecNumber: this.iecForm.value.iceNumber,
    //   importerName: this.iecForm.value.importerName,
    //   gstNumber: this.iecForm.value.gstNumber,
    //   panNumber: this.iecForm.value.panNumber,
    //   email: this.iecForm.value.importerEmailId,
    //   phone: this.iecForm.value.phoneNumber,
    //   headOfficeAddress: this.iecForm.value.HOAddress,
    //   active: true,
    //   iecmasters: this.iecForm.value.branches
    // }
    // //this.iecForm.value, iecFormData);

    // this.iecService.newIecData(iecFormData).subscribe({
    //   next: (response) => {
    //     //response);
    //     this.loading = false;
    //     this.resetForm();
    //   },
    //   error: (error) => {
    //     //error);
    //     this.loading = false;
    //   }
    // })

  }

  salaryPage() {
    this.router.navigate(['/trainer/salaryCalculation']);
  }
  resetForm() {
    this.iecForm.reset();
    //'Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.iecForm.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return this.iecForm.controls[controlName].hasError(errorName) && this.iecForm.controls[controlName].dirty;
  }

  searchIEC() {
    this.isIECFound = true;
  }
}
