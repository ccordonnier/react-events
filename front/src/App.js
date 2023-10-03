import { Provider } from "react-redux";
import { store } from "./redux";
import Signup from "./components/users/Signup";
import FormEvent from "./components/events/FormEvent";
import EventList from "./components/events/EventList";
import EventDetails from "./components/events/EventDetails";
import Menu from "./components/navigation/Menu";
import Login from "./components/users/Login";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Menu></Menu>
      <Login/>
    </div>
    </Provider>
  );
}

export default App;
