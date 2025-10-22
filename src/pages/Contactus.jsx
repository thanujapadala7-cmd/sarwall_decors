import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Send,
  Clock,
  CheckCircle,
  MessageSquare,
  Award,
  Users,
  Headphones,
  ArrowRight,
  Star,
  Sparkles,
  Calendar,
  Shield,
  Truck,
  Palette,
} from "lucide-react";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [activeTab, setActiveTab] = useState("contact");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    }, 4000);
  };

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Highest grade materials with 10+ years durability",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "5-Year Warranty",
      description: "Comprehensive protection on all installations",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Installation",
      description: "Professional installation included with every order",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Designs",
      description: "Tailored solutions for your unique space",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-800">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gray-200">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">Premium Wall Decor Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Transform Your Space 
                <span className="text-blue-600 block">
                  With Expert Craftsmanship
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Professional wall decor services with premium materials, expert installation, and 5-year warranty guarantee for your perfect space.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact-form" 
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition transform shadow-sm flex items-center gap-2"
                >
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="tel:+918333833355" 
                  className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition border border-gray-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-gray-800 mb-1">500+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-gray-800 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-gray-800 mb-1">100%</div>
                <div className="text-gray-600 text-sm">Satisfaction Rate</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-gray-800 mb-1">5Y</div>
                <div className="text-gray-600 text-sm">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 py-6">
            <a href="tel:+918333833355" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Call Us</p>
                <p className="text-base font-semibold text-gray-800">+91 8333833355</p>
              </div>
            </a>
            <a href="mailto:contactusswd@gmail.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Email Us</p>
                <p className="text-base font-semibold text-gray-800">contactusswd@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Open Hours</p>
                <p className="text-base font-semibold text-gray-800">10AM - 7PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose SarWall Decors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine premium materials with expert craftsmanship to deliver exceptional wall decor solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(feature.icon, { className: "w-6 h-6 text-blue-600" })}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Get In Touch</h2>
                <p className="text-gray-600">
                  Ready to transform your space? Contact us through any channel below for a free consultation.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address Card */}
                <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Our Showroom</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Sarwall Decors, Scion Park View<br />
                        Flat no 104, Vijay Nagar Colony<br />
                        Vivekananda Nagar, Kukatpally<br />
                        Hyderabad, Telangana 500072
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                      <div className="space-y-1">
                        <a href="tel:+918333833355" className="block text-gray-700 hover:text-blue-600 transition font-medium text-sm">
                          +91 8333833355
                        </a>
                        <a href="tel:04040033355" className="block text-gray-700 hover:text-blue-600 transition font-medium text-sm">
                          040 40033355
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email & Social Card */}
                <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">Connect With Us</h3>
                      <a href="mailto:contactusswd@gmail.com" className="block text-gray-700 hover:text-blue-600 transition font-medium text-sm mb-3">
                        contactusswd@gmail.com
                      </a>
                      <div className="flex gap-2">
                        <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition">
                          <Facebook className="w-4 h-4 text-gray-600" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition">
                          <Instagram className="w-4 h-4 text-gray-600" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition">
                          <Twitter className="w-4 h-4 text-gray-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Monday - Saturday</span>
                      <span className="font-medium text-blue-600">10:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sunday</span>
                      <span className="font-medium text-blue-600">11:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" id="contact-form">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
                    <p className="text-gray-600 text-sm">We typically respond within 2 hours during business hours</p>
                  </div>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-gray-400"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-gray-400"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-gray-400"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('location')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-gray-400"
                        placeholder="e.g., Hyderabad, Kukatpally"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition resize-none placeholder-gray-400"
                        placeholder="Tell us about your wall decor project, room dimensions, preferred styles, and budget..."
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Visit Our Showroom</h2>
            <p className="text-lg text-gray-600">
              Experience our premium collection and get expert advice in person
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-3">
              <div className="lg:col-span-1 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Location Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">
                        Sarwall Decors, Scion Park View<br />
                        Flat no 104, Vijay Nagar Colony<br />
                        Vivekananda Nagar, Kukatpally<br />
                        Hyderabad, Telangana 500072
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Hours</p>
                      <p className="text-gray-600 text-sm">
                        Mon-Sat: 10:00 AM - 7:00 PM<br />
                        Sunday: 11:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Contact</p>
                      <p className="text-gray-600 text-sm">
                        +91 8333833355<br />
                        040 40033355
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 h-80 lg:h-64">
                <iframe
                  title="Sar Wall Decors Location"
                  src="https://www.google.com/maps?q=Sarwall+Decors,+Kukatpally,+Hyderabad&output=embed"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                SarWall Decors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium wall decor solutions with expert craftsmanship and 5-year warranty guarantee.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>+91 8333833355</li>
                <li>contactusswd@gmail.com</li>
                <li>Hyderabad, Telangana</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition">
                  <Facebook className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition">
                  <Instagram className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition">
                  <Twitter className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 SarWall Decors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}