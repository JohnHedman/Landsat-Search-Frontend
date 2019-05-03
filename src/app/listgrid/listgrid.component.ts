import { Component, OnInit, Input } from '@angular/core';
import { SceneItem } from '../scene-item/scene-item.model';

@Component({
  selector: 'app-listgrid',
  templateUrl: './listgrid.component.html',
  styleUrls: ['./listgrid.component.css']
})
export class ListgridComponent implements OnInit {
  @Input() scene: SceneItem;

  constructor() { }

  ngOnInit() {
    console.log(this.scene);
  }
  
}
