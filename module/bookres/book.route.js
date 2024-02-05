const router = require("express").Router();
const bookcontroller = require("./book.controller");
router.get((req, res, next) => {
  result = bookcontroller.get();
  res.json({ msg: result });
});
router.get((req, res, next) => {
  result = bookcontroller.getByid(req.params.id);
  res.json({ msg: result });
});
router.post((req, res, next) => {
  result = bookcontroller.create(req.body);
  res.json({ msg: result });
});
router.put((req, res, next) => {
  result = bookcontroller.updateByid(req.params.id);
  res.json({ msg: result });
});
router.patch((req, res, next) => {
  result = bookcontroller.updateByid(req.params.id);
  res.json({ msg: result });
});
router.delete((req, res, next) => {
  result = bookcontroller.deleteByid(req.params.id);
  res.json({ msg: result });
});
module.exports = router;
