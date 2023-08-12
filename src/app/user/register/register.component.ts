import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import{DEFAULT_DOMAINS} from '../../shared/constants'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  domains =  DEFAULT_DOMAINS
 
constructor( private authService: AuthService) {

  
}
name: string = '';
  email: string = '';
  password: string = '';

  nameTouched: boolean = false;
  emailTouched: boolean = false;
  passwordTouched: boolean = false;

  onFieldBlur(fieldName: string) {
    switch (fieldName) {
      case 'name':
        this.nameTouched = true;
        break;
      case 'email':
        this.emailTouched = true;
        break;
      case 'password':
        this.passwordTouched = true;
        break;
      default:
        break;
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    switch (fieldName) {
      case 'name':
        return this.nameTouched && !this.isValidName(this.name);
      case 'email':
        return this.emailTouched && !this.isValidEmail(this.email);
      case 'password':
        return this.passwordTouched && !this.isValidPassword(this.password);
      default:
        return false;
    }
  }

  isValidName(name: string): boolean {
    return /^[A-Za-z\s]+$/.test(name);
  }

  isValidEmail(email: string): boolean {
  
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  isValidPassword(password: string): boolean {
    return password.length >= 6;
  }

OnSignUp(name: HTMLInputElement,email: HTMLInputElement, pass: HTMLInputElement, RePass: HTMLInputElement){
  this.authService.SignUp(name,email,pass,RePass)
}


}
