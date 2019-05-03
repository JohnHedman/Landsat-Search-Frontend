import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-google-map',
  styleUrls: ['./google-map.component.css'],
  templateUrl:  './google-map.component.html'
})

export class GoogleMapComponent  {
  // Initial Zoom of Map
  zoom: number = 8;
  
  // Initial Center of Map
  lat: number = 44.3114;
  lng: number = -96.7984;
  
  mapClicked($event: MouseEvent) {
    this.markers = [];
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
  }
  
  markers: marker[] = []
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}