import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: Request) {
    const key = req.headers.get('x-admin-key');
    if (key !== 'noor') {
        return NextResponse.json({ error: 'Unauthorized. Invalid admin key.' }, { status: 401 });
    }

    try {
        const [rows] = await pool.query('SELECT * FROM hai_registrations ORDER BY registration_date DESC');
        return NextResponse.json(rows);
    } catch (err) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
