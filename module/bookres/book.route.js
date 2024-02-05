const router = require("express").Router();
const bookcontroller = require("./book.controller");
const { validate } = require("./book.validator");
router.get((req, res, next) => {
  result = bookcontroller.get();
  res.json({ msg: result });
});
router.get("/", async (req, res, next) => {
  result = await bookcontroller.getByid(req.params.id);
  res.json({ msg: result });
});
router.post("/", validate, async (req, res, next) => {
  result = await bookcontroller.create(req.body);
  res.json({ msg: result });
});
router.put("/:id", async (req, res, next) => {
  result = await bookcontroller.updateByid(req.params.id);
  res.json({ msg: result });
});
router.patch("/:id", async (req, res, next) => {
  result = await bookcontroller.updateByid(req.params.id, req.body);
  res.json({ msg: result });
});
router.delete("/:id", async (req, res, next) => {
  result = await bookcontroller.deleteByid(req.params.id, req.body);
  res.json({ msg: result });
});
module.exports = router;
