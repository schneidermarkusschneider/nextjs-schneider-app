import { NextRequest, NextResponse } from 'next/server';
import { DesignService } from '@/lib/services/DesignService';

const service = new DesignService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = service.processPasswordReset(body.user_id, body.new_password, body.token || '');
  return NextResponse.json(result);
}
