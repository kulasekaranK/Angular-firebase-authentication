import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  email = '';
  message = '';
  constructor(private authService: AuthService, private cdr:ChangeDetectorRef) {}

  onsend() {
    this.authService.sendResetLink(this.email)
    .then(() => {
      this.message = "Password reset link send Successfully, please cheack your inbox!"
      setTimeout(()=>{
        this.message=""
      },5000)
     
    })
    .catch(()=>{
      this.message = "Faild to send reset link, please enter valied email!"
     
    }
    )
  }
}
