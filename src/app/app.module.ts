import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import { LandingComponent } from './components/landing/landing.component';
import {AppRoutingModule} from './app.routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {initializeKeycloak} from './utility/keycloak.init';
import {AuthGuard} from './guards/auth.guard';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './services/auth.service';
import {SplashScreenComponent} from './views/splash-screen/splash-screen.component';
import {LanguageSelectorComponent} from './views/language-selector/language-selector.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslationService} from './services/translation.service';
import {GooglePlaceModule} from "ngx-google-places-autocomplete";
import {LandingGuard} from "./guards/landing.guard";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {DialogDataExampleDialog} from "./components/landing/DialogDataExampleDialog";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SplashScreenComponent,
    LanguageSelectorComponent,
    DialogDataExampleDialog

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
    AppRoutingModule,
    KeycloakAngularModule,
    CommonModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot(),
    GooglePlaceModule,
    MatDialogModule,
    MatIconModule

  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    AuthGuard,
    UserService,
    TranslationService,
    TranslateService,
    LandingGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialog]
})
export class AppModule { }
