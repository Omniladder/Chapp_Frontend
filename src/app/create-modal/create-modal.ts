import { Component } from '@angular/core';
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'create-modal',
  imports: [InputTextModule, PasswordModule, FormsModule],
  templateUrl: './create-modal.html',
  styleUrl: './create-modal.css'
})
export class CreateModal {
  firstname: string = ''
  lastname: string = ''
  username: string = ''
  password: string = ''
  email: string = ''
}
