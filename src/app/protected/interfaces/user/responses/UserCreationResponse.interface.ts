export interface UserCreationResponse {
  error: string;
  body: Body;
}

interface Body {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: number;
  username: string;
  id: string;
  imageUrl?: string;
}
