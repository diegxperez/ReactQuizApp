import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QuizApp } from "./QuizApp.tsx";
import { Toaster } from "sonner";
import "./index.css";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster
      position="bottom-right"
      toastOptions={{ style: { background: "#1c1917", color: "white" } }}
    />
    <QuizApp />
  </StrictMode>,
);
