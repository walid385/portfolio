import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeSwitcherComponent } from '../../Utils/theme-switcher/theme-switcher.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, ThemeSwitcherComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent 
{
}

