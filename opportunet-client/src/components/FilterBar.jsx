function FilterBar({ selectedType, onTypeChange, selectedDept, onDeptChange }) {
  const types = ['all', 'internship', 'hackathon', 'scholarship', 'event'];
  const depts = ['All departments', 'CSE', 'ECE', 'Mech', 'Civil', 'EEE', 'IT'];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="font-mono text-xs uppercase tracking-wide border border-line rounded-sm px-3 py-2 bg-white text-ink"
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type === 'all' ? 'All Types' : type}
          </option>
        ))}
      </select>

      <select
        value={selectedDept}
        onChange={(e) => onDeptChange(e.target.value)}
        className="font-mono text-xs uppercase tracking-wide border border-line rounded-sm px-3 py-2 bg-white text-ink"
      >
        {depts.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
