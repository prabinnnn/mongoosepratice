const router = require("express").Router();
const bookcontroller = require("./book.controller");
const { validate } = require("./book.validator");

router.get("/", async (req, res, next) => {
  try {
    const result = await bookcontroller.get(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result = await bookcontroller.getByid(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.post("/", validate, async (req, res, next) => {
  try {
    const result = await bookcontroller.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const result = await bookcontroller.updateByid(req.params.id, req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const result = await bookcontroller.updateByid(req.params.id, req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await bookcontroller.deleteByid(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
