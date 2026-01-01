import { SecurityShieldIcon } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-10 sm:py-12 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <SecurityShieldIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SecureCode AI</h3>
                <p className="text-sm text-gray-400">Security Auditor</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              AI-powered code security analysis tool that helps developers identify vulnerabilities, 
              bugs, and security issues in their code. Built with cutting-edge AI technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#analyze" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Try Now
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://cwe.mitre.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  CWE Database
                </a>
              </li>
              <li>
                <a href="https://owasp.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  OWASP Foundation
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  API Access
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Security Standards */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">
            Supports Detection Of
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              'SQL Injection',
              'XSS',
              'CSRF',
              'Authentication Issues',
              'Authorization Flaws',
              'Insecure Dependencies',
              'Code Injection',
              'Path Traversal',
              'Information Disclosure',
              'Weak Cryptography',
            ].map((standard) => (
              <span
                key={standard}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs font-medium text-gray-300"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} SecureCode AI. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#contact" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-yellow-500">Disclaimer:</strong> SecureCode AI is an automated tool 
            and should not be used as the sole means of security assessment. Always conduct thorough 
            manual security reviews and testing before deploying code to production.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
