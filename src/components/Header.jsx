import { SecurityShieldIcon } from './Icons';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center shadow-lg">
              <SecurityShieldIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">SecureCode AI</h1>
              <p className="text-xs text-textSecondary">Security Auditor</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-textSecondary hover:text-secondary transition-colors duration-200 font-medium"
              aria-label="Features section"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-textSecondary hover:text-secondary transition-colors duration-200 font-medium"
              aria-label="How it works section"
            >
              How it Works
            </a>
            <a 
              href="#analyze" 
              className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
              aria-label="Start analysis"
            >
              Start Analysis
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
