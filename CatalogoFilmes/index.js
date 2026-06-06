import express from 'express';
import { filmeROUTER } from './src/Routes/filme.route.js';

const app = express();

app.use(express.json());

app.use('/filmes', filmeROUTER);

app.listen(3003);
