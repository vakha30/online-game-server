const { Router } = require("express");

const router = Router();

router.use("/api/auth", require("./auth.routes"));
router.use("/api/city", require("./city.routes"));

module.exports = router;
