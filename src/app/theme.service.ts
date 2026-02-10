import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme = signal<boolean>(false);

  constructor() {
    // Sync with body class for global styles
    effect(() => {
      const isDark = this.isDarkTheme();
      if (isDark) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    });
  }

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
  }
}
