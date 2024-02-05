const router = require("express").Router();
const usercontroller = require("./user.controller");
const { validate } = require("./user.validator");
router.get("/", async (req, res, next) => {
  try {
    result = await usercontroller.get();
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.get("/", async (req, res, next) => {
  try {
    result = await usercontroller.getByid(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", validate, async (req, res, next) => {
  try {
    result = await usercontroller.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    result = await usercontroller.updateByid(req.params.id, req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    result = await usercontroller.updateByid(req.params.id, req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    result = await usercontroller.deleteByid(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
