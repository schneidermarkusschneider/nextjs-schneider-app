import { NextRequest, NextResponse } from 'next/server';
import { SSRFService } from '@/lib/services/SSRFService';

const service = new SSRFService();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = await service.processWebhookRequest(body.webhook_url, body.payload || {});
  return NextResponse.json(result);
}
