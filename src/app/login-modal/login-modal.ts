import { Component } from '@angular/core';
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login-modal',
  imports: [InputTextModule, PasswordModule, FormsModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css'
})
export class LoginModal {
  username: string = ''
  password: string = ''
}
