import { Injectable } from '@angular/core';

import { Recipe } from '../../models/recipe';
import { RECIPES } from '../../mock/providers/lunch-recipes';

@Injectable()
export class LunchRecipesService {

  getRecipes(): Recipe[] {
      return RECIPES;
  }

}
