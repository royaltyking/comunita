import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './controllers/articles';
import { ArticleEComponent } from './controllers/articleE';
import { SignUpComponent } from './controllers/signUp';


import { ProjectsComponent } from './controllers/projects';
import { ProjectEComponent } from './controllers/projectE';

import { AppRoutingModule } from './app-routing.module';

/*SERVICES*/

import { ArticleService } from './models/articles.service';
import { ProjectsService } from './models/projects.service';

@NgModule({
  declarations: [
    AppComponent, 
    ArticlesComponent,
    ArticleEComponent,
    ProjectsComponent,
    SignUpComponent,
    ProjectEComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    ArticleService,
    ProjectsService,


    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
