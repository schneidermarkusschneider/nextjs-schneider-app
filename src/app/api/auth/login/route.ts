import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/services/AuthService';

const service = new AuthService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = service.authenticateUser(body.username, body.password);
  return NextResponse.json(result);
}
