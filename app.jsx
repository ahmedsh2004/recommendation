import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Memberships from './components/Memberships';
import HealthTracker from './components/HealthTracker';
import Recommendation from './components/Recommendation';
import ChatRoom from './components/ChatRoom';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import Layout from './components/Layout';



function App() {
  return (
    <BrowserRouter>
       <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/memberships" element={<Memberships />} />
      <Route path="/health-tracker" element={<HealthTracker />} />
      <Route path="/Recommendation" element={<Recommendation/>} />
      <Route path="/chat-room" element={<ChatRoom />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/feedback" element={<Feedback />} />
    </Route>
  </Routes>
    </BrowserRouter>
  );
}

export default App;