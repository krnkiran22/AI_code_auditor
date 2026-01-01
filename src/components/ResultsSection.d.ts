declare module './ResultsSection' {
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

  interface AnalysisResults {
    securityScore: number;
    overallAssessment: string;
    issues: Issue[];
    summary: Summary;
  }

  interface ResultsSectionProps {
    results: AnalysisResults | null;
  }

  const ResultsSection: React.FC<ResultsSectionProps>;
  export default ResultsSection;
}
