import { NextRequest, NextResponse } from 'next/server';
import { ConfigService } from '@/lib/services/ConfigService';

const service = new ConfigService();

export async function POST(request: NextRequest) {
  const backupConfig = await request.json();
  const result = service.initiateBackupProcess(backupConfig);
  return NextResponse.json(result);
}
