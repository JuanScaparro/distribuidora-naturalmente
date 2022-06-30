import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private url: string = 'http://localhost:3000/recipes';

  constructor( private http: HttpClient ) { }

  public getRecipes() {
    return this.http.get( this.url )
  }
}
