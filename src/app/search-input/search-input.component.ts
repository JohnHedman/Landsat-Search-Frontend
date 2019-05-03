import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Coordinates } from '../google-map/google-map.component';
import { HttpService } from '../scene-catalog/http.service';
import { UserService } from '../google-signin/user.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})

export class SearchInputComponent implements OnInit {
  @Output() search = new EventEmitter<any>();

  coordinates: Coordinates = {
    latitude: 44.3114,
    longitude: -96.7984
  };

  scenes: string[] = [];

  searchForm = new FormGroup({
    longitude: new FormControl(null, Validators.required),
    latitude: new FormControl(null, Validators.required),
    cloud_cover: new FormControl(null, [Validators.min(0), Validators.max(100)]),
    sun_elevation: new FormControl(null, [Validators.min(0), Validators.max(100)]),
    start_date: new FormControl(),
    end_date: new FormControl()
  });

  constructor(private http: HttpService, private userService: UserService) { }

  ngOnInit() {
  }

  onSearch() {
    if (this.searchForm.valid) {
      this.search.emit(this.searchForm.value);
    }
  }

  onSearchFavorites() {
    this.http.getFavorites(`?User=${this.userService.currentUser.name}`)
      .pipe(switchMap((response: any) => {
        const body = JSON.parse(response._body);
        return of(body.List);
      })).subscribe(scene => {  this.search.emit({ scenes: scene }); });
  }
}
