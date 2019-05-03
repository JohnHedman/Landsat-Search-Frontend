import { Component, OnInit } from '@angular/core';
import { UserService } from '../google-signin/user.service';

export interface User {
  name: string;
  favorites?: string[];
}

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})
export class MenuToolbarComponent implements OnInit {
  userNames: User[];

  currentUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userNames = this.userService.userNames;
    this.currentUser = this.userService.currentUser;
  }

  login(user: string) {
    this.userService.currentUser.name = user;
  }

}
