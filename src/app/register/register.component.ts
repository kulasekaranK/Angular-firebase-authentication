import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService
      .registerWithEmail(this.email, this.password)
      .then((res) => {
        console.log('Successfully Stored', res);
        this.router.navigate(['/login']); 
      })
      .catch((error) => {
        console.error('Registration failed', error);
        this.router.navigate(['/register']);
        this.message ="Please Enter Valid Email and Password!" 
      });

    this.email = '';
    this.password = '';
  }
}
