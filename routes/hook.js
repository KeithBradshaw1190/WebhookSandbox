const hookController = require("../controller/hookController")
const express = require("express");
const router = express.Router();


//  Get all books
router.post("/hook",hookController.receiver );


module.exports = router;