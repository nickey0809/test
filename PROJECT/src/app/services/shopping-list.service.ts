import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  IngredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[]=[
    new Ingredient('Aplles', 5),
    new Ingredient('Orange', 10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }
  addIngredientsto(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredients(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }
}
