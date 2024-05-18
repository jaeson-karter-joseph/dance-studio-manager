import { Component } from '@angular/core';
import { Router } from 'express';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {
  // imageUrl: any; //rename imageFileBinary to imageUrl
  // imageInfo: QrInfoInterface = {
  //   eventName: '',
  //   base64: ''
  // };

  // loading: boolean = true;
  // events !: AllEventsResponse[];

  // visible: boolean = false;


  // constructor(private eventService: EventService, private router: Router, private confirmationService: ConfirmationService, private toastService: ToastService) { }

  // ngOnInit(): void {
  //   this.loading = true;
  //   from(this.eventService.getAllEvents()).subscribe({
  //     next: (events) => {
  //       this.events = events;
  //       console.log(events);
  //       this.loading = false;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //       this.loading = false;
  //     }
  //   });

  // }

  // convertToImage(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   const file = (target.files as FileList)[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageInfo.base64 = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'COMPLETED':
  //       return 'success';
  //     case 'CLOSED':
  //       return 'warning';
  //     case 'CANCELLED':
  //       return 'danger';
  //     default: return 'primary';
  //   }
  // }

  // getStatusSeverity(status: string) {
  //   switch (status) {
  //     case 'PENDING':
  //       return 'warning';
  //     case 'COMPLETED':
  //       return 'success';
  //     case 'CANCELLED':
  //       return 'danger'
  //     default: return 'primary';
  //   }
  // }

  // onEditClick(id: string) {
  //   this.router.navigate(['event/eventRegistration', id]);
  // }

  // deleteProduct(product: AllEventsResponse) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + product.eventName + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.events = this.events.filter((val) => val.id !== product.id);
  //       this.toastService.showSuccessToast('Event Deleted', 'Successfully');
  //     }
  //   });
  // }

  // onAddAttenadceClick(id: string) {
  //   console.log(id);
  //   this.router.navigate(['event/eventAttendance', id]);
  // }


  // showDialog(product: AllEventsResponse) {
  //   this.imageInfo.eventName = product.eventName;
  //   this.imageInfo.base64 = product.eventAttendanceQRCode;
  //   let imageBinary = this.imageInfo.base64; //image binary data response from api
  //   let imageBase64String = btoa(imageBinary);
  //   this.imageUrl = 'data:image/jpeg;base64,' + imageBase64String;
  //   this.visible = true;
  // }

}
