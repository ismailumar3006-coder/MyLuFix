import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

// Mock user database
let users = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (users.find((u) => u.email === email)) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = { id: users.length + 1, email, passwordHash };

        users.push(newUser);

        return res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}