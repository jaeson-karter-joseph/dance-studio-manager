export interface Student {
    firstName: string;
    lastName: string;
    mobile: number;
    whatsappNo: number;
    email: string;
    socialMedia: string;
    studentId: string;
    emiritesOrPassportNo: string;
    healthIssue: string;
    dob: string;
    gender: string;
    image: string;
    address: string;
    status: boolean;
  }

  export interface Payment {
    studentId: string;
    paymentMode: string;
    paymentDate: string;
    category: string;
    doj: string;
    validityDate: string;
    classCompleted: number;
    classRemaining: number;
    vat: number;
  }
