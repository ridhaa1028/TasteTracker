const Contact = require('../models/Contact');

// Get all contacts
async function getAllContacts() {
  return await Contact.find();
}

module.exports = getAllContacts;