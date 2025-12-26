import React from "react";
// Pages
import Splash from "@/app/ui/SplashPage";
import Login from "@/app/modules/auth/LoginPage";
import OTP from "@/app/modules/auth/OTPPage";
import Home from "@/app/modules/home/HomePage";
import Profile from "@/app/modules/home/widgets/ProfilePage";
import BookingPage from "@/app/modules/booking/BookingPage";
import AppointmentList from "@/app/modules/booking/AppointmentList";
import AppointmentDetail from "@/app/modules/booking/AppointmentDetail";
// Medical Records
import MedicalRecordsPage from "@/app/modules/medical-records/MedicalRecordsPage";
import MedicalRecordDetailPage from "@/app/modules/medical-records/MedicalRecordDetailPage";
import LoyaltyPage from "@/app/modules/loyalty/LoyaltyPage";
import PaymentsPage from "@/app/modules/payments/PaymentsPage";
import NotFound from "@/app/ui/NotFound";

// Wrappers
import { HomeRoute, AppointmentDetailRoute } from "./wrappers";

export interface AppRoute {
  path: string;
  element: React.ReactNode;
  module?: string; // Access control key
  index?: boolean;
}

export const BASE_ROUTE_REGISTRY: AppRoute[] = [
  { index: true, path: "", element: <Splash />, module: undefined },
  { path: "login", element: <Login />, module: undefined },
  { path: "otp", element: <OTP />, module: undefined },
  
  // Authenticated
  { path: "home", element: <HomeRoute />, module: "home" },
  { path: "profile", element: <Profile />, module: undefined }, // Profile usually always avail
  
  // Modules
  { path: "booking", element: <BookingPage />, module: "booking" },
  { path: "appointments", element: <AppointmentList />, module: "booking" },
  { path: "appointments/:id", element: <AppointmentDetailRoute />, module: "booking" },
  
  { path: "loyalty", element: <LoyaltyPage />, module: "loyalty" },
  { path: "payments", element: <PaymentsPage />, module: undefined },
  
  // Medical Records
  { path: "records", element: <MedicalRecordsPage />, module: "crm" }, 
  { path: "records/:id", element: <MedicalRecordDetailPage />, module: "crm" },

  { path: "*", element: <NotFound />, module: undefined },
];
