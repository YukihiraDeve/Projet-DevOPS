import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Bonjour depuis le serveur Express!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));

