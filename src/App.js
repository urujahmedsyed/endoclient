import Homep1 from './components/Homep1';
import Research from './components/Research';
import Login from './components/Login';
import Adash from './components/Adash';
import Analysis from './components/Analysis';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Predict from './components/Predict';
import Data from './components/Data';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
    return(
    <Router>
      <Routes>
      <Route path='/' element={<Homep1/>}/>
      <Route path='/research' element={<Research/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/adash' element={<Adash/>}/>
      <Route path='/analysis' element={<Analysis/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/predict' element={<Predict/>}/>
      <Route path='/data' element={<Data/>}/>

      {/* <Route path='*' element={<ErrorPage/>}/> */}
    </Routes> 
    </Router>
    );
};

export default App;

