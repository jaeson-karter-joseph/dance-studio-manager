export class TrainerCompleteDetails {
    id?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: number;
    whatsappNumber?: number;
    gender?: string;
    email?: string;
    couresEnrolled?: string[];
    conductedCourse?: number;
    dob?: Date;
    address?: string;
    status?: boolean;
    trainerId?: string;
    trainerSalary?: number;

    constructor(details: Partial<TrainerCompleteDetails> = {}) {
        Object.assign(this, details);
    }
}