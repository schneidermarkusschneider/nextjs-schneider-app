import { NextRequest, NextResponse } from 'next/server';
import { SSRFService } from '@/lib/services/SSRFService';

const service = new SSRFService();

export async function POST(request: NextRequest) {
  const importConfig = await request.json();
  const result = await service.initiateDataImport(importConfig);
  return NextResponse.json(result);
}
