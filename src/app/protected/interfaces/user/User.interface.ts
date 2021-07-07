export interface UserCreation {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: number;
  username: string;
  password?: string;
  id?: string;
  imageFile?: File;
}

export interface UserDTO {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: number;
  username: string;
  id: string;
  imageUrl?: string;
}
