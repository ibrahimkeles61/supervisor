import "./App.css";
import { useSelector } from "react-redux";
import { selectEmail } from "./redux/userSlice";
import Login from "./components/Login";
import EventsPage from "./components/EventsPage";
import Header from "./components/Header";

function App() {
  const email = useSelector(selectEmail);

  if (email) {
    return (
      <div className="App">
        <Login />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <EventsPage />
      </div>
    );
  }
}

export default App;
