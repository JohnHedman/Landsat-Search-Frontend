import { Component, OnInit, Input } from '@angular/core';
import { SceneItem } from './scene-item.model';

@Component({
  selector: 'app-scene-item',
  templateUrl: './scene-item.component.html',
  styleUrls: ['./scene-item.component.css']
})
export class SceneItemComponent implements OnInit {
  @Input() scene : SceneItem;

  constructor() {}

  ngOnInit() {
  }

}
