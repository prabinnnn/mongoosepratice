const router = require("express").Router();
const bookrouter = require("./");
router.use("/api/v2/book", bookrouter);
module.exports = router;
