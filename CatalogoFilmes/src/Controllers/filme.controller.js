import {
  createFilme,
  deleteFilme,
  getAll,
  updateFilme,
} from '../Service/filme.service.js';

export async function GETFilmes(req, res) {
  const todosFilmes = await getAll();

  res.json(todosFilmes);
}

export async function POSTFilmes(req, res) {
  const createOneFilme = createFilme(
    req.body.nome,
    req.body.nota,
    req.body.descricao,
    req.body.data_lancamento,
    req.body.genero,
    req.body.horario,
  );

  res.json(createOneFilme);
}
export async function DELETEFilmes(req, res) {
  const deletarFilme = await deleteFilme(req.params.id);

  res.json(deletarFilme);
}

export async function UPDATEFilme(req, res) {
  const updatarFilme = await updateFilme(
    req.body.nome,
    req.body.nota,
    req.body.descricao,
    req.body.data_lancamento,
    req.body.genero,
    req.body.horario,
    req.params.id,
  );

  res.json(updatarFilme);
}
