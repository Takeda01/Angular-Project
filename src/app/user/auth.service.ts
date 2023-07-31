import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

LoggedUsers: User[] = []
signUpUsers: User[] = [];
bool:boolean = true
  CurrentuUser!: User; 
Indicator():boolean{
return !this.bool;
}

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
    setInterval(()=> {
      this.router.navigate(['/signin'])
    },1000)
   
  }

  LogIn(email: HTMLInputElement, password: HTMLInputElement){
    const IsUserExist = this.signUpUsers.find(m => m.email == email.value && m.password == password.value)
    if (IsUserExist) {
     
      
        // this.CurrentuUser.Name =IsUserExist.Name
        // this.CurrentuUser.password = IsUserExist.password
        // this.CurrentuUser.email = IsUserExist.email
      
      this.LoggedUsers.push(IsUserExist)
    

      this.bool = true
      email.value = ""
      password.value = ""
      setInterval(()=> {
        this.router.navigate(['/home'])
      },1000)
      
    }
    else{
      alert("Email or password are incorrect!")
    }
  }
  LogOut(){
   this.Indicator()
  }
}
