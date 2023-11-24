import request from 'supertest';
import { app } from './app';  // Assurez-vous que le chemin d'importation est correct

describe('GET /', () => {
  it('devrait retourner Bonjour depuis le serveur Express!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Bonjour depuis le serveur Express!');
  });
});
