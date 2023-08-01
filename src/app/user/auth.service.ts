import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

LoggedUsers: User[] = []
signUpUsers: User[] = [];
private boolSubject = new BehaviorSubject<boolean>(false);
  bool$ = this.boolSubject.asObservable();
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();



  SignUp(name: HTMLInputElement, email: HTMLInputElement, pass: HTMLInputElement, RePass: HTMLInputElement) {
    // Form validation: Ensure fields are not empty
    if (!name.value || !email.value || !pass.value || !RePass.value) {
      alert('Please fill in all the fields.');
      return;
    }

    // Form validation: Ensure password and re-entered password match
    if (pass.value !== RePass.value) {
      alert('Passwords do not match.');
      return;
    }

    // Create a new user object
    const newUser: User = {
      Name: name.value,
      email: email.value,
      password: pass.value,
    };

    // Store the new user object in the array
    this.signUpUsers.push(newUser);

    // Store the updated array in the local storage
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));

    // Clear the input fields after successful sign-up
    name.value = '';
    email.value = '';
    pass.value = '';
    RePass.value = '';
   
      this.router.navigate(['/signin'])
 
   
  }

  LogIn(email: HTMLInputElement, password: HTMLInputElement){
    const IsUserExist = this.signUpUsers.find(m => m.email == email.value && m.password == password.value)
    if (IsUserExist) {
     
      
      this.currentUserSubject.next(IsUserExist);

      
      this.LoggedUsers.push(IsUserExist)
      debugger
    

      this.boolSubject.next(true);
      email.value = ""
      password.value = ""
     
        this.router.navigate(['/home'])
  
      
    }
    else{
      alert("Email or password are incorrect!")
    }
  }
  LogOut(){
    this.boolSubject.next(false);
    this.router.navigate(['/home'])
  }
}
