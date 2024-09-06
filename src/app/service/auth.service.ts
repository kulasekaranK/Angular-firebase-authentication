import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import {
  GithubAuthProvider,
  sendPasswordResetEmail,
  TwitterAuthProvider,
  User,
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject$.next(user);
    });
  }

  isAuthenticated():boolean {
    return this.userSubject$.value !== null;
    
  }
  registerWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  loginWithFacebook() {
    return signInWithPopup(this.auth, new FacebookAuthProvider());
  }
  loginWithX() {
    return signInWithPopup(this.auth, new TwitterAuthProvider());
  }
  loginWithGithub() {
    return signInWithPopup(this.auth, new GithubAuthProvider());
  }

  sendResetLink(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }
  singOut() {
    signOut(this.auth);
  }
}
