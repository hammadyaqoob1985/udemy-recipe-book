import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingrdientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingrdientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients : Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingrdientsChanged.emit(this.ingredients.slice());
      }
}