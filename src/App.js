import "./styles.scss";
import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Itemspage from "./ItemsPage";
import history from "./history";
import Edit from "./Edit";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/itemspage" component={Itemspage} />
        <Route exact path="/edit" component={Edit} />
      </Switch>
    </Router>
  );
}
