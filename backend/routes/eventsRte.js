const express = require('express');
const User = require('../model/user');
const Event = require('../model/event');

const Router = express.Router();

Router.post(
    `/admin/addEvent`, async (req, res) => {

        const { title, img, desc, date  } = req.body;
        try {
            const searchResult = await Event.findOne({ title });

            if (searchResult) return res.json({ msg: `This event is already exist!` });
            const newEvent = new Event({
                title,
                 img, 
                 desc,
                 date,        });
            newEvent.save();
            res.json(newEvent);
          } catch (error) {
            console.error(error);
            res.json(error);
          }
        }
      );
      Router.get(`/eventsPage`, async (req, res) => {
        
        try {
            const events = await Event.find();
            
      
            res.status(200).json(events); 
          } catch (error) {
            console.error(error);
            res.json(error);
          }
        } );


      module.exports = Router;

