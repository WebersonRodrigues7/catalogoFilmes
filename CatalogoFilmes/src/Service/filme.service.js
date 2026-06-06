import { prisma } from '../lib/prisma.js';

export async function getAll() {
  const getAllFilmes = await prisma.filmes.findMany();

  return getAllFilmes;
}

export async function createFilme(
  nome,
  nota,
  descricao,
  data_lancamento,
  genero,
  horario,
) {
  const createnewFilme = await prisma.filmes.create({
    data: {
      nome: nome,
      nota: nota,
      descricao: descricao,
      data_lancamento: data_lancamento,
      genero: genero,
      horario: horario,
    },
  });

  return createnewFilme;
}

export async function deleteFilme(id) {
  const filmeDeleted = await prisma.filmes.delete({
    where: { id: Number(id) },
  });

  return filmeDeleted;
}

export async function updateFilme(
  nome,
  nota,
  descricao,
  data_lancamento,
  genero,
  horario,
  id,
) {
  const updatedFilme = await prisma.filmes.update({
    where: { id: Number(id) },
    data: {
      nome: nome,
      nota: nota,
      descricao: descricao,
      data_lancamento: data_lancamento,
      genero: genero,
      horario: horario,
    },
  });

  return updatedFilme;
}
