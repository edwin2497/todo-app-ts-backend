import { Request, Response } from 'express';
import { pool } from '../db';

// GET all
export const getTodos = async (_req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM todos ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error('DB Error:', err);
        res.status(500).json({ error: 'Error fetching todos' });
    }
};


// POST create new
export const createTodo = async (req: Request, res: Response) => {
    const { title, completed } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *',
            [title, completed]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error creating todo' });
    }
};