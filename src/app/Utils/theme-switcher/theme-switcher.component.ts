import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') ?? 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme(event: Event) {
    const input = event.target as HTMLInputElement;
    const theme = input.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
