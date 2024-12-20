import { Component } from '@angular/core';
import { ContactMessage } from '../../models/models.contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  model: ContactMessage;

  constructor(
  ) {
    this.model = {
      name: '',
      email: '',
      message: ''
    };
  }

   onFormSubmit() {




}

}
