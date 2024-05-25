import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TrainerDetailsProduct } from '../../../../../assets/data/DetailsProducts';
import { StudentService } from '../../student-registration/services/student.service';
import { Router } from '@angular/router';


export interface TrainerDetails {
  id : number;
  firstName : string;
  lastName : string;
  mobile : number;
  courseEnroll : string;
  collectdPerTrainer : number;
  studioShare : number;
  trainerShare : number;
  email : string;
  trainerID : string;
  gender : string;
  status : boolean;
}



@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TrainerDetailsComponent implements OnInit {
  productDialog: boolean = false;
  trainerDetailsProducts!: TrainerDetailsProduct[];
  trainerDetailsproduct!: TrainerDetailsProduct;
  trainerDetailsSelectedProducts!: TrainerDetailsProduct[] | null;
  submitted: boolean = false;
  statuses!: any[];

  TrainerDetails!: TrainerDetails;
  TrainerDetailsData: TrainerDetails[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private studentService: StudentService,
    private router : Router,
  ) {}

  ngOnInit() {
    this.statuses = [
      { label: 'ACTIVE', value: 'ACTIVE' },
      { label: 'INACTIVE', value: 'INACTIVE' },
    ];

    // this.trainerService.getTrainer().subscribe({
    //   next: (data) => {
    //     this.TrainerDetailsData = data.data as TrainerDetails[];
    //   },
    //   error: (err) => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Error',
    //       detail: err.message,
    //       life: 3000,
    //     });
    //   },
    // })
  }

  editTrainerDetail(trainerDetailsproduct: TrainerDetailsProduct) {
    this.trainerDetailsproduct = { ...trainerDetailsproduct };
    this.productDialog = true;
  }

  deleteTrainerDetails(trainerDetailsproduct: TrainerDetailsProduct) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + trainerDetailsproduct.firstName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.trainerDetailsProducts = this.trainerDetailsProducts.filter(
          (val) => val.id !== trainerDetailsproduct.id
        );
        this.trainerDetailsproduct = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Trainer Detail Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveTrainerDetails() {
    this.submitted = true;
    if (this.trainerDetailsproduct.firstName?.trim()) {
      if (this.trainerDetailsproduct.trainerID) {
        this.trainerDetailsProducts[
          this.findIndexById(this.trainerDetailsproduct.trainerID)
        ] = this.trainerDetailsproduct;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Trainer Detail Updated',
          life: 3000,
        });
      } else {
        this.trainerDetailsproduct.trainerID = this.createId();
        this.trainerDetailsProducts.push(this.trainerDetailsproduct);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Trainer Detail Created',
          life: 3000,
        });
      }
      this.trainerDetailsProducts = [...this.trainerDetailsProducts];
      this.productDialog = false;
      this.trainerDetailsproduct = {};
    }
  }

  redirectOnEdit(id: string) {
    this.router.navigate(['/trainer/trainerRegistration/' + id]);
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.trainerDetailsProducts.length; i++) {
      if (this.trainerDetailsProducts[i].trainerID === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'ACTIVE':
        return 'success';
      case 'INACTIVE':
        return 'warning';
      default:
        return '';
    }
  }

  get calculateTotalQty() {
    let total = 0;
    for (let qty of this.TrainerDetailsData) {
      total += qty.id;
    }
    return total;
  }
}
