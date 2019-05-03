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

  onSearchElastic(parameters: any) {
    // Empty the scenes already gathered!
    console.log(parameters);
    this.currentlySearching = true;
    this.sceneItems = [];

    if (parameters.scenes) {
      this.getScenes(parameters.scenes);
    } else {
      const body = this.buildQueryString({
        lat: parameters.latitude,
        lon: parameters.longitude,
        cc: parameters.cloud_cover,
        se: parameters.sun_elevation,
        sd: this.parseQueryDate(parameters.start_date),
        ed: this.parseQueryDate(parameters.end_date)
      });

      console.log(`Query: ${body}`);

      this.httpService.getItems(body)
        .subscribe(
          (response) => this.checkResponse(response),
          (error) => console.error('Error:' + error)
        );
    }

    this.currentlySearching = false;
  }


  checkResponse(response) {
    const bucketURL = 'https://s3-us-west-2.amazonaws.com/landsat-pds/';
    const results = JSON.parse(response._body).hits.hits;
    results.forEach(element => {
      const scene: SceneItem = {
        id: element._id,
        date: element._source.scene_date,
        cloud_cover: element._source.cloud_cover,
        scene_id: element._source.scene_id,
        wrs_path: element._source.wrs_path,
        wrs_row: element._source.wrs_row,
        s3_location: bucketURL + element._source.s3_location,
        sun_azimuth: element._source.sun_azimuth,
        sun_elevation: element._source.sun_elevation,
        small_thumbnail: bucketURL + element._source.s3_location + element._id + '_thumb_small.jpg',
        large_thumbnail: bucketURL + element._source.s3_location + element._id + '_thumb_large.jpg',
      };
      console.log('New Object: ' + JSON.stringify(scene));
      this.sceneItems.push(scene);
    });
  }

  private async getScenes(sceneIds: string[]) {
    for (const id of sceneIds) {
      this.checkResponse(await this.httpService.getScene(this.buildQueryString({ ID: id })).toPromise());
    }
  }

  private buildQueryString(searchParameters: any) {
    let queryString = '';
    let firstParam = true;
    for (const param in searchParameters) {
      if (searchParameters[param]) {
        const start = firstParam ? '?' : '&';
        queryString += `${start}${param}=${searchParameters[param]}`;
        firstParam = false;
      }
    }
    return queryString;
  }

  private parseQueryDate(date: Date) {
    if (date) {
      const month = date.getMonth() + 1;
      const formattedMonth = month < 10 ? '0' + month : month;

      const day = date.getDate();
      const formattedDay = day < 10 ? '0' + day : day;

      return `${date.getFullYear()}-${formattedMonth}-${formattedDay}`;
    }
  }
}
