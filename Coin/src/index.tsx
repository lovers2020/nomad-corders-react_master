import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./App";
import "./index.css";

import reset from "styled-reset";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  </>
);
