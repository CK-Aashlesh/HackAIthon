import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('remote-addr') || '127.0.0.1';
  try {
    await pool.query('INSERT INTO hai_visitors (ip_address) VALUES (?)', [ip]);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Tracking error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
