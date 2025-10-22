
export interface User {
  id: number;
  email: string;
  password: string; 
  role: 'worker' | 'visitor';
  name: string;
  createdAt: string;
}

export interface Pet {
  id: string;
  name: string;
  species: 'cat' | 'dog' ; 
  breed: string;
  age: number; 
  gender: 'male' | 'female';
  photo: string; 
  color: string;
  vaccinated: boolean;
  neutered: boolean;
  attitudeToPeople: string;
  character: string; 
  features: string; 
  status: 'available' | 'reserved' | 'adopted'; 
  history: string; 
  arrivalDate: string; 
  additionalInfo: string; 
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