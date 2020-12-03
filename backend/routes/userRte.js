const express = require("express");
const User = require("../model/user");
const Event = require("../model/event");
const { eventNames, find } = require("../model/event");
const { Mongoose } = require("mongoose");

const Router = express.Router();

/// 1- sign up / register

Router.post(`/signUp`, async (req, res) => {
  const {
    name,
    email,
    password,
    phoneNumber,
    role,
    img,
    choosenEvents,
  } = req.body;
  try {
    const searchResult = await User.findOne({ email });

    if (searchResult) return res.json({ msg: `This email is already exist!` });
    const newUser = new User({
      name,
      email,
      password,
      role,
      img,
      phoneNumber,
      choosenEvents,
    });
    newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

/////////// 2- log in

Router.post(`/logIn`, async (req, res) => {
  const { email, password } = req.body;
  try {
    const searchUser = await User.findOne({ email });
    if (!searchUser)
      return res.status(404).json({ msg: `This email doesn't exist !` });

    const isMatch = password === searchUser.password;
    if (!isMatch) return res.status(401).json({ msg: `Wrong password !!!` });
    const payload = {
      id: searchUser._id,
      name: searchUser.name,
      email: searchUser.email,
      role: searchUser.role,
      img: searchUser.img,
      choosenEvents: searchUser.choosenEvents,
      phoneNumber: searchUser.phoneNumber,
    };

    return res.status(200).json(payload);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
});

//3- Get profile // rq lazem nib3ath an array des objets fih details mta3 choosen events

Router.get(`/profile`, async (req, res) => {
  const { id } = req.body;
  const findEventByUser = async (userId) => {
    try {
      const event = await Event.findById(userId);
      return event;
    } catch (error) {
      console.log(error);
    }
  };
  const findEventsByUser = async (eventArray) => {
    return await Promise.all(eventArray.map((element) => findEventByUser(element)));
  };

  try {
    const findUser = await User.findById(id);

    const { choosenEvents } = findUser;
    let events = await  findEventsByUser(choosenEvents);
    
    console.log(`findUser: ${events}`);
    // console.log(`events: ${events}`);
    res.json(events);

    // const arrayOfObjectsOfChoosenEvents = await Event.find({
    //   _id: findUser.choosenEvents,
    // });
    // console.log(arrayOfObjectsOfChoosenEvents);

    // const payload = {
    //   id: findUser[0]._id,
    //   name: findUser[0].name,
    //   email: findUser[0].email,
    //   role: findUser[0].role,

    //   choosenEvents: arrayOfObjectsOfChoosenEvents,
    // };

    // res.json(payload); // choosen events ids inclus in userDetails
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

///4- the user select/choose an event //////////////////////////////////////////////////////////////////

Router.put(`/chooseEvent`, async (req, res) => {
  const { id_User, id_Event } = req.body;
  // console.log(req.body)
  try {
    const findUser = await User.find({ _id: id_User }); //findUser is an array
    // console.log(`findUser1`,findUser)
    if (findUser[0].choosenEvents.indexOf(id_Event) !== -1)
      return res.status(401).json({ msg: `This event is already selected!` });
    findUser[0].choosenEvents.push(id_Event);
    // console.log(`findUser2array`,findUser[0].choosenEvents)

    await User.findByIdAndUpdate(id_User, {
      choosenEvents: findUser[0].choosenEvents,
    });
    // console.log(`findUser after update`,findUser[0])

    res.status(200).json(findUser[0].choosenEvents);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

///5- the user unSelect/unChoose an event

Router.put(`/unChooseEvent`, async (req, res) => {
  const { id_User, id_Event } = req.body;

  try {
    const findUser = await User.find({ _id: id_User }); //findUser is an array
    let choosenEventsIdsArray = findUser[0].choosenEvents;

    if (choosenEventsIdsArray.indexOf(id_Event) == -1)
      return res.status(404).json({ msg: `This event is not selected!` });

    choosenEventsIdsArray = choosenEventsIdsArray.filter(
      (id_el) => id_el != id_Event
    );

    await User.findByIdAndUpdate(id_User, {
      choosenEvents: choosenEventsIdsArray,
    });
    res.status(200).json(choosenEventsIdsArray);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

module.exports = Router;
