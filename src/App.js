import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Routing from "./config/Routing";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
