const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Validate = require('../utils/validator');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
})

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    let users = await User.find({ username: body.username });
    if (users.length)
      return res.status(400).json({ message: `Username ${body.username} is taken.` });

    users = await User.find({ email: body.email });
    if (users.length)
      return res.status(400).json({ message: 'User with this email already exists.' });

    if (!Validate.email(body.email))
      return res.status(400).json({ message: 'Please provide a valid email address.' });

    if (!Validate.phone(body.phoneNumber))
      return res.status(400).json({ message: 'Please provide a valid phone number.' });

    const user = new User(body);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

router.put('/:id', getUser, async (req, res) => {
  try {
    const { body } = req;
    let users = await User.find({ username: body.username, _id: { $ne: req.params.id } });
    if (users.length)
      return res.status(400).json({ message: `Username ${body.username} is taken.` });

    users = await User.find({ email: body.email, _id: { $ne: req.params.id } });
    if (users.length)
      return res.status(400).json({ message: 'User with this email already exists.' });

    if (!Validate.email(body.email))
      return res.status(400).json({ message: 'Please provide a valid email address.' });

    if (!Validate.phone(body.phoneNumber))
      return res.status(400).json({ message: 'Please provide a valid phone number.' });

    res.user.username = body.username;
    res.user.email = body.email;
    res.user.phoneNumber = body.phoneNumber;
    res.user.skillsets = body.skillsets;
    res.user.hobby = body.hobby;
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'User Deleted.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found.' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user
  next();
}

module.exports = router;