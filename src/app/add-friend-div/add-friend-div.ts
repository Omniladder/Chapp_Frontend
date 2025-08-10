import { Component, Input } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'add-friend-div',
  imports: [],
  templateUrl: './add-friend-div.html',
  styleUrl: './add-friend-div.css'
})
export class AddFriendDiv {

  constructor(private authService: AuthService){}

  @Input() fname! : string;
  @Input() lname! : string;
  @Input() username!: string;
  @Input() id! : number;
  @Input() isFoF! : boolean;

  async addFriend(): Promise<void> {

    console.log("Test");
    console.log("User Id: ", this.id)
    await this.authService.checkSession();
    await fetch('/api/addFriend', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        friendID: this.id
      })
    })
  }

  get name(): string {
    return `${this.fname} ${this.lname}`;
  }

}
