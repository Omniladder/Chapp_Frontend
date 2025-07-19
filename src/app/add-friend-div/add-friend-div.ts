import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-friend-div',
  imports: [],
  templateUrl: './add-friend-div.html',
  styleUrl: './add-friend-div.css'
})
export class AddFriendDiv {

  @Input() name! : string;
  @Input() isFoF! : boolean;
}
