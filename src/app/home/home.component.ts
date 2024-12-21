import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from '../contact/contact/contact.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, MainComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
