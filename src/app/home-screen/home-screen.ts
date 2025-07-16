import { Component } from '@angular/core';
import { WebsiteHeader } from '../website-header/website-header';
import { ProfileButtons } from '../profile-buttons/profile-buttons';

@Component({
  selector: 'app-home-screen',
  imports: [WebsiteHeader, ProfileButtons],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.css'
})
export class HomeScreen {

}
