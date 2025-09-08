import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';
import { RecipeStoreService } from '../../service/recipe-store.service';

@Component({
  selector: 'app-recipe-details',
  imports: [MatIconModule,CommonModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  recipe:any;
  constructor(private router:Router,private api: RecipeService,private recipeStore: RecipeStoreService) { }
  ngOnInit(){
    this.api.getRecipeDetails(this.recipeStore.getRecipeIdSnapshot()).subscribe((data:any)=>{
      this.recipe=data;
    });
  }
  goBack(){
    this.router.navigate(['/search']);
  }
}
