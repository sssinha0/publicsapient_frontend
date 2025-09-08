import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  MatIconModule } from '@angular/material/icon';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { Router } from '@angular/router';
import { RecipeStoreService } from '../../service/recipe-store.service';

@Component({
  selector: 'app-recipe-card',
  imports: [RecipeDetailsComponent,MatIconModule,FormsModule,CommonModule],
  templateUrl: './recipe-card-component.component.html',
  styleUrl: './recipe-card-component.component.css'
})
export class RecipeCardComponentComponent implements OnInit{
  constructor(private router:Router,private recipeStore: RecipeStoreService) { }
viewDetails(arg0: any) {
  this.recipeStore.setRecipeId(arg0?.id);
  this.router.navigate(['/recipe']);
}
  @Input() recipe:any;
  ngOnInit(){
  }
}
