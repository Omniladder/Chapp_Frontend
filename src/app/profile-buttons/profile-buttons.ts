import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-buttons',
  imports: [],
  templateUrl: './profile-buttons.html',
  styleUrl: './profile-buttons.css'
})
export class ProfileButtons {
  private router = inject(Router)


  goToHome(){
    this.router.navigate(['/login']);
  }
}
