import { useState } from 'react';
import { ChevronDownIcon, BugIcon, WarningIcon, InfoIcon } from './Icons';

const IssueCard = ({ issue, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSeverityConfig = (severity) => {
    switch (severity) {
      case 'critical':
        return {
          color: 'text-danger',
          bgColor: 'bg-red-50',
          borderColor: 'border-danger',
          badgeBg: 'bg-danger',
          icon: BugIcon,
        };
      case 'high':
        return {
          color: 'text-warning',
          bgColor: 'bg-orange-50',
          borderColor: 'border-warning',
          badgeBg: 'bg-warning',
          icon: WarningIcon,
        };
      case 'medium':
        return {
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-600',
          badgeBg: 'bg-yellow-600',
          icon: WarningIcon,
        };
      default: // low
        return {
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-600',
          badgeBg: 'bg-blue-600',
          icon: InfoIcon,
        };
    }
  };

  const config = getSeverityConfig(issue.severity);
  const Icon = config.icon;

  return (
    <div
      className={`${config.bgColor} border-l-4 ${config.borderColor} rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mb-5 sm:mb-6 overflow-hidden`}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-white/50 transition-colors"
        aria-expanded={isExpanded}
        aria-label={`Toggle issue details for ${issue.title}`}
      >
        <div className="flex items-center space-x-3 sm:space-x-4 flex-1 text-left">
          {/* Icon */}
          <div className={`w-10 h-10 rounded-lg ${config.badgeBg} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>

          {/* Title and Badge */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              <span className={`px-2.5 sm:px-3 py-1 ${config.badgeBg} text-white text-xs font-bold rounded-full uppercase`}>
                {issue.severity}
              </span>
              {issue.cweId && (
                <span className="px-2.5 sm:px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
                  {issue.cweId}
                </span>
              )}
            </div>
            <h4 className={`text-base sm:text-lg font-semibold ${config.color} line-clamp-2 sm:truncate`}>
              {issue.title}
            </h4>
          </div>

          {/* Line Numbers */}
          {issue.lineNumbers && issue.lineNumbers.length > 0 && (
            <div className="hidden md:block text-sm text-textSecondary">
              Lines: {issue.lineNumbers.join(', ')}
            </div>
          )}
        </div>

        {/* Expand Icon */}
        <ChevronDownIcon
          className={`w-5 h-5 ${config.color} transition-transform duration-200 flex-shrink-0 ml-4 ${
            isExpanded ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 sm:px-6 pb-5 sm:pb-6 space-y-4 sm:space-y-5 animate-fadeIn">
          <div className="h-px bg-gray-300"></div>

          {/* Description */}
          <div>
            <h5 className="text-sm font-semibold text-primary mb-2">Description</h5>
            <p className="text-sm text-textSecondary leading-relaxed">
              {issue.description}
            </p>
          </div>

          {/* Line Numbers (Mobile) */}
          {issue.lineNumbers && issue.lineNumbers.length > 0 && (
            <div className="md:hidden">
              <h5 className="text-sm font-semibold text-primary mb-2">Affected Lines</h5>
              <div className="flex flex-wrap gap-2">
                {issue.lineNumbers.map((line) => (
                  <span
                    key={line}
                    className="px-3 py-1 bg-white rounded-md text-sm font-mono text-textSecondary border border-gray-300"
                  >
                    Line {line}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Recommendation */}
          <div>
            <h5 className="text-sm font-semibold text-primary mb-2">Recommendation</h5>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-textSecondary leading-relaxed">
                {issue.recommendation}
              </p>
            </div>
          </div>

          {/* CWE Link */}
          {issue.cweId && (
            <div>
              <a
                href={`https://cwe.mitre.org/data/definitions/${issue.cweId.replace('CWE-', '')}.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-secondary hover:text-blue-600 font-medium transition-colors"
              >
                Learn more about {issue.cweId}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const IssuesList = ({ issues }) => {
  if (!issues || issues.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <BugIcon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">No Issues Found</h3>
        <p className="text-textSecondary">Great job! Your code looks secure.</p>
      </div>
    );
  }

  return (
    <div className="space-y-0 animate-fadeIn">
      {issues.map((issue, index) => (
        <IssueCard key={index} issue={issue} index={index} />
      ))}
    </div>
  );
};

export default IssuesList;
