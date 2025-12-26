import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Home from "@/app/modules/home/HomePage";
import AppointmentDetail from "@/app/modules/booking/AppointmentDetail";
import NotFound from "@/app/ui/NotFound";
import { DUMMY_APPOINTMENTS } from "@/constants";

export function HomeRoute() {
  const navigate = useNavigate();
  return <Home onNavigate={(to, options) => navigate(to, options)} />;
}

export function AppointmentDetailRoute() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const appointment = (location.state as any) ?? DUMMY_APPOINTMENTS.find((x) => String(x.id) === String(id));
  if (!appointment) return <NotFound />;
  return <AppointmentDetail appointment={appointment} />;
}
