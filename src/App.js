import logo from './logo.svg';
import './App.css';
import Add_Users from './component/Adduser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllUsers from './component/Userlist';
import Allblog from './component/Allblog';
import Edituser from './component/Edituser';
import Login from './auth/component/Login'
import SignUp from './auth/component/Signup';

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/adduser" element={<Add_Users />} />
          <Route path="/alluser" element={<AllUsers />} />
          <Route path='/allblog' element={<Allblog />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/edit/:id' element={<Edituser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
