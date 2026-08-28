import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json({ error: 'Name, phone and service are required.' }, { status: 400 });
    }

    await db.contactEnquiry.create({
      data: { name, phone, email: email || '', service, message: message || '' },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}