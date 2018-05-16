import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();
constructor(private shoppingListService : ShoppingListService){}
    private recipes: Recipe[] = [
        new Recipe('Test recipe', 
        'Simply a test recipe',
        'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
    [
        new Ingredient('Meat', 1),
        new Ingredient ('French Fries', 20)
    ]),
        new Recipe('Test recipe 1', 
        'Simply a test recipe 1',
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
    ,[
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
    ])
    
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}