import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import PlayGame from "./pages/PlayGame";
import RegistrationPage from "./pages/RegistrationPage";
import Game from "./pages/Game";
import HowtoPlay from "./pages/HowtoPlay";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Welcome />} />
          <Route path="/play" element={<PlayGame />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/help" element={<HowtoPlay />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
