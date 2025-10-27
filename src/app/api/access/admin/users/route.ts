import { NextRequest, NextResponse } from 'next/server';
import { AccessControlService } from '@/lib/services/AccessControlService';

const service = new AccessControlService();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const role = searchParams.get('role') || '';
  const users = service.processUserListRequest(role);
  return NextResponse.json(users);
}
