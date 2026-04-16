import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: Request) {
    const key = req.headers.get('x-admin-key');
    if (key !== 'noor') {
        return NextResponse.json({ error: 'Unauthorized. Invalid admin key.' }, { status: 401 });
    }

    try {
        const [teamCount]: any = await pool.query('SELECT COUNT(*) as count FROM hai_registrations');
        const [visitorCount]: any = await pool.query('SELECT COUNT(*) as count FROM hai_visitors');
        return NextResponse.json({
            teams: teamCount[0].count,
            visitors: visitorCount[0].count
        });
    } catch (err) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
