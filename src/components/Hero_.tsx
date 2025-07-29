import React, { useEffect } from 'react';
import { ArrowRight, Shield, Heart, Users, Bot } from 'lucide-react';
import CountUp from 'react-countup';
import bgimgnew from '../assets/bgimgnew.png';

const Hero_: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if(element){
      element.scrollIntoView({behavior: 'smooth' });
    }
  }

  /*
<script src="https://dev349907.service-now.com/scripts/sn_csm_ec.js?v=5.6"></script>
<script>
SN_CSM_EC.init({
	moduleID: "https://dev349907.service-now.com/#1d3902d1c303a210fd44f44ed40131f0",
	loadFeature: SN_CSM_EC.loadEMFeature()
});
</script>
  */ 

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dev349907.service-now.com/scripts/sn_csm_ec.js?v=5.6';
    script.async = true;

    
    script.onload = () => {
      if (window.SN_CSM_EC) {
        window.SN_CSM_EC.init({
          moduleID: "https://dev349907.service-now.com/#1d3902d1c303a210fd44f44ed40131f0",
          loadFeature: window.SN_CSM_EC.loadEMFeature()
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

 
  const openChatbot = () => {
    if (window.SN_CSM_EC && typeof window.SN_CSM_EC.showWidget === 'function') {
      window.SN_CSM_EC.showWidget();
    } else {
      alert("Chatbot is still loading. Please try again in a few seconds.");
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
 
      <div className="absolute inset-0 z-0">
        <img 
          src={bgimgnew}
          alt="Healthcare professional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-teal-700/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Bringing Quality Healthcare 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-green-300">
                {' '}To Your Doorstep
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Lima HealthCare provides comprehensive medical services in the comfort of your home. 
              Experience professional healthcare with compassion, convenience, and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button 
                onClick={scrollToServices}
                className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                View Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

            
              <button 
                onClick={scrollToContact}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-blue-100 transition-all duration-300 flex items-center justify-center"
              >
                <Bot className="w-5 h-5 mr-2" />
                Get in touch
              </button>
            </div>

  
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Shield className="w-8 h-8 text-teal-300 mr-2" />
                   <CountUp end={15} duration={7} suffix="+" className="text-3xl font-bold text-white" />
               
                </div>
                <p className="text-blue-200">Years of Experience</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Heart className="w-8 h-8 text-teal-300 mr-2" />
                   <CountUp end={10000} duration={4} suffix="+" separator="," className="text-3xl font-bold text-white" />
                
                </div>
                <p className="text-blue-200">Patients Served</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Users className="w-8 h-8 text-teal-300 mr-2" />
                  <span className="text-3xl font-bold text-white">24/7</span>
                </div>
                <p className="text-blue-200">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_;
