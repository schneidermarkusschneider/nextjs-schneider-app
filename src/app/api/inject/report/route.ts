import { NextRequest, NextResponse } from 'next/server';
import { InjectionService } from '@/lib/services/InjectionService';

const service = new InjectionService();

export async function POST(request: NextRequest) {
  const reportParams = await request.json();
  const result = service.initiateReportGeneration(reportParams);
  return NextResponse.json(result);
}
