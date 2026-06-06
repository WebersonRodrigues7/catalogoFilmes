import { Router } from 'express';
import {
  DELETEFilmes,
  GETFilmes,
  POSTFilmes,
  UPDATEFilme,
} from '../Controllers/filme.controller.js';

export const filmeROUTER = Router();

filmeROUTER.get('/', GETFilmes);

filmeROUTER.post('/', POSTFilmes);

filmeROUTER.delete('/:id', DELETEFilmes);

filmeROUTER.put('/:id', UPDATEFilme);
