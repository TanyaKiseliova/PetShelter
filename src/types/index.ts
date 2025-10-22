
export interface User {
  id: number;
  email: string;
  password: string; 
  role: 'worker' | 'visitor';
  name: string;
  createdAt: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Inventory {
  id: number;
  title: string;
  description: string;
  customIdFormat: string;
  animalCount: number;
}