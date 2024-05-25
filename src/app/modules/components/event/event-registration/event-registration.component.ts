import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrl: './event-registration.component.scss'
})
export class EventRegistrationComponent {
  category = [
    { label: 'New Year', value: 'New Year' },
    { label: 'Pongal', value: 'Pongal' },
    { label: 'Valentine Day', value: 'Valentine Day' },
    { label: 'Holi', value: 'Holi' },
    { label: 'Ramzan', value: 'Ramzan' },
    { label: 'Holi', value: 'Holi' },
    { label: 'Christmas', value: 'Christmas' },
    { label: 'Diwali', value: 'Diwali' },
    { label: 'Onam', value: 'Onam' },
  ];
  workshopCategory = [
    { name: 'FlagShip' },
    { name: 'Gold' },
    { name: 'Silver' },
  ];
  profitLossOptions = [
    { label: 'Profit', value: 'profit' },
    { label: 'Loss', value: 'loss' }
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
      workshopName: ['', Validators.required],
      registerstudent: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      selectedCategory: [null, Validators.required],
      workshopCategory: [null, Validators.required],
      amountperstudent: [null, [Validators.required, Validators.min(0)]],
      expense: ['', [Validators.required, Validators.min(0)]],
      selectedProfitLoss: ['', Validators.required],
      halleventbooking: [null, Validators.required],
      remarks: ['', Validators.required],
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

  resetForm() {
    this.iecForm.reset();
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

