import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode = false;

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;

    document.body.classList.toggle('dark', this.darkMode);

    localStorage.setItem(
      'theme',
      this.darkMode ? 'dark' : 'light'
    );
  }

  loadTheme(): void {
    const theme = localStorage.getItem('theme');

    this.darkMode = theme === 'dark';

    document.body.classList.toggle(
      'dark',
      this.darkMode
    );
  }
}