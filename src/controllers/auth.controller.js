class AuthController {
  login(req, res) {
    res.json("Hi From API");
  }
}

module.exports = new AuthController();
