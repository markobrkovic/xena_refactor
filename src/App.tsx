import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import WelcomePage from "./pages/welcomePage/WelcomePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WelcomePage />
      </div>
    </Provider>
  );
}

export default App;
