import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import ListOfJobs from './pages/jobs/ListOfJobs';
import AppliedJobs from './pages/jobs/AppliedJobs';

function App() {
  return (
    <div className="App">
       <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/jobs" element={<ListOfJobs />} />
                <Route path="/applied-jobs" element={<AppliedJobs />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
