import react from 'react';
import './App.css';
import Welcome from "./pages/login/Welcome";
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import ProtectedRoutesDashboard from './ProtectedRoutesDashboard';
import Profile from './pages/dashboard/Profile';
import EditDetails from './pages/dashboard/EditDetails';

const App=()=> {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route element={<ProtectedRoutesDashboard/>}>
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