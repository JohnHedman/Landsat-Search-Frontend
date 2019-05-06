import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MouseEvent } from '@agm/core';

export interface Coordinates {
  longitude: number;
  latitude: number;
}

@Component({
  selector: 'app-google-map',
  styleUrls: ['./google-map.component.css'],
  templateUrl:  './google-map.component.html'
})
export class GoogleMapComponent  {
  // Initial Zoom of Map
  zoom = 8;

  // Initial Center of Map
  @Input() coordinates: Coordinates;
  @Output() coordinatesChange = new EventEmitter<Coordinates>();

  mapClicked($event: MouseEvent) {
    this.coordinates = {
      latitude: $event.coords.lat,
      longitude: $event.coords.lng
    };

    this.coordinatesChange.emit(this.coordinates);
  }
}
