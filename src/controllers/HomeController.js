import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'Miranda@gmail.com',
      idade: 45,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
