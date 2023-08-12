const { Router } = require("express");
const { check } = require("express-validator");
const cityController = require("../controllers/city.controller");
const authMiddleware = require("../middlewars/auth.middleware");

const router = Router();

router.post(
  "/create",
  [
    check(
      "name",
      "Длинна имени должна быть больше 2 и меньше 20 символов"
    ).isLength({ min: 2, max: 15 }),
  ],
  authMiddleware,
  cityController.create
);
router.get("/", authMiddleware, cityController.get);

module.exports = router;
