import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RecaptchaVerifier, signInWithPhoneNumber, getAuth } from 'firebase/auth';

@Component({
  selector: 'app-login-with-phone',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login-with-phone.component.html',
  styleUrls: ['./login-with-phone.component.css'],
})
export class LoginWithPhoneComponent implements AfterViewInit {
  phoneNumber: string = '';
  verificationCode: string = '';
  recaptchaVerifier!: RecaptchaVerifier;
  isRateLimited: boolean = false;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.initializeRecaptcha();
  }

  initializeRecaptcha() {
    const recaptchaContainer = document.getElementById('recaptcha-container');
    if (recaptchaContainer) {
      this.recaptchaVerifier = new RecaptchaVerifier(
        getAuth(),
        recaptchaContainer
      );
    } else {
      console.error('Recaptcha Container element not found');
    }
  }

  sendVerificationCode() {
 

    const auth = getAuth();
    const appVerifier = this.recaptchaVerifier;

    if (!this.phoneNumber) {
      console.error('Phone number is not provided');
      return;
    }

    signInWithPhoneNumber(auth, this.phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log('Verification code sent');
  
      })
      .catch((error) => {
        console.error('Error during phone sign-in:', error);
      });
  }

  verifyCode() {
    if (window.confirmationResult) {
      window.confirmationResult
        .confirm(this.verificationCode)
        .then((result:any) => {
          const user = result.user;
          console.log('User signed in successfully:', user);
          this.router.navigate(['/home']);
        })
        .catch((error:any) => {
          console.error('Error verifying code:', error);
        });
    } else {
      console.error('No confirmation result found');
    }
  }
}
