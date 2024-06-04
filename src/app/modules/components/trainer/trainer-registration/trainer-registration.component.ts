import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../student-registration/services/student.service';
import { Trainer } from '../../student-registration/models/request.model';
import { TrainerCompleteDetails } from '../../../../models/trainer.model';
import { TrainerDetails } from '../trainer-details/trainer-details.component';

@Component({
  selector: 'app-trainer-registration',
  templateUrl: './trainer-registration.component.html',
  styleUrl: './trainer-registration.component.scss'
})
export class TrainerRegistrationComponent implements OnInit {
  id!: string | null;
  genderOptions = [
    'Male',
    'Female',
    'Other'
  ];
  couresEnrolled: string[] = ['Bolly Hop', 'Indian Fusion', 'Hip Hop', 'Bharatnatyam', 'Yoga', 'Zumba', 'Arts'];

  loading: boolean = false;
  trainerDemog!: FormGroup;
  isIECFound: boolean = false;
  maxDate: Date = new Date();
  formSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private trainerService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {



    this.route.queryParamMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      console.log(this.id);
      if (!!this.id) {
        this.trainerService.getTrainerId(this.id).subscribe({
          next: (res) => {
            this.loading = false;
            console.log(res);
            this.patchValuesEditedValued(res.data as TrainerDetails);
            this.formSubmitted = true
          },
          error: (err) => {
            this.loading = false;
          },
        });
      }
    });

    this.patchValues();
  }

  patchValuesEditedValued(res : TrainerDetails) {
    this.trainerDemog = this.formBuilder.group({
      firstName: res.firstName,
      lastName: res.lastName,
      phoneNumber: res.phoneNumber,
      whatsappNumber: res.whatsappNumber,
      importerEmailId: res.email,
      couresEnrolled: res.couresEnrolled,
      conductedCourse:res.conductedCourse,
      birthDate: res.dob,
      gender: res.gender,
    })
  }


  patchValues() {
    this.trainerDemog = this.formBuilder.group({
      firstName: [this.trainerService.trainer.firstName, Validators.required],
      lastName: [this.trainerService.trainer.lastName, Validators.required],
      phoneNumber: [this.trainerService.trainer.phoneNumber, [Validators.required, Validators.pattern(/^\d+$/)]],
      whatsappNumber: [this.trainerService.trainer.whatsappNumber, [Validators.required, Validators.pattern(/^\d+$/)]],
      importerEmailId: [this.trainerService.trainer.email, [Validators.required, Validators.email]],
      couresEnrolled: [this.trainerService.trainer.couresEnrolled, Validators.required],
      conductedCourse: [this.trainerService.trainer.conductedCourse, [Validators.required, Validators.min(0)]],
      birthDate: [this.trainerService.trainer.dob, [Validators.required]],
      selectedGender: [this.trainerService.trainer.gender, Validators.required],
      ResidentialAddress: [this.trainerService.trainer.address],
      checked: [this.trainerService.trainer.status],
      salary: [this.trainerService.trainer.trainerSalary],
      gender: [this.trainerService.trainer.gender]
    });
  }

  salaryPage() {
    this.router.navigate(['/trainer/salaryCalculation']);
  }

  load() {
    this.loading = true;

    const trainerData: Trainer = {
      firstName: this.f['firstName'].value,
      lastName: this.f['lastName'].value,
      mobile: parseInt(this.f['phoneNumber'].value),
      whatsappNo: parseInt(this.f['whatsappNumber'].value),
      email: this.f['importerEmailId'].value,
      trainerId: this.generateUniqueAndReadableTrainerID(this.f['firstName'].value),
      dob: new Date(this.formatDate(this.f['birthDate'].value)),
      gender: this.f['selectedGender'].value,
      address: this.f['ResidentialAddress'].value,
      status: this.f['checked'].value,
      id: this.generateUniqueAndReadableTrainerID(this.f['firstName'].value),
      couresEnrolled: this.f['couresEnrolled'].value,
      conductedCourse: this.f['conductedCourse'].value,
      trainerSalary: 0
    };

    //trainerData);

    const trainer: Partial<TrainerCompleteDetails> = {
      firstName: this.f['firstName'].value,
      lastName: this.f['lastName'].value,
      phoneNumber: parseInt(this.f['phoneNumber'].value),
      whatsappNumber: parseInt(this.f['whatsappNumber'].value),
      email: this.f['importerEmailId'].value,
      couresEnrolled: this.f['couresEnrolled'].value,
      conductedCourse: this.f['conductedCourse'].value,
      dob: new Date(this.formatDate(this.f['birthDate'].value)),
      address: this.f['ResidentialAddress'].value,
    }

    this.trainerService.saveTrainerDetails(trainer);

    this.loading = false;

    this.formSubmitted = true

    this.trainerService.saveTrainer(trainerData).subscribe({
      next: (res) => {
        this.loading = false;
        // this.router.navigate(['/trainer/salaryCalculation']);
      },
      error: (err) => {
        this.loading = false;
      },
    });
  }

  resetForm() {
    this.trainerDemog.reset();
    //'Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.trainerDemog.controls;
  }

  checkError = (controlName: string, errorName: string) => {
    return (
      this.trainerDemog.controls[controlName].hasError(errorName) &&
      this.trainerDemog.controls[controlName].dirty
    );
  };

  searchIEC() {
    this.isIECFound = true;
  }

  formatDate(date: Date): Date {
    return date
  }

  generateUniqueAndReadableTrainerID(name: string) {
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
