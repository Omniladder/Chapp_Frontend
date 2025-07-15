import { Component, inject } from '@angular/core';
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-modal',
  imports: [InputTextModule, PasswordModule, FormsModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css'
})
export class LoginModal {

  private router = inject(Router)

  username: string = ''
  password: string = ''


  goToHome(){
    this.router.navigate(['/home']);
  }

  goToCreate(){
    this.router.navigate(['/creation']);
  }
}
