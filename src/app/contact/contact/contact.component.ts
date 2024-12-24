// contact.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactUsService } from '../../services/contact.service';
import { ContactMessage } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  model: ContactMessage;

  toastType: string | null = null; // null, 'success', or 'error'
  toastMessage: string = '';
  
  isLoading: boolean = false; // Loading state

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
  
    this.isLoading = true; // Start loading
    this.contactUsService.sendContactUsMessage(this.model).subscribe(
      (res: any) => {
        this.isLoading = false; // Stop loading on success
        this.toastType = 'success';
        this.toastMessage = 'Message sent successfully.';
        this.resetForm();
        this.hideToastAfterDelay();
      },
      () => {
        this.isLoading = false; // Stop loading on error
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
  
    const formElement: any = document.querySelector('form');
    if (formElement) {
      formElement.reset();
    }

    this.isLoading = false;
  }

  hideToastAfterDelay() {
    setTimeout(() => {
      this.toastType = null;
    }, 3000);
  }
}
