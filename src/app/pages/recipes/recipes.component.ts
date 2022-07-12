import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { RecipesService } from '../../services/recipes.service';

import { IRecipe } from '../../interfaces/IRecipe.interface';

import { RecipesTitle } from '../../utils/constants';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  private recipesSubscription$ : Subscription;
  public recipes: IRecipe[] = []

  public recipesTitle: any;

  constructor( private recipesService: RecipesService ) {
    this.recipesSubscription$ = new Subscription;
    this.recipesTitle = RecipesTitle;
  }

  ngOnInit(): void {


    this.recipesSubscription$ = this.recipesService.getRecipes()
                      .subscribe( 
                        (recipes: IRecipe[]) => this.recipes =  recipes 
                      )

  }

  ngOnDestroy(): void {
    this.recipesSubscription$.unsubscribe();
  };

 

}
