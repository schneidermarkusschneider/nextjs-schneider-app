import { NextRequest, NextResponse } from 'next/server';
import { ConfigService } from '@/lib/services/ConfigService';

const service = new ConfigService();

export async function GET(request: NextRequest) {
  const params = Object.fromEntries(request.nextUrl.searchParams);
  const result = service.processDebugRequest(params);
  return NextResponse.json(result);
}
