export interface CreateUser {
  username: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
}
export interface UpdateUser {
  firstName?: string;
  lastName?: string;
  bio?: string;
}
export interface UserResponse {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  createdAt: string;
}
export interface UserAPIResponse<T> {
  success: boolean;
  message: string;
  data: T;
}