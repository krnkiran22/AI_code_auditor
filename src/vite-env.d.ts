/// <reference types="vite/client" />

// Specific module declarations
declare module './components/Header' {
  const Header: any;
  export default Header;
}

declare module './components/Hero' {
  const Hero: any;
  export default Hero;
}

declare module './components/CodeInputSection' {
  const CodeInputSection: any;
  export default CodeInputSection;
}

declare module './components/ResultsSection' {
  const ResultsSection: any;
  export default ResultsSection;
}

declare module './components/Footer' {
  const Footer: any;
  export default Footer;
}

declare module './components/SplashCursor' {
  const SplashCursor: any;
  export default SplashCursor;
}

declare module './components/Icons' {
  export const SecurityShieldIcon: any;
  export const UploadIcon: any;
  export const CodeIcon: any;
  export const FileIcon: any;
  export const CloseIcon: any;
  export const SpinnerIcon: any;
  export const BugIcon: any;
  export const WarningIcon: any;
  export const InfoIcon: any;
  export const CheckmarkIcon: any;
  export const ChevronDownIcon: any;
  export const FilterIcon: any;
  export const DownloadIcon: any;
  export const CopyIcon: any;
}

declare module './services/aiService' {
  export function analyzeCode(code: string): Promise<any>;
  const aiService: any;
  export default aiService;
}

// Allow importing JSX files as components
declare module '*.jsx' {
  const component: any;
  export default component;
}

// Allow importing JS files
declare module '*.js' {
  const content: any;
  export default content;
}
