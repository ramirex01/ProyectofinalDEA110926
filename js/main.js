import React from "react";
import { createRoot } from "react-dom/client";
import PageApp from "../src/PageApp.jsx";
import "../css/styles.css";

const root = document.getElementById("root");
createRoot(root).render(
  React.createElement(PageApp, { page: root.dataset.page || "inicio" }),
);
