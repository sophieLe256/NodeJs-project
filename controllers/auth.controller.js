import { db } from "../db.js";
import bcrypt from "bcrypt";

class AuthController {
  register(req, res) {
    const checkExistUserQuery = "SELECT * FROM users WHERE Email = ?";
    db.query(checkExistUserQuery, (err, data) => {
      res.json(err || data);
    });
  }

  login(req, res) {
    res.json("Hi From API");
  }

  hashPassword(plainPassword) {
    return bcrypt.hash(plainPassword, 10);
  }

  comparePassword(plainPassword, hash) {
    return bcrypt.compare(plainPassword, hash);
  }
}

export default new AuthController();
