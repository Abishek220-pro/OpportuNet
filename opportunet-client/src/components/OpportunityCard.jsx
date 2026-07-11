function OpportunityCard({ opportunity }) {
  const { title, type, description, eligibility, department, deadline, applyLink } = opportunity;
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const isClosingSoon = daysLeft <= 7 && daysLeft >= 0;
  const typeStyles = {
    internship: 'text-ink border-ink',
    hackathon: 'text-amber border-amber',
    scholarship: 'text-forest border-forest',
    event: 'text-slate border-slate',
  };
  return (
    <div className="relative bg-white border border-line rounded-sm p-5 pt-6">
      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-line"></div>
      <div className="flex justify-between items-start mb-3 pl-4">
        <span className={`font-mono text-[10px] uppercase tracking-wider border px-2 py-0.5 rounded-full ${typeStyles[type] || 'text-slate border-slate'}`}>
          {type}
        </span>
        {isClosingSoon && (
          <span className="font-mono text-[10px] uppercase tracking-wider bg-amber text-white px-2 py-0.5 rounded-full">
            Closing soon
          </span>
        )}
      </div>
      <div className="pl-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-1.5">{title}</h3>
        <p className="text-sm text-slate mb-3 leading-relaxed">{description}</p>
        <div className="font-mono text-[11px] text-slate mb-1">Eligibility - {eligibility}</div>
        <div className="font-mono text-[11px] text-slate mb-4">Department - {department}</div>
        <div className="border-t border-dashed border-line pt-3 flex justify-between items-center">
          <span className="font-mono text-[11px] text-slate">
            Deadline {new Date(deadline).toLocaleDateString()}
          </span>
          <a href={applyLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink hover:text-amber transition">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}
export default OpportunityCard;
