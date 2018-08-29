import { Injectable } from '@angular/core';

import { Recipe } from '../../models/recipe';
import { RECIPES } from '../../mock/providers/dinner-recipes';

@Injectable()
export class DinnerRecipesService {

  getRecipes(): Recipe[] {
      return RECIPES;
  }

}
