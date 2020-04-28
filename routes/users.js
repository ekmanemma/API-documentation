getUsers = (req, res) => {
  res.send([
    {
      "address": {
        "geo": {
          "lat": -31.8129,
          "lng": 62.5342
        },
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263"
      },
      "_id": "5e806d9f42fbde006b6b9ec9",
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "__v": 0
    },
  ])
};

//code 200 ok? should be 201 created
postUser = (req, res) => {
  res.send(
    {
      "address": {
        "geo": {
          "lat": 0,
          "lng": 0
        },
        "street": "string",
        "suite": "string",
        "city": "string",
        "zipcode": "string"
      },
      "_id": "5e9ff081619a44002135097a",
      "name": "string",
      "username": "string",
      "email": "string",
      "id": 1,
      "__v": 0
    }
  )
};

module.exports = {
  getUsers: getUsers,
  postUser: postUser
} 