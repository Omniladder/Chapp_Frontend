import { Component } from '@angular/core';
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";

@Component({
  selector: 'login-modal',
  imports: [InputTextModule, PasswordModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css'
})
export class LoginModal {

}
