import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Signin from './pages/Auth/Signin/Signin';
import Signup from './pages/Auth/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import ForgetPassword from './pages/Auth/Forgetpassword/Forgetpassword';
import ProtectedRoute from './pages/ProtectedRoute';
import AboutUsPage from './pages/AboutUs/AboutUs';
import ServicesPage from './pages/Services/Services';
import ContactUsForm from './pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Homepage />} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contactus" element={<ContactUsForm />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
};

export default App;