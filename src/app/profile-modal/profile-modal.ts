import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmPopupModule } from 'primeng/confirmpopup'
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'profile-modal',
  imports: [ConfirmPopupModule],
  providers: [ConfirmationService],
  templateUrl: './profile-modal.html',
  styleUrl: './profile-modal.css'
})
export class ProfileModal {

  constructor(private confirmationService: ConfirmationService) {}
  private router = inject(Router)

  goToLogin(){
    this.router.navigate(['/login']);
  }

  confirmDelete(event: Event) {
        this.confirmationService.confirm({
            target: event.currentTarget as EventTarget,
            message: 'Are you sure you want to delete your account?',
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Delete',
                severity: 'danger'
            },
            accept: () => {
              this.goToLogin();
            },
            reject: () => {
            }
        });
    }

}
