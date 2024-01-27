import { createRoot } from "react-dom/client";

import "normalize.css";
import { App } from "./app";

const app = document.getElementById("app");
///comment comment
if (app) {
  const root = createRoot(app);

  root.render(<App />);
}
