import { NextRequest, NextResponse } from 'next/server';
import { CryptoService } from '@/lib/services/CryptoService';

const service = new CryptoService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = service.initiateSecureStorage(body.data, body.metadata || {});
  return NextResponse.json(result);
}
