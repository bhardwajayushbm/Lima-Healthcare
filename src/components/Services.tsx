import React from 'react';
import { 
  Activity, 
  TestTube, 
  Heart, 
  Scan, 
  Shield, 
  Truck, 
  UserCheck, 
  Clipboard, 
  Droplet 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Scan,
      title: "X-ray at Home",
      description: "Professional digital X-ray services with portable equipment for accurate diagnostics in your home.",
      features: ["Digital X-rays", "Immediate Results", "Licensed Technicians"]
    },
    {
      icon: TestTube,
      title: "Lab Testing",
      description: "Comprehensive laboratory testing services including blood work, urine analysis, and specialized tests.",
      features: ["Blood Tests", "Urine Analysis", "Specialized Testing"]
    },
    {
      icon: Activity,
      title: "EKG/ECG Services",
      description: "Complete electrocardiogram testing to monitor heart health and detect potential issues.",
      features: ["12-Lead EKG", "Heart Monitoring", "Cardiac Analysis"]
    },
    {
      icon: Heart,
      title: "Ultrasound Imaging",
      description: "Advanced ultrasound imaging services for diagnostic purposes with state-of-the-art equipment.",
      features: ["3D/4D Imaging", "Diagnostic Scans", "Real-time Results"]
    },
    {
      icon: Shield,
      title: "Covid-19 Testing",
      description: "Rapid and PCR COVID-19 testing services with quick turnaround times and accurate results.",
      features: ["Rapid Tests", "PCR Testing", "Same-day Results"]
    },
    {
      icon: Truck,
      title: "Mobile Diagnostic Services",
      description: "Complete mobile diagnostic unit bringing hospital-grade equipment to your location.",
      features: ["Mobile Unit", "Multiple Tests", "On-site Results"]
    },
    {
      icon: UserCheck,
      title: "Skilled Nursing Visits",
      description: "Licensed nurses providing specialized care, medication management, and health monitoring.",
      features: ["Medication Management", "Wound Care", "Health Monitoring"]
    },
    {
      icon: Clipboard,
      title: "Health Screenings",
      description: "Comprehensive health screenings and preventive care services to maintain optimal health.",
      features: ["Preventive Care", "Vital Signs", "Health Assessment"]
    },
    {
      icon: Droplet,
      title: "Home Blood Draw",
      description: "Professional phlebotomy services for blood collection in the comfort of your home.",
      features: ["Certified Phlebotomists", "Painless Collection", "Lab Processing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Healthcare Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive home healthcare services delivered by certified professionals 
            using state-of-the-art medical equipment and technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Home Healthcare?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and discover the convenience of professional 
            healthcare services in your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Schedule Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;