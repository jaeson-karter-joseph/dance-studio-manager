import { Component } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TrainerDetailsProduct } from "../../../../../assets/data/DetailsProducts";


interface TrainerDetails {
  id: number;
  trainerId: string;
  trainerName: string;
  phoneNumber: number;
  doj: Date;
  gender: string;
  inventoryStatus: string;
  eid: string;
}

@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrl: './trainer-details.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class TrainerDetailsComponent {
  productDialog: boolean = false;
  trainerDetailsProducts!: TrainerDetailsProduct[];
  trainerDetailsProduct!: TrainerDetailsProduct;
  trainerDetailsSelectedProducts!: TrainerDetailsProduct[] | null;
  submitted: boolean = false;
  statuses!: any[];

  TrainerDetails !: TrainerDetails
  TrainerDetailsData: TrainerDetails[] = [
    {
      "id": 1,
      "trainerId": "4MY9CM2DG69",
      "trainerName": "Traise",
      "phoneNumber": 6287498428,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384P7Q12EVAKS3E3Y9PSY"
    }, {
      "id": 2,
      "trainerId": "1C77YR8RT64",
      "trainerName": "Wraggs",
      "phoneNumber": 7665875860,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384P8TJG7WV1982HA6Q8E"
    }, {
      "id": 3,
      "trainerId": "6AK4EJ2HN01",
      "trainerName": "Longbone",
      "phoneNumber": 8524114787,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384P9D8J3JGTZ8827WS9P"
    }, {
      "id": 4,
      "trainerId": "4YY2Q20QX55",
      "trainerName": "Verden",
      "phoneNumber": 3369367102,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384PAF0GE01E4979SBBH3"
    }, {
      "id": 5,
      "trainerId": "2VD3C14NE94",
      "trainerName": "Hulles",
      "phoneNumber": 1815207152,
     "doj":   new Date("2023-11-12"),
      "gender": "Non-binary",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384PBZFBGZ18D7PB3V6W4"
    }, {
      "id": 6,
      "trainerId": "1PU0GK6FH68",
      "trainerName": "Ricold",
      "phoneNumber": 9117002194,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384PCXEC9EV9DBEPWYQH2"
    }, {
      "id": 7,
      "trainerId": "9VX2NR6YW27",
      "trainerName": "Persehouse",
      "phoneNumber": 3094243118,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384PDTCX9YZSAA9YZN1P0"
    }, {
      "id": 8,
      "trainerId": "3X38G65WN83",
      "trainerName": "Blainey",
      "phoneNumber": 1588880174,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384PDNXJEEBBQR5F72PYF"
    }, {
      "id": 9,
      "trainerId": "8FN0CY8JU09",
      "trainerName": "Chaloner",
      "phoneNumber": 3139004460,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384RW68R8N43AKSGY7XDS"
    }, {
      "id": 10,
      "trainerId": "6JX7TP1YW77",
      "trainerName": "Bayldon",
      "phoneNumber": 1029431165,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384RXPSBYCZNC5VWR8D1V"
    }, {
      "id": 11,
      "trainerId": "9G90FK1AY51",
      "trainerName": "Tebbe",
      "phoneNumber": 3861296618,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384RZ7KPDAANWX5K818Y5"
    }, {
      "id": 12,
      "trainerId": "6JV0TT8UW96",
      "trainerName": "Eagling",
      "phoneNumber": 6785261448,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384S0YZ4RYV3DK913K3QV"
    }, {
      "id": 13,
      "trainerId": "6T37G46QT61",
      "trainerName": "Mobberley",
      "phoneNumber": 8485903119,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384S2DVBKNTCMSPA4RKR7"
    }, {
      "id": 14,
      "trainerId": "1AU3E03TK89",
      "trainerName": "Charlet",
      "phoneNumber": 2572378581,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384S2G5AQ8J9C8STZ723Z"
    }, {
      "id": 15,
      "trainerId": "4MN9YQ9HG58",
      "trainerName": "Depke",
      "phoneNumber": 4014427882,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384S3T4TKPSA8FBWGW7D3"
    }, {
      "id": 16,
      "trainerId": "6RQ8EM1QW41",
      "trainerName": "Dumingo",
      "phoneNumber": 5851430424,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384S5F7TDJ8BD59HXW1TY"
    }, {
      "id": 17,
      "trainerId": "6E05EJ4NT91",
      "trainerName": "Dicks",
      "phoneNumber": 3132351354,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384S6MRAJZX8ZD27EZ6C0"
    }, {
      "id": 18,
      "trainerId": "4QU9HN6TX10",
      "trainerName": "Guye",
      "phoneNumber": 7545341840,
     "doj":   new Date("2023-11-12"),
      "gender": "Bigender",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384S8F9XWWTB0H8WJEGWS"
    }, {
      "id": 19,
      "trainerId": "9N16WR5PF51",
      "trainerName": "Harbinson",
      "phoneNumber": 2031244336,
     "doj":   new Date("2023-11-12"),
      "gender": "Genderqueer",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384SAP27M8RXFVM98YZ1Q"
    }, {
      "id": 20,
      "trainerId": "4JA8WT4PX42",
      "trainerName": "Kordovani",
      "phoneNumber": 1043220576,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "ACTIVE",
      "eid": "01HTN384SBFZGT16E09BAM5JYR"
    }, {
      "id": 21,
      "trainerId": "5DP8EC6CN17",
      "trainerName": "Carloni",
      "phoneNumber": 6424948455,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SDKEWD3Y5A7XBWTAZ6"
    }, {
      "id": 22,
      "trainerId": "7D34RJ6VP30",
      "trainerName": "Keller",
      "phoneNumber": 7481074948,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SE303B2JTKBTZYMGHW"
    }, {
      "id": 23,
      "trainerId": "8CD5EM1WN93",
      "trainerName": "Thame",
      "phoneNumber": 2762469842,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SF27P5JJX72T8KN30G"
    }, {
      "id": 24,
      "trainerId": "9UV0GY5RH23",
      "trainerName": "Blackater",
      "phoneNumber": 1519893744,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SGK5K0V2662Y1J95TB"
    }, {
      "id": 25,
      "trainerId": "8AF7JY2HJ40",
      "trainerName": "Canadas",
      "phoneNumber": 7843596231,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SHZWXSREMGVR2CCD5T"
    }, {
      "id": 26,
      "trainerId": "4HF9FJ9GC41",
      "trainerName": "Funnell",
      "phoneNumber": 3619492664,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SJZE03583PSHEH01DV"
    }, {
      "id": 27,
      "trainerId": "8T64TT4XF71",
      "trainerName": "Pavlovic",
      "phoneNumber": 4117794671,
     "doj":   new Date("2023-11-12"),
      "gender": "Female",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SKKXRFS1XW4HYWYVAE"
    }, {
      "id": 28,
      "trainerId": "7K78FW6QJ93",
      "trainerName": "Mehaffey",
      "phoneNumber": 2967256995,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SMBS1TMBFMFS02NDNW"
    }, {
      "id": 29,
      "trainerId": "8H58UF1MQ41",
      "trainerName": "Gusney",
      "phoneNumber": 2156034080,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SP0EKV0B30BMPC6XTW"
    }, {
      "id": 30,
      "trainerId": "3FT5V84HK31",
      "trainerName": "Audiss",
      "phoneNumber": 5235564127,
     "doj":   new Date("2023-11-12"),
      "gender": "Male",
       "inventoryStatus": "INACTIVE",
      "eid": "01HTN384SRBQSCF1QNRTDKCBVK"
    }
  ]


  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.statuses = [
      { label: 'ACTIVE', value: 'ACTIVE' },
      { label: 'INACTIVE', value: 'INACTIVE' },
    ];
  }

  editProduct(trainerDetailsProduct: TrainerDetails) {
    console.log({ ...trainerDetailsProduct });
    this.TrainerDetails = { ...trainerDetailsProduct };
    this.productDialog = true;
  }


  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.trainerDetailsProduct.trainerName?.trim()) {
      if (this.trainerDetailsProduct.trainerId) {
        this.trainerDetailsProducts[this.findIndexById(this.trainerDetailsProduct.trainerId)] = this.trainerDetailsProduct;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        this.trainerDetailsProduct.trainerId = this.createId();
        this.trainerDetailsProduct.image = 'product-placeholder.svg';
        this.trainerDetailsProducts.push(this.trainerDetailsProduct);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      this.trainerDetailsProducts = [...this.trainerDetailsProducts];
      this.productDialog = false;
      this.trainerDetailsProduct = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.trainerDetailsProducts.length; i++) {
      if (this.trainerDetailsProducts[i].trainerId === id) {
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
    return total
  }
}
