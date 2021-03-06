import { NbMenuItem } from '@nebular/theme';
import {
  adminsRoutes,
  bedsRoutes,
  dashboardRoutes,
  devicesRoutes,
  doctorsRoutes,
  patientsRoutes,
  roomsRoutes,
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
    title: 'INFRAESTRUCTURA',
    group: true,
  },
  {
    title: 'Habitaciones',
    icon: 'home-outline',
    children: [
      {
        title: 'Registrar nueva habitación',
        link: roomsRoutes.registration,
      },
      {
        title: 'Inspeccionar habitaciones',
        link: roomsRoutes.inspect,
      },
    ],
  },
  {
    title: 'Camas',
    icon: 'thermometer-plus-outline',
    children: [
      {
        title: 'Registrar nueva cama',
        link: bedsRoutes.registration,
      },
      {
        title: 'Inspeccionar camas',
        link: bedsRoutes.inspect,
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
