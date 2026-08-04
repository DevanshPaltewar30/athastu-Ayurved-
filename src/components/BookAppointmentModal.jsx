import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { supabase } from '../supabaseClient';

const BookAppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    alternatePhone: '',
    address: '',
    city: '',
    state: '',
    reference: '',
    illness: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // For phone numbers, only allow digits
    if ((name === 'phone' || name === 'alternatePhone') && !/^\d*$/.test(value)) {
      return;
    }
    // Limit to 10 digits
    if ((name === 'phone' || name === 'alternatePhone') && value.length > 10) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (formData.phone.length !== 10) {
      setErrorMsg('Phone number must be 10 digits long');
      return;
    }
    
    setIsLoading(true);
    try {
      const now = new Date();
      // Format as YYYY-MM-DD
      const currentDate = now.toISOString().split('T')[0];
      // Format as HH:MM:SS
      const currentTime = now.toTimeString().split(' ')[0];

      const { data, error } = await supabase
        .from('Tathastu') // Make sure this matches your table name
        .insert([
          { 
            Name: formData.name, 
            Phone: formData.phone, 
            Alternate: formData.alternatePhone,
            Address: formData.address, 
            City: formData.city, 
            State: formData.state, 
            Reference: formData.reference, 
            Illness: formData.illness,
            APT_Book_Date_: currentDate,
            APT_Book_Time_: currentTime
          }
        ]);

      if (error) throw error;

      alert('Appointment requested successfully!');
      setFormData({
        name: '',
        phone: '',
        alternatePhone: '',
        address: '',
        city: '',
        state: '',
        reference: '',
        illness: ''
      });
      onClose();
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setErrorMsg(error.message || 'Failed to submit appointment request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
          >
            <div className="bg-primary/10 p-6 flex justify-between items-center border-b border-primary/20 shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-primary-dark">Book Appointment</h3>
                <p className="text-text-light text-sm mt-1">Fill out the form below and we will contact you shortly.</p>
              </div>
              <button
                onClick={onClose}
                className="text-text-light hover:text-red-500 transition-colors bg-white p-2 rounded-full shadow-sm"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              {errorMsg && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                  {errorMsg}
                </div>
              )}
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone No */}
                <div>
                  <label className="block text-sm font-medium text-text mb-1">Phone Number (10 digits) *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50"
                    placeholder="e.g. 9876543210"
                  />
                </div>

                {/* Alternate No */}
                <div>
                  <label className="block text-sm font-medium text-text mb-1">Alternate Number</label>
                  <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50"
                    placeholder="e.g. 9123456780"
                  />
                </div>

                {/* Illness */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text mb-1">Illness / Reason for Visit *</label>
                  <input
                    type="text"
                    name="illness"
                    required
                    value={formData.illness}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50"
                    placeholder="Briefly describe your illness"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text mb-1">Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50"
                    placeholder="Enter your complete address"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-text mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50"
                    placeholder="City"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-text mb-1">State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50"
                    placeholder="State"
                  />
                </div>

                {/* Reference */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text mb-1">Reference (Referred by)</label>
                  <input
                    type="text"
                    name="reference"
                    value={formData.reference}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50"
                    placeholder="Doctor's name or reference"
                  />
                </div>

                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {isLoading ? 'Submitting...' : 'Submit Appointment Request'}
                  </button>
                </div>

              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookAppointmentModal;
