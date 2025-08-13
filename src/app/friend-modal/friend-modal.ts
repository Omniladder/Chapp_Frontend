import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'friend-modal',
  imports: [],
  templateUrl: './friend-modal.html',
  styleUrl: './friend-modal.css'
})
export class FriendModal {

  private router = inject(Router)

  // Data Variables

  @Input() id!: number;
  @Input() chain!: number;
  @Input() missedMessages!: number;
  @Input() fname!: string;
  @Input() lname!: string;
  @Input() username!: string;
  @Input() achievements?: string[];


  get name(): string {
    return `${this.fname} ${this.lname}`;
  }


  goToChat(){
    this.router.navigate(['/chat'], { queryParams: {friendID: this.id, friendUsername: this.username}});
  }

}
