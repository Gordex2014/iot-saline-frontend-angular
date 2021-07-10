export interface PatientClinicalHistoryResponse {
  error: string;
  body: Body;
}

interface Body {
  records: Record[];
  patientId: PatientID;
  id: string;
}

export interface Record {
  dateTime: Date;
  medicalCondition: string;
  updatedBy: UserID;
  id: string;
}

interface UserID {
  firstName: string;
  lastName: string;
  mobileNumber: number;
  id: string;
}

interface PatientID {
  firstName: string;
  lastName: string;
  mobileNumber: number;
  id: string;
}
