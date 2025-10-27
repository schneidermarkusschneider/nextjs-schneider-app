import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/services/AuthService';

const service = new AuthService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = service.processSessionCreation(body, body.remember_me || false);
  return NextResponse.json(result);
}
