import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Youtube, Facebook, Instagram } from 'lucide-react';
import SEO from '../components/Common/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Fallback to mailto
      const mailtoLink = `mailto:pragyatrust108@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <SEO
          title="Thank You - Pragya Trust Contact"
          description="Thank you for contacting Pragya Trust. We will get back to you within 3-5 business days."
          url="https://pragyatrust.com/contact"
        />
        
        <div className="pt-8 pb-20">
          <div className="max-w-4xl mx-auto container-padding text-center py-20">
            <div className="bg-ochre-50 rounded-xl p-12">
              <div className="w-20 h-20 bg-ochre-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                <Send size={32} />
              </div>
              <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">Thank You!</h1>
              <p className="text-xl text-gray-600 mb-6">
                Your message has been received. We will get back to you within 3–5 business days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact Us - Pragya Trust"
        description="Get in touch with Pragya Trust. Contact us for course inquiries, spiritual guidance, or to learn more about consciousness studies."
        url="https://pragyatrust.com/contact"
      />
      
      <div className="pt-8 pb-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
              Contact <span className="text-ochre-500">Us</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We would love to hear from you! Please fill out the contact form below 
              and we will get back to you within 3–5 business days.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-8">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-8">Get in Touch</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-navy-500 mb-2">Phone</h3>
                      <a
                        href="tel:+919955547065"
                        className="text-gray-600 hover:text-ochre-500 transition-colors duration-200"
                      >
                        +91 9955547065
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-navy-500 mb-2">Email</h3>
                      <a
                        href="mailto:pragyatrust108@gmail.com"
                        className="text-gray-600 hover:text-ochre-500 transition-colors duration-200 break-all"
                      >
                        pragyatrust108@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-navy-500 mb-2">Address</h3>
                      <address className="text-gray-600 not-italic">
                        Mahamanapuri Colony, Karaundi,<br />
                        Varanasi, 221005, U.P (India)
                      </address>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mb-8">
                  <h3 className="text-lg font-heading font-semibold text-navy-500 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://youtube.com/@pragyatrust"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center hover:bg-ochre-600 transition-colors duration-200"
                      aria-label="YouTube Channel"
                    >
                      <Youtube size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/PragyaTrust"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center hover:bg-ochre-600 transition-colors duration-200"
                      aria-label="Facebook Page"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/pragyatrust/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center hover:bg-ochre-600 transition-colors duration-200"
                      aria-label="Instagram Profile"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="bg-ochre-50 rounded-xl p-8">
                  <h3 className="text-xl font-heading font-bold text-navy-500 mb-4">Response Time</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We aim to respond to all inquiries within 3–5 business days. 
                    For urgent matters, please call us directly.
                  </p>
                  <p className="text-sm text-gray-500">
                    Our team is based in Varanasi, India (UTC+5:30)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-h2 font-heading font-bold text-navy-500 text-center mb-12">Find Us</h2>
            
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-soft-lg">
              <div className="aspect-w-16 aspect-h-9 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Interactive map will be embedded here</p>
                  <p className="text-sm text-gray-500">
                    Mahamanapuri Colony, Karaundi, Varanasi, 221005, U.P (India)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a
                href="https://maps.google.com/maps?q=Varanasi,+Uttar+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <MapPin className="mr-2" size={20} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;