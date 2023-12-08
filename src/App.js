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
import AddQuestion from './pages/AddQuestion/AddQuestion';
import useFirebaseAuth from './hook/useFirebaseAuth';
import Pricing from './pages/Pricing/Pricing';

function App() {
  const {type} = useFirebaseAuth();
  return (
   <Router>
    {type === 'home'?(
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/add-question' element={<AddQuestion/>}/>
        <Route path='/verify-your-email' element={<VerificationEmail/>}/>
    </Routes>
    ):(
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/project/:projectId' element={<Project/>}/>
      <Route path='/quiz/:projectId/:sectionId' element={<Quiz/>}/>
      <Route path='/summary/:projectId/:sectionId' element={<Summary/>}/>
      <Route path='/verify-your-email' element={<VerificationEmail/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
    </Routes>
    )}
   

   </Router>
  );
}

export default App;
