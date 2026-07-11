const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['internship', 'hackathon', 'scholarship', 'event'], 
    required: true 
  },
  description: { type: String, default: '' },
  eligibility: { type: String, default: 'All students' },
  department: { type: String, default: 'All departments' },
  deadline: { type: Date, required: true },
  applyLink: { type: String, required: true },
  source: { type: String, default: '' },
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Opportunity', opportunitySchema);