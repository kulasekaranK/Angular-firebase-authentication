import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideFirebaseApp} from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from './environments/environment.prod';
import { provideAuth} from '@angular/fire/auth'
import { getAuth } from 'firebase/auth';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routes),
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideAuth(()=>getAuth())
    
    
  ]
})
  .catch((err) => console.error(err));
