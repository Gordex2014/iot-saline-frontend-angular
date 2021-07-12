export interface ActiveUser {
  id: string;
  role: ActiveUserRole;
  firstName: string;
  lastName: string;
  imageUrl?: string;
}

export type ActiveUserRole = 'USER_DOCTOR_ROLE' | 'USER_ADMIN_ROLE';
