import { SecurityShieldIcon, CheckmarkIcon, WarningIcon } from './Icons';

const SecurityScoreCard = ({ score, assessment }) => {
  // Determine color and status based on score
  const getScoreColor = (score) => {
    if (score >= 80) return { color: 'text-accent', bg: 'bg-accent', label: 'Excellent', gradient: 'from-accent to-emerald-600' };
    if (score >= 60) return { color: 'text-yellow-500', bg: 'bg-yellow-500', label: 'Good', gradient: 'from-yellow-500 to-yellow-600' };
    if (score >= 40) return { color: 'text-warning', bg: 'bg-warning', label: 'Fair', gradient: 'from-warning to-orange-600' };
    return { color: 'text-danger', bg: 'bg-danger', label: 'Critical', gradient: 'from-danger to-red-600' };
  };

  const scoreInfo = getScoreColor(score);
  const circumference = 2 * Math.PI * 70; // radius = 70
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl shadow-elevated p-4 sm:p-6 md:p-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        {/* Circular Progress */}
        <div className="relative flex-shrink-0">
          <svg className="transform -rotate-90 w-40 h-40">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-gray-200"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className={`${scoreInfo.color} transition-all duration-1000 ease-out`}
            />
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`text-4xl font-bold ${scoreInfo.color}`}>
              {score}
            </div>
            <div className="text-sm text-textSecondary font-medium">out of 100</div>
          </div>

          {/* Badge */}
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r ${scoreInfo.gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
            {scoreInfo.label}
          </div>
        </div>

        {/* Assessment Text */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-4">
            <SecurityShieldIcon className={`w-6 h-6 ${scoreInfo.color}`} />
            <h3 className="text-2xl font-bold text-primary">Security Assessment</h3>
          </div>
          
          <p className="text-textSecondary leading-relaxed mb-6">
            {assessment}
          </p>

          {/* Status Indicators */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-start space-x-2">
              {score >= 80 ? (
                <CheckmarkIcon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              ) : (
                <WarningIcon className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              )}
              <div>
                <div className="text-sm font-semibold text-primary">Security</div>
                <div className="text-xs text-textSecondary">
                  {score >= 80 ? 'Strong' : score >= 60 ? 'Moderate' : 'Weak'}
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              {score >= 70 ? (
                <CheckmarkIcon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              ) : (
                <WarningIcon className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              )}
              <div>
                <div className="text-sm font-semibold text-primary">Code Quality</div>
                <div className="text-xs text-textSecondary">
                  {score >= 70 ? 'Good' : 'Needs Work'}
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              {score >= 75 ? (
                <CheckmarkIcon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              ) : (
                <WarningIcon className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              )}
              <div>
                <div className="text-sm font-semibold text-primary">Best Practices</div>
                <div className="text-xs text-textSecondary">
                  {score >= 75 ? 'Followed' : 'Review Needed'}
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              {score >= 65 ? (
                <CheckmarkIcon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              ) : (
                <WarningIcon className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              )}
              <div>
                <div className="text-sm font-semibold text-primary">Performance</div>
                <div className="text-xs text-textSecondary">
                  {score >= 65 ? 'Optimized' : 'Can Improve'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityScoreCard;
