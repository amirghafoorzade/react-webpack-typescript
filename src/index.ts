import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "@/components/app";
import "@/assets/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  React.createElement(App),
);
