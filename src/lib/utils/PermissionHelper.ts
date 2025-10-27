export class PermissionHelper {
  filterUsersByRole(role: string) {
    return { filter: role };
  }

  checkDocumentAccess(docId: string, claims: any) {
    return true;
  }
}
