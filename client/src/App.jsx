import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './component/login';
import Authenticate from './component/authCheck';
import Profile from './component/profile';
import AuthWrapper from './component/authWrapper';
import SignUp from './component/sign';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Authenticate />} />
          <Route exact path='/login' element={<AuthWrapper><Login /></AuthWrapper>} />
          <Route exact path='/sign' element={<AuthWrapper><SignUp /></AuthWrapper>} />
          <Route exact path='/profile' element={<AuthWrapper><Profile /></AuthWrapper>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
