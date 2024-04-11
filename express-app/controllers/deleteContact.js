const Contact = require('../models/Contact');

// Delete a contact
async function deleteContact(id) {
  return await Contact.findByIdAndDelete(id);
}

module.exports = deleteContact;
