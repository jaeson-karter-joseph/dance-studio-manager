export interface StudentDetailsProduct {
  id?: number;
  name?: string;
  studentID?: string;
  email?: string;
  number?: number;
  gender?: string;
  emId?: string;
  birthDate?: Date;
  joinDate?: Date;
  inventoryStatus?: String;
  image?: string;
  quantity?: number;
}

export interface TrainerDetailsProduct {
  id?: number;
  firstName?: string;
  lastName?: string;
  mobile?: number;
  courseEnroll?: string;
  collectdPerTrainer?: number;
  studioShare?: number;
  trainerShare?: number;
  email?: string;
  trainerID?: string;
  gender?: string;
  status?: boolean;
}

export interface EventDetailsProduct {
  id?: number;
  workshopName?: string;
  workshopCategory?: string;
  eventCategory?: string;
  studentEventRegister?: number;
  hallBookingID?: string;
  studentAmount?: number;
  image?: string;
  quantity?: number;
}
