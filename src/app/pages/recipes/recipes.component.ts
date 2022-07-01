import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../../services/recipes.service';

import { Subscription } from 'rxjs';

import { IRecipe } from '../../interfaces/IRecipe.interface';

import { RecipesTitle } from '../../utils/constants';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  private recipe$ : Subscription;
  public recipes: IRecipe[] = []

  public recipesTitle: any;

  constructor( private recipesService: RecipesService ) {
    this.recipe$ = new Subscription;
    this.recipesTitle = RecipesTitle;
  }

  ngOnInit(): void {
    this.recipe$ = this.recipesService.getRecipes().subscribe( data => this.getRecipe( data ) )
  }

  ngOnDestroy(): void {
    this.recipe$.unsubscribe();
  };

  public getRecipe( data: any ) {
    this.recipes = data
  }

}
