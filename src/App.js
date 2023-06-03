// React imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserSignUp from "./pages/signUp";
import UserLogIn from "./pages/logIn";
import Index from "./pages/Index";
import Setting from "./pages/setting";

// React modules styles
import "react-toastify/dist/ReactToastify.css";

// Page style
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import AdminScreen from "./pages/dashboard/adminScreen";
import Etudiantscreen from "./pages/dashboard/Etudiantscreen";
import TimetableScreen from "./pages/dashboard/TimetableScreen";
import SalleScreen from "./pages/dashboard/SalleScreen"
import ClasseScreen from './pages/dashboard/ClasseScreen'
import UeScreen from './pages/dashboard/UeScreen'
import EnseignantScreen from './pages/dashboard/EnseignantScreen.jsx'
import LevelScreen from './pages/dashboard/LevelScreen.jsx'
import SectorScreen from './pages/dashboard/SectorScreen.jsx'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<UserSignUp />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/student" element={<Etudiantscreen />} />
        <Route path="/timetable" element={<TimetableScreen />} />
        <Route path="/log-in" element={<UserLogIn />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/salles" element={<SalleScreen />} />
        <Route path="/classes" element={<ClasseScreen />} />
        <Route path="/ues" element={<UeScreen />} />
        <Route path="/teachers" element={<EnseignantScreen />} />
        <Route path="/levels" element={<LevelScreen />} />
        <Route path="/sectors" element={<SectorScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
