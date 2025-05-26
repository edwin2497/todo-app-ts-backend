import express, { Request, Response } from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', todoRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Express on Vercel, TypeScript, and PostgresSQL API');
});

app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
});
