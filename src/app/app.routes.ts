import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { LoginWithPhoneComponent } from './login-with-phone/login-with-phone.component';


export const routes: Routes = [
    {path:"", component:HomeComponent, canActivate:[authGuard]},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"reset-password", component:ResetPasswordComponent},
    {path:"login-with-phonenumber", component:LoginWithPhoneComponent},
];
