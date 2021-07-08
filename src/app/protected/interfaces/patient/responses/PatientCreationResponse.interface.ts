export interface PatientCreationResponse {
  error: string;
  body: Body;
}

interface Body {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  mobileNumber: number;
  createdBy: string;
  lastModifiedBy: string;
  clinicalHistoryId: string;
  id: string;
}
