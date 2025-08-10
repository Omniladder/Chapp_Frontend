import { ChangeDetectorRef, Component } from '@angular/core';
import { WebsiteHeader } from '../website-header/website-header';
import { ProfileButtons } from '../profile-buttons/profile-buttons';
import { FriendModal } from '../friend-modal/friend-modal';
import { CommonModule } from '@angular/common';

type Friend = {
  fname: string;
  lname: string;
  username: string;
}

type FriendRes = {
  data: Friend[];
}

@Component({
  selector: 'app-home-screen',
  imports: [WebsiteHeader, ProfileButtons, FriendModal, CommonModule],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.css'
})
export class HomeScreen {

  constructor(private cdr: ChangeDetectorRef){}

  //Friend Information
  friendName!: string;
  numMissed!: number;
  currentChain!: number;
  achievements!: string[];

  friends! : Friend[];

  async ngOnInit():Promise<void> {
    await this.getFriends();
  }

  async getFriends(){
    let response = await fetch('/api/getFriends',{
      method: 'GET',
      credentials: 'include'
    })
    if (!response.ok) throw new Error('Failed to load friends');

    let json = (await response.json());
    this.friends = json.data || [];
    console.log("Friends ", this.friends);
    this.cdr.detectChanges();
  }

}




