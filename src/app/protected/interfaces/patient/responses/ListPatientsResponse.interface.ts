import { Gender } from 'app/protected/interfaces/patient/Patient.interface';

export interface ListPatientsResponse {
  error: string;
  body: Body[];
}

interface Body {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: Gender;
  mobileNumber: number;
  createdBy: string;
  clinicalHistoryId: string;
  id: string;
  imageUrl?: string;
}
