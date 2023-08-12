const { validationResult } = require("express-validator");
const City = require("../models/City.model");

class CityController {
  async create(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Некорректный запрос", errors });
      }

      const { name } = req.body;

      const city = await new City({ name, user: req.user.id });

      await city.save();
      return res.json({ message: "Город добавлен", city });
    } catch (error) {
      console.log("C R E A T E", error);
      return res.send({ message: "Server error" });
    }
  }

  async get(req, res) {
    try {
      const city = await City.findOne({ user: req.user.id });

      return res.json({ city });
    } catch (error) {
      console.log("G E T C I T Y", error);
      return res.send({ message: "Server error" });
    }
  }
}

module.exports = new CityController();
