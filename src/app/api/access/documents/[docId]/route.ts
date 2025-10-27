import { NextRequest, NextResponse } from 'next/server';
import { AccessControlService } from '@/lib/services/AccessControlService';

const service = new AccessControlService();

export async function GET(
  request: NextRequest,
  { params }: { params: { docId: string } }
) {
  const userClaims = request.headers.get('x-user-claims') || '{}';
  const document = service.initiateDocumentRetrieval(params.docId, userClaims);
  return NextResponse.json(document);
}
