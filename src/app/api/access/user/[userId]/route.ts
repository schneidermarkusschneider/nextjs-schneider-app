import { NextRequest, NextResponse } from 'next/server';
import { AccessControlService } from '@/lib/services/AccessControlService';

const service = new AccessControlService();

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userData = service.getUserData(params.userId);
  return NextResponse.json(userData);
}
