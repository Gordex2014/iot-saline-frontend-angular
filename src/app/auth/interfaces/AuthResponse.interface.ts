export interface AuthResponse {
  error: string;
  body: Body;
}

interface Body {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  token: string;
  imageUrl?: string;
}
