import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {
        // The lib/db.js already has auto-init code, but we can verify it here
        const connection = await pool.getConnection();

        // Explicitly run a simple query to ensure connection works
        await connection.query('SELECT 1');
        connection.release();

        return NextResponse.json({
            success: true,
            message: 'Database connection verified and tables initialized.'
        });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
