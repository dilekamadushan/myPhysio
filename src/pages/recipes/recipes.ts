import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import { Recipe } from '../../models/recipe';
import { RecipesService } from '../../providers/recipe/recipes.service';
import { LunchRecipesService } from '../../providers/recipe/lunch-recipes.service';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import {DinnerRecipesService} from "../../providers/recipe/dinner-recipes.service";

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
  recipes: Recipe[];
  searchTerm: string = '';
  foodTime= " For Morning";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public recipesService: RecipesService,  public lunchRecipesService: LunchRecipesService, public dinnerRecipesService: DinnerRecipesService) {

    }

  ionViewDidLoad() {
    this.initializeRecipes();
  }


 initializeRecipes(): void {
    let hour = parseInt(new Date().getHours().toString())
    if(10>hour){
      console.log('morning')
      console.log(hour);
      this.recipes = this.recipesService.getRecipes();
      this.foodTime =" For Breakfast"
    }
  else if(15>hour){
     console.log('lunch')
     console.log(hour);
     this.recipes = this.lunchRecipesService.getRecipes();
     this.foodTime =" For Lunch"
   }
    else{
      this.recipes = this.dinnerRecipesService.getRecipes();
      this.foodTime =" For Dinner"
    }

  }

  onSelect(recipe: Recipe): void {
    this.navCtrl.push('RecipeDetailPage', {recipe: recipe});
  }

  searchRecipes(){

      // Reset recipes array back to all of the items
      this.initializeRecipes();

      // if the search term is an empty string return all items
      if (!this.searchTerm) {
        return this.recipes;
      }

      // Filter recipes
      this.recipes = this.recipes.filter((item) => {
          return item.recipeName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
}
