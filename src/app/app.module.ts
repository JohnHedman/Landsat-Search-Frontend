import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { SceneItemComponent } from './scene-item/scene-item.component';
import { SceneCatalogComponent } from './scene-catalog/scene-catalog.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HttpService } from './scene-catalog/http.service';

@NgModule({
  declarations: [
    AppComponent,
    SceneItemComponent,
    SceneCatalogComponent,
    MenuToolbarComponent,
    MenuButtonComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }