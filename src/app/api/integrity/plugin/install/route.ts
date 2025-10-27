import { NextRequest, NextResponse } from 'next/server';
import { IntegrityService } from '@/lib/services/IntegrityService';

const service = new IntegrityService();

export async function POST(request: NextRequest) {
  const pluginData = await request.json();
  const result = await service.initiatePluginInstallation(pluginData);
  return NextResponse.json(result);
}
