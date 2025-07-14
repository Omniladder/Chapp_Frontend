import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsiteHeader } from './website-header/website-header';
import { LoginModal } from './login-modal/login-modal';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WebsiteHeader, LoginModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Chapp');
}
