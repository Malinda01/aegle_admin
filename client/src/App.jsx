import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Import Sidebar
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Dashboard/Home';
import ViewProfile from './pages/Profile/ViewProfile';
import EditProfile from './pages/Profile/EditProfile';
import ManageDoctors from './pages/Management/Doctors/ManageDoctors';
import AddDoctor from './pages/Management/Doctors/AddDoctor';
import ManageSponsors from './pages/Management/Sponsors/ManageSponsors';
import AddSponsor from './pages/Management/Sponsors/AddSponsor';
import ManageSuppliers from './pages/Management/Suppliers/ManageSuppliers';
import AddSupplier from './pages/Management/Suppliers/AddSupplier';
import MonitorAds from './pages/Advertisements/MonitorAds';
import PayCommissions from './pages/Commissions/PayCommissions';
import SystemStats from './pages/Analytics/SystemStats';
import WelcomePage from './pages/Welcome/WelcomePage';

function App() {
  return (
    <Router>
      <Header />
      <div className="d-flex">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="*"
            element={
              <div className="d-flex flex-grow-1">
                <Sidebar /> {/* Add Sidebar for all other pages */}
                <main className="flex-grow-1 p-3">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile/view" element={<ViewProfile />} />
                    <Route path="/profile/edit" element={<EditProfile />} />
                    <Route path="/doctors/manage" element={<ManageDoctors />} />
                    <Route path="/doctors/add" element={<AddDoctor />} />
                    <Route path="/sponsors/manage" element={<ManageSponsors />} />
                    <Route path="/sponsors/add" element={<AddSponsor />} />
                    <Route path="/suppliers/manage" element={<ManageSuppliers />} />
                    <Route path="/suppliers/add" element={<AddSupplier />} />
                    <Route path="/ads/monitor" element={<MonitorAds />} />
                    <Route path="/commissions/pay" element={<PayCommissions />} />
                    <Route path="/analytics/system-stats" element={<SystemStats />} />
                  </Routes>
                </main>
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
