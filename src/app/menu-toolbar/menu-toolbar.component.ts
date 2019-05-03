import { Component, OnInit } from '@angular/core';

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
  userNames: User[] = [
    { name: 'John' },
    { name: 'Hamer' },
    { name: 'Werpy' },
    { name: 'Jacob' },
    { name: 'Jamison' },
    { name: 'Gamradt' }
  ];

  currentUser: User = this.userNames[0];

  constructor() { }

  ngOnInit() {
  }

}
