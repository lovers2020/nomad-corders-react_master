import React from "react";
import "./App.css";
import styled from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />,
  },
  {
    path: "/:coinId",
    element: <Coin />,
    children: [
      {
        path: "chart",
        element: <Chart />,
      },
      {
        path: "price",
        element: <Price />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
