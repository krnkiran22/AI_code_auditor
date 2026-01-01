import { BugIcon, WarningIcon, InfoIcon } from './Icons';

const SummaryStats = ({ summary }) => {
  const stats = [
    {
      label: 'Critical',
      count: summary.critical,
      color: 'text-danger',
      bgColor: 'bg-red-50',
      borderColor: 'border-danger',
      icon: BugIcon,
      gradient: 'from-danger to-red-600',
    },
    {
      label: 'High',
      count: summary.high,
      color: 'text-warning',
      bgColor: 'bg-orange-50',
      borderColor: 'border-warning',
      icon: WarningIcon,
      gradient: 'from-warning to-orange-600',
    },
    {
      label: 'Medium',
      count: summary.medium,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-600',
      icon: WarningIcon,
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      label: 'Low',
      count: summary.low,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-600',
      icon: InfoIcon,
      gradient: 'from-blue-500 to-blue-600',
    },
  ];

  const totalIssues = summary.critical + summary.high + summary.medium + summary.low;

  return (
    <div className="mb-8 animate-fadeIn">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">Issues Summary</h3>
        <p className="text-textSecondary">
          Found <span className="font-semibold text-primary">{totalIssues}</span> total issues
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`${stat.bgColor} rounded-xl p-6 border-2 ${stat.borderColor} transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.count}
                </div>
              </div>
              <div className={`text-sm font-semibold ${stat.color} uppercase tracking-wide`}>
                {stat.label}
              </div>
              <div className="mt-2 text-xs text-textSecondary">
                {stat.count === 0 ? 'No issues' : stat.count === 1 ? '1 issue' : `${stat.count} issues`}
              </div>
            </div>
          );
        })}
      </div>

      {/* Issue Distribution Bar */}
      {totalIssues > 0 && (
        <div className="mt-6">
          <div className="text-sm font-medium text-textSecondary mb-2">Issue Distribution</div>
          <div className="flex h-3 rounded-full overflow-hidden bg-gray-200">
            {summary.critical > 0 && (
              <div
                className="bg-danger transition-all duration-500"
                style={{ width: `${(summary.critical / totalIssues) * 100}%` }}
                title={`Critical: ${summary.critical}`}
              />
            )}
            {summary.high > 0 && (
              <div
                className="bg-warning transition-all duration-500"
                style={{ width: `${(summary.high / totalIssues) * 100}%` }}
                title={`High: ${summary.high}`}
              />
            )}
            {summary.medium > 0 && (
              <div
                className="bg-yellow-500 transition-all duration-500"
                style={{ width: `${(summary.medium / totalIssues) * 100}%` }}
                title={`Medium: ${summary.medium}`}
              />
            )}
            {summary.low > 0 && (
              <div
                className="bg-blue-500 transition-all duration-500"
                style={{ width: `${(summary.low / totalIssues) * 100}%` }}
                title={`Low: ${summary.low}`}
              />
            )}
          </div>
          <div className="flex justify-between mt-2 text-xs text-textSecondary">
            <span>Most Severe</span>
            <span>Least Severe</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryStats;
