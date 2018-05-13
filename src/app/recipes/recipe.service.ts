import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes.model";


export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test recipe', 'Simply a test recipe','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
        new Recipe('Test recipe 1', 'Simply a test recipe 1','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
    
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}