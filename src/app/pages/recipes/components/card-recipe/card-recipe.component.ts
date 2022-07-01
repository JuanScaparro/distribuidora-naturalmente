import { Component, Input, OnInit } from '@angular/core';
import { CardRecipeMessage } from '../../../../utils/constants';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.css']
})
export class CardRecipeComponent implements OnInit {

  public cardRecipeMessage: any;

  @Input() recipe: any;

  constructor() {
    this.cardRecipeMessage = CardRecipeMessage;
  }

  ngOnInit(): void {
  }

}
