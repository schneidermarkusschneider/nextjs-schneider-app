import { NextRequest, NextResponse } from 'next/server';
import { LoggingService } from '@/lib/services/LoggingService';

const service = new LoggingService();

export async function POST(request: NextRequest) {
  const eventData = await request.json();
  const result = service.initiateAuditLogging(eventData);
  return NextResponse.json(result);
}
