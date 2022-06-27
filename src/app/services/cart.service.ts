import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProductPayload } from '../interfaces/IProductPayload.interface';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private initialState: IProductPayload[] = [];

  private readonly _productsSource = new BehaviorSubject<IProductPayload[]>(this.initialState);

  // Exposed observable (read-only).
  readonly products$ = this._productsSource.asObservable();


  constructor() { }


  public getProducts(): IProductPayload[] {
    return this._productsSource.getValue();
  }

  private _setProducts(products: IProductPayload[]): void {
    this._productsSource.next(products);
  }

  public addProduct(productPayload: IProductPayload): void {
    const products = [...this.getProducts(), productPayload];
    this._setProducts(products);
  }
}
