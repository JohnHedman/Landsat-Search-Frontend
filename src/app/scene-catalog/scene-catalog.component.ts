import { Component, OnInit, Injectable } from '@angular/core';
import { $ } from 'protractor';
import { httpFactory } from '@angular/http/src/http_module';
import { Http } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-scene-catalog',
  templateUrl: './scene-catalog.component.html',
  styleUrls: ['./scene-catalog.component.css']
})

export class SceneCatalogComponent implements OnInit {

  latitudeInput = '';
  longitudeInput = '';
  sceneItems = [];
  noResults = false;
  currentlySearching = false;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }

  onSearchElastic() {
    // Empty the scenes already gathered!
    this.currentlySearching = true;
    this.sceneItems = [];
    const body = '?lat=' + this.latitudeInput + '&lon=' + this.longitudeInput;
    this.httpService.getItems(body)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log('Error:' + error)
      );

    this.currentlySearching = false;
  }
}
