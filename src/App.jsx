import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import DoctorProfile from './components/DoctorProfile';
import Treatments from './components/Treatments';
import AvailableTreatments from './components/AvailableTreatments';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookAppointmentModal from './components/BookAppointmentModal';

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = React.useState(false);
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <Navbar onBookAppointment={() => setIsAppointmentModalOpen(true)} />
      <main>
        <Hero />
        <AboutUs />
        <DoctorProfile />
        <Treatments />
        <AvailableTreatments />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      <BookAppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </div>
  );
}

export default App;
