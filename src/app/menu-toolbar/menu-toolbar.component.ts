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
  ];

  constructor() { }

  ngOnInit() {
  }

}
