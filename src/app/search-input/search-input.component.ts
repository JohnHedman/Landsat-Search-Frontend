import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Coordinates } from '../google-map/google-map.component';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})

export class SearchInputComponent {
  @Output() search = new EventEmitter<any>();

  coordinates: Coordinates = {
    latitude: 44.3114,
    longitude: -96.7984
  };

  searchForm = new FormGroup({
    longitude: new FormControl(null, Validators.required),
    latitude: new FormControl(null, Validators.required),
    cloud_cover: new FormControl(null, [Validators.min(0), Validators.max(100)]),
    sun_elevation: new FormControl(null, [Validators.min(0), Validators.max(100)]),
    start_date: new FormControl(),
    end_date: new FormControl()
  });

  onSearch() {
    if (this.searchForm.valid) {
      this.search.emit(this.searchForm.value);
    }
  }
}
