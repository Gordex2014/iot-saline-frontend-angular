export type Gender = 'Masculino' | 'Femenino';

export interface PatientDTO {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: Gender;
  mobileNumber: number;
  createdBy: string;
  clinicalHistoryId: string;
  id: string;
  imageUrl?: string;
  lastModifiedBy?: string;
}

export interface PatientCreation {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: Gender;
  mobileNumber: number;
  id?: string;
  imageURI?: string;
}
