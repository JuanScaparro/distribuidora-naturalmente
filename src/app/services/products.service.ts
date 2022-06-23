import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = 'http://localhost:3000/products';

  constructor() { }

  public getProducts() {
    return fetch( this.url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json());
  };

  public postProduct( payload: any ) {
    return fetch( this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json());
  };
}
