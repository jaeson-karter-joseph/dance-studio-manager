export interface Student {
  id?: string;
  mobile: number;
  whatsappNo: number;
  studentId: string;
  status: boolean;
  firstName?: string;
  lastName?: string;
  dob?: Date;
  gender?: string;
  phoneNumber?: number;
  whatsappNumber?: number;
  email?: string;
  address?: string;
  couresEnrolled?: string[];
  classDate?: Date[];
  trainer?: string[];
  fees?: number;
  vat?: number;
  paymentDate?: Date;
  paymentMode?: { name: string };
  addNotes?: string;
}

export interface Fees {
  date: string;
  studentName: string;
  courseName: string;
  paidFees: number;
  paymentMethod: string;
  remarks: string;
}


  export interface AttendanceManage {
    date: string;
    studentName : string;
    courseName : string;
    sessionTimes: string;
    status: boolean;
  }


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

