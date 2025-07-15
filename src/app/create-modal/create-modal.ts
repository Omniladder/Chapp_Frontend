import { Component, inject } from '@angular/core';
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'create-modal',
  imports: [InputTextModule, PasswordModule, FormsModule],
  templateUrl: './create-modal.html',
  styleUrl: './create-modal.css'
})
export class CreateModal {

  private router = inject(Router)

  firstname: string = ''
  lastname: string = ''
  username: string = ''
  password: string = ''
  email: string = ''



  goToHome(){
    this.router.navigate(['/home']);
  }

}
