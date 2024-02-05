const router = require("express").Router();
const bookrouter = require("../module/bookres/book.route");
const userroute = require("../module/bookres/user/user.route");
router.use("/api/v1/user", userroute);
router.use("/api/v2/book", bookrouter);
module.exports = router;
