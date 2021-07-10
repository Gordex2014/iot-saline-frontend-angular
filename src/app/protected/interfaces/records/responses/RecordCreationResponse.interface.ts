export interface RecordCreationResponse {
  error: string;
  body: Body;
}

interface Body {
  dateTime: Date;
  patient: string;
  medicalCondition: string;
  updatedBy: string;
  id: string;
}
