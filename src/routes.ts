import React from "react";
// import Hello from "./Hello";

const routes = [
  {
    path: "/",
    component: React.lazy(() => import("./Hello")),
    // component: Hello,
  },
];

export default routes;
