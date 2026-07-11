function OpportunityCard({ opportunity }) {
  const { title, type, description, eligibility, department, deadline, applyLink } = opportunity;
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const isClosingSoon = daysLeft <= 7 && daysLeft >= 0;
  const typeColors = {
    internship: 'bg-blue-100 text-blue-700',
    hackathon: 'bg-purple-100 text-purple-700',
    scholarship: 'bg-green-100 text-green-700',
    event: 'bg-orange-100 text-orange-700',
  };
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
      <div className="flex justify-between items-start mb-2">
        <span className={`text-xs font-medium px-2 py-1 rounded ${typeColors[type] || 'bg-gray-100 text-gray-700'}`}>
          {type}
        </span>
        {isClosingSoon && (
          <span className="text-xs font-medium px-2 py-1 rounded bg-red-100 text-red-700">
            Closing soon
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="text-xs text-gray-500 mb-1">Eligibility: {eligibility}</div>
      <div className="text-xs text-gray-500 mb-3">Department: {department}</div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Deadline: {new Date(deadline).toLocaleDateString()}
        </span>
        <a href={applyLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline">
          Apply →
        </a>
      </div>
    </div>
  );
}

export default OpportunityCard;
