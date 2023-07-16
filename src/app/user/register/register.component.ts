import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import{DEFAULT_DOMAINS} from '../../shared/constants'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  domains =  DEFAULT_DOMAINS
  signUpUsers : any[] = []
signUpObj: any = {
  Name: "",
  email: "",
  password: ""
}

OnSignUp(name: HTMLInputElement,email: HTMLInputElement, pass: HTMLInputElement, RePass: HTMLInputElement){
  this.signUpUsers.push(this.signUpObj)
  localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers))
  name.value = ""
  email.value = ""
  pass.value = ""
  RePass.value = ""
}


}
