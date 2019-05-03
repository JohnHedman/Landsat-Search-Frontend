import { Component, OnInit, Input } from '@angular/core';
import { SceneItem } from '../scene-item/scene-item.model';

import { HttpService } from '../scene-catalog/http.service';
import { UserService } from '../google-signin/user.service';

@Component({
  selector: 'app-listgrid',
  templateUrl: './listgrid.component.html',
  styleUrls: ['./listgrid.component.css']
})
export class ListgridComponent implements OnInit {
  @Input() scene: SceneItem;

  constructor(private http: HttpService, private userService: UserService) { }

  ngOnInit() {
    console.log(this.scene);
  }

  onSaveScene() {
    this.http.addFavorites(`?User=${this.userService.currentUser.name}&Scene=${this.scene.id}`);
  }

}
