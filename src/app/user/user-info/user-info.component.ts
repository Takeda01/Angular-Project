import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  CurrentPatient: User | null = null;
constructor(private AuthService: AuthService) {
  
}
  ngOnInit(): void {
    this.AuthService.currentUser$.subscribe((user) => {
      this.CurrentPatient = user;
    });
  }
  OnLogOut(){
    this.AuthService.LogOut()
  }
}
