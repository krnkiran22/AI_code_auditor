# AI Code Auditor - SecureCode AI

🔒 **AI-Powered Code Security Auditor** - A professional-grade web application that analyzes code for security vulnerabilities, bugs, and compliance issues using advanced AI technology.

![SecureCode AI](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=400&fit=crop&q=80)

## 🚀 Features

- ✅ **AI-Powered Analysis** - Leverages Groq's Llama 3.3 70B model for comprehensive security audits
- 🔍 **Multi-Language Support** - Supports JavaScript, TypeScript, Python, Java, C++, Go, Ruby, PHP, and more
- 📊 **Security Scoring** - Get a 0-100 security score with detailed breakdowns
- 🐛 **Vulnerability Detection** - Identifies SQL injection, XSS, CSRF, authentication issues, and more
- 📝 **Detailed Reports** - Download or copy comprehensive security audit reports
- 🎨 **Modern UI** - Beautiful, professional design with glassmorphism effects
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS with custom design system
- **AI Integration**: Groq Cloud API (via OpenAI SDK)
- **Icons**: Custom SVG components
- **Images**: Unsplash API

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- Groq API key (get one at [console.groq.com](https://console.groq.com))

## 🔧 Installation

1. **Navigate to the project directory**
   ```bash
   cd ai_code_editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Edit the `.env` file in the root directory and add your Groq API key:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Analyzing Code

1. **Choose Input Method**
   - **Paste Code**: Directly paste your code into the textarea
   - **Upload File**: Drag and drop or browse for a code file (max 50KB)

2. **Click "Analyze Code"**
   
   The AI will perform a comprehensive security audit

3. **Review Results**
   - Security score (0-100)
   - Issue breakdown by severity (Critical, High, Medium, Low)
   - Detailed findings with recommendations
   - CWE references for each vulnerability

4. **Export Report**
   - Copy to clipboard
   - Download as text file

### Supported File Types

- JavaScript (.js, .jsx)
- TypeScript (.ts, .tsx)
- Python (.py)
- Java (.java)
- C/C++ (.c, .cpp)
- Go (.go)
- Ruby (.rb)
- PHP (.php)
- C# (.cs)
- Swift (.swift)

## 🎨 Design System

### Color Palette

- **Primary**: `#0F172A` (Slate 900) - Deep professional blue-black
- **Secondary**: `#3B82F6` (Blue 500) - Trust and technology
- **Accent**: `#10B981` (Emerald 500) - Success/security
- **Warning**: `#F59E0B` (Amber 500) - Medium severity
- **Danger**: `#EF4444` (Red 500) - Critical vulnerabilities
- **Background**: `#F8FAFC` (Slate 50)
- **Surface**: `#FFFFFF`

### Design Principles

- Modern glassmorphism with subtle blur effects
- Gradient accents for visual interest
- Smooth micro-interactions and transitions
- Professional typography with clear hierarchy
- Custom SVG icons (no external icon libraries)

## 🔐 Security Features Detected

- **Injection Attacks**: SQL, NoSQL, Command, Code injection
- **Cross-Site Scripting (XSS)**: Reflected, Stored, DOM-based
- **Authentication Issues**: Weak passwords, hardcoded credentials
- **Authorization Flaws**: Privilege escalation, access control
- **Cryptography**: Weak algorithms, insecure random numbers
- **Data Exposure**: Information disclosure, sensitive data leaks
- **CSRF**: Cross-Site Request Forgery vulnerabilities
- **Path Traversal**: Directory traversal attacks
- **And many more...**

## 📚 API Reference

### `analyzeCode(codeInput: string)`

Analyzes the provided code for security vulnerabilities.

**Parameters:**
- `codeInput` (string): The code to analyze

**Returns:**
```typescript
{
  securityScore: number,        // 0-100
  overallAssessment: string,    // Detailed summary
  issues: Array<{
    severity: 'critical' | 'high' | 'medium' | 'low',
    title: string,
    description: string,
    lineNumbers: number[],
    recommendation: string,
    cweId?: string
  }>,
  summary: {
    critical: number,
    high: number,
    medium: number,
    low: number
  }
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## ⚠️ Disclaimer

SecureCode AI is an automated tool and should not be used as the sole means of security assessment. Always conduct thorough manual security reviews and penetration testing before deploying code to production.

## 🙏 Acknowledgments

- Powered by [Groq Cloud](https://groq.com) and Llama 3.3 70B
- Images from [Unsplash](https://unsplash.com)
- Security standards from [OWASP](https://owasp.org) and [CWE](https://cwe.mitre.org)

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ for secure coding practices**
# AI_code_auditor
