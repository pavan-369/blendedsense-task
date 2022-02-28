import react from 'react';
import './App.css';
import Welcome from "./pages/login/Welcome";
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import ProtectedRoutesDashboard from './ProtectedRoutesDashboard';
import Profile from './pages/dashboard/Profile';
import EditDetails from './pages/dashboard/EditDetails';
import Content from './pages/dashboard/Content';
import Projects from './pages/dashboard/Projects';

const App=()=> {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route element={<ProtectedRoutesDashboard/>}>
          <Route path='/' element={<Welcome />}></Route>
        </Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path="" element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Content/>} />
            <Route path="projects" element={<Projects/>} />
          </Route>
        </Route>
        </Routes>
       </Router>  
    </div>
  );
}
export default App;