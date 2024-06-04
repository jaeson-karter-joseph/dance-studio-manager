import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainer } from '../../student-registration/models/request.model';
import { StudentService } from '../../student-registration/services/student.service';

@Component({
  selector: 'app-salary-calculation',
  templateUrl: './salary-calculation.component.html',
  styleUrls: ['./salary-calculation.component.scss'],
})
export class SalaryCalculationComponent implements OnInit {
  loading: boolean = false;
  iecForm!: FormGroup;
  isIECFound: boolean = false;
  TrainerNameDropDown : string[] = ['Jaeson', 'Joseph', 'Rafi', 'Aakash', 'Sinan', 'Rishi'];
  TrainerCourseForm: string[] = ['Ballet', 'Jazz', 'Hip Hop', 'Contemporary', 'Tap', 'Salsa', 'Swing', 'Tango', 'Belly', 'Break'];



  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private trainerService: StudentService
  ) {}

  ngOnInit() {
    this.iecForm = this.formBuilder.group({
      trainerName : new FormControl<string[] | null>(null, [Validators.required]),
      trainerCoursesEnrolled: new FormControl<string[] | null>(null, [Validators.required]),
      collectedPerTrainer: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      studioShare: [{ value: '', disabled: true }],
      trainerShare: [{ value: '', disabled: true }],
    });

    this.iecForm.get('collectedPerTrainer')?.valueChanges.subscribe(value => {
      this.calculateShares();
    });
  }

  onBack(){
    this.router.navigate(['/trainer/trainerRegistration']);
  }

  calculateShares() {
    const collectedPerTrainer = this.iecForm.get('collectedPerTrainer')?.value;
    if (collectedPerTrainer && !isNaN(collectedPerTrainer)) {
      const studioShare = collectedPerTrainer * 0.60;
      const trainerShare = collectedPerTrainer * 0.40;

      this.iecForm.patchValue({
        studioShare: studioShare.toFixed(2),
        trainerShare: trainerShare.toFixed(2)
      });
    } else {
      this.iecForm.patchValue({
        studioShare: '',
        trainerShare: ''
      });
    }
  }

  load() {
    this.loading = true;
    // Uncomment and modify this section with actual form submission logic
    /*
    const iecFormData: IecMaster = {
      iecNumber: this.iecForm.value.iceNumber,
      importerName: this.iecForm.value.importerName,
      gstNumber: this.iecForm.value.gstNumber,
      panNumber: this.iecForm.value.panNumber,
      email: this.iecForm.value.importerEmailId,
      phone: this.iecForm.value.phoneNumber,
      headOfficeAddress: this.iecForm.value.HOAddress,
      active: true,
      iecmasters: this.iecForm.value.branches
    }
    //this.iecForm.value, iecFormData);

    this.iecService.newIecData(iecFormData).subscribe({
      next: (response) => {
        //response);
        this.loading = false;
        this.resetForm();
      },
      error: (error) => {
        //error);
        this.loading = false;
      }
    })
    */
  }



  registerTrainer(){
    this.loading = true;

    const trainer : Trainer = {
      firstName : this.trainerService.trainer.firstName as string,
      lastName : this.trainerService.trainer.lastName as string,
      email : this.trainerService.trainer.email as string,
      trainerId : this.trainerService.trainer.id as string,
      gender : this.trainerService.trainer.gender as string,
      address : this.trainerService.trainer.address as string,
      mobile : this.trainerService.trainer.phoneNumber as number,
      whatsappNo : this.trainerService.trainer.whatsappNumber as number,
      id : this.trainerService.trainer.id as string,
      dob : this.trainerService.trainer.dob as Date,
      couresEnrolled : this.trainerService.trainer.couresEnrolled as string[],
      conductedCourse : this.trainerService.trainer.conductedCourse as number,
      trainerSalary : this.trainerService.trainer.trainerSalary as number,
      status : true,
    }

    this.trainerService.saveTrainer(trainer).subscribe({
      next : res =>{
        console.log(res);
        this.loading = false;
      },
      error : (err) => {
        console.error(err);
      }
    })
  }

  resetForm() {
    this.iecForm.reset();
    //'Form reset');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.iecForm.controls;
  }

  checkError(controlName: string, errorName: string) {
    return this.iecForm.controls[controlName].hasError(errorName) && this.iecForm.controls[controlName].dirty;
  }

  searchIEC() {
    this.isIECFound = true;
  }
}
