import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = "";
  password = "";
  message = "";
  constructor(private authService:AuthService, private router:Router){}

  onLogin(){
    this.authService.loginWithEmail(this.email, this.password)
    .then((res)=>{
      console.log("logged");
      this.message = "";
      this.router.navigate(['/']);

  })
    .catch(()=>{
      this.message = "Invalied Email And Password!";
    })
  }
  onGoogle(){
    this.authService.loginWithGoogle()
    .then((res)=>{
      console.log("logged",res);
      this.router.navigate(['/']);
  });

  }

  onX(){
    this.authService.loginWithX()
    .then((res)=>{
      console.log("logged",res);
      this.router.navigate(['/']);
    });
  }

  onFacebook(){
    this.authService.loginWithFacebook()
    .then((res)=>{
      console.log("logged",res);
      this.router.navigate(['/'])
    
    }
    )
  }
  onGithub(){
    this.authService.loginWithGithub()
    .then((res)=>{
      this.router.navigate(['/'])
    })
    .catch((err)=>console.log("Error:",err)
    )
  }
  

}
