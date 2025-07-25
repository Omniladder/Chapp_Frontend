import { Component, inject, Input } from '@angular/core';
import { ProfileModal } from '../profile-modal/profile-modal';

import { Router } from '@angular/router';

@Component({
  selector: 'friend-modal',
  imports: [ ProfileModal],
  templateUrl: './friend-modal.html',
  styleUrl: './friend-modal.css'
})
export class FriendModal {

  private router = inject(Router)

  // Data Variables
  @Input() chain!: number;
  @Input() missedMessages!: number;
  @Input() name!: string
  @Input() achievements?: string[];



  goToChat(){
    this.router.navigate(['/chat']);
  }

}
