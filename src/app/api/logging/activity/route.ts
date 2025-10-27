import { NextRequest, NextResponse } from 'next/server';
import { LoggingService } from '@/lib/services/LoggingService';

const service = new LoggingService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = service.logUserAction(body.action);
  return NextResponse.json(result);
}
