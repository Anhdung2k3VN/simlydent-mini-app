
export enum Screen {
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  OTP = 'OTP',
  HOME = 'HOME',
  APPOINTMENTS = 'APPOINTMENTS',
  DETAIL = 'DETAIL',
  RECORDS = 'RECORDS',
  AI_CONSULT = 'AI_CONSULT'
}

export interface Appointment {
  id: string;
  doctor: string;
  specialty: string;
  location: string;
  time: string;
  date: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  service: string;
  image?: string;
  price?: string;
}

export interface MedicalRecord {
  id: string;
  title: string;
  doctor: string;
  date: string;
  summary: string;
  type: 'dentistry' | 'orthopedics' | 'surgery' | 'history';
}
