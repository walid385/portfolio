import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ThemeSwitcherComponent } from '../../Utils/theme-switcher/theme-switcher.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, ThemeSwitcherComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}

