const express = require("express");
const router = express.Router();
const user = require("./models/user");
const bcrypt = require("bcryptjs");
const constants = require("./constant");
const jwt = require("./jwt");

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  let result = await user.findOne({ where: { username: username } });
  if (result != null) {
    if (bcrypt.compareSync(password, result.password)) {
      const payload = { username, level: "normal" };
      const token = jwt.sign(payload);
      res.json({
        result: constants.kResultOk,
        token,
        username,
        message: JSON.stringify(result),
      });
    } else {
      res.json({ result: constants.kResultNok, message: "Incorrect password" });
    }
  } else {
    res.json({ result: constants.kResultNok, message: "Incorrect username" });
  }
});

router.get("/profile", jwt.verify, async (req, res) => {
  const { username } = req;
  const payload = { username, level: "normal" };
  const token = jwt.sign(payload);
  res.json({
    result: "ok",
    user: {
      token,
      username,
      firstname: "Chaiyasit",
      lastname: "T.",
      email: "chaiyasit.t@codemobiles.com",
      image: "/default_image.jpg",
    },
  });
});

// Register
router.post("/register", async (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    let result = await user.create(req.body);
    res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }

  // Promise without async/await
  // user.create(req.body).then(result=>{
  //   res.json({result: constants.kResultOk, message: JSON.stringify(result)})
  // })
});

// Query all users
router.get("/users", async (req, res) => {
  let result = await user.findAll();
  res.json(result);
});

module.exports = router;
