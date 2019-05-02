import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SceneItemComponent } from './scene-item/scene-item.component';
import { SceneCatalogComponent } from './scene-catalog/scene-catalog.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HttpService } from './scene-catalog/http.service';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SceneItemComponent,
    SceneCatalogComponent,
    MenuToolbarComponent,
    SearchInputComponent,
    MenuButtonComponent,
    SearchInputComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4GdTMBRoEROp2ADAGCAiaqjzRby0XjRM'
    })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
