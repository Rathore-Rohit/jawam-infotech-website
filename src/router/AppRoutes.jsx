import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Career from "../pages/Career";
import SoftwareDev from "../pages/services/SoftwareDev";
import WebDev from "../pages/services/WebDev";
import FullStackDev from "../pages/services/FullStackDev";
import MobileAppDev from "../pages/services/MobileAppDev";
import CustomSwSolution from "../pages/services/CustomSwSolution";
import UiUxDesign from "../pages/services/UiUxDesign";
import QaTesting from "../pages/services/QaTesting";
import DevopsCloud from "../pages/services/DevopsCloud";
import ThirdPartyInt from "../pages/services/ThirdPartyInt";
import CrmCustomization from "../pages/services/CrmCustomization";
import SeoSmo from "../pages/services/SeoSmo";
import Healthcare from "../pages/industries/Healthcare";
import Finance from "../pages/industries/Finance";
import Insurance from "../pages/industries/Insurance";
import Education from "../pages/industries/Education";
import Automotive from "../pages/industries/Automotive";
import RetailEcommerce from "../pages/industries/RetailEcommerce";
import LogisticsDistribution from "../pages/industries/LogisticsDistribution";
import Construction from "../pages/industries/Construction";
import Frontend from "../pages/technologies/Frontend";
import Backend from "../pages/technologies/Backend";
import MobAppDevelopment from "../pages/technologies/MobAppDevelopment";
import Devops from "../pages/technologies/Devops";
import Loader from "../components/common/Loader";

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // show for 1.5 seconds
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}  
      
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route path="" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />

          {/* Services */}
          <Route path="/services/software-development" element={<SoftwareDev />} />
          <Route path="/services/web-development" element={<WebDev />} />
          <Route path="/services/full-stack-development" element={<FullStackDev />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
          <Route path="/services/custom-software-solutions" element={<CustomSwSolution />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/qa-testing" element={<QaTesting />} />
          <Route path="/services/devops-cloud" element={<DevopsCloud />} />
          <Route path="/services/third-party-integration" element={<ThirdPartyInt />} />
          <Route path="/services/crm-customization" element={<CrmCustomization />} />
          <Route path="/services/seo-smo" element={<SeoSmo />} />

          {/* Industries */}
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/industries/logistics-distribution" element={<LogisticsDistribution />} />
          <Route path="/industries/construction" element={<Construction />} />

          {/* Technologies */}
          <Route path="/technologies/frontend" element={<Frontend />} />
          <Route path="/technologies/backend" element={<Backend />} />
          <Route path="/technologies/mobile-app-development" element={<MobAppDevelopment />} />
          <Route path="/technologies/devops" element={<Devops />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
