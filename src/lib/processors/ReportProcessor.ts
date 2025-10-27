export class ReportProcessor {
  loadTemplate(params: any): string {
    const templates: Record<string, string> = {
      'user_report': 'SELECT * FROM users WHERE role = :role',
      'custom': params.template || ''
    };
    return templates[params.type || 'user_report'];
  }

  buildQuery(template: string, params: any) {
    const filterValue = params.filter || '';
    let sql: string;

    if (params.type === 'custom') {
      sql = template.replace(':filter', filterValue);
    } else {
      sql = `SELECT * FROM users WHERE role = '${params.role || 'user'}' AND name LIKE '%${filterValue}%'`;
    }

    return { sql, params };
  }
}
