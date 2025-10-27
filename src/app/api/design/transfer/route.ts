import { NextRequest, NextResponse } from 'next/server';
import { DesignService } from '@/lib/services/DesignService';

const service = new DesignService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = service.transferMoney(body.from, body.to, body.amount);
  return NextResponse.json(result);
}
