const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact
} = require('../controllers');

// Route to create a new contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const newContact = await createContact(name, email, subject, message);
    res.status(201).json(newContact);
  } catch (err) {
    console.error('Error creating contact', err);
    res.status(500).send('Internal Server Error');
  }
});

// Route to get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.json(contacts);
  } catch (err) {
    console.error('Error getting contacts', err);
    res.status(500).send('Internal Server Error');
  }
});

// Route to update a contact
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, email, subject, message } = req.body;
  try {
    const updatedContact = await updateContact(id, name, email, subject, message);
    if (!updatedContact) {
      res.status(404).send('Contact not found');
    } else {
      res.json(updatedContact);
    }
  } catch (err) {
    console.error('Error updating contact', err);
    res.status(500).send('Internal Server Error');
  }
});

// Route to delete a contact
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedContact = await deleteContact(id);
    if (!deletedContact) {
      res.status(404).send('Contact not found');
    } else {
      res.json(deletedContact);
    }
  } catch (err) {
    console.error('Error deleting contact', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
