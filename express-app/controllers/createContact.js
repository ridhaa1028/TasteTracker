const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create a new contact
async function createContact(name, email, subject, message) {
  const newContact = new Contact({ name, email, subject, message });
  await newContact.save();
  return newContact;
}

module.exports = createContact;