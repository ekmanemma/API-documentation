getAllPosts = (req, res) => {
  response = 
  [
    {
      "_id": "5e9ffe55619a44002135097c",
      "body": "string",
      "title": "string",
      "userId": 1,
      "id": 839,
      "__v": 0
    }
  ];

  res.status(200).send(response);
};

addPost = (req, res) => {
  response = {
    "_id": "5ea004233075e40021162a5a",
    "body": "string",
    "title": "string",
    "userId": 382,
    "id": 841,
    "__v": 0
  }

  res.status(201).send(response);
};

getOnePost = (req, res) => {
  response = {
    "_id": "5e806d9f42fbde006b6b9ed8",
    "userId": 5,
    "id": 10,
    "title": "string",
    "body": "string",
    "__v": 0
  }

  res.status(200).send(response);
}

module.exports = {
  getAllPosts: getAllPosts,
  addPost: addPost,
  getOnePost: getOnePost
} 