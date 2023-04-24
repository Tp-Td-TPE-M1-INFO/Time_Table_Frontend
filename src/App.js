// React imports
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import UserSignUp from './pages/signUp';
import UserLogIn from './pages/logIn';

// React modules styles
import 'react-toastify/dist/ReactToastify.css';

// Page style
import './App.css';

function App() {   
    
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index element={<UserLogIn/>} />
                <Route path='/sign-up' element={<UserSignUp/>}/>
                <Route path='/log-in' element={<UserLogIn/>}/>                   
            </Routes>
        </BrowserRouter>
    </div>
    
    )
    
    
    
}

export default App;