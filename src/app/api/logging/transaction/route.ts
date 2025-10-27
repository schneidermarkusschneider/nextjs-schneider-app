import { NextRequest, NextResponse } from 'next/server';
import { LoggingService } from '@/lib/services/LoggingService';

const service = new LoggingService();

export async function POST(request: NextRequest) {
  const transactionData = await request.json();
  const result = service.processTransactionLogging(transactionData);
  return NextResponse.json(result);
}
