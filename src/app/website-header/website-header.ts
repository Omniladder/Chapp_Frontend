import { Component, inject, Input, TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { ProfileButtons } from '../profile-buttons/profile-buttons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'website-header',
  imports: [ProfileButtons, CommonModule],
  templateUrl: './website-header.html',
  styleUrl: './website-header.css'
})
export class WebsiteHeader {

  private router = inject(Router)

  @Input() rightSide?: TemplateRef<any>;
  @Input() showLogo?: boolean;


  goToHome(){
    this.router.navigate(['/home']);
  }

}
