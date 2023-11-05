import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './component/login';
// import Authenticate from './component/authCheck';
import Profile from './component/profile';
// import AuthWrapper from './component/authWrapper';
import SignUp from './component/sign';
import ProtectedRoute from './component/protectedRoute';
import Admin from './component/admin';
import AdminRoute from './component/adminRoute';
import Create from './component/employee/create';
import Display from './component/employee/display';
import Delete from './component/employee/delete';
import NotFound from './component/employee/notFound';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' element={<Authenticate />} /> */}
        <Route exact path='/' element={<ProtectedRoute />} >
          <Route exact path='/' element={<Profile />} />
          <Route exact path="/admin" element={<AdminRoute />}>
            <Route exact path='/admin/' element={<Admin />} />
            <Route exact path='/admin/display' element={<Display />} />
            <Route exact path='/admin/create' element={<Create />} />
            <Route exact path='/admin/delete/:id' element={<Delete />} />

          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/sign' element={<SignUp />} />
        </Route>
        <Route exact path='*' element={<NotFound />} />
        {/* <Route exact path='/profile' element={<AuthWrapper><Profile /></AuthWrapper>} /> */}
      </Routes>
    </Router>
  )
}

export default App
