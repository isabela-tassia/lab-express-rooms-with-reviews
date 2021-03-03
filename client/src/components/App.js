import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Homepage from "../routeComponents/Homepage";
import NewRoom from "../routeComponents/room/NewRoom";
import EditRoom from "../routeComponents/room/EditRoom";
import RoomDetail from "../routeComponents/room/RoomDetail";
import DeleteRoom from "../routeComponents/room/DeleteRoom";
import NewReview from "../routeComponents/review/NewReview";
import EditReview from "../routeComponents/review/EditReview";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="vh-100">
        <Switch>
          <Route exact path="/newRoom" component={NewRoom} />
          <Route exact path="/" component={Homepage} />
          <Route path="/room/edit/:id" component={EditRoom} />
          <Route path="/room/delete/:id" component={DeleteRoom} />
          <Route path="/room/:id/review" component={NewReview} />
          <Route path="/room/:id" component={RoomDetail} />
          <Route path="/review/:id" component={EditReview} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
