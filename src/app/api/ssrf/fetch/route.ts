import { NextRequest, NextResponse } from 'next/server';
import { SSRFService } from '@/lib/services/SSRFService';

const service = new SSRFService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = await service.fetchRemoteResource(body.url);
  return NextResponse.json(result);
}
