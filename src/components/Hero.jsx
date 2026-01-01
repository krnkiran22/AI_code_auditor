import { useState } from 'react';
import { SecurityShieldIcon, CheckmarkIcon } from './Icons';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fadeIn">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <SecurityShieldIcon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">AI-Powered Security Analysis</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Secure Your Code with
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Identify vulnerabilities, security flaws, and code quality issues in seconds. 
              Powered by advanced AI models to protect your applications.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              {['Real-time Analysis', 'Multi-language Support', 'Detailed Reports'].map((feature) => (
                <div key={feature} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <CheckmarkIcon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#analyze" 
                className="px-8 py-4 bg-accent hover:bg-emerald-600 text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1"
                aria-label="Try it now"
              >
                Try it Now - It's Free
              </a>
              <a 
                href="#how-it-works" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg font-semibold border border-white/30 transition-all duration-200"
                aria-label="Learn more"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-accent">10K+</div>
                <div className="text-sm text-gray-400">Audits Run</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">99%</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-gray-400">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:block animate-fadeIn">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse"></div>
              )}
              
              {imageError ? (
                <div className="w-full h-96 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <SecurityShieldIcon className="w-20 h-20 text-accent mx-auto mb-4" />
                    <p className="text-gray-400">Security Visualization</p>
                  </div>
                </div>
              ) : (
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80"
                  alt="Code security visualization"
                  className={`w-full h-auto transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              )}
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 backdrop-blur-lg bg-white/20 border border-white/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-200 mb-1">Security Score</div>
                    <div className="text-2xl font-bold text-accent">95/100</div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center">
                    <CheckmarkIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
