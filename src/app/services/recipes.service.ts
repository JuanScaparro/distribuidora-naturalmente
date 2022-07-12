import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from "uuid";
import { IRecipe } from '../interfaces/IRecipe.interface';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private url: string = 'http://localhost:3000/recipes';

  constructor( private http: HttpClient ) {
   
   }

  public getRecipes(): Observable<IRecipe[]> {
    return this.http.get( this.url ) as  Observable<IRecipe[]>
  }

  // public updateRecipes(){
  //   let recipes: IRecipe[] = []

  //   // Obtener listado de recetas
  //   this.getRecipes().subscribe(recs => {
  //     recipes = recs;

  //     // Modificar el listado obtenido
  //     recipes = recipes.map( recs => (
  //       {
  //         ...recs,
  //         id: uuid()
  //       }
  //     ))
  //     console.log('Recipes modify', recipes)

  //     // Reescribir el listado de recetas modificadas en db.json
  //     this.http.post( this.url, recipes).pipe(take(1)).subscribe( recipes => console.log(recipes))

  //   })

  // }
}
