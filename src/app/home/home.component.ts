import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../service/recipe.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule,RouterModule,MatIconModule,FormsModule,MatInputModule,MatButtonModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  q:string="";
  constructor(private api: RecipeService,private route: Router) { 
    this.api.fetchAllRecipes().subscribe((data:any)=>{
      console.log("success");
    });
  }
  quick(event:string){

  }
  submit(){
    if(this.q){
    this.route.navigate(['/search'], { queryParams: { q: this.q } });
    }else{
      alert("Please enter a search term");
    }
  }

}
