import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Common/ScrollToTop';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import OtherCourseDetail from './pages/OtherCourseDetail';
import Resources from './pages/Resources';
import VedanticTextDetail from './pages/VedanticTextDetail';
import Contact from './pages/Contact';
import Meditation from './pages/Meditation';
import MeditationDetail from './pages/MeditationDetail';
import PITCs from './pages/PITCs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import TermsConditions from './pages/TermsConditions';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import FewMoreClassDetail from './pages/FewMoreClassDetail';
import ComingSoon from './pages/ComingSoon';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AuthCallback from './pages/AuthCallback';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from './pages/VerifyEmail';

// Meditation Pages
import Kriya from './pages/Kriya';
import JapB from './pages/JapB';
import Samvedana from './pages/Samvedna';
import Sakshi from './pages/Sakshi';
import AhangrahUpasana from './pages/AhangrahUpasana';
import ChupSadhana from './pages/ChupSadhana';

// Other Courses Pages
import Sahajawastha from './pages/Sahajawastha';
import DhyanDharana from './pages/DhyanDharana';
import YogPranayam from './pages/YogPranayam';
import Swadhyay from './pages/Swadhyay';
import TeerthYatra from './pages/TeerthYatra';

// Upcoming Courses Pages
import DrgDrsyaViveka from './pages/DrgDrsyaViveka';
import DarsanaSarvasvam from './pages/DarsanaSarvasvam';
import SiddhantaLeshaSangraha from './pages/SiddhantaLeshaSangraha';

// Previous Courses Pages
import VivekaChudamani from './pages/VivekaChudamani';
import SadhanaPanchakam from './pages/SadhanaPanchakam';
import Tattvabodha from './pages/Tattvabodha';
import SanskritClass from './pages/SanskritClass';
import Jap from './pages/Jap';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              {/* Core Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/other-courses/:id" element={<OtherCourseDetail />} />
              <Route path="/courses/few-more/:slug" element={<FewMoreClassDetail />} />
              <Route path="/courses/few-more/asparsha-yoga/3-day" element={<ComingSoon />} />
              <Route path="/courses/few-more/asparsha-yoga/7-day" element={<ComingSoon />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/vedantic-texts/:id" element={<VedanticTextDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/pitcs" element={<PITCs />} />

              {/* Meditation Pages */}
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/meditation/kriya" element={<Kriya />} />
              <Route path="/meditation/jap" element={<JapB />} />
              <Route path="/meditation/samvedana" element={<Samvedana />} />
              <Route path="/meditation/sakshi" element={<Sakshi />} />
              <Route path="/meditation/ahangrah-upasana" element={<AhangrahUpasana />} />
              <Route path="/meditation/chup-sadhana" element={<ChupSadhana />} />

              {/* Other Courses Pages */}
              <Route path="/courses/other/sahajawastha" element={<Sahajawastha />} />
              <Route path="/courses/other/dhyan-dharana" element={<DhyanDharana />} />
              <Route path="/courses/other/yog-pranayam" element={<YogPranayam />} />
              <Route path="/courses/other/swadhyay" element={<Swadhyay />} />
              <Route path="/courses/other/teerth-yatra" element={<TeerthYatra />} />
              <Route path="/courses/other/jap-practice" element={<Jap />} />

              {/* Upcoming Courses */}
              <Route path="/courses/drg-drsya-viveka" element={<DrgDrsyaViveka />} />
              <Route path="/courses/darsana-sarvasvam" element={<DarsanaSarvasvam />} />
              <Route path="/courses/siddhanta-lesha-sangraha" element={<SiddhantaLeshaSangraha />} />

              {/* Previous Courses */}
              <Route path="/courses/viveka-chudamani" element={<VivekaChudamani />} />
              <Route path="/courses/sadhana-panchakam" element={<SadhanaPanchakam />} />
              <Route path="/courses/tattvabodha" element={<Tattvabodha />} />
              <Route path="/courses/sanskrit-class" element={<SanskritClass />} />

              {/* Policies, Auth, Misc */}
              <Route path="/pragya-academy/pitcs" element={<PITCs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
