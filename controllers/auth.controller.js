import { db } from "../db.js";
import bcrypt from "bcrypt";

class AuthController {
  register(req, res) {
    const checkExistUserQuery = "SELECT * FROM users WHERE Email = ?";
    db.query(checkExistUserQuery, [req.body.Email], (err, data) => {
      if (err) {
        return res.status(500).json(err);
      } else if (data && data.length > 0) {
        return res.status(409).json("Account already exists");
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPS = bcrypt.hashSync(req.body.Password, salt);

      const queryInsert =
        "INSERT INTO users (FullName, Password, Email, IsAdmin) VALUES (?);";
      const insertValues = [req.body.FullName, hashPS, req.body.Email, false];
      db.query(queryInsert, [insertValues], (err, data) => {
        if (err) {
          return res.status(500).json(err);
        } else {
          res.status(201).json("Register Success");
        }
      });
    });
  }

  login(req, res) {
    const queryCheck = "SELECT * FROM users WHERE Email = ?";
    db.query(queryCheck, [req.body.Email], (err, data) => {
      if (err) {
        return res.status(500).json(err);
      } else if (data && data.length > 0) {
        const rawPassword = req.body.Password;
        const hashPassword = data && data[0]?.Password;
        const isSame = bcrypt.compareSync(rawPassword, hashPassword);
        if (isSame) {
          delete data[0].Password;
          return res.status(200).json(data[0]);
        } else {
          res.status(401).json("Authentication Failed");
        }
      } else {
        return res.status(401).json("Authentication Failed");
      }
    });
  }
}

export default new AuthController();
