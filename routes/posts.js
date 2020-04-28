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

replaceOnePost = (req, res) => {
  response = {
    "_id": "5e9ed92a3c9c34a2d807f7ea",
    "id": 14,
    "__v": 0,
    "body": "string",
    "title": "string",
    "userId": 10
  }

  res.status(200).send(response);
}

updatePost = (req, res) => {
  response = {
    "n": 1,
    "nModified": 0,
    "opTime": {
      "ts": "6818460289789329409",
      "t": 139
    },
    "electionId": "7fffffff000000000000008b",
    "ok": 1,
    "operationTime": "6818460289789329409",
    "$clusterTime": {
      "clusterTime": "6818460289789329409",
      "signature": {
        "hash": "AAAAAAAAAAAAAAAAAAAAAAAAAAA=",
        "keyId": 0
      }
    }
  }
  res.status(200).send(response);
}

deletePost = (req, res) => {
  response = 'OK';
  res.status(200).send(response);
  //204 if not successfull
}


module.exports = {
  getAllPosts: getAllPosts,
  addPost: addPost,
  getOnePost: getOnePost,
  replaceOnePost: replaceOnePost,
  updatePost: updatePost,
  deletePost: deletePost
} 