export const dashboardRoutes = {
  main: '/home/dashboard',
};

export const adminsRoutes = {
  main: '/home/admins',
  registration: '/home/admins/register',
  viewAll: '/home/admins/view-all-admins',
};

export const doctorsRoutes = {
  main: '/home/doctors',
  registration: '/home/doctors/register',
  viewAll: '/home/doctors/view-all-doctors',
};

export const patientsRoutes = {
  main: '/home/patients',
  registration: '/home/patients/register',
  viewAll: '/home/patients/view-all-patients',
  addRecords: '/home/patients/add-patients-records',
  editPatientBase: '/home/patients/edit',
  addSinglePatientRecordBase: '/home/patients/add-patient-record',
  editSinglePatientRecordBase: '/home/patients/edit-patient-record',
  viewSinglePatientRecordBase: '/home/patients/view-patient-record',
  viewPatientHistoryBase: '/home/patients/patient-history',
};

export const roomsRoutes = {
  main: '/home/rooms',
  registration: '/home/rooms/register',
  inspect: '/home/rooms/view-all-rooms',
};

export const bedsRoutes = {
  main: '/home/beds',
  registration: '/home/beds/register',
  inspect: '/home/beds/view-all-beds',
};

export const devicesRoutes = {
  main: '/home/devices',
  registration: '/home/devices/register',
  inspect: '/home/devices/view-all-devices',
};
