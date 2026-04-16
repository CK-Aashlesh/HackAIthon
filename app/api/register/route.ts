import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: Request) {
    try {
        const { teamName, memberCount, members } = await req.json();

        if (!teamName || memberCount < 2 || memberCount > 4 || !members) {
            return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
        }

        await pool.query(
            'INSERT INTO hai_registrations (team_name, member_count, members_data) VALUES (?, ?, ?)',
            [teamName, memberCount, JSON.stringify(members)]
        );
        return NextResponse.json({ success: true, message: 'Registration successful' });
    } catch (err: any) {
        if (err.code === 'ER_DUP_ENTRY') {
            return NextResponse.json({ error: 'Team name already taken' }, { status: 400 });
        }
        console.error('Registration error:', err);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
