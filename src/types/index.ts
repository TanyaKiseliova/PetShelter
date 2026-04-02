export interface User {
  id: string;
  email: string;
  password: string; 
  role: 'worker' | 'visitor';
  name: string;
  createdAt: string;
}

export interface Pet {
  id: string;
  name: string;
  species: 'cat' | 'dog' | 'other' ; 
  breed: string;
  age: number; 
  gender: 'male' | 'female';
  photo: ''; 
  color: string;
  vaccinated: boolean;
  neutered: boolean;
  character: string; 
  features: string; 
  status: 'available' | 'reserved' | 'adopted'; 
  history: string; 
  arrivalDate: string; 
  createdAt: string;
}
