import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Homepage from "../routeComponents/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="vh-100">
        <Route exact path="/" component={Homepage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
