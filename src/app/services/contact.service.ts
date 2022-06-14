import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private url: string = 'https://dummyjson.com/products/add';

  constructor() { }

  public postForm( payload: any ) {
    return fetch( this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json());
  };
};
