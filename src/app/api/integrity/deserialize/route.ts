import { NextRequest, NextResponse } from 'next/server';
import { IntegrityService } from '@/lib/services/IntegrityService';

const service = new IntegrityService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = service.deserializeObject(body.data);
  return NextResponse.json(result);
}
