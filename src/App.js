import './App.css';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Project from './pages/Project/Project';
import Quiz from './pages/Quiz/Quiz';
import Summary from './pages/Summary/Summary';
import VerificationEmail from './pages/VerificationEmail/VerificationEmail';

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
    </Routes>

    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>

    <Routes>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>

    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>

    <Routes>
      <Route path='/project/:projectId' element={<Project/>}/>
    </Routes>

    <Routes>
      <Route path='/quiz' element={<Quiz/>}/>
    </Routes>

    <Routes>
      <Route path='/summary' element={<Summary/>}/>
    </Routes>

    <Routes>
      <Route path='/verify-your-email' element={<VerificationEmail/>}/>
    </Routes>

   </Router>
  );
}

export default App;
