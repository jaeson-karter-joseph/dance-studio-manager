import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss',
})
export class StudentRegistrationComponent {
  category = [
    { label: 'Adult', value: 'Adult' },
    { label: 'Kids', value: 'Kids' },
  ];
  payment = [
    { name: 'Cash' },
    { name: 'Credit Card' },
    { name: 'Debit Card' },
    { name: 'Net Banking' },
    { name: 'Bank Transfer' },
  ];
  genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ];
  loading: boolean = false;
  iecForm !: FormGroup;
  isIECFound: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.iecForm = this.formBuilder.group({
      iceNumber: new FormControl<string | null>("IEC1234", [Validators.required]),
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      whatsappNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      importerEmailId: [null, [Validators.required, Validators.email]],
      instafbID: [null, Validators.required],
      studentid: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      emidpassno: [null, Validators.required],
      notehealthissue: [null, Validators.required],
      birthDate: [null, Validators.required],
      selectedCategory: [null, Validators.required],
      joiningDate: [null, Validators.required],
      selectedPayment: [null, Validators.required],
      paymentDate: [null, Validators.required],
      validTill: [null, Validators.required],
      classesCompleted: [null, [Validators.required, Validators.min(0)]],
      classesRemaining: [null, [Validators.required, Validators.min(0)]],
      selectedGender: ['', Validators.required],
      file: [null, Validators.required],
      ResidentialAddress: [''],
      checked: [false],
    })
  }


  onUpload(event: any) {
    const file = event.files[0];
    this.iecForm.get('file')?.setValue(file);
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
    // console.log(this.iecForm.value, iecFormData);

    // this.iecService.newIecData(iecFormData).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.loading = false;
    //     this.resetForm();
    //   },
    //   error: (error) => {
    //     console.log(error);
    //     this.loading = false;
    //   }
    // })

  }

  resetForm() {
    this.iecForm.reset();
    console.log('Form reset');
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
