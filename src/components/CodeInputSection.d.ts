declare module './CodeInputSection' {
  interface CodeInputSectionProps {
    onAnalyze: (code: string) => void;
    isAnalyzing: boolean;
  }
  const CodeInputSection: React.FC<CodeInputSectionProps>;
  export default CodeInputSection;
}
