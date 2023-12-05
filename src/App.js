import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Project from './pages/Project/Project';

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
    </Routes>

    <Routes>
      <Route exact path='/login' element={<Login/>}/>
    </Routes>

    <Routes>
      <Route exact path='/sign-up' element={<SignUp/>}/>
    </Routes>

    <Routes>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
    </Routes>

    <Routes>
      <Route exact path='/project' element={<Project/>}/>
    </Routes>

   </Router>
  );
}

export default App;
