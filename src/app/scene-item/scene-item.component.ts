import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scene-item',
  templateUrl: './scene-item.component.html',
  styleUrls: ['./scene-item.component.css']
})
export class SceneItemComponent implements OnInit {
  @Input() itemName = '';

  constructor() {}

  ngOnInit() {
  }

}
