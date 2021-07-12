import { NbMenuItem } from '@nebular/theme';
import {
  dashboardRoutes,
  devicesRoutes,
  doctorsRoutes,
  patientsRoutes,
} from 'app/protected/routes/protected.routes';

export const doctorMenuItems: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: dashboardRoutes.main,
    home: true,
  },
  {
    title: 'USUARIOS',
    group: true,
  },
  {
    title: 'Médicos',
    icon: 'person-add-outline',
    children: [
      {
        title: 'Ver médicos activos',
        link: doctorsRoutes.viewAll,
      },
    ],
  },
  {
    title: 'REGISTROS CLÍNICOS',
    group: true,
  },
  {
    title: 'Pacientes',
    icon: 'person-outline',
    children: [
      {
        title: 'Registrar nuevo paciente',
        link: patientsRoutes.registration,
      },
      {
        title: 'Editar o eliminar pacientes',
        link: patientsRoutes.viewAll,
      },
      {
        title: 'Ver o agregar registros',
        link: patientsRoutes.addRecords,
      },
    ],
  },
  {
    title: 'IOT',
    group: true,
  },
  {
    title: 'Dispositivos',
    icon: 'radio-outline',
    children: [
      {
        title: 'Registrar nuevo dispositivo',
        link: devicesRoutes.registration,
      },
      {
        title: 'Inspeccionar dispositivos',
        link: devicesRoutes.inspect,
      },
    ],
  },
];
