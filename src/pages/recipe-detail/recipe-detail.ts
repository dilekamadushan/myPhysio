import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import { Recipe } from '../../models/recipe';
@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html'
})
export class RecipeDetailPage {

  recipe: Recipe;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
      this.recipe = this.navParams.get("recipe");
  }
  showRestaurants(){
    console.log('rrrrrrrrrrrrrrrrrr');
    this.navCtrl.push('RestaurantPage');
  }
}
