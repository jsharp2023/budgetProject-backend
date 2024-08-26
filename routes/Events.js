const express = require('express');
const Event = require('./transaction/model/Event');
const router = express.Router();
const CalendarEvent = require('./models/CalendarEvent');

// Create a new calendar event
router.post('/api/calendar-events', async (req, res) => {
    try {
      const newEvent = new CalendarEvent(req.body);
      await newEvent.save();
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(400).json({ error: 'Unable to save the event' });
    }
  });

  // Get all calendar events
router.get('/api/calendar-events', async (req, res) => {
    try {
      const events = await CalendarEvent.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch events' });
    }
  });

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add an event
router.post('/', async (req, res) => {
    const event = new Event({
        title: req.body.title,
        date: req.body.date,
        amount: req.body.amount
    });
    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Additional routes for updating and deleting events

module.exports = router;
