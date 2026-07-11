import { useState, useEffect } from 'react';
import { getOpportunities, createOpportunity, deleteOpportunity } from '../api/opportunityApi';

function Admin() {
  const [opportunities, setOpportunities] = useState([]);
  const [form, setForm] = useState({
    title: '',
    type: 'internship',
    description: '',
    eligibility: '',
    department: 'All departments',
    deadline: '',
    applyLink: '',
    source: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getOpportunities();
    setOpportunities(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    try {
      await createOpportunity(form);
      setMessage('Opportunity added successfully!');
      setForm({
        title: '',
        type: 'internship',
        description: '',
        eligibility: '',
        department: 'All departments',
        deadline: '',
        applyLink: '',
        source: '',
      });
      fetchData();
    } catch (err) {
      setMessage('Error adding opportunity: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this opportunity?')) return;
    await deleteOpportunity(id);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

        <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-6 mb-8 space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option value="internship">Internship</option>
            <option value="hackathon">Hackathon</option>
            <option value="scholarship">Scholarship</option>
            <option value="event">Event</option>
          </select>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded px-3 py-2 text-sm"
            rows="3"
          />

          <input
            name="eligibility"
            value={form.eligibility}
            onChange={handleChange}
            placeholder="Eligibility (e.g. 2nd year+, all depts)"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            name="department"
            value={form.department}
            onChange={handleChange}
            placeholder="Department"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            name="applyLink"
            value={form.applyLink}
            onChange={handleChange}
            placeholder="Apply Link (https://...)"
            required
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <input
            name="source"
            value={form.source}
            onChange={handleChange}
            placeholder="Source (e.g. Internshala, LinkedIn)"
            className="w-full border rounded px-3 py-2 text-sm"
          />

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium disabled:opacity-50"
          >
            {submitting ? 'Adding...' : 'Add Opportunity'}
          </button>

          {message && <p className="text-sm text-gray-600">{message}</p>}
        </form>

        <h2 className="text-lg font-semibold mb-3">Existing Opportunities ({opportunities.length})</h2>
        <div className="space-y-2">
          {opportunities.map((opp) => (
            <div key={opp._id} className="bg-white border rounded p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">{opp.title}</p>
                <p className="text-xs text-gray-500">{opp.type} • {new Date(opp.deadline).toLocaleDateString()}</p>
              </div>
              <button
                onClick={() => handleDelete(opp._id)}
                className="text-red-600 text-sm font-medium hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
