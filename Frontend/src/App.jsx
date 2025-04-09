import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Resources1 from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Resources2 from "./pages/Tools";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import Otp from "./pages/Otp";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LicenceAssessment from "./pages/LicenceAssessment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import LicenceAssessmentPage from "./pages/LicenceAssessmentPage";
import SalaryCalculator from "./pages/SalaryCalculator";
import ImigrationSkillChargeCalculator from "./pages/ImigrationSkillChargeCalculator";
import AssessmentResult from "./pages/AssessmentResult";
import SLCostEstimatorPage from "./pages/SLCostEstimatorPage";
import SLCostEstimator from "./pages/SLCostEstimator";
import SalaryCalculatorPage from "./pages/SalaryCalculatorPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/events" element={<Resources1 />} />
            <Route path="/tools" element={<Resources2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/assessment" element={<LicenceAssessment />} />
            <Route path="/assessment/result" element={<AssessmentResult />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/sponsor-licence-assessment" element={<LicenceAssessmentPage />} />
            <Route path="/salary-calculator" element={<SalaryCalculatorPage />} />
            <Route path="/salary-calculator/calculate" element={<SalaryCalculator />} />
            <Route path="/cost-estimator" element={<SLCostEstimatorPage />} />
            <Route path="/cost-estimator/calculate" element={<SLCostEstimator />} />
            <Route path="/imigration-skill-charge-calculator" element={<ImigrationSkillChargeCalculator />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
