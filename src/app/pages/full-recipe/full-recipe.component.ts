import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { RecipesService } from '../../services/recipes.service';

import { IRecipe } from 'src/app/interfaces/IRecipe.interface';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css'],
})
export class FullRecipeComponent implements OnInit {
  public isRecipeLoaded: boolean  = false;
  private recipe: IRecipe | null = null;
  private recipeSubscription$: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeSubscription$ = this.recipesService
      .getRecipe(this.route.snapshot.params['id'])
      .subscribe({
        next: (recipe) => this.setRecipe(recipe),
        error: (error) => this.handleError(error),
        complete: () => this.recipeUnsubcription(),
      });
  }

  public getRecipe(): IRecipe {
    return this.recipe!
  }

  private setRecipe(recipe: IRecipe):void {
    this.recipe = recipe;
    this.isRecipeLoaded = true;
  }

  private handleError(error: any): void {
    this.router.navigate(['/recetas']);
  }

  private recipeUnsubcription(): void {
    this.recipeSubscription$.unsubscribe();
  }

}
