import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';


interface Payment {
  name: string;
  code: string;
}
interface Course {
  name: string;
  code: string;
}
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-trainer-registration',
  templateUrl: './trainer-registration.component.html',
  styleUrl: './trainer-registration.component.scss',
  providers: [MessageService]
})
export class TrainerRegistrationComponent {
  values: string[] | undefined;
  loading: boolean = false;
  date: Date | undefined;
  payment: Payment[] | undefined;
  course: Course[] | undefined;
  iecForm !: FormGroup;
  isIECFound: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService) { }


  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }

  ngOnInit() {

    this.payment = [
      { name: 'CASH', code: 'CS' },
      { name: 'Bank Transfer', code: 'BT' },
    ];

    this.course = [
      { name: 'Bollyhop', code: 'bh' },
      { name: 'Hip Hop', code: 'hh' },
      { name: 'Indian fusion', code: 'if' },
      { name: 'Bharatnatyam', code: 'br' },
      { name: 'Yoga', code: 'yo' },
      { name: 'Zumba', code: 'zu' },
      { name: 'Arts', code: 'ar' },
    ]


    this.iecForm = this.formBuilder.group({
      iceNumber: new FormControl<string | null>("IEC1234", [Validators.required]),
      firstName: new FormControl<string | null>(""),
      lastName: new FormControl<string | null>(""),
      phoneNumber: new FormControl<string | null>(""),
      whatsappNumber: new FormControl<string | null>(""),
      emailId: new FormControl<string | null>(""),
      course: new FormControl<string | null>(""),
      classes: new FormControl<string | null>(""),
      date: new FormControl<string | null>(""),
      emidpassno: new FormControl<string | null>(""),
      ResidentialAddress: new FormControl<string | null>(""),
      selectedCity: new FormControl<Payment | null>(null),
      checked: new FormControl<boolean>(false)
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

  resetForm(): void {
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
