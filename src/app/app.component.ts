import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Nav/navbar/navbar.component';
import { ThemeSwitcherComponent } from './Utils/theme-switcher/theme-switcher.component';
import { FooterComponent } from './Nav/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ThemeSwitcherComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if there's a fragment in the URL
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          // Scroll to the fragment
          const element = document.getElementById(tree.fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          // No fragment; scroll to the top
          window.scrollTo(0, 0);
        }
      }
    });
  }
  

}
