import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Coin from "./Coin";
import Coins from "./Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Coins />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
