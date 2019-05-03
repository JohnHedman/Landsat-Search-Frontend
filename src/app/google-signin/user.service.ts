import { Injectable } from '@angular/core';
import { User } from '../menu-toolbar/menu-toolbar.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userNames: User[] = [
    { name: 'John' },
    { name: 'Hamer' },
    { name: 'Werpy' },
    { name: 'Jacob' },
    { name: 'Jamison' },
    { name: 'Gamradt' }
  ];

  currentUser: User = this.userNames[3];

  constructor() { }
}
