import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/types/user';
import { Subject } from '../../types/subject';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  CurrentPatient: User | null = null;
  list: Subject[] = []
constructor(private AuthService: AuthService, private userService: UserService) {
  
}
  ngOnInit(): void {
    this.AuthService.currentUser$.subscribe((user) => {
      this.CurrentPatient = user;
      this.list = this.userService.history
    });
  }
  OnLogOut(){
    this.AuthService.LogOut()
  }
}
