import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm!: FormGroup;
  key = environment.emailJSKey;
  serviceId = environment.mailService;
  templateId = environment.templateId;
  private _snackBar = inject(MatSnackBar);
  loading: boolean = false

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    })
  }

  onSubmit = async (): Promise<void> => {
    if (this.contactForm.valid) {
      this.loading = true;
      try {
        emailjs.init(this.key);
        const formData = this.contactForm.value;
        const response = await emailjs.send(this.serviceId, this.templateId, {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        });

        this._snackBar.open('Message sent successfully', '', { duration: 5000 });
        this.contactForm.reset();
      } catch (error) {
        this._snackBar.open('Failed to send message. Please try again.', '', {
          duration: 5000,
        });
      } finally {
        this.loading = false; // Stop loading
      }
    } else {
      this.contactForm.markAllAsTouched()
    }
  }
}
