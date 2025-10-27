import { execSync } from 'child_process';

export class CommandHelper {
  prepareCommand(commandData: string, options: any) {
    if (options.shell_mode) {
      return { cmd: commandData, useShell: true };
    }
    return { cmd: commandData, useShell: false };
  }

  executeSystemCommand(preparedCommand: any) {
    try {
      if (preparedCommand.useShell) {
        const output = execSync(preparedCommand.cmd, { encoding: 'utf-8' });
        return { output, error: '' };
      } else {
        const output = execSync(preparedCommand.cmd, { encoding: 'utf-8', shell: false });
        return { output, error: '' };
      }
    } catch (error: any) {
      return { output: '', error: error.message };
    }
  }
}
