import react from 'react';
import './App.css';
import Welcome from "./pages/login/Welcome";
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import ProtectedRoutes1 from './ProtectedRoutes1';
import Profile from './pages/dashboard/Profile';
import EditDetails from './pages/dashboard/EditDetails';

const App=()=> {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route element={<ProtectedRoutes1/>}>
          <Route path='/' element={<Welcome />}></Route>
        </Route>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/profile/edit' element={<EditDetails />}/></Route>
        </Routes>
       </Router>  
    </div>
  );
}
export default App;