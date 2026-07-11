const Opportunity = require('../models/Opportunity');

// GET all opportunities (with optional filters)
exports.getOpportunities = async (req, res) => {
  try {
    const { type, department } = req.query;
    let filter = {};
    if (type) filter.type = type;
    if (department) filter.department = department;

    const opportunities = await Opportunity.find(filter).sort({ deadline: 1 });
    res.json(opportunities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new opportunity
exports.createOpportunity = async (req, res) => {
  try {
    const newOpportunity = new Opportunity(req.body);
    const saved = await newOpportunity.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update an opportunity
exports.updateOpportunity = async (req, res) => {
  try {
    const updated = await Opportunity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Opportunity not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE an opportunity
exports.deleteOpportunity = async (req, res) => {
  try {
    const deleted = await Opportunity.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Opportunity not found' });
    res.json({ message: 'Opportunity deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};