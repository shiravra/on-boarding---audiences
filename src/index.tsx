import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Audiences } from "./screens/Audiences";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Audiences />
  </StrictMode>,
);
