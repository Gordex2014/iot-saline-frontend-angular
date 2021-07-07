import { NbMenuItem } from '@nebular/theme';
import { adminsRoutes, dashboardRoutes } from 'app/protected/routes/protected.routes';

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
    ],
  },
];
