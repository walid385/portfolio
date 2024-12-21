import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactUsService } from '../../services/contact.service';
import { ContactMessage } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  model: ContactMessage;

  toastType: string | null = null; // null, 'success', or 'error'
  toastMessage: string = '';

  constructor(private contactUsService: ContactUsService) {
    this.model = {
      name: '',
      email: '',
      message: '',
    };
  }

  onFormSubmit() {
    if (!this.model.name || !this.model.email || !this.model.message) {
      // Prevent submission if form validation fails
      this.toastType = 'error';
      this.toastMessage = 'Please fill out all required fields.';
      this.hideToastAfterDelay();
      return;
    }
  
    this.contactUsService.sendContactUsMessage(this.model).subscribe(
      (res: any) => {
        this.toastType = 'success';
        this.toastMessage = 'Message sent successfully.';
        this.resetForm();
        this.hideToastAfterDelay();
      },
      () => {
        // Show a generic error message on failure
        this.toastType = 'error';
        this.toastMessage = 'An error occurred while sending the message. Please try again.';
        this.hideToastAfterDelay();
      }
    );
  }

  onCancel() {
    this.resetForm();
  }
  
  

  resetForm() {
    this.model = {
      name: '',
      email: '',
      message: '',
    };
  
    // Reset the form state via Angular
    const formElement: any = document.querySelector('form');
    if (formElement) {
      formElement.reset(); // Clear all inputs visually
    }
  }
  

  hideToastAfterDelay() {
    setTimeout(() => {
      this.toastType = null; // Hide the toast after 3 seconds
    }, 3000);
  }
}
