getPosts = (req, res) => {
  res.send(
    [
      {
        "_id": "5e9ffe55619a44002135097c",
        "body": "string",
        "title": "string",
        "userId": 1,
        "id": 839,
        "__v": 0
      }
    ]
  );
};

postPosts = (req, res) => {
  res.send('works');
};

module.exports = {
  getPosts: getPosts,
  postPosts: postPosts
} 