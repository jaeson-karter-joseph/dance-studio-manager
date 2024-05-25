export class StudentCompleteDetails {
    id?: string;
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

    constructor(details: Partial<StudentCompleteDetails> = {}) {
        Object.assign(this, details);
    }
}