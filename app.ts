import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import {exec} from 'child_process';

dotenv.config();

export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Bonjour depuis le serveur Express!');
});

app.post  ('/webhook/docker', (req: Request, res: Response) => {
  exec('./updateContainer.sh', (err, stdout, stdrr) => {
    if(err) {
      console.log(err);
    }
  })
})

const PORT = process.env.PORT || 3000;

export const server = app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
