import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { 
     
   }
    searchRecipes(query: string):Observable<any[]> {  
    return this.httpClient.get<any[]>(`${environment.getRecipe}?query=${query}`);
    }
    fetchAllRecipes() {
      return this.httpClient.post<any[]>(`${environment.fetchAllRecipes}`,{});
    }
    getRecipeDetails(id: number):Observable<any> {
      return this.httpClient.get<any>(`${environment.getRecipe}/${id}`);
    }
}
