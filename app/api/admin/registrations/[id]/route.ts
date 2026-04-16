import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const key = req.headers.get('x-admin-key');
    if (key !== 'noor') {
        return NextResponse.json({ error: 'Unauthorized. Invalid admin key.' }, { status: 401 });
    }

    try {
        const { id } = await params;
        await pool.query('DELETE FROM hai_registrations WHERE id = ?', [id]);
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const key = req.headers.get('x-admin-key');
    if (key !== 'noor') {
        return NextResponse.json({ error: 'Unauthorized. Invalid admin key.' }, { status: 401 });
    }

    try {
        const { id } = await params;
        const { teamName, memberCount, members } = await req.json();

        if (!teamName || memberCount < 2 || memberCount > 4 || !members) {
            return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
        }

        await pool.query(
            'UPDATE hai_registrations SET team_name = ?, member_count = ?, members_data = ? WHERE id = ?',
            [teamName, memberCount, JSON.stringify(members), id]
        );
        return NextResponse.json({ success: true });
    } catch (err: any) {
        if (err.code === 'ER_DUP_ENTRY') {
            return NextResponse.json({ error: 'Team name already taken' }, { status: 400 });
        }
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
