declare module './aiService' {
  interface Issue {
    severity: 'critical' | 'high' | 'medium' | 'low';
    title: string;
    description: string;
    lineNumbers: number[];
    recommendation: string;
    cweId?: string;
  }

  interface Summary {
    critical: number;
    high: number;
    medium: number;
    low: number;
  }

  interface AnalysisResult {
    securityScore: number;
    overallAssessment: string;
    issues: Issue[];
    summary: Summary;
  }

  export function analyzeCode(code: string): Promise<AnalysisResult>;
  
  const aiService: {
    analyzeCode: typeof analyzeCode;
  };
  
  export default aiService;
}
