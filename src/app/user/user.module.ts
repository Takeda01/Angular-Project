import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserRoutingModule } from './user-routing.module';
import { EmailValidator, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
 
    
    
  ],
  exports: [
    RegisterComponent
  ]
})
export class UserModule { }
