import { NbMenuItem } from '@nebular/theme';
import {
  adminsRoutes,
  dashboardRoutes,
  doctorsRoutes,
  patientsRoutes,
} from 'app/protected/routes/protected.routes';

export const adminMenuItems: NbMenuItem[] = [
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
    title: 'Administradores',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'Registrar nuevo administrador',
        link: adminsRoutes.registration,
      },
      {
        title: 'Ver administradores activos',
        link: adminsRoutes.viewAll,
      },
    ],
  },
  {
    title: 'Médicos',
    icon: 'person-add-outline',
    children: [
      {
        title: 'Registrar nuevo médico',
        link: doctorsRoutes.registration,
      },
      {
        title: 'Ver médicos activos',
        link: doctorsRoutes.viewAll,
      },
    ],
  },
  {
    title: 'TRATAMIENTOS',
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
        title: 'Agregar tratamientos',
        link: patientsRoutes.addRecords,
      },
      {
        title: 'Listar tratamientos',
        link: patientsRoutes.listRecords,
      },
    ],
  },
];
