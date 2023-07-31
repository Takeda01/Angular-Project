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

OnSignUp(name: HTMLInputElement,email: HTMLInputElement, pass: HTMLInputElement, RePass: HTMLInputElement){
  this.authService.SignUp(name,email,pass,RePass)
}


}
