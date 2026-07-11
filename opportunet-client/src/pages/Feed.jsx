import { useState, useEffect } from 'react';
import { getOpportunities } from '../api/opportunityApi';
import OpportunityCard from '../components/OpportunityCard';
import FilterBar from '../components/FilterBar';
import EmptyState from '../components/EmptyState';
import Navbar from '../components/Navbar';

function Feed() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDept, setSelectedDept] = useState('All departments');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getOpportunities();
      setOpportunities(data);
    } catch (err) {
      console.error('Failed to fetch opportunities:', err);
    } finally {
      setLoading(false);
    }
  };

  const filtered = opportunities.filter((opp) => {
    const typeMatch = selectedType === 'all' || opp.type === selectedType;
    const deptMatch =
      selectedDept === 'All departments' ||
      opp.department === selectedDept ||
      opp.department === 'All departments';
    return typeMatch && deptMatch;
  });

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <FilterBar
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          selectedDept={selectedDept}
          onDeptChange={setSelectedDept}
        />

        {loading ? (
          <p className="font-mono text-xs text-slate text-center py-20 uppercase tracking-wide">Loading opportunities</p>
        ) : filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
            {filtered.map((opp) => (
              <OpportunityCard key={opp._id} opportunity={opp} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Feed;
