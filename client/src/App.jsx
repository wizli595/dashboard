import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './component/login';
// import Authenticate from './component/authCheck';
import Profile from './component/profile';
// import AuthWrapper from './component/authWrapper';
import SignUp from './component/sign';
import ProtectedRoute from './component/protectedRoute';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Authenticate />} /> */}
          <Route exact path='/' element={<ProtectedRoute />} >
            <Route exact path='profile' element={<Profile />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/sign' element={<SignUp />} />
          </Route>
          {/* <Route exact path='/profile' element={<AuthWrapper><Profile /></AuthWrapper>} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
