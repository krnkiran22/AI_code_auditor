import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CodeInputSection from './components/CodeInputSection';
import ResultsSection from './components/ResultsSection';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import { analyzeCode } from './services/aiService';
import { SpinnerIcon } from './components/Icons';

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async (codeInput) => {
    setIsAnalyzing(true);
    setError(null);
    setAnalysisResults(null);

    try {
      const results = await analyzeCode(codeInput);
      setAnalysisResults(results);
      
      // Scroll to results
      setTimeout(() => {
        const resultsSection = document.querySelector('#results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (err) {
      setError(err.message || 'An error occurred during analysis');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-1 pt-20">
        <Hero />
        <CodeInputSection onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        
        {/* Loading State */}
        {isAnalyzing && (
          <section className="py-16 bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-white rounded-2xl shadow-elevated p-12">
                <SpinnerIcon className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Analyzing Your Code...
                </h3>
                <p className="text-textSecondary mb-6">
                  Our AI is performing a comprehensive security audit. This may take a few moments.
                </p>
                <div className="max-w-md mx-auto">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Error State */}
        {error && (
          <section className="py-16 bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-red-50 border-2 border-danger rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-danger rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-danger mb-3">Analysis Failed</h3>
                <p className="text-textSecondary mb-6">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="px-6 py-3 bg-danger text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Results Section */}
        {analysisResults && !isAnalyzing && (
          <div id="results">
            <ResultsSection results={analysisResults} />
          </div>
        )}
      </main>
      <Footer />
      </div>
      <SplashCursor />
    </>
  );
}

export default App;
