class HomeController {
  async index(req, res) {
    res.json({ tudoOK: true });
  }
}

export default new HomeController();
