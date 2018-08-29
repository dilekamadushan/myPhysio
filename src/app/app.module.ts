import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HttpModule} from "@angular/http";
import {BLE} from '@ionic-native/ble';
import {AndroidPermissions} from "@ionic-native/android-permissions";
import { Health } from '@ionic-native/health';
import { FitnessProvider } from '../providers/fitness/fitness';
import {RecipesService} from "../providers/recipe/recipes.service";
import {LunchRecipesService} from "../providers/recipe/lunch-recipes.service";
import {DinnerRecipesService} from "../providers/recipe/dinner-recipes.service";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    Health,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FitnessProvider,
    RecipesService,
    LunchRecipesService,
    DinnerRecipesService
  ]
})
export class AppModule {
}
