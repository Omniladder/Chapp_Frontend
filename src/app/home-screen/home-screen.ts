import { Component } from '@angular/core';
import { WebsiteHeader } from '../website-header/website-header';
import { ProfileButtons } from '../profile-buttons/profile-buttons';
import { FriendModal } from '../friend-modal/friend-modal';

@Component({
  selector: 'app-home-screen',
  imports: [WebsiteHeader, ProfileButtons, FriendModal],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.css'
})
export class HomeScreen {

  //Friend Information
  friendName!: string;
  numMissed!: number;
  currentChain!: number;
  achievements!: string[];


}
