import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Import Sidebar
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Dashboard/Home'; // Import Home
import SelectPayment from './pages/Payment/SelectPayment'; // Import SelectPayment
import SponserPayment from './pages/Payment/SponserPayment'; // Import SponsorPayment
import SupplierPayment from './pages/Payment/SupplierPayment'; // Import SupplierPayment
import ViewProfile from './pages/Profile/ViewProfile';
import EditProfile from './pages/Profile/EditProfile';
import ManageDoctors from './pages/Management/Doctors/ManageDoctors';
import AddDoctor from './pages/Management/Doctors/AddDoctor';
import DoctorList from './pages/Management/Doctors/DoctorList'; // Import DoctorList
import EditDoctor from './pages/Management/Doctors/EditDoctor'; // Import EditDoctor
import ManageSponsors from './pages/Management/Sponsors/ManageSponsors';
import AddSponsor from './pages/Management/Sponsors/AddSponsor';
import EditSponsor from './pages/Management/Sponsors/EditSponsor'; // Import EditSponsor
import SponsorList from './pages/Management/Sponsors/SponsorList'; // Import SponsorList
import ManageSuppliers from './pages/Management/Suppliers/ManageSuppliers';
import AddSupplier from './pages/Management/Suppliers/AddSupplier';
import SupplierList from './pages/Management/Suppliers/SupplierList'; // Import SupplierList
import EditSupplier from './pages/Management/Suppliers/EditSupplier'; // Import EditSupplier
import MonitorAds from './pages/Advertisements/MonitorAds';
import SystemAds from './pages/Advertisements/SystemAds'; // Import SystemAds
import PayCommissions from './pages/Commissions/PayCommissions'; // Import PayCommissions
import CommissionHistory from './pages/Commissions/CommissionHistory'; // Import CommissionHistory
import SystemStats from './pages/Analytics/SystemStats';
import WelcomePage from './pages/Welcome/WelcomePage';
import AdScheduleForm from './pages/Advertisements/AdScheduleForm'; // Import AdScheduleForm

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
                    <Route path="/home" element={<Home />} /> {/* Added Home path */}
                    <Route path="/profile/view" element={<ViewProfile />} />
                    <Route path="/profile/edit" element={<EditProfile />} />
                    <Route path="/doctors/manage" element={<ManageDoctors />} />
                    <Route path="/doctors/add" element={<AddDoctor />} />
                    <Route path="/doctors/list" element={<DoctorList />} /> {/* Added DoctorList path */}
                    <Route path="/doctors/edit/:id" element={<EditDoctor />} /> {/* Added EditDoctor path */}
                    <Route path="/sponsors/manage" element={<ManageSponsors />} />
                    <Route path="/sponsors/add" element={<AddSponsor />} />
                    <Route path="/sponsors/edit/:id" element={<EditSponsor />} /> {/* Added EditSponsor path */}
                    <Route path="/sponsors/list" element={<SponsorList />} /> {/* Added SponsorList path */}
                    <Route path="/suppliers/manage" element={<ManageSuppliers />} />
                    <Route path="/suppliers/add" element={<AddSupplier />} />
                    <Route path="/suppliers/list" element={<SupplierList />} /> {/* Added SupplierList path */}
                    <Route path="/suppliers/edit/:id" element={<EditSupplier />} /> {/* Added EditSupplier path */}
                    <Route path="/ads/monitor" element={<MonitorAds />} />
                    <Route path="/ads/schedule" element={<AdScheduleForm />} /> {/* Added AdScheduleForm path */}
                    <Route path="/ads/system" element={<SystemAds />} /> {/* Added SystemAds path */}
                    <Route path="/commissions/history" element={<CommissionHistory />} /> {/* Added CommissionHistory path */}
                    <Route path="/commissions/pay" element={<PayCommissions />} /> {/* Added PayCommissions path */}
                    <Route path="/analytics/system-stats" element={<SystemStats />} />
                    <Route path="/payments/select" element={<SelectPayment />} /> {/* Added SelectPayment path */}
                    <Route path="/payments/sponsor" element={<SponserPayment />} /> {/* Added SponsorPayment path */}
                    <Route path="/payments/supplier" element={<SupplierPayment />} /> {/* Added SupplierPayment path */}
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
