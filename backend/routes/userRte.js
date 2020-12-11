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

Router.post(`/profile`, async (req, res) => {
  const { id } = req.body;
  try {
    const fUser = await User.findById(id);

    const choosenEventsD = await Event.find({ _id: fUser.choosenEvents });
    // console.log(choosenEventsD);
    // const payload = {
    //   id: fUser.id,
    //   name: fUser.name,
    //   detailChoosenEvents : choosenEventsD,
    // }
    res.status(200).json(choosenEventsD);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
});

///4- the user select/choose an event //////////////////////////////////////////////////////////////////

Router.put(`/chooseEvent`, async (req, res) => {
  const { idUser, idEvent } = req.body;
  // console.log(req.body);

  try {
    const findUser = await User.find({ _id: idUser }); //findUser is an array

    // if (findUser[0].choosenEvents.indexOf(idEvent) !== -1)
    //   return res.json({ msg: `This event is already selected!` });
    findUser[0].choosenEvents.push(idEvent);

    await User.findByIdAndUpdate(idUser, {
      choosenEvents: findUser[0].choosenEvents,
    });

    const payload = {
      id: findUser[0]._id,
      name: findUser[0].name,
      email: findUser[0].email,
      role: findUser[0].role,
      img: findUser[0].img,
      choosenEvents: findUser[0].choosenEvents,
      phoneNumber: findUser[0].phoneNumber,
    };

    res.json(payload);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

///5- the user unSelect/unChoose an event

Router.put(`/unChooseEvent`, async (req, res) => {
  const { idUser, idEvent } = req.body;

  try {
    const findUser = await User.find({ _id: idUser }); //findUser is an array
    let choosenEventsIdsArray = findUser[0].choosenEvents;

    // if (choosenEventsIdsArray.indexOf(idEvent) == -1)
    //   return res.json({ msg: `This event is not selected!` });

    choosenEventsIdsArray = choosenEventsIdsArray.filter(
      (id_el) => id_el != idEvent
    );

    await User.findByIdAndUpdate(idUser, {
      choosenEvents: choosenEventsIdsArray,
    });

    const payload = {
      id: findUser[0]._id,
      name: findUser[0].name,
      email: findUser[0].email,
      role: findUser[0].role,
      img: findUser[0].img,
      choosenEvents: choosenEventsIdsArray,
      phoneNumber: findUser[0].phoneNumber,
    };

    res.json(payload);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});
// get user by ID

Router.get("/getUserById/:id", async (req, res) => {
  const { id } = req.params;
  // console.log("id", req.params);
  try {
    const user = await User.findById(id);
    // console.log("user", user);
    res.json({ name: user.name , id: id });
  } catch (error) {
    console.error(error);
    res.json(error);
    
  }
});


module.exports = Router;
