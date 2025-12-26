// React core
import { createElement } from "react";
import { createRoot } from "react-dom/client";
// AppShell
import AppShell from "@/app/ui/AppShell";

// ZaUI stylesheet
import "zmp-ui/zaui.min.css";
// Tailwind stylesheet
import "@/css/tailwind.scss";
// Your stylesheet
import "@/css/app.scss";
import "@/css/fonts.css";

// Mount the app
const root = createRoot(document.getElementById("app")!);
root.render(createElement(AppShell));
