const express = require('express');
const CalendarEvent = require('./transaction/model/CalendarEvent');
const router = express.Router();

// POST route to create a new event
router.post('/', async (req, res) => {
  try {
    const newEvent = new CalendarEvent(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: 'Unable to save the event' });
  }
});

// GET route to fetch all events
router.get('/calendarEventRouter', async (req, res) => {
  try {
    const events = await CalendarEvent.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch events' });
  }
});

module.exports = router;
