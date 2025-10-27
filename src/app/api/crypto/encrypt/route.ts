import { NextRequest, NextResponse } from 'next/server';
import { CryptoService } from '@/lib/services/CryptoService';

const service = new CryptoService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const encrypted = service.processEncryptionRequest(body.data, body.key || 'default');
  return NextResponse.json({ encrypted });
}
