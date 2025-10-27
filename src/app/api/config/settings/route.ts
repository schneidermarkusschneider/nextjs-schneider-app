import { NextResponse } from 'next/server';
import { ConfigService } from '@/lib/services/ConfigService';

const service = new ConfigService();

export async function GET() {
  const result = service.getConfiguration();
  return NextResponse.json(result);
}
