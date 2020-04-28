getAllUsers = (req, res) => {
  response = [
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
    }
  ];
  res.status(200).send(response)
};

//code 200 ok? should be 201 created, can you send the code number?
addUser = (req, res) => {
  response = {
    "address": {
      "geo": {
        "lat": 0,
        "lng": 0
      },
      "street": "Liedbergsgatan 22",
      "suite": "Suite 300",
      "city": "Växjö",
      "zipcode": "35232"
    },
    "_id": "5e9ff081619a44002135097a",
    "name": "kalle",
    "username": "Johansson",
    "email": "kalle@live.se",
    "id": 1,
    "__v": 0
  };
  res.status(201).send(response)
};



module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser
} 