export interface ClinicalRecordByIDResponse {
  error: string;
  body: Body;
}

interface Body {
  dateTime: Date;
  patient: Patient;
  medicalCondition: string;
  updatedBy: User;
  id: string;
}

interface Patient {
    firstName: string;
    lastName: string;
    gender: string;
    mobileNumber: number;
    id: string;
}

interface User {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: number;
  id: string;
}
