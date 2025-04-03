const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/login', async (req, res) => {
  const { email, password } = req.query;
  const login = await userController.connectUser(email, password);
  if (login)
  {
    res.status(200).send(login);
  }
  else
  {
    res.status(401).send('Invalid credentials');
  }
});

router.get('/users', async (req, res) => {
  const users = await userController.getAllUsers();
  res.send(users);
});

router.get('/user/:id', async (req, res) => {
  const id = req.body.id;
  const user = await userController.getUserById(id);
  res.send(user);
});

router.delete('/user/:id', async (req, res) => {
  console.log('suppression du user..')
  const id = req.params.id;
  const response = await userController.removeUser(id)
  res.send(response);
});

router.post('/user', async (req, res) => {
  console.log("Ajout d'un user..")
  console.log(req.body)
  const lastName = req.body.lastName;
  const firstName = req.body.firstName;
  if (lastName && firstName)
  {
    const response = await userController.addUser(lastName, firstName);
    res.send(response);
  }
  else
  {
    res.send("Merci d'envoyer tous les champs");
  }
});

module.exports = router;
