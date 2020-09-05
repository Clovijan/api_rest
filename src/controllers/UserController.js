import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const { id, nome, email } = await User.create(req.body);
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'nome', 'email'],
      });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      const { nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.useId);
      if (!user) {
        return res.status(400).json({
          errors: [' Usuário não cadastrado!'],
        });
      }
      const { nome, email } = await user.update(req.body);

      return res.json({ nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Falta editar
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.useId);
      if (!user) {
        return res.status(400).json({
          errors: [' Usuário não cadastrado!'],
        });
      }
      const { id, nome, email } = user;
      await user.destroy();

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new UserController();
