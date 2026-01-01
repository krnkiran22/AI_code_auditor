import { useState } from 'react';
import { UploadIcon, CodeIcon, FileIcon, CloseIcon, SpinnerIcon } from './Icons';

const CodeInputSection = ({ onAnalyze, isAnalyzing }) => {
  const [activeTab, setActiveTab] = useState('paste');
  const [codeInput, setCodeInput] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const ALLOWED_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.py', '.java', '.cpp', '.c', '.go', '.rb', '.php', '.cs', '.swift'];
  const MAX_FILE_SIZE = 50 * 1024; // 50KB

  const handleFileUpload = (file) => {
    setError(null);

    // Validate file extension
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
      setError(`Invalid file type. Supported: ${ALLOWED_EXTENSIONS.join(', ')}`);
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      setError(`File too large. Maximum size: 50KB`);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      setCodeInput(content);
      setUploadedFile(file);
    };
    reader.onerror = () => {
      setError('Error reading file. Please try again.');
    };
    reader.readAsText(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleClear = () => {
    setCodeInput('');
    setUploadedFile(null);
    setError(null);
  };

  const handleAnalyzeClick = () => {
    if (!codeInput.trim()) {
      setError('Please provide code to analyze');
      return;
    }

    if (codeInput.trim().length < 10) {
      setError('Code must be at least 10 characters long');
      return;
    }

    setError(null);
    onAnalyze(codeInput);
  };

  const charCount = codeInput.length;
  const lineCount = codeInput.split('\n').length;

  return (
    <section id="analyze" className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Analyze Your Code
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Upload a file or paste your code below. Our AI will analyze it for security vulnerabilities and provide detailed recommendations.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-elevated p-6 md:p-8">
          {/* Tab Buttons */}
          <div className="flex space-x-2 mb-6 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('paste')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'paste'
                  ? 'bg-white text-secondary shadow-md'
                  : 'text-textSecondary hover:text-primary'
              }`}
              aria-label="Paste code tab"
              aria-pressed={activeTab === 'paste'}
            >
              <CodeIcon className="w-5 h-5" />
              <span>Paste Code</span>
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'upload'
                  ? 'bg-white text-secondary shadow-md'
                  : 'text-textSecondary hover:text-primary'
              }`}
              aria-label="Upload file tab"
              aria-pressed={activeTab === 'upload'}
            >
              <UploadIcon className="w-5 h-5" />
              <span>Upload File</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="mb-6">
            {activeTab === 'paste' ? (
              <div>
                <textarea
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  placeholder="Paste your code here...&#10;&#10;Example:&#10;function login(username, password) {&#10;  const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;&#10;  return db.execute(query);&#10;}"
                  className="w-full h-64 md:h-80 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 font-mono text-sm resize-none"
                  aria-label="Code input textarea"
                />
                <div className="flex justify-between items-center mt-2 text-sm text-textSecondary">
                  <span>{lineCount} lines • {charCount} characters</span>
                  {codeInput && (
                    <button
                      onClick={handleClear}
                      className="text-danger hover:text-red-600 font-medium transition-colors"
                      aria-label="Clear code"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div>
                {uploadedFile ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <FileIcon className="w-8 h-8 text-secondary" />
                        <div>
                          <div className="font-medium text-primary">{uploadedFile.name}</div>
                          <div className="text-sm text-textSecondary">
                            {(uploadedFile.size / 1024).toFixed(2)} KB • {lineCount} lines
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handleClear}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                        aria-label="Remove file"
                      >
                        <CloseIcon className="w-5 h-5 text-textSecondary" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 ${
                      dragActive
                        ? 'border-secondary bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <UploadIcon className="w-12 h-12 text-textSecondary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Drop your file here
                    </h3>
                    <p className="text-textSecondary mb-4">
                      or click to browse
                    </p>
                    <input
                      type="file"
                      id="file-upload"
                      onChange={handleFileChange}
                      accept={ALLOWED_EXTENSIONS.join(',')}
                      className="hidden"
                      aria-label="File upload input"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-6 py-3 bg-secondary text-white rounded-lg font-medium cursor-pointer hover:bg-blue-600 transition-colors"
                    >
                      Choose File
                    </label>
                    <p className="text-xs text-textSecondary mt-4">
                      Supported: {ALLOWED_EXTENSIONS.join(', ')} • Max 50KB
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-danger text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Analyze Button */}
          <button
            onClick={handleAnalyzeClick}
            disabled={isAnalyzing || !codeInput.trim()}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
              isAnalyzing || !codeInput.trim()
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-accent hover:bg-emerald-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
            }`}
            aria-label="Analyze code"
            aria-busy={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <SpinnerIcon className="w-5 h-5" />
                <span>Analyzing Code...</span>
              </>
            ) : (
              <>
                <CodeIcon className="w-5 h-5" />
                <span>Analyze Code</span>
              </>
            )}
          </button>

          {/* Example Code Snippet Link */}
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                setActiveTab('paste');
                setCodeInput(`function authenticateUser(username, password) {
  // SQL Injection Vulnerability
  const query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";
  const result = db.execute(query);
  
  // Weak password validation
  if (password.length >= 4) {
    return result;
  }
  
  // Hardcoded credentials
  if (username === "admin" && password === "admin123") {
    return { role: "admin", access: "full" };
  }
  
  return null;
}`);
              }}
              className="text-secondary hover:text-blue-600 text-sm font-medium transition-colors"
              aria-label="Try example code"
            >
              Try an example with vulnerabilities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeInputSection;
