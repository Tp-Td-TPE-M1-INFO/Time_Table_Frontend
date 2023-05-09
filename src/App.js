// React imports
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import UserSignUp from './pages/signUp';
import UserLogIn from './pages/logIn';
import Index from "./pages/Index";
import Setting from "./pages/setting";

// React modules styles
import "react-toastify/dist/ReactToastify.css";

// Page style
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import AdminScreen from "./pages/dashboard/adminScreen";
import Etudiantscreen from "./pages/dashboard/etudiantscreen";
import TimetableScreen from "./pages/dashboard/TimetableScreen";

    
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<UserSignUp />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/etudiant" element={<Etudiantscreen />} />
        <Route path="/timetable" element={<TimetableScreen />} />
        <Route path="/log-in" element={<UserLogIn />} />
        <Route path='/setting' element={<Setting/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
