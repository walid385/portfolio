import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from '../contact/contact/contact.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, MainComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
