import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe: Recipe
  constructor(private recipseService : RecipeService) { }

  ngOnInit() {
  }
  sendIngredientsToShoppingList() {
  this.recipseService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
