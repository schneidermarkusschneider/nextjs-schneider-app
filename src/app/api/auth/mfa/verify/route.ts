import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/services/AuthService';

const service = new AuthService();

export async function POST(request: NextRequest) {
  const verificationData = await request.json();
  const result = service.initiateMfaVerification(verificationData);
  return NextResponse.json(result);
}
