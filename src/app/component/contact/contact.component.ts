import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  send(): void {
    // Placeholder for real submit logic � keep it simple for now
    alert('Thank you! Your message was sent (demo).');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
