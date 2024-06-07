import express, { Request, Response } from 'express';
import db from './models';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch((err: Error) => {
  console.error('Unable to connect to the database:', err);
});
