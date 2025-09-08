import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { RecipeCardComponentComponent } from '../recipe-card-component/recipe-card-component.component';
import { RecipeService } from '../../service/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RecipeStoreService } from '../../service/recipe-store.service';

type SortKey = 'relevance' | 'ratingDesc' | 'prepAsc';

@Component({
  selector: 'app-search-page-component',
  imports: [
    RecipeCardComponentComponent,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    CommonModule,
    MatGridListModule,
    MatListModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './search-page-component.component.html',
  styleUrl: './search-page-component.component.css'
})
export class SearchPageComponentComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(RecipeService);
  private recipeStore = inject(RecipeStoreService);
  private fb = inject(FormBuilder);
  private destroy$ = new Subject<void>();
  loading = false;
  // Sorting
  sort: SortKey = 'relevance';
  sort$ = new BehaviorSubject<SortKey>('relevance');

  // Filters
  readonly mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Brunch', 'Teatime'];
  readonly cuisines = ['Indian', 'Italian', 'Chinese', 'Mexican', 'Mediterranean', 'American', 'Thai', 'Japanese'];

  rating: number = 0;
  filtersForm = this.fb.nonNullable.group({
    maxPrep: 60,
    minRating: this.fb.nonNullable.control<number | null>(null),
    cookTime: this.fb.nonNullable.control<number | null>(null),
    mealTypes: this.fb.nonNullable.control<string[]>([]),
    cuisine: this.fb.nonNullable.control<string>(''),
  });

  recipeData$: any;
  filtered$: any;

  ngOnInit(): void {
    const queryFromSession = sessionStorage.getItem('searchQuery') || '';
    const initialQ = this.route.snapshot.queryParamMap.get('q') ?? '';

    sessionStorage.setItem('searchQuery', initialQ);
    this.recipeData$ = this.recipeStore.getRecipesSnapshot();

    const needsFetch =
      !(this.recipeData$?.content?.length > 0) ||
      (queryFromSession !== initialQ && initialQ);

    if (needsFetch) {
      this.loading = true;  // ⏳ show spinner
      this.api.searchRecipes(initialQ)?.subscribe((data: any) => {
        this.recipeData$ = data;
        this.recipeStore.setRecipes(data);
        this.filtered$ = { ...data };
        this.loading = false; // ✅ hide spinner
      },(err) =>{ 
      this.loading = false 
      });// ✅ hide spinner);
    } else {
      this.filtered$ = { ...this.recipeData$ };
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  resetFilters(): void {
    this.filtersForm.reset({
      maxPrep: 60,
      mealTypes: [],
      cuisine: ''
    });
    this.filtered$ = { ...this.recipeData$ };
  }

  get filters() {
    return this.filtersForm.getRawValue();
  }

  // =========================
  // Filtering Methods
  // =========================

  onCookTimeChange(e: MatChipListboxChange) {
    if (e.value === 'ANY') {
      this.filtered$ = { ...this.recipeData$ };
      return;
    }

    const [first, second] = e.value.split('_');
    const minCookTime = parseInt(first);
    const maxCookTime = parseInt(second);

    this.filtered$ = {
      ...this.recipeData$,
      content: this.recipeData$.content.filter((r: any) => {
        const cookTime = r.prepTimeMinutes ?? 0;

        if (!isNaN(minCookTime) && !isNaN(maxCookTime)) {
          return cookTime >= minCookTime && cookTime <= maxCookTime;
        } else if (first === 'LT' && !isNaN(maxCookTime)) {
          return cookTime <= maxCookTime;
        } else if (first === 'GT' && !isNaN(maxCookTime)) {
          return cookTime >= maxCookTime;
        }
        return true;
      })
    };

    this.updateCount();
  }

  onMealTypesChange(e: MatChipListboxChange) {
    const mealTypes = e.value;
    this.filtered$ = !mealTypes?.length
      ? { ...this.recipeData$ }
      : {
          ...this.recipeData$,
          content: this.recipeData$.content.filter((r: any) =>
            mealTypes.some((mt: string) => (r.mealType ?? []).includes(mt))
          )
        };
    this.updateCount();
  }

  onCuisineChange(e: MatSelectChange) {
    const cuisine = e.value;
    this.filtered$ =
      !cuisine || cuisine === 'ANY'
        ? { ...this.recipeData$ }
        : {
            ...this.recipeData$,
            content: this.recipeData$.content.filter((r: any) => r.cuisine === cuisine)
          };
    this.updateCount();
  }

  setMinRating(val: number) {
    this.rating = val;
    this.filtered$ =
      val === 0
        ? { ...this.recipeData$ }
        : {
            ...this.recipeData$,
            content: this.recipeData$.content.filter((r: any) => (r.rating ?? 0) >= val)
          };
    this.updateCount();
  }

  // =========================
  // Sorting
  // =========================

  onSortChange() {
    if (!this.filtered$?.content) return;

    switch (this.sort) {
      case 'ratingDesc':
        this.filtered$.content.sort(
          (a: any, b: any) => (b.rating ?? 0) - (a.rating ?? 0)
        );
        break;
      case 'prepAsc':
        this.filtered$.content.sort(
          (a: any, b: any) => (a.prepTimeMinutes ?? 0) - (b.prepTimeMinutes ?? 0)
        );
        break;
      default:
        // relevance - do nothing
        break;
    }
  }

  // =========================
  // Helpers
  // =========================

  private updateCount() {
    this.filtered$.numberOfElements = this.filtered$?.content?.length ?? 0;
  }
}
