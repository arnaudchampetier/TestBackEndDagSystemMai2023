import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { CurrentUserContextProvider } from "./contexts/UserContext";

import "./App.css";

function App() {
  return (
    <CurrentUserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserContextProvider>
  );
}

export default App;
