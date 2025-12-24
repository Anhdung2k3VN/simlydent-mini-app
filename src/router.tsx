import React from "react";
import Layout from "@/components/layout";
import { createHashRouter } from "react-router-dom";

// pages của bạn
import Splash from "@/pages/splash";
import Login from "@/pages/auth/login";
import OTP from "@/pages/auth/otp";
import Home from "@/pages/home";
import AppointmentList from "@/pages/appointment";
import AppointmentDetail from "@/pages/appointment/detail";
import MedicalRecords from "@/pages/medical";

import NotFound from "@/pages/404"; // nếu chưa có, tạm tạo 1 page

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        // ---- Auth flow ----
        {
          path: "/",
          element: <SplashRoute />,
        },
        {
          path: "/login",
          element: <LoginRoute />,
          handle: {
            back: true,
            title: "Đăng nhập",
          },
        },
        {
          path: "/otp",
          element: <OTPRoute />,
          handle: {
            back: true,
            title: "Xác thực OTP",
          },
        },

        // ---- Main ----
        {
          path: "/home",
          element: <HomeRoute />,
          handle: {
            title: "SimlyDent",
          },
        },
        {
          path: "/appointments",
          element: <AppointmentListRoute />,
          handle: {
            back: true,
            title: "Lịch hẹn",
          },
        },
        {
          path: "/appointments/:id",
          element: <AppointmentDetailRoute />,
          handle: {
            back: true,
            title: "Chi tiết lịch hẹn",
          },
        },
        {
          path: "/medical",
          element: <MedicalRecordsRoute />,
          handle: {
            back: true,
            title: "Hồ sơ khám",
          },
        },

        // ---- 404 ----
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

// --------- wrappers để truyền props bắt buộc cho template ---------
// NOTE: dùng navigate của react-router-dom
import { useNavigate, useParams } from "react-router-dom";

function SplashRoute() {
  const navigate = useNavigate();
  return <Splash onFinish={() => navigate("/login", { replace: true })} />;
}

function LoginRoute() {
  const navigate = useNavigate();

  return (
    <Login
      onNext={() => {
        navigate("/otp");
      }}
    />
  );
}

function OTPRoute() {
  const navigate = useNavigate();

  return (
    <OTP
      onBack={() => navigate("/login", { replace: true })}
      onVerify={() => {
        navigate("/home", { replace: true });
      }}
    />
  );
}

function HomeRoute() {
  const navigate = useNavigate();
  return (
    <Home
      onNavigate={(to: any) => {
        const key =
          typeof to === "string"
            ? to
            : to?.screen || to?.route || to?.to || to?.name;

        switch (key) {
          case "appointments":
          case "appointment":
          case "/appointments":
            navigate("/appointments");
            break;

          case "medical":
          case "medicalRecords":
          case "/medical":
            navigate("/medical");
            break;

          default:
            navigate("/home");
            break;
        }
      }}
    />
  );
}

function AppointmentListRoute() {
  const navigate = useNavigate();
  return (
    <AppointmentList
      onBack={() => navigate("/home")}
      onSelect={(item: any) => {
        const id = typeof item === "string" ? item : item?.id;
        navigate(`/appointments/${id ?? ""}`);
      }}
    />
  );
}

function AppointmentDetailRoute() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <AppointmentList
      onBack={() => navigate("/home")}
      onSelect={(appointment: any) => {
        // nếu onSelect trả về object appointment
        navigate(`/appointments/${appointment.id}`, { state: appointment });
      }}
    />
  );
}

function MedicalRecordsRoute() {
  const navigate = useNavigate();
  return <MedicalRecords onBack={() => navigate("/home")} />;
}

// --------- base path giống zaui-doctor ---------
export function getBasePath() {
  const urlParams = new URLSearchParams(window.location.search);
  const appEnv = urlParams.get("env");

  if (
    import.meta.env.PROD ||
    appEnv === "TESTING_LOCAL" ||
    appEnv === "TESTING" ||
    appEnv === "DEVELOPMENT"
  ) {
    return `/zapps/${(window as any).APP_ID}`;
  }

  return (window as any).BASE_PATH || "";
}

export default router;
