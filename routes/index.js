const express = require('express')
const router = express.Router()

const users = require('./users.js');
const posts = require('./posts.js');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get("/users", users.getUsers);
router.post("/users", users.postUser);

router.get("/posts", posts.getPosts);
router.post("/posts", posts.postPosts);

// router.get("/:pathParameter", helloWorld.params)

module.exports = router;