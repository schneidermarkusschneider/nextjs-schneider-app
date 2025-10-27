import { NextRequest, NextResponse } from 'next/server';
import { IntegrityService } from '@/lib/services/IntegrityService';

const service = new IntegrityService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = await service.processSoftwareUpdate(body.update_url, body.checksum || '');
  return NextResponse.json(result);
}
