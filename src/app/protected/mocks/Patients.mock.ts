import { PatientDTO } from '../interfaces/patient/Patient.interface';

export const patientsMock: PatientDTO[] = [
  {
    firstName: 'Paciente Masculino',
    lastName: 'Test 1',
    dateOfBirth: new Date('2000-01-31T00:00:00.000Z'),
    gender: 'Masculino',
    mobileNumber: 77141761,
    createdBy: '609d9f8470c9882968722a68',
    clinicalHistoryId: '60a99562bfc2d52f80c5db2d',
    lastModifiedBy: '609d9f8470c9882968722a68',
    id: '60a99562bfc2d52f80c5db2c',
  },
  {
    firstName: 'Paciente Femenino',
    lastName: 'Test 2',
    dateOfBirth: new Date('2000-01-31T00:00:00.000Z'),
    gender: 'Femenino',
    mobileNumber: 77141762,
    createdBy: '609d9f8470c9882968722a68',
    clinicalHistoryId: '60a99576bfc2d52f80c5db2f',
    id: '60a99576bfc2d52f80c5db2e',
  },
  {
    firstName: 'Juan',
    lastName: 'Perez',
    dateOfBirth: new Date('1981-03-14T04:00:00.000Z'),
    gender: 'Masculino',
    mobileNumber: 76151043,
    createdBy: '609d9f8470c9882968722a68',
    lastModifiedBy: '609d9f8470c9882968722a68',
    clinicalHistoryId: '60dbc557e44a0c17f44af423',
    id: '60dbc557e44a0c17f44af422',
  },
  {
    firstName: 'Alvaro Manuel',
    lastName: 'Pereira del Castillo Córdova',
    dateOfBirth: new Date('1992-07-24T04:00:00.000Z'),
    gender: 'Masculino',
    mobileNumber: 77886612,
    createdBy: '609d9f8470c9882968722a68',
    lastModifiedBy: '609d9f8470c9882968722a68',
    clinicalHistoryId: '60e65a654c509634c4c0931e',
    id: '60e65a654c509634c4c0931d',
  },
];
