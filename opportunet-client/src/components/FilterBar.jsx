function FilterBar({ selectedType, onTypeChange, selectedDept, onDeptChange }) {
  const types = ['all', 'internship', 'hackathon', 'scholarship', 'event'];
  const depts = ['All departments', 'CSE', 'ECE', 'Mech', 'Civil', 'EEE', 'IT'];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="border rounded-md px-3 py-2 text-sm"
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>

      <select
        value={selectedDept}
        onChange={(e) => onDeptChange(e.target.value)}
        className="border rounded-md px-3 py-2 text-sm"
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
