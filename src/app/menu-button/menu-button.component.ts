import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {
  buttonName = 'Menu';

  // constructor(buttonName) {
  //   this.buttonName = buttonName;
  // }

  ngOnInit() {
  }

}
