import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeStoreService {
  // holds the latest value, starts with empty array
  private recipesSubject = new BehaviorSubject<any[]>([]);
  public recipes$: Observable<any[]> = this.recipesSubject.asObservable();
  private recipId = new BehaviorSubject<number>(0);
  public recipeId$: Observable<number> = this.recipId.asObservable();
  constructor() {}

  // set or update data
  setRecipes(recipes: any[]) {
    this.recipesSubject.next(recipes);
  }
  setRecipeId(id: number) { 
    this.recipId.next(id);
  }
  getRecipeIdSnapshot(): number {
    return this.recipId.getValue();
  }

  // fetch current value synchronously
  getRecipesSnapshot(): any[] {
    return this.recipesSubject.getValue();
  }

  // clear all recipes
  clearRecipes() {
    this.recipesSubject.next([]);
  }
}

