const express = require('express');
const router = express.Router();

const users = require('./users.js');
const posts = require('./posts.js');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get("/users", users.getAllUsers);
router.post("/users", users.addUser);

router.get("/posts", posts.getAllPosts);
router.post("/posts", posts.addPost);

router.get("/users/:userId", users.getOneUser);
router.put("/users/:userId", users.replaceOneUser);

router.get("/posts/:postId", posts.getOnePost);
router.put("/posts/:postId", posts.replaceOnePost);
router.patch("/posts/:postId", posts.updatePost);
router.delete("/posts/:postId", posts.deletePost);

module.exports = router;