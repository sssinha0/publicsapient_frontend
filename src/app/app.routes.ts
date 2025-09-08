import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchPageComponentComponent } from './search-page-component/search-page-component.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

export const routes: Routes = [
    {path: '',
        component: HomeComponent
    },
    {path: 'search',
        component: SearchPageComponentComponent
    },{
        path: 'recipe',
        component: RecipeDetailsComponent
    }
];
