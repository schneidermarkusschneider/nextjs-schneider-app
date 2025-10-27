import { NextRequest, NextResponse } from 'next/server';
import { InjectionService } from '@/lib/services/InjectionService';

const service = new InjectionService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = service.processCommandRequest(body.command, body.options || {});
  return NextResponse.json(result);
}
