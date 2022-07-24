import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { IRecipe } from '../interfaces/IRecipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private url: string = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  public getRecipes(): Observable<IRecipe[]> {
    return this.http.get(this.url) as Observable<IRecipe[]>;
  }

  public getRecipe(id: number): Observable<IRecipe> {
    return this.http.get(`${this.url}/${id}`) as Observable<IRecipe>;
  }
}
