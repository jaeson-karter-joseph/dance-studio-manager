export interface Student {
    firstName: string;
    lastName: string;
    mobile: number;
    whatsappNo: number;
    email: string;
    studentId: string;
    dob: string;
    gender: string;
    address: string;
    status: boolean;
  }

  export interface Fees {
    date: string;
    studentName : string;
    courseName : string;
    paidFees : number;
    paymentMethod: string;
    remarks: string;
  }

  // export interface Payment {
  //   studentId: string;
  //   paymentMode: string;
  //   paymentDate: string;
  //   category: string;
  //   doj: string;
  //   validityDate: string;
  //   classCompleted: number;
  //   classRemaining: number;
  //   vat: number;
  // }

  export interface StudentCourse {
    coursesEnrolled: string;
    sessionTimes: string;
    instructorTrainer: string;
  }

  export interface CourseManagement {
    coursesName: string;
    sessionTimes: string;
    instructorTrainer: string;
    totalFees: number;
    attendanceStatus: string;
  }

  export interface StudentPayment {
    totalFees: number;
    vat: number;
    selectedPayment: string;
    paymentDate: string;
  }

  export interface StudentAdditionalInfo {
    anySpecialRequest: string;
  }

