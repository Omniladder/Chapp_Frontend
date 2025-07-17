import { Component } from '@angular/core';
import { WebsiteHeader } from '../website-header/website-header';
import { HomeButton } from '../home-button/home-button';

@Component({
  selector: 'app-chat-screen',
  imports: [WebsiteHeader, HomeButton],
  templateUrl: './chat-screen.html',
  styleUrl: './chat-screen.css'
})
export class ChatScreen {

}
