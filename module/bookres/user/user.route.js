const router = require("express").Router();
const usercontroller = require("./user.controller");
const { validate } = require("./user.validator");
router.get("/", async (req, res, next) => {
  result = await usercontroller.get();
  res.json({ msg: result });
});
router.get("/", async (req, res, next) => {
  result = await usercontroller.getByid(req.params.id);
  res.json({ msg: result });
});
router.post("/", validate, async (req, res, next) => {
  result = await usercontroller.create(req.body);
  res.json({ msg: result });
});
router.put("/:id", async (req, res, next) => {
  result = await usercontroller.updateByid(req.params.id, req.body);
  res.json({ msg: result });
});
router.patch("/:id", async (req, res, next) => {
  result = await usercontroller.updateByid(req.params.id, req.body);
  res.json({ msg: result });
});
router.delete("/:id", async (req, res, next) => {
  result = await usercontroller.deleteByid(req.params.id);
  res.json({ msg: result });
});
module.exports = router;
