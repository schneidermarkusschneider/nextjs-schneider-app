import { NextRequest, NextResponse } from 'next/server';
import { InjectionService } from '@/lib/services/InjectionService';

const service = new InjectionService();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  const results = service.searchDatabase(query);
  return NextResponse.json(results);
}
