import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import ListOfJobs from './pages/jobs/ListOfJobs';
import AppliedJobs from './pages/jobs/AppliedJobs';
import Register from './pages/register/RegisterUser';
import Navbar from './components/navbar/Navbar';
import RegisterJobs from './pages/jobs/RegisterJobs';

function App() {
  const location = useLocation();
  const hideNavbar = ['/', '/register']
  return (
    <div className="App">
      {!hideNavbar.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/job-register" element={<RegisterJobs />} />
        <Route path="/jobs" element={<ListOfJobs />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;