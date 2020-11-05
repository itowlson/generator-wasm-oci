import { Language } from './language';

export const golang: Language = {
  templateFolder(): string {
    return 'go';
  },

  templateFiles(): string[] {
    return [
      // '.gitignore',
      // '.vscode/extensions.json',
      // '.vscode/launch.json',
      // '.vscode/settings.json',
      // '.vscode/tasks.json',
    ];
  }
}
