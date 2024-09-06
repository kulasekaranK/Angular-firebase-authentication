import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  users:any = null;
  createdAt:any;
  lastLoginAt:any;


  constructor(private authService:AuthService, private router:Router){
    this.authService.user$.subscribe(user=>{
      this.users = user;
     const createdAtTimeStamp =parseInt(this.users?.reloadUserInfo.createdAt);
     this.createdAt = new Date(createdAtTimeStamp);
     const lastLoginAtTimeStamp = parseInt(this.users?.reloadUserInfo.lastLoginAt);
     this.lastLoginAt = new Date(lastLoginAtTimeStamp);

     
    })
    console.log(this.users) 
  }
  signOut(){
    this.authService.singOut();
    this.router.navigate(['/login'])
   
  }
}
