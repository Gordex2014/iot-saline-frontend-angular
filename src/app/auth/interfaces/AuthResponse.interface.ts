import { ActiveUserRole } from './ActiveUser.interface';

export interface AuthResponse {
  error: string;
  body: Body;
}

interface Body {
  id: string;
  role: ActiveUserRole;
  firstName: string;
  lastName: string;
  token: string;
  imageUrl?: string;
}
