import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Homepage from "../routeComponents/Homepage";
import NewRoom from "../routeComponents/room/NewRoom";
import EditRoom from "../routeComponents/room/EditRoom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="vh-100">
        <Route exact path="/" component={Homepage} />
        <Route path="/newRoom" component={NewRoom} />
        <Route path="/room/edit/:id" component={EditRoom} />
      </div>
    </BrowserRouter>
  );
}

export default App;
