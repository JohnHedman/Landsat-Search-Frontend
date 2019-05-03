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
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider} from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SceneItemComponent,
    SceneCatalogComponent,
    MenuToolbarComponent,
    SearchInputComponent,
    SearchInputComponent,
    GoogleMapComponent,
    GoogleSigninComponent
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
      apiKey: 'AIzaSyAJr5f3WhbdybWw6fxgx6W21Ht4xvpMsYs'
    }),
    SocialLoginModule
  ],
  providers: [HttpService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
