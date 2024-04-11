const Contact = require('../models/Contact');

// Update a contact
async function updateContact(id, name, email, subject, message) {
  return await Contact.findByIdAndUpdate(id, { name, email, subject, message }, { new: true });
}

module.exports = updateContact;