import { Ingredient } from "../shared/ingredient.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
      }
}