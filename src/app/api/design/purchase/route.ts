import { NextRequest, NextResponse } from 'next/server';
import { DesignService } from '@/lib/services/DesignService';

const service = new DesignService();

export async function POST(request: NextRequest) {
  const cartData = await request.json();
  const result = service.initiatePurchaseFlow(cartData);
  return NextResponse.json(result);
}
