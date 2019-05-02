import { Component, OnInit, Injectable } from '@angular/core';
import { $ } from 'protractor';
import { httpFactory } from '@angular/http/src/http_module';
import { Http } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpService } from './http.service';
import { SceneItem } from '../scene-item/scene-item.model';

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
        (response) => this.checkResponse(response),
        (error) => console.log('Error:' + error)
      );

    this.currentlySearching = false;
  }

  checkResponse(response){
    this.sceneItems.push(response.body);
    console.log(response);
    console.log("Body: " + response._body);
    const results = JSON.parse(response._body).hits.hits;
    results.forEach(element => {
      console.log(element._id);   
      const scene: SceneItem = {
        id : element._id,
        date : element._source.cloud_cover,
        cloud_cover : element._source.cloud_cover,
        scene_id : element._source.scene_id,
        wrs_path : element._source.wrs_path,
        wrs_row : element._source.wrs_row,
        s3_location : element._source.s3_location,
        sun_azimuth : element._source.sun_azimuth,
        sun_elevation : element._source.sun_elevation,
        small_thumbnail : element._source.s3_location + element._id + "_thumb_small.jpg",
        large_thumbnail : element._source.s3_location + element._id + "_thumb_large.jpg",
      }
      this.sceneItems.push(scene); 
    });
    console.log("Next: " + JSON.stringify(JSON.parse(response._body).hits.hits));
  }
}
