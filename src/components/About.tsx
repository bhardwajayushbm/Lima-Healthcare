import React from 'react';
import { Target, Heart, Users, Award, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every patient receives personalized attention with empathy and understanding."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "We maintain the highest safety standards and follow all healthcare protocols."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified healthcare professionals bring years of experience to your home."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and emergency services for your peace of mind."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Lima HealthCare
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming healthcare delivery through innovative home-based medical services, 
            bringing hospital-quality care directly to your doorstep.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To revolutionize healthcare accessibility by providing comprehensive, 
                high-quality medical services in the comfort and convenience of patients' homes. 
                We believe that exceptional healthcare should be accessible to everyone, regardless 
                of mobility or transportation challenges.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Experience</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                With over 15 years of experience in the healthcare industry, Lima HealthCare 
                has built a reputation for excellence in home-based medical services. Our team 
                of certified professionals has served thousands of patients, maintaining the 
                highest standards of care and patient satisfaction.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-2">Why Choose Home Healthcare?</h4>
              <p className="text-gray-700">
                Home healthcare offers personalized attention, reduces infection risks, 
                eliminates travel stress, and provides familiar environment comfort while 
                maintaining professional medical standards.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg"
              alt="Healthcare team"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;