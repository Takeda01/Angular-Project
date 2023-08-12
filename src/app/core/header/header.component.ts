import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { User } from 'src/app/types/user';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  authenticated: boolean = false;
  Logged: User[] = [];

  constructor(private auth: AuthService) {
    this.auth.bool$.subscribe((value) => {
      this.authenticated = value;
    });
  }
}
