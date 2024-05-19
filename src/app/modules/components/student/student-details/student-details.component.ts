import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { StudentDetailsProduct } from '../../../../../assets/data/DetailsProducts';

interface StudentDetails {
  id: number;
  name: string;
  studentID: string;
  email: string;
  gender: string;
  emId: string;
  birthDate: Date;
  joinDate: Date;
  inventoryStatus: string;
}

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class StudentDetailsComponent implements OnInit {
  productDialog: boolean = false;
  studentDetailsProducts!: StudentDetailsProduct[];
  studentDetailsproduct!: StudentDetailsProduct;
  studentDetailsSelectedProducts!: StudentDetailsProduct[] | null;
  submitted: boolean = false;
  statuses!: any[];

  StudentDetails!: StudentDetails;
  StudentDetailsData: StudentDetails[] = [
    {
      id: 1,
      name: 'Randolf',
      studentID: '9ET8G02KQ02',
      email: 'rtwitchings0@japanpost.jp',
      gender: 'Male',
      emId: '377-55-9760',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 2,
      name: 'Elora',
      studentID: '9VV3KH6AC70',
      email: 'edufour1@psu.edu',
      gender: 'Female',
      emId: '127-80-3763',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 3,
      name: 'Laney',
      studentID: '5A56V16CP06',
      email: 'lrivlin2@squarespace.com',
      gender: 'Male',
      emId: '469-97-7304',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 4,
      name: 'Bidget',
      studentID: '3WH3E07NW72',
      email: 'bbartosek3@mlb.com',
      gender: 'Female',
      emId: '866-39-0933',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 5,
      name: 'Tallie',
      studentID: '3UR3G91PE29',
      email: 'tpirouet4@ted.com',
      gender: 'Male',
      emId: '243-89-9764',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 6,
      name: 'Sayre',
      studentID: '3UR3G91PE29',
      email: 'skennicott5@jimdo.com',
      gender: 'Female',
      emId: '213-41-3771',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 7,
      name: 'Payton',
      studentID: '3UR3G91PE29',
      email: 'ppindred6@plala.or.jp',
      gender: 'Male',
      emId: '322-18-6522',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 8,
      name: 'Cordelia',
      studentID: '3UR3G91PE29',
      email: 'chaucke7@jiathis.com',
      gender: 'Female',
      emId: '105-88-0016',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 9,
      name: 'Nada',
      studentID: '3UR3G91PE29',
      email: 'naggus8@google.es',
      gender: 'Female',
      emId: '158-71-2463',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 10,
      name: 'Hermy',
      studentID: '3UR3G91PE29',
      email: 'hyewman9@timesonline.co.uk',
      gender: 'Male',
      emId: '894-90-5422',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 11,
      name: 'Lilian',
      studentID: '3UR3G91PE29',
      email: 'lowersa@w3.org',
      gender: 'Female',
      emId: '530-96-7604',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 12,
      name: 'Xymenes',
      studentID: '3UR3G91PE29',
      email: 'xpettingerb@usa.gov',
      gender: 'Male',
      emId: '479-94-0866',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 13,
      name: 'Glenn',
      studentID: '3UR3G91PE29',
      email: 'gmccollumc@telegraph.co.uk',
      gender: 'Female',
      emId: '345-43-4203',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 14,
      name: 'Dino',
      studentID: '3UR3G91PE29',
      email: 'ddensund@ft.com',
      gender: 'Male',
      emId: '475-04-3704',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 15,
      name: 'Dulci',
      studentID: '3UR3G91PE29',
      email: 'dricardoue@printfriendly.com',
      gender: 'Female',
      emId: '532-42-8400',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 16,
      name: 'Leigh',
      studentID: '3UR3G91PE29',
      email: 'lberridgef@ustream.tv',
      gender: 'Male',
      emId: '171-12-6600',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 17,
      name: 'Dolores',
      studentID: '3UR3G91PE29',
      email: 'dmcreynoldg@sina.com.cn',
      gender: 'Female',
      emId: '456-33-2268',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 18,
      name: 'Kiah',
      studentID: '3UR3G91PE29',
      email: 'kmcfaulh@answers.com',
      gender: 'Female',
      emId: '242-18-5882',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 19,
      name: 'Valentia',
      studentID: '3UR3G91PE29',
      email: 'velstobi@discuz.net',
      gender: 'Female',
      emId: '211-18-9769',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 20,
      name: 'Jayne',
      studentID: '3UR3G91PE29',
      email: 'jyokleyj@twitpic.com',
      gender: 'Female',
      emId: '831-72-5952',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 21,
      name: 'Brandtr',
      studentID: '3UR3G91PE29',
      email: 'bborrisk@csmonitor.com',
      gender: 'Male',
      emId: '633-71-1521',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 22,
      name: 'Lindie',
      studentID: '3UR3G91PE29',
      email: 'lkingzethl@time.com',
      gender: 'Female',
      emId: '529-93-2443',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 23,
      name: 'Fay',
      studentID: '3UR3G91PE29',
      email: 'foldfordm@godaddy.com',
      gender: 'Female',
      emId: '113-55-6253',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 24,
      name: 'Evaleen',
      studentID: '3UR3G91PE29',
      email: 'esibyllan@wp.com',
      gender: 'Female',
      emId: '898-88-8578',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 25,
      name: 'Riordan',
      studentID: '3UR3G91PE29',
      email: 'rdongallo@fc2.com',
      gender: 'Male',
      emId: '889-15-5740',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 26,
      name: 'Theresa',
      studentID: '3UR3G91PE29',
      email: 'tmundayp@furl.net',
      gender: 'Female',
      emId: '442-37-6046',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 27,
      name: 'Sukey',
      studentID: '3UR3G91PE29',
      email: 'smckagq@uiuc.edu',
      gender: 'Female',
      emId: '587-12-2306',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
    {
      id: 28,
      name: 'Vasily',
      studentID: '3UR3G91PE29',
      email: 'vstreaderr@cbc.ca',
      gender: 'Male',
      emId: '279-30-2121',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 29,
      name: 'Beitris',
      studentID: '3UR3G91PE29',
      email: 'bfullegars@census.gov',
      gender: 'Female',
      emId: '678-57-9449',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'INACTIVE',
    },
    {
      id: 30,
      name: 'Weber',
      studentID: '3UR3G91PE29',
      email: 'wputlandt@jimdo.com',
      gender: 'Male',
      emId: '543-47-6741',
      birthDate: new Date('2023-11-12'),
      joinDate: new Date('2023-11-12'),
      inventoryStatus: 'ACTIVE',
    },
  ];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.statuses = [
      { label: 'ACTIVE', value: 'ACTIVE' },
      { label: 'INACTIVE', value: 'INACTIVE' },
    ];
  }

  editStudentDetail(studentDetailsproduct: StudentDetailsProduct) {
    this.studentDetailsproduct = { ...studentDetailsproduct };
    this.productDialog = true;
  }

  deleteStudentDetails(studentDetailsproduct: StudentDetailsProduct) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + studentDetailsproduct.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studentDetailsProducts = this.studentDetailsProducts.filter(
          (val) => val.id !== studentDetailsproduct.id
        );
        this.studentDetailsproduct = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Student Detail Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveStudentDetails() {
    this.submitted = true;
    if (this.studentDetailsproduct.name?.trim()) {
      if (this.studentDetailsproduct.studentID) {
        this.studentDetailsProducts[
          this.findIndexById(this.studentDetailsproduct.studentID)
        ] = this.studentDetailsproduct;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Student Detail Updated',
          life: 3000,
        });
      } else {
        this.studentDetailsproduct.studentID = this.createId();
        this.studentDetailsProducts.push(this.studentDetailsproduct);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Student Detail Created',
          life: 3000,
        });
      }
      this.studentDetailsProducts = [...this.studentDetailsProducts];
      this.productDialog = false;
      this.studentDetailsproduct = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.studentDetailsProducts.length; i++) {
      if (this.studentDetailsProducts[i].studentID === id) {
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
    for (let qty of this.StudentDetailsData) {
      total += qty.id;
    }
    return total;
  }
}
