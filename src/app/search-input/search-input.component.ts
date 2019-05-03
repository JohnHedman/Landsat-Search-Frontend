import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})

export class SearchInputComponent {
  @Output() search = new EventEmitter<any>();

  searchForm = new FormGroup({
    longitude: new FormControl(-96, Validators.required),
    latitude: new FormControl(44, Validators.required),
    cloud_cover: new FormControl(),
    sun_elevation: new FormControl(),
    start_date: new FormControl(),
    end_date: new FormControl()
  });

  onSearch() {
    if (this.searchForm.valid) {
      this.search.emit(this.searchForm.value);
    }
  }
}
