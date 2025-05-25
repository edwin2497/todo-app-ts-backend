import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express on Vercel');
});

app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
});
